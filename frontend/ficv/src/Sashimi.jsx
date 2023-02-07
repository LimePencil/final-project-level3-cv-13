import BasicBar from "./components/bars";
import { useState } from "react";
import SubmitImageButton from "./components/submitImageButton";
import { Typography } from "@mui/material";
import Image from "./components/displayImage";
import { SmallTitle } from "./components/title";
import { DescWhite, MainDescWhite } from "./components/main_desc";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Tutorial from "./components/tutorial";
import RefreshButton from "./components/refreshButton";
import ReactionButton from "components/reaction";

async function getModel(setModelName){
  try {
    const response = await fetch(
      "https://fast-api-backend-nzhkc6v44a-du.a.run.app/blob_name_sashimi",
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
export default function Sashimi() {
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
    "민어",
    "점성어",
    "연어",
    "참치",
    "방어",
  ];
  return (
    <BasicBar>
      <SmallTitle>
        회 분류 서비스 <Tutorial></Tutorial>
      </SmallTitle>
      <br />
      <Box display="flex" justifyContent="center" alignItems="center" paddingBottom={10}>
        <Box
          padding={5}
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            borderRadius: "20px",
          }}
        >
          <MainDescWhite>분류 가능한 회 종류</MainDescWhite>
          <DescWhite>
            광어, 우럭, 참돔, 민어, 점성어, 연어, 참치, 방어
          </DescWhite>
        </Box>
      </Box>
      <Image image={selectedImage} setImage={setSelectedImage} setanswered={setanswered}></Image>
      <SubmitImageButton
        image={selectedImage}
        inference={setlabel}
        link="https://fast-api-backend-nzhkc6v44a-du.a.run.app/inference_sashimi"
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
      <Typography
        display="flex"
        justifyContent="right"
        alignItems="center"
        color="text.secondary"
        paddingTop={40}
      >
       {modelName}
       <RefreshButton ></RefreshButton>
      </Typography>
    </BasicBar>
  );
}
