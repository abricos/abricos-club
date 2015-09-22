var eshopFeedbackBuy;

Brick.use('feedback', 'feedback', function(err, NS){
    if (err){
        return;
    }

    if (Y.one('#callbackDialogFeedback')){
        new NS.FeedbackWidget({boundingBox: '#callbackDialogFeedback'});
    }


    var EshopProduct = Y.Base.create('eshopProduct', NS.Feedback, [], {}, {
        ATTRS: {
            productid: {value: 0},
            productname: {value: ''},
            hour_count: {value: 1},
            arenda_datetime: {value: ''},
            descript: {value: ''}
        }
    });

    eshopFeedbackBuy = function(p){
        Y.one('#eshopFeedback-pid').setHTML(p.productid);
        Y.one('#eshopFeedback-ptitle').setHTML(p.productname);
        $('#callbackEshopDialog').modal();

        p.message = 'Заказать: ' + p.productname;

        new NS.FeedbackWidget({
            boundingBox: '#callbackEshopDialogFeedback',
            model: new EshopProduct(p)
        });
        return false;
    };

    Y.all('form.kupeorder').each(function(el){
        var Fields = Y.Base.create('fiedls', NS.Feedback, [], {}, {
            ATTRS: {
                // text: {value: ''}
            }
        });

        new NS.FeedbackWidget({
            boundingBox: el,
            model: new Fields()
        });
    });

});


