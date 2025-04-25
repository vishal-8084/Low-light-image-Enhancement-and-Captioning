from setuptools import setup, find_packages

setup(
    name="image-enhancement-captioning",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "Flask>=2.0.0",
        "Werkzeug>=2.0.0",
        "Pillow>=9.0.0",
        "numpy>=1.20.0",
        "opencv-python>=4.5.0",
        "tensorflow>=2.5.0",
        "torch>=1.9.0",
        "transformers>=4.11.0",
        "Flask-Login>=0.5.0",
    ],
    python_requires=">=3.7",
) 
