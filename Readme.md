# AI Image Recognition Android Demo App

This repository contains an Android demo application that utilizes AI for image recognition. The app allows users to classify images and provides information based on the recognized content.

## Installation

### Prerequisites

- Android Studio installed
- Android device or emulator configured
- Python installed
- Ngrok installed

### Clone the Repository

```bash
git clone https://github.com/Khalil-Bchir/AI-Image-Recognition-Android-Demo-App.git
cd AI-Image-Recognition-Android-Demo-App
```

## Usage

### Running the Python Server with Ngrok

1. Navigate to the backend directory:

   ```bash
   cd api
   ```

2. Start your Python server. For example:

   ```bash
   python app.py
   ```

3. Use ngrok to expose your local server to the internet. In a separate terminal window, run:

   ```bash
   ngrok http 5000
   ```

   Replace `5000` with the port your Python server is running on, if different.

4. Ngrok will provide a public URL (e.g., `http://abcdef1234.ngrok.io`). Update your Android app's configuration to use this URL for API requests.

### Running the Android App

1. Open Android Studio.
2. Navigate to `File > Open` and select the cloned project directory (`AI-Image-Recognition-Android-Demo-App`).
3. Wait for Android Studio to sync the project and build it.
4. Connect an Android device via USB or use an emulator.
5. Build and run the application (`Run > Run 'app'` or `Shift + F10`).

## How to Use

1. Launch the application on your Android device or emulator.
2. Capture a new image using the device camera or select an existing image from the gallery.
3. The app will use AI to classify the image.
4. View the recognized content and additional information provided by the app.

## Contributing

Contributions are welcome! If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For questions or feedback, please contact mohamedkhalil.bcir@polytechnicien.tn.