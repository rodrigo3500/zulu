import { GridRow, GridColumn, Grid, Image } from "semantic-ui-react";
interface IProps {
  gridItems: string[];
}
const PostingGrid = ({ gridItems }: IProps) => (
  <Grid columns={3}>
    {gridItems.map((image, index) => (
        // Ensure each row contains three columns
        index % 3 === 0 && (
          <GridRow key={index}>
            {/* Create three columns in each row */}
            <>
              <GridColumn>
                <Image src={gridItems[index]} />
              </GridColumn>
              {/* Check if there are more items for the next columns */}
              {gridItems[index + 1] && (
                <GridColumn>
                  <Image src={gridItems[index + 1]} />
                </GridColumn>
              )}
              {gridItems[index + 2] && (
                <GridColumn>
                  <Image src={gridItems[index + 2]} />
                </GridColumn>
              )}
            </>
          </GridRow>
        )
      ))}
  </Grid>
);

export default PostingGrid;
