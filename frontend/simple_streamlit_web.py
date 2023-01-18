import streamlit as st
from PIL import Image
import io
import requests
import time

def get_prediction(picture):
    t=time.time()
    image_bytes = picture.getvalue()
    image = Image.open(io.BytesIO(image_bytes))
    image = image.convert('RGB')

    st.image(image, caption='Uploaded Image',use_column_width=True)
    with st.spinner("Predicting Image..."):
        response = requests.post("https://fast-api-backend-nzhkc6v44a-du.a.run.app/inference", files={'files': image_bytes})
        label = response.json()
    st.metric("Type",label)
    st.metric("Time Taken",f"{time.time()-t:.3f} sec")

@st.experimental_singleton
def start():
    requests.get("https://fast-api-backend-nzhkc6v44a-du.a.run.app/")

start()

st.title("FICV")

genre = st.radio(
    "Image Mode:",
    ('Upload', 'Camera'))

if genre == 'Upload':
    uploaded_file = st.file_uploader("Choose an image", type=["jpg", "jpeg","png"])
    if uploaded_file:
        get_prediction(uploaded_file)
else:
    picture = st.camera_input("Take a picture")
    if picture:
        get_prediction(picture)


st.markdown("<h6 style='text-align: right; color: grey'> Created by BoostCamp CV-13 </h6>",unsafe_allow_html=True)