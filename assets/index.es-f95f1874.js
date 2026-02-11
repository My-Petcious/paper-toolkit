var n$1, l$1, u$1$1, i$1$1, r$3, o$1$1, e$3, f$1$1, c$1$1, s$1$1, a$1$1, h$2, p$1$1 = {}, y$2 = [], v$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, w$3 = Array.isArray;
function d$2(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function g$2(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _$3(l2, u2, t2) {
  var i2, r2, o22, e2 = {};
  for (o22 in u2)
    o22 == "key" ? i2 = u2[o22] : o22 == "ref" ? r2 = u2[o22] : e2[o22] = u2[o22];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n$1.call(arguments, 2) : t2), typeof l2 == "function" && l2.defaultProps != null)
    for (o22 in l2.defaultProps)
      e2[o22] == null && (e2[o22] = l2.defaultProps[o22]);
  return m$2(l2, e2, i2, r2, null);
}
function m$2(n2, t2, i2, r2, o22) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o22 ?? ++u$1$1, __i: -1, __u: 0 };
  return o22 == null && l$1.vnode != null && l$1.vnode(e2), e2;
}
function b() {
  return { current: null };
}
function k$2(n2) {
  return n2.children;
}
function x$2(n2, l2) {
  this.props = n2, this.context = l2;
}
function S$1(n2, l2) {
  if (l2 == null)
    return n2.__ ? S$1(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? S$1(n2) : null;
}
function C$3(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return C$3(n2);
  }
}
function M$1(n2) {
  (!n2.__d && (n2.__d = true) && i$1$1.push(n2) && !$$2.__r++ || r$3 != l$1.debounceRendering) && ((r$3 = l$1.debounceRendering) || o$1$1)($$2);
}
function $$2() {
  for (var n2, u2, t2, r2, o22, f2, c2, s2 = 1; i$1$1.length; )
    i$1$1.length > s2 && i$1$1.sort(e$3), n2 = i$1$1.shift(), s2 = i$1$1.length, n2.__d && (t2 = void 0, o22 = (r2 = (u2 = n2).__v).__e, f2 = [], c2 = [], u2.__P && ((t2 = d$2({}, r2)).__v = r2.__v + 1, l$1.vnode && l$1.vnode(t2), O$2(u2.__P, t2, r2, u2.__n, u2.__P.namespaceURI, 32 & r2.__u ? [o22] : null, f2, o22 ?? S$1(r2), !!(32 & r2.__u), c2), t2.__v = r2.__v, t2.__.__k[t2.__i] = t2, z$3(f2, t2, c2), t2.__e != o22 && C$3(t2)));
  $$2.__r = 0;
}
function I$2(n2, l2, u2, t2, i2, r2, o22, e2, f2, c2, s2) {
  var a2, h2, v2, w2, d2, g2, _2 = t2 && t2.__k || y$2, m2 = l2.length;
  for (f2 = P$4(u2, l2, _2, f2, m2), a2 = 0; a2 < m2; a2++)
    (v2 = u2.__k[a2]) != null && (h2 = v2.__i == -1 ? p$1$1 : _2[v2.__i] || p$1$1, v2.__i = a2, g2 = O$2(n2, v2, h2, i2, r2, o22, e2, f2, c2, s2), w2 = v2.__e, v2.ref && h2.ref != v2.ref && (h2.ref && q$2(h2.ref, null, v2), s2.push(v2.ref, v2.__c || w2, v2)), d2 == null && w2 != null && (d2 = w2), 4 & v2.__u || h2.__k === v2.__k ? f2 = A$3(v2, f2, n2) : typeof v2.type == "function" && g2 !== void 0 ? f2 = g2 : w2 && (f2 = w2.nextSibling), v2.__u &= -7);
  return u2.__e = d2, f2;
}
function P$4(n2, l2, u2, t2, i2) {
  var r2, o22, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++)
    (o22 = l2[r2]) != null && typeof o22 != "boolean" && typeof o22 != "function" ? (f2 = r2 + h2, (o22 = n2.__k[r2] = typeof o22 == "string" || typeof o22 == "number" || typeof o22 == "bigint" || o22.constructor == String ? m$2(null, o22, null, null, null) : w$3(o22) ? m$2(k$2, { children: o22 }, null, null, null) : o22.constructor == null && o22.__b > 0 ? m$2(o22.type, o22.props, o22.key, o22.ref ? o22.ref : null, o22.__v) : o22).__ = n2, o22.__b = n2.__b + 1, e2 = null, (c2 = o22.__i = L$3(o22, u2, f2, a2)) != -1 && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), e2 == null || e2.__v == null ? (c2 == -1 && (i2 > s2 ? h2-- : i2 < s2 && h2++), typeof o22.type != "function" && (o22.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o22.__u |= 4))) : n2.__k[r2] = null;
  if (a2)
    for (r2 = 0; r2 < s2; r2++)
      (e2 = u2[r2]) != null && (2 & e2.__u) == 0 && (e2.__e == t2 && (t2 = S$1(e2)), B$2(e2, e2));
  return t2;
}
function A$3(n2, l2, u2) {
  var t2, i2;
  if (typeof n2.type == "function") {
    for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++)
      t2[i2] && (t2[i2].__ = n2, l2 = A$3(t2[i2], l2, u2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = S$1(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do
    l2 = l2 && l2.nextSibling;
  while (l2 != null && l2.nodeType == 8);
  return l2;
}
function H$4(n2, l2) {
  return l2 = l2 || [], n2 == null || typeof n2 == "boolean" || (w$3(n2) ? n2.some(function(n3) {
    H$4(n3, l2);
  }) : l2.push(n2)), l2;
}
function L$3(n2, l2, u2, t2) {
  var i2, r2, o22 = n2.key, e2 = n2.type, f2 = l2[u2];
  if (f2 === null && n2.key == null || f2 && o22 == f2.key && e2 == f2.type && (2 & f2.__u) == 0)
    return u2;
  if (t2 > (f2 != null && (2 & f2.__u) == 0 ? 1 : 0))
    for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) {
      if (i2 >= 0) {
        if ((f2 = l2[i2]) && (2 & f2.__u) == 0 && o22 == f2.key && e2 == f2.type)
          return i2;
        i2--;
      }
      if (r2 < l2.length) {
        if ((f2 = l2[r2]) && (2 & f2.__u) == 0 && o22 == f2.key && e2 == f2.type)
          return r2;
        r2++;
      }
    }
  return -1;
}
function T$2(n2, l2, u2) {
  l2[0] == "-" ? n2.setProperty(l2, u2 ?? "") : n2[l2] = u2 == null ? "" : typeof u2 != "number" || v$2.test(l2) ? u2 : u2 + "px";
}
function j$2(n2, l2, u2, t2, i2) {
  var r2;
  n:
    if (l2 == "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof t2 == "string" && (n2.style.cssText = t2 = ""), t2)
          for (l2 in t2)
            u2 && l2 in u2 || T$2(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            t2 && u2[l2] == t2[l2] || T$2(n2.style, l2, u2[l2]);
      }
    else if (l2[0] == "o" && l2[1] == "n")
      r2 = l2 != (l2 = l2.replace(f$1$1, "$1")), l2 = l2.toLowerCase() in n2 || l2 == "onFocusOut" || l2 == "onFocusIn" ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c$1$1, n2.addEventListener(l2, r2 ? a$1$1 : s$1$1, r2)) : n2.removeEventListener(l2, r2 ? a$1$1 : s$1$1, r2);
    else {
      if (i2 == "http://www.w3.org/2000/svg")
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 != "width" && l2 != "height" && l2 != "href" && l2 != "list" && l2 != "form" && l2 != "tabIndex" && l2 != "download" && l2 != "rowSpan" && l2 != "colSpan" && l2 != "role" && l2 != "popover" && l2 in n2)
        try {
          n2[l2] = u2 ?? "";
          break n;
        } catch {
        }
      typeof u2 == "function" || (u2 == null || u2 === false && l2[4] != "-" ? n2.removeAttribute(l2) : n2.setAttribute(l2, l2 == "popover" && u2 == 1 ? "" : u2));
    }
}
function F$3(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (u2.t == null)
        u2.t = c$1$1++;
      else if (u2.t < t2.u)
        return;
      return t2(l$1.event ? l$1.event(u2) : u2);
    }
  };
}
function O$2(n2, u2, t2, i2, r2, o22, e2, f2, c2, s2) {
  var a2, h2, p2, y2, v2, _2, m2, b2, S2, C2, M2, $2, P2, A2, H2, L2, T2, j2 = u2.type;
  if (u2.constructor != null)
    return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o22 = [f2 = u2.__e = t2.__e]), (a2 = l$1.__b) && a2(u2);
  n:
    if (typeof j2 == "function")
      try {
        if (b2 = u2.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? m2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (S2 ? u2.__c = h2 = new j2(b2, M2) : (u2.__c = h2 = new x$2(b2, M2), h2.constructor = j2, h2.render = D$2), C2 && C2.sub(h2), h2.props = b2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), S2 && h2.__s == null && (h2.__s = h2.state), S2 && j2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = d$2({}, h2.__s)), d$2(h2.__s, j2.getDerivedStateFromProps(b2, h2.__s))), y2 = h2.props, v2 = h2.state, h2.__v = u2, p2)
          S2 && j2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), S2 && h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (S2 && j2.getDerivedStateFromProps == null && b2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(b2, M2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(b2, h2.__s, M2) === false || u2.__v == t2.__v) {
            for (u2.__v != t2.__v && (h2.props = b2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
              n3 && (n3.__ = u2);
            }), $2 = 0; $2 < h2._sb.length; $2++)
              h2.__h.push(h2._sb[$2]);
            h2._sb = [], h2.__h.length && e2.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(b2, h2.__s, M2), S2 && h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y2, v2, _2);
          });
        }
        if (h2.context = M2, h2.props = b2, h2.__P = n2, h2.__e = false, P2 = l$1.__r, A2 = 0, S2) {
          for (h2.state = h2.__s, h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do
            h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          while (h2.__d && ++A2 < 25);
        h2.state = h2.__s, h2.getChildContext != null && (i2 = d$2(d$2({}, i2), h2.getChildContext())), S2 && !p2 && h2.getSnapshotBeforeUpdate != null && (_2 = h2.getSnapshotBeforeUpdate(y2, v2)), L2 = a2, a2 != null && a2.type === k$2 && a2.key == null && (L2 = N$2(a2.props.children)), f2 = I$2(n2, w$3(L2) ? L2 : [L2], u2, t2, i2, r2, o22, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
      } catch (n3) {
        if (u2.__v = null, c2 || o22 != null)
          if (n3.then) {
            for (u2.__u |= c2 ? 160 : 128; f2 && f2.nodeType == 8 && f2.nextSibling; )
              f2 = f2.nextSibling;
            o22[o22.indexOf(f2)] = null, u2.__e = f2;
          } else
            for (T2 = o22.length; T2--; )
              g$2(o22[T2]);
        else
          u2.__e = t2.__e, u2.__k = t2.__k;
        l$1.__e(n3, u2, t2);
      }
    else
      o22 == null && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = V$1(t2.__e, u2, t2, i2, r2, o22, e2, c2, s2);
  return (a2 = l$1.diffed) && a2(u2), 128 & u2.__u ? void 0 : f2;
}
function z$3(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++)
    q$2(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function N$2(n2) {
  return typeof n2 != "object" || n2 == null || n2.__b && n2.__b > 0 ? n2 : w$3(n2) ? n2.map(N$2) : d$2({}, n2);
}
function V$1(u2, t2, i2, r2, o22, e2, f2, c2, s2) {
  var a2, h2, y2, v2, d2, _2, m2, b2 = i2.props, k2 = t2.props, x2 = t2.type;
  if (x2 == "svg" ? o22 = "http://www.w3.org/2000/svg" : x2 == "math" ? o22 = "http://www.w3.org/1998/Math/MathML" : o22 || (o22 = "http://www.w3.org/1999/xhtml"), e2 != null) {
    for (a2 = 0; a2 < e2.length; a2++)
      if ((d2 = e2[a2]) && "setAttribute" in d2 == !!x2 && (x2 ? d2.localName == x2 : d2.nodeType == 3)) {
        u2 = d2, e2[a2] = null;
        break;
      }
  }
  if (u2 == null) {
    if (x2 == null)
      return document.createTextNode(k2);
    u2 = document.createElementNS(o22, x2, k2.is && k2), c2 && (l$1.__m && l$1.__m(t2, e2), c2 = false), e2 = null;
  }
  if (x2 == null)
    b2 === k2 || c2 && u2.data == k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n$1.call(u2.childNodes), b2 = i2.props || p$1$1, !c2 && e2 != null)
      for (b2 = {}, a2 = 0; a2 < u2.attributes.length; a2++)
        b2[(d2 = u2.attributes[a2]).name] = d2.value;
    for (a2 in b2)
      if (d2 = b2[a2], a2 != "children") {
        if (a2 == "dangerouslySetInnerHTML")
          y2 = d2;
        else if (!(a2 in k2)) {
          if (a2 == "value" && "defaultValue" in k2 || a2 == "checked" && "defaultChecked" in k2)
            continue;
          j$2(u2, a2, null, d2, o22);
        }
      }
    for (a2 in k2)
      d2 = k2[a2], a2 == "children" ? v2 = d2 : a2 == "dangerouslySetInnerHTML" ? h2 = d2 : a2 == "value" ? _2 = d2 : a2 == "checked" ? m2 = d2 : c2 && typeof d2 != "function" || b2[a2] === d2 || j$2(u2, a2, d2, b2[a2], o22);
    if (h2)
      c2 || y2 && (h2.__html == y2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
    else if (y2 && (u2.innerHTML = ""), I$2(t2.type == "template" ? u2.content : u2, w$3(v2) ? v2 : [v2], t2, i2, r2, x2 == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o22, e2, f2, e2 ? e2[0] : i2.__k && S$1(i2, 0), c2, s2), e2 != null)
      for (a2 = e2.length; a2--; )
        g$2(e2[a2]);
    c2 || (a2 = "value", x2 == "progress" && _2 == null ? u2.removeAttribute("value") : _2 != null && (_2 !== u2[a2] || x2 == "progress" && !_2 || x2 == "option" && _2 != b2[a2]) && j$2(u2, a2, _2, b2[a2], o22), a2 = "checked", m2 != null && m2 != u2[a2] && j$2(u2, a2, m2, b2[a2], o22));
  }
  return u2;
}
function q$2(n2, u2, t2) {
  try {
    if (typeof n2 == "function") {
      var i2 = typeof n2.__u == "function";
      i2 && n2.__u(), i2 && u2 == null || (n2.__u = n2(u2));
    } else
      n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function B$2(n2, u2, t2) {
  var i2, r2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || q$2(i2, null, u2)), (i2 = n2.__c) != null) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k)
    for (r2 = 0; r2 < i2.length; r2++)
      i2[r2] && B$2(i2[r2], u2, t2 || typeof n2.type != "function");
  t2 || g$2(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function D$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function E$2(u2, t2, i2) {
  var r2, o22, e2, f2;
  t2 == document && (t2 = document.documentElement), l$1.__ && l$1.__(u2, t2), o22 = (r2 = typeof i2 == "function") ? null : i2 && i2.__k || t2.__k, e2 = [], f2 = [], O$2(t2, u2 = (!r2 && i2 || t2).__k = _$3(k$2, null, [u2]), o22 || p$1$1, p$1$1, t2.namespaceURI, !r2 && i2 ? [i2] : o22 ? null : t2.firstChild ? n$1.call(t2.childNodes) : null, e2, !r2 && i2 ? i2 : o22 ? o22.__e : t2.firstChild, r2, f2), z$3(e2, u2, f2);
}
function G$2(n2, l2) {
  E$2(n2, l2, G$2);
}
function J$2(l2, u2, t2) {
  var i2, r2, o22, e2, f2 = d$2({}, l2.props);
  for (o22 in l2.type && l2.type.defaultProps && (e2 = l2.type.defaultProps), u2)
    o22 == "key" ? i2 = u2[o22] : o22 == "ref" ? r2 = u2[o22] : f2[o22] = u2[o22] == null && e2 != null ? e2[o22] : u2[o22];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : t2), m$2(l2.type, f2, i2 || l2.key, r2 || l2.ref, null);
}
function K$2(n2) {
  function l2(n3) {
    var u2, t2;
    return this.getChildContext || (u2 = /* @__PURE__ */ new Set(), (t2 = {})[l2.__c] = this, this.getChildContext = function() {
      return t2;
    }, this.componentWillUnmount = function() {
      u2 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value != n4.value && u2.forEach(function(n5) {
        n5.__e = true, M$1(n5);
      });
    }, this.sub = function(n4) {
      u2.add(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u2 && u2.delete(n4), l3 && l3.call(n4);
      };
    }), n3.children;
  }
  return l2.__c = "__cC" + h$2++, l2.__ = n2, l2.Provider = l2.__l = (l2.Consumer = function(n3, l3) {
    return n3.children(l3);
  }).contextType = l2, l2;
}
n$1 = y$2.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, r2, o22; l2 = l2.__; )
    if ((i2 = l2.__c) && !i2.__)
      try {
        if ((r2 = i2.constructor) && r2.getDerivedStateFromError != null && (i2.setState(r2.getDerivedStateFromError(n2)), o22 = i2.__d), i2.componentDidCatch != null && (i2.componentDidCatch(n2, t2 || {}), o22 = i2.__d), o22)
          return i2.__E = i2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1$1 = 0, x$2.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s != this.state ? this.__s : this.__s = d$2({}, this.state), typeof n2 == "function" && (n2 = n2(d$2({}, u2), this.props)), n2 && d$2(u2, n2), n2 != null && this.__v && (l2 && this._sb.push(l2), M$1(this));
}, x$2.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M$1(this));
}, x$2.prototype.render = k$2, i$1$1 = [], o$1$1 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$3 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, $$2.__r = 0, f$1$1 = /(PointerCapture)$|Capture$/i, c$1$1 = 0, s$1$1 = F$3(false), a$1$1 = F$3(true), h$2 = 0;
var f$2 = 0;
function u$4(e2, t2, n2, o22, i2, u2) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2)
    for (c2 in p2 = {}, t2)
      c2 == "ref" ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$2, __i: -1, __u: 0, __source: i2, __self: u2 };
  if (typeof e2 == "function" && (a2 = e2.defaultProps))
    for (c2 in a2)
      p2[c2] === void 0 && (p2[c2] = a2[c2]);
  return l$1.vnode && l$1.vnode(l2), l2;
}
var t$2, r$1, u$3, i$1, o = 0, f$1 = [], c$1 = l$1, e$2 = c$1.__b, a$2 = c$1.__r, v$1 = c$1.diffed, l = c$1.__c, m$1 = c$1.unmount, s$2 = c$1.__;
function p$1(n2, t2) {
  c$1.__h && c$1.__h(r$1, n2, o || t2), o = 0;
  var u2 = r$1.__H || (r$1.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function d$1(n2) {
  return o = 1, h$1(D$1, n2);
}
function h$1(n2, u2, i2) {
  var o22 = p$1(t$2++, 2);
  if (o22.t = n2, !o22.__c && (o22.__ = [i2 ? i2(u2) : D$1(void 0, u2), function(n22) {
    var t2 = o22.__N ? o22.__N[0] : o22.__[0], r2 = o22.t(t2, n22);
    t2 !== r2 && (o22.__N = [r2, o22.__[1]], o22.__c.setState({}));
  }], o22.__c = r$1, !r$1.__f)) {
    var f2 = function(n22, t2, r2) {
      if (!o22.__c.__H)
        return true;
      var u3 = o22.__c.__H.__.filter(function(n3) {
        return !!n3.__c;
      });
      if (u3.every(function(n3) {
        return !n3.__N;
      }))
        return !c2 || c2.call(this, n22, t2, r2);
      var i3 = o22.__c.props !== n22;
      return u3.forEach(function(n3) {
        if (n3.__N) {
          var t3 = n3.__[0];
          n3.__ = n3.__N, n3.__N = void 0, t3 !== n3.__[0] && (i3 = true);
        }
      }), c2 && c2.call(this, n22, t2, r2) || i3;
    };
    r$1.__f = true;
    var c2 = r$1.shouldComponentUpdate, e2 = r$1.componentWillUpdate;
    r$1.componentWillUpdate = function(n22, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n22, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n22, t2, r2);
    }, r$1.shouldComponentUpdate = f2;
  }
  return o22.__N || o22.__;
}
function y$1(n2, u2) {
  var i2 = p$1(t$2++, 3);
  !c$1.__s && C$1$1(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r$1.__H.__h.push(i2));
}
function _$2(n2, u2) {
  var i2 = p$1(t$2++, 4);
  !c$1.__s && C$1$1(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r$1.__h.push(i2));
}
function A$1(n2) {
  return o = 5, T$1(function() {
    return { current: n2 };
  }, []);
}
function F$1(n2, t2, r2) {
  o = 6, _$2(function() {
    if (typeof n2 == "function") {
      var r3 = n2(t2());
      return function() {
        n2(null), r3 && typeof r3 == "function" && r3();
      };
    }
    if (n2)
      return n2.current = t2(), function() {
        return n2.current = null;
      };
  }, r2 == null ? r2 : r2.concat(n2));
}
function T$1(n2, r2) {
  var u2 = p$1(t$2++, 7);
  return C$1$1(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function q$1(n2, t2) {
  return o = 8, T$1(function() {
    return n2;
  }, t2);
}
function x$1(n2) {
  var u2 = r$1.context[n2.__c], i2 = p$1(t$2++, 9);
  return i2.c = n2, u2 ? (i2.__ == null && (i2.__ = true, u2.sub(r$1)), u2.props.value) : n2.__;
}
function P$1$1(n2, t2) {
  c$1.useDebugValue && c$1.useDebugValue(t2 ? t2(n2) : n2);
}
function g$1() {
  var n2 = p$1(t$2++, 11);
  if (!n2.__) {
    for (var u2 = r$1.__v; u2 !== null && !u2.__m && u2.__ !== null; )
      u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n2.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n2.__;
}
function j$1() {
  for (var n2; n2 = f$1.shift(); )
    if (n2.__P && n2.__H)
      try {
        n2.__H.__h.forEach(z$2), n2.__H.__h.forEach(B$1), n2.__H.__h = [];
      } catch (t2) {
        n2.__H.__h = [], c$1.__e(t2, n2.__v);
      }
}
c$1.__b = function(n2) {
  r$1 = null, e$2 && e$2(n2);
}, c$1.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s$2 && s$2(n2, t2);
}, c$1.__r = function(n2) {
  a$2 && a$2(n2), t$2 = 0;
  var i2 = (r$1 = n2.__c).__H;
  i2 && (u$3 === r$1 ? (i2.__h = [], r$1.__h = [], i2.__.forEach(function(n22) {
    n22.__N && (n22.__ = n22.__N), n22.u = n22.__N = void 0;
  })) : (i2.__h.forEach(z$2), i2.__h.forEach(B$1), i2.__h = [], t$2 = 0)), u$3 = r$1;
}, c$1.diffed = function(n2) {
  v$1 && v$1(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (f$1.push(t2) !== 1 && i$1 === c$1.requestAnimationFrame || ((i$1 = c$1.requestAnimationFrame) || w$1)(j$1)), t2.__H.__.forEach(function(n22) {
    n22.u && (n22.__H = n22.u), n22.u = void 0;
  })), u$3 = r$1 = null;
}, c$1.__c = function(n2, t2) {
  t2.some(function(n22) {
    try {
      n22.__h.forEach(z$2), n22.__h = n22.__h.filter(function(n3) {
        return !n3.__ || B$1(n3);
      });
    } catch (r2) {
      t2.some(function(n3) {
        n3.__h && (n3.__h = []);
      }), t2 = [], c$1.__e(r2, n22.__v);
    }
  }), l && l(n2, t2);
}, c$1.unmount = function(n2) {
  m$1 && m$1(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n22) {
    try {
      z$2(n22);
    } catch (n3) {
      t2 = n3;
    }
  }), r2.__H = void 0, t2 && c$1.__e(t2, r2.__v));
};
var k$1 = typeof requestAnimationFrame == "function";
function w$1(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k$1 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  k$1 && (t2 = requestAnimationFrame(r2));
}
function z$2(n2) {
  var t2 = r$1, u2 = n2.__c;
  typeof u2 == "function" && (n2.__c = void 0, u2()), r$1 = t2;
}
function B$1(n2) {
  var t2 = r$1;
  n2.__c = n2.__(), r$1 = t2;
}
function C$1$1(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D$1(n2, t2) {
  return typeof t2 == "function" ? t2(n2) : t2;
}
function g(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function E$1(n2, t2) {
  for (var e2 in n2)
    if (e2 !== "__source" && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if (r2 !== "__source" && n2[r2] !== t2[r2])
      return true;
  return false;
}
function C$2(n2, t2) {
  var e2 = t2(), r2 = d$1({ t: { __: e2, u: t2 } }), u2 = r2[0].t, o22 = r2[1];
  return _$2(function() {
    u2.__ = e2, u2.u = t2, x(u2) && o22({ t: u2 });
  }, [n2, e2, t2]), y$1(function() {
    return x(u2) && o22({ t: u2 }), n2(function() {
      x(u2) && o22({ t: u2 });
    });
  }, [n2]), e2;
}
function x(n2) {
  var t2, e2, r2 = n2.u, u2 = n2.__;
  try {
    var o22 = r2();
    return !((t2 = u2) === (e2 = o22) && (t2 !== 0 || 1 / t2 == 1 / e2) || t2 != t2 && e2 != e2);
  } catch {
    return true;
  }
}
function R$1(n2) {
  n2();
}
function w$2(n2) {
  return n2;
}
function k() {
  return [false, R$1];
}
var I$1 = _$2;
function N$1(n2, t2) {
  this.props = n2, this.context = t2;
}
function M(n2, e2) {
  function r2(n22) {
    var t2 = this.props.ref, r3 = t2 == n22.ref;
    return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n22) || !r3 : E$1(this.props, n22);
  }
  function u2(e3) {
    return this.shouldComponentUpdate = r2, _$3(n2, e3);
  }
  return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
}
(N$1.prototype = new x$2()).isPureReactComponent = true, N$1.prototype.shouldComponentUpdate = function(n2, t2) {
  return E$1(this.props, n2) || E$1(this.state, t2);
};
var T = l$1.__b;
l$1.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T && T(n2);
};
var A$2 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function D(n2) {
  function t2(t3) {
    var e2 = g({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = A$2, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var L$2 = function(n2, t2) {
  return n2 == null ? null : H$4(H$4(n2).map(t2));
}, O$1 = { map: L$2, forEach: L$2, count: function(n2) {
  return n2 ? H$4(n2).length : 0;
}, only: function(n2) {
  var t2 = H$4(n2);
  if (t2.length !== 1)
    throw "Children.only";
  return t2[0];
}, toArray: H$4 }, F$2 = l$1.__e;
l$1.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o22 = t2; o22 = o22.__; )
      if ((u2 = o22.__c) && u2.__c)
        return t2.__e == null && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  F$2(n2, t2, e2, r2);
};
var U$3 = l$1.unmount;
function V(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n22) {
    typeof n22.__c == "function" && n22.__c();
  }), n2.__c.__H = null), (n2 = g({}, n2)).__c != null && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c.__e = true, n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n22) {
    return V(n22, t2, e2);
  })), n2;
}
function W(n2, t2, e2) {
  return n2 && e2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n22) {
    return W(n22, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function P$3() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function z$1(n2) {
  var e2, r2, u2;
  function o22(o3) {
    if (e2 || (e2 = n2()).then(function(n22) {
      r2 = n22.default || n22;
    }, function(n22) {
      u2 = n22;
    }), u2)
      throw u2;
    if (!r2)
      throw e2;
    return _$3(r2, o3);
  }
  return o22.displayName = "Lazy", o22.__f = true, o22;
}
function B() {
  this.i = null, this.l = null;
}
l$1.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & n2.__u && (n2.type = null), U$3 && U$3(n2);
}, (P$3.prototype = new x$2()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  r2.o == null && (r2.o = []), r2.o.push(e2);
  var u2 = j(r2.__v), o22 = false, i2 = function() {
    o22 || (o22 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n22 = r2.state.__a;
        r2.__v.__k[0] = W(n22, n22.__c.__P, n22.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); )
        t3.forceUpdate();
    }
  };
  r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, P$3.prototype.componentWillUnmount = function() {
  this.o = [];
}, P$3.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o22 = this.__v.__k[0].__c;
      this.__v.__k[0] = V(this.__b, r2, o22.__O = o22.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && _$3(k$2, null, n2.fallback);
  return i2 && (i2.__u &= -33), [_$3(k$2, null, e2.__a ? null : n2.children), i2];
};
var H$3 = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.l.delete(t2), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.l.size))
    for (e2 = n2.i; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.i = e2 = e2[2];
    }
};
function Z(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function Y(n2) {
  var e2 = this, r2 = n2.h;
  if (e2.componentWillUnmount = function() {
    E$2(null, e2.v), e2.v = null, e2.h = null;
  }, e2.h && e2.h !== r2 && e2.componentWillUnmount(), !e2.v) {
    for (var u2 = e2.__v; u2 !== null && !u2.__m && u2.__ !== null; )
      u2 = u2.__;
    e2.h = r2, e2.v = { nodeType: 1, parentNode: r2, childNodes: [], __k: { __m: u2.__m }, contains: function() {
      return true;
    }, appendChild: function(n22) {
      this.childNodes.push(n22), e2.h.appendChild(n22);
    }, insertBefore: function(n22, t2) {
      this.childNodes.push(n22), e2.h.insertBefore(n22, t2);
    }, removeChild: function(n22) {
      this.childNodes.splice(this.childNodes.indexOf(n22) >>> 1, 1), e2.h.removeChild(n22);
    } };
  }
  E$2(_$3(Z, { context: e2.context }, n2.__v), e2.v);
}
function $$1(n2, e2) {
  var r2 = _$3(Y, { __v: n2, h: e2 });
  return r2.containerInfo = e2, r2;
}
(B.prototype = new x$2()).__a = function(n2) {
  var t2 = this, e2 = j(t2.__v), r2 = t2.l.get(n2);
  return r2[0]++, function(u2) {
    var o22 = function() {
      t2.props.revealOrder ? (r2.push(u2), H$3(t2, n2, r2)) : u2();
    };
    e2 ? e2(o22) : o22();
  };
}, B.prototype.render = function(n2) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t2 = H$4(n2.children);
  n2.revealOrder && n2.revealOrder[0] === "b" && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.l.set(t2[e2], this.i = [1, 0, this.i]);
  return n2.children;
}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
  var n2 = this;
  this.l.forEach(function(t2, e2) {
    H$3(n2, e2, t2);
  });
};
var q = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, G$1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J$1 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K$1 = /[A-Z0-9]/g, Q = typeof document < "u", X = function(n2) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function nn(n2, t2, e2) {
  return t2.__k == null && (t2.textContent = ""), E$2(n2, t2), typeof e2 == "function" && e2(), n2 ? n2.__c : null;
}
function tn(n2, t2, e2) {
  return G$2(n2, t2), typeof e2 == "function" && e2(), n2 ? n2.__c : null;
}
x$2.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(x$2.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var en = l$1.event;
function rn() {
}
function un() {
  return this.cancelBubble;
}
function on() {
  return this.defaultPrevented;
}
l$1.event = function(n2) {
  return en && (n2 = en(n2)), n2.persist = rn, n2.isPropagationStopped = un, n2.isDefaultPrevented = on, n2.nativeEvent = n2;
};
var ln, cn$1 = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, fn = l$1.vnode;
l$1.vnode = function(n2) {
  typeof n2.type == "string" && function(n22) {
    var t2 = n22.props, e2 = n22.type, u2 = {}, o22 = e2.indexOf("-") === -1;
    for (var i2 in t2) {
      var l2 = t2[i2];
      if (!(i2 === "value" && "defaultValue" in t2 && l2 == null || Q && i2 === "children" && e2 === "noscript" || i2 === "class" || i2 === "className")) {
        var c2 = i2.toLowerCase();
        i2 === "defaultValue" && "value" in t2 && t2.value == null ? i2 = "value" : i2 === "download" && l2 === true ? l2 = "" : c2 === "translate" && l2 === "no" ? l2 = false : c2[0] === "o" && c2[1] === "n" ? c2 === "ondoubleclick" ? i2 = "ondblclick" : c2 !== "onchange" || e2 !== "input" && e2 !== "textarea" || X(t2.type) ? c2 === "onfocus" ? i2 = "onfocusin" : c2 === "onblur" ? i2 = "onfocusout" : J$1.test(i2) && (i2 = c2) : c2 = i2 = "oninput" : o22 && G$1.test(i2) ? i2 = i2.replace(K$1, "-$&").toLowerCase() : l2 === null && (l2 = void 0), c2 === "oninput" && u2[i2 = c2] && (i2 = "oninputCapture"), u2[i2] = l2;
      }
    }
    e2 == "select" && u2.multiple && Array.isArray(u2.value) && (u2.value = H$4(t2.children).forEach(function(n3) {
      n3.props.selected = u2.value.indexOf(n3.props.value) != -1;
    })), e2 == "select" && u2.defaultValue != null && (u2.value = H$4(t2.children).forEach(function(n3) {
      n3.props.selected = u2.multiple ? u2.defaultValue.indexOf(n3.props.value) != -1 : u2.defaultValue == n3.props.value;
    })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", cn$1)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n22.props = u2;
  }(n2), n2.$$typeof = q, fn && fn(n2);
};
var an = l$1.__r;
l$1.__r = function(n2) {
  an && an(n2), ln = n2.__c;
};
var sn = l$1.diffed;
l$1.diffed = function(n2) {
  sn && sn(n2);
  var t2 = n2.props, e2 = n2.__e;
  e2 != null && n2.type === "textarea" && "value" in t2 && t2.value !== e2.value && (e2.value = t2.value == null ? "" : t2.value), ln = null;
};
var hn = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return ln.__n[n2.__c].props.value;
}, useCallback: q$1, useContext: x$1, useDebugValue: P$1$1, useDeferredValue: w$2, useEffect: y$1, useId: g$1, useImperativeHandle: F$1, useInsertionEffect: I$1, useLayoutEffect: _$2, useMemo: T$1, useReducer: h$1, useRef: A$1, useState: d$1, useSyncExternalStore: C$2, useTransition: k } } };
function dn(n2) {
  return _$3.bind(null, n2);
}
function mn(n2) {
  return !!n2 && n2.$$typeof === q;
}
function pn(n2) {
  return mn(n2) && n2.type === k$2;
}
function yn(n2) {
  return !!n2 && !!n2.displayName && (typeof n2.displayName == "string" || n2.displayName instanceof String) && n2.displayName.startsWith("Memo(");
}
function _n(n2) {
  return mn(n2) ? J$2.apply(null, arguments) : n2;
}
function bn(n2) {
  return !!n2.__k && (E$2(null, n2), true);
}
function Sn(n2) {
  return n2 && (n2.base || n2.nodeType === 1 && n2) || null;
}
var gn = function(n2, t2) {
  return n2(t2);
}, En = function(n2, t2) {
  return n2(t2);
}, Cn = k$2, xn = mn, Rn = { useState: d$1, useId: g$1, useReducer: h$1, useEffect: y$1, useLayoutEffect: _$2, useInsertionEffect: I$1, useTransition: k, useDeferredValue: w$2, useSyncExternalStore: C$2, startTransition: R$1, useRef: A$1, useImperativeHandle: F$1, useMemo: T$1, useCallback: q$1, useContext: x$1, useDebugValue: P$1$1, version: "18.3.1", Children: O$1, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $$1, createElement: _$3, createContext: K$2, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k$2, isValidElement: mn, isElement: xn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: x$2, PureComponent: N$1, memo: M, forwardRef: D, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P$3, SuspenseList: B, lazy: z$1, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn }, generateId$1 = (length = 16) => Math.random().toString(36).substring(2, length + 2), DEFAULT_OPTIONS = {
  maxReconnectAttempts: 5,
  reconnectDelay: 1e3,
  requestTimeout: 3e4
  // Extended timeout for longer operations
}, WebSocketRpcBridge = class {
  constructor(options = {}) {
    this.ws = null, this.pendingRequests = /* @__PURE__ */ new Map(), this.reconnectAttempts = 0, this.methods = {}, this.isIntentionalClose = false, this.options = { ...DEFAULT_OPTIONS, ...options };
  }
  /**
   * Register RPC method handlers
   * @param methodHandlers Object containing method handlers
   */
  register(methodHandlers) {
    Object.entries(methodHandlers).forEach(([methodName, handler]) => {
      this.methods[methodName] = { handler };
    });
  }
  /**
   * Generic method to call a remote procedure with support for streaming updates
   * @param method Method name to call
   * @param payload Request payload
   * @param onUpdate Optional callback for progress updates
   * @returns Promise resolving with the response
   */
  callMethod(method, payload, onUpdate) {
    if (!this.ws)
      throw new Error("WebSocket is not connected");
    const id = generateId$1(), requestMessage = {
      id,
      messageType: "request",
      method,
      payload
    };
    return new Promise((resolve, reject) => {
      var _a;
      const timeout = setTimeout(() => {
        this.pendingRequests.delete(id), reject(new Error(`Request timed out: ${method}`));
      }, this.options.requestTimeout);
      this.pendingRequests.set(id, { resolve, reject, timeout, onUpdate }), (_a = this.ws) == null || _a.send(JSON.stringify(requestMessage));
    });
  }
  /**
   * Sets up WebSocket event handlers
   * @param ws WebSocket instance
   */
  setupWebSocketHandlers(ws) {
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        this.handleMessage(message);
      } catch (error) {
        console.error("Error handling WebSocket message:", error);
      }
    }, ws.onclose = () => {
      this.handleDisconnect();
    }, ws.onerror = (event) => {
      console.error("WebSocket error:", event);
    };
  }
  /**
   * Handles incoming WebSocket messages
   * @param message The message to handle
   */
  handleMessage(message) {
    const { messageType, id } = message;
    switch (messageType) {
      case "request":
        this.handleRequest(message);
        break;
      case "response":
        this.handleResponse(id, message.payload);
        break;
      case "update":
        this.handleUpdate(id, message.payload);
        break;
      case "error":
        this.handleError(id, message.error.message);
        break;
      default:
        console.warn(`Unknown message type: ${messageType}`);
    }
  }
  /**
   * Handle incoming requests by invoking the registered method
   * @param message Request message
   */
  async handleRequest(message) {
    const { id, method, payload } = message;
    if (!method) {
      this.sendError(id, "Method name is required");
      return;
    }
    const methodDef = this.methods[method];
    if (!methodDef) {
      this.sendError(id, `Method not found: ${method}`);
      return;
    }
    try {
      const sendUpdate = (update) => {
        this.sendUpdate(id, method, update);
      }, result = await methodDef.handler(payload, sendUpdate);
      this.sendResponse(id, method, result);
    } catch (error) {
      this.sendError(
        id,
        error instanceof Error ? error.message : String(error)
      );
    }
  }
  /**
   * Handle response messages by resolving the pending request
   * @param id Request ID
   * @param payload Response payload
   */
  handleResponse(id, payload) {
    const pendingRequest = this.pendingRequests.get(id);
    if (!pendingRequest) {
      console.warn(`Received response for unknown request ID: ${id}`);
      return;
    }
    clearTimeout(pendingRequest.timeout), this.pendingRequests.delete(id), pendingRequest.resolve(payload);
  }
  /**
   * Handle update messages by calling the update callback
   * @param id Request ID
   * @param payload Update payload
   */
  handleUpdate(id, payload) {
    const pendingRequest = this.pendingRequests.get(id);
    if (!pendingRequest || !pendingRequest.onUpdate) {
      console.warn(`Received update for unknown request ID: ${id}`);
      return;
    }
    pendingRequest.onUpdate(payload);
  }
  /**
   * Handle error messages by rejecting the pending request
   * @param id Request ID
   * @param error Error message
   */
  handleError(id, error) {
    const pendingRequest = this.pendingRequests.get(id);
    if (!pendingRequest) {
      console.warn(`Received error for unknown request ID: ${id}`);
      return;
    }
    clearTimeout(pendingRequest.timeout), this.pendingRequests.delete(id), pendingRequest.reject(new Error(error));
  }
  /**
   * Send a response message
   * @param id Request ID
   * @param method Method name
   * @param payload Response payload
   */
  sendResponse(id, method, payload) {
    if (!this.ws)
      throw new Error("WebSocket is not connected");
    const responseMessage = {
      id,
      messageType: "response",
      method,
      payload
    };
    this.ws.send(JSON.stringify(responseMessage));
  }
  /**
   * Send an update message for streaming
   * @param id Request ID
   * @param method Method name
   * @param payload Update payload
   */
  sendUpdate(id, method, payload) {
    if (!this.ws)
      throw new Error("WebSocket is not connected");
    const updateMessage = {
      id,
      messageType: "update",
      method,
      payload
    };
    this.ws.send(JSON.stringify(updateMessage));
  }
  /**
   * Send an error message
   * @param id Request ID
   * @param errorMessage Error message
   */
  sendError(id, errorMessage) {
    if (!this.ws)
      throw new Error("WebSocket is not connected");
    const errorResponse = {
      id,
      messageType: "error",
      error: {
        message: errorMessage
      }
    };
    this.ws.send(JSON.stringify(errorResponse));
  }
  /**
   * Handle disconnection by attempting to reconnect
   */
  handleDisconnect() {
    if (this.isIntentionalClose) {
      console.log(
        "WebSocket closed intentionally, not attempting to reconnect"
      ), this.clearPendingRequests(new Error("Connection closed by user"));
      return;
    }
    this.reconnectAttempts < this.options.maxReconnectAttempts ? (this.reconnectAttempts++, console.log(
      `Attempting to reconnect (${this.reconnectAttempts}/${this.options.maxReconnectAttempts})...`
    ), setTimeout(
      () => this.reconnect(),
      this.options.reconnectDelay * this.reconnectAttempts
    )) : (console.error("Max reconnection attempts reached"), this.clearPendingRequests(new Error("Connection closed")));
  }
  /**
   * Clear all pending requests with an error
   * @param error Error to reject with
   */
  clearPendingRequests(error) {
    this.pendingRequests.forEach(({ reject }) => {
      reject(error);
    }), this.pendingRequests.clear();
  }
  /**
   * Close the WebSocket connection
   * @returns Promise that resolves when the connection is closed
   */
  async close() {
    this.isIntentionalClose = true, this.ws && (this.ws.close(), this.ws = null), this.clearPendingRequests(new Error("Connection closed by user"));
  }
};
function validateWithZod(schema, data, context, silent = false) {
  const result = schema.safeParse(data);
  if (!result.success) {
    const error = new Error(
      `Validation failed for ${context}: ${result.error.message}`
    );
    if (silent)
      return console.error(error), data;
    throw error;
  }
  return result.data;
}
var ZodTypedBridge = class {
  constructor(bridge, contract2) {
    this.bridge = bridge, this.contract = contract2, this.call = new Proxy({}, {
      get: (target, prop) => (request, options) => this.callMethod(prop, request, options)
    });
  }
  async callMethod(method, request, options) {
    const methodContract = this.contract.consumes[method];
    if (!methodContract)
      throw new Error(`Method ${String(method)} not found in contract`);
    const validatedRequest = validateWithZod(
      methodContract.request,
      request,
      `request for method ${String(method)}`
    ), onUpdate = options != null && options.onUpdate && methodContract.update ? (update) => {
      var _a;
      if (methodContract.update)
        try {
          const validatedUpdate = validateWithZod(
            methodContract.update,
            update,
            `update for method ${String(method)}`,
            true
            // silently log validation errors
          );
          (_a = options.onUpdate) == null || _a.call(options, validatedUpdate);
        } catch (error) {
          console.error("Update validation failed:", error);
        }
    } : void 0, response = await this.bridge.callMethod(
      method,
      validatedRequest,
      onUpdate
    );
    return validateWithZod(
      methodContract.response,
      response,
      `response for method ${String(method)}`
    );
  }
  register(implementations) {
    const wrappedImplementations = {};
    for (const [method, implementation] of Object.entries(implementations)) {
      const methodContract = this.contract.serves[method];
      if (!methodContract)
        throw new Error(`Method ${method} not found in contract`);
      wrappedImplementations[method] = async (request, sendUpdate) => {
        const validatedRequest = validateWithZod(
          methodContract.request,
          request,
          `request for method ${method}`
        ), wrappedSendUpdate = methodContract.update && sendUpdate ? (update) => {
          if (methodContract.update)
            try {
              const validatedUpdate = validateWithZod(
                methodContract.update,
                update,
                `update for method ${method}`,
                true
                // silently log validation errors
              );
              sendUpdate(validatedUpdate);
            } catch (error) {
              console.error("Update validation failed:", error);
            }
        } : void 0, response = await implementation(validatedRequest, {
          sendUpdate: wrappedSendUpdate
        });
        return validateWithZod(
          methodContract.response,
          response,
          `response for method ${method}`
        );
      };
    }
    this.bridge.register(wrappedImplementations);
  }
  async close() {
    await this.bridge.close();
  }
}, ClientBridge = class extends WebSocketRpcBridge {
  constructor(url, options) {
    super(options), this.reconnectTimer = null, this.url = url;
  }
  call(method, payload, onUpdate) {
    return this.callMethod(method, payload, onUpdate);
  }
  reconnect() {
    this.reconnectTimer && clearTimeout(this.reconnectTimer), this.reconnectTimer = setTimeout(async () => {
      try {
        await this.connect();
      } catch {
        this.reconnect();
      }
    }, this.options.reconnectDelay);
  }
  connect() {
    return new Promise((resolve, reject) => {
      try {
        const ws = new window.WebSocket(this.url);
        ws.onopen = () => {
          this.ws = ws, this.setupWebSocketHandlers(ws), resolve();
        }, ws.onerror = () => {
          reject(new Error("Failed to connect to WebSocket server"));
        };
      } catch (error) {
        reject(error);
      }
    });
  }
}, ZodClient = class extends ZodTypedBridge {
  constructor(url, contract2, options) {
    super(new ClientBridge(url, options), {
      serves: contract2.client || {},
      consumes: contract2.server || {}
    });
  }
  connect() {
    return this.bridge.connect();
  }
};
function createSRPCClientBridge(url, contract2, options) {
  return new ZodClient(url, contract2, options);
}
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever, util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items)
      obj[item] = item;
    return obj;
  }, util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] != "number"), filtered = {};
    for (const k2 of validKeys)
      filtered[k2] = obj[k2];
    return util2.objectValues(filtered);
  }, util2.objectValues = (obj) => util2.objectKeys(obj).map(function(e2) {
    return obj[e2];
  }), util2.objectKeys = typeof Object.keys == "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object)
      Object.prototype.hasOwnProperty.call(object, key) && keys.push(key);
    return keys;
  }, util2.find = (arr, checker) => {
    for (const item of arr)
      if (checker(item))
        return item;
  }, util2.isInteger = typeof Number.isInteger == "function" ? (val) => Number.isInteger(val) : (val) => typeof val == "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val == "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues, util2.jsonStringifyReplacer = (_2, value) => typeof value == "bigint" ? value.toString() : value;
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => ({
    ...first,
    ...second
    // second overwrites first
  });
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), getParsedType = (data) => {
  switch (typeof data) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      return Array.isArray(data) ? ZodParsedType.array : data === null ? ZodParsedType.null : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? ZodParsedType.promise : typeof Map < "u" && data instanceof Map ? ZodParsedType.map : typeof Set < "u" && data instanceof Set ? ZodParsedType.set : typeof Date < "u" && data instanceof Date ? ZodParsedType.date : ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), quotelessJson = (obj) => JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, "$1:");
