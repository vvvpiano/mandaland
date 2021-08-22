import React from "react"
import { connect } from "react-redux"
import MandalViewChanger from "../../components/MandalViewChanger/MandalViewChanger"
import CustomButton from "../../components/CustomButton/CustomButton"
import GoalCheck from "../../components/GoalCheck/GoalCheck"
import "./Mandalart.css"
import { fetchMandal, fetchLog, patchLog } from "../../actions"

class Mandalart extends React.Component {
    componentDidMount() {
        this.props.fetchMandal(this.props.match.params.mandalId)
        this.props.fetchLog(this.props.match.params.userId, this.props.match.params.mandalId)
    }

    onCheck = (miniMandalIndex, goalIndex, check) => {
        this.props.log.checks[miniMandalIndex][goalIndex] = check
        this.props.patchLog(miniMandalIndex, goalIndex, check, this.props.log)
    }

    renderSmallGrid = (miniMandal, key_i) => {
        const mini = miniMandal.goals.map((goal, i) => {
            const className = i === 4 ? "goal keyword" : "goal"
            const check = this.props.log.checks ? this.props.log.checks[key_i][i] : 0
            const onCheckCallback = key_i === 4 || i === 4 ? null : this.onCheck
            return <GoalCheck isCheck={check} className={className} key={i} index={[key_i, i]} goal={goal} onCheck={onCheckCallback} />
        })

        const className = key_i === 4 ? "mini-container center-mandal" : "mini-container"
        return (
            <div className={className} key={key_i}>
                {mini}
            </div>
        )
    }

    renderBigGrid = () => {
        if (!this.props.mandal || !this.props.mandal.miniMandals) return null
        return <div className="mandal-big-grid">{this.props.mandal.miniMandals.map((miniMandal, i) => this.renderSmallGrid(miniMandal, i))}</div>
    }

    renderDescription = () => {
        if (!this.props.mandal || !this.props.mandal.mandal) return null
        return (
            <div className="description-container">
                <div className="title">TITLE: {this.props.mandal.mandal.title}</div>
                <div className="devider" />
                <div className="contents">CONTENTS: {this.props.mandal.mandal.contents}</div>
            </div>
        )
    }

    renderEditButton = () => {
        return (
            <div className="button-wrapper">
                <CustomButton text="EDIT" />
            </div>
        )
    }

    render() {
        return (
            <div>
                <MandalViewChanger />
                <div className="mandalart-container">
                    {this.renderDescription()}
                    {this.renderBigGrid()}
                </div>
                {this.renderEditButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mandal: state.mandal,
        log: state.log,
    }
}

export default connect(mapStateToProps, { fetchMandal, fetchLog, patchLog })(Mandalart)
