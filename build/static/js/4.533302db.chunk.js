(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{29:function(e,t,c){e.exports={comments:"Comments_comments__3Muzp"}},30:function(e,t,c){e.exports={form:"NewCommentForm_form__m8nPE",loading:"NewCommentForm_loading__22Tv-",control:"NewCommentForm_control__2bVTY",actions:"NewCommentForm_actions__1CENx"}},31:function(e,t,c){e.exports={item:"CommentItem_item__3hENo"}},32:function(e,t,c){e.exports={comments:"CommentsList_comments__2ZxSp"}},33:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__SP00s"}},37:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(4),o=c(29),m=c.n(o),r=c(20),a=c(21),j=c(9),i=c(30),d=c.n(i),u=c(2),l=function(e){var t=Object(n.useRef)(),c=Object(r.a)(a.a),s=c.sendRequest,o=c.status,m=c.error,i=e.onAddComment,l=e.quoteId;console.log(l),Object(n.useEffect)((function(){"completed"!==o||m||i()}),[o,m,i]);var b=function(e){e.preventDefault(),s({commentData:{text:t.current.value},quoteId:l})};return Object(u.jsxs)("form",{className:d.a.form,onSubmit:b,children:["pending"===o&&Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(j.a,{})}),Object(u.jsxs)("div",{className:d.a.control,onSubmit:b,children:[Object(u.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(u.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(u.jsx)("div",{className:d.a.actions,children:Object(u.jsx)("button",{className:"btn",children:"Add Comment"})})]})},b=c(1),x=c(31),O=c.n(x),h=function(e){return Object(u.jsx)("li",{className:O.a.item,children:Object(u.jsx)("p",{children:e.text})})},f=c(32),p=c.n(f),N=function(e){return Object(u.jsx)("ul",{className:p.a.comments,children:e.comments.map((function(e){return Object(u.jsx)(h,{text:e.text},e.id)}))})},_=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],o=t[1],i=Object(b.g)().quoteId,d=Object(r.a)(a.c),x=d.sendRequest,O=d.status,h=d.data;Object(n.useEffect)((function(){x(i)}),[i,x]);var f,p=Object(n.useCallback)((function(){o(!1),x(i)}),[i,x]);"pending"===O&&(f=Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(j.a,{})})),"completed"===O&&(h||h.length>0)&&(f=Object(u.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(u.jsx)("p",{className:"centered",children:"No comments were added yet!"}));return Object(u.jsxs)("section",{className:m.a.comments,children:[Object(u.jsx)("h2",{children:"User Comments"}),!c&&Object(u.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(u.jsx)(l,{onAddComment:p,quoteId:i}),f]})},g=c(33),C=c.n(g),v=function(e){return Object(u.jsxs)("figure",{className:C.a.quote,children:[Object(u.jsx)("p",{children:e.text}),Object(u.jsx)("figcaption",{children:e.author})]})},q=c(5),w=function(){return Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(q.b,{className:"btn--flat",to:"comments",children:"Load Comments"})})};t.default=function(){var e=Object(b.g)().quoteId,t=Object(r.a)(a.e,!0),c=t.sendRequest,s=t.status,o=t.error,m=t.data;return Object(n.useEffect)((function(){c(e)}),[c,e]),"pending"===s?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(j.a,{})}):"error"===s?Object(u.jsx)("div",{className:"centered focused",children:o}):m.text?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{text:m.text,author:m.author}),Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{path:"",element:Object(u.jsx)(w,{})}),Object(u.jsx)(b.a,{path:"comments",element:Object(u.jsx)(_,{})})]})]}):Object(u.jsx)("p",{children:"No Quote Found!"})}}}]);
//# sourceMappingURL=4.533302db.chunk.js.map