import React, {ErrorInfo} from "react";

interface State {
  hasError: false
}

export class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error)
  }

  render() {
    if (this.state.hasError)
      return <h1>Sorry, something went wrong :/</h1>;
    return this.props.children;
  }
}