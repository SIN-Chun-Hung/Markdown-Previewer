const targetMarkDown = `# Welcome to SIN Chun Hung's Simple React Markdown Previewer!

## Mathematician
### Science and Technology are beautiful! 

There are some codes, \`<p></p>\`, between 2 backticks.

\`\`\`
multi-line code:

function mathematicsGOD (optionTrack) {
  if (optionTrack == \'Pure\') {
    return \'You are pure mathematician!\' 
  } else if (optionTrack == \'Applied\') {
    return \'You are applied mathematician!\' 
  }
}
\`\`\`

**Linear Algebra**... whoa!  _Multivariable Calculus!_.... **_Real Analysis!_**
~~Testing!!!!~~.

There's also [MyCodePenLink](https://codepen.io/your-work), and
> Trying Block So Testing it!  

Mathematician tries to make tables, practicing my skills!:

HKU | HKUST | CUHK
------------ | ------------- | -------------
CITYU | POLYU | HKBU
EDUHK | LINGU | OUHK

- HKUST Science 
- HKUST Engineering 
- HKUST Business Management
- HKUST Humanities

Good Subject:
1. Mathematics
1. Physics
1. Computer Science

![HKUST](https://www.wis.edu.hk/wp-content/uploads/2017/08/hkustlogo.png)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mdvalue: targetMarkDown };


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ mdvalue: event.target.value });
  }

  getMarkDownText() {
    const transformToHTML = marked(this.state.mdvalue, { sanitize: true });
    return { __html: transformToHTML };
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "mdp-background" }, /*#__PURE__*/
      React.createElement("div", { id: "mark-pre-boxes" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", { className: "title" }, "Markdown Box Editor"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", onChange: this.handleChange, value: this.state.mdvalue })), /*#__PURE__*/


      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", { className: "title" }, "Previewer Box"), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.getMarkDownText() })))));





  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('App'));