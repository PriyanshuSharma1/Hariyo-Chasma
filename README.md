# Hariyo Chasma Project
## Overview
The Hariyo Chasma Project aims to tackle the problem of littering by using AI-based surveillance. Our project involves a mobile application for user authentication and a machine learning model for detecting littering incidents using CCTV footage.

## Table of Contents
- Installation
- Usage
- Contributing
- License

## Installation
### Prerequisites
- Node.js
- React Native
- Expo CLI
- Python 3.x
- Ultralytics YOLO
- Roboflow API Key

 
## Setup
1. Clone the repository:
   ```
   git clone https://github.com/PriyanshuSharma1/hariyo-chasma.git
   cd hariyo-chasma

   ```
1. Install dependencies for the React Native app:
   ```
   cd mobile-app
   npm install
   ```
1. Install Python dependencies:
   ```
   pip install ultralytics roboflow

   ```
1. Set up the Roboflow project:
   ```
    from roboflow import Roboflow
    rf = Roboflow(api_key="YOUR_API_KEY")
    project = rf.workspace("hariyo-chasma").project("hariyo-chasma-labelled-dataset")
    version = project.version(2)
    dataset = version.download("yolov9")

   ```
