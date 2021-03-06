import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import bodyWavePic from '../../../images/wavy-3bundles-resize.JPG';
import straightBundlePic from '../../../images/straight-3-bundles.JPG';
import kinkyCurlPic from '../../../images/kinky-curl-3–bundles.JPG';
import { connect } from 'react-redux';
import { cartCreate } from '../../../../actions/cart-actions/cart-actions';


class BrazilianBodyWave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'brazilian body-wave',
      price: 75,
      length : '',
      quantity: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.cartItemCartCreate(this.state);
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
      <div>
        <h1>Brazilian Mink Body Wave</h1>
        <div id="col1-bw">
          <img src={bodyWavePic} height="100%" width="100%" id="body-wave-pic"/>
        </div>
        <div id="col2-bw">
          <h4>$ 75.00</h4>
          <p>Length</p>
          <form className="brazilian-bodywave-form" onSubmit={this.handleSubmit}>
            <select name="length" id="body-wave-length" onChange={this.handleChange} required>
              <option value="" defaultValue>Select hair type...</option>
              <option value="14in">14"</option>
              <option value="16in">16"</option>
              <option value="18in">18"</option>
              <option value="20in">20"</option>
              <option value="22in">22"</option>
              <option value="24in">24"</option>
              <option value="26in">26"</option>
              <option value="28in">28"</option>
              <option value="30in">30"</option>
            </select>
            <p>Quantity</p>
            <select name="quantity" id="body-wave-quantity" onChange={this.handleChange} required>
              <option value="" defaultValue>Select quantity...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button type="submit"><span>Add to Cart</span></button>
          </form>
        </div>
        <h5 className="content">Our 100% Virgin Mink Brazilian Hair is the highest quality Virgin Mink Brazilian hair on the market. Each selection has been collected from one donor. All cuticles are intact and you will notice each selection of our virgin hair has a natural taper at the end. All our Virgin Brazilian Hair has undergone a stringent quality assurance process to ensure it is free of imperfections. Our Virgin Brazilian Hair is available in a natural off black color 1b and will last well up to a year with proper care and maintenance
          <ul>
            <li>
              Grade 7A Virgin Mink hair
            </li>
            <li>
              Natural (1B) color; No two bundles are identical
            </li>
            <li>
              3.5-4.0 oz per bundle
            </li>
            <li>
              No shedding and tangle-free
            </li>
            <li>
              All bundles can be cut, colored, bleached, and straightened (we recommend a professional for coloring.)
            </li>
            <li>
              Can last 12-18 months with proper care
            </li>
          </ul>
          Note: Excessive heat/color can damage texture and curl pattern of your bundles.
        </h5>
        <div className="fb-share-button" data-to="https://www.hairbyadara.com/brazilian/body-wave" data-layout="button" data-size="small" data-mobile-iframe="true">
          <h4 className="share-header">Share this product</h4>
          <Link to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.hairbyadara.com%2Fbrazilian%2Fbody-wave&amp;src=sdkpreparse" target="_blank" className="fb-xfbml-parse-ignore share-facebook">Share</Link>
          <Link to="//twitter.com/share?text=Brazilian%20Mink%20Body%20Wave&amp;url=https://www.hairbyadara.com/products/brazilian-body-wave" target="_blank" className="share-twitter">Tweet  </Link>
          <Link to="//pinterest.com/pin/create/button/?url=https://www.hairbyadara.com/products/brazilian-body-wave&amp;media=http://cdn.shopify.com/s/files/1/1235/5700/products/mink_body_wave_before_resize_1024x1024.jpg?v=1476947336&amp;description=Brazilian%20Mink%20Body%20Wave" target="_blank" className="share-pinterest">Pin it</Link>
          <Link to="//fancy.com/fancyit?ItemURL=https://www.hairbyadara.com/products/brazilian-body-wave&amp;Title=Brazilian%20Mink%20Body%20Wave&amp;Category=Other&amp;ImageURL=//cdn.shopify.com/s/files/1/1235/5700/products/mink_body_wave_before_resize_1024x1024.jpg?v=1476947336" target="_blank" className="share-fancy">Fancy</Link>
          <Link to="//plus.google.com/share?url=https://www.hairbyadara.com/products/brazilian-body-wave" target="_blank" className="share-google">+1</Link>
        </div>
        <br>
        </br>
        <h4>More from this collection</h4>
        <div className="brazilian-collection-pic">
          <div className="brazilian-collection">
            <Link to="../brazilian/straight"><img src={straightBundlePic} width="75%" height="75%"/></Link>
            <p>Brazilian Mink Straight</p>
          </div>
          <div className="brazilian-collection">
            <Link to="../brazilian/kinky-curl"><img src={kinkyCurlPic} width="75%" height="75%"/></Link>
            <p>Brazilian Kinky Curl</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state,
});
const mapDispatchToProps = (dispatch, getState) => ({
  cartItemCartCreate: item => dispatch(cartCreate(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrazilianBodyWave);