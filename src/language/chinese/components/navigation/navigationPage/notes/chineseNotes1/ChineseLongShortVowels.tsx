import { Box, Typography } from "@mui/material";

function ChineseLongShortVowels() {
  return (
    <Box>
      <Typography variant="h4" textAlign="center" pt={3} pb={3}>
        Long + Short Vowels/Consanants
      </Typography>
      <Box>
        <Typography>kina / 一个争论 - Kiina, 中国</Typography>
        <Typography>sinä / 你 - siinä / 在那里(there)</Typography>
        <Typography>Mali / 邮件 - maali / 画</Typography>
        <Typography>katua / 遗憾 - kaatua / 跌落</Typography>
        <Typography>sata / 百 - sataa / 下雨</Typography>
        <Typography>-----</Typography>
        <Typography>rapu / 螃蟹 - rapuu / 阶梯</Typography>
        <Typography>kuka / 谁？ - kukka / 花朵</Typography>
        <Typography>lama / 减退、沮丧 - lammas / 睡觉</Typography>
        <Typography>mato / 蠕虫 - matto / 地毯</Typography>
        <Typography></Typography>
      </Box>
    </Box>
  );
}

export default ChineseLongShortVowels;
