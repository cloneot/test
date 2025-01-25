import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Chip } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

type Tag = {
  tagId: number;
  tagName: string;
  valueType: "string" | "number";
  value: string | number;
};

const Tags: React.FC = () => {
  const [tagList, setTagList] = useState<Tag[] | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/tags`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버에서 받은 데이터 변환
        const processedTags = data.map((tag: any) => ({
          tagId: tag.tagId,
          tagName: tag.tagName,
          valueType: tag.valueType,
          value: tag.valueType === "number" ? tag.intValue : tag.strValue,
        }));
        setTagList(processedTags);
      });
  }, []);

  if (tagList) {
    return (
      <Container>
        <Grid2 container spacing={3}>
          {tagList.map((tag) => (
            <Grid2 key={tag.tagId}>
              <Card
                style={{ width: "200px", height: "200px", overflow: "hidden" }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {tag.tagName}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{
                      // marginTop: "0.5rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {tag.value}
                  </Typography>
                  <Chip
                    label={tag.valueType === "number" ? "Number" : "String"}
                    color={tag.valueType === "number" ? "primary" : "secondary"}
                    style={{ marginTop: "1rem" }}
                  />
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    );
  }
  return (
    <Container>
      <Typography>Loading Tags...</Typography>
    </Container>
  );
};

export default Tags;
