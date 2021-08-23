import React from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import MandalViewChanger from "../../components/MandalViewChanger/MandalViewChanger"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import { createMandal } from "../../actions"
import "./NewMandalart.css"

class NewMandalart extends React.Component {
    renderSmallGrid = (key_i) => {
        const mini = Array(9)
            .fill(0)
            .map((_, i) => {
                const className = i === 4 ? "goal keyword" : "goal"
                return <Field component="input" className={className} name={`${key_i}-${i}`} key={`${key_i}-${i}`} />
            })

        const className = key_i === 4 ? "mini-container center-mandal" : "mini-container"
        return (
            <div className={className} key={key_i}>
                {mini}
            </div>
        )
    }

    renderBigGrid = () => {
        return (
            <div className="mandal-big-grid">
                {Array(9)
                    .fill(0)
                    .map((_, i) => this.renderSmallGrid(i))}
            </div>
        )
    }

    renderDescription = () => {
        return (
            <div className="description-container">
                <div className="title">
                    TITLE: <Field component="input" name="title" />
                </div>
                <div className="devider" />
                <div className="contents">
                    CONTENTS: <Field component="input" name="contents" />
                </div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(formValues)
        const { title, contents, thumbnailPath, ...miniData } = formValues
        this.props.createMandal({ title, contents, thumbnailPath }, miniData)
    }

    renderEditButton = () => {
        return (
            <div className="button-wrapper">
                <SubmitButton text="SUBMIT" />
            </div>
        )
    }

    render() {
        return (
            <div>
                <MandalViewChanger />
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="mandalart-container">
                        {this.renderDescription()}
                        {this.renderBigGrid()}
                    </div>
                    {this.renderEditButton()}
                </form>
            </div>
        )
    }
}

const Wrapped = reduxForm({
    form: "mandalForm",
})(NewMandalart)

export default connect(null, { createMandal })(Wrapped)