class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super(), this.issues = [], this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    }, this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, actualProto) : this.__proto__ = actualProto, this.name = "ZodError", this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    }, fieldErrors = { _errors: [] }, processError = (error) => {
      for (const issue of error.issues)
        if (issue.code === "invalid_union")
          issue.unionErrors.map(processError);
        else if (issue.code === "invalid_return_type")
          processError(issue.returnTypeError);
        else if (issue.code === "invalid_arguments")
          processError(issue.argumentsError);
        else if (issue.path.length === 0)
          fieldErrors._errors.push(mapper(issue));
        else {
          let curr = fieldErrors, i2 = 0;
          for (; i2 < issue.path.length; ) {
            const el = issue.path[i2];
            i2 === issue.path.length - 1 ? (curr[el] = curr[el] || { _errors: [] }, curr[el]._errors.push(mapper(issue))) : curr[el] = curr[el] || { _errors: [] }, curr = curr[el], i2++;
          }
        }
    };
    return processError(this), fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError))
      throw new Error(`Not a ZodError: ${value}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {}, formErrors = [];
    for (const sub of this.issues)
      sub.path.length > 0 ? (fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [], fieldErrors[sub.path[0]].push(mapper(sub))) : formErrors.push(mapper(sub));
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => new ZodError(issues);
const errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      issue.received === ZodParsedType.undefined ? message = "Required" : message = `Expected ${issue.expected}, received ${issue.received}`;
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      message = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      message = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      typeof issue.validation == "object" ? "includes" in issue.validation ? (message = `Invalid input: must include "${issue.validation.includes}"`, typeof issue.validation.position == "number" && (message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`)) : "startsWith" in issue.validation ? message = `Invalid input: must start with "${issue.validation.startsWith}"` : "endsWith" in issue.validation ? message = `Invalid input: must end with "${issue.validation.endsWith}"` : util.assertNever(issue.validation) : issue.validation !== "regex" ? message = `Invalid ${issue.validation}` : message = "Invalid";
      break;
    case ZodIssueCode.too_small:
      issue.type === "array" ? message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? "at least" : "more than"} ${issue.minimum} element(s)` : issue.type === "string" ? message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? "at least" : "over"} ${issue.minimum} character(s)` : issue.type === "number" ? message = `Number must be ${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}${issue.minimum}` : issue.type === "date" ? message = `Date must be ${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(issue.minimum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      issue.type === "array" ? message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? "at most" : "less than"} ${issue.maximum} element(s)` : issue.type === "string" ? message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? "at most" : "under"} ${issue.maximum} character(s)` : issue.type === "number" ? message = `Number must be ${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} ${issue.maximum}` : issue.type === "bigint" ? message = `BigInt must be ${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} ${issue.maximum}` : issue.type === "date" ? message = `Date must be ${issue.exact ? "exactly" : issue.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(issue.maximum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError, util.assertNever(issue);
  }
  return { message };
};
let overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
const makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params, fullPath = [...path, ...issueData.path || []], fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0)
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  let errorMessage = "";
  const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
  for (const map of maps)
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
}, EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap(), issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === errorMap ? void 0 : errorMap
      // then global default map
    ].filter((x2) => !!x2)
  });
  ctx.common.issues.push(issue);
}
class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      s2.status === "dirty" && status.dirty(), arrayValue.push(s2.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key, value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted" || value.status === "aborted")
        return INVALID;
      key.status === "dirty" && status.dirty(), value.status === "dirty" && status.dirty(), key.value !== "__proto__" && (typeof value.value < "u" || pair.alwaysSet) && (finalObject[key.value] = value.value);
    }
    return { status: status.value, value: finalObject };
  }
}
const INVALID = Object.freeze({
  status: "aborted"
}), DIRTY = (value) => ({ status: "dirty", value }), OK = (value) => ({ status: "valid", value }), isAborted = (x2) => x2.status === "aborted", isDirty = (x2) => x2.status === "dirty", isValid = (x2) => x2.status === "valid", isAsync = (x2) => typeof Promise < "u" && x2 instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f2) {
  if (typeof state == "function" ? receiver !== state || true : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f2) {
  if (typeof state == "function" ? receiver !== state || true : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return state.set(receiver, value), value;
}
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message == "string" ? { message } : message || {}, errorUtil2.toString = (message) => typeof message == "string" ? message : message == null ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache, _ZodNativeEnum_cache;
class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [], this.parent = parent, this.data = value, this._path = path, this._key = key;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const handleResult = (ctx, result) => {
  if (isValid(result))
    return { success: true, data: result.value };
  if (!ctx.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: false,
    get error() {
      if (this._error)
        return this._error;
      const error = new ZodError(ctx.common.issues);
      return this._error = error, this._error;
    }
  };
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return errorMap2 ? { errorMap: errorMap2, description } : { errorMap: (iss, ctx) => {
    var _a, _b;
    const { message } = params;
    return iss.code === "invalid_enum_value" ? { message: message ?? ctx.defaultError } : typeof ctx.data > "u" ? { message: (_a = message ?? required_error) !== null && _a !== void 0 ? _a : ctx.defaultError } : iss.code !== "invalid_type" ? { message: ctx.defaultError } : { message: (_b = message ?? invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
  }, description };
}
class ZodType {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result))
      throw new Error("Synchronous parse encountered promise.");
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params == null ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params == null ? void 0 : params.errorMap
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async)
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        !((_b = (_a = err == null ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0) && _b.includes("encountered") && (this["~standard"].async = true), ctx.common = {
          issues: [],
          async: true
        };
      }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params == null ? void 0 : params.errorMap,
        async: true
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx }), result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => typeof message == "string" || typeof message > "u" ? { message } : typeof message == "function" ? message(val) : message;
    return this._refinement((val, ctx) => {
      const result = check(val), setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      return typeof Promise < "u" && result instanceof Promise ? result.then((data) => data ? true : (setError(), false)) : result ? true : (setError(), false);
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => check(val) ? true : (ctx.addIssue(typeof refinementData == "function" ? refinementData(val, ctx) : refinementData), false));
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync, this._def = def, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def == "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def == "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cuidRegex = /^c[^\s-]{8,}$/i, cuid2Regex = /^[0-9a-z]+$/, ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i, uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, nanoidRegex = /^[a-z0-9_-]{21}$/i, jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, _emojiRegex = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let emojiRegex;
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, dateRegexSource = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = "[0-5]\\d";
  args.precision ? secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}` : args.precision == null && (secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`);
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  return opts.push(args.local ? "Z?" : "Z"), args.offset && opts.push("([+-]\\d{2}:?\\d{2})"), regex = `${regex}(${opts.join("|")})`, new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  return !!((version === "v4" || !version) && ipv4Regex.test(ip) || (version === "v6" || !version) && ipv6Regex.test(ip));
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split("."), base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "="), decoded = JSON.parse(atob(base64));
    return !(typeof decoded != "object" || decoded === null || !decoded.typ || !decoded.alg || alg && decoded.alg !== alg);
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  return !!((version === "v4" || !version) && ipv4CidrRegex.test(ip) || (version === "v6" || !version) && ipv6CidrRegex.test(ip));
}
class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = String(input.data)), this._getType(input) !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      }), INVALID;
    }
    const status = new ParseStatus();
    let ctx;
    for (const check of this._def.checks)
      if (check.kind === "min")
        input.data.length < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: true,
          exact: false,
          message: check.message
        }), status.dirty());
      else if (check.kind === "max")
        input.data.length > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: true,
          exact: false,
          message: check.message
        }), status.dirty());
      else if (check.kind === "length") {
        const tooBig = input.data.length > check.value, tooSmall = input.data.length < check.value;
        (tooBig || tooSmall) && (ctx = this._getOrReturnCtx(input, ctx), tooBig ? addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: true,
          exact: true,
          message: check.message
        }) : tooSmall && addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: true,
          exact: true,
          message: check.message
        }), status.dirty());
      } else if (check.kind === "email")
        emailRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "email",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "emoji")
        emojiRegex || (emojiRegex = new RegExp(_emojiRegex, "u")), emojiRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "emoji",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "uuid")
        uuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "uuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "nanoid")
        nanoidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "nanoid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid")
        cuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid2")
        cuid2Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid2",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "ulid")
        ulidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "ulid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "url")
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          }), status.dirty();
        }
      else
        check.kind === "regex" ? (check.regex.lastIndex = 0, check.regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "regex",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty())) : check.kind === "trim" ? input.data = input.data.trim() : check.kind === "includes" ? input.data.includes(check.value, check.position) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: { includes: check.value, position: check.position },
          message: check.message
        }), status.dirty()) : check.kind === "toLowerCase" ? input.data = input.data.toLowerCase() : check.kind === "toUpperCase" ? input.data = input.data.toUpperCase() : check.kind === "startsWith" ? input.data.startsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: { startsWith: check.value },
          message: check.message
        }), status.dirty()) : check.kind === "endsWith" ? input.data.endsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: { endsWith: check.value },
          message: check.message
        }), status.dirty()) : check.kind === "datetime" ? datetimeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: "datetime",
          message: check.message
        }), status.dirty()) : check.kind === "date" ? dateRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: "date",
          message: check.message
        }), status.dirty()) : check.kind === "time" ? timeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: "time",
          message: check.message
        }), status.dirty()) : check.kind === "duration" ? durationRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "duration",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty()) : check.kind === "ip" ? isValidIP(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "ip",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty()) : check.kind === "jwt" ? isValidJWT(input.data, check.alg) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "jwt",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty()) : check.kind === "cidr" ? isValidCidr(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cidr",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty()) : check.kind === "base64" ? base64Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "base64",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty()) : check.kind === "base64url" ? base64urlRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "base64url",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a, _b;
    return typeof options == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: false,
      local: false,
      message: options
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (options == null ? void 0 : options.precision) > "u" ? null : options == null ? void 0 : options.precision,
      offset: (_a = options == null ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      local: (_b = options == null ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    return typeof options == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: options
    }) : this._addCheck({
      kind: "time",
      precision: typeof (options == null ? void 0 : options.precision) > "u" ? null : options == null ? void 0 : options.precision,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options == null ? void 0 : options.position,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params == null ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length, stepDecCount = (step.toString().split(".")[1] || "").length, decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount, valInt = parseInt(val.toFixed(decCount).replace(".", "")), stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce && (input.data = Number(input.data)), this._getType(input) !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      }), INVALID;
    }
    let ctx;
    const status = new ParseStatus();
    for (const check of this._def.checks)
      check.kind === "int" ? util.isInteger(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: "integer",
        received: "float",
        message: check.message
      }), status.dirty()) : check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: false,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: false,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? floatSafeRemainder(input.data, check.value) !== 0 && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : check.kind === "finite" ? Number.isFinite(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_finite,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf")
        return true;
      ch.kind === "min" ? (min === null || ch.value > min) && (min = ch.value) : ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => new ZodNumber({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodNumber,
  coerce: (params == null ? void 0 : params.coerce) || false,
  ...processCreateParams(params)
});
class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce)
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    if (this._getType(input) !== ZodParsedType.bigint)
      return this._getInvalidInput(input);
    let ctx;
    const status = new ParseStatus();
    for (const check of this._def.checks)
      check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        type: "bigint",
        minimum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        type: "bigint",
        maximum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? input.data % check.value !== BigInt(0) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    }), INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params == null ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = !!input.data), this._getType(input) !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => new ZodBoolean({
  typeName: ZodFirstPartyTypeKind.ZodBoolean,
  coerce: (params == null ? void 0 : params.coerce) || false,
  ...processCreateParams(params)
});
class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = new Date(input.data)), this._getType(input) !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      }), INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      }), INVALID;
    }
    const status = new ParseStatus();
    let ctx;
    for (const check of this._def.checks)
      check.kind === "min" ? input.data.getTime() < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        message: check.message,
        inclusive: true,
        exact: false,
        minimum: check.value,
        type: "date"
      }), status.dirty()) : check.kind === "max" ? input.data.getTime() > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        message: check.message,
        inclusive: true,
        exact: false,
        maximum: check.value,
        type: "date"
      }), status.dirty()) : util.assertNever(check);
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => new ZodDate({
  checks: [],
  coerce: (params == null ? void 0 : params.coerce) || false,
  typeName: ZodFirstPartyTypeKind.ZodDate,
  ...processCreateParams(params)
});
class ZodSymbol extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => new ZodSymbol({
  typeName: ZodFirstPartyTypeKind.ZodSymbol,
  ...processCreateParams(params)
});
class ZodUndefined extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => new ZodUndefined({
  typeName: ZodFirstPartyTypeKind.ZodUndefined,
  ...processCreateParams(params)
});
class ZodNull extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => new ZodNull({
  typeName: ZodFirstPartyTypeKind.ZodNull,
  ...processCreateParams(params)
});
class ZodAny extends ZodType {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => new ZodAny({
  typeName: ZodFirstPartyTypeKind.ZodAny,
  ...processCreateParams(params)
});
class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => new ZodUnknown({
  typeName: ZodFirstPartyTypeKind.ZodUnknown,
  ...processCreateParams(params)
});
class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    }), INVALID;
  }
}
ZodNever.create = (params) => new ZodNever({
  typeName: ZodFirstPartyTypeKind.ZodNever,
  ...processCreateParams(params)
});
class ZodVoid extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => new ZodVoid({
  typeName: ZodFirstPartyTypeKind.ZodVoid,
  ...processCreateParams(params)
});
class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input), def = this._def;
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value, tooSmall = ctx.data.length < def.exactLength.value;
      (tooBig || tooSmall) && (addIssueToContext(ctx, {
        code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
        minimum: tooSmall ? def.exactLength.value : void 0,
        maximum: tooBig ? def.exactLength.value : void 0,
        type: "array",
        inclusive: true,
        exact: true,
        message: def.exactLength.message
      }), status.dirty());
    }
    if (def.minLength !== null && ctx.data.length < def.minLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minLength.value,
      type: "array",
      inclusive: true,
      exact: false,
      message: def.minLength.message
    }), status.dirty()), def.maxLength !== null && ctx.data.length > def.maxLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxLength.value,
      type: "array",
      inclusive: true,
      exact: false,
      message: def.maxLength.message
    }), status.dirty()), ctx.common.async)
      return Promise.all([...ctx.data].map((item, i2) => def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2)))).then((result2) => ParseStatus.mergeArray(status, result2));
    const result = [...ctx.data].map((item, i2) => def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => new ZodArray({
  type: schema,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ZodFirstPartyTypeKind.ZodArray,
  ...processCreateParams(params)
});
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else
    return schema instanceof ZodArray ? new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    }) : schema instanceof ZodOptional ? ZodOptional.create(deepPartialify(schema.unwrap())) : schema instanceof ZodNullable ? ZodNullable.create(deepPartialify(schema.unwrap())) : schema instanceof ZodTuple ? ZodTuple.create(schema.items.map((item) => deepPartialify(item))) : schema;
}
class ZodObject extends ZodType {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape(), keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      }), INVALID;
    }
    const { status, ctx } = this._processInputParams(input), { shape, keys: shapeKeys } = this._getCached(), extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip"))
      for (const key in ctx.data)
        shapeKeys.includes(key) || extraKeys.push(key);
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key], value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough")
        for (const key of extraKeys)
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
      else if (unknownKeys === "strict")
        extraKeys.length > 0 && (addIssueToContext(ctx, {
          code: ZodIssueCode.unrecognized_keys,
          keys: extraKeys
        }), status.dirty());
      else if (unknownKeys !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    return ctx.common.async ? Promise.resolve().then(async () => {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key, value = await pair.value;
        syncPairs.push({
          key,
          value,
          alwaysSet: pair.alwaysSet
        });
      }
      return syncPairs;
    }).then((syncPairs) => ParseStatus.mergeObjectSync(status, syncPairs)) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    return errorUtil.errToObj, new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          return issue.code === "unrecognized_keys" ? {
            message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
          } : {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    return new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    return util.objectKeys(mask).forEach((key) => {
      mask[key] && this.shape[key] && (shape[key] = this.shape[key]);
    }), new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    return util.objectKeys(this.shape).forEach((key) => {
      mask[key] || (shape[key] = this.shape[key]);
    }), new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    return util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      mask && !mask[key] ? newShape[key] = fieldSchema : newShape[key] = fieldSchema.optional();
    }), new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    return util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key])
        newShape[key] = this.shape[key];
      else {
        let newField = this.shape[key];
        for (; newField instanceof ZodOptional; )
          newField = newField._def.innerType;
        newShape[key] = newField;
      }
    }), new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.strictCreate = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strict",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.lazycreate = (shape, params) => new ZodObject({
  shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input), options = this._def.options;
    function handleResults(results) {
      for (const result of results)
        if (result.result.status === "valid")
          return result.result;
      for (const result of results)
        if (result.result.status === "dirty")
          return ctx.common.issues.push(...result.ctx.common.issues), result.result;
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
    if (ctx.common.async)
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    {
      let dirty;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        }, result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid")
          return result;
        result.status === "dirty" && !dirty && (dirty = { result, ctx: childCtx }), childCtx.common.issues.length && issues.push(childCtx.common.issues);
      }
      if (dirty)
        return ctx.common.issues.push(...dirty.ctx.common.issues), dirty.result;
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => new ZodUnion({
  options: types,
  typeName: ZodFirstPartyTypeKind.ZodUnion,
  ...processCreateParams(params)
});
const getDiscriminator = (type) => type instanceof ZodLazy ? getDiscriminator(type.schema) : type instanceof ZodEffects ? getDiscriminator(type.innerType()) : type instanceof ZodLiteral ? [type.value] : type instanceof ZodEnum ? type.options : type instanceof ZodNativeEnum ? util.objectValues(type.enum) : type instanceof ZodDefault ? getDiscriminator(type._def.innerType) : type instanceof ZodUndefined ? [void 0] : type instanceof ZodNull ? [null] : type instanceof ZodOptional ? [void 0, ...getDiscriminator(type.unwrap())] : type instanceof ZodNullable ? [null, ...getDiscriminator(type.unwrap())] : type instanceof ZodBranded || type instanceof ZodReadonly ? getDiscriminator(type.unwrap()) : type instanceof ZodCatch ? getDiscriminator(type._def.innerType) : [];
class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    const discriminator = this.discriminator, discriminatorValue = ctx.data[discriminator], option = this.optionsMap.get(discriminatorValue);
    return option ? ctx.common.async ? option._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : option._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : (addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [discriminator]
    }), INVALID);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length)
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      for (const value of discriminatorValues) {
        if (optionsMap.has(value))
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a2, b2) {
  const aType = getParsedType(a2), bType = getParsedType(b2);
  if (a2 === b2)
    return { valid: true, data: a2 };
  if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b2), sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1), newObj = { ...a2, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b2[key]);
      if (!sharedValue.valid)
        return { valid: false };
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b2.length)
      return { valid: false };
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index], itemB = b2[index], sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid)
        return { valid: false };
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else
    return aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 == +b2 ? { valid: true, data: a2 } : { valid: false };
}
class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input), handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight))
        return INVALID;
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      return merged.valid ? ((isDirty(parsedLeft) || isDirty(parsedRight)) && status.dirty(), { status: status.value, value: merged.data }) : (addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_intersection_types
      }), INVALID);
    };
    return ctx.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }),
      this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })
    ]).then(([left, right]) => handleParsed(left, right)) : handleParsed(this._def.left._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }), this._def.right._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }));
  }
}
ZodIntersection.create = (left, right, params) => new ZodIntersection({
  left,
  right,
  typeName: ZodFirstPartyTypeKind.ZodIntersection,
  ...processCreateParams(params)
});
class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (ctx.data.length < this._def.items.length)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      }), INVALID;
    !this._def.rest && ctx.data.length > this._def.items.length && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: this._def.items.length,
      inclusive: true,
      exact: false,
      type: "array"
    }), status.dirty());
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      return schema ? schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)) : null;
    }).filter((x2) => !!x2);
    return ctx.common.async ? Promise.all(items).then((results) => ParseStatus.mergeArray(status, results)) : ParseStatus.mergeArray(status, items);
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    const pairs = [], keyType = this._def.keyType, valueType = this._def.valueType;
    for (const key in ctx.data)
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    return ctx.common.async ? ParseStatus.mergeObjectAsync(status, pairs) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    return second instanceof ZodType ? new ZodRecord({
      keyType: first,
      valueType: second,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(third)
    }) : new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}
