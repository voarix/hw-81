import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../app/hooks.ts";
import { selectShortUrl } from "../linksSlice.ts";
import { apiUrl } from "../../../globalConstants.ts";

const LinkShortUrl = () => {
  const shortUrl = useAppSelector(selectShortUrl);
  return (
    <>
      {shortUrl && (
        <Box mt={3} display="flex" justifyContent="center">
          Your short link:
          <Typography
            align="center"
            component="a"
            href={`${apiUrl}/links/${shortUrl}`}
            target="_blank"
            sx={{ ml: 1 }}
          >
            http://localhost:8000/{shortUrl}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default LinkShortUrl;
