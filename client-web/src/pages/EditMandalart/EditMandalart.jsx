import React from "react"
import _ from "lodash"
import { connect } from "react-redux"
import MandalViewChanger from "../../components/MandalViewChanger/MandalViewChanger"
import { fetchMandal, editMandal } from "../../actions"
import MandalForm from "../../components/MandalForm/MandalForm"

class EditMandalart extends React.Component {
    componentDidMount = () => {
        this.props.fetchMandal(this.props.match.params.mandalId)
    }

    mapInitialValues = () => {
        if (!this.props.mandal) return null
        const { mandal, miniMandals } = this.props.mandal
        const initialValues = { title: mandal.title, contents: mandal.contents }
        miniMandals.forEach((mini, i) => {
            mini.goals.forEach((goal, j) => {
                const key = i + "-" + j
                initialValues[key] = goal
            })
        })
        return initialValues
    }

    onSubmit = (formValues) => {
        console.log("on Submit in Edit")
        const { title, contents, thumbnailPath, ...miniData } = formValues
        const mandalId = this.props.match.params.mandalId
        this.props.editMandal(mandalId, { title, contents, thumbnailPath }, miniData)
    }

    renderForm() {
        const initialValues = this.mapInitialValues()
        if (!initialValues) return null
        return <MandalForm onSubmit={this.onSubmit} mandalId={this.props.match.params.mandalId} initialValues={initialValues} />
    }

    render() {
        return (
            <div>
                <MandalViewChanger />
                {this.renderForm()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        mandal: state.mandal[ownProps.match.params.mandalId],
    }
}

export default connect(mapStateToProps, { fetchMandal, editMandal })(EditMandalart)
