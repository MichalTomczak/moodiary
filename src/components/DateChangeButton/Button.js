/**
 * Created by Grucha on 14/03/2019.
 */
<button
    onClick={this.updateDate}
    name="month" value={+this.state.month + 1} disabled={this.state.month === 12}>&gt;&gt;</button>