import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error o realizar otras acciones aquí
    console.error(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Puedes personalizar el mensaje de error aquí
      console.log(errorInfo);
      return <div>Hubo un error en la aplicación.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
