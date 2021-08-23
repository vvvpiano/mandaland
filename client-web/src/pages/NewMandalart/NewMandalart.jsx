import React from "react"
import { connect } from "react-redux"
import MandalViewChanger from "../../components/MandalViewChanger/MandalViewChanger"
import { createMandal } from "../../actions"
import MandalForm from "../../components/MandalForm/MandalForm"
import "./NewMandalart.css"

class NewMandalart extends React.Component {
    onSubmit = (formValues) => {
        const { title, contents, thumbnailPath, ...miniData } = formValues
        this.props.createMandal({ title, contents, thumbnailPath }, miniData)
    }

    render() {
        return (
            <div>
                <MandalViewChanger />
                <MandalForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createMandal })(NewMandalart)