class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      }), INVALID;
    const keyType = this._def.keyType, valueType = this._def.valueType, pairs = [...ctx.data.entries()].map(([key, value], index) => ({
      key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
      value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
    }));
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key, value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted")
            return INVALID;
          (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key, value = pair.value;
        if (key.status === "aborted" || value.status === "aborted")
          return INVALID;
        (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => new ZodMap({
  valueType,
  keyType,
  typeName: ZodFirstPartyTypeKind.ZodMap,
  ...processCreateParams(params)
});
class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      }), INVALID;
    const def = this._def;
    def.minSize !== null && ctx.data.size < def.minSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minSize.value,
      type: "set",
      inclusive: true,
      exact: false,
      message: def.minSize.message
    }), status.dirty()), def.maxSize !== null && ctx.data.size > def.maxSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxSize.value,
      type: "set",
      inclusive: true,
      exact: false,
      message: def.maxSize.message
    }), status.dirty());
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        element.status === "dirty" && status.dirty(), parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    return ctx.common.async ? Promise.all(elements).then((elements2) => finalizeSet(elements2)) : finalizeSet(elements);
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => new ZodSet({
  valueType,
  minSize: null,
  maxSize: null,
  typeName: ZodFirstPartyTypeKind.ZodSet,
  ...processCreateParams(params)
});
class ZodFunction extends ZodType {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      }), INVALID;
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap }, fn2 = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]), parsedArgs = await me._def.args.parseAsync(args, params).catch((e2) => {
          throw error.addIssue(makeArgsIssue(args, e2)), error;
        }), result = await Reflect.apply(fn2, this, parsedArgs);
        return await me._def.returns._def.type.parseAsync(result, params).catch((e2) => {
          throw error.addIssue(makeReturnsIssue(result, e2)), error;
        });
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success)
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        const result = Reflect.apply(fn2, this, parsedArgs.data), parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success)
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    return this.parse(func);
  }
  strictImplement(func) {
    return this.parse(func);
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args || ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}
class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    return this._def.getter()._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => new ZodLazy({
  getter,
  typeName: ZodFirstPartyTypeKind.ZodLazy,
  ...processCreateParams(params)
});
class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => new ZodLiteral({
  value,
  typeName: ZodFirstPartyTypeKind.ZodLiteral,
  ...processCreateParams(params)
});
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
class ZodEnum extends ZodType {
  constructor() {
    super(...arguments), _ZodEnum_cache.set(this, void 0);
  }
  _parse(input) {
    if (typeof input.data != "string") {
      const ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (__classPrivateFieldGet(this, _ZodEnum_cache) || __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values)), !__classPrivateFieldGet(this, _ZodEnum_cache).has(input.data)) {
      const ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
_ZodEnum_cache = /* @__PURE__ */ new WeakMap();
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
  constructor() {
    super(...arguments), _ZodNativeEnum_cache.set(this, void 0);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values), ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (__classPrivateFieldGet(this, _ZodNativeEnum_cache) || __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values))), !__classPrivateFieldGet(this, _ZodNativeEnum_cache).has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
_ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
ZodNativeEnum.create = (values, params) => new ZodNativeEnum({
  values,
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
  ...processCreateParams(params)
});
class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      }), INVALID;
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => this._def.type.parseAsync(data, {
      path: ctx.path,
      errorMap: ctx.common.contextualErrorMap
    })));
  }
}
ZodPromise.create = (schema, params) => new ZodPromise({
  type: schema,
  typeName: ZodFirstPartyTypeKind.ZodPromise,
  ...processCreateParams(params)
});
class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input), effect = this._def.effect || null, checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg), arg.fatal ? status.abort() : status.dirty();
      },
      get path() {
        return ctx.path;
      }
    };
    if (checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx), effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async)
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          return result.status === "aborted" ? INVALID : result.status === "dirty" || status.value === "dirty" ? DIRTY(result.value) : result;
        });
      {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        return result.status === "aborted" ? INVALID : result.status === "dirty" || status.value === "dirty" ? DIRTY(result.value) : result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async)
          return Promise.resolve(result);
        if (result instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value), { status: status.value, value: inner.value });
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value).then(() => ({ status: status.value, value: inner.value }))));
    }
    if (effect.type === "transform")
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: status.value, value: result };
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => isValid(base) ? Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result })) : base);
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => new ZodEffects({
  schema,
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  effect,
  ...processCreateParams(params)
});
ZodEffects.createWithPreprocess = (preprocess, schema, params) => new ZodEffects({
  schema,
  effect: { type: "preprocess", transform: preprocess },
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  ...processCreateParams(params)
});
class ZodOptional extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => new ZodOptional({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodOptional,
  ...processCreateParams(params)
});
class ZodNullable extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => new ZodNullable({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodNullable,
  ...processCreateParams(params)
});
class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    return ctx.parsedType === ZodParsedType.undefined && (data = this._def.defaultValue()), this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => new ZodDefault({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodDefault,
  defaultValue: typeof params.default == "function" ? params.default : () => params.default,
  ...processCreateParams(params)
});
class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input), newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    }, result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    return isAsync(result) ? result.then((result2) => ({
      status: "valid",
      value: result2.status === "valid" ? result2.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    })) : {
      status: "valid",
      value: result.status === "valid" ? result.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => new ZodCatch({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodCatch,
  catchValue: typeof params.catch == "function" ? params.catch : () => params.catch,
  ...processCreateParams(params)
});
class ZodNaN extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => new ZodNaN({
  typeName: ZodFirstPartyTypeKind.ZodNaN,
  ...processCreateParams(params)
});
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input), data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async)
      return (async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), DIRTY(inResult.value)) : this._def.out._parseAsync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      })();
    {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), {
        status: "dirty",
        value: inResult.value
      }) : this._def.out._parseSync({
        data: inResult.value,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  static create(a2, b2) {
    return new ZodPipeline({
      in: a2,
      out: b2,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}
class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input), freeze = (data) => (isValid(data) && (data.value = Object.freeze(data.value)), data);
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => new ZodReadonly({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodReadonly,
  ...processCreateParams(params)
});
function cleanParams(params, data) {
  const p2 = typeof params == "function" ? params(data) : typeof params == "string" ? { message: params } : params;
  return typeof p2 == "string" ? { message: p2 } : p2;
}
function custom(check, _params = {}, fatal) {
  return check ? ZodAny.create().superRefine((data, ctx) => {
    var _a, _b;
    const r2 = check(data);
    if (r2 instanceof Promise)
      return r2.then((r3) => {
        var _a2, _b2;
        if (!r3) {
          const params = cleanParams(_params, data), _fatal = (_b2 = (_a2 = params.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b2 !== void 0 ? _b2 : true;
          ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
        }
      });
    if (!r2) {
      const params = cleanParams(_params, data), _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
      ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
    }
  }) : ZodAny.create();
}
const late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2.ZodString = "ZodString", ZodFirstPartyTypeKind2.ZodNumber = "ZodNumber", ZodFirstPartyTypeKind2.ZodNaN = "ZodNaN", ZodFirstPartyTypeKind2.ZodBigInt = "ZodBigInt", ZodFirstPartyTypeKind2.ZodBoolean = "ZodBoolean", ZodFirstPartyTypeKind2.ZodDate = "ZodDate", ZodFirstPartyTypeKind2.ZodSymbol = "ZodSymbol", ZodFirstPartyTypeKind2.ZodUndefined = "ZodUndefined", ZodFirstPartyTypeKind2.ZodNull = "ZodNull", ZodFirstPartyTypeKind2.ZodAny = "ZodAny", ZodFirstPartyTypeKind2.ZodUnknown = "ZodUnknown", ZodFirstPartyTypeKind2.ZodNever = "ZodNever", ZodFirstPartyTypeKind2.ZodVoid = "ZodVoid", ZodFirstPartyTypeKind2.ZodArray = "ZodArray", ZodFirstPartyTypeKind2.ZodObject = "ZodObject", ZodFirstPartyTypeKind2.ZodUnion = "ZodUnion", ZodFirstPartyTypeKind2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ZodFirstPartyTypeKind2.ZodIntersection = "ZodIntersection", ZodFirstPartyTypeKind2.ZodTuple = "ZodTuple", ZodFirstPartyTypeKind2.ZodRecord = "ZodRecord", ZodFirstPartyTypeKind2.ZodMap = "ZodMap", ZodFirstPartyTypeKind2.ZodSet = "ZodSet", ZodFirstPartyTypeKind2.ZodFunction = "ZodFunction", ZodFirstPartyTypeKind2.ZodLazy = "ZodLazy", ZodFirstPartyTypeKind2.ZodLiteral = "ZodLiteral", ZodFirstPartyTypeKind2.ZodEnum = "ZodEnum", ZodFirstPartyTypeKind2.ZodEffects = "ZodEffects", ZodFirstPartyTypeKind2.ZodNativeEnum = "ZodNativeEnum", ZodFirstPartyTypeKind2.ZodOptional = "ZodOptional", ZodFirstPartyTypeKind2.ZodNullable = "ZodNullable", ZodFirstPartyTypeKind2.ZodDefault = "ZodDefault", ZodFirstPartyTypeKind2.ZodCatch = "ZodCatch", ZodFirstPartyTypeKind2.ZodPromise = "ZodPromise", ZodFirstPartyTypeKind2.ZodBranded = "ZodBranded", ZodFirstPartyTypeKind2.ZodPipeline = "ZodPipeline", ZodFirstPartyTypeKind2.ZodReadonly = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), stringType = ZodString.create, numberType = ZodNumber.create, nanType = ZodNaN.create, bigIntType = ZodBigInt.create, booleanType = ZodBoolean.create, dateType = ZodDate.create, symbolType = ZodSymbol.create, undefinedType = ZodUndefined.create, nullType = ZodNull.create, anyType = ZodAny.create, unknownType = ZodUnknown.create, neverType = ZodNever.create, voidType = ZodVoid.create, arrayType = ZodArray.create, objectType = ZodObject.create, strictObjectType = ZodObject.strictCreate, unionType = ZodUnion.create, discriminatedUnionType = ZodDiscriminatedUnion.create, intersectionType = ZodIntersection.create, tupleType = ZodTuple.create, recordType = ZodRecord.create, mapType = ZodMap.create, setType = ZodSet.create, functionType = ZodFunction.create, lazyType = ZodLazy.create, literalType = ZodLiteral.create, enumType = ZodEnum.create, nativeEnumType = ZodNativeEnum.create, promiseType = ZodPromise.create, effectsType = ZodEffects.create, optionalType = ZodOptional.create, nullableType = ZodNullable.create, preprocessType = ZodEffects.createWithPreprocess, pipelineType = ZodPipeline.create, ostring = () => stringType().optional(), onumber = () => numberType().optional(), oboolean = () => booleanType().optional(), coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
}, NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
}), DEFAULT_PORT = 5746, PING_ENDPOINT = "/ping/stagewise", PING_RESPONSE = "stagewise", contract = {
  server: {
    getSessionInfo: {
      request: z.object({}),
      response: z.object({
        sessionId: z.string().optional(),
        appName: z.string().describe('The name of the application, e.g. "VS Code" or "Cursor"'),
        displayName: z.string().describe("Human-readable window identifier for UI display"),
        port: z.number().describe("Port number this VS Code instance is running on")
      }),
      update: z.object({})
    },
    triggerAgentPrompt: {
      request: z.object({
        sessionId: z.string().optional(),
        prompt: z.string(),
        model: z.string().optional().describe("The model to use for the agent prompt"),
        files: z.array(z.string()).optional().describe("Link project files to the agent prompt"),
        mode: z.enum(["agent", "ask", "manual"]).optional().describe("The mode to use for the agent prompt"),
        images: z.array(z.string()).optional().describe("Upload files like images, videos, etc.")
      }),
      response: z.object({
        sessionId: z.string().optional(),
        result: z.object({
          success: z.boolean(),
          error: z.string().optional(),
          errorCode: z.enum(["session_mismatch"]).optional(),
          output: z.string().optional()
        })
      }),
      update: z.object({
        sessionId: z.string().optional(),
        updateText: z.string()
      })
    }
  }
};
const MAX_CONSECUTIVE_ERRORS = 2;
async function discoverVSCodeWindows(maxAttempts = 10, timeout = 300) {
  const windows = [];
  let consecutiveErrors = 0;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const port = DEFAULT_PORT + attempt;
    try {
      const controller = new AbortController(), timeoutId = setTimeout(() => controller.abort(), timeout), response = await fetch(`http://localhost:${port}${PING_ENDPOINT}`, {
        signal: controller.signal
      });
      if (clearTimeout(timeoutId), consecutiveErrors = 0, response.ok && await response.text() === PING_RESPONSE)
        try {
          const bridge = createSRPCClientBridge(
            `ws://localhost:${port}`,
            contract
          );
          await bridge.connect();
          const sessionInfo = await bridge.call.getSessionInfo(
            {},
            {
              onUpdate: () => {
              }
            }
          );
          windows.push(sessionInfo), await bridge.close();
        } catch (error) {
          console.warn(`Failed to get session info from port ${port}:`, error);
        }
      else
        continue;
    } catch {
      if (consecutiveErrors++, consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
        console.warn(
          "⬆️⬆️⬆️ Those two errors are expected! (Everything is fine, they are part of stagewise's discovery mechanism!) ✅"
        );
        break;
      }
      continue;
    }
  }
  return windows.length === 0 && console.warn(
    "No IDE windows found, please start an IDE with the stagewise extension installed! ❌"
  ), windows;
}
const getCurrentPort = () => typeof window < "u" && window.location && window.location.port || "80", getStorageKey = () => `ide-selected-session-id-on-browser-port-${getCurrentPort()}`, getStoredSessionId = () => {
  try {
    return localStorage.getItem(getStorageKey()) || void 0;
  } catch {
    return;
  }
}, setStoredSessionId = (sessionId) => {
  try {
    sessionId ? localStorage.setItem(getStorageKey(), sessionId) : localStorage.removeItem(getStorageKey());
  } catch {
  }
}, VSCodeContext = K$2({
  windows: [],
  isDiscovering: false,
  discoveryError: null,
  selectedSession: void 0,
  shouldPromptWindowSelection: false,
  setShouldPromptWindowSelection: () => {
  },
  discover: async () => {
  },
  selectSession: () => {
  },
  refreshSession: async () => {
  },
  appName: void 0
});
function VSCodeProvider({ children }) {
  const [windows, setWindows] = d$1([]), [isDiscovering, setIsDiscovering] = d$1(false), [discoveryError, setDiscoveryError] = d$1(null), [selectedSessionId, setSelectedSessionId] = d$1(getStoredSessionId()), [shouldPromptWindowSelection, setShouldPromptWindowSelection] = d$1(false), discover = async () => {
    setIsDiscovering(true), setDiscoveryError(null);
    try {
      const discoveredWindows = await discoverVSCodeWindows();
      setWindows(discoveredWindows);
      const storedSessionId = getStoredSessionId();
      if (discoveredWindows.length === 1) {
        const singleWindow = discoveredWindows[0];
        (!storedSessionId || storedSessionId !== singleWindow.sessionId) && (setSelectedSessionId(singleWindow.sessionId), setStoredSessionId(singleWindow.sessionId)), setShouldPromptWindowSelection(false);
      } else {
        const noSessionIdSavedForCurrentPort = discoveredWindows.length > 1 && !storedSessionId || // No saved sessionId for current port
        storedSessionId && !discoveredWindows.some((w2) => w2.sessionId === storedSessionId);
        setShouldPromptWindowSelection(noSessionIdSavedForCurrentPort), noSessionIdSavedForCurrentPort && (setSelectedSessionId(void 0), setStoredSessionId(void 0));
      }
    } catch (err) {
      setDiscoveryError(
        err instanceof Error ? err.message : "Failed to discover windows"
      );
    } finally {
      setIsDiscovering(false);
    }
  }, selectSession = (sessionId) => {
    if (!sessionId || sessionId === "") {
      setStoredSessionId(void 0), setSelectedSessionId(void 0);
      return;
    }
    setSelectedSessionId(sessionId), setStoredSessionId(sessionId), sessionId && setShouldPromptWindowSelection(false);
  }, refreshSession = async () => {
    selectedSessionId && await discover();
  };
  y$1(() => {
    discover();
  }, []);
  const selectedSession = windows.find(
    (w2) => w2.sessionId === selectedSessionId
  ), value = {
    windows,
    isDiscovering,
    discoveryError,
    selectedSession,
    shouldPromptWindowSelection,
    setShouldPromptWindowSelection,
    discover,
    selectSession,
    refreshSession,
    appName: selectedSession == null ? void 0 : selectedSession.appName
  };
  return /* @__PURE__ */ u$4(VSCodeContext.Provider, { value, children });
}
function useVSCode() {
  return x$1(VSCodeContext);
}
const SRPCBridgeContext = K$2({
  bridge: null,
  isConnecting: false,
  error: null
});
function SRPCBridgeProvider({
  children
}) {
  const [state, setState] = d$1({
    bridge: null,
    isConnecting: true,
    error: null
  }), { selectedSession } = useVSCode(), bridgeRef = A$1(null), initializeBridge = q$1(async (port) => {
    bridgeRef.current && await bridgeRef.current.close();
    try {
      const bridge = createSRPCClientBridge(`ws://localhost:${port}`, contract);
      await bridge.connect(), bridgeRef.current = bridge, setState({
        bridge,
        isConnecting: false,
        error: null
      });
    } catch (error) {
      bridgeRef.current = null, setState({
        bridge: null,
        isConnecting: false,
        error: error instanceof Error ? error : new Error(String(error))
      });
    }
  }, []);
  return y$1(() => {
    selectedSession && initializeBridge(selectedSession.port);
  }, [selectedSession, initializeBridge]), /* @__PURE__ */ u$4(SRPCBridgeContext.Provider, { value: state, children });
}
function useSRPCBridge() {
  const context = x$1(SRPCBridgeContext);
  if (!context)
    throw new Error("useSRPCBridge must be used within an SRPCBridgeProvider");
  return context;
}
const ConfigContext = K$2({
  config: void 0
});
function ConfigProvider({
  children,
  config
}) {
  const value = T$1(() => ({
    config
  }), [config]);
  return /* @__PURE__ */ u$4(ConfigContext.Provider, { value, children });
}
function useConfig() {
  return x$1(ConfigContext);
}
const PluginContext = K$2({
  plugins: [],
  toolbarContext: {
    sendPrompt: () => {
    }
  }
});
function PluginProvider({
  children
}) {
  const { bridge } = useSRPCBridge(), { selectedSession } = useVSCode(), { config } = useConfig(), plugins = (config == null ? void 0 : config.plugins) || [], toolbarContext = T$1(() => ({
    sendPrompt: async (prompt) => {
      if (!bridge)
        throw new Error("No connection to the agent");
      return await bridge.call.triggerAgentPrompt(
        typeof prompt == "string" ? {
          prompt,
          ...selectedSession && {
            sessionId: selectedSession.sessionId
          }
        } : {
          prompt: prompt.prompt,
          model: prompt.model,
          files: prompt.files,
          images: prompt.images,
          mode: prompt.mode,
          ...selectedSession && {
            sessionId: selectedSession.sessionId
          }
        },
        {
          onUpdate: (update) => {
          }
        }
      );
    }
  }), [bridge, selectedSession]), pluginsLoadedRef = A$1(false);
  y$1(() => {
    pluginsLoadedRef.current || (pluginsLoadedRef.current = true, plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onLoad) == null || _a.call(plugin, toolbarContext);
    }));
  }, [plugins, toolbarContext]);
  const value = T$1(() => ({
    plugins,
    toolbarContext
  }), [plugins, toolbarContext]);
  return /* @__PURE__ */ u$4(PluginContext.Provider, { value, children });
}
function usePlugins() {
  return x$1(PluginContext);
}
function r$2(e2) {
  var t2, f2, n2 = "";
  if (typeof e2 == "string" || typeof e2 == "number")
    n2 += e2;
  else if (typeof e2 == "object")
    if (Array.isArray(e2)) {
      var o22 = e2.length;
      for (t2 = 0; t2 < o22; t2++)
        e2[t2] && (f2 = r$2(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    } else
      for (f2 in e2)
        e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o22 = arguments.length; f2 < o22; f2++)
    (e2 = arguments[f2]) && (t2 = r$2(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const CLASS_PART_SEPARATOR = "-", createClassGroupUtils = (config) => {
  const classMap = createClassMap(config), {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  return {
    getClassGroupId: (className) => {
      const classParts = className.split(CLASS_PART_SEPARATOR);
      return classParts[0] === "" && classParts.length !== 1 && classParts.shift(), getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    },
    getConflictingClassGroupIds: (classGroupId, hasPostfixModifier) => {
      const conflicts = conflictingClassGroups[classGroupId] || [];
      return hasPostfixModifier && conflictingClassGroupModifiers[classGroupId] ? [...conflicts, ...conflictingClassGroupModifiers[classGroupId]] : conflicts;
    }
  };
}, getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0)
    return classPartObject.classGroupId;
  const currentClassPart = classParts[0], nextClassPartObject = classPartObject.nextPart.get(currentClassPart), classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart)
    return classGroupFromNextClassPart;
  if (classPartObject.validators.length === 0)
    return;
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
}, arbitraryPropertyRegex = /^\[(.+)\]$/, getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1], property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property)
      return "arbitrary.." + property;
  }
}, createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config, classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const classGroupId in classGroups)
    processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
  return classMap;
}, processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition == "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition == "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}, getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  return path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    currentClassPartObject.nextPart.has(pathPart) || currentClassPartObject.nextPart.set(pathPart, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  }), currentClassPartObject;
}, isThemeGetter = (func) => func.isThemeGetter, createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let cacheSize = 0, cache = /* @__PURE__ */ new Map(), previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value), cacheSize++, cacheSize > maxCacheSize && (cacheSize = 0, previousCache = cache, cache = /* @__PURE__ */ new Map());
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0)
        return value;
      if ((value = previousCache.get(key)) !== void 0)
        return update(key, value), value;
    },
    set(key, value) {
      cache.has(key) ? cache.set(key, value) : update(key, value);
    }
  };
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length, createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0, parenDepth = 0, modifierStart = 0, postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index)), modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      currentCharacter === "[" ? bracketDepth++ : currentCharacter === "]" ? bracketDepth-- : currentCharacter === "(" ? parenDepth++ : currentCharacter === ")" && parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart), baseClassName = stripImportantModifier(baseClassNameWithImportantModifier), hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier, maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR, parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: className,
      maybePostfixModifierPosition: void 0
    };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
}, stripImportantModifier = (baseClassName) => baseClassName.endsWith(IMPORTANT_MODIFIER) ? baseClassName.substring(0, baseClassName.length - 1) : baseClassName.startsWith(IMPORTANT_MODIFIER) ? baseClassName.substring(1) : baseClassName, createSortModifiers = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
  return (modifiers) => {
    if (modifiers.length <= 1)
      return modifiers;
    const sortedModifiers = [];
    let unsortedModifiers = [];
    return modifiers.forEach((modifier) => {
      modifier[0] === "[" || orderSensitiveModifiers[modifier] ? (sortedModifiers.push(...unsortedModifiers.sort(), modifier), unsortedModifiers = []) : unsortedModifiers.push(modifier);
    }), sortedModifiers.push(...unsortedModifiers.sort()), sortedModifiers;
  };
}, createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils, classGroupsInConflict = [], classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index], {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition, classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      if (classGroupId = getClassGroupId(baseClassName), !classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":"), modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier, classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId))
      continue;
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
      const group = conflictGroups[i2];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0, argument, resolvedValue, string = "";
  for (; index < arguments.length; )
    (argument = arguments[index++]) && (resolvedValue = toValue(argument)) && (string && (string += " "), string += resolvedValue);
  return string;
}
const toValue = (mix) => {
  if (typeof mix == "string")
    return mix;
  let resolvedValue, string = "";
  for (let k2 = 0; k2 < mix.length; k2++)
    mix[k2] && (resolvedValue = toValue(mix[k2])) && (string && (string += " "), string += resolvedValue);
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils, cacheGet, cacheSet, functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    return configUtils = createConfigUtils(config), cacheGet = configUtils.cache.get, cacheSet = configUtils.cache.set, functionToCall = tailwindMerge, tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult)
      return cachedResult;
    const result = mergeClassList(classList, configUtils);
    return cacheSet(classList, result), result;
  }
  return function() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  return themeGetter.isThemeGetter = true, themeGetter;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+\/\d+$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (value) => fractionRegex.test(value), isNumber = (value) => !!value && !Number.isNaN(Number(value)), isInteger = (value) => !!value && Number.isInteger(Number(value)), isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1)), isTshirtSize = (value) => tshirtUnitRegex.test(value), isAny = () => true, isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
), isNever = () => false, isShadow = (value) => shadowRegex.test(value), isImage = (value) => imageRegex.test(value), isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value), isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever), isArbitraryValue = (value) => arbitraryValueRegex.test(value), isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly), isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber), isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever), isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage), isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow), isArbitraryVariable = (value) => arbitraryVariableRegex.test(value), isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength), isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName), isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition), isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize), isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage), isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true), getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  return result ? result[1] ? testLabel(result[1]) : testValue(result[2]) : false;
}, getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  return result ? result[1] ? testLabel(result[1]) : shouldMatchNoLabel : false;
}, isLabelPosition = (label) => label === "position" || label === "percentage", isLabelImage = (label) => label === "image" || label === "url", isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size", isLabelLength = (label) => label === "length", isLabelNumber = (label) => label === "number", isLabelFamilyName = (label) => label === "family-name", isLabelShadow = (label) => label === "shadow", getDefaultConfig = () => {
  const themeColor = fromTheme("color"), themeFont = fromTheme("font"), themeText = fromTheme("text"), themeFontWeight = fromTheme("font-weight"), themeTracking = fromTheme("tracking"), themeLeading = fromTheme("leading"), themeBreakpoint = fromTheme("breakpoint"), themeContainer = fromTheme("container"), themeSpacing = fromTheme("spacing"), themeRadius = fromTheme("radius"), themeShadow = fromTheme("shadow"), themeInsetShadow = fromTheme("inset-shadow"), themeTextShadow = fromTheme("text-shadow"), themeDropShadow = fromTheme("drop-shadow"), themeBlur = fromTheme("blur"), themePerspective = fromTheme("perspective"), themeAspect = fromTheme("aspect"), themeEase = fromTheme("ease"), themeAnimate = fromTheme("animate"), scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue], scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"], scaleOverscroll = () => ["auto", "contain", "none"], scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing], scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()], scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue], scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue], scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue], scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue], scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()], scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()], scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue], scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }], scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }], scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength], scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ], scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength], scaleLineStyle = () => ["solid", "dashed", "dotted", "double"], scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition], scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ], scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue], scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue], scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue], scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: scaleInset()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => (overrideProperty(baseConfig, "cacheSize", cacheSize), overrideProperty(baseConfig, "prefix", prefix), overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName), overrideConfigProperties(baseConfig.theme, override.theme), overrideConfigProperties(baseConfig.classGroups, override.classGroups), overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups), overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers), overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers), mergeConfigProperties(baseConfig.theme, extend.theme), mergeConfigProperties(baseConfig.classGroups, extend.classGroups), mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups), mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers), mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers"), baseConfig), overrideProperty = (baseObject, overrideKey, overrideValue) => {
  overrideValue !== void 0 && (baseObject[overrideKey] = overrideValue);
}, overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject)
    for (const key in overrideObject)
      overrideProperty(baseObject, key, overrideObject[key]);
}, mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject)
    for (const key in mergeObject)
      mergeArrayProperties(baseObject, mergeObject, key);
}, mergeArrayProperties = (baseObject, mergeObject, key) => {
  const mergeValue = mergeObject[key];
  mergeValue !== void 0 && (baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue);
}, extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension == "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig), companionAnchorTagName = "stagewise-companion-anchor";
function getElementAtPoint(x2, y2) {
  return document.elementsFromPoint(x2, y2).find(
    (element) => element.nodeName !== "STAGEWISE-COMPANION-ANCHOR" && !element.closest(companionAnchorTagName) && !element.closest("svg") && isElementAtPoint(element, x2, y2)
  ) || document.body;
}
const isElementAtPoint = (element, clientX, clientY) => {
  const boundingRect = element.getBoundingClientRect(), isInHorizontalBounds = clientX > boundingRect.left && clientX < boundingRect.left + boundingRect.width, isInVerticalBounds = clientY > boundingRect.top && clientY < boundingRect.top + boundingRect.height;
  return isInHorizontalBounds && isInVerticalBounds;
};
var HotkeyActions = /* @__PURE__ */ ((HotkeyActions2) => (HotkeyActions2[HotkeyActions2.ESC = 0] = "ESC", HotkeyActions2[HotkeyActions2.CTRL_ALT_C = 1] = "CTRL_ALT_C", HotkeyActions2))(HotkeyActions || {});
const hotkeyActionDefinitions = {
  0: {
    keyComboDefault: "Esc",
    keyComboMac: "esc",
    isEventMatching: (ev) => ev.code === "Escape"
  },
  1: {
    keyComboDefault: "Ctrl+Alt+C",
    keyComboMac: "⌘+⌥+C",
    isEventMatching: (ev) => ev.code === "KeyC" && (ev.ctrlKey || ev.metaKey) && ev.altKey
  }
}, customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "bg-image": [
        "bg-gradient",
        "bg-gradient-light-1",
        "bg-gradient-light-2",
        "bg-gradient-light-3"
      ]
    }
  }
});
function cn(...inputs) {
  return customTwMerge(clsx(inputs));
}
const generateId = (length = 16) => Math.random().toString(36).substring(2, length + 2);
function Panel({
  children,
  alwaysFullHeight = false
}) {
  return /* @__PURE__ */ u$4(
    "section",
    {
      className: cn(
        "flex max-h-full min-h-48 flex-col items-stretch justify-start rounded-2xl border border-border/30 bg-zinc-50/80 p-4 shadow-md backdrop-blur-md",
        alwaysFullHeight && "h-full"
      ),
      children
    }
  );
}
Panel.Header = function({
  title,
  description
}) {
  return /* @__PURE__ */ u$4("header", { className: "mb-3 flex flex-col gap-1 text-zinc-950", children: [
    title && /* @__PURE__ */ u$4("h3", { className: "font-semibold text-lg ", children: title }),
    description && /* @__PURE__ */ u$4("p", { className: "font-medium text-zinc-600", children: description })
  ] });
};
Panel.Content = function({
  children
}) {
  return /* @__PURE__ */ u$4("div", { className: "-mx-4 flex flex-col gap-2 overflow-y-auto border-border/30 border-t px-4 pt-4 text-zinc-950", children });
};
Panel.Footer = function({
  children
}) {
  return /* @__PURE__ */ u$4("footer", { className: "flex flex-row items-end justify-end gap-2 text-sm text-zinc-600", children });
};
const appStyle = '/*! tailwindcss v4.1.5 | MIT License | https://tailwindcss.com */@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){stagewise-companion-anchor *,stagewise-companion-anchor :before,stagewise-companion-anchor :after,stagewise-companion-anchor ::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{stagewise-companion-anchor{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-300:oklch(83.7% .128 66.29);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-800:oklch(47% .157 37.304);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-800:oklch(47.3% .137 46.201);--color-yellow-500:oklch(79.5% .184 86.047);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-teal-500:oklch(70.4% .14 182.503);--color-sky-600:oklch(58.8% .158 241.966);--color-sky-700:oklch(50% .134 242.749);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-950:oklch(25.7% .09 281.288);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-500:oklch(62.7% .265 303.9);--color-fuchsia-700:oklch(51.8% .253 323.949);--color-pink-500:oklch(65.6% .241 354.308);--color-rose-600:oklch(58.6% .253 17.585);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-900:oklch(21% .006 285.885);--color-zinc-950:oklch(14.1% .005 285.823);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--drop-shadow-xs:0 1px 1px #0000000d;--drop-shadow-md:0 3px 3px #0000001f;--drop-shadow-xl:0 9px 7px #0000001a;--ease-out:cubic-bezier(0,0,.2,1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-background:var(--color-white);--color-foreground:var(--color-zinc-950);--color-border:var(--color-zinc-500)}}@layer base{stagewise-companion-anchor *,stagewise-companion-anchor :after,stagewise-companion-anchor :before,stagewise-companion-anchor ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}stagewise-companion-anchor ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}:where(stagewise-companion-anchor),stagewise-companion-anchor{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}stagewise-companion-anchor hr{height:0;color:inherit;border-top-width:1px}stagewise-companion-anchor abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}stagewise-companion-anchor h1,stagewise-companion-anchor h2,stagewise-companion-anchor h3,stagewise-companion-anchor h4,stagewise-companion-anchor h5,stagewise-companion-anchor h6{font-size:inherit;font-weight:inherit}stagewise-companion-anchor a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}stagewise-companion-anchor b,stagewise-companion-anchor strong{font-weight:bolder}stagewise-companion-anchor code,stagewise-companion-anchor kbd,stagewise-companion-anchor samp,stagewise-companion-anchor pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}stagewise-companion-anchor small{font-size:80%}stagewise-companion-anchor sub,stagewise-companion-anchor sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}stagewise-companion-anchor sub{bottom:-.25em}stagewise-companion-anchor sup{top:-.5em}stagewise-companion-anchor table{text-indent:0;border-color:inherit;border-collapse:collapse}stagewise-companion-anchor :-moz-focusring{outline:auto}stagewise-companion-anchor progress{vertical-align:baseline}stagewise-companion-anchor summary{display:list-item}stagewise-companion-anchor ol,stagewise-companion-anchor ul,stagewise-companion-anchor menu{list-style:none}stagewise-companion-anchor img,stagewise-companion-anchor svg,stagewise-companion-anchor video,stagewise-companion-anchor canvas,stagewise-companion-anchor audio,stagewise-companion-anchor iframe,stagewise-companion-anchor embed,stagewise-companion-anchor object{vertical-align:middle;display:block}stagewise-companion-anchor img,stagewise-companion-anchor video{max-width:100%;height:auto}stagewise-companion-anchor button,stagewise-companion-anchor input,stagewise-companion-anchor select,stagewise-companion-anchor optgroup,stagewise-companion-anchor textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}stagewise-companion-anchor ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}stagewise-companion-anchor :where(select:is([multiple],[size])) optgroup{font-weight:bolder}stagewise-companion-anchor :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}stagewise-companion-anchor ::file-selector-button{margin-inline-end:4px}stagewise-companion-anchor ::-moz-placeholder{opacity:1}stagewise-companion-anchor ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){stagewise-companion-anchor ::-moz-placeholder{color:currentColor}stagewise-companion-anchor ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}stagewise-companion-anchor ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}stagewise-companion-anchor textarea{resize:vertical}stagewise-companion-anchor ::-webkit-search-decoration{-webkit-appearance:none}stagewise-companion-anchor ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}stagewise-companion-anchor ::-webkit-datetime-edit{display:inline-flex}stagewise-companion-anchor ::-webkit-datetime-edit-fields-wrapper{padding:0}stagewise-companion-anchor ::-webkit-datetime-edit{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-year-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-month-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-day-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-hour-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-minute-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-second-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-millisecond-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-meridiem-field{padding-block:0}stagewise-companion-anchor :-moz-ui-invalid{box-shadow:none}stagewise-companion-anchor button,stagewise-companion-anchor input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}stagewise-companion-anchor ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}stagewise-companion-anchor ::-webkit-inner-spin-button{height:auto}stagewise-companion-anchor ::-webkit-outer-spin-button{height:auto}stagewise-companion-anchor [hidden]:where(:not([hidden=until-found])){display:none!important}stagewise-companion-anchor stagewise-companion-anchor *{min-width:0;min-height:0;position:relative}}@layer components{stagewise-companion-anchor .chat-loading-gradient{background:linear-gradient(#f8fafccc,#f8fafccc) padding-box padding-box,linear-gradient(45deg,#8b5cf6,#06b6d4,#8b5cf6) 0 0/400% 400% border-box;border:2px solid #0000;animation:2s infinite gradient-animation}stagewise-companion-anchor .chat-success-border{animation:2s ease-out blink-green-fade}stagewise-companion-anchor .chat-error-border{animation:1s ease-out blink-red-fade}@keyframes blink-green-fade{0%,50%{box-shadow:0 0 0 2px #22c55eb3}to{box-shadow:0 0 0 2px #22c55e00}}@keyframes blink-red-fade{0%,50%{box-shadow:0 0 0 2px #ef4444}to{box-shadow:0 0 0 2px #ef444400}}}@layer utilities{stagewise-companion-anchor .pointer-events-auto{pointer-events:auto!important}stagewise-companion-anchor .pointer-events-none{pointer-events:none!important}stagewise-companion-anchor .visible{visibility:visible!important}stagewise-companion-anchor .absolute{position:absolute!important}stagewise-companion-anchor .fixed{position:fixed!important}stagewise-companion-anchor .relative{position:relative!important}stagewise-companion-anchor .inset-0{inset:calc(var(--spacing)*0)!important}stagewise-companion-anchor .inset-4{inset:calc(var(--spacing)*4)!important}stagewise-companion-anchor .top-0{top:calc(var(--spacing)*0)!important}stagewise-companion-anchor .top-0\\.5{top:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .top-1\\/2{top:50%!important}stagewise-companion-anchor .top-\\[-20\\%\\]{top:-20%!important}stagewise-companion-anchor .top-\\[25\\%\\]{top:25%!important}stagewise-companion-anchor .right-0{right:calc(var(--spacing)*0)!important}stagewise-companion-anchor .right-1\\/2{right:50%!important}stagewise-companion-anchor .right-\\[100\\%\\]{right:100%!important}stagewise-companion-anchor .bottom-0{bottom:calc(var(--spacing)*0)!important}stagewise-companion-anchor .bottom-1\\/2{bottom:50%!important}stagewise-companion-anchor .bottom-3{bottom:calc(var(--spacing)*3)!important}stagewise-companion-anchor .left-0{left:calc(var(--spacing)*0)!important}stagewise-companion-anchor .left-0\\.5{left:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .left-1\\/2{left:50%!important}stagewise-companion-anchor .left-3{left:calc(var(--spacing)*3)!important}stagewise-companion-anchor .left-\\[-10\\%\\]{left:-10%!important}stagewise-companion-anchor .left-\\[25\\%\\]{left:25%!important}stagewise-companion-anchor .left-\\[100\\%\\]{left:100%!important}stagewise-companion-anchor .z-20{z-index:20!important}stagewise-companion-anchor .z-50{z-index:50!important}stagewise-companion-anchor .container{width:100%!important}@media (min-width:40rem){stagewise-companion-anchor .container{max-width:40rem!important}}@media (min-width:48rem){stagewise-companion-anchor .container{max-width:48rem!important}}@media (min-width:64rem){stagewise-companion-anchor .container{max-width:64rem!important}}@media (min-width:80rem){stagewise-companion-anchor .container{max-width:80rem!important}}@media (min-width:96rem){stagewise-companion-anchor .container{max-width:96rem!important}}stagewise-companion-anchor .-mx-4{margin-inline:calc(var(--spacing)*-4)!important}stagewise-companion-anchor .my-2{margin-block:calc(var(--spacing)*2)!important}stagewise-companion-anchor .mt-1{margin-top:calc(var(--spacing)*1)!important}stagewise-companion-anchor .mt-2{margin-top:calc(var(--spacing)*2)!important}stagewise-companion-anchor .mb-2{margin-bottom:calc(var(--spacing)*2)!important}stagewise-companion-anchor .mb-3{margin-bottom:calc(var(--spacing)*3)!important}stagewise-companion-anchor .block{display:block!important}stagewise-companion-anchor .contents{display:contents!important}stagewise-companion-anchor .flex{display:flex!important}stagewise-companion-anchor .hidden{display:none!important}stagewise-companion-anchor .inline{display:inline!important}stagewise-companion-anchor .aspect-square{aspect-ratio:1!important}stagewise-companion-anchor .size-0{width:calc(var(--spacing)*0)!important;height:calc(var(--spacing)*0)!important}stagewise-companion-anchor .size-1\\.5{width:calc(var(--spacing)*1.5)!important;height:calc(var(--spacing)*1.5)!important}stagewise-companion-anchor .size-2\\/3{width:66.6667%!important;height:66.6667%!important}stagewise-companion-anchor .size-3{width:calc(var(--spacing)*3)!important;height:calc(var(--spacing)*3)!important}stagewise-companion-anchor .size-4{width:calc(var(--spacing)*4)!important;height:calc(var(--spacing)*4)!important}stagewise-companion-anchor .size-4\\.5{width:calc(var(--spacing)*4.5)!important;height:calc(var(--spacing)*4.5)!important}stagewise-companion-anchor .size-5{width:calc(var(--spacing)*5)!important;height:calc(var(--spacing)*5)!important}stagewise-companion-anchor .size-6{width:calc(var(--spacing)*6)!important;height:calc(var(--spacing)*6)!important}stagewise-companion-anchor .size-8{width:calc(var(--spacing)*8)!important;height:calc(var(--spacing)*8)!important}stagewise-companion-anchor .size-9{width:calc(var(--spacing)*9)!important;height:calc(var(--spacing)*9)!important}stagewise-companion-anchor .size-9\\/12{width:75%!important;height:75%!important}stagewise-companion-anchor .size-12{width:calc(var(--spacing)*12)!important;height:calc(var(--spacing)*12)!important}stagewise-companion-anchor .size-\\[120\\%\\]{width:120%!important;height:120%!important}stagewise-companion-anchor .size-full{width:100%!important;height:100%!important}stagewise-companion-anchor .h-0{height:calc(var(--spacing)*0)!important}stagewise-companion-anchor .h-3{height:calc(var(--spacing)*3)!important}stagewise-companion-anchor .h-5{height:calc(var(--spacing)*5)!important}stagewise-companion-anchor .h-8{height:calc(var(--spacing)*8)!important}stagewise-companion-anchor .h-9\\.5{height:calc(var(--spacing)*9.5)!important}stagewise-companion-anchor .h-12{height:calc(var(--spacing)*12)!important}stagewise-companion-anchor .h-16{height:calc(var(--spacing)*16)!important}stagewise-companion-anchor .h-24{height:calc(var(--spacing)*24)!important}stagewise-companion-anchor .h-\\[50\\%\\]{height:50%!important}stagewise-companion-anchor .h-\\[120\\%\\]{height:120%!important}stagewise-companion-anchor .h-\\[calc\\(100vh-32px\\)\\]{height:calc(100vh - 32px)!important}stagewise-companion-anchor .h-\\[calc-size\\(auto\\)\\]{height:calc-size(auto)!important}stagewise-companion-anchor .h-\\[calc-size\\(auto\\,size\\)\\]{height:calc-size(auto,size)!important}stagewise-companion-anchor .h-auto{height:auto!important}stagewise-companion-anchor .h-full{height:100%!important}stagewise-companion-anchor .h-screen{height:100vh!important}stagewise-companion-anchor .max-h-full{max-height:100%!important}stagewise-companion-anchor .min-h-0{min-height:calc(var(--spacing)*0)!important}stagewise-companion-anchor .min-h-48{min-height:calc(var(--spacing)*48)!important}stagewise-companion-anchor .w-8{width:calc(var(--spacing)*8)!important}stagewise-companion-anchor .w-9\\.5{width:calc(var(--spacing)*9.5)!important}stagewise-companion-anchor .w-96{width:calc(var(--spacing)*96)!important}stagewise-companion-anchor .w-\\[50\\%\\]{width:50%!important}stagewise-companion-anchor .w-auto{width:auto!important}stagewise-companion-anchor .w-fit{width:-moz-fit-content!important;width:fit-content!important}stagewise-companion-anchor .w-full{width:100%!important}stagewise-companion-anchor .w-max{width:-moz-max-content!important;width:max-content!important}stagewise-companion-anchor .w-screen{width:100vw!important}stagewise-companion-anchor .max-w-8{max-width:calc(var(--spacing)*8)!important}stagewise-companion-anchor .max-w-90{max-width:calc(var(--spacing)*90)!important}stagewise-companion-anchor .max-w-\\[40vw\\]{max-width:40vw!important}stagewise-companion-anchor .max-w-full{max-width:100%!important}stagewise-companion-anchor .min-w-0{min-width:calc(var(--spacing)*0)!important}stagewise-companion-anchor .min-w-3{min-width:calc(var(--spacing)*3)!important}stagewise-companion-anchor .min-w-24{min-width:calc(var(--spacing)*24)!important}stagewise-companion-anchor .flex-1{flex:1!important}stagewise-companion-anchor .flex-shrink-0,stagewise-companion-anchor .shrink-0{flex-shrink:0!important}stagewise-companion-anchor .origin-bottom{transform-origin:bottom!important}stagewise-companion-anchor .origin-bottom-left{transform-origin:0 100%!important}stagewise-companion-anchor .origin-bottom-right{transform-origin:100% 100%!important}stagewise-companion-anchor .origin-center{transform-origin:50%!important}stagewise-companion-anchor .origin-top{transform-origin:top!important}stagewise-companion-anchor .origin-top-left{transform-origin:0 0!important}stagewise-companion-anchor .origin-top-right{transform-origin:100% 0!important}stagewise-companion-anchor .scale-25{--tw-scale-x:25%!important;--tw-scale-y:25%!important;--tw-scale-z:25%!important;scale:var(--tw-scale-x)var(--tw-scale-y)!important}stagewise-companion-anchor .scale-50{--tw-scale-x:50%!important;--tw-scale-y:50%!important;--tw-scale-z:50%!important;scale:var(--tw-scale-x)var(--tw-scale-y)!important}stagewise-companion-anchor .scale-100{--tw-scale-x:100%!important;--tw-scale-y:100%!important;--tw-scale-z:100%!important;scale:var(--tw-scale-x)var(--tw-scale-y)!important}stagewise-companion-anchor .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)!important}stagewise-companion-anchor .animate-pulse{animation:var(--animate-pulse)!important}stagewise-companion-anchor .animate-spin{animation:var(--animate-spin)!important}stagewise-companion-anchor .cursor-copy{cursor:copy!important}stagewise-companion-anchor .cursor-not-allowed{cursor:not-allowed!important}stagewise-companion-anchor .cursor-pointer{cursor:pointer!important}stagewise-companion-anchor .resize{resize:both!important}stagewise-companion-anchor .resize-none{resize:none!important}stagewise-companion-anchor .snap-start{scroll-snap-align:start!important}stagewise-companion-anchor .list-inside{list-style-position:inside!important}stagewise-companion-anchor .list-decimal{list-style-type:decimal!important}stagewise-companion-anchor .flex-col{flex-direction:column!important}stagewise-companion-anchor .flex-col-reverse{flex-direction:column-reverse!important}stagewise-companion-anchor .flex-row{flex-direction:row!important}stagewise-companion-anchor .flex-wrap{flex-wrap:wrap!important}stagewise-companion-anchor .items-center{align-items:center!important}stagewise-companion-anchor .items-end{align-items:flex-end!important}stagewise-companion-anchor .items-start{align-items:flex-start!important}stagewise-companion-anchor .items-stretch{align-items:stretch!important}stagewise-companion-anchor .justify-between{justify-content:space-between!important}stagewise-companion-anchor .justify-center{justify-content:center!important}stagewise-companion-anchor .justify-end{justify-content:flex-end!important}stagewise-companion-anchor .justify-start{justify-content:flex-start!important}stagewise-companion-anchor .gap-0\\.5{gap:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .gap-1{gap:calc(var(--spacing)*1)!important}stagewise-companion-anchor .gap-2{gap:calc(var(--spacing)*2)!important}stagewise-companion-anchor .gap-3{gap:calc(var(--spacing)*3)!important}stagewise-companion-anchor :where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}stagewise-companion-anchor :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}stagewise-companion-anchor :where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))!important}stagewise-companion-anchor :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}stagewise-companion-anchor :where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0!important;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse))!important;margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))!important}stagewise-companion-anchor :where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0!important;border-bottom-style:var(--tw-border-style)!important;border-top-style:var(--tw-border-style)!important;border-top-width:calc(1px*var(--tw-divide-y-reverse))!important;border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))!important}stagewise-companion-anchor :where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1!important}stagewise-companion-anchor :where(.divide-blue-200>:not(:last-child)){border-color:var(--color-blue-200)!important}stagewise-companion-anchor :where(.divide-border\\/20>:not(:last-child)){border-color:#71717b33!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor :where(.divide-border\\/20>:not(:last-child)){border-color:color-mix(in oklab,var(--color-border)20%,transparent)!important}}stagewise-companion-anchor :where(.divide-orange-200>:not(:last-child)){border-color:var(--color-orange-200)!important}stagewise-companion-anchor .truncate{text-overflow:ellipsis!important;white-space:nowrap!important;overflow:hidden!important}stagewise-companion-anchor .overflow-hidden{overflow:hidden!important}stagewise-companion-anchor .overflow-visible{overflow:visible!important}stagewise-companion-anchor .overflow-y-auto{overflow-y:auto!important}stagewise-companion-anchor .rounded{border-radius:.25rem!important}stagewise-companion-anchor .rounded-2xl{border-radius:var(--radius-2xl)!important}stagewise-companion-anchor .rounded-full{border-radius:3.40282e38px!important}stagewise-companion-anchor .rounded-lg{border-radius:var(--radius-lg)!important}stagewise-companion-anchor .rounded-md{border-radius:var(--radius-md)!important}stagewise-companion-anchor .rounded-t-3xl{border-top-left-radius:var(--radius-3xl)!important;border-top-right-radius:var(--radius-3xl)!important}stagewise-companion-anchor .rounded-t-lg{border-top-left-radius:var(--radius-lg)!important;border-top-right-radius:var(--radius-lg)!important}stagewise-companion-anchor .rounded-b-3xl{border-bottom-right-radius:var(--radius-3xl)!important;border-bottom-left-radius:var(--radius-3xl)!important}stagewise-companion-anchor .rounded-b-lg{border-bottom-right-radius:var(--radius-lg)!important;border-bottom-left-radius:var(--radius-lg)!important}stagewise-companion-anchor .border{border-style:var(--tw-border-style)!important;border-width:1px!important}stagewise-companion-anchor .border-2{border-style:var(--tw-border-style)!important;border-width:2px!important}stagewise-companion-anchor .border-t{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}stagewise-companion-anchor .border-solid{--tw-border-style:solid!important;border-style:solid!important}stagewise-companion-anchor .border-blue-200{border-color:var(--color-blue-200)!important}stagewise-companion-anchor .border-blue-300{border-color:var(--color-blue-300)!important}stagewise-companion-anchor .border-blue-500{border-color:var(--color-blue-500)!important}stagewise-companion-anchor .border-blue-600\\/80{border-color:#155dfccc!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .border-blue-600\\/80{border-color:color-mix(in oklab,var(--color-blue-600)80%,transparent)!important}}stagewise-companion-anchor .border-border\\/30{border-color:#71717b4d!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .border-border\\/30{border-color:color-mix(in oklab,var(--color-border)30%,transparent)!important}}stagewise-companion-anchor .border-green-500{border-color:var(--color-green-500)!important}stagewise-companion-anchor .border-green-600\\/80{border-color:#00a544cc!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .border-green-600\\/80{border-color:color-mix(in oklab,var(--color-green-600)80%,transparent)!important}}stagewise-companion-anchor .border-orange-200{border-color:var(--color-orange-200)!important}stagewise-companion-anchor .border-orange-300{border-color:var(--color-orange-300)!important}stagewise-companion-anchor .border-orange-500{border-color:var(--color-orange-500)!important}stagewise-companion-anchor .border-pink-500{border-color:var(--color-pink-500)!important}stagewise-companion-anchor .border-purple-500{border-color:var(--color-purple-500)!important}stagewise-companion-anchor .border-red-200{border-color:var(--color-red-200)!important}stagewise-companion-anchor .border-red-500{border-color:var(--color-red-500)!important}stagewise-companion-anchor .border-transparent{border-color:#0000!important}stagewise-companion-anchor .border-yellow-500{border-color:var(--color-yellow-500)!important}stagewise-companion-anchor .border-zinc-300{border-color:var(--color-zinc-300)!important}stagewise-companion-anchor .border-zinc-500{border-color:var(--color-zinc-500)!important}stagewise-companion-anchor .bg-amber-50{background-color:var(--color-amber-50)!important}stagewise-companion-anchor .bg-background\\/60{background-color:#fff9!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-background\\/60{background-color:color-mix(in oklab,var(--color-background)60%,transparent)!important}}stagewise-companion-anchor .bg-blue-50{background-color:var(--color-blue-50)!important}stagewise-companion-anchor .bg-blue-50\\/90{background-color:#eff6ffe6!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-blue-50\\/90{background-color:color-mix(in oklab,var(--color-blue-50)90%,transparent)!important}}stagewise-companion-anchor .bg-blue-100\\/80{background-color:#dbeafecc!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-blue-100\\/80{background-color:color-mix(in oklab,var(--color-blue-100)80%,transparent)!important}}stagewise-companion-anchor .bg-blue-500{background-color:var(--color-blue-500)!important}stagewise-companion-anchor .bg-blue-600{background-color:var(--color-blue-600)!important}stagewise-companion-anchor .bg-blue-600\\/20{background-color:#155dfc33!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-blue-600\\/20{background-color:color-mix(in oklab,var(--color-blue-600)20%,transparent)!important}}stagewise-companion-anchor .bg-green-500{background-color:var(--color-green-500)!important}stagewise-companion-anchor .bg-green-600\\/5{background-color:#00a5440d!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-green-600\\/5{background-color:color-mix(in oklab,var(--color-green-600)5%,transparent)!important}}stagewise-companion-anchor .bg-orange-50\\/90{background-color:#fff7ede6!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-orange-50\\/90{background-color:color-mix(in oklab,var(--color-orange-50)90%,transparent)!important}}stagewise-companion-anchor .bg-orange-100\\/80{background-color:#ffedd5cc!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-orange-100\\/80{background-color:color-mix(in oklab,var(--color-orange-100)80%,transparent)!important}}stagewise-companion-anchor .bg-orange-500{background-color:var(--color-orange-500)!important}stagewise-companion-anchor .bg-orange-600{background-color:var(--color-orange-600)!important}stagewise-companion-anchor .bg-pink-500{background-color:var(--color-pink-500)!important}stagewise-companion-anchor .bg-purple-500{background-color:var(--color-purple-500)!important}stagewise-companion-anchor .bg-red-100{background-color:var(--color-red-100)!important}stagewise-companion-anchor .bg-red-500{background-color:var(--color-red-500)!important}stagewise-companion-anchor .bg-rose-600{background-color:var(--color-rose-600)!important}stagewise-companion-anchor .bg-transparent{background-color:#0000!important}stagewise-companion-anchor .bg-white{background-color:var(--color-white)!important}stagewise-companion-anchor .bg-white\\/40{background-color:#fff6!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-white\\/40{background-color:color-mix(in oklab,var(--color-white)40%,transparent)!important}}stagewise-companion-anchor .bg-white\\/80{background-color:#fffc!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-white\\/80{background-color:color-mix(in oklab,var(--color-white)80%,transparent)!important}}stagewise-companion-anchor .bg-white\\/90{background-color:#ffffffe6!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-white\\/90{background-color:color-mix(in oklab,var(--color-white)90%,transparent)!important}}stagewise-companion-anchor .bg-yellow-500{background-color:var(--color-yellow-500)!important}stagewise-companion-anchor .bg-zinc-50\\/80{background-color:#fafafacc!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-zinc-50\\/80{background-color:color-mix(in oklab,var(--color-zinc-50)80%,transparent)!important}}stagewise-companion-anchor .bg-zinc-300{background-color:var(--color-zinc-300)!important}stagewise-companion-anchor .bg-zinc-500{background-color:var(--color-zinc-500)!important}stagewise-companion-anchor .bg-zinc-500\\/10{background-color:#71717b1a!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-zinc-500\\/10{background-color:color-mix(in oklab,var(--color-zinc-500)10%,transparent)!important}}stagewise-companion-anchor .bg-zinc-500\\/40{background-color:#71717b66!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-zinc-500\\/40{background-color:color-mix(in oklab,var(--color-zinc-500)40%,transparent)!important}}stagewise-companion-anchor .bg-zinc-700\\/80{background-color:#3f3f46cc!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .bg-zinc-700\\/80{background-color:color-mix(in oklab,var(--color-zinc-700)80%,transparent)!important}}stagewise-companion-anchor .bg-gradient-to-tr{--tw-gradient-position:to top right in oklab!important;background-image:linear-gradient(var(--tw-gradient-stops))!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(55\\,48\\,163\\,0\\)_55\\%\\,rgba\\(55\\,48\\,163\\,0\\.35\\)_73\\%\\)\\]{background-image:radial-gradient(circle,#3730a300 55%,#3730a359 73%)!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(219\\,39\\,119\\,0\\.2\\)_0\\%\\,rgba\\(219\\,39\\,119\\,0\\)_100\\%\\)\\]{background-image:radial-gradient(circle,#db277733,#db277700)!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(255\\,255\\,255\\,0\\)_60\\%\\,rgba\\(255\\,255\\,255\\,0\\.2\\)_70\\%\\)\\]{background-image:radial-gradient(circle,#fff0 60%,#fff3 70%)!important}stagewise-companion-anchor .from-blue-600{--tw-gradient-from:var(--color-blue-600)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .from-indigo-700{--tw-gradient-from:var(--color-indigo-700)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .from-orange-600{--tw-gradient-from:var(--color-orange-600)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .from-sky-700{--tw-gradient-from:var(--color-sky-700)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .via-blue-500{--tw-gradient-via:var(--color-blue-500)!important;--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-via-stops)!important}stagewise-companion-anchor .to-fuchsia-700{--tw-gradient-to:var(--color-fuchsia-700)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .to-red-600{--tw-gradient-to:var(--color-red-600)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .to-sky-600{--tw-gradient-to:var(--color-sky-600)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .to-teal-500{--tw-gradient-to:var(--color-teal-500)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .fill-current{fill:currentColor!important}stagewise-companion-anchor .fill-white{fill:var(--color-white)!important}stagewise-companion-anchor .fill-zinc-500\\/50{fill:#71717b80!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .fill-zinc-500\\/50{fill:color-mix(in oklab,var(--color-zinc-500)50%,transparent)!important}}stagewise-companion-anchor .fill-zinc-950{fill:var(--color-zinc-950)!important}stagewise-companion-anchor .stroke-black\\/30{stroke:#0000004d!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .stroke-black\\/30{stroke:color-mix(in oklab,var(--color-black)30%,transparent)!important}}stagewise-companion-anchor .stroke-none{stroke:none!important}stagewise-companion-anchor .stroke-white{stroke:var(--color-white)!important}stagewise-companion-anchor .stroke-zinc-950{stroke:var(--color-zinc-950)!important}stagewise-companion-anchor .stroke-1{stroke-width:1px!important}stagewise-companion-anchor .p-0\\.5{padding:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .p-1{padding:calc(var(--spacing)*1)!important}stagewise-companion-anchor .p-2{padding:calc(var(--spacing)*2)!important}stagewise-companion-anchor .p-3{padding:calc(var(--spacing)*3)!important}stagewise-companion-anchor .p-4{padding:calc(var(--spacing)*4)!important}stagewise-companion-anchor .px-0\\.5{padding-inline:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .px-1{padding-inline:calc(var(--spacing)*1)!important}stagewise-companion-anchor .px-2{padding-inline:calc(var(--spacing)*2)!important}stagewise-companion-anchor .px-3{padding-inline:calc(var(--spacing)*3)!important}stagewise-companion-anchor .px-4{padding-inline:calc(var(--spacing)*4)!important}stagewise-companion-anchor .py-0{padding-block:calc(var(--spacing)*0)!important}stagewise-companion-anchor .py-0\\.5{padding-block:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .py-2{padding-block:calc(var(--spacing)*2)!important}stagewise-companion-anchor .pt-2{padding-top:calc(var(--spacing)*2)!important}stagewise-companion-anchor .pt-4{padding-top:calc(var(--spacing)*4)!important}stagewise-companion-anchor .pr-6{padding-right:calc(var(--spacing)*6)!important}stagewise-companion-anchor .pb-4{padding-bottom:calc(var(--spacing)*4)!important}stagewise-companion-anchor .pl-2{padding-left:calc(var(--spacing)*2)!important}stagewise-companion-anchor .text-base{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}stagewise-companion-anchor .text-lg{font-size:var(--text-lg)!important;line-height:var(--tw-leading,var(--text-lg--line-height))!important}stagewise-companion-anchor .text-sm{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}stagewise-companion-anchor .text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}stagewise-companion-anchor .text-\\[0\\.5em\\]{font-size:.5em!important}stagewise-companion-anchor .font-bold{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}stagewise-companion-anchor .font-medium{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}stagewise-companion-anchor .font-normal{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}stagewise-companion-anchor .font-semibold{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}stagewise-companion-anchor .text-amber-800{color:var(--color-amber-800)!important}stagewise-companion-anchor .text-blue-500{color:var(--color-blue-500)!important}stagewise-companion-anchor .text-blue-600{color:var(--color-blue-600)!important}stagewise-companion-anchor .text-blue-700{color:var(--color-blue-700)!important}stagewise-companion-anchor .text-blue-800{color:var(--color-blue-800)!important}stagewise-companion-anchor .text-foreground{color:var(--color-foreground)!important}stagewise-companion-anchor .text-indigo-700{color:var(--color-indigo-700)!important}stagewise-companion-anchor .text-orange-600{color:var(--color-orange-600)!important}stagewise-companion-anchor .text-orange-700{color:var(--color-orange-700)!important}stagewise-companion-anchor .text-orange-800{color:var(--color-orange-800)!important}stagewise-companion-anchor .text-red-600{color:var(--color-red-600)!important}stagewise-companion-anchor .text-red-700{color:var(--color-red-700)!important}stagewise-companion-anchor .text-transparent{color:#0000!important}stagewise-companion-anchor .text-violet-700{color:var(--color-violet-700)!important}stagewise-companion-anchor .text-white{color:var(--color-white)!important}stagewise-companion-anchor .text-zinc-500{color:var(--color-zinc-500)!important}stagewise-companion-anchor .text-zinc-600{color:var(--color-zinc-600)!important}stagewise-companion-anchor .text-zinc-700{color:var(--color-zinc-700)!important}stagewise-companion-anchor .text-zinc-950{color:var(--color-zinc-950)!important}stagewise-companion-anchor .opacity-0{opacity:0!important}stagewise-companion-anchor .opacity-20{opacity:.2!important}stagewise-companion-anchor .opacity-30{opacity:.3!important}stagewise-companion-anchor .opacity-80{opacity:.8!important}stagewise-companion-anchor .opacity-100{opacity:1!important}stagewise-companion-anchor .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-black\\/50{--tw-shadow-color:#00000080!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .shadow-black\\/50{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-black)50%,transparent)var(--tw-shadow-alpha),transparent)!important}}stagewise-companion-anchor .ring-transparent{--tw-ring-color:transparent!important}stagewise-companion-anchor .ring-zinc-950\\/20{--tw-ring-color:#09090b33!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .ring-zinc-950\\/20{--tw-ring-color:color-mix(in oklab,var(--color-zinc-950)20%,transparent)!important}}stagewise-companion-anchor .outline{outline-style:var(--tw-outline-style)!important;outline-width:1px!important}stagewise-companion-anchor .blur{--tw-blur:blur(8px)!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .blur-md{--tw-blur:blur(var(--blur-md))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .blur-none{--tw-blur: !important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-md{--tw-drop-shadow-size:drop-shadow(0 3px 3px var(--tw-drop-shadow-color,#0000001f))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-md))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-xl{--tw-drop-shadow-size:drop-shadow(0 9px 7px var(--tw-drop-shadow-color,#0000001a))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-xl))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-xs{--tw-drop-shadow-size:drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000d))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-xs))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-black{--tw-drop-shadow-color:#000!important;--tw-drop-shadow:var(--tw-drop-shadow-size)!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .drop-shadow-black{--tw-drop-shadow-color:color-mix(in oklab,var(--color-black)var(--tw-drop-shadow-alpha),transparent)!important}}stagewise-companion-anchor .drop-shadow-indigo-950{--tw-drop-shadow-color:oklch(25.7% .09 281.288)!important;--tw-drop-shadow:var(--tw-drop-shadow-size)!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .drop-shadow-indigo-950{--tw-drop-shadow-color:color-mix(in oklab,var(--color-indigo-950)var(--tw-drop-shadow-alpha),transparent)!important}}stagewise-companion-anchor .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .backdrop-blur{--tw-backdrop-blur:blur(8px)!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-saturate-150{--tw-backdrop-saturate:saturate(150%)!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .transition-all{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .duration-0{--tw-duration:0s!important;transition-duration:0s!important}stagewise-companion-anchor .duration-100{--tw-duration:.1s!important;transition-duration:.1s!important}stagewise-companion-anchor .duration-150{--tw-duration:.15s!important;transition-duration:.15s!important}stagewise-companion-anchor .duration-300{--tw-duration:.3s!important;transition-duration:.3s!important}stagewise-companion-anchor .duration-500{--tw-duration:.5s!important;transition-duration:.5s!important}stagewise-companion-anchor .ease-out{--tw-ease:var(--ease-out)!important;transition-timing-function:var(--ease-out)!important}stagewise-companion-anchor .outline-none{--tw-outline-style:none!important;outline-style:none!important}stagewise-companion-anchor .select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}stagewise-companion-anchor :is(.\\*\\:size-full>*){width:100%!important;height:100%!important}stagewise-companion-anchor .placeholder\\:text-zinc-400::-moz-placeholder{color:var(--color-zinc-400)!important}stagewise-companion-anchor .placeholder\\:text-zinc-400::placeholder{color:var(--color-zinc-400)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::-moz-placeholder{color:#09090b80!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::placeholder{color:#09090b80!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::-moz-placeholder{color:#09090bb3!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::placeholder{color:#09090bb3!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)!important}}@media (hover:hover){stagewise-companion-anchor .hover\\:border-red-600\\/80:hover{border-color:#e40014cc!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .hover\\:border-red-600\\/80:hover{border-color:color-mix(in oklab,var(--color-red-600)80%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-blue-200\\/80:hover{background-color:#bedbffcc!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .hover\\:bg-blue-200\\/80:hover{background-color:color-mix(in oklab,var(--color-blue-200)80%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-orange-200:hover{background-color:var(--color-orange-200)!important}stagewise-companion-anchor .hover\\:bg-orange-700:hover{background-color:var(--color-orange-700)!important}stagewise-companion-anchor .hover\\:bg-red-600\\/20:hover{background-color:#e4001433!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .hover\\:bg-red-600\\/20:hover{background-color:color-mix(in oklab,var(--color-red-600)20%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-500\\/20:hover{background-color:#71717b33!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .hover\\:bg-zinc-500\\/20:hover{background-color:color-mix(in oklab,var(--color-zinc-500)20%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-950\\/5:hover{background-color:#09090b0d!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .hover\\:bg-zinc-950\\/5:hover{background-color:color-mix(in oklab,var(--color-zinc-950)5%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-950\\/10:hover{background-color:#09090b1a!important}@supports (color:color-mix(in lab,red,red)){stagewise-companion-anchor .hover\\:bg-zinc-950\\/10:hover{background-color:color-mix(in oklab,var(--color-zinc-950)10%,transparent)!important}}stagewise-companion-anchor .hover\\:text-orange-800:hover{color:var(--color-orange-800)!important}stagewise-companion-anchor .hover\\:text-white:hover{color:var(--color-white)!important}stagewise-companion-anchor .hover\\:underline:hover{text-decoration-line:underline!important}stagewise-companion-anchor .hover\\:opacity-100:hover{opacity:1!important}stagewise-companion-anchor .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}}stagewise-companion-anchor .focus\\:border-blue-500:focus{border-color:var(--color-blue-500)!important}stagewise-companion-anchor .focus\\:border-zinc-500:focus{border-color:var(--color-zinc-500)!important}stagewise-companion-anchor .focus\\:text-zinc-900:focus{color:var(--color-zinc-900)!important}stagewise-companion-anchor .focus\\:outline-none:focus{--tw-outline-style:none!important;outline-style:none!important}stagewise-companion-anchor .disabled\\:opacity-50:disabled{opacity:.5!important}stagewise-companion-anchor .data-focus\\:outline-none[data-focus]{--tw-outline-style:none!important;outline-style:none!important}stagewise-companion-anchor .animate-shake{animation:.5s ease-in-out 2 shake}}@keyframes shake{0%,to{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-2px)}20%,40%,60%,80%{transform:translate(2px)}}@keyframes gradient-animation{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}stagewise-companion-anchor stagewise-companion-anchor{all:initial;interpolate-size:allow-keywords;transform:translate(0);color:var(--color-zinc-950)!important;letter-spacing:normal!important;text-rendering:auto!important;font-family:Inter,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important;font-weight:400!important;line-height:normal!important}@supports (font-variation-settings:normal){stagewise-companion-anchor stagewise-companion-anchor{font-optical-sizing:auto!important;font-family:InterVariable,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important}}stagewise-companion-anchor #headlessui-portal-root{z-index:50!important;width:100vw!important;height:100vh!important;position:fixed!important}stagewise-companion-anchor #headlessui-portal-root>*{pointer-events:auto!important}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}';
function getElementAttributes(element) {
  const attrs = {}, priorityAttrs = [
    "id",
    "class",
    "name",
    "type",
    "href",
    "src",
    "alt",
    "for",
    "placeholder"
  ], dataAttrs = [];
  for (let i2 = 0; i2 < element.attributes.length; i2++) {
    const attr = element.attributes[i2];
    attr.name.startsWith("data-") ? dataAttrs.push({ name: attr.name, value: attr.value }) : (priorityAttrs.includes(attr.name.toLowerCase()) || attr.name.toLowerCase() !== "style") && (attrs[attr.name] = attr.value);
  }
  return dataAttrs.forEach((da) => {
    attrs[da.name] = da.value;
  }), attrs;
}
function generateElementContext(element, index) {
  var _a;
  let context = `<element index="${index + 1}">
`;
  context += `  <tag>${element.tagName.toLowerCase()}</tag>
`;
  const id = element.id;
  id && (context += `  <id>${id}</id>
`);
  const classes = Array.from(element.classList).join(", ");
  classes && (context += `  <classes>${classes}</classes>
`);
  const attributes = getElementAttributes(element);
  if (Object.keys(attributes).length > 0) {
    context += `  <attributes>
`;
    for (const [key, value] of Object.entries(attributes))
      (key.toLowerCase() !== "class" || !classes) && (context += `    <${key}>${value}</${key}>
`);
    context += `  </attributes>
`;
  }
  const text = (_a = element.innerText) == null ? void 0 : _a.trim();
  if (text && (context += `  <text>${text.length > 100 ? `${text.substring(0, 100)}...` : text}</text>
`), context += `  <structural_context>
`, element.parentElement) {
    const parent = element.parentElement;
    context += `    <parent>
`, context += `      <tag>${parent.tagName.toLowerCase()}</tag>
`, parent.id && (context += `      <id>${parent.id}</id>
`);
    const parentClasses = Array.from(parent.classList).join(", ");
    parentClasses && (context += `      <classes>${parentClasses}</classes>
`), context += `    </parent>
`;
  } else
    context += `    <parent>No parent element found (likely root or disconnected)</parent>
`;
  context += `  </structural_context>
`;
  try {
    const styles = window.getComputedStyle(element), relevantStyles = {
      color: styles.color,
      backgroundColor: styles.backgroundColor,
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      display: styles.display
    };
    context += `  <styles>
`;
    for (const [key, value] of Object.entries(relevantStyles))
      context += `    <${key}>${value}</${key}>
`;
    context += `  </styles>
`;
  } catch {
    context += `  <styles>Could not retrieve computed styles</styles>
`;
  }
  return context += `</element>
`, context;
}
function createPrompt(selectedElements, userPrompt, url, contextSnippets) {
  const pluginContext = contextSnippets.map(
    (snippet) => `
      <plugin_contexts>
<${snippet.pluginName}>
${snippet.contextSnippets.map((snippet2) => `    <${snippet2.promptContextName}>${snippet2.content}</${snippet2.promptContextName}>`).join(`
`)}
</${snippet.pluginName}>
</plugin_contexts>
`.trim()
  ).join(`
`);
  if (!selectedElements || selectedElements.length === 0)
    return `
    <request>
      <user_goal>${userPrompt}</user_goal>
      <url>${url}</url>
  <context>No specific element was selected on the page. Please analyze the page code in general or ask for clarification.</context>
  ${pluginContext}
</request>`.trim();
  let detailedContext = "";
  return selectedElements.forEach((element, index) => {
    detailedContext += generateElementContext(element, index);
  }), `
<request>
  <user_goal>${userPrompt}</user_goal>
  <url>${url}</url>
  <selected_elements>
    ${detailedContext.trim()}
  </selected_elements>
  ${pluginContext}
</request>`.trim();
}
const AppContext = K$2(null), STORAGE_KEY = "stgws:companion";
function loadStateFromStorage() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    return console.error("Failed to load state from storage:", error), {};
  }
}
function saveStateToStorage(state) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Failed to save state to storage:", error);
  }
}
function AppStateProvider({
  children
}) {
  const [state, setState] = d$1(() => {
    const storedState = loadStateFromStorage();
    return {
      appBlockRequestList: [],
      appUnblockRequestList: [],
      lastBlockRequestNumber: 0,
      lastUnblockRequestNumber: 0,
      isMainAppBlocked: false,
      toolbarBoxRef: b(),
      minimized: storedState.minimized ?? false,
      requestMainAppBlock: () => 0,
      // These will be replaced by the actual implementations
      requestMainAppUnblock: () => 0,
      discardMainAppBlock: () => {
      },
      discardMainAppUnblock: () => {
      },
      setToolbarBoxRef: () => {
      },
      unsetToolbarBoxRef: () => {
      },
      minimize: () => {
      },
      expand: () => {
      }
    };
  });
  y$1(() => {
    saveStateToStorage({
      minimized: state.minimized
    });
  }, [state.minimized]);
  const requestMainAppBlock = q$1(() => {
    let newHandleValue = 0;
    return setState((prev) => (newHandleValue = prev.lastBlockRequestNumber + 1, {
      ...prev,
      appBlockRequestList: [...prev.appBlockRequestList, newHandleValue],
      lastBlockRequestNumber: newHandleValue,
      isMainAppBlocked: prev.appUnblockRequestList.length === 0
    })), newHandleValue;
  }, []), requestMainAppUnblock = q$1(() => {
    let newHandleValue = 0;
    return setState((prev) => (newHandleValue = prev.lastUnblockRequestNumber + 1, {
      ...prev,
      appUnblockRequestList: [...prev.appUnblockRequestList, newHandleValue],
      lastUnblockRequestNumber: newHandleValue,
      isMainAppBlocked: false
    })), newHandleValue;
  }, []), discardMainAppBlock = q$1((handle) => {
    setState((prev) => {
      const newBlockRequestList = prev.appBlockRequestList.filter(
        (h2) => h2 !== handle
      );
      return {
        ...prev,
        appBlockRequestList: newBlockRequestList,
        isMainAppBlocked: newBlockRequestList.length > 0 && prev.appUnblockRequestList.length === 0
      };
    });
  }, []), discardMainAppUnblock = q$1((handle) => {
    setState((prev) => {
      const newUnblockRequestList = prev.appUnblockRequestList.filter(
        (h2) => h2 !== handle
      );
      return {
        ...prev,
        appUnblockRequestList: newUnblockRequestList,
        isMainAppBlocked: prev.appBlockRequestList.length > 0 && newUnblockRequestList.length === 0
      };
    });
  }, []), setToolbarBoxRef = q$1((ref) => {
    setState((prev) => ({ ...prev, toolbarBoxRef: ref }));
  }, []), unsetToolbarBoxRef = q$1(() => {
    setState((prev) => ({ ...prev, toolbarBoxRef: b() }));
  }, []), minimize = q$1(() => {
    setState((prev) => ({ ...prev, minimized: true }));
  }, []), expand = q$1(() => {
    setState((prev) => ({ ...prev, minimized: false }));
  }, []), value = {
    requestMainAppBlock,
    requestMainAppUnblock,
    discardMainAppBlock,
    discardMainAppUnblock,
    isMainAppBlocked: state.isMainAppBlocked,
    toolbarBoxRef: state.toolbarBoxRef,
    setToolbarBoxRef,
    unsetToolbarBoxRef,
    minimized: state.minimized,
    minimize,
    expand
  };
  return /* @__PURE__ */ u$4(AppContext.Provider, { value, children });
}
function useAppState() {
  const context = x$1(AppContext);
  if (!context)
    throw new Error("useAppState must be used within an AppStateProvider");
  return context;
}
const ChatContext = K$2({
  chats: [],
  currentChatId: null,
  createChat: () => "",
  deleteChat: () => {
  },
  setCurrentChat: () => {
  },
  setChatInput: () => {
  },
  addChatDomContext: () => {
  },
  removeChatDomContext: () => {
  },
  addMessage: () => {
  },
  chatAreaState: "hidden",
  setChatAreaState: () => {
  },
  isPromptCreationActive: false,
  startPromptCreation: () => {
  },
  stopPromptCreation: () => {
  },
  promptState: "idle",
  resetPromptState: () => {
  }
}), ChatStateProvider = ({ children }) => {
  const [chats, setChats] = d$1([
    {
      id: "new_chat",
      messages: [],
      title: "New chat",
      inputValue: "",
      domContextElements: []
    }
  ]), [currentChatId, setCurrentChatId] = d$1("new_chat"), [chatAreaState, internalSetChatAreaState] = d$1("hidden"), [isPromptCreationMode, setIsPromptCreationMode] = d$1(false), [promptState, setPromptState] = d$1("idle"), resetPromptState = q$1(() => {
    setPromptState("idle");
  }, []), { minimized } = useAppState(), { selectedSession, setShouldPromptWindowSelection, windows } = useVSCode();
  y$1(() => {
    minimized && (setIsPromptCreationMode(false), internalSetChatAreaState("hidden"));
  }, [minimized]);
  const { bridge } = useSRPCBridge(), createChat = q$1(() => {
    const newChatId = generateId(), newChat = {
      id: newChatId,
      title: null,
      messages: [],
      inputValue: "",
      domContextElements: []
    };
    return setChats((prev) => [...prev, newChat]), setCurrentChatId(newChatId), newChatId;
  }, []), deleteChat = q$1(
    (chatId) => {
      setChats((prev) => {
        const filteredChats = prev.filter((chat) => chat.id !== chatId);
        return filteredChats.length === 0 ? [
          {
            id: "new_chat",
            messages: [],
            title: "New chat",
            inputValue: "",
            domContextElements: []
          }
        ] : filteredChats;
      }), currentChatId === chatId && setChats((prev) => (setCurrentChatId(prev[0].id), prev));
    },
    [currentChatId]
  ), setCurrentChat = q$1((chatId) => {
    setCurrentChatId(chatId);
  }, []), setChatInput = q$1((chatId, value2) => {
    setChats(
      (prev) => prev.map(
        (chat) => chat.id === chatId ? { ...chat, inputValue: value2 } : chat
      )
    );
  }, []), { plugins } = usePlugins(), startPromptCreation = q$1(() => {
    setIsPromptCreationMode(true), chatAreaState === "hidden" && internalSetChatAreaState("compact"), plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onPromptingStart) == null || _a.call(plugin);
    });
  }, [chatAreaState]), stopPromptCreation = q$1(() => {
    setIsPromptCreationMode(false), setPromptState("idle"), setChats(
      (prev) => prev.map(
        (chat) => chat.id === currentChatId ? { ...chat, domContextElements: [] } : chat
      )
    ), chatAreaState === "compact" && internalSetChatAreaState("hidden"), plugins.forEach((plugin) => {
      var _a;
      (_a = plugin.onPromptingAbort) == null || _a.call(plugin);
    });
  }, [currentChatId, chatAreaState]), setChatAreaState = q$1(
    (state) => {
      internalSetChatAreaState(state), state === "hidden" && stopPromptCreation();
    },
    [internalSetChatAreaState, stopPromptCreation]
  ), addChatDomContext = q$1(
    (chatId, element) => {
      const pluginsWithContextGetters = plugins.filter(
        (plugin) => plugin.onContextElementSelect
      );
      setChats(
        (prev) => prev.map((chat) => chat.id === chatId ? {
          ...chat,
          domContextElements: [
            ...chat.domContextElements,
            {
              element,
              pluginContext: pluginsWithContextGetters.map((plugin) => {
                var _a;
                return {
                  pluginName: plugin.pluginName,
                  context: (_a = plugin.onContextElementSelect) == null ? void 0 : _a.call(plugin, element)
                };
              })
            }
          ]
        } : chat)
      );
    },
    [plugins]
  ), removeChatDomContext = q$1(
    (chatId, element) => {
      setChats(
        (prev) => prev.map(
          (chat) => chat.id === chatId ? {
            ...chat,
            domContextElements: chat.domContextElements.filter(
              (e2) => e2.element !== element
            )
          } : chat
        )
      );
    },
    []
  ), addMessage = q$1(
    async (chatId, content, pluginTriggered = false) => {
      if (!content.trim() || promptState === "loading")
        return;
      const chat = chats.find((chat2) => chat2.id === chatId);
      setPromptState("loading");
      const pluginContextSnippets = [], pluginProcessingPromises = plugins.map(async (plugin) => {
        var _a;
        const userMessagePayload = {
          id: generateId(),
          text: content,
          contextElements: (chat == null ? void 0 : chat.domContextElements.map((el) => el.element)) || [],
          sentByPlugin: pluginTriggered
        }, handlerResult = await ((_a = plugin.onPromptSend) == null ? void 0 : _a.call(plugin, userMessagePayload));
        if (!handlerResult || !handlerResult.contextSnippets || handlerResult.contextSnippets.length === 0)
          return null;
        const snippetPromises = handlerResult.contextSnippets.map(
          async (snippet) => {
            const resolvedContent = typeof snippet.content == "string" ? snippet.content : await snippet.content();
            return {
              promptContextName: snippet.promptContextName,
              content: resolvedContent
            };
          }
        ), resolvedSnippets = await Promise.all(snippetPromises);
        return resolvedSnippets.length > 0 ? {
          pluginName: plugin.pluginName,
          contextSnippets: resolvedSnippets
        } : null;
      });
      (await Promise.all(pluginProcessingPromises)).forEach((pluginCtx) => {
        pluginCtx && pluginContextSnippets.push(pluginCtx);
      });
      const prompt = createPrompt(
        chat == null ? void 0 : chat.domContextElements.map((e2) => e2.element),
        content,
        window.location.href,
        pluginContextSnippets
      ), newMessage = {
        id: generateId(),
        content: content.trim(),
        sender: "user",
        type: "regular",
        timestamp: /* @__PURE__ */ new Date()
      };
      async function triggerAgentPrompt() {
        if (bridge)
          try {
            const result = await bridge.call.triggerAgentPrompt(
              {
                prompt,
                sessionId: selectedSession == null ? void 0 : selectedSession.sessionId
              },
              { onUpdate: (update) => {
              } }
            );
            result.result.success ? (setTimeout(() => {
              setPromptState("success");
            }, 1e3), setChats(
              (prev) => prev.map(
                (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
              )
            )) : (result.result.errorCode && result.result.errorCode === "session_mismatch" && setShouldPromptWindowSelection(true), setPromptState("error"), setTimeout(() => {
              setPromptState("idle"), setIsPromptCreationMode(false), setChats(
                (prev) => prev.map(
                  (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
                )
              );
            }, 300));
          } catch {
            setPromptState("error"), setTimeout(() => {
              setPromptState("idle"), setIsPromptCreationMode(false), setChats(
                (prev) => prev.map(
                  (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
                )
              );
            }, 300);
          }
        else
          setShouldPromptWindowSelection(true), setPromptState("error"), setTimeout(() => {
            setPromptState("idle"), setIsPromptCreationMode(false), setChats(
              (prev) => prev.map(
                (chat2) => chat2.id === chatId ? { ...chat2, inputValue: "" } : chat2
              )
            );
          }, 300);
      }
      triggerAgentPrompt(), chatAreaState === "hidden" && internalSetChatAreaState("compact"), setChats(
        (prev) => prev.map(
          (chat2) => chat2.id === chatId ? {
            ...chat2,
            messages: [...chat2.messages, newMessage],
            inputValue: content.trim(),
            // Keep the original prompt instead of clearing
            domContextElements: []
          } : chat2
        )
      );
    },
    [
      chatAreaState,
      bridge,
      chats,
      setIsPromptCreationMode,
      internalSetChatAreaState,
      selectedSession,
      promptState,
      setPromptState,
      plugins
    ]
  ), value = {
    chats,
    currentChatId,
    createChat,
    deleteChat,
    setCurrentChat,
    setChatInput,
    addMessage,
    chatAreaState,
    setChatAreaState,
    isPromptCreationActive: isPromptCreationMode,
    startPromptCreation,
    stopPromptCreation,
    addChatDomContext,
    removeChatDomContext,
    promptState,
    resetPromptState
  };
  return /* @__PURE__ */ u$4(ChatContext.Provider, { value, children });
};
function useChatState() {
  const context = x$1(ChatContext);
  if (!context)
    throw new Error("useChatState must be used within a ChatStateProvider");
  return context;
}
function ContextProviders({
  children,
  config
}) {
  return /* @__PURE__ */ u$4(ConfigProvider, { config, children: /* @__PURE__ */ u$4(VSCodeProvider, { children: /* @__PURE__ */ u$4(SRPCBridgeProvider, { children: /* @__PURE__ */ u$4(PluginProvider, { children: /* @__PURE__ */ u$4(ChatStateProvider, { children }) }) }) }) });
}
function useEventListener(eventName, handler, options, element = window) {
  y$1(() => {
    if (!(typeof window > "u") && element)
      return element.addEventListener(eventName, handler, options), () => element.removeEventListener(eventName, handler, options);
  }, [eventName, handler, element, options]);
}
function HotkeyListener() {
  const { startPromptCreation, stopPromptCreation, isPromptCreationActive } = useChatState(), hotKeyHandlerMap = T$1(
    () => ({
      // Functions that return true will prevent further propagation of the event.
      [HotkeyActions.CTRL_ALT_C]: () => isPromptCreationActive ? false : (startPromptCreation(), true),
      [HotkeyActions.ESC]: () => isPromptCreationActive ? (stopPromptCreation(), true) : false
    }),
    [startPromptCreation, stopPromptCreation, isPromptCreationActive]
  ), hotKeyListener = q$1(
    (ev) => {
      for (const [action, definition] of Object.entries(
        hotkeyActionDefinitions
      ))
        if (definition.isEventMatching(ev)) {
          hotKeyHandlerMap[action]() && (ev.preventDefault(), ev.stopPropagation());
          break;
        }
    },
    [hotKeyHandlerMap]
  );
  return useEventListener("keydown", hotKeyListener, {
    capture: true
  }), null;
}
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document < "u" ? Rn.useLayoutEffect : () => {
};
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn2) {
  const ref = A$1(null);
  return $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    ref.current = fn2;
  }, [
    fn2
  ]), q$1((...args) => {
    const f2 = ref.current;
    return f2 == null ? void 0 : f2(...args);
  }, []);
}
const $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el == null ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
}, $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => el && "window" in el && el.window === el ? el : $431fbd86ca7dc216$export$b204af158042fbac(el).defaultView || window;
function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
  return otherNode && node ? node.contains(otherNode) : false;
}
const $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
  return doc.activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
  return event.target;
}
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  return typeof window > "u" || window.navigator == null ? false : ((_window_navigator_userAgentData = window.navigator.userAgentData) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window < "u" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator.userAgentData) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn2) {
  let res = null;
  return () => (res == null && (res = fn2()), res);
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = A$1(/* @__PURE__ */ new Map()), addGlobalListener = q$1((eventTarget, type, listener, options) => {
    let fn2 = options != null && options.once ? (...args) => {
      globalListeners.current.delete(listener), listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn: fn2,
      options
    }), eventTarget.addEventListener(type, fn2, options);
  }, []), removeGlobalListener = q$1((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn2 = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn2, options), globalListeners.current.delete(listener);
  }, []), removeAllGlobalListeners = q$1(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  return y$1(() => removeAllGlobalListeners, [
    removeAllGlobalListeners
  ]), {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
function $6a7db85432448f7f$export$60278871457622de(event) {
  return event.mozInputSource === 0 && event.isTrusted ? true : $c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType ? event.type === "click" && event.buttons === 1 : event.detail === 0 && !event.pointerType;
}
function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  return event.nativeEvent = nativeEvent, event.isDefaultPrevented = () => event.defaultPrevented, event.isPropagationStopped = () => event.cancelBubble, event.persist = () => {
  }, event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  }), Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = A$1({
    isFocused: false,
    observer: null
  });
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    const state = stateRef.current;
    return () => {
      state.observer && (state.observer.disconnect(), state.observer = null);
    };
  }, []);
  let dispatchBlur = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e2) => {
    onBlur == null || onBlur(e2);
  });
  return q$1((e2) => {
    if (e2.target instanceof HTMLButtonElement || e2.target instanceof HTMLInputElement || e2.target instanceof HTMLTextAreaElement || e2.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e2.target, onBlurHandler = (e3) => {
        if (stateRef.current.isFocused = false, target.disabled) {
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e3);
          dispatchBlur(event);
        }
        stateRef.current.observer && (stateRef.current.observer.disconnect(), stateRef.current.observer = null);
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      }), stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 || _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          })), target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      }), stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}
let $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false, $507fabe10e71c6fb$var$currentModality = null, $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set(), $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map(), $507fabe10e71c6fb$var$hasEventBeforeFocus = false, $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e2) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers)
    handler(modality, e2);
}
function $507fabe10e71c6fb$var$isValidKey(e2) {
  return !(e2.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e2.altKey || e2.ctrlKey || e2.key === "Control" || e2.key === "Shift" || e2.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e2) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true, $507fabe10e71c6fb$var$isValidKey(e2) && ($507fabe10e71c6fb$var$currentModality = "keyboard", $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e2));
}
function $507fabe10e71c6fb$var$handlePointerEvent(e2) {
  $507fabe10e71c6fb$var$currentModality = "pointer", (e2.type === "mousedown" || e2.type === "pointerdown") && ($507fabe10e71c6fb$var$hasEventBeforeFocus = true, $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e2));
}
function $507fabe10e71c6fb$var$handleClickEvent(e2) {
  $6a7db85432448f7f$export$60278871457622de(e2) && ($507fabe10e71c6fb$var$hasEventBeforeFocus = true, $507fabe10e71c6fb$var$currentModality = "virtual");
}
function $507fabe10e71c6fb$var$handleFocusEvent(e2) {
  e2.target === window || e2.target === document || $8a9cb279dc87e130$export$fda7da73ab5d4c48 || !e2.isTrusted || (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently && ($507fabe10e71c6fb$var$currentModality = "virtual", $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e2)), $507fabe10e71c6fb$var$hasEventBeforeFocus = false, $507fabe10e71c6fb$var$hasBlurredWindowRecently = false);
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false, $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window > "u" || $507fabe10e71c6fb$export$d90243b58daecda7.get($431fbd86ca7dc216$export$f21a1ffae260145a(element)))
    return;
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element), documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true, focus.apply(this, arguments);
  }, documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true), documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true), documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true), windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true), windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false), typeof PointerEvent < "u" ? (documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true), documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true), documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true)) : false, windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  }), $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element), documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  loadListener && documentObject.removeEventListener("DOMContentLoaded", loadListener), $507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject) && (windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus, documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true), documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true), documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true), windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true), windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false), typeof PointerEvent < "u" ? (documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true), documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true), documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true)) : false, $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject));
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let loadListener;
  return documentObject.readyState !== "loading" ? $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) : (loadListener = () => {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  }, documentObject.addEventListener("DOMContentLoaded", loadListener)), () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
