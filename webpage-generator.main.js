

// js implementation for the template function
let body, firstscripttag;
const getBasicReferences = () => {
    body = document.querySelector('body');
    // identity the first script tag in the body
    firstscripttag = document.querySelector('body script:nth-child(1)');
}

// function setTabTitle() {
//     document.title = webpagedata.title;
// } // FUNCTION EXPRESSION - HOISTED ALONG WITH DEFINITION

//add title to tab
const setTabTitle = () => {
    document.title = webpagedata.title;
} // FUNCTION STATEMENT


//add initial styles to body
const setBodyStyles = () => {
    body.style.backgroundColor = webpagedata.bgcolor ? webpagedata.bgcolor : 'white';
    body.style.color = webpagedata.fontColor ? webpagedata.fontColor : 'black';
}



// add footer to the page
const setPageFooter = () => {
    footernode = document.createElement('footer');
    body.insertBefore(footernode, firstscripttag);
    footer = document.querySelector('footer');
    footer.innerText = webpagedata.footer;
}


// add the title to page
const setTitle = () => {

    let doctitle = document.createElement('h1'); // create an element
    doctitle.setAttribute('id', 'doctitle');
    // console.log(getscripts)
    body.insertBefore(doctitle, footer);
    // document.insertBefore('script', document.getElementById('doctitle')); // append it to its parent
    doctitle.innerText = webpagedata.title; // do any with that element
    doctitle.style.textAlign = 'center'; //

    doctitle.appendChild(document.createElement('hr'));
}

const itemBoxContainer = () => {
    let node = document.createElement('div');
    node.setAttribute('id', 'item-box-container')
    body.insertBefore(node, footer);
}
const createItemBox = () => {
    let node = document.createElement('div');
    node.className = 'item-box';
    document.getElementById('item-box-container').appendChild(node);

}

const setItemBoxContent = (index) => {
    let itemBox = document.querySelector('#item-box-container .item-box:nth-child(' + (index + 1) + ')');
    let item = webpagedata.items[index];
    let headingnode = document.createElement('h3');
    itemBox.appendChild(headingnode);
    headingnode.innerText = item.title;
    let tnnode = document.createElement('img');
    tnnode.setAttribute('src', item.thumbnail);
    itemBox.appendChild(tnnode);
    let descnode = document.createElement('p');
    descnode.innerText = item.description;
    itemBox.appendChild(descnode);
    let pricenode = document.createElement('p');
    pricenode.innerText = '₹ ' + item.price;
    itemBox.appendChild(pricenode);
    if (item.discount) {
        pricenode.style.textDecoration = 'line-through';
        let discnode = document.createElement('p');
        discnode.innerText = '₹ ' + (item.price - item.price * item.discount / 100);
        itemBox.appendChild(discnode);
    }
}


const regFormContainer = () => {
    rfheadnode = document.createElement('div');
    rfheadnode.style.textAlign = 'center'
    rfheadnode.setAttribute('id', 'regForm')
    rfheadnode.appendChild(document.createElement('h1')).innerText = 'Registration Form';
    body.insertBefore(rfheadnode, footer);
}

const remarkContainer = () => {

    remnode = document.createElement('div');
    remnode.setAttribute('id', 'remarks');
    body.insertBefore(remnode, rfheadnode);
    remnode.appendChild(document.createElement('h1')).innerHTML = 'Testimonials<div></div>';

}

const remarks = () => {
    remdata = webpagedata.remarks;
    remdata.forEach(remark => {
        let remdiv = document.createElement('div');
        remdiv.className = 'remark';
        remnode.appendChild(remdiv);
        let rimg = document.createElement('img')
        rimg.setAttribute('src', remark.image);
        remdiv.appendChild(rimg);
        let rtest = document.createElement('p');
        rtest.innerHTML = remark.testimonial + '<br>' + remark.author;
        remdiv.appendChild(rtest);

        // remdiv.appendChild(document.createElement('p')).innerHTML = remark.testimonial + '<br>' + remark.author;

    })
}


const regForm = () => {
    rf = document.createElement('form');
    rf.setAttribute('name', webpagedata.regForm.name)
    rf.setAttribute('method', webpagedata.regForm.method)
    rf.setAttribute('action', webpagedata.regForm.action)
    rfheadnode.appendChild(rf);
}
const regFormFields = () => {

    let fielddata = webpagedata.regForm.fields;
    fielddata.forEach(field => {
        if (field.type == 'text' || field.type == 'password' || field.type == 'email' || field.type == 'submit') {
            let f = document.createElement('input');
            f.setAttribute('type', field.type);
            f.setAttribute('name', field.name);
            f.setAttribute('placeholder', field.name.toUpperCase());
            if (field.validators && field.validators.required) {
                f.setAttribute('required', field.validators.required);
            }
            if (field.validators && field.validators.minlength) {
                f.setAttribute('minlength', field.validators.minlength);
            }
            rf.appendChild(f);
        }
    })
}

const cbContainer = () => {
    cbc = document.createElement('div');
    cbc.setAttribute('id', 'checks');
    body.insertBefore(cbc, footer);
}

const checks = () => {
    webpagedata.items.forEach(item => {
        let cb = document.createElement('input');
        cb.setAttribute('type', 'checkbox');
        cb.setAttribute('id', 'cb' + item.id);
        cb.setAttribute('value', item.id);
        if (webpagedata.regForm.selectAllItemsByDefault) {
            cb.setAttribute('checked', 'true');

        }
        if (webpagedata.regForm.itemsCheckedByDefault.includes(item.id)) {
            cb.setAttribute('checked', 'true');

        }
        let cblabel = document.createElement('label');
        cblabel.setAttribute('for', 'cb' + item.id);
        cblabel.setAttribute('id', 'cbl' + item.id);
        cblabel.textContent = item.title;
        rf.insertBefore(cblabel, document.querySelector('#regForm input[type="submit"]'));
        rf.insertBefore(cb, document.getElementById('cbl' + item.id))
    })

}
    // body.innerHTML = `<h1>${webpagedata.title}</h1>`

    //create a test div
    // let testdivnode = document.createElement('div');
    // body.insertBefore(testdivnode, footer);
    // let testdiv = document.querySelector('div');


