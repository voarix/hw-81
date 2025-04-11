import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../../zodSchemas/productsSchemas";
import { selectShortUrlLoading } from "../linksSlice";
import { useAppSelector } from "../../../app/hooks";

interface ILinkForm {
  originalUrl: string;
}

interface Props {
  onSubmitUrl: (data: ILinkForm) => void;
}

const LinkForm = ({ onSubmitUrl }: Props) => {
  const loading = useAppSelector(selectShortUrlLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILinkForm>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      originalUrl: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmitUrl)}>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ mt: 3, mb: 2 }}>
          <TextField
            fullWidth
            label="Введите URL"
            {...register("originalUrl")}
            error={!!errors.originalUrl}
            helperText={errors.originalUrl?.message}
            required
          />
        </Grid>
        <Grid size={{ sm: 12, md: 6, lg: 6 }}>
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Loading..." : "Shorten"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LinkForm;