typeof document < "u" && $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
const $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e2) {
  let document1 = $431fbd86ca7dc216$export$b204af158042fbac(e2 == null ? void 0 : e2.target);
  const IHTMLInputElement = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).HTMLInputElement : HTMLInputElement, IHTMLTextAreaElement = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).HTMLTextAreaElement : HTMLTextAreaElement, IHTMLElement = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).HTMLElement : HTMLElement, IKeyboardEvent = typeof window < "u" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 == null ? void 0 : e2.target).KeyboardEvent : KeyboardEvent;
  return isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable, !(isTextInput && modality === "keyboard" && e2 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e2.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn2, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents(), y$1(() => {
    let handler = (modality, e2) => {
      $507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts != null && opts.isTextInput), modality, e2) && fn2($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    return $507fabe10e71c6fb$var$changeHandlers.add(handler), () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = q$1((e2) => {
    if (e2.target === e2.currentTarget)
      return onBlurProp && onBlurProp(e2), onFocusChange && onFocusChange(false), true;
  }, [
    onBlurProp,
    onFocusChange
  ]), onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur), onFocus = q$1((e2) => {
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target), activeElement = ownerDocument ? $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument) : $d4ee10de306f2510$export$cd4e5573fbe2b576();
    e2.target === e2.currentTarget && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent) && (onFocusProp && onFocusProp(e2), onFocusChange && onFocusChange(true), onSyntheticFocus(e2));
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props, state = A$1({
    isFocusWithin: false
  }), { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6(), onBlur = q$1((e2) => {
    e2.currentTarget.contains(e2.target) && state.current.isFocusWithin && !e2.currentTarget.contains(e2.relatedTarget) && (state.current.isFocusWithin = false, removeAllGlobalListeners(), onBlurWithin && onBlurWithin(e2), onFocusWithinChange && onFocusWithinChange(false));
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]), onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur), onFocus = q$1((e2) => {
    if (!e2.currentTarget.contains(e2.target))
      return;
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target), activeElement = $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent)) {
      onFocusWithin && onFocusWithin(e2), onFocusWithinChange && onFocusWithinChange(true), state.current.isFocusWithin = true, onSyntheticFocus(e2);
      let currentTarget = e2.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e3) => {
        if (state.current.isFocusWithin && !$d4ee10de306f2510$export$4282f70798064fe0(currentTarget, e3.target)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: e3.target
          });
          $8a9cb279dc87e130$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: true
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  return isDisabled ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false, $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true, setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e2) {
  e2.pointerType === "touch" && $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent) : false, $6179b936705e76d3$var$hoverCount++, () => {
      $6179b936705e76d3$var$hoverCount--, !($6179b936705e76d3$var$hoverCount > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent) : false);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props, [isHovered, setHovered] = d$1(false), state = A$1({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  y$1($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6(), { hoverProps, triggerHoverEnd } = T$1(() => {
    let triggerHoverStart = (event, pointerType) => {
      if (state.pointerType = pointerType, isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target))
        return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target, addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(event.target), "pointerover", (e2) => {
        state.isHovered && state.target && !$d4ee10de306f2510$export$4282f70798064fe0(state.target, e2.target) && triggerHoverEnd2(e2, e2.pointerType);
      }, {
        capture: true
      }), onHoverStart && onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      }), onHoverChange && onHoverChange(true), setHovered(true);
    }, triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "", state.target = null, !(pointerType === "touch" || !state.isHovered || !target) && (state.isHovered = false, removeAllGlobalListeners(), onHoverEnd && onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      }), onHoverChange && onHoverChange(false), setHovered(false));
    }, hoverProps2 = {};
    return typeof PointerEvent < "u" ? (hoverProps2.onPointerEnter = (e2) => {
      $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e2.pointerType === "mouse" || triggerHoverStart(e2, e2.pointerType);
    }, hoverProps2.onPointerLeave = (e2) => {
      !isDisabled && e2.currentTarget.contains(e2.target) && triggerHoverEnd2(e2, e2.pointerType);
    }) : false, {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  return y$1(() => {
    isDisabled && triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled
  ]), {
    hoverProps,
    isHovered
  };
}
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props, state = A$1({
    isFocused: false,
    isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
  }), [isFocused, setFocused] = d$1(false), [isFocusVisibleState, setFocusVisible] = d$1(() => state.current.isFocused && state.current.isFocusVisible), updateState = q$1(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []), onFocusChange = q$1((isFocused2) => {
    state.current.isFocused = isFocused2, setFocused(isFocused2), updateState();
  }, [
    updateState
  ]);
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible, updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
    isDisabled: within,
    onFocusChange
  }), { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}
