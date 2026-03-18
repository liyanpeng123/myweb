import cv2
import os

videos = ['p7.mp4', 'p9.mp4', 'r22.mp4', 'r25.mp4', 'r28.mp4']
img_dir = 'img'

for video_file in videos:
    video_path = os.path.join(img_dir, video_file)
    if not os.path.exists(video_path):
        print(f"视频不存在: {video_path}")
        continue
    
    cap = cv2.VideoCapture(video_path)
    ret, frame = cap.read()
    
    if ret:
        thumbnail_name = video_file.replace('.mp4', '.jpg')
        thumbnail_path = os.path.join(img_dir, thumbnail_name)
        cv2.imwrite(thumbnail_path, frame)
        print(f"已生成封面: {thumbnail_path}")
    else:
        print(f"无法读取视频: {video_path}")
    
    cap.release()

print("封面提取完成！")
