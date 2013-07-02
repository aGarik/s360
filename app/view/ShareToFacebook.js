Ext.define('smiley360.view.ShareToFacebook', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sharetofacebookview',
    config: {
        // Make it modal so you can click the mask to hide the overlay
        modal: true,
        hideOnMaskTap: true,

        // Set the width and height of the panel
        centered: true,
        fullscreen: true,
        width: '80%',
        height: '80%',
        margin: 20,
        padding: 0,
        cls: 'my-new-panel',
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
                dock: 'top',
                cls: 'top-panel',
                margin: '-6 -6 0 -6',
                padding: 0,
                height: 60,
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        height: 60,
                        items: [
                            {
                                xtype: 'label',
                                cls: 'top-title',
                                html: 'Earn 5 Smiles Sharing on Facebook',
                            },
                            {
                                xtype: 'image',
                                dock: 'right',
                                margin: 20,
                                width: 20,
                                height: 20,
                                src: 'resources/images/fb.png',
                            },
                        ],
                    },
                ],
            },
            {
                xtype: 'panel',
                cls: 'second-panel',
                margin: '0 -6 0 -6',
                padding: '10 20 10 20',
                //layout: 'fit',
                //dock: 'top',
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        margin: '0 0 10 0',
                        //height: 30,
                        //flex: 2,
                        items: [
                            {
                                xtype: 'label',
                                cls: 'second-panel-text',
                                html: 'Rate the product:',

                            },
                            {
                                xtype: 'image',
                                padding: '0 0 0 30',
                                src: 'resources/images/smile-bullet.png',
                            },
                            {
                                xtype: 'image',
                                padding: '0 0 0 30',
                                src: 'resources/images/smile-bullet.png',
                            },
                            {
                                xtype: 'image',
                                padding: '0 0 0 30',
                                src: 'resources/images/smile-bullet.png',
                            },
                            {
                                xtype: 'image',
                                padding: '0 0 0 30',
                                src: 'resources/images/smile-bullet.png',
                            },
                            {
                                xtype: 'image',
                                padding: '0 0 0 30',
                                src: 'resources/images/smile-bullet.png',
                            },
                        ],
                    },
                    {
                        xtype: 'textareafield',
                        maxRows: 8,
                        maxLength: 84,
                        //minHeight: 100,
                        //maxHeight: 100,
                        border: 1,
                        margin: '0 -2 0 -2',
                        cls: 't-text-area',
                        renderTo: 'output',
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        margin: '10 0 10 0',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'second-panel-text',
                                html: 'Tweet must contain at least 70 characters.',
                            },
                            {
                                xtype: 'label',
                                dock: 'right',
                                style: 'font-size: 8pt; font-family: din bold;',
                                html: '<b>34</b>',
                            },
                        ],
                    },
                ],
            },
            {
                xtype: 'panel',
                margin: 0,
                padding: 0,
                cls: 'third-panel',
                dock: 'bottom',
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        //height: 260,
                        //flex: 2,
                        items: [
                            {
                                xtype: 'checkboxfield',
                                width: '50%',
                                checked: false,
                                label: 'Post to Profile Wall.',
                                labelAlign: 'right',
                            },
                            {
                                xtype: 'checkboxfield',
                                width: '50%',
                                checked: false,
                                label: 'Post to Brand Page.',
                                labelAlign: 'right',
                            },
                        ],
                    },
                    {
                        xtype: 'label',
                        cls: 'third-panel-text1',
                        html: 'The following text will automatically be added to your post:',
                    },
                    {
                        xtype: 'label',
                        cls: 'third-panel-text2',
                        html: 'Try Campbell\'s Slow Kettle Style Soups and be sure to use this $1.00 off coupon! http://bit.ly/YxVW1D',
                    },
                    {
                        xtype: 'button',
                        itemId: 'doShare',
                        cls: 'post-button',
                        html: 'POST',
                    },

                ],
            },
        ],
        listeners: [
            {
                delegate: "#doShare",
                event: "tap",
                fn: "onShareTap"
            }],
    }
});