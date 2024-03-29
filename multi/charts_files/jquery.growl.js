(function() {
    "use strict";
    var a, b, c, d = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    };
    a = jQuery, b = function() {
        function a() {}
        return a.transitions = {
            webkitTransition: "webkitTransitionEnd",
            mozTransition: "mozTransitionEnd",
            oTransition: "oTransitionEnd",
            transition: "transitionend"
        }, a.transition = function(a) {
            var b, c, d, e;
            b = a[0], c = this.transitions;
            for (e in c)
                if (d = c[e], null != b.style[e]) return d
        }, a
    }(), c = function() {
        function c(b) {
            null == b && (b = {}), this.container = d(this.container, this), this.content = d(this.content, this), this.html = d(this.html, this), this.$growl = d(this.$growl, this), this.$growls = d(this.$growls, this), this.animate = d(this.animate, this), this.remove = d(this.remove, this), this.dismiss = d(this.dismiss, this), this.present = d(this.present, this), this.waitAndDismiss = d(this.waitAndDismiss, this), this.cycle = d(this.cycle, this), this.close = d(this.close, this), this.click = d(this.click, this), this.mouseLeave = d(this.mouseLeave, this), this.mouseEnter = d(this.mouseEnter, this), this.unbind = d(this.unbind, this), this.bind = d(this.bind, this), this.render = d(this.render, this), this.settings = a.extend({}, c.settings, b), this.$growls().attr("class", this.settings.location), this.render()
        }
        return c.settings = {
            namespace: "growl",
            duration: 3200,
            close: "&#215;",
            location: "default",
            style: "default",
            size: "medium",
            delayOnHover: !0
        }, c.growl = function(a) {
            return null == a && (a = {}), this.initialize(), new c(a)
        }, c.initialize = function() {
            return a("body:not(:has(#growls))").append('<div id="growls" />')
        }, c.prototype.render = function() {
            var a;
            a = this.$growl(), this.$growls().append(a), this.settings.fixed ? this.present() : this.cycle()
        }, c.prototype.bind = function(a) {
            return null == a && (a = this.$growl()), a.on("click", this.click), this.settings.delayOnHover && (a.on("mouseenter", this.mouseEnter), a.on("mouseleave", this.mouseLeave)), a.on("contextmenu", this.close).find("." + this.settings.namespace + "-close").on("click", this.close)
        }, c.prototype.unbind = function(a) {
            return null == a && (a = this.$growl()), a.off("click", this.click), this.settings.delayOnHover && (a.off("mouseenter", this.mouseEnter), a.off("mouseleave", this.mouseLeave)), a.off("contextmenu", this.close).find("." + this.settings.namespace + "-close").off("click", this.close)
        }, c.prototype.mouseEnter = function(a) {
            var b;
            return b = this.$growl(), b.stop(!0, !0)
        }, c.prototype.mouseLeave = function(a) {
            return this.waitAndDismiss()
        }, c.prototype.click = function(a) {
            if (null != this.settings.url) return a.preventDefault(), a.stopPropagation(), window.open(this.settings.url)
        }, c.prototype.close = function(a) {
            var b;
            return a.preventDefault(), a.stopPropagation(), b = this.$growl(), b.stop().queue(this.dismiss).queue(this.remove)
        }, c.prototype.cycle = function() {
            var a;
            return a = this.$growl(), a.queue(this.present).queue(this.waitAndDismiss())
        }, c.prototype.waitAndDismiss = function() {
            var a;
            return a = this.$growl(), a.delay(this.settings.duration).queue(this.dismiss).queue(this.remove)
        }, c.prototype.present = function(a) {
            var b;
            return b = this.$growl(), this.bind(b), this.animate(b, this.settings.namespace + "-incoming", "out", a)
        }, c.prototype.dismiss = function(a) {
            var b;
            return b = this.$growl(), this.unbind(b), this.animate(b, this.settings.namespace + "-outgoing", "in", a)
        }, c.prototype.remove = function(a) {
            return this.$growl().remove(), a()
        }, c.prototype.animate = function(a, c, d, e) {
            var f;
            null == d && (d = "in"), f = b.transition(a), a["in" === d ? "removeClass" : "addClass"](c), a.offset().position, a["in" === d ? "addClass" : "removeClass"](c), null != e && (null != f ? a.one(f, e) : e())
        }, c.prototype.$growls = function() {
            return null != this.$_growls ? this.$_growls : this.$_growls = a("#growls")
        }, c.prototype.$growl = function() {
            return null != this.$_growl ? this.$_growl : this.$_growl = a(this.html())
        }, c.prototype.html = function() {
            return this.container(this.content())
        }, c.prototype.content = function() {
            return "<div class='" + this.settings.namespace + "-close'>" + this.settings.close + "</div>\n<div class='" + this.settings.namespace + "-title'>" + this.settings.title + "</div>\n<div class='" + this.settings.namespace + "-message'>" + this.settings.message + "</div>"
        }, c.prototype.container = function(a) {
            return "<div class='" + this.settings.namespace + " " + this.settings.namespace + "-" + this.settings.style + " " + this.settings.namespace + "-" + this.settings.size + "'>\n  " + a + "\n</div>"
        }, c
    }(), this.Growl = c, a.growl = function(a) {
        return null == a && (a = {}), c.growl(a)
    }, a.growl.error = function(b) {
        var c;
        return null == b && (b = {}), c = {
            title: "Error!",
            style: "error"
        }, a.growl(a.extend(c, b))
    }, a.growl.notice = function(b) {
        var c;
        return null == b && (b = {}), c = {
            title: "Notice!",
            style: "notice"
        }, a.growl(a.extend(c, b))
    }, a.growl.warning = function(b) {
        var c;
        return null == b && (b = {}), c = {
            title: "Warning!",
            style: "warning"
        }, a.growl(a.extend(c, b))
    }
}).call(this);