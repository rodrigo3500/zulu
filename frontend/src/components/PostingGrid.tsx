import { GridRow, GridColumn, Grid, Image } from "semantic-ui-react";
interface IProps {
  gridItems: string[];
}
const PostingGrid = ({ gridItems }: IProps) => (
  <Grid columns={3}>
    <GridRow centered columns={3}>
      <>
        {gridItems.map((image, index) => (
          <GridColumn key={index} className="my-2">
            <Image src={gridItems[index]} alt=""/>
          </GridColumn>
        ))}
      </>
    </GridRow>
  </Grid>
);

export default PostingGrid;
