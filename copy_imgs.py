import os
import glob
import shutil

brain = r"C:\Users\acer\.gemini\antigravity-ide\brain\f08792a6-3edc-422e-a69e-47763ff8a997"
target = r"c:\Users\acer\OneDrive\Desktop\data web v2\public\images"

mapping = {
    "dataset_sourcing": "dataset_sourcing.jpg",
    "data_cleaning": "data_cleaning.jpg",
    "data_sampling": "data_sampling.jpg",
    "metadata_schema": "metadata_schema.jpg",
    "data_annotation": "data_annotation.jpg",
    "data_qa": "data_qa.jpg",
    "training_prep": "training_prep.jpg",
    "model_evaluation": "model_evaluation.jpg",
    "synthetic_data": "synthetic_data.jpg",
    "production_monitoring": "production_monitoring.jpg"
}

for prefix, dest_name in mapping.items():
    files = glob.glob(os.path.join(brain, f"{prefix}_*.jpg"))
    if files:
        latest = sorted(files)[-1]
        dest = os.path.join(target, dest_name)
        shutil.copyfile(latest, dest)
        print(f"Copied {os.path.basename(latest)} -> {dest_name}")
    else:
        print(f"No file found for {prefix}")

print("Available in target:")
for f in sorted(os.listdir(target)):
    if f.endswith('.jpg'):
        print(" ", f)
