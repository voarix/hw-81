import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/hooks.ts";
import { shortUrl } from "./linksThunks.ts";
import LinkForm from "./components/LinkForm.tsx";
import LinkShortUrl from "./components/LinkShortUrl.tsx";
import { ILinkForm } from "../../types";

const Links = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (data: ILinkForm) => {
    try {
      await dispatch(shortUrl(data.originalUrl)).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        We short EVERY link
      </Typography>
      <LinkForm onSubmitUrl={onSubmit} />
      <LinkShortUrl />
    </Box>
  );
};

export default Links;
