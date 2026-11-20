/*! For license information please see bbb6l5.112.dfb78935.chunk.js.LICENSE.txt */
export const id = 112;
export const ids = [112];
export const modules = {
  6302: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      Graph: () => Jq,
      debug: () => ig,
      default: () => fg,
      graphlib: () => Oq,
      layout: () => Ng,
      util: () => Zg,
      version: () => OE
    });
    var Yq = Object.defineProperty,
      lq = (qq, Eq, gq) => ((qq, Eq, gq) => Eq in qq ? Yq(qq, Eq, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: gq
      }) : qq[Eq] = gq)(qq, "symbol" != typeof Eq ? Eq + "" : Eq, gq),
      Oq = {};
    ((qq, Eq) => {
      for (var gq in Eq) Yq(qq, gq, {
        get: Eq[gq],
        enumerable: !0
      })
    })(Oq, {
      Graph: () => Jq,
      alg: () => jq
    });
    var mq = Object.defineProperty,
      xq = (qq, Eq) => {
        for (var gq in Eq) mq(qq, gq, {
          get: Eq[gq],
          enumerable: !0
        })
      },
      Aq = class {
        constructor(qq) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, qq && (this._isDirected = !("directed" in qq) || qq.directed, this._isMultigraph = "multigraph" in qq && qq.multigraph, this._isCompound = "compound" in qq && qq.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(qq) {
          return this._label = qq, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(qq) {
          return this._defaultNodeLabelFn = "function" != typeof qq ? () => qq : qq, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((qq => 0 === Object.keys(this._in[qq]).length))
        }
        sinks() {
          return this.nodes().filter((qq => 0 === Object.keys(this._out[qq]).length))
        }
        setNodes(qq, Eq) {
          return qq.forEach((qq => {
            void 0 !== Eq ? this.setNode(qq, Eq) : this.setNode(qq)
          })), this
        }
        setNode(qq, Eq) {
          return qq in this._nodes ? (arguments.length > 1 && (this._nodes[qq] = Eq), this) : (this._nodes[qq] = arguments.length > 1 ? Eq : this._defaultNodeLabelFn(qq), this._isCompound && (this._parent[qq] = "\0", this._children[qq] = {}, this._children["\0"][qq] = !0), this._in[qq] = {}, this._preds[qq] = {}, this._out[qq] = {}, this._sucs[qq] = {}, ++this._nodeCount, this)
        }
        node(qq) {
          return this._nodes[qq]
        }
        hasNode(qq) {
          return qq in this._nodes
        }
        removeNode(qq) {
          if (qq in this._nodes) {
            let Eq = qq => this.removeEdge(this._edgeObjs[qq]);
            delete this._nodes[qq], this._isCompound && (this._removeFromParentsChildList(qq), delete this._parent[qq], this.children(qq).forEach((qq => {
              this.setParent(qq)
            })), delete this._children[qq]), Object.keys(this._in[qq]).forEach(Eq), delete this._in[qq], delete this._preds[qq], Object.keys(this._out[qq]).forEach(Eq), delete this._out[qq], delete this._sucs[qq], --this._nodeCount
          }
          return this
        }
        setParent(qq, Eq) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === Eq) Eq = "\0";
          else {
            for (let gq = Eq += ""; void 0 !== gq; gq = this.parent(gq))
              if (gq === qq) throw new Error("Setting " + Eq + " as parent of " + qq + " would create a cycle");
            this.setNode(Eq)
          }
          return this.setNode(qq), this._removeFromParentsChildList(qq), this._parent[qq] = Eq, this._children[Eq][qq] = !0, this
        }
        parent(qq) {
          if (this._isCompound) {
            let Eq = this._parent[qq];
            if ("\0" !== Eq) return Eq
          }
        }
        children() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let Eq = this._children[qq];
            if (Eq) return Object.keys(Eq)
          } else {
            if ("\0" === qq) return this.nodes();
            if (this.hasNode(qq)) return []
          }
          return []
        }
        predecessors(qq) {
          let Eq = this._preds[qq];
          if (Eq) return Object.keys(Eq)
        }
        successors(qq) {
          let Eq = this._sucs[qq];
          if (Eq) return Object.keys(Eq)
        }
        neighbors(qq) {
          let Eq = this.predecessors(qq);
          if (Eq) {
            let gq = new Set(Eq),
              Yq = this.successors(qq);
            if (Yq)
              for (let qq of Yq) gq.add(qq);
            return Array.from(gq.values())
          }
        }
        isLeaf(qq) {
          var Eq;
          let gq;
          return gq = this.isDirected() ? this.successors(qq) : this.neighbors(qq), 0 === (null != (Eq = null == gq ? void 0 : gq.length) ? Eq : 0)
        }
        filterNodes(qq) {
          let Eq = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Eq.setGraph(this.graph()), Object.entries(this._nodes).forEach((gq => {
            let [Yq, lq] = gq;
            qq(Yq) && Eq.setNode(Yq, lq)
          })), Object.values(this._edgeObjs).forEach((qq => {
            Eq.hasNode(qq.v) && Eq.hasNode(qq.w) && Eq.setEdge(qq, this.edge(qq))
          }));
          let gq = {},
            Yq = qq => {
              let lq = this.parent(qq);
              return !lq || Eq.hasNode(lq) ? (gq[qq] = lq, lq) : lq in gq ? gq[lq] : Yq(lq)
            };
          return this._isCompound && Eq.nodes().forEach((qq => Eq.setParent(qq, Yq(qq)))), Eq
        }
        setDefaultEdgeLabel(qq) {
          return this._defaultEdgeLabelFn = "function" != typeof qq ? () => qq : qq, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(qq, Eq) {
          return qq.reduce(((qq, gq) => (void 0 !== Eq ? this.setEdge(qq, gq, Eq) : this.setEdge(qq, gq), gq))), this
        }
        setEdge(qq, Eq, gq, Yq) {
          let lq, Oq, mq, xq, Aq = !1;
          "object" == typeof qq && null !== qq && "v" in qq ? (lq = qq.v, Oq = qq.w, mq = qq.name, 2 === arguments.length && (xq = Eq, Aq = !0)) : (lq = qq, Oq = Eq, mq = Yq, arguments.length > 2 && (xq = gq, Aq = !0)), lq = "" + lq, Oq = "" + Oq, void 0 !== mq && (mq = "" + mq);
          let uq = Bq(this._isDirected, lq, Oq, mq);
          if (uq in this._edgeLabels) return Aq && (this._edgeLabels[uq] = xq), this;
          if (void 0 !== mq && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(lq), this.setNode(Oq), this._edgeLabels[uq] = Aq ? xq : this._defaultEdgeLabelFn(lq, Oq, mq);
          let Wq = function(qq, Eq, gq, Yq) {
            let lq = "" + Eq,
              Oq = "" + gq;
            if (!qq && lq > Oq) {
              let qq = lq;
              lq = Oq, Oq = qq
            }
            let mq = {
              v: lq,
              w: Oq
            };
            return Yq && (mq.name = Yq), mq
          }(this._isDirected, lq, Oq, mq);
          return lq = Wq.v, Oq = Wq.w, Object.freeze(Wq), this._edgeObjs[uq] = Wq, cq(this._preds[Oq], lq), cq(this._sucs[lq], Oq), this._in[Oq][uq] = Wq, this._out[lq][uq] = Wq, this._edgeCount++, this
        }
        edge(qq, Eq, gq) {
          let Yq = 1 === arguments.length ? Wq(this._isDirected, qq) : Bq(this._isDirected, qq, Eq, gq);
          return this._edgeLabels[Yq]
        }
        edgeAsObj(qq, Eq, gq) {
          let Yq = 1 === arguments.length ? this.edge(qq) : this.edge(qq, Eq, gq);
          return "object" != typeof Yq || null === Yq ? {
            label: Yq
          } : Yq
        }
        hasEdge(qq, Eq, gq) {
          return (1 === arguments.length ? Wq(this._isDirected, qq) : Bq(this._isDirected, qq, Eq, gq)) in this._edgeLabels
        }
        removeEdge(qq, Eq, gq) {
          let Yq = 1 === arguments.length ? Wq(this._isDirected, qq) : Bq(this._isDirected, qq, Eq, gq),
            lq = this._edgeObjs[Yq];
          if (lq) {
            let qq = lq.v,
              Eq = lq.w;
            delete this._edgeLabels[Yq], delete this._edgeObjs[Yq], uq(this._preds[Eq], qq), uq(this._sucs[qq], Eq), delete this._in[Eq][Yq], delete this._out[qq][Yq], this._edgeCount--
          }
          return this
        }
        inEdges(qq, Eq) {
          return this.isDirected() ? this.filterEdges(this._in[qq], qq, Eq) : this.nodeEdges(qq, Eq)
        }
        outEdges(qq, Eq) {
          return this.isDirected() ? this.filterEdges(this._out[qq], qq, Eq) : this.nodeEdges(qq, Eq)
        }
        nodeEdges(qq, Eq) {
          if (qq in this._nodes) return this.filterEdges({
            ...this._in[qq],
            ...this._out[qq]
          }, qq, Eq)
        }
        _removeFromParentsChildList(qq) {
          delete this._children[this._parent[qq]][qq]
        }
        filterEdges(qq, Eq, gq) {
          if (!qq) return;
          let Yq = Object.values(qq);
          return gq ? Yq.filter((qq => qq.v === Eq && qq.w === gq || qq.v === gq && qq.w === Eq)) : Yq
        }
      };

    function cq(qq, Eq) {
      qq[Eq] ? qq[Eq]++ : qq[Eq] = 1
    }

    function uq(qq, Eq) {
      void 0 !== qq[Eq] && !--qq[Eq] && delete qq[Eq]
    }

    function Bq(qq, Eq, gq, Yq) {
      let lq = "" + Eq,
        Oq = "" + gq;
      if (!qq && lq > Oq) {
        let qq = lq;
        lq = Oq, Oq = qq
      }
      return lq + "\x01" + Oq + "\x01" + (void 0 === Yq ? "\0" : Yq)
    }

    function Wq(qq, Eq) {
      return Bq(qq, Eq.v, Eq.w, Eq.name)
    }

    function Nq(qq) {
      let Eq = {
          options: {
            directed: qq.isDirected(),
            multigraph: qq.isMultigraph(),
            compound: qq.isCompound()
          },
          nodes: aq(qq),
          edges: Vq(qq)
        },
        gq = qq.graph();
      return void 0 !== gq && (Eq.value = structuredClone(gq)), Eq
    }

    function aq(qq) {
      return qq.nodes().map((Eq => {
        let gq = qq.node(Eq),
          Yq = qq.parent(Eq),
          lq = {
            v: Eq
          };
        return void 0 !== gq && (lq.value = gq), void 0 !== Yq && (lq.parent = Yq), lq
      }))
    }

    function Vq(qq) {
      return qq.edges().map((Eq => {
        let gq = qq.edge(Eq),
          Yq = {
            v: Eq.v,
            w: Eq.w
          };
        return void 0 !== Eq.name && (Yq.name = Eq.name), void 0 !== gq && (Yq.value = gq), Yq
      }))
    }

    function dq(qq) {
      let Eq = new Aq(qq.options);
      return void 0 !== qq.value && Eq.setGraph(qq.value), qq.nodes.forEach((qq => {
        Eq.setNode(qq.v, qq.value), qq.parent && Eq.setParent(qq.v, qq.parent)
      })), qq.edges.forEach((qq => {
        Eq.setEdge({
          v: qq.v,
          w: qq.w,
          name: qq.name
        }, qq.value)
      })), Eq
    }
    xq({}, {
      read: () => dq,
      write: () => Nq
    });
    var jq = {};
    xq(jq, {
      CycleException: () => iq,
      bellmanFord: () => oq,
      components: () => Pq,
      dijkstra: () => tq,
      dijkstraAll: () => rq,
      findCycles: () => hq,
      floydWarshall: () => bq,
      isAcyclic: () => fq,
      postorder: () => Sq,
      preorder: () => pq,
      prim: () => Gq,
      shortestPaths: () => Lq,
      tarjan: () => vq,
      topsort: () => Zq
    });
    var Hq = () => 1;

    function oq(qq, Eq, gq, Yq) {
      return function(qq, Eq, gq, Yq) {
        let lq, Oq = {},
          mq = 0,
          xq = qq.nodes(),
          Aq = function(qq) {
            let Eq = Oq[qq.v],
              Yq = Oq[qq.w];
            if (!Eq || !Yq) return;
            let mq = gq(qq);
            Eq.distance + mq < Yq.distance && (Oq[qq.w] = {
              distance: Eq.distance + mq,
              predecessor: qq.v
            }, lq = !0)
          },
          cq = function() {
            xq.forEach((function(qq) {
              Yq(qq).forEach((function(Eq) {
                let gq = Eq.v === qq ? Eq.v : Eq.w,
                  Yq = gq === Eq.v ? Eq.w : Eq.v;
                Aq({
                  v: gq,
                  w: Yq
                })
              }))
            }))
          };
        xq.forEach((function(qq) {
          let gq = qq === Eq ? 0 : Number.POSITIVE_INFINITY;
          Oq[qq] = {
            distance: gq,
            predecessor: ""
          }
        }));
        let uq = xq.length;
        for (let Bq = 1; Bq < uq && (lq = !1, mq++, cq(), lq); Bq++);
        if (mq === uq - 1 && (lq = !1, cq(), lq)) throw new Error("The graph contains a negative weight cycle");
        return Oq
      }(qq, String(Eq), gq || Hq, Yq || function(Eq) {
        var gq;
        return null != (gq = qq.outEdges(Eq)) ? gq : []
      })
    }

    function Pq(qq) {
      let Eq, gq = {},
        Yq = [];

      function lq(Yq) {
        var Oq, mq;
        Yq in gq || (gq[Yq] = !0, Eq.push(Yq), null == (Oq = qq.successors(Yq)) || Oq.forEach(lq), null == (mq = qq.predecessors(Yq)) || mq.forEach(lq))
      }
      return qq.nodes().forEach((function(qq) {
        Eq = [], lq(qq), Eq.length && Yq.push(Eq)
      })), Yq
    }
    var Qq = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((qq => qq.key))
        }
        has(qq) {
          return qq in this._keyIndices
        }
        priority(qq) {
          let Eq = this._keyIndices[qq];
          if (void 0 !== Eq) return this._arr[Eq].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(qq, Eq) {
          let gq = this._keyIndices,
            Yq = String(qq);
          if (!(Yq in gq)) {
            let qq = this._arr,
              lq = qq.length;
            return gq[Yq] = lq, qq.push({
              key: Yq,
              priority: Eq
            }), this._decrease(lq), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let qq = this._arr.pop();
          return delete this._keyIndices[qq.key], this._heapify(0), qq.key
        }
        decrease(qq, Eq) {
          let gq = this._keyIndices[qq];
          if (void 0 === gq) throw new Error(`Key not found: ${qq}`);
          let Yq = this._arr[gq].priority;
          if (Eq > Yq) throw new Error(`New priority is greater than current priority. Key: ${qq} Old: ${Yq} New: ${Eq}`);
          this._arr[gq].priority = Eq, this._decrease(gq)
        }
        _heapify(qq) {
          let Eq = this._arr,
            gq = 2 * qq,
            Yq = gq + 1,
            lq = qq;
          gq < Eq.length && (lq = Eq[gq].priority < Eq[lq].priority ? gq : lq, Yq < Eq.length && (lq = Eq[Yq].priority < Eq[lq].priority ? Yq : lq), lq !== qq && (this._swap(qq, lq), this._heapify(lq)))
        }
        _decrease(qq) {
          let Eq, gq = this._arr,
            Yq = gq[qq].priority;
          for (; 0 !== qq && (Eq = qq >> 1, !(gq[Eq].priority < Yq));) this._swap(qq, Eq), qq = Eq
        }
        _swap(qq, Eq) {
          let gq = this._arr,
            Yq = this._keyIndices,
            lq = gq[qq],
            Oq = gq[Eq];
          gq[qq] = Oq, gq[Eq] = lq, Yq[Oq.key] = qq, Yq[lq.key] = Eq
        }
      },
      yq = () => 1;

    function tq(qq, Eq, gq, Yq) {
      return function(qq, Eq, gq, Yq) {
        let lq, Oq, mq = {},
          xq = new Qq,
          Aq = function(qq) {
            let Eq = qq.v !== lq ? qq.v : qq.w,
              Yq = mq[Eq];
            if (!Yq) return;
            let Aq = gq(qq),
              cq = Oq.distance + Aq;
            if (Aq < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + qq + " Weight: " + Aq);
            cq < Yq.distance && (Yq.distance = cq, Yq.predecessor = lq, xq.decrease(Eq, cq))
          };
        for (qq.nodes().forEach((function(qq) {
            let gq = qq === Eq ? 0 : Number.POSITIVE_INFINITY;
            mq[qq] = {
              distance: gq,
              predecessor: ""
            }, xq.add(qq, gq)
          })); xq.size() > 0;) {
          lq = xq.removeMin();
          let qq = mq[lq];
          if (!qq || qq.distance === Number.POSITIVE_INFINITY) break;
          Oq = qq, Yq(lq).forEach(Aq)
        }
        return mq
      }(qq, String(Eq), gq || yq, Yq || function(Eq) {
        var gq;
        return null != (gq = qq.outEdges(Eq)) ? gq : []
      })
    }

    function rq(qq, Eq, gq) {
      return qq.nodes().reduce((function(Yq, lq) {
        return Yq[lq] = tq(qq, lq, Eq, gq), Yq
      }), {})
    }

    function vq(qq) {
      let Eq = 0,
        gq = [],
        Yq = {},
        lq = [];

      function Oq(mq) {
        var xq;
        let Aq = Yq[mq] = {
          onStack: !0,
          lowlink: Eq,
          index: Eq++
        };
        if (gq.push(mq), null == (xq = qq.successors(mq)) || xq.forEach((function(qq) {
            if (qq in Yq) {
              let Eq = Yq[qq];
              null != Eq && Eq.onStack && (Aq.lowlink = Math.min(Aq.lowlink, Eq.index))
            } else {
              Oq(qq);
              let Eq = Yq[qq];
              Eq && (Aq.lowlink = Math.min(Aq.lowlink, Eq.lowlink))
            }
          })), Aq.lowlink === Aq.index) {
          let qq, Eq = [];
          do {
            qq = gq.pop();
            let lq = Yq[qq];
            lq && (lq.onStack = !1), Eq.push(qq)
          } while (mq !== qq);
          lq.push(Eq)
        }
      }
      return qq.nodes().forEach((function(qq) {
        qq in Yq || Oq(qq)
      })), lq
    }

    function hq(qq) {
      return vq(qq).filter((function(Eq) {
        var gq;
        let Yq = Eq[0];
        return !!Yq && (Eq.length > 1 || 1 === Eq.length && (null != (gq = qq.outEdges(Yq, Yq)) ? gq : []).length > 0)
      }))
    }
    var nq = () => 1;

    function bq(qq, Eq, gq) {
      return function(qq, Eq, gq) {
        let Yq = {},
          lq = qq.nodes();
        return lq.forEach((function(qq) {
          let Oq = {};
          Yq[qq] = Oq, Oq[qq] = {
            distance: 0,
            predecessor: ""
          }, lq.forEach((function(Eq) {
            qq !== Eq && (Oq[Eq] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), gq(qq).forEach((function(gq) {
            let Yq = gq.v === qq ? gq.w : gq.v,
              lq = Eq(gq);
            Oq[Yq] = {
              distance: lq,
              predecessor: qq
            }
          }))
        })), lq.forEach((function(qq) {
          let Eq = Yq[qq];
          Eq && lq.forEach((function(gq) {
            let Oq = Yq[gq];
            Oq && lq.forEach((function(gq) {
              let Yq = Oq[qq],
                lq = Eq[gq],
                mq = Oq[gq];
              if (Yq && lq && mq) {
                let qq = Yq.distance + lq.distance;
                qq < mq.distance && (mq.distance = qq, mq.predecessor = lq.predecessor)
              }
            }))
          }))
        })), Yq
      }(qq, Eq || nq, gq || function(Eq) {
        var gq;
        return null != (gq = qq.outEdges(Eq)) ? gq : []
      })
    }
    var iq = class extends Error {
      constructor(qq) {
        super(qq), this.name = "CycleException"
      }
    };

    function Zq(qq) {
      let Eq = {},
        gq = {},
        Yq = [];
      if (qq.sinks().forEach((function lq(Oq) {
          var mq;
          if (Oq in gq) throw new iq;
          Oq in Eq || (gq[Oq] = !0, Eq[Oq] = !0, null == (mq = qq.predecessors(Oq)) || mq.forEach(lq), delete gq[Oq], Yq.push(Oq))
        })), Object.keys(Eq).length !== qq.nodeCount()) throw new iq;
      return Yq
    }

    function fq(qq) {
      try {
        Zq(qq)
      } catch (Eq) {
        if (Eq instanceof iq) return !1;
        throw Eq
      }
      return !0
    }

    function Mq(qq, Eq, gq, Yq, lq) {
      Array.isArray(Eq) || (Eq = [Eq]);
      let Oq = Eq => {
          var gq;
          return null != (gq = qq.isDirected() ? qq.successors(Eq) : qq.neighbors(Eq)) ? gq : []
        },
        mq = {};
      return Eq.forEach((function(Eq) {
        if (!qq.hasNode(Eq)) throw new Error("Graph does not have node: " + Eq);
        lq = Tq(qq, Eq, "post" === gq, mq, Oq, Yq, lq)
      })), lq
    }

    function Tq(qq, Eq, gq, Yq, lq, Oq, mq) {
      return Eq in Yq || (Yq[Eq] = !0, gq || (mq = Oq(mq, Eq)), lq(Eq).forEach((function(Eq) {
        mq = Tq(qq, Eq, gq, Yq, lq, Oq, mq)
      })), gq && (mq = Oq(mq, Eq))), mq
    }

    function zq(qq, Eq, gq) {
      return Mq(qq, Eq, gq, (function(qq, Eq) {
        return qq.push(Eq), qq
      }), [])
    }

    function Sq(qq, Eq) {
      return zq(qq, Eq, "post")
    }

    function pq(qq, Eq) {
      return zq(qq, Eq, "pre")
    }

    function Gq(qq, Eq) {
      var gq;
      let Yq, lq = new Aq,
        Oq = {},
        mq = new Qq;

      function xq(qq) {
        let gq = qq.v === Yq ? qq.w : qq.v,
          lq = mq.priority(gq);
        if (void 0 !== lq) {
          let xq = Eq(qq);
          xq < lq && (Oq[gq] = Yq, mq.decrease(gq, xq))
        }
      }
      if (0 === qq.nodeCount()) return lq;
      qq.nodes().forEach((function(qq) {
        mq.add(qq, Number.POSITIVE_INFINITY), lq.setNode(qq)
      }));
      let cq = qq.nodes()[0];
      void 0 !== cq && mq.decrease(cq, 0);
      let uq = !1;
      for (; mq.size() > 0;) {
        if (Yq = mq.removeMin(), Yq in Oq) lq.setEdge(Yq, Oq[Yq]);
        else {
          if (uq) throw new Error("Input graph is not connected: " + qq);
          uq = !0
        }
        null == (gq = qq.nodeEdges(Yq)) || gq.forEach(xq)
      }
      return lq
    }

    function Lq(qq, Eq, gq, Yq) {
      return function(qq, Eq, gq, Yq) {
        if (void 0 === gq) return tq(qq, Eq, gq, Yq);
        let lq = !1,
          Oq = qq.nodes();
        for (let mq = 0; mq < Oq.length; mq++) {
          let xq = Oq[mq];
          if (void 0 === xq) continue;
          let Aq = Yq(xq);
          for (let qq = 0; qq < Aq.length; qq++) {
            let Eq = Aq[qq];
            if (!Eq) continue;
            let Yq = Eq.v === xq ? Eq.v : Eq.w;
            gq({
              v: Yq,
              w: Yq === Eq.v ? Eq.w : Eq.v
            }) < 0 && (lq = !0)
          }
          if (lq) return oq(qq, Eq, gq, Yq)
        }
        return tq(qq, Eq, gq, Yq)
      }(qq, Eq, gq, null != Yq ? Yq : Eq => {
        var gq;
        return null != (gq = qq.outEdges(Eq)) ? gq : []
      })
    }
    var Jq = Aq;

    function kq(qq, Eq, gq, Yq) {
      let lq = Yq;
      for (; qq.hasNode(lq);) lq = Dq(Yq);
      return gq.dummy = Eq, qq.setNode(lq, gq), lq
    }

    function Rq(qq) {
      let Eq = new Jq({
        multigraph: qq.isMultigraph()
      }).setGraph(qq.graph());
      return qq.nodes().forEach((gq => {
        qq.children(gq).length || Eq.setNode(gq, qq.node(gq))
      })), qq.edges().forEach((gq => {
        Eq.setEdge(gq, qq.edge(gq))
      })), Eq
    }

    function Uq(qq, Eq) {
      let gq, Yq, lq = qq.x,
        Oq = qq.y,
        mq = Eq.x - lq,
        xq = Eq.y - Oq,
        Aq = qq.width / 2,
        cq = qq.height / 2;
      if (!mq && !xq) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(xq) * Aq > Math.abs(mq) * cq ? (xq < 0 && (cq = -cq), gq = cq * mq / xq, Yq = cq) : (mq < 0 && (Aq = -Aq), gq = Aq, Yq = Aq * xq / mq), {
        x: lq + gq,
        y: Oq + Yq
      }
    }

    function Fq(qq) {
      let Eq = qE(Kq(qq) + 1).map((() => []));
      return qq.nodes().forEach((gq => {
        let Yq = qq.node(gq),
          lq = Yq.rank;
        void 0 !== lq && (Eq[lq] || (Eq[lq] = []), Eq[lq][Yq.order] = gq)
      })), Eq
    }

    function sq(qq, Eq, gq, Yq) {
      let lq = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (lq.rank = gq, lq.order = Yq), kq(qq, "border", lq, Eq)
    }
    var Xq = 65535;

    function wq(qq, Eq) {
      if (Eq.length > Xq) {
        let gq = function(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xq,
            gq = [];
          for (let Yq = 0; Yq < qq.length; Yq += Eq) {
            let lq = qq.slice(Yq, Yq + Eq);
            gq.push(lq)
          }
          return gq
        }(Eq);
        return qq(...gq.map((Eq => qq(...Eq))))
      }
      return qq(...Eq)
    }

    function Kq(qq) {
      let Eq = qq.nodes().map((Eq => {
        let gq = qq.node(Eq).rank;
        return void 0 === gq ? Number.MIN_VALUE : gq
      }));
      return wq(Math.max, Eq)
    }

    function Cq(qq, Eq) {
      let gq = Date.now();
      try {
        return Eq()
      } finally {
        console.log(qq + " time: " + (Date.now() - gq) + "ms")
      }
    }

    function Iq(qq, Eq) {
      return Eq()
    }
    var eq = 0;

    function Dq(qq) {
      return qq + "" + ++eq
    }

    function qE(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Eq && (Eq = qq, qq = 0);
      let Yq = qq => qq < Eq;
      gq < 0 && (Yq = qq => Eq < qq);
      let lq = [];
      for (let Oq = qq; Yq(Oq); Oq += gq) lq.push(Oq);
      return lq
    }

    function EE(qq, Eq) {
      let gq = {};
      for (let Yq of Eq) void 0 !== qq[Yq] && (gq[Yq] = qq[Yq]);
      return gq
    }

    function gE(qq, Eq) {
      let gq;
      return gq = "string" == typeof Eq ? qq => qq[Eq] : Eq, Object.entries(qq).reduce(((qq, Eq) => {
        let [Yq, lq] = Eq;
        return qq[Yq] = gq(lq, Yq), qq
      }), {})
    }
    var YE = "\0";

    function lE(qq, Eq, gq) {
      var Yq, lq, Oq, mq, xq, Aq;
      if (!(qq && Eq && gq && "edge" === Eq.dummy && "edge" === gq.dummy && Eq.edgeObj && gq.edgeObj && qq[Eq.edgeObj.v] && qq[gq.edgeObj.v] && qq[Eq.edgeObj.w] && qq[gq.edgeObj.w])) return 0;
      let cq = !0;
      Eq.edgeObj.w === gq.edgeObj.w && (cq = !1);
      let uq = cq ? null != (lq = null == (Yq = qq[Eq.edgeObj.v]) ? void 0 : Yq.rank) ? lq : NaN : null != (mq = null == (Oq = qq[Eq.edgeObj.w]) ? void 0 : Oq.rank) ? mq : NaN,
        Bq = Object.entries(qq).find((qq => {
          var gq, Yq;
          return (null == (gq = qq[1].edgeObj) ? void 0 : gq.v) === Eq.edgeObj.v && (null == (Yq = qq[1].edgeObj) ? void 0 : Yq.w) === Eq.edgeObj.w && qq[1].rank === uq
        })),
        Wq = Object.entries(qq).find((qq => {
          var Eq, Yq;
          return (null == (Eq = qq[1].edgeObj) ? void 0 : Eq.v) === gq.edgeObj.v && (null == (Yq = qq[1].edgeObj) ? void 0 : Yq.w) === gq.edgeObj.w && qq[1].rank === uq
        }));
      if (!Bq || !Wq) return 0;
      let Nq = null != (xq = Bq[1].order) ? xq : NaN,
        aq = null != (Aq = Wq[1].order) ? Aq : NaN;
      return isNaN(Nq - aq) ? 0 : Nq - aq
    }
    var OE = "3.1.1";

    function mE(qq) {
      qq._prev._next = qq._next, qq._next._prev = qq._prev, delete qq._next, delete qq._prev
    }

    function xE(qq, Eq) {
      if ("_next" !== qq && "_prev" !== qq) return Eq
    }
    var AE = class {
        constructor() {
          lq(this, "_sentinel");
          let qq = {};
          qq._next = qq._prev = qq, this._sentinel = qq
        }
        dequeue() {
          let qq = this._sentinel,
            Eq = qq._prev;
          if (Eq !== qq) return mE(Eq), Eq
        }
        enqueue(qq) {
          let Eq = this._sentinel;
          qq._prev && qq._next && mE(qq), qq._next = Eq._next, Eq._next._prev = qq, Eq._next = qq, qq._prev = Eq
        }
        toString() {
          let qq = [],
            Eq = this._sentinel,
            gq = Eq._prev;
          for (; gq !== Eq;) qq.push(JSON.stringify(gq, xE)), gq = gq._prev;
          return "[" + qq.join(", ") + "]"
        }
      },
      cE = () => 1;

    function uE(qq, Eq) {
      if (qq.nodeCount() <= 1) return [];
      let gq = function(qq, Eq) {
        let gq = new Jq,
          Yq = 0,
          lq = 0;
        qq.nodes().forEach((qq => {
          gq.setNode(qq, {
            v: qq,
            in: 0,
            out: 0
          })
        })), qq.edges().forEach((qq => {
          let Oq = gq.edge(qq.v, qq.w) || 0,
            mq = Eq(qq),
            xq = Oq + mq;
          gq.setEdge(qq.v, qq.w, xq);
          let Aq = gq.node(qq.v),
            cq = gq.node(qq.w);
          lq = Math.max(lq, Aq.out += mq), Yq = Math.max(Yq, cq.in += mq)
        }));
        let Oq = function(qq) {
            let Eq = [];
            for (let gq = 0; gq < qq; gq++) Eq.push(gq);
            return Eq
          }(lq + Yq + 3).map((() => new AE)),
          mq = Yq + 1;
        return gq.nodes().forEach((qq => {
          WE(Oq, mq, gq.node(qq))
        })), {
          graph: gq,
          buckets: Oq,
          zeroIdx: mq
        }
      }(qq, Eq || cE);
      return function(qq, Eq, gq) {
        var Yq;
        let lq, Oq = [],
          mq = Eq[Eq.length - 1],
          xq = Eq[0];
        for (; qq.nodeCount();) {
          for (; lq = xq.dequeue();) BE(qq, Eq, gq, lq);
          for (; lq = mq.dequeue();) BE(qq, Eq, gq, lq);
          if (qq.nodeCount())
            for (let mq = Eq.length - 2; mq > 0; --mq)
              if (lq = null == (Yq = Eq[mq]) ? void 0 : Yq.dequeue(), lq) {
                Oq = Oq.concat(BE(qq, Eq, gq, lq, !0) || []);
                break
              }
        }
        return Oq
      }(gq.graph, gq.buckets, gq.zeroIdx).flatMap((Eq => qq.outEdges(Eq.v, Eq.w) || []))
    }

    function BE(qq, Eq, gq, Yq, lq) {
      let Oq = [],
        mq = lq ? Oq : void 0;
      return (qq.inEdges(Yq.v) || []).forEach((Yq => {
        let mq = qq.edge(Yq),
          xq = qq.node(Yq.v);
        lq && Oq.push({
          v: Yq.v,
          w: Yq.w
        }), xq.out -= mq, WE(Eq, gq, xq)
      })), (qq.outEdges(Yq.v) || []).forEach((Yq => {
        let lq = qq.edge(Yq),
          Oq = Yq.w,
          mq = qq.node(Oq);
        mq.in -= lq, WE(Eq, gq, mq)
      })), qq.removeNode(Yq.v), mq
    }

    function WE(qq, Eq, gq) {
      var Yq, lq, Oq;
      gq.out ? gq.in ? null == (Oq = qq[gq.out - gq.in + Eq]) || Oq.enqueue(gq) : null == (lq = qq[qq.length - 1]) || lq.enqueue(gq) : null == (Yq = qq[0]) || Yq.enqueue(gq)
    }

    function NE(qq, Eq) {
      var gq;
      ("greedy" === qq.graph().acyclicer ? uE(qq, (gq = qq, qq => gq.edge(qq).weight)) : function(qq, Eq) {
        let gq = [],
          Yq = {},
          lq = {};

        function Oq(Eq) {
          Object.hasOwn(lq, Eq) || (lq[Eq] = !0, Yq[Eq] = !0, qq.outEdges(Eq).forEach((qq => {
            Object.hasOwn(Yq, qq.w) ? gq.push(qq) : Oq(qq.w)
          })), delete Yq[Eq])
        }

        function mq(Oq) {
          var xq;
          Object.hasOwn(lq, Oq) || (lq[Oq] = !0, Yq[Oq] = !0, null == (xq = qq.outEdges(Oq)) || xq.forEach((lq => {
            var xq, Aq;
            Object.hasOwn(Yq, lq.w) || (null == (xq = Eq.node(Oq)) ? void 0 : xq.rank) > (null == (Aq = Eq.node(lq.w)) ? void 0 : Aq.rank) && function(qq, Eq, gq) {
              let Yq = new Set;

              function lq(Eq) {
                var Oq;
                if (qq.sources().includes(Eq)) return !0;
                Yq.add(Eq);
                for (let mq of null != (Oq = qq.inEdges(Eq)) ? Oq : [])
                  if ((mq.v !== gq.v || mq.w !== gq.w) && !Yq.has(mq.v) && lq(mq.v)) return !0;
                return !1
              }
              return lq(Eq)
            }(qq, lq.w, lq) ? gq.push(lq) : mq(lq.w)
          })), delete Yq[Oq])
        }
        let xq = Oq;
        return Eq && "function" == typeof Eq.node && (xq = mq), qq.sources().forEach(xq), qq.nodes().forEach(xq), gq
      }(qq, null != Eq ? Eq : null)).forEach((Eq => {
        let gq = qq.edge(Eq);
        qq.removeEdge(Eq), gq.forwardName = Eq.name, gq.reversed = !0, qq.setEdge(Eq.w, Eq.v, gq, Dq("rev"))
      }))
    }

    function aE(qq) {
      qq.graph().dummyChains = [], qq.edges().forEach((Eq => function(qq, Eq) {
        let gq, Yq, lq, Oq = Eq.v,
          mq = qq.node(Oq).rank,
          xq = Eq.w,
          Aq = qq.node(xq).rank,
          cq = Eq.name,
          uq = qq.edge(Eq),
          Bq = uq.labelRank;
        if (Aq === mq + 1) return;
        for (qq.removeEdge(Eq), lq = 0, ++mq; mq < Aq; ++lq, ++mq) uq.points = [], Yq = {
          width: 0,
          height: 0,
          edgeLabel: uq,
          edgeObj: Eq,
          rank: mq
        }, gq = kq(qq, "edge", Yq, "_d"), mq === Bq && (Yq.width = uq.width, Yq.height = uq.height, Yq.dummy = "edge-label", Yq.labelpos = uq.labelpos), qq.setEdge(Oq, gq, {
          weight: uq.weight
        }, cq), 0 === lq && qq.graph().dummyChains.push(gq), Oq = gq;
        qq.setEdge(Oq, xq, {
          weight: uq.weight
        }, cq)
      }(qq, Eq)))
    }

    function VE(qq) {
      let Eq = {};
      qq.sources().forEach((function gq(Yq) {
        let lq = qq.node(Yq);
        if (Object.hasOwn(Eq, Yq)) return lq.rank;
        Eq[Yq] = !0;
        let Oq = qq.outEdges(Yq),
          mq = Oq ? Oq.map((Eq => null == Eq ? Number.POSITIVE_INFINITY : gq(Eq.w) - qq.edge(Eq).minlen)) : [],
          xq = wq(Math.min, mq);
        return xq === Number.POSITIVE_INFINITY && (xq = 0), lq.rank = xq
      }))
    }

    function dE(qq, Eq) {
      return qq.node(Eq.w).rank - qq.node(Eq.v).rank - qq.edge(Eq).minlen
    }
    var jE = function(qq) {
      let Eq = new Jq({
          directed: !1
        }),
        gq = qq.nodes();
      if (0 === gq.length) throw new Error("Graph must have at least one node");
      let Yq, lq, Oq = gq[0],
        mq = qq.nodeCount();
      for (Eq.setNode(Oq, {}); HE(Eq, qq) < mq && (Yq = oE(Eq, qq), Yq);) lq = Eq.hasNode(Yq.v) ? dE(qq, Yq) : -dE(qq, Yq), PE(Eq, qq, lq);
      return Eq
    };

    function HE(qq, Eq) {
      return qq.nodes().forEach((function gq(Yq) {
        let lq = Eq.nodeEdges(Yq);
        lq && lq.forEach((lq => {
          let Oq = lq.v,
            mq = Yq === Oq ? lq.w : Oq;
          !qq.hasNode(mq) && !dE(Eq, lq) && (qq.setNode(mq, {}), qq.setEdge(Yq, mq, {}), gq(mq))
        }))
      })), qq.nodeCount()
    }

    function oE(qq, Eq) {
      return Eq.edges().reduce(((gq, Yq) => {
        let lq = Number.POSITIVE_INFINITY;
        return qq.hasNode(Yq.v) !== qq.hasNode(Yq.w) && (lq = dE(Eq, Yq)), lq < gq[0] ? [lq, Yq] : gq
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function PE(qq, Eq, gq) {
      qq.nodes().forEach((qq => Eq.node(qq).rank += gq))
    }
    var {
      preorder: QE,
      postorder: yE
    } = jq, tE = rE;

    function rE(qq) {
      qq = function(qq) {
        let Eq = (new Jq).setGraph(qq.graph());
        return qq.nodes().forEach((gq => Eq.setNode(gq, qq.node(gq)))), qq.edges().forEach((gq => {
          let Yq = Eq.edge(gq.v, gq.w) || {
              weight: 0,
              minlen: 1
            },
            lq = qq.edge(gq);
          Eq.setEdge(gq.v, gq.w, {
            weight: Yq.weight + lq.weight,
            minlen: Math.max(Yq.minlen, lq.minlen)
          })
        })), Eq
      }(qq), VE(qq);
      let Eq, gq, Yq = jE(qq);
      for (nE(Yq), vE(Yq, qq); Eq = iE(Yq);) gq = ZE(Yq, qq, Eq), fE(Yq, qq, Eq, gq)
    }

    function vE(qq, Eq) {
      let gq = yE(qq, qq.nodes());
      gq = gq.slice(0, gq.length - 1), gq.forEach((gq => function(qq, Eq, gq) {
        let Yq = qq.node(gq).parent,
          lq = qq.edge(gq, Yq);
        lq.cutvalue = hE(qq, Eq, gq)
      }(qq, Eq, gq)))
    }

    function hE(qq, Eq, gq) {
      let Yq = qq.node(gq).parent,
        lq = !0,
        Oq = Eq.edge(gq, Yq),
        mq = 0;
      Oq || (lq = !1, Oq = Eq.edge(Yq, gq)), mq = Oq.weight;
      let xq = Eq.nodeEdges(gq);
      return xq && xq.forEach((Oq => {
        let xq = Oq.v === gq,
          Aq = xq ? Oq.w : Oq.v;
        if (Aq !== Yq) {
          let Yq = xq === lq,
            cq = Eq.edge(Oq).weight;
          if (mq += Yq ? cq : -cq, function(qq, Eq, gq) {
              return qq.hasEdge(Eq, gq)
            }(qq, gq, Aq)) {
            let Eq = qq.edge(gq, Aq).cutvalue;
            mq += Yq ? -Eq : Eq
          }
        }
      })), mq
    }

    function nE(qq, Eq) {
      arguments.length < 2 && (Eq = qq.nodes()[0]), bE(qq, {}, 1, Eq)
    }

    function bE(qq, Eq, gq, Yq, lq) {
      let Oq = gq,
        mq = qq.node(Yq);
      Eq[Yq] = !0;
      let xq = qq.neighbors(Yq);
      return xq && xq.forEach((lq => {
        Object.hasOwn(Eq, lq) || (gq = bE(qq, Eq, gq, lq, Yq))
      })), mq.low = Oq, mq.lim = gq++, lq ? mq.parent = lq : delete mq.parent, gq
    }

    function iE(qq) {
      return qq.edges().find((Eq => qq.edge(Eq).cutvalue < 0))
    }

    function ZE(qq, Eq, gq) {
      let Yq = gq.v,
        lq = gq.w;
      Eq.hasEdge(Yq, lq) || (Yq = gq.w, lq = gq.v);
      let Oq = qq.node(Yq),
        mq = qq.node(lq),
        xq = Oq,
        Aq = !1;
      return Oq.lim > mq.lim && (xq = mq, Aq = !0), Eq.edges().filter((Eq => Aq === ME(qq, qq.node(Eq.v), xq) && Aq !== ME(qq, qq.node(Eq.w), xq))).reduce(((qq, gq) => dE(Eq, gq) < dE(Eq, qq) ? gq : qq))
    }

    function fE(qq, Eq, gq, Yq) {
      let lq = gq.v,
        Oq = gq.w;
      qq.removeEdge(lq, Oq), qq.setEdge(Yq.v, Yq.w, {}), nE(qq), vE(qq, Eq),
        function(qq, Eq) {
          let gq = qq.nodes().find((Eq => !qq.node(Eq).parent));
          if (!gq) return;
          let Yq = QE(qq, [gq]);
          Yq = Yq.slice(1), Yq.forEach((gq => {
            let Yq = qq.node(gq).parent,
              lq = Eq.edge(gq, Yq),
              Oq = !1;
            lq || (lq = Eq.edge(Yq, gq), Oq = !0), Eq.node(gq).rank = Eq.node(Yq).rank + (Oq ? lq.minlen : -lq.minlen)
          }))
        }(qq, Eq)
    }

    function ME(qq, Eq, gq) {
      return gq.low <= Eq.lim && Eq.lim <= gq.lim
    }
    rE.initLowLimValues = nE, rE.initCutValues = vE, rE.calcCutValue = hE, rE.leaveEdge = iE, rE.enterEdge = ZE, rE.exchangeEdges = fE;
    var TE = function(qq) {
      let Eq = qq.graph().ranker;
      if ("function" == typeof Eq) return Eq(qq);
      switch (Eq) {
        case "network-simplex":
        default:
          SE(qq);
          break;
        case "tight-tree":
          ! function(qq) {
            VE(qq), jE(qq)
          }(qq);
          break;
        case "longest-path":
          zE(qq);
        case "none":
      }
    };
    var zE = VE;

    function SE(qq) {
      tE(qq)
    }
    var pE = function(qq) {
      let Eq = function(qq) {
          let Eq = {},
            gq = 0;

          function Yq(lq) {
            let Oq = gq;
            qq.children(lq).forEach(Yq), Eq[lq] = {
              low: Oq,
              lim: gq++
            }
          }
          return qq.children(YE).forEach(Yq), Eq
        }(qq),
        gq = qq.graph();
      if (!Array.isArray(gq.dummyChains)) return;
      gq.dummyChains.forEach((gq => {
        let Yq = qq.node(gq),
          lq = Yq.edgeObj,
          Oq = function(qq, Eq, gq, Yq) {
            let lq, Oq = [],
              mq = [],
              xq = Math.min(Eq[gq].low, Eq[Yq].low),
              Aq = Math.max(Eq[gq].lim, Eq[Yq].lim);
            lq = gq;
            do {
              lq = qq.parent(lq), Oq.push(lq)
            } while (lq && (Eq[lq].low > xq || Aq > Eq[lq].lim));
            let cq = lq,
              uq = Yq;
            for (;
              (uq = qq.parent(uq)) !== cq;) mq.push(uq);
            return {
              path: Oq.concat(mq.reverse()),
              lca: cq
            }
          }(qq, Eq, lq.v, lq.w),
          mq = Oq.path,
          xq = Oq.lca,
          Aq = 0,
          cq = mq[Aq],
          uq = !0;
        for (; gq !== lq.w;) {
          if (Yq = qq.node(gq), uq) {
            for (;
              (cq = mq[Aq]) !== xq && qq.node(cq).maxRank < Yq.rank;) Aq++;
            cq === xq && (uq = !1)
          }
          if (!uq) {
            for (; Aq < mq.length - 1 && qq.node(mq[Aq + 1]).minRank <= Yq.rank;) Aq++;
            cq = mq[Aq]
          }
          void 0 !== cq && qq.setParent(gq, cq), gq = qq.successors(gq)[0]
        }
      }))
    };

    function GE(qq) {
      let Eq = kq(qq, "root", {}, "_root"),
        gq = function(qq) {
          let Eq = {};

          function gq(Yq, lq) {
            let Oq = qq.children(Yq);
            Oq && Oq.length && Oq.forEach((qq => gq(qq, lq + 1))), Eq[Yq] = lq
          }
          return qq.children(YE).forEach((qq => gq(qq, 1))), Eq
        }(qq),
        Yq = Object.values(gq),
        lq = wq(Math.max, Yq) - 1,
        Oq = 2 * lq + 1;
      qq.graph().nestingRoot = Eq, qq.edges().forEach((Eq => qq.edge(Eq).minlen *= Oq));
      let mq = function(qq) {
        return qq.edges().reduce(((Eq, gq) => Eq + qq.edge(gq).weight), 0)
      }(qq) + 1;
      qq.children(YE).forEach((Yq => {
        LE(qq, Eq, Oq, mq, lq, gq, Yq)
      })), qq.graph().nodeRankFactor = Oq
    }

    function LE(qq, Eq, gq, Yq, lq, Oq, mq) {
      var xq;
      let Aq = qq.children(mq);
      if (!Aq.length) return void(mq !== Eq && qq.setEdge(Eq, mq, {
        weight: 0,
        minlen: gq
      }));
      let cq = sq(qq, "_bt"),
        uq = sq(qq, "_bb"),
        Bq = qq.node(mq);
      qq.setParent(cq, mq), Bq.borderTop = cq, qq.setParent(uq, mq), Bq.borderBottom = uq, Aq.forEach((xq => {
        var Aq;
        LE(qq, Eq, gq, Yq, lq, Oq, xq);
        let Bq = qq.node(xq),
          Wq = Bq.borderTop ? Bq.borderTop : xq,
          Nq = Bq.borderBottom ? Bq.borderBottom : xq,
          aq = Bq.borderTop ? Yq : 2 * Yq,
          Vq = Wq !== Nq ? 1 : lq - (null != (Aq = Oq[mq]) ? Aq : 0) + 1;
        qq.setEdge(cq, Wq, {
          weight: aq,
          minlen: Vq,
          nestingEdge: !0
        }), qq.setEdge(Nq, uq, {
          weight: aq,
          minlen: Vq,
          nestingEdge: !0
        })
      })), qq.parent(mq) || qq.setEdge(Eq, cq, {
        weight: 0,
        minlen: lq + (null != (xq = Oq[mq]) ? xq : 0)
      })
    }
    var JE = function(qq) {
      qq.children(YE).forEach((function Eq(gq) {
        let Yq = qq.children(gq),
          lq = qq.node(gq);
        if (Yq.length && Yq.forEach(Eq), lq && Object.hasOwn(lq, "minRank")) {
          lq.borderLeft = [], lq.borderRight = [];
          for (let Eq = lq.minRank, Yq = lq.maxRank + 1; Eq < Yq; ++Eq) kE(qq, "borderLeft", "_bl", gq, lq, Eq), kE(qq, "borderRight", "_br", gq, lq, Eq)
        }
      }))
    };

    function kE(qq, Eq, gq, Yq, lq, Oq) {
      let mq = {
          width: 0,
          height: 0,
          rank: Oq,
          borderType: Eq
        },
        xq = lq[Eq][Oq - 1],
        Aq = kq(qq, "border", mq, gq);
      lq[Eq][Oq] = Aq, qq.setParent(Aq, Yq), xq && qq.setEdge(xq, Aq, {
        weight: 1
      })
    }

    function RE(qq) {
      var Eq;
      let gq = null == (Eq = qq.graph().rankdir) ? void 0 : Eq.toLowerCase();
      ("bt" === gq || "rl" === gq) && function(qq) {
        qq.nodes().forEach((Eq => sE(qq.node(Eq)))), qq.edges().forEach((Eq => {
          var gq;
          let Yq = qq.edge(Eq);
          null == (gq = Yq.points) || gq.forEach(sE), Object.hasOwn(Yq, "y") && sE(Yq)
        }))
      }(qq), ("lr" === gq || "rl" === gq) && (function(qq) {
        qq.nodes().forEach((Eq => XE(qq.node(Eq)))), qq.edges().forEach((Eq => {
          var gq;
          let Yq = qq.edge(Eq);
          null == (gq = Yq.points) || gq.forEach(XE), Object.hasOwn(Yq, "x") && XE(Yq)
        }))
      }(qq), UE(qq))
    }

    function UE(qq) {
      qq.nodes().forEach((Eq => FE(qq.node(Eq)))), qq.edges().forEach((Eq => FE(qq.edge(Eq))))
    }

    function FE(qq) {
      let Eq = qq.width;
      qq.width = qq.height, qq.height = Eq
    }

    function sE(qq) {
      qq.y = -qq.y
    }

    function XE(qq) {
      let Eq = qq.x;
      qq.x = qq.y, qq.y = Eq
    }

    function wE(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        gq = {},
        Yq = qq.nodes().filter((Eq => !qq.children(Eq).length)),
        lq = Yq.map((Eq => qq.node(Eq).rank)),
        Oq = qE(wq(Math.max, lq) + 1).map((() => []));
      return Yq.sort(((Eq, gq) => qq.node(Eq).rank - qq.node(gq).rank)).forEach((function Yq(lq) {
        if (gq[lq]) return;
        gq[lq] = !0;
        let mq = qq.node(lq);
        Oq[mq.rank].push(lq);
        let xq = qq.successors(lq);
        xq && [...xq].sort(((gq, Yq) => function(gq, Yq) {
          let lq = qq.node(gq),
            Oq = qq.node(Yq);
          return lE(Eq, lq, Oq)
        }(gq, Yq))).forEach(Yq)
      })), Oq
    }

    function KE(qq, Eq) {
      let gq = 0;
      for (let Yq = 1; Yq < Eq.length; ++Yq) gq += CE(qq, Eq[Yq - 1], Eq[Yq]);
      return gq
    }

    function CE(qq, Eq, gq) {
      let Yq = function(qq, Eq) {
          return qq.reduce(((qq, gq, Yq) => (qq[gq] = Eq[Yq], qq)), {})
        }(gq, gq.map(((qq, Eq) => Eq))),
        lq = Eq.flatMap((Eq => {
          let gq = qq.outEdges(Eq);
          return gq ? gq.map((Eq => ({
            pos: Yq[Eq.w],
            weight: qq.edge(Eq).weight
          }))).sort(((qq, Eq) => qq.pos - Eq.pos)) : []
        })),
        Oq = 1;
      for (; Oq < gq.length;) Oq <<= 1;
      let mq = 2 * Oq - 1;
      Oq -= 1;
      let xq = new Array(mq).fill(0),
        Aq = 0;
      return lq.forEach((qq => {
        let Eq = qq.pos + Oq;
        xq[Eq] += qq.weight;
        let gq = 0;
        for (; Eq > 0;) Eq % 2 && (gq += xq[Eq + 1]), Eq = Eq - 1 >> 1, xq[Eq] += qq.weight;
        Aq += qq.weight * gq
      })), Aq
    }

    function IE(qq, Eq) {
      let gq = {};
      return qq.forEach(((qq, Eq) => {
          let Yq = {
            indegree: 0,
            in: [],
            out: [],
            vs: [qq.v],
            i: Eq
          };
          void 0 !== qq.barycenter && (Yq.barycenter = qq.barycenter, Yq.weight = qq.weight), gq[qq.v] = Yq
        })), Eq.edges().forEach((qq => {
          let Eq = gq[qq.v],
            Yq = gq[qq.w];
          void 0 !== Eq && void 0 !== Yq && (Yq.indegree++, Eq.out.push(Yq))
        })),
        function(qq) {
          let Eq = [];

          function gq(qq) {
            return Eq => {
              Eq.merged || (void 0 === Eq.barycenter || void 0 === qq.barycenter || Eq.barycenter >= qq.barycenter) && function(qq, Eq) {
                let gq = 0,
                  Yq = 0;
                qq.weight && (gq += qq.barycenter * qq.weight, Yq += qq.weight), Eq.weight && (gq += Eq.barycenter * Eq.weight, Yq += Eq.weight), qq.vs = Eq.vs.concat(qq.vs), qq.barycenter = gq / Yq, qq.weight = Yq, qq.i = Math.min(Eq.i, qq.i), Eq.merged = !0
              }(qq, Eq)
            }
          }

          function Yq(Eq) {
            return gq => {
              gq.in.push(Eq), 0 === --gq.indegree && qq.push(gq)
            }
          }
          for (; qq.length;) {
            let lq = qq.pop();
            Eq.push(lq), lq.in.reverse().forEach(gq(lq)), lq.out.forEach(Yq(lq))
          }
          return Eq.filter((qq => !qq.merged)).map((qq => EE(qq, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(gq).filter((qq => !qq.indegree)))
    }

    function eE(qq, Eq, gq, Yq, lq) {
      let Oq = {},
        mq = null,
        xq = null,
        Aq = lq;
      "boolean" == typeof Eq ? (Aq = Eq, Oq = {}) : Eq && (Oq = Eq, mq = null != gq ? gq : null, xq = null != Yq ? Yq : null);
      let cq = function(qq, Eq) {
          let gq = {
            lhs: [],
            rhs: []
          };
          return qq.forEach((qq => {
            Eq(qq) ? gq.lhs.push(qq) : gq.rhs.push(qq)
          })), gq
        }(qq, (qq => Object.hasOwn(qq, "barycenter"))),
        uq = cq.lhs,
        Bq = cq.rhs.sort(((qq, Eq) => Eq.i - qq.i)),
        Wq = [],
        Nq = 0,
        aq = 0,
        Vq = 0;
      uq.sort(function(qq, Eq, gq) {
        return (Yq, lq) => {
          if (Yq.barycenter < lq.barycenter) return -1;
          if (Yq.barycenter > lq.barycenter) return 1;
          if (qq && ("string" == typeof Yq.vs[0] || "string" == typeof lq.vs[0])) {
            let gq = qq.node(Yq.vs[0]),
              Oq = qq.node(lq.vs[0]),
              mq = lE(Eq, gq, Oq);
            if (0 !== mq) return mq
          }
          return gq ? lq.i - Yq.i : Yq.i - lq.i
        }
      }(xq, mq, !!Aq));
      for (let [jq, Hq] of Object.entries(Oq)) {
        let qq = uq.findIndex((qq => qq.vs[0] === jq));
        uq.splice(qq + 1, 0, Hq)
      }
      Vq = DE(Wq, Bq, Vq), uq.forEach((qq => {
        Vq += qq.vs.length, Wq.push(qq.vs), Nq += qq.barycenter * qq.weight, aq += qq.weight, Vq = DE(Wq, Bq, Vq)
      }));
      let dq = {
        vs: Wq.flat(1)
      };
      return aq && (dq.barycenter = Nq / aq, dq.weight = aq), dq
    }

    function DE(qq, Eq, gq) {
      let Yq;
      for (; Eq.length && (Yq = Eq[Eq.length - 1]).i <= gq;) Eq.pop(), qq.push(Yq.vs), gq++;
      return gq
    }

    function qg(qq, Eq, gq, Yq, lq) {
      var Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq;
      let dq = null,
        jq = lq;
      "boolean" == typeof Yq ? (jq = Yq, dq = null) : void 0 !== Yq && (dq = Yq);
      let Hq = qq.children(Eq),
        oq = qq.node(Eq),
        Pq = oq ? oq.borderLeft : void 0,
        Qq = oq ? oq.borderRight : void 0,
        yq = {};
      Pq && (Hq = Hq.filter((qq => qq !== Pq && qq !== Qq)));
      let tq = function(qq) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Eq => {
          let gq = qq.inEdges(Eq);
          if (!gq || !gq.length) return {
            v: Eq
          };
          {
            let Yq = gq.reduce(((Eq, gq) => {
              let Yq = qq.edge(gq),
                lq = qq.node(gq.v);
              return {
                sum: Eq.sum + Yq.weight * lq.order,
                weight: Eq.weight + Yq.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Eq,
              barycenter: Yq.sum / Yq.weight,
              weight: Yq.weight
            }
          }
        }))
      }(qq, Hq);
      tq.forEach((Eq => {
        if (qq.children(Eq.v).length) {
          let {
            result: Yq
          } = qg(qq, Eq.v, gq, dq, jq);
          yq[Eq.v] = Yq, Object.hasOwn(Yq, "barycenter") && function(qq, Eq) {
            void 0 !== qq.barycenter ? (qq.barycenter = (qq.barycenter * qq.weight + Eq.barycenter * Eq.weight) / (qq.weight + Eq.weight), qq.weight += Eq.weight) : (qq.barycenter = Eq.barycenter, qq.weight = Eq.weight)
          }(Eq, Yq)
        }
      }));
      let rq = IE(tq, gq);
      ! function(qq, Eq) {
        qq.forEach((qq => {
          qq.vs = qq.vs.flatMap((qq => Eq[qq] ? Eq[qq].vs : qq))
        }))
      }(rq, yq);
      let vq = {},
        hq = !1;
      for (let bq = 0; bq < rq.length; bq++)
        for (let Eq = bq + 1; Eq < rq.length; Eq++)
          if (rq[bq] && rq[Eq] && null != (Oq = rq[bq]) && Oq.barycenter && null != (mq = rq[Eq]) && mq.barycenter && (null == (xq = rq[bq]) ? void 0 : xq.barycenter) === rq[Eq].barycenter) {
            let gq = null != (cq = null == (Aq = rq[bq]) ? void 0 : Aq.vs[0]) ? cq : "",
              Yq = null != (Bq = null == (uq = rq[Eq]) ? void 0 : uq.vs[0]) ? Bq : "",
              lq = qq.node(gq),
              Oq = qq.node(Yq);
            if ("edge" === lq.dummy && "edge" === Oq.dummy && (null == (Wq = lq.edgeObj) ? void 0 : Wq.v) === (null == (Nq = Oq.edgeObj) ? void 0 : Nq.v) && (null == (aq = lq.edgeObj) ? void 0 : aq.w) === (null == (Vq = Oq.edgeObj) ? void 0 : Vq.w)) {
              if (lq.edgeLabel.reversed) {
                vq[Yq] = rq[bq], rq.splice(bq, 1), bq--;
                break
              }
              vq[gq] = rq[Eq], rq.splice(Eq, 1), Eq--
            } else hq = !0
          } let nq = eE(rq, vq, dq, qq, jq);
      if (Pq && Qq) {
        nq.vs = [Pq, nq.vs, Qq].flat(1);
        let Eq = qq.predecessors(Pq);
        if (Eq && Eq.length) {
          let gq = qq.node(Eq[0]),
            Yq = qq.predecessors(Qq),
            lq = qq.node(Yq[0]);
          Object.hasOwn(nq, "barycenter") || (nq.barycenter = 0, nq.weight = 0), nq.barycenter = (nq.barycenter * nq.weight + gq.order + lq.order) / (nq.weight + 2), nq.weight += 2
        }
      }
      return Object.defineProperty(nq, "result", {
        value: nq,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(nq, "usedBias", {
        value: hq,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), nq
    }

    function Eg(qq, Eq, gq, Yq) {
      Yq || (Yq = qq.nodes());
      let lq = function(qq) {
          let Eq;
          for (; qq.hasNode(Eq = Dq("_root")););
          return Eq
        }(qq),
        Oq = new Jq({
          compound: !0
        }).setGraph({
          root: lq
        }).setDefaultNodeLabel((Eq => qq.node(Eq)));
      return Yq.forEach((Yq => {
        let mq = qq.node(Yq),
          xq = qq.parent(Yq);
        if (mq.rank === Eq || mq.minRank <= Eq && Eq <= mq.maxRank) {
          Oq.setNode(Yq), Oq.setParent(Yq, xq || lq);
          let Aq = qq[gq](Yq);
          Aq && Aq.forEach((Eq => {
            let gq = Eq.v === Yq ? Eq.w : Eq.v,
              lq = Oq.edge(gq, Yq),
              mq = void 0 !== lq ? lq.weight : 0;
            Oq.setEdge(gq, Yq, {
              weight: qq.edge(Eq).weight + mq
            })
          })), Object.hasOwn(mq, "minRank") && Oq.setNode(Yq, {
            borderLeft: mq.borderLeft[Eq],
            borderRight: mq.borderRight[Eq]
          })
        }
      })), Oq
    }

    function gg(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Eq.customOrder) return void Eq.customOrder(qq, gg);
      let Yq = Kq(qq),
        lq = Yg(qq, qE(1, Yq + 1), "inEdges"),
        Oq = Yg(qq, qE(Yq - 1, -1, -1), "outEdges"),
        mq = wE(qq, gq);
      if (Og(qq, mq), Eq.disableOptimalOrderHeuristic) return;
      let xq, Aq = Number.POSITIVE_INFINITY,
        cq = Eq.constraints || [];
      for (let uq = 0, Bq = 0; Bq < 4; ++uq, ++Bq) {
        lg(uq % 2 ? lq : Oq, uq % 4 >= 2, cq, gq), mq = Fq(qq);
        let Eq = KE(qq, mq);
        Eq < Aq ? (Bq = 0, xq = Object.assign({}, mq), Aq = Eq) : Eq === Aq && (xq = structuredClone(mq))
      }
      Og(qq, xq)
    }

    function Yg(qq, Eq, gq) {
      let Yq = new Map,
        lq = (qq, Eq) => {
          Yq.has(qq) || Yq.set(qq, []), Yq.get(qq).push(Eq)
        };
      for (let Oq of qq.nodes()) {
        let Eq = qq.node(Oq);
        if ("number" == typeof Eq.rank && lq(Eq.rank, Oq), "number" == typeof Eq.minRank && "number" == typeof Eq.maxRank)
          for (let qq = Eq.minRank; qq <= Eq.maxRank; qq++) qq !== Eq.rank && lq(qq, Oq)
      }
      return Eq.map((function(Eq) {
        return Eg(qq, Eq, gq, Yq.get(Eq) || [])
      }))
    }

    function lg(qq, Eq, gq, Yq) {
      let lq = !0,
        Oq = new Jq;
      qq.forEach((function(qq) {
        gq.forEach((qq => Oq.setEdge(qq.left, qq.right)));
        let mq = qq.graph().root,
          {
            result: xq,
            usedBias: Aq
          } = qg(qq, mq, Oq, Yq, lq);
        Eq && Aq && (lq = !lq), xq.vs.forEach(((Eq, gq) => qq.node(Eq).order = gq)),
          function(qq, Eq, gq) {
            let Yq, lq = {};
            gq.forEach((gq => {
              let Oq, mq, xq = qq.parent(gq);
              for (; xq;) {
                if (Oq = qq.parent(xq), Oq ? (mq = lq[Oq], lq[Oq] = xq) : (mq = Yq, Yq = xq), mq && mq !== xq) return void Eq.setEdge(mq, xq);
                xq = Oq
              }
            }))
          }(qq, Oq, xq.vs)
      }))
    }

    function Og(qq, Eq) {
      Object.values(Eq).forEach((Eq => Eq.forEach(((Eq, gq) => qq.node(Eq).order = gq))))
    }

    function mg(qq, Eq, gq) {
      if (Eq > gq) {
        let qq = Eq;
        Eq = gq, gq = qq
      }
      let Yq = qq[Eq];
      Yq || (qq[Eq] = Yq = {}), Yq[gq] = !0
    }

    function xg(qq, Eq, gq) {
      if (Eq > gq) {
        let qq = Eq;
        Eq = gq, gq = qq
      }
      let Yq = qq[Eq];
      return void 0 !== Yq && Object.hasOwn(Yq, gq)
    }

    function Ag(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Oq = {},
        mq = function(qq, Eq, gq, Yq) {
          let lq = new Jq,
            Oq = qq.graph(),
            mq = function(qq, Eq, gq) {
              return (Yq, lq, Oq) => {
                let mq, xq = Yq.node(lq),
                  Aq = Yq.node(Oq),
                  cq = 0;
                if (cq += xq.width / 2, Object.hasOwn(xq, "labelpos")) switch (xq.labelpos.toLowerCase()) {
                  case "l":
                    mq = -xq.width / 2;
                    break;
                  case "r":
                    mq = xq.width / 2
                }
                if (mq && (cq += gq ? mq : -mq), mq = void 0, cq += (xq.dummy ? Eq : qq) / 2, cq += (Aq.dummy ? Eq : qq) / 2, cq += Aq.width / 2, Object.hasOwn(Aq, "labelpos")) switch (Aq.labelpos.toLowerCase()) {
                  case "l":
                    mq = Aq.width / 2;
                    break;
                  case "r":
                    mq = -Aq.width / 2
                }
                return mq && (cq += gq ? mq : -mq), cq
              }
            }(Oq.nodesep, Oq.edgesep, Yq);
          return Eq.forEach((Eq => {
            let Yq;
            Eq.forEach((Eq => {
              let Oq = gq[Eq];
              if (void 0 !== Oq) {
                if (lq.setNode(Oq), void 0 !== Yq) {
                  let xq = gq[Yq];
                  if (void 0 !== xq) {
                    let gq = lq.edge(xq, Oq);
                    lq.setEdge(xq, Oq, Math.max(mq(qq, Eq, Yq), gq || 0))
                  }
                }
                Yq = Eq
              }
            }))
          })), lq
        }(qq, Eq, gq, lq),
        xq = lq ? "borderLeft" : "borderRight";

      function Aq(qq, Eq) {
        let gq = mq.nodes().slice(),
          Yq = {},
          lq = gq.pop();
        for (; lq;) {
          if (Yq[lq]) qq(lq);
          else {
            Yq[lq] = !0, gq.push(lq);
            for (let qq of Eq(lq)) gq.push(qq)
          }
          lq = gq.pop()
        }
      }
      return Aq((function(qq) {
        let Eq = mq.inEdges(qq);
        Oq[qq] = Eq ? Eq.reduce(((qq, Eq) => {
          var gq;
          let Yq = null != (gq = Oq[Eq.v]) ? gq : 0,
            lq = mq.edge(Eq);
          return Math.max(qq, Yq + (void 0 !== lq ? lq : 0))
        }), 0) : 0
      }), (function(qq) {
        return mq.predecessors(qq) || []
      })), Aq((function(Eq) {
        let gq = mq.outEdges(Eq),
          Yq = Number.POSITIVE_INFINITY;
        gq && (Yq = gq.reduce(((qq, Eq) => {
          let gq = Oq[Eq.w],
            Yq = mq.edge(Eq);
          return Math.min(qq, (void 0 !== gq ? gq : 0) - (void 0 !== Yq ? Yq : 0))
        }), Number.POSITIVE_INFINITY));
        let lq = qq.node(Eq);
        Yq !== Number.POSITIVE_INFINITY && lq.borderType !== xq && (Oq[Eq] = Math.max(void 0 !== Oq[Eq] ? Oq[Eq] : 0, Yq))
      }), (function(qq) {
        return mq.successors(qq) || []
      })), Object.keys(Yq).forEach((qq => {
        var Eq;
        let Yq = gq[qq];
        void 0 !== Yq && (Oq[qq] = null != (Eq = Oq[Yq]) ? Eq : 0)
      })), Oq
    }

    function cg(qq, Eq) {
      let gq, Yq = Fq(qq),
        lq = Object.assign(function(qq, Eq) {
          let gq = {};
          return Eq.length && Eq.reduce((function(Eq, Yq) {
            let lq = 0,
              Oq = 0,
              mq = Eq.length,
              xq = Yq[Yq.length - 1];
            return Yq.forEach(((Eq, Aq) => {
              let cq = function(qq, Eq) {
                  if (qq.node(Eq).dummy) {
                    let gq = qq.predecessors(Eq);
                    if (gq) return gq.find((Eq => qq.node(Eq).dummy))
                  }
                }(qq, Eq),
                uq = cq ? qq.node(cq).order : mq;
              (cq || Eq === xq) && (Yq.slice(Oq, Aq + 1).forEach((Eq => {
                let Yq = qq.predecessors(Eq);
                Yq && Yq.forEach((Yq => {
                  let Oq = qq.node(Yq),
                    mq = Oq.order;
                  (mq < lq || uq < mq) && (!Oq.dummy || !qq.node(Eq).dummy) && mg(gq, Yq, Eq)
                }))
              })), Oq = Aq + 1, lq = uq)
            })), Yq
          })), gq
        }(qq, Yq), function(qq, Eq) {
          let gq = {};

          function Yq(Eq, Yq, lq, Oq, mq) {
            qE(Yq, lq).forEach((Yq => {
              let lq = Eq[Yq];
              if (void 0 !== lq && qq.node(lq).dummy) {
                let Eq = qq.predecessors(lq);
                Eq && Eq.forEach((Eq => {
                  if (void 0 === Eq) return;
                  let Yq = qq.node(Eq);
                  Yq.dummy && (Yq.order < Oq || Yq.order > mq) && mg(gq, Eq, lq)
                }))
              }
            }))
          }
          return Eq.length && Eq.reduce((function(Eq, gq) {
            let lq = -1,
              Oq = -1,
              mq = 0;
            return gq.forEach(((xq, Aq) => {
              if ("border" === qq.node(xq).dummy) {
                let Eq = qq.predecessors(xq);
                if (Eq && Eq.length) {
                  let xq = Eq[0];
                  if (void 0 === xq) return;
                  Oq = qq.node(xq).order, Yq(gq, mq, Aq, lq, Oq), mq = Aq, lq = Oq
                }
              }
              Yq(gq, mq, gq.length, Oq, Eq.length)
            })), gq
          })), gq
        }(qq, Yq)),
        Oq = {};
      ["u", "d"].forEach((mq => {
        gq = "u" === mq ? Yq : Object.values(Yq).reverse(), ["l", "r"].forEach((Yq => {
          "r" === Yq && (gq = gq.map((qq => Object.values(qq).reverse())));
          let xq = function(qq, Eq, gq, Yq, lq) {
              let Oq = {},
                mq = {},
                xq = {};
              return Eq.forEach((qq => {
                qq.forEach(((qq, Eq) => {
                  Oq[qq] = qq, mq[qq] = qq, xq[qq] = Eq
                }))
              })), Eq.forEach((Eq => {
                let Aq = -1,
                  cq = -1,
                  uq = !1,
                  Bq = Eq,
                  Wq = Eq.findIndex((Eq => (null == lq ? void 0 : lq.includes(Eq)) || ug(Eq, qq, lq)));
                Wq > 0 && (Bq = [Eq[Wq], ...Eq.slice(0, Wq), ...Eq.slice(Wq + 1)], uq = !0), Bq.forEach((Eq => {
                  var Bq;
                  let Wq = Yq(Eq);
                  if (Wq && Wq.length) {
                    null != lq && lq.includes(Eq) && (Wq = Wq.filter((Eq => ug(Eq, qq, lq))));
                    let Yq = Wq.sort(((qq, Eq) => {
                        let gq = xq[qq],
                          Yq = xq[Eq];
                        return (void 0 !== gq ? gq : 0) - (void 0 !== Yq ? Yq : 0)
                      })),
                      Nq = (Yq.length - 1) / 2;
                    for (let qq = Math.floor(Nq), lq = Math.ceil(Nq); qq <= lq; ++qq) {
                      let lq = Yq[qq];
                      if (void 0 === lq) continue;
                      let Wq = xq[lq];
                      if (void 0 !== Wq && mq[Eq] === Eq && Aq < Wq && xq[lq] !== cq && !xg(gq, Eq, lq)) {
                        let qq = Oq[lq];
                        void 0 !== qq && (mq[lq] = Eq, mq[Eq] = Oq[Eq] = qq, Aq = Wq, uq && (Aq = -1, cq = null != (Bq = xq[lq]) ? Bq : -1, uq = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Oq,
                align: mq
              }
            }(qq, gq, lq, (Eq => ("u" === mq ? qq.predecessors(Eq) : qq.successors(Eq)) || []), Eq),
            Aq = Ag(qq, gq, xq.root, xq.align, "r" === Yq);
          "r" === Yq && (Aq = gE(Aq, (qq => -qq))), Oq[mq + Yq] = Aq
        }))
      }));
      let mq = function(qq, Eq) {
        return Object.values(Eq).reduce(((Eq, gq) => {
          let Yq = Number.NEGATIVE_INFINITY,
            lq = Number.POSITIVE_INFINITY;
          Object.entries(gq).forEach((Eq => {
            let [gq, Oq] = Eq, mq = function(qq, Eq) {
              return qq.node(Eq).width
            }(qq, gq) / 2;
            Yq = Math.max(Oq + mq, Yq), lq = Math.min(Oq - mq, lq)
          }));
          let Oq = Yq - lq;
          return Oq < Eq[0] && (Eq = [Oq, gq]), Eq
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(qq, Oq);
      return function(qq, Eq) {
          let gq = Object.values(Eq),
            Yq = wq(Math.min, gq),
            lq = wq(Math.max, gq);
          ["u", "d"].forEach((gq => {
            ["l", "r"].forEach((Oq => {
              let mq = gq + Oq,
                xq = qq[mq];
              if (!xq || xq === Eq) return;
              let Aq = Object.values(xq),
                cq = Yq - wq(Math.min, Aq);
              "l" !== Oq && (cq = lq - wq(Math.max, Aq)), cq && (qq[mq] = gE(xq, (qq => qq + cq)))
            }))
          }))
        }(Oq, mq),
        function(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            gq = qq.ul;
          return gq ? gE(gq, ((gq, Yq) => {
            var lq, Oq;
            if (Eq) {
              let gq = Eq.toLowerCase(),
                lq = qq[gq];
              if (lq && void 0 !== lq[Yq]) return lq[Yq]
            }
            let mq = Object.values(qq).map((qq => {
              let Eq = qq[Yq];
              return void 0 !== Eq ? Eq : 0
            })).sort(((qq, Eq) => qq - Eq));
            return ((null != (lq = mq[1]) ? lq : 0) + (null != (Oq = mq[2]) ? Oq : 0)) / 2
          })) : {}
        }(Oq, qq.graph().align)
    }

    function ug(qq, Eq, gq) {
      var Yq;
      if (!gq) return !1;
      let lq = null == (Yq = Eq.node(qq)) ? void 0 : Yq.edgeObj;
      if (!lq || Eq.node(qq).edgeLabel.reversed) return !1;
      let Oq = gq.indexOf(null == lq ? void 0 : lq.v),
        mq = gq.indexOf(null == lq ? void 0 : lq.w);
      return -1 !== Oq && -1 !== mq && Oq === (mq + 1) % gq.length || Oq === (mq - 1) % gq.length
    }

    function Bg(qq, Eq) {
      (function(qq) {
        let Eq = Fq(qq),
          gq = qq.graph(),
          Yq = gq.ranksep,
          lq = gq.rankalign,
          Oq = 0;
        Eq.forEach((Eq => {
          let gq = Eq.reduce(((Eq, gq) => {
            var Yq;
            let lq = null != (Yq = qq.node(gq).height) ? Yq : 0;
            return Eq > lq ? Eq : lq
          }), 0);
          Eq.forEach((Eq => {
            let Yq = qq.node(Eq);
            Yq.y = "top" === lq ? Oq + Yq.height / 2 : "bottom" === lq ? Oq + gq - Yq.height / 2 : Oq + gq / 2
          })), Oq += gq + Yq
        }))
      })(qq = Rq(qq)), Object.entries(cg(qq, Eq)).forEach((Eq => {
        let [gq, Yq] = Eq;
        return qq.node(gq).x = Yq
      }))
    }
    var Wg = new WeakMap;

    function Ng(qq) {
      return Vg(qq, Iq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), qq
    }

    function ag(qq, Eq, gq) {
      let Yq = Eq;
      for (; void 0 !== Yq;) {
        let Eq = qq.parent(Yq);
        if (Eq === gq) return Yq;
        Yq = Eq
      }
    }

    function Vg(qq, Eq, gq) {
      var Yq;
      let lq = qq.nodes().filter((Eq => qq.children(Eq).length)),
        Oq = {};
      lq.forEach((Yq => {
        let lq = qq.node(Yq);
        if (lq && lq.rankdir) {
          let mq = new Jq({
            multigraph: !0,
            compound: !0
          });
          mq.setGraph({
            rankdir: lq.rankdir
          });
          let xq = qq.children(Yq);
          xq.forEach((Eq => {
            let gq = {
              ...qq.node(Eq)
            };
            mq.setNode(Eq, gq);
            let lq = qq.parent(Eq);
            lq && lq !== Yq && xq.includes(lq) && mq.setParent(Eq, lq)
          }));
          let Aq = new Set;
          qq.edges().forEach((Eq => {
            let gq = ag(qq, Eq.v, Yq),
              lq = ag(qq, Eq.w, Yq);
            if (gq && lq && gq !== lq) {
              let Yq = `${gq}\0${lq}`;
              Aq.has(Yq) || (Aq.add(Yq), mq.setEdge(gq, lq, {
                ...qq.edge(Eq)
              }))
            }
          })), Vg(mq, Eq, gq);
          let cq = hg(mq);
          dg(cq, Eq, gq, null), jg(mq, cq);
          let uq = 1 / 0,
            Bq = 1 / 0,
            Wq = -1 / 0,
            Nq = -1 / 0;
          mq.nodes().forEach((qq => {
            if (qq === Yq) return;
            let Eq = mq.node(qq);
            Eq && "number" == typeof Eq.x && "number" == typeof Eq.y && "number" == typeof Eq.width && "number" == typeof Eq.height && (uq = Math.min(uq, Eq.x - Eq.width / 2), Wq = Math.max(Wq, Eq.x + Eq.width / 2), Bq = Math.min(Bq, Eq.y - Eq.height / 2), Nq = Math.max(Nq, Eq.y + Eq.height / 2))
          })), (!isFinite(uq) || !isFinite(Bq) || !isFinite(Wq) || !isFinite(Nq)) && (uq = Bq = 0, Wq = Nq = 0);
          let aq = Wq - uq,
            Vq = Nq - Bq;
          Oq[Yq] = {
            minX: uq,
            Cl: Bq,
            maxX: Wq,
            Il: Nq,
            width: aq,
            height: Vq,
            offsetX: uq,
            offsetY: Bq
          }, lq._dagreClusterSubgraph = mq
        }
      }));
      let mq = [],
        xq = new Map;
      lq.forEach((Eq => {
        let gq = qq.node(Eq);
        gq && gq.rankdir && Oq[Eq] && xq.set(Eq, (qq.children(Eq) || []).filter((qq => qq !== Eq)))
      }));
      let Aq = new Set([...xq.values()].flat()),
        cq = new Map;
      xq.forEach(((Eq, gq) => {
        Aq.has(gq) || cq.set(gq, (Eq => {
          let gq = [],
            Yq = (qq.children(Eq) || []).filter((qq => qq !== Eq));
          for (; Yq.length > 0;) {
            let Eq = Yq.shift();
            gq.push(Eq), (qq.children(Eq) || []).filter((qq => qq !== Eq)).forEach((qq => Yq.push(qq)))
          }
          return gq
        })(gq))
      }));
      let uq = new Set([...cq.values()].flat()),
        Bq = qq => {
          for (let [Eq, gq] of cq)
            if (gq.includes(qq)) return Eq;
          return qq
        },
        Wq = [];
      qq.edges().forEach((Eq => {
        (uq.has(Eq.v) || uq.has(Eq.w)) && Wq.push({
          edge: Eq,
          label: qq.edge(Eq)
        })
      }));
      let Nq = new Map;
      uq.forEach((Eq => {
        let gq = qq.parent(Eq);
        Nq.set(Eq, "string" == typeof gq ? gq : void 0)
      })), cq.forEach(((Eq, gq) => {
        let Yq = qq.node(gq),
          lq = [];
        Eq.forEach((Eq => {
          let gq = qq.node(Eq);
          gq && (lq.push({
            id: Eq,
            node: gq,
            parent: Nq.get(Eq)
          }), qq.removeNode(Eq))
        }));
        let xq = Wq.filter((qq => {
            let {
              edge: gq
            } = qq;
            return Eq.includes(gq.v) || Eq.includes(gq.w)
          })),
          Aq = Oq[gq];
        Yq && (mq.push({
          clusterId: gq,
          subgraph: Yq._dagreClusterSubgraph,
          bounds: Aq,
          children: Eq,
          removedNodes: lq,
          removedEdges: xq
        }), Yq.width = Aq.width, Yq.height = Aq.height)
      }));
      let aq = new Set;
      Wq.forEach((Eq => {
        let {
          edge: gq,
          label: Yq
        } = Eq, lq = Bq(gq.v), Oq = Bq(gq.w);
        if (lq !== Oq && qq.hasNode(lq) && qq.hasNode(Oq)) {
          let Eq = `${lq}\0${Oq}`;
          aq.has(Eq) || (aq.add(Eq), qq.setEdge(lq, Oq, {
            ...Yq,
            width: 0,
            height: 0
          }))
        }
      }));
      let Vq = hg(qq),
        dq = dg(Vq, Eq, gq, null != (Yq = Wg.get(qq)) ? Yq : null);
      Wg.set(qq, dq), jg(qq, Vq), aq.forEach((Eq => {
        let gq = Eq.indexOf("\0"),
          Yq = Eq.slice(0, gq),
          lq = Eq.slice(gq + 1);
        qq.hasEdge(Yq, lq) && qq.removeEdge(Yq, lq)
      })), mq.forEach((Eq => {
        let {
          clusterId: gq,
          subgraph: Yq,
          bounds: lq,
          removedNodes: Oq,
          removedEdges: mq
        } = Eq;
        var xq, Aq;
        let cq = qq.node(gq),
          uq = null != (xq = null == cq ? void 0 : cq.x) ? xq : 0,
          Bq = null != (Aq = null == cq ? void 0 : cq.y) ? Aq : 0,
          Wq = (lq.minX + lq.maxX) / 2,
          Nq = (lq.Cl + lq.Il) / 2;
        Oq.forEach((Eq => {
          let {
            id: gq,
            node: Yq,
            parent: lq
          } = Eq;
          qq.setNode(gq, Yq), void 0 !== lq && qq.setParent(gq, lq)
        })), mq.forEach((Eq => {
          let {
            edge: gq,
            label: Yq
          } = Eq;
          qq.setEdge(gq, Yq)
        })), Yq.nodes().forEach((Eq => {
          if (Eq === gq) return;
          let lq = Yq.node(Eq),
            Oq = qq.node(Eq);
          Oq && lq && "number" == typeof lq.x && "number" == typeof lq.y && (Oq.x = uq + (lq.x - Wq), Oq.y = Bq + (lq.y - Nq))
        })), delete cq._dagreClusterSubgraph
      })), lq.forEach((Eq => {
        var gq, Yq;
        let lq = qq.node(Eq),
          mq = Oq[Eq];
        if (lq && lq.rankdir && lq._dagreClusterSubgraph && mq) {
          let Oq = lq._dagreClusterSubgraph,
            xq = null != (gq = lq.x) ? gq : 0,
            Aq = null != (Yq = lq.y) ? Yq : 0,
            cq = (mq.minX + mq.maxX) / 2,
            uq = (mq.Cl + mq.Il) / 2;
          Oq.nodes().forEach((gq => {
            if (gq === Eq) return;
            let Yq = Oq.node(gq),
              lq = qq.node(gq);
            if (lq && Yq && "number" == typeof Yq.x && "number" == typeof Yq.y) {
              let qq = Yq.x - cq,
                Eq = Yq.y - uq;
              lq.x = xq + qq, lq.y = Aq + Eq
            }
          })), delete lq._dagreClusterSubgraph
        }
      }))
    }

    function dg(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var lq, Oq;
      let mq = !1 !== (null == gq ? void 0 : gq.useDynamic),
        xq = mq && null != (lq = null == Yq ? void 0 : Yq.graph) ? lq : null,
        Aq = mq && null != (Oq = null == Yq ? void 0 : Yq.rawNodes) ? Oq : null;
      Eq("    makeSpaceForEdgeLabels", (() => function(qq) {
        let Eq = qq.graph();
        Eq.ranksep /= 2, qq.edges().forEach((gq => {
          var Yq;
          let lq = qq.edge(gq);
          lq.minlen *= 2, "c" !== (null != (Yq = lq.labelpos) ? Yq : "r").toLowerCase() && ("TB" === Eq.rankdir || "BT" === Eq.rankdir ? lq.width += lq.labeloffset : lq.height += lq.labeloffset)
        }))
      }(qq))), Eq("    removeSelfEdges", (() => function(qq) {
        qq.edges().forEach((Eq => {
          if (Eq.v === Eq.w) {
            let gq = qq.node(Eq.v);
            gq.selfEdges || (gq.selfEdges = []), gq.selfEdges.push({
              e: Eq,
              label: qq.edge(Eq)
            }), qq.removeEdge(Eq)
          }
        }))
      }(qq))), Eq("    acyclic", (() => NE(qq, xq))), Eq("    nestingGraph.run", (() => GE(qq))), Eq("    rank", (() => TE(Rq(qq)))), Eq("    injectEdgeLabelProxies", (() => function(qq) {
        qq.edges().forEach((Eq => {
          let gq = qq.edge(Eq);
          if (gq.width && gq.height) {
            let gq = qq.node(Eq.v),
              Yq = {
                rank: (qq.node(Eq.w).rank - gq.rank) / 2 + gq.rank,
                e: Eq
              };
            kq(qq, "edge-proxy", Yq, "_ep")
          }
        }))
      }(qq))), Eq("    removeEmptyRanks", (() => function(qq) {
        let Eq = qq.nodes().map((Eq => qq.node(Eq).rank)).filter((qq => void 0 !== qq)),
          gq = wq(Math.min, Eq),
          Yq = [];
        qq.nodes().forEach((Eq => {
          let lq = qq.node(Eq).rank - gq;
          Yq[lq] || (Yq[lq] = []), Yq[lq].push(Eq)
        }));
        let lq = 0,
          Oq = qq.graph().nodeRankFactor;
        Array.from(Yq).forEach(((Eq, gq) => {
          void 0 === Eq && gq % Oq !== 0 ? --lq : void 0 !== Eq && lq && Eq.forEach((Eq => qq.node(Eq).rank += lq))
        }))
      }(qq))), Eq("    nestingGraph.cleanup", (() => function(qq) {
        let Eq = qq.graph();
        qq.removeNode(Eq.nestingRoot), delete Eq.nestingRoot, qq.edges().forEach((Eq => {
          qq.edge(Eq).nestingEdge && qq.removeEdge(Eq)
        }))
      }(qq))), Eq("    normalizeRanks", (() => function(qq) {
        let Eq = qq.nodes().map((Eq => {
            let gq = qq.node(Eq).rank;
            return void 0 === gq ? Number.MAX_VALUE : gq
          })),
          gq = wq(Math.min, Eq);
        qq.nodes().forEach((Eq => {
          let Yq = qq.node(Eq);
          Object.hasOwn(Yq, "rank") && (Yq.rank -= gq)
        }))
      }(qq))), Eq("    assignRankMinMax", (() => function(qq) {
        let Eq = 0;
        qq.nodes().forEach((gq => {
          let Yq = qq.node(gq);
          Yq.borderTop && (Yq.minRank = qq.node(Yq.borderTop).rank, Yq.maxRank = qq.node(Yq.borderBottom).rank, Eq = Math.max(Eq, Yq.maxRank))
        })), qq.graph().maxRank = Eq
      }(qq))), Eq("    removeEdgeLabelProxies", (() => function(qq) {
        qq.nodes().forEach((Eq => {
          let gq = qq.node(Eq);
          if ("edge-proxy" === gq.dummy) {
            let Yq = gq;
            qq.edge(Yq.e).labelRank = gq.rank, qq.removeNode(Eq)
          }
        }))
      }(qq))), Eq("    normalize.run", (() => aE(qq))), Eq("    parentDummyChains", (() => pE(qq))), Eq("    addBorderSegments", (() => JE(qq))), Eq("    order", (() => gg(qq, gq, Aq))), Eq("    insertSelfEdges", (() => function(qq) {
        Fq(qq).forEach((Eq => {
          let gq = 0;
          Eq.forEach(((Eq, Yq) => {
            let lq = qq.node(Eq);
            "number" != typeof lq.rank && (lq.rank = 0), lq.order = Yq + gq, (lq.selfEdges || []).forEach((Eq => {
              kq(qq, "selfedge", {
                width: Eq.label.width,
                height: Eq.label.height,
                rank: lq.rank,
                order: Yq + ++gq,
                e: Eq.e,
                edgeLabel: Eq.label
              }, "_se"), (!Array.isArray(Eq.label.points) || 7 !== Eq.label.points.length) && (Eq.label.points = [{
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
            })), delete lq.selfEdges
          }))
        }))
      }(qq))), Eq("    adjustCoordinateSystem", (() => function(qq) {
        var Eq;
        let gq = null == (Eq = qq.graph().rankdir) ? void 0 : Eq.toLowerCase();
        ("lr" === gq || "rl" === gq) && UE(qq)
      }(qq))), Eq("    position", (() => Bg(qq, gq.corePath))), Eq("    positionSelfEdges", (() => function(qq) {
        qq.nodes().forEach((Eq => {
          let gq = qq.node(Eq),
            Yq = qq => "number" == typeof qq && isFinite(qq);
          if ("selfedge" === gq.dummy) {
            let lq = gq,
              Oq = qq.node(lq.e.v),
              mq = Yq(null == Oq ? void 0 : Oq.x) ? Oq.x : 0,
              xq = Yq(null == Oq ? void 0 : Oq.y) ? Oq.y : 0,
              Aq = Yq(null == Oq ? void 0 : Oq.width) ? Oq.width : 0,
              cq = Yq(null == Oq ? void 0 : Oq.height) ? Oq.height : 0,
              uq = Yq(gq.x) ? gq.x : mq,
              Bq = Yq(gq.y) ? gq.y : xq,
              Wq = Aq / 2,
              Nq = cq / 2;
            lq.edgeLabel.points = [{
              x: uq + Wq,
              y: Bq - Nq
            }, {
              x: uq + Wq,
              y: Bq - Nq
            }, {
              x: uq,
              y: Bq
            }, {
              x: uq - Wq,
              y: Bq + Nq
            }, {
              x: uq - Wq,
              y: Bq + Nq
            }, {
              x: uq,
              y: Bq
            }, {
              x: uq,
              y: Bq
            }], lq.edgeLabel.x = uq, lq.edgeLabel.y = Bq, qq.setEdge(lq.e, lq.edgeLabel), qq.removeNode(Eq)
          } else gq && Array.isArray(gq.selfEdges) && gq.selfEdges.forEach((qq => {
            if (!Array.isArray(qq.label.points) || 7 !== qq.label.points.length) {
              let Eq = Yq(gq.x) ? gq.x : 0,
                lq = Yq(gq.y) ? gq.y : 0,
                Oq = (Yq(gq.width) ? gq.width : 0) / 2,
                mq = (Yq(gq.height) ? gq.height : 0) / 2;
              qq.label.points = [{
                x: Eq + Oq,
                y: lq - mq
              }, {
                x: Eq + Oq,
                y: lq - mq
              }, {
                x: Eq,
                y: lq
              }, {
                x: Eq - Oq,
                y: lq + mq
              }, {
                x: Eq - Oq,
                y: lq + mq
              }, {
                x: Eq,
                y: lq
              }, {
                x: Eq,
                y: lq
              }]
            }
          }))
        }))
      }(qq)));
      let cq = JSON.parse(JSON.stringify(qq._nodes));
      return Eq("    removeBorderNodes", (() => function(qq) {
        qq.nodes().forEach((Eq => {
          if (qq.children(Eq).length) {
            let gq = qq.node(Eq),
              Yq = qq.node(gq.borderTop),
              lq = qq.node(gq.borderBottom),
              Oq = qq.node(gq.borderLeft[gq.borderLeft.length - 1]),
              mq = qq.node(gq.borderRight[gq.borderRight.length - 1]);
            gq.width = Math.abs(mq.x - Oq.x), gq.height = Math.abs(lq.y - Yq.y), gq.x = Oq.x + gq.width / 2, gq.y = Yq.y + gq.height / 2
          }
        })), qq.nodes().forEach((Eq => {
          "border" === qq.node(Eq).dummy && qq.removeNode(Eq)
        }))
      }(qq))), Eq("    normalize.undo", (() => function(qq) {
        qq.graph().dummyChains.forEach((Eq => {
          let gq, Yq = qq.node(Eq),
            lq = Yq.edgeLabel;
          for (qq.setEdge(Yq.edgeObj, lq); Yq.dummy;) gq = qq.successors(Eq)[0], qq.removeNode(Eq), lq.points.push({
            x: Yq.x,
            y: Yq.y
          }), "edge-label" === Yq.dummy && (lq.x = Yq.x, lq.y = Yq.y, lq.width = Yq.width, lq.height = Yq.height), Eq = gq, Yq = qq.node(Eq)
        }))
      }(qq))), Eq("    fixupEdgeLabelCoords", (() => function(qq) {
        qq.edges().forEach((Eq => {
          let gq = qq.edge(Eq);
          if (Object.hasOwn(gq, "x")) switch (("l" === gq.labelpos || "r" === gq.labelpos) && (gq.width -= gq.labeloffset), gq.labelpos) {
            case "l":
              gq.x -= gq.width / 2 + gq.labeloffset;
              break;
            case "r":
              gq.x += gq.width / 2 + gq.labeloffset
          }
        }))
      }(qq))), Eq("    undoCoordinateSystem", (() => RE(qq))), Eq("    translateGraph", (() => function(qq) {
        let Eq = Number.POSITIVE_INFINITY,
          gq = 0,
          Yq = Number.POSITIVE_INFINITY,
          lq = 0,
          Oq = qq.graph(),
          mq = Oq.marginx || 0,
          xq = Oq.marginy || 0;

        function Aq(qq) {
          let Oq = qq.x,
            mq = qq.y,
            xq = qq.width,
            Aq = qq.height;
          Eq = Math.min(Eq, Oq - xq / 2), gq = Math.max(gq, Oq + xq / 2), Yq = Math.min(Yq, mq - Aq / 2), lq = Math.max(lq, mq + Aq / 2)
        }
        qq.nodes().forEach((Eq => Aq(qq.node(Eq)))), qq.edges().forEach((Eq => {
          let gq = qq.edge(Eq);
          Object.hasOwn(gq, "x") && Aq(gq)
        })), Eq -= mq, Yq -= xq, qq.nodes().forEach((gq => {
          let lq = qq.node(gq);
          lq.x -= Eq, lq.y -= Yq
        })), qq.edges().forEach((gq => {
          let lq = qq.edge(gq);
          lq.points.forEach((qq => {
            qq.x -= Eq, qq.y -= Yq
          })), Object.hasOwn(lq, "x") && (lq.x -= Eq), Object.hasOwn(lq, "y") && (lq.y -= Yq)
        })), Oq.width = gq - Eq + mq, Oq.height = lq - Yq + xq
      }(qq))), Eq("    assignNodeIntersects", (() => function(qq) {
        qq.edges().forEach((Eq => {
          if (Eq.v === Eq.w) return;
          let gq, Yq, lq = qq.edge(Eq),
            Oq = qq.node(Eq.v),
            mq = qq.node(Eq.w);
          lq.points ? (gq = lq.points[0], Yq = lq.points[lq.points.length - 1]) : (lq.points = [], gq = mq, Yq = Oq), lq.points.unshift(Uq(Oq, gq)), lq.points.push(Uq(mq, Yq))
        }))
      }(qq))), Eq("    reversePoints", (() => function(qq) {
        qq.edges().forEach((Eq => {
          let gq = qq.edge(Eq);
          gq.reversed && gq.points.reverse()
        }))
      }(qq))), Eq("    acyclic.undo", (() => function(qq) {
        qq.edges().forEach((Eq => {
          let gq = qq.edge(Eq);
          if (gq.reversed) {
            qq.removeEdge(Eq);
            let Yq = gq.forwardName;
            delete gq.reversed, delete gq.forwardName, qq.setEdge(Eq.w, Eq.v, gq, Yq)
          }
        }))
      }(qq))), {
        graph: qq,
        rawNodes: cq
      }
    }

    function jg(qq, Eq) {
      qq.nodes().forEach((gq => {
        let Yq = qq.node(gq),
          lq = Eq.node(gq);
        Yq && (Yq.x = lq.x, Yq.y = lq.y, Yq.order = lq.order, Yq.rank = lq.rank, Eq.children(gq).length && (Yq.width = lq.width, Yq.height = lq.height))
      })), qq.edges().forEach((gq => {
        let Yq = qq.edge(gq),
          lq = Eq.edge(gq);
        Yq.points = lq.points, Object.hasOwn(lq, "x") && (Yq.x = lq.x, Yq.y = lq.y)
      })), qq.graph().width = Eq.graph().width, qq.graph().height = Eq.graph().height
    }
    var Hg = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      og = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Pg = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Qg = ["width", "height", "rank"],
      yg = {
        width: 0,
        height: 0
      },
      tg = ["minlen", "weight", "width", "height", "labeloffset"],
      rg = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      vg = ["labelpos"];

    function hg(qq) {
      let Eq = new Jq({
          multigraph: !0,
          compound: !0
        }),
        gq = bg(qq.graph());
      return Eq.setGraph(Object.assign({}, og, ng(gq, Hg), EE(gq, Pg))), qq.nodes().forEach((gq => {
        let Yq = ng(bg(qq.node(gq)), Qg);
        Object.keys(yg).forEach((qq => {
          void 0 === Yq[qq] && (Yq[qq] = yg[qq])
        })), Eq.setNode(gq, Yq);
        let lq = qq.parent(gq);
        void 0 !== lq && Eq.setParent(gq, lq)
      })), qq.edges().forEach((gq => {
        let Yq = bg(qq.edge(gq));
        Eq.setEdge(gq, Object.assign({}, rg, ng(Yq, tg), EE(Yq, vg)))
      })), Eq
    }

    function ng(qq, Eq) {
      return gE(EE(qq, Eq), Number)
    }

    function bg(qq) {
      let Eq = {};
      return qq && Object.entries(qq).forEach((qq => {
        let [gq, Yq] = qq;
        "string" == typeof gq && (gq = gq.toLowerCase()), Eq[gq] = Yq
      })), Eq
    }

    function ig(qq) {
      let Eq = Fq(qq),
        gq = new Jq({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return qq.nodes().forEach((Eq => {
        gq.setNode(Eq, {
          label: Eq
        }), gq.setParent(Eq, "layer" + qq.node(Eq).rank)
      })), qq.edges().forEach((qq => gq.setEdge(qq.v, qq.w, {}, qq.name))), Eq.forEach(((qq, Eq) => {
        let Yq = "layer" + Eq;
        gq.setNode(Yq, {
          rank: "same"
        }), qq.reduce(((qq, Eq) => (gq.setEdge(qq, Eq, {
          style: "invis"
        }), Eq)))
      })), gq
    }
    var Zg = {
        time: Cq,
        notime: Iq
      },
      fg = {
        graphlib: Oq,
        version: OE,
        layout: Ng,
        debug: ig,
        util: {
          time: Cq,
          notime: Iq
        }
      }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);