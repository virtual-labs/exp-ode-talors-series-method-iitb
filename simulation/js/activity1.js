let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">ODE: Taylor's Series Method</h4>
            <p>Objective: </p>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    a = Math.floor(Math.random() * 5) + 1;
    console.log("Random number= ", a);
    y0_one_dash = (a * 0) + Math.pow(1, 2);
    console.log("y0'= ", y0_one_dash);
    y0_two_dash = a + 2 * y0 * y0_one_dash;
    console.log("y0''= ", y0_two_dash);
    y0_three_dash = 2 * y0_one_dash * y0_one_dash + 2 * y0 * y0_two_dash;
    console.log("y0'''= ", y0_three_dash);
    y0_four_dash = 4 * y0_one_dash * y0_two_dash + 2 * y0_one_dash * y0_two_dash + 2 * y0 * y0_three_dash;
    console.log("y0''''= ", y0_four_dash);
    y01 = y0 + (((x - x0) / fact(1)) * y0_one_dash) + ((Math.pow((x - x0), 2) / fact(2)) * y0_two_dash) + ((Math.pow((x - x0), 3) / fact(3)) * y0_three_dash) + ((Math.pow((x - x0), 4) / fact(4)) * y0_four_dash);
    console.log("y0.1= ", y01);
    let btn_text = get_collapse_btn_text("Activity", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        $$ x_0 = 0, y_0 = 1  $$
        $$ \\frac{dx}{dy} = f(x, y) = ${a}x + y^2 $$
        $$ y(0.1) = ?  $$
        $$ y' = ${a}x + y^2  $$
        <br>

        <div class="row">
            <div class='col-4'>
                <span>Enter the calculated value of y'<sub>0</sub>: </span>
            </div>
            <div class='col-2'>
                <span><input type='number' id='y0_one_dash-inp' class='form-control fs-16px' /></span>
            </div>
            <div class='col-2'>
                <span>
                <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='verify_y0_one_dash();' id='y0_one_dash-btn' >Verify</button>
                </span>
            </div>
        </div>

        <div id="y0_two_dash-div" style="display:none; margin-top: 2%">
            <div class="row">
                <div class='col-4'>
                    <span>Enter the calculated value of y''<sub>0</sub>: </span>
                </div>
                <div class='col-2'>
                    <span><input type='number' id='y0_two_dash-inp' class='form-control fs-16px' /></span>
                </div>
                <div class='col-2'>
                    <span>
                    <button class='btn btn-info btn-sm std-btn' onclick='verify_y0_two_dash();' id='y0_two_dash-btn' >Verify</button>
                    </span>
                </div>
            </div>
        </div>

        <div id="y0_three_dash-div" style="display:none; margin-top: 2%">
            <div class="row">
                <div class='col-4'>
                    <span>Enter the calculated value of y'''<sub>0</sub>: </span>
                </div>
                <div class='col-2'>
                    <span><input type='number' id='y0_three_dash-inp' class='form-control fs-16px' /></span>
                </div>
                <div class='col-2'>
                    <span>
                    <button class='btn btn-info btn-sm std-btn' onclick='verify_y0_three_dash();' id='y0_three_dash-btn' >Verify</button>
                    </span>
                </div>
            </div>
        </div>

        <div id="y0_four_dash-div" style="display:none; margin-top: 2%">
            <div class="row">
                <div class='col-4'>
                    <span>Enter the calculated value of y<sup>iv</sup><sub>0</sub>: </span>
                </div>
                <div class='col-2'>
                    <span><input type='number' id='y0_four_dash-inp' class='form-control fs-16px' /></span>
                </div>
                <div class='col-2'>
                    <span>
                    <button class='btn btn-info btn-sm std-btn' onclick='verify_y0_four_dash();' id='y0_four_dash-btn' >Verify</button>
                    </span>
                </div>
            </div>
        </div>

        <div id="y-div" style="display:none; margin-top: 5%">
            $$ y = y_0 + \\frac{x - x_0}{1!} y_0^{'} + \\frac{(x - x_0)}{2!}^2 y_0^{''} + \\frac{(x - x_0)}{3!}^3 y_0^{'''} + \\frac{(x - x_0)}{4!}^4 y_0^{iv}  $$

            <br>
            <p> Calculate y(0.1) = <span style='display: inline-block'>
                    <input type='number' id='y-inp' class='form-control fs-16px' />
                </span>
            </p>
            <button class='btn btn-info btn-sm std-btn' style='position: relative;' onclick='verify_y_value();' id='temp-btn-3'>Verify</button>
            <button class='btn btn-info std-btn' style='margin: auto; display:none;' id='act1-btn3' onclick='exp_complete();' >Next</button>
           
        </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_y0_one_dash() {
    let y0_one_dash_inp = (document.getElementById('y0_one_dash-inp'));
    if (!verify_values(parseFloat(y0_one_dash_inp.value), parseFloat(y0_one_dash.toFixed(4)))) {
        y0_one_dash_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y0_one_dash_inp.style.border = '1px solid #ced4da';
        y0_one_dash_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('y0_one_dash-btn'));
    btn.style.display = 'none';
    let div = (document.getElementById('y0_two_dash-div'));
    div.style.display = 'block';
}
function verify_y0_two_dash() {
    let y0_two_dash_inp = (document.getElementById('y0_two_dash-inp'));
    if (!verify_values(parseFloat(y0_two_dash_inp.value), parseFloat(y0_two_dash.toFixed(4)))) {
        y0_two_dash_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y0_two_dash_inp.style.border = '1px solid #ced4da';
        y0_two_dash_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('y0_two_dash-btn'));
    btn.style.display = 'none';
    let div = (document.getElementById('y0_three_dash-div'));
    div.style.display = 'block';
}
function verify_y0_three_dash() {
    let y0_three_dash_inp = (document.getElementById('y0_three_dash-inp'));
    if (!verify_values(parseFloat(y0_three_dash_inp.value), parseFloat(y0_three_dash.toFixed(4)))) {
        y0_three_dash_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y0_three_dash_inp.style.border = '1px solid #ced4da';
        y0_three_dash_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('y0_three_dash-btn'));
    btn.style.display = 'none';
    let div = (document.getElementById('y0_four_dash-div'));
    div.style.display = 'block';
}
function verify_y0_four_dash() {
    let y0_four_dash_inp = (document.getElementById('y0_four_dash-inp'));
    if (!verify_values(parseFloat(y0_four_dash_inp.value), parseFloat(y0_four_dash.toFixed(4)))) {
        y0_four_dash_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y0_four_dash_inp.style.border = '1px solid #ced4da';
        y0_four_dash_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('y0_four_dash-btn'));
    btn.style.display = 'none';
    let div = (document.getElementById('y-div'));
    div.style.display = 'block';
}
function verify_y_value() {
    let y_inp = (document.getElementById('y-inp'));
    if (!verify_values(parseFloat(y_inp.value), parseFloat(y01.toFixed(4)))) {
        y_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        y_inp.style.border = '1px solid #ced4da';
        y_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let btn = (document.getElementById('temp-btn-3'));
    let next_btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    next_btn.style.display = 'block';
}
function exp_complete() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    alert('Experiment completed');
}
function calculate_hxy() {
    let inp_n;
    inp_n = document.getElementById(`n-inp`);
    n_val = parseInt(inp_n.value);
    console.log("n = ", n_val);
    // calculate h
    h = (xn - x1) / n_val;
    h_val = parseFloat(h.toFixed(2));
    console.log("h= ", h_val);
    // calculate x
    x_val[0] = x1;
    for (let i = 1; i <= n_val; i++) {
        x_val[i] = parseFloat((x_val[i - 1] + h_val).toFixed(2));
    }
    console.log("x_val= ", x_val);
    // calculate y
    y_val = gety(x1, xn, y1, n_val);
    console.log("y= ", y_val);
    let div = (document.getElementById('h-div-act1'));
    div.style.display = 'block';
}
function fill_table() {
    let div = document.getElementById('table-div');
    let header = ['x'];
    tb_data = [['y']];
    let n_inputs = [];
    let i = 0;
    for (i = 0; i <= n_val; i++) {
        header.push(`${x_val[i]}`);
        tb_data[0].push(y_val[i]);
        n_inputs.push(i + 1);
    }
    y15 = y_val[i - 1];
    console.log("y15 ", y_val[i - 1]);
    let tb = new Verify_Table(header, tb_data, 0, n_inputs, y_val, "", div, true, exp);
    tb.load_table();
}
function exp() {
    let div = (document.getElementById('graph-div'));
    div.style.display = 'block';
}
activity1();
//# sourceMappingURL=activity1.js.map