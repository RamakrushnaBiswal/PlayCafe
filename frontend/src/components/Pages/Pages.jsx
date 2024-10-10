import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      <div className="h-full">{props.children}</div>
      <p className="text-xs text-end text-black pb-4">
        Page number: {props.number}
      </p>
    </div>
  );
});

Page.displayName = 'Page';

Page.propTypes = {
  children: PropTypes.node,
  number: PropTypes.number,
};

export default Page;
