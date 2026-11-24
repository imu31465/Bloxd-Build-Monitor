/*! For license information please see sn3sfj.120.2edef259.chunk.js.LICENSE.txt */
export const id = 120;
export const ids = [120];
export const modules = {
  6564: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      Graph: () => hp,
      debug: () => lc,
      default: () => Jc,
      graphlib: () => Ip,
      layout: () => wc,
      util: () => Qc,
      version: () => xi
    });
    var Op = Object.defineProperty,
      op = (pp, ip, cp) => ((pp, ip, cp) => ip in pp ? Op(pp, ip, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: cp
      }) : pp[ip] = cp)(pp, "symbol" != typeof ip ? ip + "" : ip, cp),
      Ip = {};
    ((pp, ip) => {
      for (var cp in ip) Op(pp, cp, {
        get: ip[cp],
        enumerable: !0
      })
    })(Ip, {
      Graph: () => hp,
      alg: () => vp
    });
    var Sp = Object.defineProperty,
      xp = (pp, ip) => {
        for (var cp in ip) Sp(pp, cp, {
          get: ip[cp],
          enumerable: !0
        })
      },
      Lp = class {
        constructor(pp) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, pp && (this._isDirected = !("directed" in pp) || pp.directed, this._isMultigraph = "multigraph" in pp && pp.multigraph, this._isCompound = "compound" in pp && pp.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
        }
        isDirected() {
          return this._isDirected
        }
        isMultigraph() {
          return this._isMultigraph
        }
        isCompound() {
          return this._isCompound
        }
        setGraph(pp) {
          return this._label = pp, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(pp) {
          return this._defaultNodeLabelFn = "function" != typeof pp ? () => pp : pp, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((pp => 0 === Object.keys(this._in[pp]).length))
        }
        sinks() {
          return this.nodes().filter((pp => 0 === Object.keys(this._out[pp]).length))
        }
        setNodes(pp, ip) {
          return pp.forEach((pp => {
            void 0 !== ip ? this.setNode(pp, ip) : this.setNode(pp)
          })), this
        }
        setNode(pp, ip) {
          return pp in this._nodes ? (arguments.length > 1 && (this._nodes[pp] = ip), this) : (this._nodes[pp] = arguments.length > 1 ? ip : this._defaultNodeLabelFn(pp), this._isCompound && (this._parent[pp] = "\0", this._children[pp] = {}, this._children["\0"][pp] = !0), this._in[pp] = {}, this._preds[pp] = {}, this._out[pp] = {}, this._sucs[pp] = {}, ++this._nodeCount, this)
        }
        node(pp) {
          return this._nodes[pp]
        }
        hasNode(pp) {
          return pp in this._nodes
        }
        removeNode(pp) {
          if (pp in this._nodes) {
            let ip = pp => this.removeEdge(this._edgeObjs[pp]);
            delete this._nodes[pp], this._isCompound && (this._removeFromParentsChildList(pp), delete this._parent[pp], this.children(pp).forEach((pp => {
              this.setParent(pp)
            })), delete this._children[pp]), Object.keys(this._in[pp]).forEach(ip), delete this._in[pp], delete this._preds[pp], Object.keys(this._out[pp]).forEach(ip), delete this._out[pp], delete this._sucs[pp], --this._nodeCount
          }
          return this
        }
        setParent(pp, ip) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === ip) ip = "\0";
          else {
            for (let cp = ip += ""; void 0 !== cp; cp = this.parent(cp))
              if (cp === pp) throw new Error("Setting " + ip + " as parent of " + pp + " would create a cycle");
            this.setNode(ip)
          }
          return this.setNode(pp), this._removeFromParentsChildList(pp), this._parent[pp] = ip, this._children[ip][pp] = !0, this
        }
        parent(pp) {
          if (this._isCompound) {
            let ip = this._parent[pp];
            if ("\0" !== ip) return ip
          }
        }
        children() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let ip = this._children[pp];
            if (ip) return Object.keys(ip)
          } else {
            if ("\0" === pp) return this.nodes();
            if (this.hasNode(pp)) return []
          }
          return []
        }
        predecessors(pp) {
          let ip = this._preds[pp];
          if (ip) return Object.keys(ip)
        }
        successors(pp) {
          let ip = this._sucs[pp];
          if (ip) return Object.keys(ip)
        }
        neighbors(pp) {
          let ip = this.predecessors(pp);
          if (ip) {
            let cp = new Set(ip),
              Op = this.successors(pp);
            if (Op)
              for (let pp of Op) cp.add(pp);
            return Array.from(cp.values())
          }
        }
        isLeaf(pp) {
          var ip;
          let cp;
          return cp = this.isDirected() ? this.successors(pp) : this.neighbors(pp), 0 === (null != (ip = null == cp ? void 0 : cp.length) ? ip : 0)
        }
        filterNodes(pp) {
          let ip = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          ip.setGraph(this.graph()), Object.entries(this._nodes).forEach((cp => {
            let [Op, op] = cp;
            pp(Op) && ip.setNode(Op, op)
          })), Object.values(this._edgeObjs).forEach((pp => {
            ip.hasNode(pp.v) && ip.hasNode(pp.w) && ip.setEdge(pp, this.edge(pp))
          }));
          let cp = {},
            Op = pp => {
              let op = this.parent(pp);
              return !op || ip.hasNode(op) ? (cp[pp] = op, op) : op in cp ? cp[op] : Op(op)
            };
          return this._isCompound && ip.nodes().forEach((pp => ip.setParent(pp, Op(pp)))), ip
        }
        setDefaultEdgeLabel(pp) {
          return this._defaultEdgeLabelFn = "function" != typeof pp ? () => pp : pp, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(pp, ip) {
          return pp.reduce(((pp, cp) => (void 0 !== ip ? this.setEdge(pp, cp, ip) : this.setEdge(pp, cp), cp))), this
        }
        setEdge(pp, ip, cp, Op) {
          let op, Ip, Sp, xp, Lp = !1;
          "object" == typeof pp && null !== pp && "v" in pp ? (op = pp.v, Ip = pp.w, Sp = pp.name, 2 === arguments.length && (xp = ip, Lp = !0)) : (op = pp, Ip = ip, Sp = Op, arguments.length > 2 && (xp = cp, Lp = !0)), op = "" + op, Ip = "" + Ip, void 0 !== Sp && (Sp = "" + Sp);
          let Dp = Ap(this._isDirected, op, Ip, Sp);
          if (Dp in this._edgeLabels) return Lp && (this._edgeLabels[Dp] = xp), this;
          if (void 0 !== Sp && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(op), this.setNode(Ip), this._edgeLabels[Dp] = Lp ? xp : this._defaultEdgeLabelFn(op, Ip, Sp);
          let Pp = function(pp, ip, cp, Op) {
            let op = "" + ip,
              Ip = "" + cp;
            if (!pp && op > Ip) {
              let pp = op;
              op = Ip, Ip = pp
            }
            let Sp = {
              v: op,
              w: Ip
            };
            return Op && (Sp.name = Op), Sp
          }(this._isDirected, op, Ip, Sp);
          return op = Pp.v, Ip = Pp.w, Object.freeze(Pp), this._edgeObjs[Dp] = Pp, Yp(this._preds[Ip], op), Yp(this._sucs[op], Ip), this._in[Ip][Dp] = Pp, this._out[op][Dp] = Pp, this._edgeCount++, this
        }
        edge(pp, ip, cp) {
          let Op = 1 === arguments.length ? Pp(this._isDirected, pp) : Ap(this._isDirected, pp, ip, cp);
          return this._edgeLabels[Op]
        }
        edgeAsObj(pp, ip, cp) {
          let Op = 1 === arguments.length ? this.edge(pp) : this.edge(pp, ip, cp);
          return "object" != typeof Op || null === Op ? {
            label: Op
          } : Op
        }
        hasEdge(pp, ip, cp) {
          return (1 === arguments.length ? Pp(this._isDirected, pp) : Ap(this._isDirected, pp, ip, cp)) in this._edgeLabels
        }
        removeEdge(pp, ip, cp) {
          let Op = 1 === arguments.length ? Pp(this._isDirected, pp) : Ap(this._isDirected, pp, ip, cp),
            op = this._edgeObjs[Op];
          if (op) {
            let pp = op.v,
              ip = op.w;
            delete this._edgeLabels[Op], delete this._edgeObjs[Op], Dp(this._preds[ip], pp), Dp(this._sucs[pp], ip), delete this._in[ip][Op], delete this._out[pp][Op], this._edgeCount--
          }
          return this
        }
        inEdges(pp, ip) {
          return this.isDirected() ? this.filterEdges(this._in[pp], pp, ip) : this.nodeEdges(pp, ip)
        }
        outEdges(pp, ip) {
          return this.isDirected() ? this.filterEdges(this._out[pp], pp, ip) : this.nodeEdges(pp, ip)
        }
        nodeEdges(pp, ip) {
          if (pp in this._nodes) return this.filterEdges({
            ...this._in[pp],
            ...this._out[pp]
          }, pp, ip)
        }
        _removeFromParentsChildList(pp) {
          delete this._children[this._parent[pp]][pp]
        }
        filterEdges(pp, ip, cp) {
          if (!pp) return;
          let Op = Object.values(pp);
          return cp ? Op.filter((pp => pp.v === ip && pp.w === cp || pp.v === cp && pp.w === ip)) : Op
        }
      };

    function Yp(pp, ip) {
      pp[ip] ? pp[ip]++ : pp[ip] = 1
    }

    function Dp(pp, ip) {
      void 0 !== pp[ip] && !--pp[ip] && delete pp[ip]
    }

    function Ap(pp, ip, cp, Op) {
      let op = "" + ip,
        Ip = "" + cp;
      if (!pp && op > Ip) {
        let pp = op;
        op = Ip, Ip = pp
      }
      return op + "\x01" + Ip + "\x01" + (void 0 === Op ? "\0" : Op)
    }

    function Pp(pp, ip) {
      return Ap(pp, ip.v, ip.w, ip.name)
    }

    function Wp(pp) {
      let ip = {
          options: {
            directed: pp.isDirected(),
            multigraph: pp.isMultigraph(),
            compound: pp.isCompound()
          },
          nodes: yp(pp),
          edges: Up(pp)
        },
        cp = pp.graph();
      return void 0 !== cp && (ip.value = structuredClone(cp)), ip
    }

    function yp(pp) {
      return pp.nodes().map((ip => {
        let cp = pp.node(ip),
          Op = pp.parent(ip),
          op = {
            v: ip
          };
        return void 0 !== cp && (op.value = cp), void 0 !== Op && (op.parent = Op), op
      }))
    }

    function Up(pp) {
      return pp.edges().map((ip => {
        let cp = pp.edge(ip),
          Op = {
            v: ip.v,
            w: ip.w
          };
        return void 0 !== ip.name && (Op.name = ip.name), void 0 !== cp && (Op.value = cp), Op
      }))
    }

    function wp(pp) {
      let ip = new Lp(pp.options);
      return void 0 !== pp.value && ip.setGraph(pp.value), pp.nodes.forEach((pp => {
        ip.setNode(pp.v, pp.value), pp.parent && ip.setParent(pp.v, pp.parent)
      })), pp.edges.forEach((pp => {
        ip.setEdge({
          v: pp.v,
          w: pp.w,
          name: pp.name
        }, pp.value)
      })), ip
    }
    xp({}, {
      read: () => wp,
      write: () => Wp
    });
    var vp = {};
    xp(vp, {
      CycleException: () => Ep,
      bellmanFord: () => Hp,
      components: () => dp,
      dijkstra: () => kp,
      dijkstraAll: () => mp,
      findCycles: () => qp,
      floydWarshall: () => Cp,
      isAcyclic: () => lp,
      postorder: () => Np,
      preorder: () => Tp,
      prim: () => fp,
      shortestPaths: () => bp,
      tarjan: () => Rp,
      topsort: () => Xp
    });
    var tp = () => 1;

    function Hp(pp, ip, cp, Op) {
      return function(pp, ip, cp, Op) {
        let op, Ip = {},
          Sp = 0,
          xp = pp.nodes(),
          Lp = function(pp) {
            let ip = Ip[pp.v],
              Op = Ip[pp.w];
            if (!ip || !Op) return;
            let Sp = cp(pp);
            ip.distance + Sp < Op.distance && (Ip[pp.w] = {
              distance: ip.distance + Sp,
              predecessor: pp.v
            }, op = !0)
          },
          Yp = function() {
            xp.forEach((function(pp) {
              Op(pp).forEach((function(ip) {
                let cp = ip.v === pp ? ip.v : ip.w,
                  Op = cp === ip.v ? ip.w : ip.v;
                Lp({
                  v: cp,
                  w: Op
                })
              }))
            }))
          };
        xp.forEach((function(pp) {
          let cp = pp === ip ? 0 : Number.POSITIVE_INFINITY;
          Ip[pp] = {
            distance: cp,
            predecessor: ""
          }
        }));
        let Dp = xp.length;
        for (let Ap = 1; Ap < Dp && (op = !1, Sp++, Yp(), op); Ap++);
        if (Sp === Dp - 1 && (op = !1, Yp(), op)) throw new Error("The graph contains a negative weight cycle");
        return Ip
      }(pp, String(ip), cp || tp, Op || function(ip) {
        var cp;
        return null != (cp = pp.outEdges(ip)) ? cp : []
      })
    }

    function dp(pp) {
      let ip, cp = {},
        Op = [];

      function op(Op) {
        var Ip, Sp;
        Op in cp || (cp[Op] = !0, ip.push(Op), null == (Ip = pp.successors(Op)) || Ip.forEach(op), null == (Sp = pp.predecessors(Op)) || Sp.forEach(op))
      }
      return pp.nodes().forEach((function(pp) {
        ip = [], op(pp), ip.length && Op.push(ip)
      })), Op
    }
    var ep = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((pp => pp.key))
        }
        has(pp) {
          return pp in this._keyIndices
        }
        priority(pp) {
          let ip = this._keyIndices[pp];
          if (void 0 !== ip) return this._arr[ip].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(pp, ip) {
          let cp = this._keyIndices,
            Op = String(pp);
          if (!(Op in cp)) {
            let pp = this._arr,
              op = pp.length;
            return cp[Op] = op, pp.push({
              key: Op,
              priority: ip
            }), this._decrease(op), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let pp = this._arr.pop();
          return delete this._keyIndices[pp.key], this._heapify(0), pp.key
        }
        decrease(pp, ip) {
          let cp = this._keyIndices[pp];
          if (void 0 === cp) throw new Error(`Key not found: ${pp}`);
          let Op = this._arr[cp].priority;
          if (ip > Op) throw new Error(`New priority is greater than current priority. Key: ${pp} Old: ${Op} New: ${ip}`);
          this._arr[cp].priority = ip, this._decrease(cp)
        }
        _heapify(pp) {
          let ip = this._arr,
            cp = 2 * pp,
            Op = cp + 1,
            op = pp;
          cp < ip.length && (op = ip[cp].priority < ip[op].priority ? cp : op, Op < ip.length && (op = ip[Op].priority < ip[op].priority ? Op : op), op !== pp && (this._swap(pp, op), this._heapify(op)))
        }
        _decrease(pp) {
          let ip, cp = this._arr,
            Op = cp[pp].priority;
          for (; 0 !== pp && (ip = pp >> 1, !(cp[ip].priority < Op));) this._swap(pp, ip), pp = ip
        }
        _swap(pp, ip) {
          let cp = this._arr,
            Op = this._keyIndices,
            op = cp[pp],
            Ip = cp[ip];
          cp[pp] = Ip, cp[ip] = op, Op[Ip.key] = pp, Op[op.key] = ip
        }
      },
      jp = () => 1;

    function kp(pp, ip, cp, Op) {
      return function(pp, ip, cp, Op) {
        let op, Ip, Sp = {},
          xp = new ep,
          Lp = function(pp) {
            let ip = pp.v !== op ? pp.v : pp.w,
              Op = Sp[ip];
            if (!Op) return;
            let Lp = cp(pp),
              Yp = Ip.distance + Lp;
            if (Lp < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + pp + " Weight: " + Lp);
            Yp < Op.distance && (Op.distance = Yp, Op.predecessor = op, xp.decrease(ip, Yp))
          };
        for (pp.nodes().forEach((function(pp) {
            let cp = pp === ip ? 0 : Number.POSITIVE_INFINITY;
            Sp[pp] = {
              distance: cp,
              predecessor: ""
            }, xp.add(pp, cp)
          })); xp.size() > 0;) {
          op = xp.removeMin();
          let pp = Sp[op];
          if (!pp || pp.distance === Number.POSITIVE_INFINITY) break;
          Ip = pp, Op(op).forEach(Lp)
        }
        return Sp
      }(pp, String(ip), cp || jp, Op || function(ip) {
        var cp;
        return null != (cp = pp.outEdges(ip)) ? cp : []
      })
    }

    function mp(pp, ip, cp) {
      return pp.nodes().reduce((function(Op, op) {
        return Op[op] = kp(pp, op, ip, cp), Op
      }), {})
    }

    function Rp(pp) {
      let ip = 0,
        cp = [],
        Op = {},
        op = [];

      function Ip(Sp) {
        var xp;
        let Lp = Op[Sp] = {
          onStack: !0,
          lowlink: ip,
          index: ip++
        };
        if (cp.push(Sp), null == (xp = pp.successors(Sp)) || xp.forEach((function(pp) {
            if (pp in Op) {
              let ip = Op[pp];
              null != ip && ip.onStack && (Lp.lowlink = Math.min(Lp.lowlink, ip.index))
            } else {
              Ip(pp);
              let ip = Op[pp];
              ip && (Lp.lowlink = Math.min(Lp.lowlink, ip.lowlink))
            }
          })), Lp.lowlink === Lp.index) {
          let pp, ip = [];
          do {
            pp = cp.pop();
            let op = Op[pp];
            op && (op.onStack = !1), ip.push(pp)
          } while (Sp !== pp);
          op.push(ip)
        }
      }
      return pp.nodes().forEach((function(pp) {
        pp in Op || Ip(pp)
      })), op
    }

    function qp(pp) {
      return Rp(pp).filter((function(ip) {
        var cp;
        let Op = ip[0];
        return !!Op && (ip.length > 1 || 1 === ip.length && (null != (cp = pp.outEdges(Op, Op)) ? cp : []).length > 0)
      }))
    }
    var Mp = () => 1;

    function Cp(pp, ip, cp) {
      return function(pp, ip, cp) {
        let Op = {},
          op = pp.nodes();
        return op.forEach((function(pp) {
          let Ip = {};
          Op[pp] = Ip, Ip[pp] = {
            distance: 0,
            predecessor: ""
          }, op.forEach((function(ip) {
            pp !== ip && (Ip[ip] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), cp(pp).forEach((function(cp) {
            let Op = cp.v === pp ? cp.w : cp.v,
              op = ip(cp);
            Ip[Op] = {
              distance: op,
              predecessor: pp
            }
          }))
        })), op.forEach((function(pp) {
          let ip = Op[pp];
          ip && op.forEach((function(cp) {
            let Ip = Op[cp];
            Ip && op.forEach((function(cp) {
              let Op = Ip[pp],
                op = ip[cp],
                Sp = Ip[cp];
              if (Op && op && Sp) {
                let pp = Op.distance + op.distance;
                pp < Sp.distance && (Sp.distance = pp, Sp.predecessor = op.predecessor)
              }
            }))
          }))
        })), Op
      }(pp, ip || Mp, cp || function(ip) {
        var cp;
        return null != (cp = pp.outEdges(ip)) ? cp : []
      })
    }
    var Ep = class extends Error {
      constructor(pp) {
        super(pp), this.name = "CycleException"
      }
    };

    function Xp(pp) {
      let ip = {},
        cp = {},
        Op = [];
      if (pp.sinks().forEach((function op(Ip) {
          var Sp;
          if (Ip in cp) throw new Ep;
          Ip in ip || (cp[Ip] = !0, ip[Ip] = !0, null == (Sp = pp.predecessors(Ip)) || Sp.forEach(op), delete cp[Ip], Op.push(Ip))
        })), Object.keys(ip).length !== pp.nodeCount()) throw new Ep;
      return Op
    }

    function lp(pp) {
      try {
        Xp(pp)
      } catch (ip) {
        if (ip instanceof Ep) return !1;
        throw ip
      }
      return !0
    }

    function Qp(pp, ip, cp, Op, op) {
      Array.isArray(ip) || (ip = [ip]);
      let Ip = ip => {
          var cp;
          return null != (cp = pp.isDirected() ? pp.successors(ip) : pp.neighbors(ip)) ? cp : []
        },
        Sp = {};
      return ip.forEach((function(ip) {
        if (!pp.hasNode(ip)) throw new Error("Graph does not have node: " + ip);
        op = Jp(pp, ip, "post" === cp, Sp, Ip, Op, op)
      })), op
    }

    function Jp(pp, ip, cp, Op, op, Ip, Sp) {
      return ip in Op || (Op[ip] = !0, cp || (Sp = Ip(Sp, ip)), op(ip).forEach((function(ip) {
        Sp = Jp(pp, ip, cp, Op, op, Ip, Sp)
      })), cp && (Sp = Ip(Sp, ip))), Sp
    }

    function Bp(pp, ip, cp) {
      return Qp(pp, ip, cp, (function(pp, ip) {
        return pp.push(ip), pp
      }), [])
    }

    function Np(pp, ip) {
      return Bp(pp, ip, "post")
    }

    function Tp(pp, ip) {
      return Bp(pp, ip, "pre")
    }

    function fp(pp, ip) {
      var cp;
      let Op, op = new Lp,
        Ip = {},
        Sp = new ep;

      function xp(pp) {
        let cp = pp.v === Op ? pp.w : pp.v,
          op = Sp.priority(cp);
        if (void 0 !== op) {
          let xp = ip(pp);
          xp < op && (Ip[cp] = Op, Sp.decrease(cp, xp))
        }
      }
      if (0 === pp.nodeCount()) return op;
      pp.nodes().forEach((function(pp) {
        Sp.add(pp, Number.POSITIVE_INFINITY), op.setNode(pp)
      }));
      let Yp = pp.nodes()[0];
      void 0 !== Yp && Sp.decrease(Yp, 0);
      let Dp = !1;
      for (; Sp.size() > 0;) {
        if (Op = Sp.removeMin(), Op in Ip) op.setEdge(Op, Ip[Op]);
        else {
          if (Dp) throw new Error("Input graph is not connected: " + pp);
          Dp = !0
        }
        null == (cp = pp.nodeEdges(Op)) || cp.forEach(xp)
      }
      return op
    }

    function bp(pp, ip, cp, Op) {
      return function(pp, ip, cp, Op) {
        if (void 0 === cp) return kp(pp, ip, cp, Op);
        let op = !1,
          Ip = pp.nodes();
        for (let Sp = 0; Sp < Ip.length; Sp++) {
          let xp = Ip[Sp];
          if (void 0 === xp) continue;
          let Lp = Op(xp);
          for (let pp = 0; pp < Lp.length; pp++) {
            let ip = Lp[pp];
            if (!ip) continue;
            let Op = ip.v === xp ? ip.v : ip.w;
            cp({
              v: Op,
              w: Op === ip.v ? ip.w : ip.v
            }) < 0 && (op = !0)
          }
          if (op) return Hp(pp, ip, cp, Op)
        }
        return kp(pp, ip, cp, Op)
      }(pp, ip, cp, null != Op ? Op : ip => {
        var cp;
        return null != (cp = pp.outEdges(ip)) ? cp : []
      })
    }
    var hp = Lp;

    function ap(pp, ip, cp, Op) {
      let op = Op;
      for (; pp.hasNode(op);) op = ii(Op);
      return cp.dummy = ip, pp.setNode(op, cp), op
    }

    function np(pp) {
      let ip = new hp({
        multigraph: pp.isMultigraph()
      }).setGraph(pp.graph());
      return pp.nodes().forEach((cp => {
        pp.children(cp).length || ip.setNode(cp, pp.node(cp))
      })), pp.edges().forEach((cp => {
        ip.setEdge(cp, pp.edge(cp))
      })), ip
    }

    function Fp(pp, ip) {
      let cp, Op, op = pp.x,
        Ip = pp.y,
        Sp = ip.x - op,
        xp = ip.y - Ip,
        Lp = pp.width / 2,
        Yp = pp.height / 2;
      if (!Sp && !xp) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(xp) * Lp > Math.abs(Sp) * Yp ? (xp < 0 && (Yp = -Yp), cp = Yp * Sp / xp, Op = Yp) : (Sp < 0 && (Lp = -Lp), cp = Lp, Op = Lp * xp / Sp), {
        x: op + cp,
        y: Ip + Op
      }
    }

    function gp(pp) {
      let ip = ci(zp(pp) + 1).map((() => []));
      return pp.nodes().forEach((cp => {
        let Op = pp.node(cp),
          op = Op.rank;
        void 0 !== op && (ip[op] || (ip[op] = []), ip[op][Op.order] = cp)
      })), ip
    }

    function Gp(pp, ip, cp, Op) {
      let op = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (op.rank = cp, op.order = Op), ap(pp, "border", op, ip)
    }
    var rp = 65535;

    function Zp(pp, ip) {
      if (ip.length > rp) {
        let cp = function(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rp,
            cp = [];
          for (let Op = 0; Op < pp.length; Op += ip) {
            let op = pp.slice(Op, Op + ip);
            cp.push(op)
          }
          return cp
        }(ip);
        return pp(...cp.map((ip => pp(...ip))))
      }
      return pp(...ip)
    }

    function zp(pp) {
      let ip = pp.nodes().map((ip => {
        let cp = pp.node(ip).rank;
        return void 0 === cp ? Number.MIN_VALUE : cp
      }));
      return Zp(Math.max, ip)
    }

    function sp(pp, ip) {
      let cp = Date.now();
      try {
        return ip()
      } finally {
        console.log(pp + " time: " + (Date.now() - cp) + "ms")
      }
    }

    function Kp(pp, ip) {
      return ip()
    }
    var Vp = 0;

    function ii(pp) {
      return pp + "" + ++Vp
    }

    function ci(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == ip && (ip = pp, pp = 0);
      let Op = pp => pp < ip;
      cp < 0 && (Op = pp => ip < pp);
      let op = [];
      for (let Ip = pp; Op(Ip); Ip += cp) op.push(Ip);
      return op
    }

    function Oi(pp, ip) {
      let cp = {};
      for (let Op of ip) void 0 !== pp[Op] && (cp[Op] = pp[Op]);
      return cp
    }

    function oi(pp, ip) {
      let cp;
      return cp = "string" == typeof ip ? pp => pp[ip] : ip, Object.entries(pp).reduce(((pp, ip) => {
        let [Op, op] = ip;
        return pp[Op] = cp(op, Op), pp
      }), {})
    }
    var Ii = "\0";

    function Si(pp, ip, cp) {
      var Op, op, Ip, Sp, xp, Lp;
      if (!(pp && ip && cp && "edge" === ip.dummy && "edge" === cp.dummy && ip.edgeObj && cp.edgeObj && pp[ip.edgeObj.v] && pp[cp.edgeObj.v] && pp[ip.edgeObj.w] && pp[cp.edgeObj.w])) return 0;
      let Yp = !0;
      ip.edgeObj.w === cp.edgeObj.w && (Yp = !1);
      let Dp = Yp ? null != (op = null == (Op = pp[ip.edgeObj.v]) ? void 0 : Op.rank) ? op : NaN : null != (Sp = null == (Ip = pp[ip.edgeObj.w]) ? void 0 : Ip.rank) ? Sp : NaN,
        Ap = Object.entries(pp).find((pp => {
          var cp, Op;
          return (null == (cp = pp[1].edgeObj) ? void 0 : cp.v) === ip.edgeObj.v && (null == (Op = pp[1].edgeObj) ? void 0 : Op.w) === ip.edgeObj.w && pp[1].rank === Dp
        })),
        Pp = Object.entries(pp).find((pp => {
          var ip, Op;
          return (null == (ip = pp[1].edgeObj) ? void 0 : ip.v) === cp.edgeObj.v && (null == (Op = pp[1].edgeObj) ? void 0 : Op.w) === cp.edgeObj.w && pp[1].rank === Dp
        }));
      if (!Ap || !Pp) return 0;
      let Wp = null != (xp = Ap[1].order) ? xp : NaN,
        yp = null != (Lp = Pp[1].order) ? Lp : NaN;
      return isNaN(Wp - yp) ? 0 : Wp - yp
    }
    var xi = "3.1.1";

    function Li(pp) {
      pp._prev._next = pp._next, pp._next._prev = pp._prev, delete pp._next, delete pp._prev
    }

    function Yi(pp, ip) {
      if ("_next" !== pp && "_prev" !== pp) return ip
    }
    var Di = class {
        constructor() {
          op(this, "_sentinel");
          let pp = {};
          pp._next = pp._prev = pp, this._sentinel = pp
        }
        dequeue() {
          let pp = this._sentinel,
            ip = pp._prev;
          if (ip !== pp) return Li(ip), ip
        }
        enqueue(pp) {
          let ip = this._sentinel;
          pp._prev && pp._next && Li(pp), pp._next = ip._next, ip._next._prev = pp, ip._next = pp, pp._prev = ip
        }
        toString() {
          let pp = [],
            ip = this._sentinel,
            cp = ip._prev;
          for (; cp !== ip;) pp.push(JSON.stringify(cp, Yi)), cp = cp._prev;
          return "[" + pp.join(", ") + "]"
        }
      },
      Ai = () => 1;

    function Pi(pp, ip) {
      if (pp.nodeCount() <= 1) return [];
      let cp = function(pp, ip) {
        let cp = new hp,
          Op = 0,
          op = 0;
        pp.nodes().forEach((pp => {
          cp.setNode(pp, {
            v: pp,
            in: 0,
            out: 0
          })
        })), pp.edges().forEach((pp => {
          let Ip = cp.edge(pp.v, pp.w) || 0,
            Sp = ip(pp),
            xp = Ip + Sp;
          cp.setEdge(pp.v, pp.w, xp);
          let Lp = cp.node(pp.v),
            Yp = cp.node(pp.w);
          op = Math.max(op, Lp.out += Sp), Op = Math.max(Op, Yp.in += Sp)
        }));
        let Ip = function(pp) {
            let ip = [];
            for (let cp = 0; cp < pp; cp++) ip.push(cp);
            return ip
          }(op + Op + 3).map((() => new Di)),
          Sp = Op + 1;
        return cp.nodes().forEach((pp => {
          yi(Ip, Sp, cp.node(pp))
        })), {
          graph: cp,
          buckets: Ip,
          zeroIdx: Sp
        }
      }(pp, ip || Ai);
      return function(pp, ip, cp) {
        var Op;
        let op, Ip = [],
          Sp = ip[ip.length - 1],
          xp = ip[0];
        for (; pp.nodeCount();) {
          for (; op = xp.dequeue();) Wi(pp, ip, cp, op);
          for (; op = Sp.dequeue();) Wi(pp, ip, cp, op);
          if (pp.nodeCount())
            for (let Sp = ip.length - 2; Sp > 0; --Sp)
              if (op = null == (Op = ip[Sp]) ? void 0 : Op.dequeue(), op) {
                Ip = Ip.concat(Wi(pp, ip, cp, op, !0) || []);
                break
              }
        }
        return Ip
      }(cp.graph, cp.buckets, cp.zeroIdx).flatMap((ip => pp.outEdges(ip.v, ip.w) || []))
    }

    function Wi(pp, ip, cp, Op, op) {
      let Ip = [],
        Sp = op ? Ip : void 0;
      return (pp.inEdges(Op.v) || []).forEach((Op => {
        let Sp = pp.edge(Op),
          xp = pp.node(Op.v);
        op && Ip.push({
          v: Op.v,
          w: Op.w
        }), xp.out -= Sp, yi(ip, cp, xp)
      })), (pp.outEdges(Op.v) || []).forEach((Op => {
        let op = pp.edge(Op),
          Ip = Op.w,
          Sp = pp.node(Ip);
        Sp.in -= op, yi(ip, cp, Sp)
      })), pp.removeNode(Op.v), Sp
    }

    function yi(pp, ip, cp) {
      var Op, op, Ip;
      cp.out ? cp.in ? null == (Ip = pp[cp.out - cp.in + ip]) || Ip.enqueue(cp) : null == (op = pp[pp.length - 1]) || op.enqueue(cp) : null == (Op = pp[0]) || Op.enqueue(cp)
    }

    function Ui(pp, ip) {
      var cp;
      ("greedy" === pp.graph().acyclicer ? Pi(pp, (cp = pp, pp => cp.edge(pp).weight)) : function(pp, ip) {
        let cp = [],
          Op = {},
          op = {};

        function Ip(ip) {
          Object.hasOwn(op, ip) || (op[ip] = !0, Op[ip] = !0, pp.outEdges(ip).forEach((pp => {
            Object.hasOwn(Op, pp.w) ? cp.push(pp) : Ip(pp.w)
          })), delete Op[ip])
        }

        function Sp(Ip) {
          var xp;
          Object.hasOwn(op, Ip) || (op[Ip] = !0, Op[Ip] = !0, null == (xp = pp.outEdges(Ip)) || xp.forEach((op => {
            var xp, Lp;
            Object.hasOwn(Op, op.w) || (null == (xp = ip.node(Ip)) ? void 0 : xp.rank) > (null == (Lp = ip.node(op.w)) ? void 0 : Lp.rank) && function(pp, ip, cp) {
              let Op = new Set;

              function op(ip) {
                var Ip;
                if (pp.sources().includes(ip)) return !0;
                Op.add(ip);
                for (let Sp of null != (Ip = pp.inEdges(ip)) ? Ip : [])
                  if ((Sp.v !== cp.v || Sp.w !== cp.w) && !Op.has(Sp.v) && op(Sp.v)) return !0;
                return !1
              }
              return op(ip)
            }(pp, op.w, op) ? cp.push(op) : Sp(op.w)
          })), delete Op[Ip])
        }
        let xp = Ip;
        return ip && "function" == typeof ip.node && (xp = Sp), pp.sources().forEach(xp), pp.nodes().forEach(xp), cp
      }(pp, null != ip ? ip : null)).forEach((ip => {
        let cp = pp.edge(ip);
        pp.removeEdge(ip), cp.forwardName = ip.name, cp.reversed = !0, pp.setEdge(ip.w, ip.v, cp, ii("rev"))
      }))
    }

    function wi(pp) {
      pp.graph().dummyChains = [], pp.edges().forEach((ip => function(pp, ip) {
        let cp, Op, op, Ip = ip.v,
          Sp = pp.node(Ip).rank,
          xp = ip.w,
          Lp = pp.node(xp).rank,
          Yp = ip.name,
          Dp = pp.edge(ip),
          Ap = Dp.labelRank;
        if (Lp === Sp + 1) return;
        for (pp.removeEdge(ip), op = 0, ++Sp; Sp < Lp; ++op, ++Sp) Dp.points = [], Op = {
          width: 0,
          height: 0,
          edgeLabel: Dp,
          edgeObj: ip,
          rank: Sp
        }, cp = ap(pp, "edge", Op, "_d"), Sp === Ap && (Op.width = Dp.width, Op.height = Dp.height, Op.dummy = "edge-label", Op.labelpos = Dp.labelpos), pp.setEdge(Ip, cp, {
          weight: Dp.weight
        }, Yp), 0 === op && pp.graph().dummyChains.push(cp), Ip = cp;
        pp.setEdge(Ip, xp, {
          weight: Dp.weight
        }, Yp)
      }(pp, ip)))
    }

    function vi(pp) {
      let ip = {};
      pp.sources().forEach((function cp(Op) {
        let op = pp.node(Op);
        if (Object.hasOwn(ip, Op)) return op.rank;
        ip[Op] = !0;
        let Ip = pp.outEdges(Op),
          Sp = Ip ? Ip.map((ip => null == ip ? Number.POSITIVE_INFINITY : cp(ip.w) - pp.edge(ip).minlen)) : [],
          xp = Zp(Math.min, Sp);
        return xp === Number.POSITIVE_INFINITY && (xp = 0), op.rank = xp
      }))
    }

    function ti(pp, ip) {
      return pp.node(ip.w).rank - pp.node(ip.v).rank - pp.edge(ip).minlen
    }
    var Hi = function(pp) {
      let ip = new hp({
          directed: !1
        }),
        cp = pp.nodes();
      if (0 === cp.length) throw new Error("Graph must have at least one node");
      let Op, op, Ip = cp[0],
        Sp = pp.nodeCount();
      for (ip.setNode(Ip, {}); di(ip, pp) < Sp && (Op = ei(ip, pp), Op);) op = ip.hasNode(Op.v) ? ti(pp, Op) : -ti(pp, Op), ui(ip, pp, op);
      return ip
    };

    function di(pp, ip) {
      return pp.nodes().forEach((function cp(Op) {
        let op = ip.nodeEdges(Op);
        op && op.forEach((op => {
          let Ip = op.v,
            Sp = Op === Ip ? op.w : Ip;
          !pp.hasNode(Sp) && !ti(ip, op) && (pp.setNode(Sp, {}), pp.setEdge(Op, Sp, {}), cp(Sp))
        }))
      })), pp.nodeCount()
    }

    function ei(pp, ip) {
      return ip.edges().reduce(((cp, Op) => {
        let op = Number.POSITIVE_INFINITY;
        return pp.hasNode(Op.v) !== pp.hasNode(Op.w) && (op = ti(ip, Op)), op < cp[0] ? [op, Op] : cp
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function ui(pp, ip, cp) {
      pp.nodes().forEach((pp => ip.node(pp).rank += cp))
    }
    var {
      preorder: ji,
      postorder: ki
    } = vp, mi = Ri;

    function Ri(pp) {
      pp = function(pp) {
        let ip = (new hp).setGraph(pp.graph());
        return pp.nodes().forEach((cp => ip.setNode(cp, pp.node(cp)))), pp.edges().forEach((cp => {
          let Op = ip.edge(cp.v, cp.w) || {
              weight: 0,
              minlen: 1
            },
            op = pp.edge(cp);
          ip.setEdge(cp.v, cp.w, {
            weight: Op.weight + op.weight,
            minlen: Math.max(Op.minlen, op.minlen)
          })
        })), ip
      }(pp), vi(pp);
      let ip, cp, Op = Hi(pp);
      for (Ci(Op), qi(Op, pp); ip = Xi(Op);) cp = li(Op, pp, ip), Qi(Op, pp, ip, cp)
    }

    function qi(pp, ip) {
      let cp = ki(pp, pp.nodes());
      cp = cp.slice(0, cp.length - 1), cp.forEach((cp => function(pp, ip, cp) {
        let Op = pp.node(cp).parent,
          op = pp.edge(cp, Op);
        op.cutvalue = Mi(pp, ip, cp)
      }(pp, ip, cp)))
    }

    function Mi(pp, ip, cp) {
      let Op = pp.node(cp).parent,
        op = !0,
        Ip = ip.edge(cp, Op),
        Sp = 0;
      Ip || (op = !1, Ip = ip.edge(Op, cp)), Sp = Ip.weight;
      let xp = ip.nodeEdges(cp);
      return xp && xp.forEach((Ip => {
        let xp = Ip.v === cp,
          Lp = xp ? Ip.w : Ip.v;
        if (Lp !== Op) {
          let Op = xp === op,
            Yp = ip.edge(Ip).weight;
          if (Sp += Op ? Yp : -Yp, function(pp, ip, cp) {
              return pp.hasEdge(ip, cp)
            }(pp, cp, Lp)) {
            let ip = pp.edge(cp, Lp).cutvalue;
            Sp += Op ? -ip : ip
          }
        }
      })), Sp
    }

    function Ci(pp, ip) {
      arguments.length < 2 && (ip = pp.nodes()[0]), Ei(pp, {}, 1, ip)
    }

    function Ei(pp, ip, cp, Op, op) {
      let Ip = cp,
        Sp = pp.node(Op);
      ip[Op] = !0;
      let xp = pp.neighbors(Op);
      return xp && xp.forEach((op => {
        Object.hasOwn(ip, op) || (cp = Ei(pp, ip, cp, op, Op))
      })), Sp.low = Ip, Sp.lim = cp++, op ? Sp.parent = op : delete Sp.parent, cp
    }

    function Xi(pp) {
      return pp.edges().find((ip => pp.edge(ip).cutvalue < 0))
    }

    function li(pp, ip, cp) {
      let Op = cp.v,
        op = cp.w;
      ip.hasEdge(Op, op) || (Op = cp.w, op = cp.v);
      let Ip = pp.node(Op),
        Sp = pp.node(op),
        xp = Ip,
        Lp = !1;
      return Ip.lim > Sp.lim && (xp = Sp, Lp = !0), ip.edges().filter((ip => Lp === Ji(pp, pp.node(ip.v), xp) && Lp !== Ji(pp, pp.node(ip.w), xp))).reduce(((pp, cp) => ti(ip, cp) < ti(ip, pp) ? cp : pp))
    }

    function Qi(pp, ip, cp, Op) {
      let op = cp.v,
        Ip = cp.w;
      pp.removeEdge(op, Ip), pp.setEdge(Op.v, Op.w, {}), Ci(pp), qi(pp, ip),
        function(pp, ip) {
          let cp = pp.nodes().find((ip => !pp.node(ip).parent));
          if (!cp) return;
          let Op = ji(pp, [cp]);
          Op = Op.slice(1), Op.forEach((cp => {
            let Op = pp.node(cp).parent,
              op = ip.edge(cp, Op),
              Ip = !1;
            op || (op = ip.edge(Op, cp), Ip = !0), ip.node(cp).rank = ip.node(Op).rank + (Ip ? op.minlen : -op.minlen)
          }))
        }(pp, ip)
    }

    function Ji(pp, ip, cp) {
      return cp.low <= ip.lim && ip.lim <= cp.lim
    }
    Ri.initLowLimValues = Ci, Ri.initCutValues = qi, Ri.calcCutValue = Mi, Ri.leaveEdge = Xi, Ri.enterEdge = li, Ri.exchangeEdges = Qi;
    var Bi = function(pp) {
      let ip = pp.graph().ranker;
      if ("function" == typeof ip) return ip(pp);
      switch (ip) {
        case "network-simplex":
        default:
          Ti(pp);
          break;
        case "tight-tree":
          ! function(pp) {
            vi(pp), Hi(pp)
          }(pp);
          break;
        case "longest-path":
          Ni(pp);
        case "none":
      }
    };
    var Ni = vi;

    function Ti(pp) {
      mi(pp)
    }
    var fi = function(pp) {
      let ip = function(pp) {
          let ip = {},
            cp = 0;

          function Op(op) {
            let Ip = cp;
            pp.children(op).forEach(Op), ip[op] = {
              low: Ip,
              lim: cp++
            }
          }
          return pp.children(Ii).forEach(Op), ip
        }(pp),
        cp = pp.graph();
      if (!Array.isArray(cp.dummyChains)) return;
      cp.dummyChains.forEach((cp => {
        let Op = pp.node(cp),
          op = Op.edgeObj,
          Ip = function(pp, ip, cp, Op) {
            let op, Ip = [],
              Sp = [],
              xp = Math.min(ip[cp].low, ip[Op].low),
              Lp = Math.max(ip[cp].lim, ip[Op].lim);
            op = cp;
            do {
              op = pp.parent(op), Ip.push(op)
            } while (op && (ip[op].low > xp || Lp > ip[op].lim));
            let Yp = op,
              Dp = Op;
            for (;
              (Dp = pp.parent(Dp)) !== Yp;) Sp.push(Dp);
            return {
              path: Ip.concat(Sp.reverse()),
              lca: Yp
            }
          }(pp, ip, op.v, op.w),
          Sp = Ip.path,
          xp = Ip.lca,
          Lp = 0,
          Yp = Sp[Lp],
          Dp = !0;
        for (; cp !== op.w;) {
          if (Op = pp.node(cp), Dp) {
            for (;
              (Yp = Sp[Lp]) !== xp && pp.node(Yp).maxRank < Op.rank;) Lp++;
            Yp === xp && (Dp = !1)
          }
          if (!Dp) {
            for (; Lp < Sp.length - 1 && pp.node(Sp[Lp + 1]).minRank <= Op.rank;) Lp++;
            Yp = Sp[Lp]
          }
          void 0 !== Yp && pp.setParent(cp, Yp), cp = pp.successors(cp)[0]
        }
      }))
    };

    function bi(pp) {
      let ip = ap(pp, "root", {}, "_root"),
        cp = function(pp) {
          let ip = {};

          function cp(Op, op) {
            let Ip = pp.children(Op);
            Ip && Ip.length && Ip.forEach((pp => cp(pp, op + 1))), ip[Op] = op
          }
          return pp.children(Ii).forEach((pp => cp(pp, 1))), ip
        }(pp),
        Op = Object.values(cp),
        op = Zp(Math.max, Op) - 1,
        Ip = 2 * op + 1;
      pp.graph().nestingRoot = ip, pp.edges().forEach((ip => pp.edge(ip).minlen *= Ip));
      let Sp = function(pp) {
        return pp.edges().reduce(((ip, cp) => ip + pp.edge(cp).weight), 0)
      }(pp) + 1;
      pp.children(Ii).forEach((Op => {
        ai(pp, ip, Ip, Sp, op, cp, Op)
      })), pp.graph().nodeRankFactor = Ip
    }

    function ai(pp, ip, cp, Op, op, Ip, Sp) {
      var xp;
      let Lp = pp.children(Sp);
      if (!Lp.length) return void(Sp !== ip && pp.setEdge(ip, Sp, {
        weight: 0,
        minlen: cp
      }));
      let Yp = Gp(pp, "_bt"),
        Dp = Gp(pp, "_bb"),
        Ap = pp.node(Sp);
      pp.setParent(Yp, Sp), Ap.borderTop = Yp, pp.setParent(Dp, Sp), Ap.borderBottom = Dp, Lp.forEach((xp => {
        var Lp;
        ai(pp, ip, cp, Op, op, Ip, xp);
        let Ap = pp.node(xp),
          Pp = Ap.borderTop ? Ap.borderTop : xp,
          Wp = Ap.borderBottom ? Ap.borderBottom : xp,
          yp = Ap.borderTop ? Op : 2 * Op,
          Up = Pp !== Wp ? 1 : op - (null != (Lp = Ip[Sp]) ? Lp : 0) + 1;
        pp.setEdge(Yp, Pp, {
          weight: yp,
          minlen: Up,
          nestingEdge: !0
        }), pp.setEdge(Wp, Dp, {
          weight: yp,
          minlen: Up,
          nestingEdge: !0
        })
      })), pp.parent(Sp) || pp.setEdge(ip, Yp, {
        weight: 0,
        minlen: op + (null != (xp = Ip[Sp]) ? xp : 0)
      })
    }
    var ni = function(pp) {
      pp.children(Ii).forEach((function ip(cp) {
        let Op = pp.children(cp),
          op = pp.node(cp);
        if (Op.length && Op.forEach(ip), op && Object.hasOwn(op, "minRank")) {
          op.borderLeft = [], op.borderRight = [];
          for (let ip = op.minRank, Op = op.maxRank + 1; ip < Op; ++ip) Fi(pp, "borderLeft", "_bl", cp, op, ip), Fi(pp, "borderRight", "_br", cp, op, ip)
        }
      }))
    };

    function Fi(pp, ip, cp, Op, op, Ip) {
      let Sp = {
          width: 0,
          height: 0,
          rank: Ip,
          borderType: ip
        },
        xp = op[ip][Ip - 1],
        Lp = ap(pp, "border", Sp, cp);
      op[ip][Ip] = Lp, pp.setParent(Lp, Op), xp && pp.setEdge(xp, Lp, {
        weight: 1
      })
    }

    function gi(pp) {
      var ip;
      let cp = null == (ip = pp.graph().rankdir) ? void 0 : ip.toLowerCase();
      ("bt" === cp || "rl" === cp) && function(pp) {
        pp.nodes().forEach((ip => Zi(pp.node(ip)))), pp.edges().forEach((ip => {
          var cp;
          let Op = pp.edge(ip);
          null == (cp = Op.points) || cp.forEach(Zi), Object.hasOwn(Op, "y") && Zi(Op)
        }))
      }(pp), ("lr" === cp || "rl" === cp) && (function(pp) {
        pp.nodes().forEach((ip => zi(pp.node(ip)))), pp.edges().forEach((ip => {
          var cp;
          let Op = pp.edge(ip);
          null == (cp = Op.points) || cp.forEach(zi), Object.hasOwn(Op, "x") && zi(Op)
        }))
      }(pp), Gi(pp))
    }

    function Gi(pp) {
      pp.nodes().forEach((ip => ri(pp.node(ip)))), pp.edges().forEach((ip => ri(pp.edge(ip))))
    }

    function ri(pp) {
      let ip = pp.width;
      pp.width = pp.height, pp.height = ip
    }

    function Zi(pp) {
      pp.y = -pp.y
    }

    function zi(pp) {
      let ip = pp.x;
      pp.x = pp.y, pp.y = ip
    }

    function si(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        cp = {},
        Op = pp.nodes().filter((ip => !pp.children(ip).length)),
        op = Op.map((ip => pp.node(ip).rank)),
        Ip = ci(Zp(Math.max, op) + 1).map((() => []));
      return Op.sort(((ip, cp) => pp.node(ip).rank - pp.node(cp).rank)).forEach((function Op(op) {
        if (cp[op]) return;
        cp[op] = !0;
        let Sp = pp.node(op);
        Ip[Sp.rank].push(op);
        let xp = pp.successors(op);
        xp && [...xp].sort(((cp, Op) => function(cp, Op) {
          let op = pp.node(cp),
            Ip = pp.node(Op);
          return Si(ip, op, Ip)
        }(cp, Op))).forEach(Op)
      })), Ip
    }

    function Ki(pp, ip) {
      let cp = 0;
      for (let Op = 1; Op < ip.length; ++Op) cp += Vi(pp, ip[Op - 1], ip[Op]);
      return cp
    }

    function Vi(pp, ip, cp) {
      let Op = function(pp, ip) {
          return pp.reduce(((pp, cp, Op) => (pp[cp] = ip[Op], pp)), {})
        }(cp, cp.map(((pp, ip) => ip))),
        op = ip.flatMap((ip => {
          let cp = pp.outEdges(ip);
          return cp ? cp.map((ip => ({
            pos: Op[ip.w],
            weight: pp.edge(ip).weight
          }))).sort(((pp, ip) => pp.pos - ip.pos)) : []
        })),
        Ip = 1;
      for (; Ip < cp.length;) Ip <<= 1;
      let Sp = 2 * Ip - 1;
      Ip -= 1;
      let xp = new Array(Sp).fill(0),
        Lp = 0;
      return op.forEach((pp => {
        let ip = pp.pos + Ip;
        xp[ip] += pp.weight;
        let cp = 0;
        for (; ip > 0;) ip % 2 && (cp += xp[ip + 1]), ip = ip - 1 >> 1, xp[ip] += pp.weight;
        Lp += pp.weight * cp
      })), Lp
    }

    function pc(pp, ip) {
      let cp = {};
      return pp.forEach(((pp, ip) => {
          let Op = {
            indegree: 0,
            in: [],
            out: [],
            vs: [pp.v],
            i: ip
          };
          void 0 !== pp.barycenter && (Op.barycenter = pp.barycenter, Op.weight = pp.weight), cp[pp.v] = Op
        })), ip.edges().forEach((pp => {
          let ip = cp[pp.v],
            Op = cp[pp.w];
          void 0 !== ip && void 0 !== Op && (Op.indegree++, ip.out.push(Op))
        })),
        function(pp) {
          let ip = [];

          function cp(pp) {
            return ip => {
              ip.merged || (void 0 === ip.barycenter || void 0 === pp.barycenter || ip.barycenter >= pp.barycenter) && function(pp, ip) {
                let cp = 0,
                  Op = 0;
                pp.weight && (cp += pp.barycenter * pp.weight, Op += pp.weight), ip.weight && (cp += ip.barycenter * ip.weight, Op += ip.weight), pp.vs = ip.vs.concat(pp.vs), pp.barycenter = cp / Op, pp.weight = Op, pp.i = Math.min(ip.i, pp.i), ip.merged = !0
              }(pp, ip)
            }
          }

          function Op(ip) {
            return cp => {
              cp.in.push(ip), 0 === --cp.indegree && pp.push(cp)
            }
          }
          for (; pp.length;) {
            let op = pp.pop();
            ip.push(op), op.in.reverse().forEach(cp(op)), op.out.forEach(Op(op))
          }
          return ip.filter((pp => !pp.merged)).map((pp => Oi(pp, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(cp).filter((pp => !pp.indegree)))
    }

    function ic(pp, ip, cp, Op, op) {
      let Ip = {},
        Sp = null,
        xp = null,
        Lp = op;
      "boolean" == typeof ip ? (Lp = ip, Ip = {}) : ip && (Ip = ip, Sp = null != cp ? cp : null, xp = null != Op ? Op : null);
      let Yp = function(pp, ip) {
          let cp = {
            lhs: [],
            rhs: []
          };
          return pp.forEach((pp => {
            ip(pp) ? cp.lhs.push(pp) : cp.rhs.push(pp)
          })), cp
        }(pp, (pp => Object.hasOwn(pp, "barycenter"))),
        Dp = Yp.lhs,
        Ap = Yp.rhs.sort(((pp, ip) => ip.i - pp.i)),
        Pp = [],
        Wp = 0,
        yp = 0,
        Up = 0;
      Dp.sort(function(pp, ip, cp) {
        return (Op, op) => {
          if (Op.barycenter < op.barycenter) return -1;
          if (Op.barycenter > op.barycenter) return 1;
          if (pp && ("string" == typeof Op.vs[0] || "string" == typeof op.vs[0])) {
            let cp = pp.node(Op.vs[0]),
              Ip = pp.node(op.vs[0]),
              Sp = Si(ip, cp, Ip);
            if (0 !== Sp) return Sp
          }
          return cp ? op.i - Op.i : Op.i - op.i
        }
      }(xp, Sp, !!Lp));
      for (let [vp, tp] of Object.entries(Ip)) {
        let pp = Dp.findIndex((pp => pp.vs[0] === vp));
        Dp.splice(pp + 1, 0, tp)
      }
      Up = cc(Pp, Ap, Up), Dp.forEach((pp => {
        Up += pp.vs.length, Pp.push(pp.vs), Wp += pp.barycenter * pp.weight, yp += pp.weight, Up = cc(Pp, Ap, Up)
      }));
      let wp = {
        vs: Pp.flat(1)
      };
      return yp && (wp.barycenter = Wp / yp, wp.weight = yp), wp
    }

    function cc(pp, ip, cp) {
      let Op;
      for (; ip.length && (Op = ip[ip.length - 1]).i <= cp;) ip.pop(), pp.push(Op.vs), cp++;
      return cp
    }

    function Oc(pp, ip, cp, Op, op) {
      var Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up;
      let wp = null,
        vp = op;
      "boolean" == typeof Op ? (vp = Op, wp = null) : void 0 !== Op && (wp = Op);
      let tp = pp.children(ip),
        Hp = pp.node(ip),
        dp = Hp ? Hp.borderLeft : void 0,
        ep = Hp ? Hp.borderRight : void 0,
        jp = {};
      dp && (tp = tp.filter((pp => pp !== dp && pp !== ep)));
      let kp = function(pp) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((ip => {
          let cp = pp.inEdges(ip);
          if (!cp || !cp.length) return {
            v: ip
          };
          {
            let Op = cp.reduce(((ip, cp) => {
              let Op = pp.edge(cp),
                op = pp.node(cp.v);
              return {
                sum: ip.sum + Op.weight * op.order,
                weight: ip.weight + Op.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: ip,
              barycenter: Op.sum / Op.weight,
              weight: Op.weight
            }
          }
        }))
      }(pp, tp);
      kp.forEach((ip => {
        if (pp.children(ip.v).length) {
          let {
            result: Op
          } = Oc(pp, ip.v, cp, wp, vp);
          jp[ip.v] = Op, Object.hasOwn(Op, "barycenter") && function(pp, ip) {
            void 0 !== pp.barycenter ? (pp.barycenter = (pp.barycenter * pp.weight + ip.barycenter * ip.weight) / (pp.weight + ip.weight), pp.weight += ip.weight) : (pp.barycenter = ip.barycenter, pp.weight = ip.weight)
          }(ip, Op)
        }
      }));
      let mp = pc(kp, cp);
      ! function(pp, ip) {
        pp.forEach((pp => {
          pp.vs = pp.vs.flatMap((pp => ip[pp] ? ip[pp].vs : pp))
        }))
      }(mp, jp);
      let Rp = {},
        qp = !1;
      for (let Cp = 0; Cp < mp.length; Cp++)
        for (let ip = Cp + 1; ip < mp.length; ip++)
          if (mp[Cp] && mp[ip] && null != (Ip = mp[Cp]) && Ip.barycenter && null != (Sp = mp[ip]) && Sp.barycenter && (null == (xp = mp[Cp]) ? void 0 : xp.barycenter) === mp[ip].barycenter) {
            let cp = null != (Yp = null == (Lp = mp[Cp]) ? void 0 : Lp.vs[0]) ? Yp : "",
              Op = null != (Ap = null == (Dp = mp[ip]) ? void 0 : Dp.vs[0]) ? Ap : "",
              op = pp.node(cp),
              Ip = pp.node(Op);
            if ("edge" === op.dummy && "edge" === Ip.dummy && (null == (Pp = op.edgeObj) ? void 0 : Pp.v) === (null == (Wp = Ip.edgeObj) ? void 0 : Wp.v) && (null == (yp = op.edgeObj) ? void 0 : yp.w) === (null == (Up = Ip.edgeObj) ? void 0 : Up.w)) {
              if (op.edgeLabel.reversed) {
                Rp[Op] = mp[Cp], mp.splice(Cp, 1), Cp--;
                break
              }
              Rp[cp] = mp[ip], mp.splice(ip, 1), ip--
            } else qp = !0
          } let Mp = ic(mp, Rp, wp, pp, vp);
      if (dp && ep) {
        Mp.vs = [dp, Mp.vs, ep].flat(1);
        let ip = pp.predecessors(dp);
        if (ip && ip.length) {
          let cp = pp.node(ip[0]),
            Op = pp.predecessors(ep),
            op = pp.node(Op[0]);
          Object.hasOwn(Mp, "barycenter") || (Mp.barycenter = 0, Mp.weight = 0), Mp.barycenter = (Mp.barycenter * Mp.weight + cp.order + op.order) / (Mp.weight + 2), Mp.weight += 2
        }
      }
      return Object.defineProperty(Mp, "result", {
        value: Mp,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Mp, "usedBias", {
        value: qp,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Mp
    }

    function oc(pp, ip, cp, Op) {
      Op || (Op = pp.nodes());
      let op = function(pp) {
          let ip;
          for (; pp.hasNode(ip = ii("_root")););
          return ip
        }(pp),
        Ip = new hp({
          compound: !0
        }).setGraph({
          root: op
        }).setDefaultNodeLabel((ip => pp.node(ip)));
      return Op.forEach((Op => {
        let Sp = pp.node(Op),
          xp = pp.parent(Op);
        if (Sp.rank === ip || Sp.minRank <= ip && ip <= Sp.maxRank) {
          Ip.setNode(Op), Ip.setParent(Op, xp || op);
          let Lp = pp[cp](Op);
          Lp && Lp.forEach((ip => {
            let cp = ip.v === Op ? ip.w : ip.v,
              op = Ip.edge(cp, Op),
              Sp = void 0 !== op ? op.weight : 0;
            Ip.setEdge(cp, Op, {
              weight: pp.edge(ip).weight + Sp
            })
          })), Object.hasOwn(Sp, "minRank") && Ip.setNode(Op, {
            borderLeft: Sp.borderLeft[ip],
            borderRight: Sp.borderRight[ip]
          })
        }
      })), Ip
    }

    function Ic(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof ip.customOrder) return void ip.customOrder(pp, Ic);
      let Op = zp(pp),
        op = Sc(pp, ci(1, Op + 1), "inEdges"),
        Ip = Sc(pp, ci(Op - 1, -1, -1), "outEdges"),
        Sp = si(pp, cp);
      if (Lc(pp, Sp), ip.disableOptimalOrderHeuristic) return;
      let xp, Lp = Number.POSITIVE_INFINITY,
        Yp = ip.constraints || [];
      for (let Dp = 0, Ap = 0; Ap < 4; ++Dp, ++Ap) {
        xc(Dp % 2 ? op : Ip, Dp % 4 >= 2, Yp, cp), Sp = gp(pp);
        let ip = Ki(pp, Sp);
        ip < Lp ? (Ap = 0, xp = Object.assign({}, Sp), Lp = ip) : ip === Lp && (xp = structuredClone(Sp))
      }
      Lc(pp, xp)
    }

    function Sc(pp, ip, cp) {
      let Op = new Map,
        op = (pp, ip) => {
          Op.has(pp) || Op.set(pp, []), Op.get(pp).push(ip)
        };
      for (let Ip of pp.nodes()) {
        let ip = pp.node(Ip);
        if ("number" == typeof ip.rank && op(ip.rank, Ip), "number" == typeof ip.minRank && "number" == typeof ip.maxRank)
          for (let pp = ip.minRank; pp <= ip.maxRank; pp++) pp !== ip.rank && op(pp, Ip)
      }
      return ip.map((function(ip) {
        return oc(pp, ip, cp, Op.get(ip) || [])
      }))
    }

    function xc(pp, ip, cp, Op) {
      let op = !0,
        Ip = new hp;
      pp.forEach((function(pp) {
        cp.forEach((pp => Ip.setEdge(pp.left, pp.right)));
        let Sp = pp.graph().root,
          {
            result: xp,
            usedBias: Lp
          } = Oc(pp, Sp, Ip, Op, op);
        ip && Lp && (op = !op), xp.vs.forEach(((ip, cp) => pp.node(ip).order = cp)),
          function(pp, ip, cp) {
            let Op, op = {};
            cp.forEach((cp => {
              let Ip, Sp, xp = pp.parent(cp);
              for (; xp;) {
                if (Ip = pp.parent(xp), Ip ? (Sp = op[Ip], op[Ip] = xp) : (Sp = Op, Op = xp), Sp && Sp !== xp) return void ip.setEdge(Sp, xp);
                xp = Ip
              }
            }))
          }(pp, Ip, xp.vs)
      }))
    }

    function Lc(pp, ip) {
      Object.values(ip).forEach((ip => ip.forEach(((ip, cp) => pp.node(ip).order = cp))))
    }

    function Yc(pp, ip, cp) {
      if (ip > cp) {
        let pp = ip;
        ip = cp, cp = pp
      }
      let Op = pp[ip];
      Op || (pp[ip] = Op = {}), Op[cp] = !0
    }

    function Dc(pp, ip, cp) {
      if (ip > cp) {
        let pp = ip;
        ip = cp, cp = pp
      }
      let Op = pp[ip];
      return void 0 !== Op && Object.hasOwn(Op, cp)
    }

    function Ac(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Ip = {},
        Sp = function(pp, ip, cp, Op) {
          let op = new hp,
            Ip = pp.graph(),
            Sp = function(pp, ip, cp) {
              return (Op, op, Ip) => {
                let Sp, xp = Op.node(op),
                  Lp = Op.node(Ip),
                  Yp = 0;
                if (Yp += xp.width / 2, Object.hasOwn(xp, "labelpos")) switch (xp.labelpos.toLowerCase()) {
                  case "l":
                    Sp = -xp.width / 2;
                    break;
                  case "r":
                    Sp = xp.width / 2
                }
                if (Sp && (Yp += cp ? Sp : -Sp), Sp = void 0, Yp += (xp.dummy ? ip : pp) / 2, Yp += (Lp.dummy ? ip : pp) / 2, Yp += Lp.width / 2, Object.hasOwn(Lp, "labelpos")) switch (Lp.labelpos.toLowerCase()) {
                  case "l":
                    Sp = Lp.width / 2;
                    break;
                  case "r":
                    Sp = -Lp.width / 2
                }
                return Sp && (Yp += cp ? Sp : -Sp), Yp
              }
            }(Ip.nodesep, Ip.edgesep, Op);
          return ip.forEach((ip => {
            let Op;
            ip.forEach((ip => {
              let Ip = cp[ip];
              if (void 0 !== Ip) {
                if (op.setNode(Ip), void 0 !== Op) {
                  let xp = cp[Op];
                  if (void 0 !== xp) {
                    let cp = op.edge(xp, Ip);
                    op.setEdge(xp, Ip, Math.max(Sp(pp, ip, Op), cp || 0))
                  }
                }
                Op = ip
              }
            }))
          })), op
        }(pp, ip, cp, op),
        xp = op ? "borderLeft" : "borderRight";

      function Lp(pp, ip) {
        let cp = Sp.nodes().slice(),
          Op = {},
          op = cp.pop();
        for (; op;) {
          if (Op[op]) pp(op);
          else {
            Op[op] = !0, cp.push(op);
            for (let pp of ip(op)) cp.push(pp)
          }
          op = cp.pop()
        }
      }
      return Lp((function(pp) {
        let ip = Sp.inEdges(pp);
        Ip[pp] = ip ? ip.reduce(((pp, ip) => {
          var cp;
          let Op = null != (cp = Ip[ip.v]) ? cp : 0,
            op = Sp.edge(ip);
          return Math.max(pp, Op + (void 0 !== op ? op : 0))
        }), 0) : 0
      }), (function(pp) {
        return Sp.predecessors(pp) || []
      })), Lp((function(ip) {
        let cp = Sp.outEdges(ip),
          Op = Number.POSITIVE_INFINITY;
        cp && (Op = cp.reduce(((pp, ip) => {
          let cp = Ip[ip.w],
            Op = Sp.edge(ip);
          return Math.min(pp, (void 0 !== cp ? cp : 0) - (void 0 !== Op ? Op : 0))
        }), Number.POSITIVE_INFINITY));
        let op = pp.node(ip);
        Op !== Number.POSITIVE_INFINITY && op.borderType !== xp && (Ip[ip] = Math.max(void 0 !== Ip[ip] ? Ip[ip] : 0, Op))
      }), (function(pp) {
        return Sp.successors(pp) || []
      })), Object.keys(Op).forEach((pp => {
        var ip;
        let Op = cp[pp];
        void 0 !== Op && (Ip[pp] = null != (ip = Ip[Op]) ? ip : 0)
      })), Ip
    }

    function Pc(pp, ip) {
      let cp, Op = gp(pp),
        op = Object.assign(function(pp, ip) {
          let cp = {};
          return ip.length && ip.reduce((function(ip, Op) {
            let op = 0,
              Ip = 0,
              Sp = ip.length,
              xp = Op[Op.length - 1];
            return Op.forEach(((ip, Lp) => {
              let Yp = function(pp, ip) {
                  if (pp.node(ip).dummy) {
                    let cp = pp.predecessors(ip);
                    if (cp) return cp.find((ip => pp.node(ip).dummy))
                  }
                }(pp, ip),
                Dp = Yp ? pp.node(Yp).order : Sp;
              (Yp || ip === xp) && (Op.slice(Ip, Lp + 1).forEach((ip => {
                let Op = pp.predecessors(ip);
                Op && Op.forEach((Op => {
                  let Ip = pp.node(Op),
                    Sp = Ip.order;
                  (Sp < op || Dp < Sp) && (!Ip.dummy || !pp.node(ip).dummy) && Yc(cp, Op, ip)
                }))
              })), Ip = Lp + 1, op = Dp)
            })), Op
          })), cp
        }(pp, Op), function(pp, ip) {
          let cp = {};

          function Op(ip, Op, op, Ip, Sp) {
            ci(Op, op).forEach((Op => {
              let op = ip[Op];
              if (void 0 !== op && pp.node(op).dummy) {
                let ip = pp.predecessors(op);
                ip && ip.forEach((ip => {
                  if (void 0 === ip) return;
                  let Op = pp.node(ip);
                  Op.dummy && (Op.order < Ip || Op.order > Sp) && Yc(cp, ip, op)
                }))
              }
            }))
          }
          return ip.length && ip.reduce((function(ip, cp) {
            let op = -1,
              Ip = -1,
              Sp = 0;
            return cp.forEach(((xp, Lp) => {
              if ("border" === pp.node(xp).dummy) {
                let ip = pp.predecessors(xp);
                if (ip && ip.length) {
                  let xp = ip[0];
                  if (void 0 === xp) return;
                  Ip = pp.node(xp).order, Op(cp, Sp, Lp, op, Ip), Sp = Lp, op = Ip
                }
              }
              Op(cp, Sp, cp.length, Ip, ip.length)
            })), cp
          })), cp
        }(pp, Op)),
        Ip = {};
      ["u", "d"].forEach((Sp => {
        cp = "u" === Sp ? Op : Object.values(Op).reverse(), ["l", "r"].forEach((Op => {
          "r" === Op && (cp = cp.map((pp => Object.values(pp).reverse())));
          let xp = function(pp, ip, cp, Op, op) {
              let Ip = {},
                Sp = {},
                xp = {};
              return ip.forEach((pp => {
                pp.forEach(((pp, ip) => {
                  Ip[pp] = pp, Sp[pp] = pp, xp[pp] = ip
                }))
              })), ip.forEach((ip => {
                let Lp = -1,
                  Yp = -1,
                  Dp = !1,
                  Ap = ip,
                  Pp = ip.findIndex((ip => (null == op ? void 0 : op.includes(ip)) || Wc(ip, pp, op)));
                Pp > 0 && (Ap = [ip[Pp], ...ip.slice(0, Pp), ...ip.slice(Pp + 1)], Dp = !0), Ap.forEach((ip => {
                  var Ap;
                  let Pp = Op(ip);
                  if (Pp && Pp.length) {
                    null != op && op.includes(ip) && (Pp = Pp.filter((ip => Wc(ip, pp, op))));
                    let Op = Pp.sort(((pp, ip) => {
                        let cp = xp[pp],
                          Op = xp[ip];
                        return (void 0 !== cp ? cp : 0) - (void 0 !== Op ? Op : 0)
                      })),
                      Wp = (Op.length - 1) / 2;
                    for (let pp = Math.floor(Wp), op = Math.ceil(Wp); pp <= op; ++pp) {
                      let op = Op[pp];
                      if (void 0 === op) continue;
                      let Pp = xp[op];
                      if (void 0 !== Pp && Sp[ip] === ip && Lp < Pp && xp[op] !== Yp && !Dc(cp, ip, op)) {
                        let pp = Ip[op];
                        void 0 !== pp && (Sp[op] = ip, Sp[ip] = Ip[ip] = pp, Lp = Pp, Dp && (Lp = -1, Yp = null != (Ap = xp[op]) ? Ap : -1, Dp = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Ip,
                align: Sp
              }
            }(pp, cp, op, (ip => ("u" === Sp ? pp.predecessors(ip) : pp.successors(ip)) || []), ip),
            Lp = Ac(pp, cp, xp.root, xp.align, "r" === Op);
          "r" === Op && (Lp = oi(Lp, (pp => -pp))), Ip[Sp + Op] = Lp
        }))
      }));
      let Sp = function(pp, ip) {
        return Object.values(ip).reduce(((ip, cp) => {
          let Op = Number.NEGATIVE_INFINITY,
            op = Number.POSITIVE_INFINITY;
          Object.entries(cp).forEach((ip => {
            let [cp, Ip] = ip, Sp = function(pp, ip) {
              return pp.node(ip).width
            }(pp, cp) / 2;
            Op = Math.max(Ip + Sp, Op), op = Math.min(Ip - Sp, op)
          }));
          let Ip = Op - op;
          return Ip < ip[0] && (ip = [Ip, cp]), ip
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(pp, Ip);
      return function(pp, ip) {
          let cp = Object.values(ip),
            Op = Zp(Math.min, cp),
            op = Zp(Math.max, cp);
          ["u", "d"].forEach((cp => {
            ["l", "r"].forEach((Ip => {
              let Sp = cp + Ip,
                xp = pp[Sp];
              if (!xp || xp === ip) return;
              let Lp = Object.values(xp),
                Yp = Op - Zp(Math.min, Lp);
              "l" !== Ip && (Yp = op - Zp(Math.max, Lp)), Yp && (pp[Sp] = oi(xp, (pp => pp + Yp)))
            }))
          }))
        }(Ip, Sp),
        function(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            cp = pp.ul;
          return cp ? oi(cp, ((cp, Op) => {
            var op, Ip;
            if (ip) {
              let cp = ip.toLowerCase(),
                op = pp[cp];
              if (op && void 0 !== op[Op]) return op[Op]
            }
            let Sp = Object.values(pp).map((pp => {
              let ip = pp[Op];
              return void 0 !== ip ? ip : 0
            })).sort(((pp, ip) => pp - ip));
            return ((null != (op = Sp[1]) ? op : 0) + (null != (Ip = Sp[2]) ? Ip : 0)) / 2
          })) : {}
        }(Ip, pp.graph().align)
    }

    function Wc(pp, ip, cp) {
      var Op;
      if (!cp) return !1;
      let op = null == (Op = ip.node(pp)) ? void 0 : Op.edgeObj;
      if (!op || ip.node(pp).edgeLabel.reversed) return !1;
      let Ip = cp.indexOf(null == op ? void 0 : op.v),
        Sp = cp.indexOf(null == op ? void 0 : op.w);
      return -1 !== Ip && -1 !== Sp && Ip === (Sp + 1) % cp.length || Ip === (Sp - 1) % cp.length
    }

    function yc(pp, ip) {
      (function(pp) {
        let ip = gp(pp),
          cp = pp.graph(),
          Op = cp.ranksep,
          op = cp.rankalign,
          Ip = 0;
        ip.forEach((ip => {
          let cp = ip.reduce(((ip, cp) => {
            var Op;
            let op = null != (Op = pp.node(cp).height) ? Op : 0;
            return ip > op ? ip : op
          }), 0);
          ip.forEach((ip => {
            let Op = pp.node(ip);
            Op.y = "top" === op ? Ip + Op.height / 2 : "bottom" === op ? Ip + cp - Op.height / 2 : Ip + cp / 2
          })), Ip += cp + Op
        }))
      })(pp = np(pp)), Object.entries(Pc(pp, ip)).forEach((ip => {
        let [cp, Op] = ip;
        return pp.node(cp).x = Op
      }))
    }
    var Uc = new WeakMap;

    function wc(pp) {
      return tc(pp, Kp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), pp
    }

    function vc(pp, ip, cp) {
      let Op = ip;
      for (; void 0 !== Op;) {
        let ip = pp.parent(Op);
        if (ip === cp) return Op;
        Op = ip
      }
    }

    function tc(pp, ip, cp) {
      var Op;
      let op = pp.nodes().filter((ip => pp.children(ip).length)),
        Ip = {};
      op.forEach((Op => {
        let op = pp.node(Op);
        if (op && op.rankdir) {
          let Sp = new hp({
            multigraph: !0,
            compound: !0
          });
          Sp.setGraph({
            rankdir: op.rankdir
          });
          let xp = pp.children(Op);
          xp.forEach((ip => {
            let cp = {
              ...pp.node(ip)
            };
            Sp.setNode(ip, cp);
            let op = pp.parent(ip);
            op && op !== Op && xp.includes(op) && Sp.setParent(ip, op)
          }));
          let Lp = new Set;
          pp.edges().forEach((ip => {
            let cp = vc(pp, ip.v, Op),
              op = vc(pp, ip.w, Op);
            if (cp && op && cp !== op) {
              let Op = `${cp}\0${op}`;
              Lp.has(Op) || (Lp.add(Op), Sp.setEdge(cp, op, {
                ...pp.edge(ip)
              }))
            }
          })), tc(Sp, ip, cp);
          let Yp = Cc(Sp);
          Hc(Yp, ip, cp, null), dc(Sp, Yp);
          let Dp = 1 / 0,
            Ap = 1 / 0,
            Pp = -1 / 0,
            Wp = -1 / 0;
          Sp.nodes().forEach((pp => {
            if (pp === Op) return;
            let ip = Sp.node(pp);
            ip && "number" == typeof ip.x && "number" == typeof ip.y && "number" == typeof ip.width && "number" == typeof ip.height && (Dp = Math.min(Dp, ip.x - ip.width / 2), Pp = Math.max(Pp, ip.x + ip.width / 2), Ap = Math.min(Ap, ip.y - ip.height / 2), Wp = Math.max(Wp, ip.y + ip.height / 2))
          })), (!isFinite(Dp) || !isFinite(Ap) || !isFinite(Pp) || !isFinite(Wp)) && (Dp = Ap = 0, Pp = Wp = 0);
          let yp = Pp - Dp,
            Up = Wp - Ap;
          Ip[Op] = {
            minX: Dp,
            UO: Ap,
            maxX: Pp,
            wO: Wp,
            width: yp,
            height: Up,
            offsetX: Dp,
            offsetY: Ap
          }, op._dagreClusterSubgraph = Sp
        }
      }));
      let Sp = [],
        xp = new Map;
      op.forEach((ip => {
        let cp = pp.node(ip);
        cp && cp.rankdir && Ip[ip] && xp.set(ip, (pp.children(ip) || []).filter((pp => pp !== ip)))
      }));
      let Lp = new Set([...xp.values()].flat()),
        Yp = new Map;
      xp.forEach(((ip, cp) => {
        Lp.has(cp) || Yp.set(cp, (ip => {
          let cp = [],
            Op = (pp.children(ip) || []).filter((pp => pp !== ip));
          for (; Op.length > 0;) {
            let ip = Op.shift();
            cp.push(ip), (pp.children(ip) || []).filter((pp => pp !== ip)).forEach((pp => Op.push(pp)))
          }
          return cp
        })(cp))
      }));
      let Dp = new Set([...Yp.values()].flat()),
        Ap = pp => {
          for (let [ip, cp] of Yp)
            if (cp.includes(pp)) return ip;
          return pp
        },
        Pp = [];
      pp.edges().forEach((ip => {
        (Dp.has(ip.v) || Dp.has(ip.w)) && Pp.push({
          edge: ip,
          label: pp.edge(ip)
        })
      }));
      let Wp = new Map;
      Dp.forEach((ip => {
        let cp = pp.parent(ip);
        Wp.set(ip, "string" == typeof cp ? cp : void 0)
      })), Yp.forEach(((ip, cp) => {
        let Op = pp.node(cp),
          op = [];
        ip.forEach((ip => {
          let cp = pp.node(ip);
          cp && (op.push({
            id: ip,
            node: cp,
            parent: Wp.get(ip)
          }), pp.removeNode(ip))
        }));
        let xp = Pp.filter((pp => {
            let {
              edge: cp
            } = pp;
            return ip.includes(cp.v) || ip.includes(cp.w)
          })),
          Lp = Ip[cp];
        Op && (Sp.push({
          clusterId: cp,
          subgraph: Op._dagreClusterSubgraph,
          bounds: Lp,
          children: ip,
          removedNodes: op,
          removedEdges: xp
        }), Op.width = Lp.width, Op.height = Lp.height)
      }));
      let yp = new Set;
      Pp.forEach((ip => {
        let {
          edge: cp,
          label: Op
        } = ip, op = Ap(cp.v), Ip = Ap(cp.w);
        if (op !== Ip && pp.hasNode(op) && pp.hasNode(Ip)) {
          let ip = `${op}\0${Ip}`;
          yp.has(ip) || (yp.add(ip), pp.setEdge(op, Ip, {
            ...Op,
            width: 0,
            height: 0
          }))
        }
      }));
      let Up = Cc(pp),
        wp = Hc(Up, ip, cp, null != (Op = Uc.get(pp)) ? Op : null);
      Uc.set(pp, wp), dc(pp, Up), yp.forEach((ip => {
        let cp = ip.indexOf("\0"),
          Op = ip.slice(0, cp),
          op = ip.slice(cp + 1);
        pp.hasEdge(Op, op) && pp.removeEdge(Op, op)
      })), Sp.forEach((ip => {
        let {
          clusterId: cp,
          subgraph: Op,
          bounds: op,
          removedNodes: Ip,
          removedEdges: Sp
        } = ip;
        var xp, Lp;
        let Yp = pp.node(cp),
          Dp = null != (xp = null == Yp ? void 0 : Yp.x) ? xp : 0,
          Ap = null != (Lp = null == Yp ? void 0 : Yp.y) ? Lp : 0,
          Pp = (op.minX + op.maxX) / 2,
          Wp = (op.UO + op.wO) / 2;
        Ip.forEach((ip => {
          let {
            id: cp,
            node: Op,
            parent: op
          } = ip;
          pp.setNode(cp, Op), void 0 !== op && pp.setParent(cp, op)
        })), Sp.forEach((ip => {
          let {
            edge: cp,
            label: Op
          } = ip;
          pp.setEdge(cp, Op)
        })), Op.nodes().forEach((ip => {
          if (ip === cp) return;
          let op = Op.node(ip),
            Ip = pp.node(ip);
          Ip && op && "number" == typeof op.x && "number" == typeof op.y && (Ip.x = Dp + (op.x - Pp), Ip.y = Ap + (op.y - Wp))
        })), delete Yp._dagreClusterSubgraph
      })), op.forEach((ip => {
        var cp, Op;
        let op = pp.node(ip),
          Sp = Ip[ip];
        if (op && op.rankdir && op._dagreClusterSubgraph && Sp) {
          let Ip = op._dagreClusterSubgraph,
            xp = null != (cp = op.x) ? cp : 0,
            Lp = null != (Op = op.y) ? Op : 0,
            Yp = (Sp.minX + Sp.maxX) / 2,
            Dp = (Sp.UO + Sp.wO) / 2;
          Ip.nodes().forEach((cp => {
            if (cp === ip) return;
            let Op = Ip.node(cp),
              op = pp.node(cp);
            if (op && Op && "number" == typeof Op.x && "number" == typeof Op.y) {
              let pp = Op.x - Yp,
                ip = Op.y - Dp;
              op.x = xp + pp, op.y = Lp + ip
            }
          })), delete op._dagreClusterSubgraph
        }
      }))
    }

    function Hc(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var op, Ip;
      let Sp = !1 !== (null == cp ? void 0 : cp.useDynamic),
        xp = Sp && null != (op = null == Op ? void 0 : Op.graph) ? op : null,
        Lp = Sp && null != (Ip = null == Op ? void 0 : Op.rawNodes) ? Ip : null;
      ip("    makeSpaceForEdgeLabels", (() => function(pp) {
        let ip = pp.graph();
        ip.ranksep /= 2, pp.edges().forEach((cp => {
          var Op;
          let op = pp.edge(cp);
          op.minlen *= 2, "c" !== (null != (Op = op.labelpos) ? Op : "r").toLowerCase() && ("TB" === ip.rankdir || "BT" === ip.rankdir ? op.width += op.labeloffset : op.height += op.labeloffset)
        }))
      }(pp))), ip("    removeSelfEdges", (() => function(pp) {
        pp.edges().forEach((ip => {
          if (ip.v === ip.w) {
            let cp = pp.node(ip.v);
            cp.selfEdges || (cp.selfEdges = []), cp.selfEdges.push({
              e: ip,
              label: pp.edge(ip)
            }), pp.removeEdge(ip)
          }
        }))
      }(pp))), ip("    acyclic", (() => Ui(pp, xp))), ip("    nestingGraph.run", (() => bi(pp))), ip("    rank", (() => Bi(np(pp)))), ip("    injectEdgeLabelProxies", (() => function(pp) {
        pp.edges().forEach((ip => {
          let cp = pp.edge(ip);
          if (cp.width && cp.height) {
            let cp = pp.node(ip.v),
              Op = {
                rank: (pp.node(ip.w).rank - cp.rank) / 2 + cp.rank,
                e: ip
              };
            ap(pp, "edge-proxy", Op, "_ep")
          }
        }))
      }(pp))), ip("    removeEmptyRanks", (() => function(pp) {
        let ip = pp.nodes().map((ip => pp.node(ip).rank)).filter((pp => void 0 !== pp)),
          cp = Zp(Math.min, ip),
          Op = [];
        pp.nodes().forEach((ip => {
          let op = pp.node(ip).rank - cp;
          Op[op] || (Op[op] = []), Op[op].push(ip)
        }));
        let op = 0,
          Ip = pp.graph().nodeRankFactor;
        Array.from(Op).forEach(((ip, cp) => {
          void 0 === ip && cp % Ip !== 0 ? --op : void 0 !== ip && op && ip.forEach((ip => pp.node(ip).rank += op))
        }))
      }(pp))), ip("    nestingGraph.cleanup", (() => function(pp) {
        let ip = pp.graph();
        pp.removeNode(ip.nestingRoot), delete ip.nestingRoot, pp.edges().forEach((ip => {
          pp.edge(ip).nestingEdge && pp.removeEdge(ip)
        }))
      }(pp))), ip("    normalizeRanks", (() => function(pp) {
        let ip = pp.nodes().map((ip => {
            let cp = pp.node(ip).rank;
            return void 0 === cp ? Number.MAX_VALUE : cp
          })),
          cp = Zp(Math.min, ip);
        pp.nodes().forEach((ip => {
          let Op = pp.node(ip);
          Object.hasOwn(Op, "rank") && (Op.rank -= cp)
        }))
      }(pp))), ip("    assignRankMinMax", (() => function(pp) {
        let ip = 0;
        pp.nodes().forEach((cp => {
          let Op = pp.node(cp);
          Op.borderTop && (Op.minRank = pp.node(Op.borderTop).rank, Op.maxRank = pp.node(Op.borderBottom).rank, ip = Math.max(ip, Op.maxRank))
        })), pp.graph().maxRank = ip
      }(pp))), ip("    removeEdgeLabelProxies", (() => function(pp) {
        pp.nodes().forEach((ip => {
          let cp = pp.node(ip);
          if ("edge-proxy" === cp.dummy) {
            let Op = cp;
            pp.edge(Op.e).labelRank = cp.rank, pp.removeNode(ip)
          }
        }))
      }(pp))), ip("    normalize.run", (() => wi(pp))), ip("    parentDummyChains", (() => fi(pp))), ip("    addBorderSegments", (() => ni(pp))), ip("    order", (() => Ic(pp, cp, Lp))), ip("    insertSelfEdges", (() => function(pp) {
        gp(pp).forEach((ip => {
          let cp = 0;
          ip.forEach(((ip, Op) => {
            let op = pp.node(ip);
            "number" != typeof op.rank && (op.rank = 0), op.order = Op + cp, (op.selfEdges || []).forEach((ip => {
              ap(pp, "selfedge", {
                width: ip.label.width,
                height: ip.label.height,
                rank: op.rank,
                order: Op + ++cp,
                e: ip.e,
                edgeLabel: ip.label
              }, "_se"), (!Array.isArray(ip.label.points) || 7 !== ip.label.points.length) && (ip.label.points = [{
                x: 0,
                y: -10
              }, {
                x: 0,
                y: -10
              }, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 10
              }, {
                x: 0,
                y: 10
              }, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 0
              }])
            })), delete op.selfEdges
          }))
        }))
      }(pp))), ip("    adjustCoordinateSystem", (() => function(pp) {
        var ip;
        let cp = null == (ip = pp.graph().rankdir) ? void 0 : ip.toLowerCase();
        ("lr" === cp || "rl" === cp) && Gi(pp)
      }(pp))), ip("    position", (() => yc(pp, cp.corePath))), ip("    positionSelfEdges", (() => function(pp) {
        pp.nodes().forEach((ip => {
          let cp = pp.node(ip),
            Op = pp => "number" == typeof pp && isFinite(pp);
          if ("selfedge" === cp.dummy) {
            let op = cp,
              Ip = pp.node(op.e.v),
              Sp = Op(null == Ip ? void 0 : Ip.x) ? Ip.x : 0,
              xp = Op(null == Ip ? void 0 : Ip.y) ? Ip.y : 0,
              Lp = Op(null == Ip ? void 0 : Ip.width) ? Ip.width : 0,
              Yp = Op(null == Ip ? void 0 : Ip.height) ? Ip.height : 0,
              Dp = Op(cp.x) ? cp.x : Sp,
              Ap = Op(cp.y) ? cp.y : xp,
              Pp = Lp / 2,
              Wp = Yp / 2;
            op.edgeLabel.points = [{
              x: Dp + Pp,
              y: Ap - Wp
            }, {
              x: Dp + Pp,
              y: Ap - Wp
            }, {
              x: Dp,
              y: Ap
            }, {
              x: Dp - Pp,
              y: Ap + Wp
            }, {
              x: Dp - Pp,
              y: Ap + Wp
            }, {
              x: Dp,
              y: Ap
            }, {
              x: Dp,
              y: Ap
            }], op.edgeLabel.x = Dp, op.edgeLabel.y = Ap, pp.setEdge(op.e, op.edgeLabel), pp.removeNode(ip)
          } else cp && Array.isArray(cp.selfEdges) && cp.selfEdges.forEach((pp => {
            if (!Array.isArray(pp.label.points) || 7 !== pp.label.points.length) {
              let ip = Op(cp.x) ? cp.x : 0,
                op = Op(cp.y) ? cp.y : 0,
                Ip = (Op(cp.width) ? cp.width : 0) / 2,
                Sp = (Op(cp.height) ? cp.height : 0) / 2;
              pp.label.points = [{
                x: ip + Ip,
                y: op - Sp
              }, {
                x: ip + Ip,
                y: op - Sp
              }, {
                x: ip,
                y: op
              }, {
                x: ip - Ip,
                y: op + Sp
              }, {
                x: ip - Ip,
                y: op + Sp
              }, {
                x: ip,
                y: op
              }, {
                x: ip,
                y: op
              }]
            }
          }))
        }))
      }(pp)));
      let Yp = JSON.parse(JSON.stringify(pp._nodes));
      return ip("    removeBorderNodes", (() => function(pp) {
        pp.nodes().forEach((ip => {
          if (pp.children(ip).length) {
            let cp = pp.node(ip),
              Op = pp.node(cp.borderTop),
              op = pp.node(cp.borderBottom),
              Ip = pp.node(cp.borderLeft[cp.borderLeft.length - 1]),
              Sp = pp.node(cp.borderRight[cp.borderRight.length - 1]);
            cp.width = Math.abs(Sp.x - Ip.x), cp.height = Math.abs(op.y - Op.y), cp.x = Ip.x + cp.width / 2, cp.y = Op.y + cp.height / 2
          }
        })), pp.nodes().forEach((ip => {
          "border" === pp.node(ip).dummy && pp.removeNode(ip)
        }))
      }(pp))), ip("    normalize.undo", (() => function(pp) {
        pp.graph().dummyChains.forEach((ip => {
          let cp, Op = pp.node(ip),
            op = Op.edgeLabel;
          for (pp.setEdge(Op.edgeObj, op); Op.dummy;) cp = pp.successors(ip)[0], pp.removeNode(ip), op.points.push({
            x: Op.x,
            y: Op.y
          }), "edge-label" === Op.dummy && (op.x = Op.x, op.y = Op.y, op.width = Op.width, op.height = Op.height), ip = cp, Op = pp.node(ip)
        }))
      }(pp))), ip("    fixupEdgeLabelCoords", (() => function(pp) {
        pp.edges().forEach((ip => {
          let cp = pp.edge(ip);
          if (Object.hasOwn(cp, "x")) switch (("l" === cp.labelpos || "r" === cp.labelpos) && (cp.width -= cp.labeloffset), cp.labelpos) {
            case "l":
              cp.x -= cp.width / 2 + cp.labeloffset;
              break;
            case "r":
              cp.x += cp.width / 2 + cp.labeloffset
          }
        }))
      }(pp))), ip("    undoCoordinateSystem", (() => gi(pp))), ip("    translateGraph", (() => function(pp) {
        let ip = Number.POSITIVE_INFINITY,
          cp = 0,
          Op = Number.POSITIVE_INFINITY,
          op = 0,
          Ip = pp.graph(),
          Sp = Ip.marginx || 0,
          xp = Ip.marginy || 0;

        function Lp(pp) {
          let Ip = pp.x,
            Sp = pp.y,
            xp = pp.width,
            Lp = pp.height;
          ip = Math.min(ip, Ip - xp / 2), cp = Math.max(cp, Ip + xp / 2), Op = Math.min(Op, Sp - Lp / 2), op = Math.max(op, Sp + Lp / 2)
        }
        pp.nodes().forEach((ip => Lp(pp.node(ip)))), pp.edges().forEach((ip => {
          let cp = pp.edge(ip);
          Object.hasOwn(cp, "x") && Lp(cp)
        })), ip -= Sp, Op -= xp, pp.nodes().forEach((cp => {
          let op = pp.node(cp);
          op.x -= ip, op.y -= Op
        })), pp.edges().forEach((cp => {
          let op = pp.edge(cp);
          op.points.forEach((pp => {
            pp.x -= ip, pp.y -= Op
          })), Object.hasOwn(op, "x") && (op.x -= ip), Object.hasOwn(op, "y") && (op.y -= Op)
        })), Ip.width = cp - ip + Sp, Ip.height = op - Op + xp
      }(pp))), ip("    assignNodeIntersects", (() => function(pp) {
        pp.edges().forEach((ip => {
          if (ip.v === ip.w) return;
          let cp, Op, op = pp.edge(ip),
            Ip = pp.node(ip.v),
            Sp = pp.node(ip.w);
          op.points ? (cp = op.points[0], Op = op.points[op.points.length - 1]) : (op.points = [], cp = Sp, Op = Ip), op.points.unshift(Fp(Ip, cp)), op.points.push(Fp(Sp, Op))
        }))
      }(pp))), ip("    reversePoints", (() => function(pp) {
        pp.edges().forEach((ip => {
          let cp = pp.edge(ip);
          cp.reversed && cp.points.reverse()
        }))
      }(pp))), ip("    acyclic.undo", (() => function(pp) {
        pp.edges().forEach((ip => {
          let cp = pp.edge(ip);
          if (cp.reversed) {
            pp.removeEdge(ip);
            let Op = cp.forwardName;
            delete cp.reversed, delete cp.forwardName, pp.setEdge(ip.w, ip.v, cp, Op)
          }
        }))
      }(pp))), {
        graph: pp,
        rawNodes: Yp
      }
    }

    function dc(pp, ip) {
      pp.nodes().forEach((cp => {
        let Op = pp.node(cp),
          op = ip.node(cp);
        Op && (Op.x = op.x, Op.y = op.y, Op.order = op.order, Op.rank = op.rank, ip.children(cp).length && (Op.width = op.width, Op.height = op.height))
      })), pp.edges().forEach((cp => {
        let Op = pp.edge(cp),
          op = ip.edge(cp);
        Op.points = op.points, Object.hasOwn(op, "x") && (Op.x = op.x, Op.y = op.y)
      })), pp.graph().width = ip.graph().width, pp.graph().height = ip.graph().height
    }
    var ec = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      uc = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      jc = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      kc = ["width", "height", "rank"],
      mc = {
        width: 0,
        height: 0
      },
      Rc = ["minlen", "weight", "width", "height", "labeloffset"],
      qc = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Mc = ["labelpos"];

    function Cc(pp) {
      let ip = new hp({
          multigraph: !0,
          compound: !0
        }),
        cp = Xc(pp.graph());
      return ip.setGraph(Object.assign({}, uc, Ec(cp, ec), Oi(cp, jc))), pp.nodes().forEach((cp => {
        let Op = Ec(Xc(pp.node(cp)), kc);
        Object.keys(mc).forEach((pp => {
          void 0 === Op[pp] && (Op[pp] = mc[pp])
        })), ip.setNode(cp, Op);
        let op = pp.parent(cp);
        void 0 !== op && ip.setParent(cp, op)
      })), pp.edges().forEach((cp => {
        let Op = Xc(pp.edge(cp));
        ip.setEdge(cp, Object.assign({}, qc, Ec(Op, Rc), Oi(Op, Mc)))
      })), ip
    }

    function Ec(pp, ip) {
      return oi(Oi(pp, ip), Number)
    }

    function Xc(pp) {
      let ip = {};
      return pp && Object.entries(pp).forEach((pp => {
        let [cp, Op] = pp;
        "string" == typeof cp && (cp = cp.toLowerCase()), ip[cp] = Op
      })), ip
    }

    function lc(pp) {
      let ip = gp(pp),
        cp = new hp({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return pp.nodes().forEach((ip => {
        cp.setNode(ip, {
          label: ip
        }), cp.setParent(ip, "layer" + pp.node(ip).rank)
      })), pp.edges().forEach((pp => cp.setEdge(pp.v, pp.w, {}, pp.name))), ip.forEach(((pp, ip) => {
        let Op = "layer" + ip;
        cp.setNode(Op, {
          rank: "same"
        }), pp.reduce(((pp, ip) => (cp.setEdge(pp, ip, {
          style: "invis"
        }), ip)))
      })), cp
    }
    var Qc = {
        time: sp,
        notime: Kp
      },
      Jc = {
        graphlib: Ip,
        version: xi,
        layout: wc,
        debug: lc,
        util: {
          time: sp,
          notime: Kp
        }
      }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);