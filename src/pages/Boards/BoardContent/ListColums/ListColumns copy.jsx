import Box from "@mui/material/Box";
import Column from "./Column/Column";
import { Button } from "@mui/material";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";

function ListColumns({ columns }) {
  return (
    <Box
      sx={{
        overflowY: "hidden",
        overflowX: "auto",
        width: "100%",
        height: "100%",
        backgroundColor: "inherit",
        display: "flex",
        gap: 2,
        p: "0 16px",
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#b2dfdb",
        },
        "&::-webkit-scrollbar-track": {
          m: "0 16px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#b2ebf2",
        },
      }}
    >
      {/* Column */}
      {columns?.map((column) => {
        return <Column key={column._id} column={column} />;
      })}
      <Box
        sx={{
          bgcolor: "#ffffff3c",
          height: "fit-content",
          borderRadius: "6px",
          minWidth: "200px",
          maxWidth: "200px",
        }}
      >
        <Button
          sx={{
            color: "white",
            ml: 1.5,
            py: 1,
          }}
          startIcon={<PostAddOutlinedIcon />}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
