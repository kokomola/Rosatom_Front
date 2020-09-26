import cv2
import onnx
import argparse
import numpy as np
import onnxruntime as ort

from utils import *


class VehicleDetector:
    """YoloV4 Vehicle detector"""
    def __init__(self, model_path, anchors_path, coco_classes):
        super(VehicleDetector, self).__init__()
        self.model_path = model_path
        self.anchors_path = anchors_path
        self.coco_classes = coco_classes
        self.input_size = 416
        self.stride = [8, 16, 32]
        self.xyscale = [1.2, 1.1, 1.05]

    def init_session(self):
        self.session_options = ort.SessionOptions()
        self.session_options.enable_profiling = False
        self.session_options.graph_optimization_level = ort.GraphOptimizationLevel.ORT_ENABLE_ALL
        self.session_options.execution_mode = ort.ExecutionMode.ORT_SEQUENTIAL
        self.session_options.intra_op_num_threads = 3
        self.session_options.graph_optimization_level = ort.GraphOptimizationLevel.ORT_ENABLE_ALL
        self.session = ort.InferenceSession(self.model_path, sess_options=self.session_options)
        self.inputs = self.session.get_inputs()[0].name

    def predict(self, frame):
        orig_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        orig_image_size = frame.shape[:2]

        frame_data = image_preprocess(np.copy(orig_frame), [self.input_size, self.input_size])
        frame_data = frame_data[np.newaxis, ...].astype(np.float32)

        detections = self.session.run(None, {self.inputs: frame_data})
        anchors = get_anchors(self.anchors_path)
        stride = np.array(self.stride)
        classes = read_class_names(self.coco_classes)

        pred_bbox = postprocess_bbbox(detections, anchors, stride, self.xyscale)
        bboxes = postprocess_boxes(pred_bbox, orig_image_size, self.input_size, 0.25)
        bboxes = nms(bboxes, 0.213, method='nms')
        frame = draw_bbox(orig_frame, bboxes, classes=classes)
        return frame


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    arg = parser.add_argument
    arg('-v', '--video', type=str, help='Path to video file')
    args = parser.parse_args()

    cap = cv2.VideoCapture(args.video)
    vh = VehicleDetector('./model/yolov4.onnx', './model/yolov4_anchors.txt', './model/coco.names')
    vh.init_session()

    while cap.isOpened():
        ret, frame = cap.read()
        res = vh.predict(frame)
        cv2.imshow('result', res)
        if cv2.waitKey(1) & 0XFF == ord('q'):
            break