var i = Object.defineProperty, d = (t2, e2, n2) => e2 in t2 ? i(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2, r = (t2, e2, n2) => (d(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
let o$3 = class {
  constructor() {
    r(this, "current", this.detect()), r(this, "handoffState", "pending"), r(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, s$1 = new o$3();
function o$2(n2) {
  var e2, r2;
  return s$1.isServer ? null : n2 ? "ownerDocument" in n2 ? n2.ownerDocument : "current" in n2 ? (r2 = (e2 = n2.current) == null ? void 0 : e2.ownerDocument) != null ? r2 : document : null : document;
}
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function o$1() {
  let n2 = [], r2 = { addEventListener(e2, t2, s2, a2) {
    return e2.addEventListener(t2, s2, a2), r2.add(() => e2.removeEventListener(t2, s2, a2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$1(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, s2) {
    let a2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: a2 });
    });
  }, group(e2) {
    let t2 = o$1();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return n2.includes(e2) || n2.push(e2), () => {
      let t2 = n2.indexOf(e2);
      if (t2 >= 0)
        for (let s2 of n2.splice(t2, 1))
          s2();
    };
  }, dispose() {
    for (let e2 of n2.splice(0))
      e2();
  } };
  return r2;
}
function p() {
  let [e2] = d$1(o$1);
  return y$1(() => () => e2.dispose(), [e2]), e2;
}
let n = (e2, t2) => {
  s$1.isServer ? y$1(e2, t2) : _$2(e2, t2);
};
function s(e2) {
  let r2 = A$1(e2);
  return n(() => {
    r2.current = e2;
  }, [e2]), r2;
}
let o2 = function(t2) {
  let e2 = s(t2);
  return Rn.useCallback((...r2) => e2.current(...r2), [e2]);
};
function E(e2) {
  let t2 = e2.width / 2, n2 = e2.height / 2;
  return { top: e2.clientY - n2, right: e2.clientX + t2, bottom: e2.clientY + n2, left: e2.clientX - t2 };
}
function P$2(e2, t2) {
  return !(!e2 || !t2 || e2.right < t2.left || e2.left > t2.right || e2.bottom < t2.top || e2.top > t2.bottom);
}
function w({ disabled: e2 = false } = {}) {
  let t2 = A$1(null), [n2, l2] = d$1(false), r2 = p(), o$12 = o2(() => {
    t2.current = null, l2(false), r2.dispose();
  }), f2 = o2((s2) => {
    if (r2.dispose(), t2.current === null) {
      t2.current = s2.currentTarget, l2(true);
      {
        let i2 = o$2(s2.currentTarget);
        r2.addEventListener(i2, "pointerup", o$12, false), r2.addEventListener(i2, "pointermove", (c2) => {
          if (t2.current) {
            let p2 = E(c2);
            l2(P$2(p2, t2.current.getBoundingClientRect()));
          }
        }, false), r2.addEventListener(i2, "pointercancel", o$12, false);
      }
    }
  });
  return { pressed: n2, pressProps: e2 ? {} : { onPointerDown: f2, onPointerUp: o$12, onClick: o$12 } };
}
let e$1 = K$2(void 0);
function a$1() {
  return x$1(e$1);
}
function t(...r2) {
  return Array.from(new Set(r2.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
}
function u$2(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$2), t2;
}
var O = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(O || {}), A = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(A || {});
function L$1() {
  let n2 = U$2();
  return q$1((r2) => C$1({ mergeRefs: n2, ...r2 }), [n2]);
}
function C$1({ ourProps: n2, theirProps: r2, slot: e2, defaultTag: a2, features: s2, visible: t2 = true, name: l2, mergeRefs: i2 }) {
  i2 = i2 ?? $;
  let o3 = P$1(r2, n2);
  if (t2)
    return F(o3, e2, a2, l2, i2);
  let y2 = s2 ?? 0;
  if (y2 & 2) {
    let { static: f2 = false, ...u2 } = o3;
    if (f2)
      return F(u2, e2, a2, l2, i2);
  }
  if (y2 & 1) {
    let { unmount: f2 = true, ...u2 } = o3;
    return u$2(f2 ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return F({ ...u2, hidden: true, style: { display: "none" } }, e2, a2, l2, i2);
    } });
  }
  return F(o3, e2, a2, l2, i2);
}
function F(n2, r2 = {}, e2, a2, s2) {
  let { as: t$12 = e2, children: l2, refName: i2 = "ref", ...o3 } = h(n2, ["unmount", "static"]), y2 = n2.ref !== void 0 ? { [i2]: n2.ref } : {}, f2 = typeof l2 == "function" ? l2(r2) : l2;
  "className" in o3 && o3.className && typeof o3.className == "function" && (o3.className = o3.className(r2)), o3["aria-labelledby"] && o3["aria-labelledby"] === o3.id && (o3["aria-labelledby"] = void 0);
  let u2 = {};
  if (r2) {
    let d2 = false, p2 = [];
    for (let [c2, T2] of Object.entries(r2))
      typeof T2 == "boolean" && (d2 = true), T2 === true && p2.push(c2.replace(/([A-Z])/g, (g2) => `-${g2.toLowerCase()}`));
    if (d2) {
      u2["data-headlessui-state"] = p2.join(" ");
      for (let c2 of p2)
        u2[`data-${c2}`] = "";
    }
  }
  if (t$12 === k$2 && (Object.keys(m(o3)).length > 0 || Object.keys(m(u2)).length > 0))
    if (!mn(f2) || Array.isArray(f2) && f2.length > 1) {
      if (Object.keys(m(o3)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${a2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m(o3)).concat(Object.keys(m(u2))).map((d2) => `  - ${d2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => `  - ${d2}`).join(`
`)].join(`
`));
    } else {
      let d2 = f2.props, p2 = d2 == null ? void 0 : d2.className, c2 = typeof p2 == "function" ? (...R2) => t(p2(...R2), o3.className) : t(p2, o3.className), T2 = c2 ? { className: c2 } : {}, g2 = P$1(f2.props, m(h(o3, ["ref"])));
      for (let R2 in u2)
        R2 in g2 && delete u2[R2];
      return _n(f2, Object.assign({}, g2, u2, y2, { ref: s2(H$2(f2), y2.ref) }, T2));
    }
  return _$3(t$12, Object.assign({}, h(o3, ["ref"]), t$12 !== k$2 && y2, t$12 !== k$2 && u2), f2);
}
function U$2() {
  let n2 = A$1([]), r2 = q$1((e2) => {
    for (let a2 of n2.current)
      a2 != null && (typeof a2 == "function" ? a2(e2) : a2.current = e2);
  }, []);
  return (...e2) => {
    if (!e2.every((a2) => a2 == null))
      return n2.current = e2, r2;
  };
}
function $(...n2) {
  return n2.every((r2) => r2 == null) ? void 0 : (r2) => {
    for (let e2 of n2)
      e2 != null && (typeof e2 == "function" ? e2(r2) : e2.current = r2);
  };
}
function P$1(...n2) {
  if (n2.length === 0)
    return {};
  if (n2.length === 1)
    return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2)
    for (let t2 in s2)
      t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  if (r2.disabled || r2["aria-disabled"])
    for (let s2 in e2)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s2) && (e2[s2] = [(t2) => {
        var l2;
        return (l2 = t2 == null ? void 0 : t2.preventDefault) == null ? void 0 : l2.call(t2);
      }]);
  for (let s2 in e2)
    Object.assign(r2, { [s2](t2, ...l2) {
      let i2 = e2[s2];
      for (let o3 of i2) {
        if ((t2 instanceof Event || (t2 == null ? void 0 : t2.nativeEvent) instanceof Event) && t2.defaultPrevented)
          return;
        o3(t2, ...l2);
      }
    } });
  return r2;
}
function _$1(...n2) {
  if (n2.length === 0)
    return {};
  if (n2.length === 1)
    return n2[0];
  let r2 = {}, e2 = {};
  for (let s2 of n2)
    for (let t2 in s2)
      t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
  for (let s2 in e2)
    Object.assign(r2, { [s2](...t2) {
      let l2 = e2[s2];
      for (let i2 of l2)
        i2 == null || i2(...t2);
    } });
  return r2;
}
function K(n2) {
  var r2;
  return Object.assign(D(n2), { displayName: (r2 = n2.displayName) != null ? r2 : n2.name });
}
function m(n2) {
  let r2 = Object.assign({}, n2);
  for (let e2 in r2)
    r2[e2] === void 0 && delete r2[e2];
  return r2;
}
function h(n2, r2 = []) {
  let e2 = Object.assign({}, n2);
  for (let a2 of r2)
    a2 in e2 && delete e2[a2];
  return e2;
}
function H$2(n2) {
  return Rn.version.split(".")[0] >= "19" ? n2.props.ref : n2.ref;
}
let R = "button";
function v(a2, u2) {
  var p2;
  let l2 = a$1(), { disabled: e2 = l2 || false, autoFocus: t2 = false, ...o3 } = a2, { isFocusVisible: r2, focusProps: i2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t2 }), { isHovered: s2, hoverProps: T$1$1 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), { pressed: n2, pressProps: d2 } = w({ disabled: e2 }), f2 = _$1({ ref: u2, type: (p2 = o3.type) != null ? p2 : "button", disabled: e2 || void 0, autoFocus: t2 }, i2, T$1$1, d2), m2 = T$1(() => ({ disabled: e2, hover: s2, focus: r2, active: n2, autofocus: t2 }), [e2, s2, r2, n2, t2]);
  return L$1()({ ourProps: f2, theirProps: o3, slot: m2, defaultTag: R, name: "Button" });
}
let H$1 = K(v), e = K$2(void 0);
function u$1() {
  return x$1(e);
}
let u = Symbol();
function y(...t2) {
  let n2 = A$1(t2);
  y$1(() => {
    n2.current = t2;
  }, [t2]);
  let c2 = o2((e2) => {
    for (let o3 of n2.current)
      o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u])) ? void 0 : c2;
}
let a = K$2(null);
a.displayName = "DescriptionContext";
function f() {
  let r2 = x$1(a);
  if (r2 === null) {
    let e2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e2, f), e2;
  }
  return r2;
}
function U$1() {
  var r2, e2;
  return (e2 = (r2 = x$1(a)) == null ? void 0 : r2.value) != null ? e2 : void 0;
}
let S = "p";
function C(r2, e2) {
  let d2 = g$1(), t2 = a$1(), { id: i2 = `headlessui-description-${d2}`, ...l2 } = r2, n$12 = f(), s2 = y(e2);
  n(() => n$12.register(i2), [i2, n$12.register]);
  let o3 = t2 || false, p2 = T$1(() => ({ ...n$12.slot, disabled: o3 }), [n$12.slot, o3]), D2 = { ref: s2, ...n$12.props, id: i2 };
  return L$1()({ ourProps: D2, theirProps: l2, slot: p2, defaultTag: S, name: n$12.name || "Description" });
}
let _ = K(C);
Object.assign(_, {});
let c = K$2(null);
c.displayName = "LabelContext";
function P() {
  let r2 = x$1(c);
  if (r2 === null) {
    let l2 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l2, P), l2;
  }
  return r2;
}
function I(r2) {
  var a2, e2, o3;
  let l2 = (e2 = (a2 = x$1(c)) == null ? void 0 : a2.value) != null ? e2 : void 0;
  return ((o3 = void 0) != null ? o3 : 0) > 0 ? [l2, ...r2].filter(Boolean).join(" ") : l2;
}
let N = "label";
function G(r2, l2) {
  var y$12;
  let a2 = g$1(), e2 = P(), o$12 = u$1(), g$1$1 = a$1(), { id: t2 = `headlessui-label-${a2}`, htmlFor: s2 = o$12 ?? ((y$12 = e2.props) == null ? void 0 : y$12.htmlFor), passive: m2 = false, ...i2 } = r2, p2 = y(l2);
  n(() => e2.register(t2), [t2, e2.register]);
  let u2 = o2((L2) => {
    let b2 = L2.currentTarget;
    if (b2 instanceof HTMLLabelElement && L2.preventDefault(), e2.props && "onClick" in e2.props && typeof e2.props.onClick == "function" && e2.props.onClick(L2), b2 instanceof HTMLLabelElement) {
      let n2 = document.getElementById(b2.htmlFor);
      if (n2) {
        let E2 = n2.getAttribute("disabled");
        if (E2 === "true" || E2 === "")
          return;
        let x2 = n2.getAttribute("aria-disabled");
        if (x2 === "true" || x2 === "")
          return;
        (n2 instanceof HTMLInputElement && (n2.type === "radio" || n2.type === "checkbox") || n2.role === "radio" || n2.role === "checkbox" || n2.role === "switch") && n2.click(), n2.focus({ preventScroll: true });
      }
    }
  }), d2 = g$1$1 || false, C2 = T$1(() => ({ ...e2.slot, disabled: d2 }), [e2.slot, d2]), f2 = { ref: p2, ...e2.props, id: t2, htmlFor: s2, onClick: u2 };
  return m2 && ("onClick" in f2 && (delete f2.htmlFor, delete f2.onClick), "onClick" in i2 && delete i2.onClick), L$1()({ ourProps: f2, theirProps: i2, slot: C2, defaultTag: s2 ? N : "div", name: e2.name || "Label" });
}
let U = K(G);
Object.assign(U, {});
let L = "textarea";
function H(s2, l2) {
  let i2 = g$1(), d2 = u$1(), n2 = a$1(), { id: p2 = d2 || `headlessui-textarea-${i2}`, disabled: e2 = n2 || false, autoFocus: r2 = false, invalid: a2 = false, ...T$1$1 } = s2, f2 = I(), m2 = U$1(), { isFocused: o3, focusProps: u2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r2 }), { isHovered: t2, hoverProps: b2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), y2 = _$1({ ref: l2, id: p2, "aria-labelledby": f2, "aria-describedby": m2, "aria-invalid": a2 ? "true" : void 0, disabled: e2 || void 0, autoFocus: r2 }, u2, b2), x2 = T$1(() => ({ disabled: e2, invalid: a2, hover: t2, focus: o3, autofocus: r2 }), [e2, a2, t2, o3, r2]);
  return L$1()({ ourProps: y2, theirProps: T$1$1, slot: x2, defaultTag: L, name: "Textarea" });
}
let J = K(H);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
), toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}, mergeClasses = (...classes) => classes.filter((className, index, array) => !!className && className.trim() !== "" && array.indexOf(className) === index).join(" ").trim(), hasA11yProp = (props) => {
  for (const prop in props)
    if (prop.startsWith("aria-") || prop === "role" || prop === "title")
      return true;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = D(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => _$3(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => _$3(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = D(
    ({ className, ...props }, ref) => _$3(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  return Component.displayName = toPascalCase(iconName), Component;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$9 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ChevronDown = createLucideIcon("chevron-down", __iconNode$9);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ChevronUp = createLucideIcon("chevron-up", __iconNode$8);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], MessageCircle = createLucideIcon("message-circle", __iconNode$7);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Plus = createLucideIcon("plus", __iconNode$6);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
      key: "w46dr5"
    }
  ]
], Puzzle = createLucideIcon("puzzle", __iconNode$5);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], RefreshCw = createLucideIcon("refresh-cw", __iconNode$4);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], Send = createLucideIcon("send", __iconNode$3);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Settings = createLucideIcon("settings", __iconNode$2);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Trash2 = createLucideIcon("trash-2", __iconNode$1);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], WifiOff = createLucideIcon("wifi-off", __iconNode), BROWSER_ALIASES_MAP = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
}, BROWSER_MAP = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
}, PLATFORMS_MAP = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv"
}, OS_MAP = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
}, ENGINE_MAP = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
class Utils {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(regexp, ua) {
    const match = ua.match(regexp);
    return match && match.length > 0 && match[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(regexp, ua) {
    const match = ua.match(regexp);
    return match && match.length > 1 && match[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(regexp, ua, _const) {
    if (regexp.test(ua))
      return _const;
  }
  static getWindowsVersionName(version) {
    switch (version) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(version) {
    const v2 = version.split(".").splice(0, 2).map((s2) => parseInt(s2, 10) || 0);
    if (v2.push(0), v2[0] === 10)
      switch (v2[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(version) {
    const v2 = version.split(".").splice(0, 2).map((s2) => parseInt(s2, 10) || 0);
    if (v2.push(0), !(v2[0] === 1 && v2[1] < 5)) {
      if (v2[0] === 1 && v2[1] < 6)
        return "Cupcake";
      if (v2[0] === 1 && v2[1] >= 6)
        return "Donut";
      if (v2[0] === 2 && v2[1] < 2)
        return "Eclair";
      if (v2[0] === 2 && v2[1] === 2)
        return "Froyo";
      if (v2[0] === 2 && v2[1] > 2)
        return "Gingerbread";
      if (v2[0] === 3)
        return "Honeycomb";
      if (v2[0] === 4 && v2[1] < 1)
        return "Ice Cream Sandwich";
      if (v2[0] === 4 && v2[1] < 4)
        return "Jelly Bean";
      if (v2[0] === 4 && v2[1] >= 4)
        return "KitKat";
      if (v2[0] === 5)
        return "Lollipop";
      if (v2[0] === 6)
        return "Marshmallow";
      if (v2[0] === 7)
        return "Nougat";
      if (v2[0] === 8)
        return "Oreo";
      if (v2[0] === 9)
        return "Pie";
    }
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(version) {
    return version.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(versionA, versionB, isLoose = false) {
    const versionAPrecision = Utils.getVersionPrecision(versionA), versionBPrecision = Utils.getVersionPrecision(versionB);
    let precision = Math.max(versionAPrecision, versionBPrecision), lastPrecision = 0;
    const chunks = Utils.map([versionA, versionB], (version) => {
      const delta = precision - Utils.getVersionPrecision(version), _version = version + new Array(delta + 1).join(".0");
      return Utils.map(_version.split("."), (chunk) => new Array(20 - chunk.length).join("0") + chunk).reverse();
    });
    for (isLoose && (lastPrecision = precision - Math.min(versionAPrecision, versionBPrecision)), precision -= 1; precision >= lastPrecision; ) {
      if (chunks[0][precision] > chunks[1][precision])
        return 1;
      if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === lastPrecision)
          return 0;
        precision -= 1;
      } else if (chunks[0][precision] < chunks[1][precision])
        return -1;
    }
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(arr, iterator) {
    const result = [];
    let i2;
    if (Array.prototype.map)
      return Array.prototype.map.call(arr, iterator);
    for (i2 = 0; i2 < arr.length; i2 += 1)
      result.push(iterator(arr[i2]));
    return result;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(arr, predicate) {
    let i2, l2;
    if (Array.prototype.find)
      return Array.prototype.find.call(arr, predicate);
    for (i2 = 0, l2 = arr.length; i2 < l2; i2 += 1) {
      const value = arr[i2];
      if (predicate(value, i2))
        return value;
    }
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(obj, ...assigners) {
    const result = obj;
    let i2, l2;
    if (Object.assign)
      return Object.assign(obj, ...assigners);
    for (i2 = 0, l2 = assigners.length; i2 < l2; i2 += 1) {
      const assigner = assigners[i2];
      typeof assigner == "object" && assigner !== null && Object.keys(assigner).forEach((key) => {
        result[key] = assigner[key];
      });
    }
    return obj;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(browserName) {
    return BROWSER_ALIASES_MAP[browserName];
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(browserAlias) {
    return BROWSER_MAP[browserAlias] || "";
  }
}
const commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i, browsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(ua) {
      const browser = {
        name: "Googlebot"
      }, version = Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(ua) {
      const browser = {
        name: "Opera"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(ua) {
      const browser = {
        name: "Opera"
      }, version = Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(ua) {
      const browser = {
        name: "Samsung Internet for Android"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/Whale/i],
    describe(ua) {
      const browser = {
        name: "NAVER Whale Browser"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(ua) {
      const browser = {
        name: "MZ Browser"
      }, version = Utils.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/focus/i],
    describe(ua) {
      const browser = {
        name: "Focus"
      }, version = Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/swing/i],
    describe(ua) {
      const browser = {
        name: "Swing"
      }, version = Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/coast/i],
    describe(ua) {
      const browser = {
        name: "Opera Coast"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(ua) {
      const browser = {
        name: "Opera Touch"
      }, version = Utils.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/yabrowser/i],
    describe(ua) {
      const browser = {
        name: "Yandex Browser"
      }, version = Utils.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(ua) {
      const browser = {
        name: "UC Browser"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(ua) {
      const browser = {
        name: "Maxthon"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/epiphany/i],
    describe(ua) {
      const browser = {
        name: "Epiphany"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/puffin/i],
    describe(ua) {
      const browser = {
        name: "Puffin"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/sleipnir/i],
    describe(ua) {
      const browser = {
        name: "Sleipnir"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/k-meleon/i],
    describe(ua) {
      const browser = {
        name: "K-Meleon"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/micromessenger/i],
    describe(ua) {
      const browser = {
        name: "WeChat"
      }, version = Utils.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(ua) {
      const browser = {
        name: /qqbrowserlite/i.test(ua) ? "QQ Browser Lite" : "QQ Browser"
      }, version = Utils.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/msie|trident/i],
    describe(ua) {
      const browser = {
        name: "Internet Explorer"
      }, version = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/\sedg\//i],
    describe(ua) {
      const browser = {
        name: "Microsoft Edge"
      }, version = Utils.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(ua) {
      const browser = {
        name: "Microsoft Edge"
      }, version = Utils.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/vivaldi/i],
    describe(ua) {
      const browser = {
        name: "Vivaldi"
      }, version = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/seamonkey/i],
    describe(ua) {
      const browser = {
        name: "SeaMonkey"
      }, version = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/sailfish/i],
    describe(ua) {
      const browser = {
        name: "Sailfish"
      }, version = Utils.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/silk/i],
    describe(ua) {
      const browser = {
        name: "Amazon Silk"
      }, version = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/phantom/i],
    describe(ua) {
      const browser = {
        name: "PhantomJS"
      }, version = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/slimerjs/i],
    describe(ua) {
      const browser = {
        name: "SlimerJS"
      }, version = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua) {
      const browser = {
        name: "BlackBerry"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const browser = {
        name: "WebOS Browser"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua) || Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/bada/i],
    describe(ua) {
      const browser = {
        name: "Bada"
      }, version = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/tizen/i],
    describe(ua) {
      const browser = {
        name: "Tizen"
      }, version = Utils.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/qupzilla/i],
    describe(ua) {
      const browser = {
        name: "QupZilla"
      }, version = Utils.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(ua) {
      const browser = {
        name: "Firefox"
      }, version = Utils.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/electron/i],
    describe(ua) {
      const browser = {
        name: "Electron"
      }, version = Utils.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(ua) {
      const browser = {
        name: "Miui"
      }, version = Utils.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/chromium/i],
    describe(ua) {
      const browser = {
        name: "Chromium"
      }, version = Utils.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) || Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(ua) {
      const browser = {
        name: "Chrome"
      }, version = Utils.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  {
    test: [/GSA/i],
    describe(ua) {
      const browser = {
        name: "Google Search"
      }, version = Utils.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Android Browser */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i), butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const browser = {
        name: "Android Browser"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(ua) {
      const browser = {
        name: "PlayStation 4"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(ua) {
      const browser = {
        name: "Safari"
      }, version = Utils.getFirstMatch(commonVersionIdentifier, ua);
      return version && (browser.version = version), browser;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(ua) {
      const regexpWithoutDeviceSpec = /^(.*)\/(.*) /, regexpWithDeviceSpec = /^(.*)\/(.*)[ \t]\((.*)/, regexp = ua.search("\\(") !== -1 ? regexpWithDeviceSpec : regexpWithoutDeviceSpec;
      return {
        name: Utils.getFirstMatch(regexp, ua),
        version: Utils.getSecondMatch(regexp, ua)
      };
    }
  }
], osParsersList = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(ua) {
      const version = Utils.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, ua);
      return {
        name: OS_MAP.Roku,
        version
      };
    }
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.WindowsPhone,
        version
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(ua) {
      const version = Utils.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, ua), versionName = Utils.getWindowsVersionName(version);
      return {
        name: OS_MAP.Windows,
        version,
        versionName
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(ua) {
      const result = {
        name: OS_MAP.iOS
      }, version = Utils.getSecondMatch(/(Version\/)(\d[\d.]+)/, ua);
      return version && (result.version = version), result;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, "."), versionName = Utils.getMacOSVersionName(version), os = {
        name: OS_MAP.MacOS,
        version
      };
      return versionName && (os.versionName = versionName), os;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, ".");
      return {
        name: OS_MAP.iOS,
        version
      };
    }
  },
  /* Android */
  {
    test(parser) {
      const notLikeAndroid = !parser.test(/like android/i), butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua) {
      const version = Utils.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, ua), versionName = Utils.getAndroidVersionName(version), os = {
        name: OS_MAP.Android,
        version
      };
      return versionName && (os.versionName = versionName), os;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, ua), os = {
        name: OS_MAP.WebOS
      };
      return version && version.length && (os.version = version), os;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, ua) || Utils.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, ua) || Utils.getFirstMatch(/\bbb(\d+)/i, ua);
      return {
        name: OS_MAP.BlackBerry,
        version
      };
    }
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.Bada,
        version
      };
    }
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(ua) {
      const version = Utils.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.Tizen,
        version
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: OS_MAP.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: OS_MAP.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(ua) {
      const version = Utils.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, ua);
      return {
        name: OS_MAP.PlayStation4,
        version
      };
    }
  }
], platformParsersList = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: "bot",
        vendor: "Google"
      };
    }
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(ua) {
      const model = Utils.getFirstMatch(/(can-l01)/i, ua) && "Nova", platform = {
        type: PLATFORMS_MAP.mobile,
        vendor: "Huawei"
      };
      return model && (platform.model = model), platform;
    }
  },
  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Nexus"
      };
    }
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
      };
    }
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet,
        vendor: "Amazon"
      };
    }
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: PLATFORMS_MAP.tablet
      };
    }
  },
  /* iPod/iPhone */
  {
    test(parser) {
      const iDevice = parser.test(/ipod|iphone/i), likeIDevice = parser.test(/like (ipod|iphone)/i);
      return iDevice && !likeIDevice;
    },
    describe(ua) {
      const model = Utils.getFirstMatch(/(ipod|iphone)/i, ua);
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Apple",
        model
      };
    }
  },
  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Nexus"
      };
    }
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: PLATFORMS_MAP.mobile
      };
    }
  },
  /* BlackBerry */
  {
    test(parser) {
      return parser.getBrowserName(true) === "blackberry";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "BlackBerry"
      };
    }
  },
  /* Bada */
  {
    test(parser) {
      return parser.getBrowserName(true) === "bada";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile
      };
    }
  },
  /* Windows Phone */
  {
    test(parser) {
      return parser.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile,
        vendor: "Microsoft"
      };
    }
  },
  /* Android Tablet */
  {
    test(parser) {
      const osMajorVersion = Number(String(parser.getOSVersion()).split(".")[0]);
      return parser.getOSName(true) === "android" && osMajorVersion >= 3;
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tablet
      };
    }
  },
  /* Android Mobile */
  {
    test(parser) {
      return parser.getOSName(true) === "android";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.mobile
      };
    }
  },
  /* desktop */
  {
    test(parser) {
      return parser.getOSName(true) === "macos";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop,
        vendor: "Apple"
      };
    }
  },
  /* Windows */
  {
    test(parser) {
      return parser.getOSName(true) === "windows";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop
      };
    }
  },
  /* Linux */
  {
    test(parser) {
      return parser.getOSName(true) === "linux";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.desktop
      };
    }
  },
  /* PlayStation 4 */
  {
    test(parser) {
      return parser.getOSName(true) === "playstation 4";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv
      };
    }
  },
  /* Roku */
  {
    test(parser) {
      return parser.getOSName(true) === "roku";
    },
    describe() {
      return {
        type: PLATFORMS_MAP.tv
      };
    }
  }
], enginesParsersList = [
  /* EdgeHTML */
  {
    test(parser) {
      return parser.getBrowserName(true) === "microsoft edge";
    },
    describe(ua) {
      if (/\sedg\//i.test(ua))
        return {
          name: ENGINE_MAP.Blink
        };
      const version = Utils.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, ua);
      return {
        name: ENGINE_MAP.EdgeHTML,
        version
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Trident
      }, version = Utils.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (engine.version = version), engine;
    }
  },
  /* Presto */
  {
    test(parser) {
      return parser.test(/presto/i);
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Presto
      }, version = Utils.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (engine.version = version), engine;
    }
  },
  /* Gecko */
  {
    test(parser) {
      const isGecko = parser.test(/gecko/i), likeGecko = parser.test(/like gecko/i);
      return isGecko && !likeGecko;
    },
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.Gecko
      }, version = Utils.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (engine.version = version), engine;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: ENGINE_MAP.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(ua) {
      const engine = {
        name: ENGINE_MAP.WebKit
      }, version = Utils.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, ua);
      return version && (engine.version = version), engine;
    }
  }
];
class Parser {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(UA, skipParsing = false) {
    if (UA == null || UA === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = UA, this.parsedResult = {}, skipParsing !== true && this.parse();
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(regex) {
    return regex.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const browserDescriptor = Utils.find(browsersList, (_browser) => {
      if (typeof _browser.test == "function")
        return _browser.test(this);
      if (_browser.test instanceof Array)
        return _browser.test.some((condition) => this.test(condition));
      throw new Error("Browser's test function is not valid");
    });
    return browserDescriptor && (this.parsedResult.browser = browserDescriptor.describe(this.getUA())), this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(toLowerCase) {
    return toLowerCase ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const os = Utils.find(osParsersList, (_os) => {
      if (typeof _os.test == "function")
        return _os.test(this);
      if (_os.test instanceof Array)
        return _os.test.some((condition) => this.test(condition));
      throw new Error("Browser's test function is not valid");
    });
    return os && (this.parsedResult.os = os.describe(this.getUA())), this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(toLowerCase) {
    const { name } = this.getOS();
    return toLowerCase ? String(name).toLowerCase() || "" : name || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(toLowerCase = false) {
    const { type } = this.getPlatform();
    return toLowerCase ? String(type).toLowerCase() || "" : type || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const platform = Utils.find(platformParsersList, (_platform) => {
      if (typeof _platform.test == "function")
        return _platform.test(this);
      if (_platform.test instanceof Array)
        return _platform.test.some((condition) => this.test(condition));
      throw new Error("Browser's test function is not valid");
    });
    return platform && (this.parsedResult.platform = platform.describe(this.getUA())), this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(toLowerCase) {
    return toLowerCase ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const engine = Utils.find(enginesParsersList, (_engine) => {
      if (typeof _engine.test == "function")
        return _engine.test(this);
      if (_engine.test instanceof Array)
        return _engine.test.some((condition) => this.test(condition));
      throw new Error("Browser's test function is not valid");
    });
    return engine && (this.parsedResult.engine = engine.describe(this.getUA())), this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return Utils.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(checkTree) {
    const platformsAndOSes = {};
    let platformsAndOSCounter = 0;
    const browsers = {};
    let browsersCounter = 0;
    if (Object.keys(checkTree).forEach((key) => {
      const currentDefinition = checkTree[key];
      typeof currentDefinition == "string" ? (browsers[key] = currentDefinition, browsersCounter += 1) : typeof currentDefinition == "object" && (platformsAndOSes[key] = currentDefinition, platformsAndOSCounter += 1);
    }), platformsAndOSCounter > 0) {
      const platformsAndOSNames = Object.keys(platformsAndOSes), OSMatchingDefinition = Utils.find(platformsAndOSNames, (name) => this.isOS(name));
      if (OSMatchingDefinition) {
        const osResult = this.satisfies(platformsAndOSes[OSMatchingDefinition]);
        if (osResult !== void 0)
          return osResult;
      }
      const platformMatchingDefinition = Utils.find(
        platformsAndOSNames,
        (name) => this.isPlatform(name)
      );
      if (platformMatchingDefinition) {
        const platformResult = this.satisfies(platformsAndOSes[platformMatchingDefinition]);
        if (platformResult !== void 0)
          return platformResult;
      }
    }
    if (browsersCounter > 0) {
      const browserNames = Object.keys(browsers), matchingDefinition = Utils.find(browserNames, (name) => this.isBrowser(name, true));
      if (matchingDefinition !== void 0)
        return this.compareVersion(browsers[matchingDefinition]);
    }
  }
  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(browserName, includingAlias = false) {
    const defaultBrowserName = this.getBrowserName().toLowerCase();
    let browserNameLower = browserName.toLowerCase();
    const alias = Utils.getBrowserTypeByAlias(browserNameLower);
    return includingAlias && alias && (browserNameLower = alias.toLowerCase()), browserNameLower === defaultBrowserName;
  }
  compareVersion(version) {
    let expectedResults = [0], comparableVersion = version, isLoose = false;
    const currentBrowserVersion = this.getBrowserVersion();
    if (typeof currentBrowserVersion == "string")
      return version[0] === ">" || version[0] === "<" ? (comparableVersion = version.substr(1), version[1] === "=" ? (isLoose = true, comparableVersion = version.substr(2)) : expectedResults = [], version[0] === ">" ? expectedResults.push(1) : expectedResults.push(-1)) : version[0] === "=" ? comparableVersion = version.substr(1) : version[0] === "~" && (isLoose = true, comparableVersion = version.substr(1)), expectedResults.indexOf(
        Utils.compareVersions(currentBrowserVersion, comparableVersion, isLoose)
      ) > -1;
  }
  isOS(osName) {
    return this.getOSName(true) === String(osName).toLowerCase();
  }
  isPlatform(platformType) {
    return this.getPlatformType(true) === String(platformType).toLowerCase();
  }
  isEngine(engineName) {
    return this.getEngineName(true) === String(engineName).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(anything, includingAlias = false) {
    return this.isBrowser(anything, includingAlias) || this.isOS(anything) || this.isPlatform(anything);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(anythings = []) {
    return anythings.some((anything) => this.is(anything));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class Bowser {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(UA, skipParsing = false) {
    if (typeof UA != "string")
      throw new Error("UserAgent should be a string");
    return new Parser(UA, skipParsing);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(UA) {
    return new Parser(UA).getResult();
  }
  static get BROWSER_MAP() {
    return BROWSER_MAP;
  }
  static get ENGINE_MAP() {
    return ENGINE_MAP;
  }
  static get OS_MAP() {
    return OS_MAP;
  }
  static get PLATFORMS_MAP() {
    return PLATFORMS_MAP;
  }
}
const useBrowserInfo = () => T$1(() => {
  {
    const result = Bowser.parse(window.navigator.userAgent);
    return {
      browser: result.browser,
      engine: result.engine,
      os: result.os
    };
  }
}, []);
function useHotkeyListenerComboText(action) {
  return useBrowserInfo().os.name.toLowerCase().includes("mac") ? hotkeyActionDefinitions[action].keyComboMac : hotkeyActionDefinitions[action].keyComboDefault;
}
function ToolbarChatArea() {
  const chatState = useChatState(), [isComposing, setIsComposing] = d$1(false), currentChat = T$1(
    () => chatState.chats.find((c2) => c2.id === chatState.currentChatId),
    [chatState.chats, chatState.currentChatId]
  ), currentInput = T$1(
    () => (currentChat == null ? void 0 : currentChat.inputValue) || "",
    [currentChat == null ? void 0 : currentChat.inputValue]
  ), handleInputChange = q$1(
    (value) => {
      chatState.setChatInput(chatState.currentChatId, value);
    },
    [chatState.setChatInput, chatState.currentChatId]
  ), handleSubmit = q$1(() => {
    !currentChat || !currentInput.trim() || chatState.addMessage(currentChat.id, currentInput);
  }, [currentChat, currentInput, chatState.addMessage]), handleKeyDown = q$1(
    (e2) => {
      e2.key === "Enter" && !e2.shiftKey && !isComposing && (e2.preventDefault(), handleSubmit());
    },
    [handleSubmit, isComposing]
  ), handleCompositionStart = q$1(() => {
    setIsComposing(true);
  }, []), handleCompositionEnd = q$1(() => {
    setIsComposing(false);
  }, []), inputRef = A$1(null);
  y$1(() => {
    var _a, _b, _c;
    const blurHandler = () => {
      var _a2;
      return (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    };
    return chatState.isPromptCreationActive ? ((_a = inputRef.current) == null || _a.focus(), (_b = inputRef.current) == null || _b.addEventListener("blur", blurHandler)) : (_c = inputRef.current) == null || _c.blur(), () => {
      var _a2;
      (_a2 = inputRef.current) == null || _a2.removeEventListener("blur", blurHandler);
    };
  }, [chatState.isPromptCreationActive]);
  const buttonClassName = T$1(
    () => cn(
      "flex size-8 items-center justify-center rounded-full bg-transparent p-1 text-zinc-950 opacity-20 transition-all duration-150",
      currentInput.length > 0 && "bg-blue-600 text-white opacity-100",
      chatState.promptState === "loading" && "cursor-not-allowed bg-zinc-300 text-zinc-500 opacity-30"
    ),
    [currentInput.length, chatState.promptState]
  ), textareaClassName = T$1(
    () => cn(
      "h-full w-full flex-1 resize-none bg-transparent text-zinc-950 transition-all duration-150 placeholder:text-zinc-950/50 focus:outline-none",
      chatState.promptState === "loading" && "text-zinc-500 placeholder:text-zinc-400"
    ),
    [chatState.promptState]
  ), containerClassName = T$1(() => {
    const baseClasses = "flex h-24 w-full flex-1 flex-row items-end gap-1 rounded-2xl p-4 text-sm text-zinc-950 shadow-md backdrop-blur transition-all duration-150 placeholder:text-zinc-950/70";
    switch (chatState.promptState) {
      case "loading":
        return cn(
          baseClasses,
          "border-2 border-transparent bg-zinc-50/80",
          "chat-loading-gradient"
        );
      case "success":
        return cn(
          baseClasses,
          "border-2 border-transparent bg-zinc-50/80",
          "chat-success-border"
        );
      case "error":
        return cn(
          baseClasses,
          "border-2 border-transparent bg-zinc-50/80",
          "chat-error-border animate-shake"
        );
      default:
        return cn(baseClasses, "border border-border/30 bg-zinc-50/80");
    }
  }, [chatState.promptState]), ctrlAltCText = useHotkeyListenerComboText(HotkeyActions.CTRL_ALT_C);
  return /* @__PURE__ */ u$4(
    "div",
    {
      className: containerClassName,
      onClick: () => chatState.startPromptCreation(),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ u$4(
          J,
          {
            ref: inputRef,
            className: textareaClassName,
            value: currentInput,
            onChange: (e2) => handleInputChange(e2.currentTarget.value),
            onKeyDown: handleKeyDown,
            onCompositionStart: handleCompositionStart,
            onCompositionEnd: handleCompositionEnd,
            placeholder: chatState.isPromptCreationActive ? chatState.promptState === "loading" ? "Processing..." : "Enter prompt..." : `What do you want to change? (${ctrlAltCText})`,
            disabled: chatState.promptState === "loading"
          }
        ),
        /* @__PURE__ */ u$4(
          H$1,
          {
            className: buttonClassName,
            disabled: currentInput.length === 0 || chatState.promptState === "loading",
            onClick: handleSubmit,
            children: /* @__PURE__ */ u$4(Send, { className: "size-4" })
          }
        )
      ]
    }
  );
}
const DraggableContext = K$2(
  null
), DraggableProvider = ({
  containerRef,
  children,
  snapAreas,
  onDragStart,
  onDragEnd
}) => {
  const [borderLocation, setBorderLocation] = d$1({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  y$1(() => {
    if (!containerRef.current)
      return;
    const updateBorderLocation = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBorderLocation({
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom
        });
      }
    };
    updateBorderLocation();
    const resizeObserver = new ResizeObserver(updateBorderLocation);
    return resizeObserver.observe(containerRef.current), window.addEventListener("resize", updateBorderLocation), () => {
      containerRef.current && resizeObserver.unobserve(containerRef.current), resizeObserver.disconnect(), window.removeEventListener("resize", updateBorderLocation);
    };
  }, [containerRef]);
  const dragStartListeners = A$1(/* @__PURE__ */ new Set()), dragEndListeners = A$1(/* @__PURE__ */ new Set()), registerDragStart = q$1((cb) => (dragStartListeners.current.add(cb), () => dragStartListeners.current.delete(cb)), []), registerDragEnd = q$1((cb) => (dragEndListeners.current.add(cb), () => dragEndListeners.current.delete(cb)), []), emitDragStart = q$1(() => {
    onDragStart && onDragStart(), dragStartListeners.current.forEach((cb) => cb());
  }, [onDragStart]), emitDragEnd = q$1(() => {
    onDragEnd && onDragEnd(), dragEndListeners.current.forEach((cb) => cb());
  }, [onDragEnd]), contextValue = {
    borderLocation,
    snapAreas,
    registerDragStart,
    registerDragEnd,
    emitDragStart,
    emitDragEnd
  };
  return /* @__PURE__ */ u$4(DraggableContext.Provider, { value: contextValue, children });
};
function useDraggable(config) {
  const providerData = x$1(DraggableContext), latestProviderDataRef = A$1(providerData);
  y$1(() => {
    latestProviderDataRef.current = providerData;
  }, [providerData]);
  const movingElementRef = A$1(null), dragInitiatorRef = A$1(null), [movingElementNode, setMovingElementNode] = d$1(null), [dragInitiatorNode, setDragInitiatorNode] = d$1(null), mouseToDraggableCenterOffsetRef = A$1(null), mouseDownPosRef = A$1(null), currentMousePosRef = A$1(null), isDraggingRef = A$1(false), persistedRelativeCenterRef = A$1(config.initialRelativeCenter), [currentSnapArea, setCurrentSnapArea] = d$1(null), {
    startThreshold = 3,
    areaSnapThreshold = 60,
    // px, default threshold for snapping
    onDragStart,
    onDragEnd,
    initialSnapArea,
    springStiffness = 0.2,
    // Default spring stiffness
    springDampness = 0.55
    // Default spring dampness
    // initialRelativeCenter is used to initialize persistedRelativeCenterRef
  } = config, animatedPositionRef = A$1(null), velocityRef = A$1({ x: 0, y: 0 }), hasAnimatedOnceRef = A$1(false);
  y$1(() => {
    if (initialSnapArea && providerData && providerData.borderLocation && providerData.snapAreas && providerData.snapAreas[initialSnapArea] && !isDraggingRef.current) {
      const { top, left, right, bottom } = providerData.borderLocation, width = right - left, height = bottom - top, center = {
        topLeft: { x: left, y: top },
        topRight: { x: right, y: top },
        bottomLeft: { x: left, y: bottom },
        bottomRight: { x: right, y: bottom }
      }[initialSnapArea];
      if (center && width > 0 && height > 0) {
        const relX = (center.x - left) / width, relY = (center.y - top) / height;
        persistedRelativeCenterRef.current = { x: relX, y: relY };
      } else
        center && console.warn(
          "useDraggable: Container for initialSnapArea has zero width or height. Cannot calculate relative center from snap area. Falling back to initialRelativeCenter or undefined."
        );
    }
  }, [initialSnapArea, providerData]);
  function getSnapAreaCenters(borderLocation) {
    const { top, left, right, bottom } = borderLocation, centerX = (left + right) / 2;
    return {
      topLeft: { x: left, y: top },
      topCenter: { x: centerX, y: top },
      topRight: { x: right, y: top },
      bottomLeft: { x: left, y: bottom },
      bottomCenter: { x: centerX, y: bottom },
      bottomRight: { x: right, y: bottom }
    };
  }
  const updateDraggablePosition = q$1(() => {
    var _a, _b;
    const draggableEl = movingElementRef.current;
    if (!draggableEl)
      return;
    const draggableWidth = draggableEl.offsetWidth, draggableHeight = draggableEl.offsetHeight, offsetParent = draggableEl.offsetParent;
    let parentViewportLeft = 0, parentViewportTop = 0, parentWidth = window.innerWidth, parentHeight = window.innerHeight;
    if (offsetParent) {
      const opRect = offsetParent.getBoundingClientRect();
      parentViewportLeft = opRect.left, parentViewportTop = opRect.top, parentWidth = offsetParent.offsetWidth || window.innerWidth, parentHeight = offsetParent.offsetHeight || window.innerHeight;
    }
    let targetViewportCenterX = null, targetViewportCenterY = null;
    const currentDesiredRelativeCenter = persistedRelativeCenterRef.current;
    let snapArea = null, snapTarget = null;
    const provider = latestProviderDataRef.current;
    let isTopHalf = true, isLeftHalf = true;
    if (isDraggingRef.current && mouseToDraggableCenterOffsetRef.current && currentMousePosRef.current && provider && provider.borderLocation && provider.snapAreas) {
      const dragCenter = {
        x: currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x,
        y: currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y
      }, areaCenters = getSnapAreaCenters(provider.borderLocation);
      let minDist = Number.POSITIVE_INFINITY, closestArea = null, closestCenter = null;
      for (const area in provider.snapAreas)
        if (provider.snapAreas[area]) {
          const center = areaCenters[area];
          if (!center)
            continue;
          const dist = Math.hypot(
            center.x - dragCenter.x,
            center.y - dragCenter.y
          );
          dist < minDist && (minDist = dist, closestArea = area, closestCenter = center);
        }
      closestArea && closestCenter && minDist <= areaSnapThreshold && (snapArea = closestArea, snapTarget = closestCenter), isLeftHalf = (dragCenter.x - parentViewportLeft) / parentWidth <= 0.5, isTopHalf = (dragCenter.y - parentViewportTop) / parentHeight <= 0.5;
    }
    if (isDraggingRef.current && snapTarget)
      targetViewportCenterX = snapTarget.x, targetViewportCenterY = snapTarget.y, setCurrentSnapArea(snapArea), isLeftHalf = (snapTarget.x - parentViewportLeft) / parentWidth <= 0.5, isTopHalf = (snapTarget.y - parentViewportTop) / parentHeight <= 0.5;
    else if (isDraggingRef.current && mouseToDraggableCenterOffsetRef.current && currentMousePosRef.current)
      targetViewportCenterX = currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x, targetViewportCenterY = currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y, setCurrentSnapArea(null), isLeftHalf = (targetViewportCenterX - parentViewportLeft) / parentWidth <= 0.5, isTopHalf = (targetViewportCenterY - parentViewportTop) / parentHeight <= 0.5;
    else {
      if (currentDesiredRelativeCenter && parentWidth > 0 && parentHeight > 0) {
        if (isTopHalf = currentDesiredRelativeCenter.y <= 0.5, isLeftHalf = currentDesiredRelativeCenter.x <= 0.5, isLeftHalf) {
          const targetCenterXInParent = parentWidth * currentDesiredRelativeCenter.x;
          targetViewportCenterX = parentViewportLeft + targetCenterXInParent;
        } else {
          const targetCenterXInParent = parentWidth * (1 - currentDesiredRelativeCenter.x);
          targetViewportCenterX = parentViewportLeft + parentWidth - targetCenterXInParent;
        }
        if (isTopHalf) {
          const targetCenterYInParent = parentHeight * currentDesiredRelativeCenter.y;
          targetViewportCenterY = parentViewportTop + targetCenterYInParent;
        } else {
          const targetCenterYInParent = parentHeight * (1 - currentDesiredRelativeCenter.y);
          targetViewportCenterY = parentViewportTop + parentHeight - targetCenterYInParent;
        }
      } else {
        !((_a = movingElementRef.current) != null && _a.style.left) && !((_b = movingElementRef.current) != null && _b.style.top) && console.warn(
          "useDraggable: Cannot determine position. Parent has no dimensions or initialRelativeCenter was not effectively set."
        );
        return;
      }
      setCurrentSnapArea(null);
    }
    if (targetViewportCenterX === null || targetViewportCenterY === null)
      return;
    const { borderLocation } = latestProviderDataRef.current || {
      borderLocation: void 0
    };
    if (borderLocation && draggableWidth > 0 && draggableHeight > 0) {
      const providerRectWidth = borderLocation.right - borderLocation.left, providerRectHeight = borderLocation.bottom - borderLocation.top;
      let clampedCenterX = targetViewportCenterX, clampedCenterY = targetViewportCenterY;
      if (draggableWidth >= providerRectWidth)
        clampedCenterX = borderLocation.left + providerRectWidth / 2;
      else {
        const minX = borderLocation.left + draggableWidth / 2, maxX = borderLocation.right - draggableWidth / 2;
        clampedCenterX = Math.max(minX, Math.min(clampedCenterX, maxX));
      }
      if (draggableHeight >= providerRectHeight)
        clampedCenterY = borderLocation.top + providerRectHeight / 2;
      else {
        const minY = borderLocation.top + draggableHeight / 2, maxY = borderLocation.bottom - draggableHeight / 2;
        clampedCenterY = Math.max(minY, Math.min(clampedCenterY, maxY));
      }
      targetViewportCenterX = clampedCenterX, targetViewportCenterY = clampedCenterY;
    }
    if (!animatedPositionRef.current) {
      animatedPositionRef.current = {
        x: targetViewportCenterX,
        y: targetViewportCenterY
      }, velocityRef.current = { x: 0, y: 0 };
      const targetElementStyleX2 = targetViewportCenterX - draggableWidth / 2, targetElementStyleY2 = targetViewportCenterY - draggableHeight / 2, elStyle2 = draggableEl.style;
      if (elStyle2.right = "", elStyle2.bottom = "", elStyle2.left = "", elStyle2.top = "", isLeftHalf) {
        const styleLeftPx = targetElementStyleX2 - parentViewportLeft;
        elStyle2.left = parentWidth > 0 ? `${(styleLeftPx / parentWidth * 100).toFixed(2)}%` : "0px", elStyle2.right = "";
      } else {
        const styleRightPx = parentViewportLeft + parentWidth - (targetElementStyleX2 + draggableWidth);
        elStyle2.right = parentWidth > 0 ? `${(styleRightPx / parentWidth * 100).toFixed(2)}%` : "0px", elStyle2.left = "";
      }
      if (isTopHalf) {
        const styleTopPx = targetElementStyleY2 - parentViewportTop;
        elStyle2.top = parentHeight > 0 ? `${(styleTopPx / parentHeight * 100).toFixed(2)}%` : "0px", elStyle2.bottom = "";
      } else {
        const styleBottomPx = parentViewportTop + parentHeight - (targetElementStyleY2 + draggableHeight);
        elStyle2.bottom = parentHeight > 0 ? `${(styleBottomPx / parentHeight * 100).toFixed(2)}%` : "0px", elStyle2.top = "";
      }
      hasAnimatedOnceRef.current = true;
      return;
    }
    if (!hasAnimatedOnceRef.current) {
      hasAnimatedOnceRef.current = true;
      return;
    }
    const pos = animatedPositionRef.current, vel = velocityRef.current, dx = targetViewportCenterX - pos.x, dy = targetViewportCenterY - pos.y, ax = springStiffness * dx - springDampness * vel.x, ay = springStiffness * dy - springDampness * vel.y;
    vel.x += ax, vel.y += ay, pos.x += vel.x, pos.y += vel.y;
    const threshold = 0.5;
    Math.abs(dx) < threshold && Math.abs(dy) < threshold && Math.abs(vel.x) < threshold && Math.abs(vel.y) < threshold && (pos.x = targetViewportCenterX, pos.y = targetViewportCenterY, vel.x = 0, vel.y = 0), animatedPositionRef.current = { ...pos }, velocityRef.current = { ...vel };
    const targetElementStyleX = pos.x - draggableWidth / 2, targetElementStyleY = pos.y - draggableHeight / 2, elStyle = draggableEl.style;
    if (elStyle.right = "", elStyle.bottom = "", elStyle.left = "", elStyle.top = "", isLeftHalf) {
      const styleLeftPx = targetElementStyleX - parentViewportLeft;
      elStyle.left = parentWidth > 0 ? `${(styleLeftPx / parentWidth * 100).toFixed(2)}%` : "0px", elStyle.right = "";
    } else {
      const styleRightPx = parentViewportLeft + parentWidth - (targetElementStyleX + draggableWidth);
      elStyle.right = parentWidth > 0 ? `${(styleRightPx / parentWidth * 100).toFixed(2)}%` : "0px", elStyle.left = "";
    }
    if (isTopHalf) {
      const styleTopPx = targetElementStyleY - parentViewportTop;
      elStyle.top = parentHeight > 0 ? `${(styleTopPx / parentHeight * 100).toFixed(2)}%` : "0px", elStyle.bottom = "";
    } else {
      const styleBottomPx = parentViewportTop + parentHeight - (targetElementStyleY + draggableHeight);
      elStyle.bottom = parentHeight > 0 ? `${(styleBottomPx / parentHeight * 100).toFixed(2)}%` : "0px", elStyle.top = "";
    }
    (Math.abs(pos.x - targetViewportCenterX) > threshold || Math.abs(pos.y - targetViewportCenterY) > threshold || Math.abs(vel.x) > threshold || Math.abs(vel.y) > threshold || isDraggingRef.current) && requestAnimationFrame(updateDraggablePosition);
  }, [areaSnapThreshold, springStiffness, springDampness]), [wasDragged, setWasDragged] = d$1(false), mouseUpHandler = q$1(
    (e2) => {
      var _a;
      if (isDraggingRef.current) {
        onDragEnd && onDragEnd(), (_a = latestProviderDataRef.current) != null && _a.emitDragEnd && latestProviderDataRef.current.emitDragEnd(), setWasDragged(true), setTimeout(() => setWasDragged(false), 0);
        const draggableEl = movingElementRef.current, provider = latestProviderDataRef.current;
        if (draggableEl && provider && provider.borderLocation) {
          const draggableWidth = draggableEl.offsetWidth, draggableHeight = draggableEl.offsetHeight, offsetParent = draggableEl.offsetParent;
          let parentViewportLeft = 0, parentViewportTop = 0, parentWidth = window.innerWidth, parentHeight = window.innerHeight;
          if (offsetParent) {
            const opRect = offsetParent.getBoundingClientRect();
            parentViewportLeft = opRect.left, parentViewportTop = opRect.top, parentWidth = offsetParent.offsetWidth || window.innerWidth, parentHeight = offsetParent.offsetHeight || window.innerHeight;
          }
          let releasedCenterX = 0, releasedCenterY = 0;
          currentMousePosRef.current && mouseToDraggableCenterOffsetRef.current ? (releasedCenterX = currentMousePosRef.current.x - mouseToDraggableCenterOffsetRef.current.x, releasedCenterY = currentMousePosRef.current.y - mouseToDraggableCenterOffsetRef.current.y) : animatedPositionRef.current && (releasedCenterX = animatedPositionRef.current.x, releasedCenterY = animatedPositionRef.current.y);
          const borderLocation = provider.borderLocation, minX = borderLocation.left + draggableWidth / 2, maxX = borderLocation.right - draggableWidth / 2, minY = borderLocation.top + draggableHeight / 2, maxY = borderLocation.bottom - draggableHeight / 2;
          releasedCenterX = Math.max(minX, Math.min(releasedCenterX, maxX)), releasedCenterY = Math.max(minY, Math.min(releasedCenterY, maxY));
          const areaCenters = getSnapAreaCenters(borderLocation);
          let minDist = Number.POSITIVE_INFINITY, closestArea = null, closestCenter = null;
          for (const area in provider.snapAreas)
            if (provider.snapAreas[area]) {
              const center = areaCenters[area];
              if (!center)
                continue;
              const dist = Math.hypot(
                center.x - releasedCenterX,
                center.y - releasedCenterY
              );
              dist < minDist && (minDist = dist, closestArea = area, closestCenter = center);
            }
          if (closestArea && closestCenter) {
            setCurrentSnapArea(closestArea);
            const relX = (closestCenter.x - parentViewportLeft) / parentWidth, relY = (closestCenter.y - parentViewportTop) / parentHeight;
            persistedRelativeCenterRef.current = { x: relX, y: relY };
          } else {
            setCurrentSnapArea(null);
            const relX = (releasedCenterX - parentViewportLeft) / parentWidth, relY = (releasedCenterY - parentViewportTop) / parentHeight;
            persistedRelativeCenterRef.current = { x: relX, y: relY };
          }
        }
      }
      mouseDownPosRef.current = null, isDraggingRef.current = false, window.removeEventListener("mousemove", mouseMoveHandler, {
        capture: true
      }), window.removeEventListener("mouseup", mouseUpHandler, {
        capture: true
      }), movingElementRef.current && (movingElementRef.current.style.userSelect = ""), document.body.style.userSelect = "", document.body.style.cursor = "";
    },
    [onDragEnd]
  ), mouseMoveHandler = q$1(
    (e2) => {
      var _a;
      if (!mouseDownPosRef.current)
        return;
      Math.hypot(
        e2.clientX - mouseDownPosRef.current.x,
        e2.clientY - mouseDownPosRef.current.y
      ) > startThreshold && !isDraggingRef.current && (isDraggingRef.current = true, movingElementRef.current && (movingElementRef.current.style.userSelect = "none"), document.body.style.userSelect = "none", document.body.style.cursor = "grabbing", onDragStart && onDragStart(), (_a = latestProviderDataRef.current) != null && _a.emitDragStart && latestProviderDataRef.current.emitDragStart(), requestAnimationFrame(updateDraggablePosition)), currentMousePosRef.current = { x: e2.clientX, y: e2.clientY };
    },
    [startThreshold, onDragStart, updateDraggablePosition]
  ), mouseDownHandler = q$1(
    (e2) => {
      if (e2.button !== 0)
        return;
      const handleNode = dragInitiatorRef.current, draggableItemNode = movingElementRef.current;
      if (handleNode) {
        if (!handleNode.contains(e2.target) && e2.target !== handleNode)
          return;
      } else if (draggableItemNode) {
        if (!draggableItemNode.contains(e2.target) && e2.target !== draggableItemNode)
          return;
      } else {
        console.error(
          "Draggable element or handle ref not set in mouseDownHandler"
        );
        return;
      }
      if (mouseDownPosRef.current = { x: e2.clientX, y: e2.clientY }, !movingElementRef.current) {
        console.error("Draggable element ref not set in mouseDownHandler");
        return;
      }
      const rect = movingElementRef.current.getBoundingClientRect(), currentDraggableCenterX = rect.left + rect.width / 2, currentDraggableCenterY = rect.top + rect.height / 2;
      mouseToDraggableCenterOffsetRef.current = {
        x: e2.clientX - currentDraggableCenterX,
        y: e2.clientY - currentDraggableCenterY
      }, window.addEventListener("mousemove", mouseMoveHandler, {
        capture: true
      }), window.addEventListener("mouseup", mouseUpHandler, {
        capture: true
      });
    },
    [mouseMoveHandler, mouseUpHandler]
  );
  y$1(() => {
    const elementToListenOn = dragInitiatorNode || movingElementNode;
    return elementToListenOn && elementToListenOn.addEventListener("mousedown", mouseDownHandler), () => {
      elementToListenOn && elementToListenOn.removeEventListener("mousedown", mouseDownHandler), isDraggingRef.current && (onDragEnd && onDragEnd(), isDraggingRef.current = false, movingElementNode && (movingElementNode.style.userSelect = ""), document.body.style.userSelect = "", document.body.style.cursor = "", window.removeEventListener("mousemove", mouseMoveHandler, {
        capture: true
      }), window.removeEventListener("mouseup", mouseUpHandler, {
        capture: true
      }));
    };
  }, [
    movingElementNode,
    dragInitiatorNode,
    mouseDownHandler,
    onDragEnd,
    mouseMoveHandler,
    mouseUpHandler
  ]), y$1(() => {
    movingElementRef.current && providerData && providerData.borderLocation && // Needed for calculations within updateDraggablePosition
    persistedRelativeCenterRef.current && // Ensure we have a center to position to
    !isDraggingRef.current && // Not currently dragging
    !hasAnimatedOnceRef.current && requestAnimationFrame(() => {
      movingElementRef.current && updateDraggablePosition();
    });
  }, [
    movingElementNode,
    // Run when element is available/changes
    providerData,
    // Run if provider context changes (for borderLocation)
    config.initialRelativeCenter,
    // If this changes, persistedRelativeCenterRef might be re-initialized
    initialSnapArea,
    // If this changes, an effect updates persistedRelativeCenterRef
    updateDraggablePosition
    // Memoized callback for positioning
    // hasAnimatedOnceRef is intentionally not a dep, its current value is checked inside.
  ]);
  const draggableRefCallback = q$1((node) => {
    setMovingElementNode(node), movingElementRef.current = node;
  }, []), handleRefCallback = q$1((node) => {
    setDragInitiatorNode(node), dragInitiatorRef.current = node;
  }, []);
  return {
    draggableRef: draggableRefCallback,
    handleRef: handleRefCallback,
    position: {
      snapArea: currentSnapArea,
      isTopHalf: persistedRelativeCenterRef.current ? persistedRelativeCenterRef.current.y <= 0.5 : true,
      isLeftHalf: persistedRelativeCenterRef.current ? persistedRelativeCenterRef.current.x <= 0.5 : true
    },
    wasDragged
  };
}
function ToolbarSection({ children }) {
  return /* @__PURE__ */ u$4("div", { className: "fade-in slide-in-from-right-2 flex max-h-sm max-w-full animate-in snap-start flex-col items-center justify-between gap-1 py-0.5", children });
}
function ToolbarItem(props) {
  return /* @__PURE__ */ u$4("div", { className: "relative flex w-full shrink-0 items-center justify-center", children: [
    props.children,
    props.badgeContent && /* @__PURE__ */ u$4(
      "div",
      {
        className: cn(
          "bg-blue-600 text-white",
          props.badgeClassName,
          "pointer-events-none absolute right-0 bottom-0 flex h-3 w-max min-w-3 max-w-8 select-none items-center justify-center truncate rounded-full px-0.5 font-semibold text-[0.5em]"
        ),
        children: props.badgeContent
      }
    ),
    props.statusDot && /* @__PURE__ */ u$4(
      "div",
      {
        className: cn(
          "bg-rose-600",
          props.statusDotClassName,
          "pointer-events-none absolute top-0 right-0 size-1.5 rounded-full"
        )
      }
    )
  ] });
}
const ToolbarButton = D(
  ({
    badgeContent,
    badgeClassName,
    statusDot,
    statusDotClassName,
    tooltipHint,
    variant = "default",
    active,
    ...props
  }, ref) => {
    const button = /* @__PURE__ */ u$4(
      H$1,
      {
        ref,
        ...props,
        className: cn(
          "flex items-center justify-center rounded-full p-1 text-zinc-950 ring ring-transparent transition-all duration-150 hover:bg-zinc-950/5",
          variant === "default" ? "size-8" : "h-8 rounded-full",
          active && "bg-white/40 ring-zinc-950/20",
          props.className
        )
      }
    );
    return /* @__PURE__ */ u$4(
      ToolbarItem,
      {
        badgeContent,
        badgeClassName,
        statusDot,
        statusDotClassName,
        children: button
      }
    );
  }
);
ToolbarButton.displayName = "ToolbarButton";
const Logo = ({
  color = "default",
  loading = false,
  loadingSpeed = "slow",
  ...props
}) => {
  const colorStyle = {
    default: "fill-stagewise-700 stroke-none",
    black: "fill-zinc-950 stroke-none",
    white: "fill-white stroke-none",
    zinc: "fill-zinc-500/50 stroke-none",
    current: "fill-current stroke-none",
    gradient: "fill-white stroke-black/30 stroke-1"
  };
  return /* @__PURE__ */ u$4(
    "div",
    {
      className: `relative ${color === "gradient" ? "overflow-hidden rounded-full" : "overflow-visible"} ${props.className || ""} ${loading ? "drop-shadow-xl" : ""} aspect-square`,
      children: [
        color === "gradient" && /* @__PURE__ */ u$4("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ u$4("div", { className: "absolute inset-0 size-full bg-gradient-to-tr from-indigo-700 via-blue-500 to-teal-500" }),
          /* @__PURE__ */ u$4("div", { className: "absolute top-1/2 left-1/2 size-9/12 bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]" }),
          /* @__PURE__ */ u$4("div", { className: "absolute right-1/2 bottom-1/2 size-full bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]" }),
          /* @__PURE__ */ u$4("div", { className: "absolute top-0 left-[-10%] size-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_70%)]" }),
          /* @__PURE__ */ u$4("div", { className: "absolute top-[-20%] left-0 h-[120%] w-full bg-[radial-gradient(circle,rgba(55,48,163,0)_55%,rgba(55,48,163,0.35)_73%)]" })
        ] }),
        /* @__PURE__ */ u$4(
          "svg",
          {
            className: `absolute overflow-visible ${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%] drop-shadow-indigo-950 drop-shadow-xs" : "top-0 left-0 h-full w-full"}`,
            viewBox: "0 0 2048 2048",
            children: [
              /* @__PURE__ */ u$4("title", { children: "stagewise" }),
              /* @__PURE__ */ u$4(
                "ellipse",
                {
                  className: colorStyle[color] + (loading ? " animate-pulse" : ""),
                  id: "path3",
                  ry: "624",
                  rx: "624",
                  cy: "1024",
                  cx: "1024"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u$4(
          "svg",
          {
            className: `absolute overflow-visible ${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%]" : "top-0 left-0 h-full w-full"}`,
            viewBox: "0 0 2048 2048",
            children: /* @__PURE__ */ u$4(
              "path",
              {
                id: "path4",
                className: `origin-center ${colorStyle[color]}${loading ? loadingSpeed === "fast" ? " animate-spin-fast" : " animate-spin-slow" : ""}`,
                d: "M 1024 0 A 1024 1024 0 0 0 0 1024 A 1024 1024 0 0 0 1024 2048 L 1736 2048 L 1848 2048 C 1958.7998 2048 2048 1958.7998 2048 1848 L 2048 1736 L 2048 1024 A 1024 1024 0 0 0 1024 0 z M 1024.9414 200 A 824 824 0 0 1 1848.9414 1024 A 824 824 0 0 1 1024.9414 1848 A 824 824 0 0 1 200.94141 1024 A 824 824 0 0 1 1024.9414 200 z "
              }
            )
          }
        )
      ]
    }
  );
}, SettingsButton = ({
  onOpenPanel,
  isActive = false
}) => /* @__PURE__ */ u$4(ToolbarSection, { children: /* @__PURE__ */ u$4(ToolbarButton, { onClick: onOpenPanel, active: isActive, children: /* @__PURE__ */ u$4(Settings, { className: "size-4" }) }) }), SettingsPanel = ({ onClose }) => /* @__PURE__ */ u$4(Panel, { children: [
  /* @__PURE__ */ u$4(Panel.Header, { title: "Settings" }),
  /* @__PURE__ */ u$4(Panel.Content, { children: /* @__PURE__ */ u$4(ConnectionSettings, {}) }),
  /* @__PURE__ */ u$4(Panel.Content, { children: /* @__PURE__ */ u$4(ProjectInfoSection, {}) })
] }), ConnectionSettings = () => {
  const {
    windows,
    isDiscovering,
    discoveryError,
    discover,
    selectedSession,
    selectSession
  } = useVSCode(), handleSessionChange = (e2) => {
    const target = e2.target, selectedSessionId = target.value === "" ? void 0 : target.value;
    selectSession(selectedSessionId);
  }, { appName } = useVSCode(), handleRefresh = () => {
    discover();
  };
  return /* @__PURE__ */ u$4("div", { className: "space-y-4 pb-4", children: [
    /* @__PURE__ */ u$4("div", { children: [
      /* @__PURE__ */ u$4(
        "label",
        {
          htmlFor: "session-select",
          className: "mb-2 block font-medium text-sm text-zinc-700",
          children: [
            "IDE Window ",
            appName && `(${appName})`
          ]
        }
      ),
      /* @__PURE__ */ u$4("div", { className: "flex w-full items-center space-x-2", children: [
        /* @__PURE__ */ u$4(
          "select",
          {
            id: "session-select",
            value: (selectedSession == null ? void 0 : selectedSession.sessionId) || "",
            onChange: handleSessionChange,
            className: "h-8 min-w-0 flex-1 rounded-lg border border-zinc-300 bg-zinc-500/10 px-3 text-sm backdrop-saturate-150 focus:border-zinc-500 focus:outline-none",
            disabled: isDiscovering,
            children: [
              /* @__PURE__ */ u$4("option", { value: "", disabled: true, children: windows.length > 0 ? "Select an IDE window..." : "No windows available" }),
              windows.map((window2) => /* @__PURE__ */ u$4("option", { value: window2.sessionId, children: [
                window2.displayName,
                " - Port ",
                window2.port
              ] }, window2.sessionId))
            ]
          }
        ),
        /* @__PURE__ */ u$4(
          "button",
          {
            type: "button",
            onClick: handleRefresh,
            disabled: isDiscovering,
            className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-500/10 backdrop-saturate-150 transition-colors hover:bg-zinc-500/20 disabled:opacity-50",
            title: "Refresh window list",
            children: /* @__PURE__ */ u$4(
              RefreshCw,
              {
                className: `size-4 ${isDiscovering ? "animate-spin" : ""}`
              }
            )
          }
        )
      ] }),
      discoveryError && /* @__PURE__ */ u$4("p", { className: "mt-1 text-red-600 text-sm", children: [
        "Error discovering windows: ",
        discoveryError
      ] }),
      !isDiscovering && windows.length === 0 && !discoveryError && /* @__PURE__ */ u$4("p", { className: "mt-1 text-sm text-zinc-500", children: "No IDE windows found. Make sure the Stagewise extension is installed and running." })
    ] }),
    selectedSession && /* @__PURE__ */ u$4("div", { className: "rounded-lg bg-blue-50 p-3", children: [
      /* @__PURE__ */ u$4("p", { className: "text-blue-800 text-sm", children: [
        /* @__PURE__ */ u$4("strong", { children: "Selected:" }),
        " ",
        selectedSession.displayName
      ] }),
      /* @__PURE__ */ u$4("p", { className: "mt-1 text-blue-600 text-xs", children: [
        "Session ID: ",
        selectedSession.sessionId.substring(0, 8),
        "..."
      ] })
    ] }),
    !selectedSession && windows.length > 0 && /* @__PURE__ */ u$4("div", { className: "rounded-lg bg-amber-50 p-3", children: /* @__PURE__ */ u$4("p", { className: "text-amber-800 text-sm", children: [
      /* @__PURE__ */ u$4("strong", { children: "No window selected:" }),
      " Please select an IDE window above to connect."
    ] }) })
  ] });
}, ProjectInfoSection = () => /* @__PURE__ */ u$4("div", { className: "space-y-2 text-xs text-zinc-700", children: [
  /* @__PURE__ */ u$4("div", { className: "my-2 flex flex-wrap items-center gap-3", children: [
    /* @__PURE__ */ u$4(
      "a",
      {
        href: "https://github.com/stagewise-io/stagewise",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-1 text-blue-700 hover:underline",
        title: "GitHub Repository",
        children: [
          /* @__PURE__ */ u$4("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ u$4("path", { d: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" }) }),
          "GitHub"
        ]
      }
    ),
    /* @__PURE__ */ u$4(
      "a",
      {
        href: "https://discord.gg/gkdGsDYaKA",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-1 text-indigo-700 hover:underline",
        title: "Join our Discord",
        children: [
          /* @__PURE__ */ u$4("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ u$4("path", { d: "M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.117.117 0 0 0-.124.06c-.537.96-1.13 2.22-1.552 3.2a18.524 18.524 0 0 0-5.418 0c-.423-.98-1.016-2.24-1.553-3.2a.117.117 0 0 0-.124-.06A19.736 19.736 0 0 0 3.683 4.369a.105.105 0 0 0-.047.043C.533 9.043-.32 13.579.099 18.057a.12.12 0 0 0 .045.083c1.934 1.426 3.81 2.288 5.671 2.857a.116.116 0 0 0 .127-.043c.438-.602.827-1.24 1.165-1.908a.112.112 0 0 0-.062-.158c-.619-.234-1.205-.52-1.77-.853a.117.117 0 0 1-.012-.194c.119-.09.238-.183.353-.277a.112.112 0 0 1 .114-.013c3.747 1.71 7.789 1.71 11.533 0a.112.112 0 0 1 .115.012c.115.094.234.188.353.278a.117.117 0 0 1-.012.194c-.565.333-1.151.619-1.77.853a.112.112 0 0 0-.062.158c.34.668.728 1.306 1.165 1.908a.115.115 0 0 0 .127.043c1.861-.569 3.737-1.431 5.671-2.857a.12.12 0 0 0 .045-.083c.5-5.177-.838-9.673-3.636-13.645a.105.105 0 0 0-.047-.043zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.96 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" }) }),
          "Discord"
        ]
      }
    ),
    /* @__PURE__ */ u$4(
      "a",
      {
        href: "https://marketplace.visualstudio.com/items?itemName=stagewise.stagewise-vscode-extension",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-1 text-violet-700 hover:underline",
        title: "VS Code Marketplace",
        children: [
          /* @__PURE__ */ u$4("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ u$4("path", { d: "M21.805 2.29a2.25 2.25 0 0 0-2.45-.49l-7.5 3.25a2.25 2.25 0 0 0-1.31 2.06v1.13l-5.13 2.22a2.25 2.25 0 0 0-1.31 2.06v3.5a2.25 2.25 0 0 0 1.31 2.06l5.13 2.22v1.13a2.25 2.25 0 0 0 1.31 2.06l7.5 3.25a2.25 2.25 0 0 0 2.45-.49A2.25 2.25 0 0 0 23 20.25V3.75a2.25 2.25 0 0 0-1.195-1.46zM12 20.25v-16.5l7.5 3.25v10l-7.5 3.25z" }) }),
          "VS Code Marketplace"
        ]
      }
    )
  ] }),
  /* @__PURE__ */ u$4("div", { className: "mt-2", children: [
    /* @__PURE__ */ u$4("span", { className: "font-semibold", children: "Contact:" }),
    " ",
    /* @__PURE__ */ u$4(
      "a",
      {
        href: "mailto:sales@stagewise.io",
        className: "text-blue-700 hover:underline",
        children: "sales@stagewise.io"
      }
    )
  ] }),
  /* @__PURE__ */ u$4("div", { className: "mt-2 text-zinc-500", children: /* @__PURE__ */ u$4("span", { children: [
    "Licensed under AGPL v3.",
    " ",
    /* @__PURE__ */ u$4(
      "a",
      {
        href: "https://github.com/stagewise-io/stagewise/blob/main/LICENSE",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "hover:underline",
        children: "View license"
      }
    )
  ] }) })
] });
function DisconnectedStatePanel({
  discover,
  discoveryError
}) {
  return /* @__PURE__ */ u$4("div", { className: "rounded-lg border border-orange-200 bg-orange-50/90 p-4 shadow-lg backdrop-blur", children: [
    /* @__PURE__ */ u$4("div", { className: "mb-3 flex items-center gap-3", children: [
      /* @__PURE__ */ u$4(WifiOff, { className: "size-5 text-orange-600" }),
      /* @__PURE__ */ u$4("h3", { className: "font-semibold text-orange-800", children: "Not Connected" })
    ] }),
    /* @__PURE__ */ u$4("div", { className: "space-y-3 text-orange-700 text-sm", children: [
      /* @__PURE__ */ u$4("p", { children: "The stagewise toolbar isn't connected to any IDE window." }),
      discoveryError && /* @__PURE__ */ u$4("div", { className: "rounded border border-red-200 bg-red-100 p-2 text-red-700", children: [
        /* @__PURE__ */ u$4("strong", { children: "Error:" }),
        " ",
        discoveryError
      ] }),
      /* @__PURE__ */ u$4("div", { className: "space-y-2", children: [
        /* @__PURE__ */ u$4("p", { className: "font-medium", children: "To connect:" }),
        /* @__PURE__ */ u$4("ol", { className: "list-inside list-decimal space-y-1 pl-2 text-xs", children: [
          /* @__PURE__ */ u$4("li", { children: "Open your IDE (Cursor, Windsurf, etc.)" }),
          /* @__PURE__ */ u$4("li", { children: "Install the stagewise extension" }),
          /* @__PURE__ */ u$4("li", { children: "Make sure the extension is active" }),
          /* @__PURE__ */ u$4("li", { children: "Click refresh below" })
        ] })
      ] }),
      /* @__PURE__ */ u$4(
        "button",
        {
          type: "button",
          onClick: discover,
          className: "flex w-full items-center justify-center gap-2 rounded-md bg-orange-600 px-3 py-2 font-medium text-sm text-white transition-colors hover:bg-orange-700",
          children: [
            /* @__PURE__ */ u$4(RefreshCw, { className: "size-4" }),
            "Retry Connection"
          ]
        }
      ),
      /* @__PURE__ */ u$4("div", { className: "border-orange-200 border-t pt-2", children: /* @__PURE__ */ u$4(
        "a",
        {
          href: "https://marketplace.visualstudio.com/items?itemName=stagewise.stagewise-vscode-extension",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-orange-600 text-xs hover:text-orange-800 hover:underline",
          children: "Get VS Code Extension →"
        }
      ) })
    ] })
  ] });
}
function ConnectingStatePanel() {
  return /* @__PURE__ */ u$4("div", { className: "rounded-lg border border-blue-200 bg-blue-50/90 p-4 shadow-lg backdrop-blur", children: [
    /* @__PURE__ */ u$4("div", { className: "mb-3 flex items-center gap-3", children: [
      /* @__PURE__ */ u$4(RefreshCw, { className: "size-5 animate-spin text-blue-600" }),
      /* @__PURE__ */ u$4("h3", { className: "font-semibold text-blue-800", children: "Connecting..." })
    ] }),
    /* @__PURE__ */ u$4("div", { className: "text-blue-700 text-sm", children: /* @__PURE__ */ u$4("p", { children: [
      "Looking for active agent instances...",
      /* @__PURE__ */ u$4("br", {}),
      /* @__PURE__ */ u$4("span", { className: "text-blue-500 text-xs", children: "VS Code, Cursor, Windsurf ..." })
    ] }) })
  ] });
}
function WindowSelectionPanel() {
  const {
    windows,
    isDiscovering,
    discoveryError,
    discover,
    selectedSession,
    selectSession,
    appName
  } = useVSCode(), handleSessionChange = (e2) => {
    const target = e2.target, selectedSessionId = target.value === "" ? void 0 : target.value;
    selectSession(selectedSessionId);
  }, handleRefresh = () => {
    discover();
  };
  return /* @__PURE__ */ u$4("div", { className: "rounded-lg border border-blue-200 bg-blue-50/90 p-4 shadow-lg backdrop-blur", children: [
    /* @__PURE__ */ u$4("div", { className: "mb-3", children: /* @__PURE__ */ u$4("h3", { className: "font-semibold text-blue-800", children: "Select IDE Window" }) }),
    /* @__PURE__ */ u$4("div", { className: "space-y-3", children: [
      /* @__PURE__ */ u$4("div", { children: [
        /* @__PURE__ */ u$4(
          "label",
          {
            htmlFor: "window-selection-select",
            className: "mb-2 block font-medium text-blue-700 text-sm",
            children: [
              "IDE Window ",
              appName && `(${appName})`
            ]
          }
        ),
        /* @__PURE__ */ u$4("div", { className: "flex w-full items-center space-x-2", children: [
          /* @__PURE__ */ u$4(
            "select",
            {
              id: "window-selection-select",
              value: (selectedSession == null ? void 0 : selectedSession.sessionId) || "",
              onChange: handleSessionChange,
              className: "h-8 min-w-0 flex-1 rounded-lg border border-blue-300 bg-white/80 px-3 text-sm backdrop-saturate-150 focus:border-blue-500 focus:outline-none",
              disabled: isDiscovering,
              children: [
                /* @__PURE__ */ u$4("option", { value: "", disabled: true, children: windows.length > 0 ? "Select an IDE window..." : "No windows available" }),
                windows.map((window2) => /* @__PURE__ */ u$4("option", { value: window2.sessionId, children: [
                  window2.displayName,
                  " - Port ",
                  window2.port
                ] }, window2.sessionId))
              ]
            }
          ),
          /* @__PURE__ */ u$4(
            "button",
            {
              type: "button",
              onClick: handleRefresh,
              disabled: isDiscovering,
              className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100/80 backdrop-saturate-150 transition-colors hover:bg-blue-200/80 disabled:opacity-50",
              title: "Refresh window list",
              children: /* @__PURE__ */ u$4(
                RefreshCw,
                {
                  className: `size-4 text-blue-600 ${isDiscovering ? "animate-spin" : ""}`
                }
              )
            }
          )
        ] }),
        discoveryError && /* @__PURE__ */ u$4("p", { className: "mt-1 text-red-600 text-sm", children: [
          "Error discovering windows: ",
          discoveryError
        ] }),
        !isDiscovering && windows.length === 0 && !discoveryError && /* @__PURE__ */ u$4("p", { className: "mt-1 text-blue-600 text-sm", children: "No IDE windows found. Make sure the Stagewise extension is installed and running." })
      ] }),
      selectedSession && /* @__PURE__ */ u$4("div", { className: "rounded-lg bg-blue-100/80 p-3", children: [
        /* @__PURE__ */ u$4("p", { className: "text-blue-800 text-sm", children: [
          /* @__PURE__ */ u$4("strong", { children: "Selected:" }),
          " ",
          selectedSession.displayName
        ] }),
        /* @__PURE__ */ u$4("p", { className: "mt-1 text-blue-600 text-xs", children: [
          "Session ID: ",
          selectedSession.sessionId.substring(0, 8),
          "..."
        ] })
      ] }),
      !selectedSession && /* @__PURE__ */ u$4("div", { className: "rounded-lg border border-blue-200 bg-white/90 p-3", children: /* @__PURE__ */ u$4("p", { className: "text-blue-800 text-sm", children: [
        /* @__PURE__ */ u$4("strong", { children: "No window selected:" }),
        " Please select an IDE window above to connect."
      ] }) })
    ] })
  ] });
}
function NormalStateButtons({
  handleButtonClick,
  pluginBox,
  setPluginBox,
  openPanel,
  setOpenPanel,
  chatState
}) {
  const pluginsWithActions = usePlugins().plugins.filter(
    (plugin) => plugin.onActionClick
  );
  return /* @__PURE__ */ u$4(k$2, { children: [
    /* @__PURE__ */ u$4(
      SettingsButton,
      {
        onOpenPanel: () => setOpenPanel(openPanel === "settings" ? null : "settings"),
        isActive: openPanel === "settings"
      }
    ),
    pluginsWithActions.length > 0 && /* @__PURE__ */ u$4(ToolbarSection, { children: pluginsWithActions.map((plugin) => /* @__PURE__ */ u$4(
      ToolbarButton,
      {
        onClick: handleButtonClick(() => {
          (pluginBox == null ? void 0 : pluginBox.pluginName) !== plugin.pluginName ? plugin.onActionClick() && setPluginBox({
            component: plugin.onActionClick(),
            pluginName: plugin.pluginName
          }) : setPluginBox(null);
        }),
        active: (pluginBox == null ? void 0 : pluginBox.pluginName) === plugin.pluginName,
        children: plugin.iconSvg ? /* @__PURE__ */ u$4("span", { className: "size-4 stroke-zinc-950 text-zinc-950 *:size-full", children: plugin.iconSvg }) : /* @__PURE__ */ u$4(Puzzle, { className: "size-4" })
      },
      plugin.pluginName
    )) }),
    /* @__PURE__ */ u$4(ToolbarSection, { children: /* @__PURE__ */ u$4(
      ToolbarButton,
      {
        onClick: handleButtonClick(
          () => chatState.isPromptCreationActive ? chatState.stopPromptCreation() : chatState.startPromptCreation()
        ),
        active: chatState.isPromptCreationActive,
        children: /* @__PURE__ */ u$4(MessageCircle, { className: "size-4 stroke-zinc-950" })
      }
    ) })
  ] });
}
function DisconnectedStateButtons() {
  const { discover, isDiscovering } = useVSCode();
  return /* @__PURE__ */ u$4(ToolbarSection, { children: /* @__PURE__ */ u$4(
    ToolbarButton,
    {
      onClick: isDiscovering ? void 0 : () => discover(),
      className: cn(
        isDiscovering ? "text-blue-700" : "text-orange-700 hover:bg-orange-200"
      ),
      children: /* @__PURE__ */ u$4(
        RefreshCw,
        {
          className: cn("size-4", isDiscovering && "animate-spin")
        }
      )
    }
  ) });
}
function ToolbarDraggableBox() {
  const provider = x$1(DraggableContext), borderLocation = provider == null ? void 0 : provider.borderLocation, isReady = !!borderLocation && borderLocation.right - borderLocation.left > 0 && borderLocation.bottom - borderLocation.top > 0, draggable = useDraggable({
    startThreshold: 10,
    initialSnapArea: "bottomRight"
  }), {
    windows,
    isDiscovering,
    discoveryError,
    discover,
    shouldPromptWindowSelection
  } = useVSCode(), isConnected = windows.length > 0, [pluginBox, setPluginBox] = d$1(null), [openPanel, setOpenPanel] = d$1(null), chatState = useChatState(), { minimized, minimize, expand } = useAppState();
  y$1(() => {
    minimized && (setPluginBox(null), setOpenPanel(null));
  }, [minimized]);
  const handleButtonClick = (handler) => (e2) => {
    if (draggable.wasDragged) {
      e2.preventDefault(), e2.stopPropagation();
      return;
    }
    handler();
  };
  if (!isReady)
    return null;
  const isLoadingState = isDiscovering, isDisconnectedState = !isConnected && !isDiscovering, isConnectedState = isConnected, shouldShowWindowSelection = shouldPromptWindowSelection && isConnectedState, theme = isLoadingState ? {
    border: "border-blue-300",
    bg: "bg-blue-100/80",
    divideBorder: "divide-blue-200",
    buttonBg: "from-blue-600 to-sky-600",
    buttonColor: "text-blue-700"
  } : isDisconnectedState ? {
    border: "border-orange-300",
    bg: "bg-orange-100/80",
    divideBorder: "divide-orange-200",
    buttonBg: "from-orange-600 to-red-600",
    buttonColor: "text-orange-700"
  } : {
    border: "border-border/30",
    bg: "bg-zinc-50/80",
    divideBorder: "divide-border/20",
    buttonBg: "from-sky-700 to-fuchsia-700",
    buttonColor: "stroke-zinc-950"
  }, getMinimizedIcon = () => isLoadingState ? /* @__PURE__ */ u$4(RefreshCw, { className: "size-4 animate-spin text-white" }) : isDisconnectedState ? /* @__PURE__ */ u$4(WifiOff, { className: "size-4 text-white" }) : /* @__PURE__ */ u$4(Logo, { className: "size-4.5", color: "white" });
  return /* @__PURE__ */ u$4("div", { ref: draggable.draggableRef, className: "absolute p-0.5", children: [
    /* @__PURE__ */ u$4(
      "div",
      {
        className: cn(
          "absolute flex h-[calc(100vh-32px)] w-96 max-w-[40vw] items-stretch justify-end transition-all duration-300 ease-out",
          draggable.position.isTopHalf ? "top-0 flex-col-reverse" : "bottom-0 flex-col",
          draggable.position.isLeftHalf ? "left-[100%]" : "right-[100%]"
        ),
        children: [
          /* @__PURE__ */ u$4(
            "div",
            {
              className: cn(
                "flex min-h-0 flex-1 origin-bottom-right flex-col items-stretch px-2 transition-all duration-300 ease-out",
                (pluginBox || openPanel === "settings" || !isConnectedState || shouldShowWindowSelection) && !minimized ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none h-0 scale-50 opacity-0 blur-md",
                draggable.position.isTopHalf ? "justify-start" : "justify-end",
                draggable.position.isTopHalf ? draggable.position.isLeftHalf ? "origin-top-left" : "origin-top-right" : draggable.position.isLeftHalf ? "origin-bottom-left" : "origin-bottom-right"
              ),
              children: [
                isLoadingState && /* @__PURE__ */ u$4(ConnectingStatePanel, {}),
                isDisconnectedState && /* @__PURE__ */ u$4(
                  DisconnectedStatePanel,
                  {
                    discover,
                    discoveryError
                  }
                ),
                shouldShowWindowSelection && /* @__PURE__ */ u$4(WindowSelectionPanel, {}),
                isConnectedState && openPanel === "settings" && !shouldShowWindowSelection && /* @__PURE__ */ u$4(SettingsPanel, { onClose: () => setOpenPanel(null) }),
                isConnectedState && !shouldShowWindowSelection && (pluginBox == null ? void 0 : pluginBox.component)
              ]
            }
          ),
          isConnectedState && /* @__PURE__ */ u$4(
            "div",
            {
              className: cn(
                "z-20 w-full px-2 transition-all duration-300 ease-out",
                chatState.isPromptCreationActive && !minimized ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none h-0 scale-50 opacity-0 blur-md",
                draggable.position.isTopHalf ? "mb-2" : "mt-2",
                draggable.position.isTopHalf ? draggable.position.isLeftHalf ? "origin-top-left" : "origin-top-right" : draggable.position.isLeftHalf ? "origin-bottom-left" : "origin-bottom-right"
              ),
              children: /* @__PURE__ */ u$4(ToolbarChatArea, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u$4(
      "div",
      {
        ref: draggable.handleRef,
        className: cn(
          "pointer-events-auto z-50 rounded-full border px-0.5 shadow-md backdrop-blur transition-all duration-300 ease-out",
          theme.border,
          theme.bg,
          draggable.position.isTopHalf ? "flex-col-reverse divide-y-reverse" : "flex-col",
          minimized ? "h-9.5 w-9.5" : "h-[calc-size(auto,size)] h-auto w-auto"
        ),
        children: [
          /* @__PURE__ */ u$4(
            H$1,
            {
              onClick: () => expand(),
              className: cn(
                "absolute right-0 left-0 z-50 flex size-9 origin-center cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr transition-all duration-300 ease-out",
                theme.buttonBg,
                minimized ? "pointer-events-auto scale-100 opacity-100 blur-none" : "pointer-events-none scale-25 opacity-0 blur-md",
                draggable.position.isTopHalf ? "top-0" : "bottom-0"
              ),
              children: getMinimizedIcon()
            }
          ),
          /* @__PURE__ */ u$4(
            "div",
            {
              className: cn(
                "flex h-[calc-size(auto)] scale-100 items-center justify-center divide-y transition-all duration-300 ease-out",
                theme.divideBorder,
                draggable.position.isTopHalf ? "origin-top flex-col-reverse divide-y-reverse" : "origin-bottom flex-col",
                minimized && "pointer-events-none h-0 scale-50 opacity-0 blur-md"
              ),
              children: [
                isConnectedState ? /* @__PURE__ */ u$4(
                  NormalStateButtons,
                  {
                    handleButtonClick,
                    pluginBox,
                    setPluginBox,
                    openPanel,
                    setOpenPanel,
                    chatState
                  }
                ) : /* @__PURE__ */ u$4(DisconnectedStateButtons, {}),
                /* @__PURE__ */ u$4(ToolbarSection, { children: /* @__PURE__ */ u$4(
                  ToolbarButton,
                  {
                    onClick: handleButtonClick(() => minimize()),
                    className: cn(
                      "h-5",
                      theme.buttonColor,
                      draggable.position.isTopHalf ? "rounded-t-3xl rounded-b-lg" : "rounded-t-lg rounded-b-3xl"
                    ),
                    children: draggable.position.isTopHalf ? /* @__PURE__ */ u$4(ChevronUp, { className: "size-4" }) : /* @__PURE__ */ u$4(ChevronDown, { className: "size-4" })
                  }
                ) })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function ToolbarArea() {
  const containerRef = A$1(null);
  return /* @__PURE__ */ u$4("div", { className: "absolute size-full", children: /* @__PURE__ */ u$4("div", { className: "absolute inset-4", ref: containerRef, children: /* @__PURE__ */ u$4(
    DraggableProvider,
    {
      containerRef,
      snapAreas: {
        topLeft: true,
        topRight: true,
        bottomLeft: true,
        bottomRight: true,
        topCenter: true,
        bottomCenter: true
      },
      children: /* @__PURE__ */ u$4(ToolbarDraggableBox, {})
    }
  ) }) });
}
function ElementSelector(props) {
  const lastHoveredElement = A$1(null), handleMouseMove = q$1(
    (event) => {
      if (event.target.closest(".companion"))
        return;
      const refElement = getElementAtPoint(event.clientX, event.clientY);
      props.ignoreList.includes(refElement) || lastHoveredElement.current !== refElement && (lastHoveredElement.current = refElement, props.onElementHovered(refElement));
    },
    [props]
  ), handleMouseLeave = q$1(() => {
    lastHoveredElement.current = null, props.onElementUnhovered();
  }, [props]), handleMouseClick = q$1(() => {
    lastHoveredElement.current && (props.ignoreList.includes(lastHoveredElement.current) || props.onElementSelected(lastHoveredElement.current));
  }, [props]);
  return /* @__PURE__ */ u$4(
    "div",
    {
      className: "pointer-events-auto fixed inset-0 h-screen w-screen cursor-copy",
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onClick: handleMouseClick,
      role: "button",
      tabIndex: 0
    }
  );
}
function useWindowSize() {
  const [size, setSize] = d$1({
    width: window.innerWidth,
    height: window.innerHeight
  }), handleResize = q$1(
    () => setSize({
      width: window.innerWidth,
      height: window.innerHeight
    }),
    []
  );
  return useEventListener("resize", handleResize), size;
}
function useCyclicUpdate(func, frameRate) {
  const animationFrameHandle = A$1(void 0), timeBetweenFrames = T$1(
    () => 1e3 / frameRate,
    [frameRate]
  ), lastCallFrameTime = A$1(0), update = q$1(
    (frameTime) => {
      frameTime - lastCallFrameTime.current >= timeBetweenFrames && (func(), lastCallFrameTime.current = frameTime), animationFrameHandle.current = requestAnimationFrame(update);
    },
    [func, timeBetweenFrames]
  );
  y$1(() => (animationFrameHandle.current = requestAnimationFrame(update), () => {
    animationFrameHandle.current && (cancelAnimationFrame(animationFrameHandle.current), animationFrameHandle.current = void 0);
  }), [frameRate, update]);
}
function ContextItemProposal({
  refElement,
  ...props
}) {
  const boxRef = A$1(null), windowSize = useWindowSize(), { plugins } = usePlugins(), hoveredElementPluginContext = T$1(() => refElement ? plugins.filter(
    (plugin) => plugin.onContextElementSelect
  ).map((plugin) => {
    var _a;
    return {
      pluginName: plugin.pluginName,
      context: (_a = plugin.onContextElementSelect) == null ? void 0 : _a.call(plugin, refElement)
    };
  }) : [], [refElement]), updateBoxPosition = q$1(() => {
    if (boxRef.current)
      if (refElement) {
        const referenceRect = refElement.getBoundingClientRect();
        boxRef.current.style.top = `${referenceRect.top - 2}px`, boxRef.current.style.left = `${referenceRect.left - 2}px`, boxRef.current.style.width = `${referenceRect.width + 4}px`, boxRef.current.style.height = `${referenceRect.height + 4}px`, boxRef.current.style.display = void 0;
      } else
        boxRef.current.style.height = "0px", boxRef.current.style.width = "0px", boxRef.current.style.top = `${windowSize.height / 2}px`, boxRef.current.style.left = `${windowSize.width / 2}px`, boxRef.current.style.display = "none";
  }, [refElement, windowSize.height, windowSize.width]);
  return useCyclicUpdate(updateBoxPosition, 30), /* @__PURE__ */ u$4(
    "div",
    {
      ...props,
      className: "fixed flex items-center justify-center rounded-lg border-2 border-blue-600/80 bg-blue-600/20 text-white transition-all duration-100",
      style: { zIndex: 1e3 },
      ref: boxRef,
      children: [
        /* @__PURE__ */ u$4("div", { className: "absolute top-0.5 left-0.5 flex w-full flex-row items-start justify-start gap-1", children: [
          /* @__PURE__ */ u$4("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: /* @__PURE__ */ u$4("span", { className: "truncate", children: refElement.tagName.toLowerCase() }) }),
          hoveredElementPluginContext.filter((plugin) => plugin.context.annotation).map((plugin) => {
            var _a;
            return /* @__PURE__ */ u$4("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: [
              /* @__PURE__ */ u$4("span", { className: "size-3 shrink-0 stroke-white text-white *:size-full", children: (_a = plugins.find((p2) => p2.pluginName === plugin.pluginName)) == null ? void 0 : _a.iconSvg }),
              /* @__PURE__ */ u$4("span", { className: "truncate", children: plugin.context.annotation })
            ] });
          })
        ] }),
        /* @__PURE__ */ u$4(Plus, { className: "size-6 drop-shadow-black drop-shadow-md" })
      ]
    }
  );
}
function ContextItem({ refElement, ...props }) {
  const boxRef = A$1(null), windowSize = useWindowSize(), updateBoxPosition = q$1(() => {
    if (boxRef.current)
      if (refElement) {
        const referenceRect = refElement.getBoundingClientRect();
        boxRef.current.style.top = `${referenceRect.top}px`, boxRef.current.style.left = `${referenceRect.left}px`, boxRef.current.style.width = `${referenceRect.width}px`, boxRef.current.style.height = `${referenceRect.height}px`, boxRef.current.style.display = void 0;
      } else
        boxRef.current.style.height = "0px", boxRef.current.style.width = "0px", boxRef.current.style.top = `${windowSize.height / 2}px`, boxRef.current.style.left = `${windowSize.width / 2}px`, boxRef.current.style.display = "none";
  }, [refElement, windowSize.height, windowSize.width]);
  useCyclicUpdate(updateBoxPosition, 30);
  const chatState = useChatState(), handleDeleteClick = q$1(() => {
    chatState.removeChatDomContext(chatState.currentChatId, refElement);
  }, [chatState, refElement]), { plugins } = usePlugins();
  return /* @__PURE__ */ u$4(
    "div",
    {
      ...props,
      className: "pointer-events-auto fixed flex cursor-pointer items-center justify-center rounded-lg border-2 border-green-600/80 bg-green-600/5 text-transparent transition-all duration-0 hover:border-red-600/80 hover:bg-red-600/20 hover:text-white",
      ref: boxRef,
      onClick: handleDeleteClick,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ u$4("div", { className: "absolute top-0.5 left-0.5 flex w-full flex-row items-start justify-start gap-1", children: [
          /* @__PURE__ */ u$4("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: /* @__PURE__ */ u$4("span", { className: "truncate", children: refElement.tagName.toLowerCase() }) }),
          props.pluginContext.filter((plugin) => plugin.context.annotation).map((plugin) => {
            var _a;
            return /* @__PURE__ */ u$4("div", { className: "flex flex-row items-center justify-center gap-0.5 overflow-hidden rounded-md bg-zinc-700/80 px-1 py-0 font-medium text-white text-xs", children: [
              /* @__PURE__ */ u$4("span", { className: "size-3 shrink-0 stroke-white text-white *:size-full", children: (_a = plugins.find((p2) => p2.pluginName === plugin.pluginName)) == null ? void 0 : _a.iconSvg }),
              /* @__PURE__ */ u$4("span", { className: "truncate", children: plugin.context.annotation })
            ] });
          })
        ] }),
        /* @__PURE__ */ u$4(Trash2, { className: "size-6 drop-shadow-black drop-shadow-md" })
      ]
    }
  );
}
function SelectorCanvas() {
  const {
    chats,
    currentChatId,
    addChatDomContext,
    isPromptCreationActive,
    promptState
  } = useChatState(), currentChat = T$1(
    () => chats.find((chat) => chat.id === currentChatId),
    [currentChatId, chats]
  ), shouldShow = isPromptCreationActive && promptState !== "loading", contextElements = T$1(() => (currentChat == null ? void 0 : currentChat.domContextElements) || [], [currentChat]), [hoveredElement, setHoveredElement] = d$1(
    null
  ), addElementToContext = q$1(
    (el) => {
      addChatDomContext(currentChatId, el);
    },
    [addChatDomContext, currentChatId]
  );
  return shouldShow ? /* @__PURE__ */ u$4(k$2, { children: [
    hoveredElement && /* @__PURE__ */ u$4(ContextItemProposal, { refElement: hoveredElement }),
    /* @__PURE__ */ u$4(
      ElementSelector,
      {
        ignoreList: contextElements.map((el) => el.element),
        onElementHovered: setHoveredElement,
        onElementSelected: addElementToContext,
        onElementUnhovered: () => setHoveredElement(null)
      }
    ),
    contextElements.map((el) => /* @__PURE__ */ u$4(ContextItem, { refElement: el.element, pluginContext: el.pluginContext }))
  ] }) : null;
}
function DesktopLayout() {
  return /* @__PURE__ */ u$4("div", { className: cn("fixed inset-0 h-screen w-screen"), children: [
    /* @__PURE__ */ u$4(SelectorCanvas, {}),
    /* @__PURE__ */ u$4(ToolbarArea, {})
  ] });
}
function FocusLock() {
  const focusInCompanion = A$1(false);
  return y$1(() => {
    const originalFocus = HTMLElement.prototype.focus;
    return HTMLElement.prototype.focus = function(...args) {
      const shadowRoot = this.getRootNode();
      !(shadowRoot instanceof ShadowRoot && shadowRoot.host instanceof HTMLElement && shadowRoot.host.nodeName === "STAGEWISE-COMPANION-ANCHOR") && focusInCompanion.current || originalFocus.apply(this, args);
    }, () => {
      HTMLElement.prototype.focus = originalFocus;
    };
  }, []), useEventListener(
    "focusin",
    (event) => {
      event.target.localName === companionAnchorTagName && (focusInCompanion.current = true);
    },
    { capture: true }
  ), useEventListener(
    "focusout",
    (event) => {
      event.target.localName === companionAnchorTagName && (focusInCompanion.current = false);
    },
    { capture: true }
  ), null;
}
function VisibilityManager({ children }) {
  return children;
}
function MainAppBlocker() {
  const { isMainAppBlocked } = useAppState();
  return /* @__PURE__ */ u$4(
    "div",
    {
      className: cn(
        "fixed inset-0 h-screen w-screen",
        isMainAppBlocked ? "pointer-events-auto" : "pointer-events-none"
      ),
      role: "button",
      tabIndex: 0
    }
  );
}
function App(config) {
  return /* @__PURE__ */ u$4(AppStateProvider, { children: [
    /* @__PURE__ */ u$4(FocusLock, {}),
    /* @__PURE__ */ u$4(MainAppBlocker, {}),
    /* @__PURE__ */ u$4(ContextProviders, { config, children: [
      /* @__PURE__ */ u$4(HotkeyListener, {}),
      /* @__PURE__ */ u$4(VisibilityManager, { children: /* @__PURE__ */ u$4(DesktopLayout, {}) })
    ] })
  ] });
}
function initToolbar(config) {
  if (!document.body)
    throw new Error("stagewise companion cannot find document.body");
  if (document.body.querySelector(companionAnchorTagName))
    throw console.warn(
      "A stagewise companion anchor already exists. Aborting this instance."
    ), new Error("A stagewise companion anchor already exists.");
  const shadowDomAnchor = document.createElement(companionAnchorTagName);
  shadowDomAnchor.style.position = "fixed", shadowDomAnchor.style.top = "0px", shadowDomAnchor.style.left = "0px", shadowDomAnchor.style.right = "0px", shadowDomAnchor.style.bottom = "0px", shadowDomAnchor.style.pointerEvents = "none", shadowDomAnchor.style.zIndex = "2147483647";
  const eventBlocker = (ev) => {
    ev.stopPropagation();
  };
  shadowDomAnchor.onclick = eventBlocker, shadowDomAnchor.onmousedown = eventBlocker, shadowDomAnchor.onmouseup = eventBlocker, shadowDomAnchor.onmousemove = eventBlocker, shadowDomAnchor.ondblclick = eventBlocker, shadowDomAnchor.oncontextmenu = eventBlocker, shadowDomAnchor.onwheel = eventBlocker, shadowDomAnchor.onfocus = eventBlocker, shadowDomAnchor.onblur = eventBlocker, document.body.appendChild(shadowDomAnchor);
  const fontLinkNode = document.createElement("link");
  fontLinkNode.rel = "stylesheet", fontLinkNode.href = "https://rsms.me/inter/inter.css", document.head.appendChild(fontLinkNode);
  const styleNode = document.createElement("style");
  styleNode.append(document.createTextNode(appStyle)), document.head.appendChild(styleNode), E$2(_$3(App, config), shadowDomAnchor);
}
export {
  initToolbar
};
