import BasicBar from "./components/bars";
import { useState } from "react";
import SubmitImageButton from "./components/submitImageButton";
import { Typography } from "@mui/material";
import Image from "./components/displayImage";
import { SmallTitle } from "./components/title";
import { DescWhite,MainDescWhite } from "./components/main_desc";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Tutorial from "./components/tutorial";
import RefreshButton from "./components/refreshButton";
import ReactionButton from "components/reaction";

async function getModel(setModelName){
  try {
    const response = await fetch(
      "https://fast-api-backend-nzhkc6v44a-du.a.run.app/blob_name",
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    setModelName( await response.json());
  } catch (err) {
    console.log("Error >>", err);
  }
}

export default function Fish() {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [label, setlabel] = useState(null);
  const [modelName, setModelName] = useState("None");
  const [answered, setanswered] = useState(null);
  getModel(setModelName)

  const num2str = [
    "광어",
    "우럭",
    "참돔",
    "감성돔",
    "돌돔",
    "민어",
    "큰민어",
    "강도다리",
    "자바리",
    "능성어",
    "방어",
    "부시리",
  ];
  return (
    <BasicBar>
      <SmallTitle>물고기 분류 서비스 <Tutorial></Tutorial></SmallTitle>
      <br />
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ borderRadius: '16px' }} paddingBottom={10}>
        <Box
          padding={5}
          style={{
            "backgroundImage": `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            borderRadius: '20px',
          }}
        >
          <MainDescWhite>분류 가능한 어종</MainDescWhite>
          <DescWhite>
            광어, 우럭, 참돔, 감성돔, 돌돔, 민어, 큰민어, 강도다리, 자바리,
            능성어, 방어, 부시리
          </DescWhite>
        </Box>
      </Box>
      <Image image={selectedImage} setImage={setSelectedImage} setanswered={setanswered}></Image>
      <SubmitImageButton
        image={selectedImage}
        inference={setlabel}
        link="https://fast-api-backend-nzhkc6v44a-du.a.run.app/inference"
        setanswered={setanswered}
      />
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="h5"
      >
        {label != null ? <p>예측 결과: {num2str[label[0]]}   |   예측 확률: {label[1]}%</p> : <p></p>}
      </Typography>
      <ReactionButton label={label} answered={answered} setanswered={setanswered}></ReactionButton>
      <Box>
      <Typography
        display="flex"
        justifyContent="right"
        alignItems="center"
        paddingTop={40}
        color="text.secondary"
        >
        {modelName}
        <RefreshButton ></RefreshButton>
      </Typography>
      
      </Box>
    </BasicBar>
  );
}
