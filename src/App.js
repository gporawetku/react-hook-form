import { useForm, Controller } from "react-hook-form";
import "./App.css";
import { Card, Button, Typography, Input } from "@material-tailwind/react";

const defaultValues = {
  firstName: "",
  lastName: "",
};

const values = {
  firstName: "asdasdasd",
  lastName: "asdasd",
};

const App = () => {
  const form = useForm({
    defaultValues,
    values,
  });

  const { control, handleSubmit, reset } = form;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen grid place-items-center bg-gray-50">
      <Card color="white" shadow={true} className="p-7">
        <Typography variant="h4" color="blue-gray">
          React Hook Form
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <br />
        <form className="mb-4 w-[500px] grid grid-cols-2 gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <>
                <Input size="lg" label="First Name" id="firstName" {...field} value={field.value} />
              </>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <>
                <Input size="lg" label="Last Name" id="lastName" {...field} value={field.value} />
              </>
            )}
          />
          <div className="col-span-2 grid grid-cols-2 gap-2">
            <Button type="reset" variant="outlined" onClick={() => reset(defaultValues)}>
              Reset
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default App;
