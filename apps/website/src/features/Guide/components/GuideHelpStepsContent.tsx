import { Grid, useMediaQuery } from '@mui/material';
import GuideVideo from './GuideVideo';
import GuideContent from './GuideContent';
import { itemGuide } from '../../../mocks/guide.data';

export default function GuideHelpStepsContent() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isSmallScreen
        ? itemGuide.map((item) => (
            <Grid container spacing={2} className="mb-10" key={item.id}>
              <GuideContent
                id={item.id}
                number={item.number}
                name={item.name}
                content={item.content}
              />
              <GuideVideo img={item.img} video={item.video} />
            </Grid>
          ))
        : itemGuide.map((item) =>
            item.isStep ? (
              <Grid container spacing={2} className="mb-10" key={item.id}>
                <GuideContent
                  id={item.id}
                  number={item.number}
                  name={item.name}
                  content={item.content}
                />
                <GuideVideo img={item.img} video={item.video} />
              </Grid>
            ) : (
              <Grid container spacing={2} className="mb-10" key={item.id}>
                <GuideVideo img={item.img} video={item.video} />
                <GuideContent
                  id={item.id}
                  number={item.number}
                  name={item.name}
                  content={item.content}
                />
              </Grid>
            )
          )}
    </>
  );
}
