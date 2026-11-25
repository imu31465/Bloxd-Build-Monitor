/*! For license information please see 8104he.122.fef51db6.chunk.js.LICENSE.txt */
export const id = 122;
export const ids = [122];
export const modules = {
  6830: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      Graph: () => SQ,
      debug: () => iX,
      default: () => AX,
      graphlib: () => TQ,
      layout: () => IX,
      util: () => cX,
      version: () => TW
    });
    var wQ = Object.defineProperty,
      qQ = (QQ, WQ, XQ) => ((QQ, WQ, XQ) => WQ in QQ ? wQ(QQ, WQ, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: XQ
      }) : QQ[WQ] = XQ)(QQ, "symbol" != typeof WQ ? WQ + "" : WQ, XQ),
      TQ = {};
    ((QQ, WQ) => {
      for (var XQ in WQ) wQ(QQ, XQ, {
        get: WQ[XQ],
        enumerable: !0
      })
    })(TQ, {
      Graph: () => SQ,
      alg: () => VQ
    });
    var zQ = Object.defineProperty,
      sQ = (QQ, WQ) => {
        for (var XQ in WQ) zQ(QQ, XQ, {
          get: WQ[XQ],
          enumerable: !0
        })
      },
      FQ = class {
        constructor(QQ) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, QQ && (this._isDirected = !("directed" in QQ) || QQ.directed, this._isMultigraph = "multigraph" in QQ && QQ.multigraph, this._isCompound = "compound" in QQ && QQ.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(QQ) {
          return this._label = QQ, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(QQ) {
          return this._defaultNodeLabelFn = "function" != typeof QQ ? () => QQ : QQ, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((QQ => 0 === Object.keys(this._in[QQ]).length))
        }
        sinks() {
          return this.nodes().filter((QQ => 0 === Object.keys(this._out[QQ]).length))
        }
        setNodes(QQ, WQ) {
          return QQ.forEach((QQ => {
            void 0 !== WQ ? this.setNode(QQ, WQ) : this.setNode(QQ)
          })), this
        }
        setNode(QQ, WQ) {
          return QQ in this._nodes ? (arguments.length > 1 && (this._nodes[QQ] = WQ), this) : (this._nodes[QQ] = arguments.length > 1 ? WQ : this._defaultNodeLabelFn(QQ), this._isCompound && (this._parent[QQ] = "\0", this._children[QQ] = {}, this._children["\0"][QQ] = !0), this._in[QQ] = {}, this._preds[QQ] = {}, this._out[QQ] = {}, this._sucs[QQ] = {}, ++this._nodeCount, this)
        }
        node(QQ) {
          return this._nodes[QQ]
        }
        hasNode(QQ) {
          return QQ in this._nodes
        }
        removeNode(QQ) {
          if (QQ in this._nodes) {
            let WQ = QQ => this.removeEdge(this._edgeObjs[QQ]);
            delete this._nodes[QQ], this._isCompound && (this._removeFromParentsChildList(QQ), delete this._parent[QQ], this.children(QQ).forEach((QQ => {
              this.setParent(QQ)
            })), delete this._children[QQ]), Object.keys(this._in[QQ]).forEach(WQ), delete this._in[QQ], delete this._preds[QQ], Object.keys(this._out[QQ]).forEach(WQ), delete this._out[QQ], delete this._sucs[QQ], --this._nodeCount
          }
          return this
        }
        setParent(QQ, WQ) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === WQ) WQ = "\0";
          else {
            for (let XQ = WQ += ""; void 0 !== XQ; XQ = this.parent(XQ))
              if (XQ === QQ) throw new Error("Setting " + WQ + " as parent of " + QQ + " would create a cycle");
            this.setNode(WQ)
          }
          return this.setNode(QQ), this._removeFromParentsChildList(QQ), this._parent[QQ] = WQ, this._children[WQ][QQ] = !0, this
        }
        parent(QQ) {
          if (this._isCompound) {
            let WQ = this._parent[QQ];
            if ("\0" !== WQ) return WQ
          }
        }
        children() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let WQ = this._children[QQ];
            if (WQ) return Object.keys(WQ)
          } else {
            if ("\0" === QQ) return this.nodes();
            if (this.hasNode(QQ)) return []
          }
          return []
        }
        predecessors(QQ) {
          let WQ = this._preds[QQ];
          if (WQ) return Object.keys(WQ)
        }
        successors(QQ) {
          let WQ = this._sucs[QQ];
          if (WQ) return Object.keys(WQ)
        }
        neighbors(QQ) {
          let WQ = this.predecessors(QQ);
          if (WQ) {
            let XQ = new Set(WQ),
              wQ = this.successors(QQ);
            if (wQ)
              for (let QQ of wQ) XQ.add(QQ);
            return Array.from(XQ.values())
          }
        }
        isLeaf(QQ) {
          var WQ;
          let XQ;
          return XQ = this.isDirected() ? this.successors(QQ) : this.neighbors(QQ), 0 === (null != (WQ = null == XQ ? void 0 : XQ.length) ? WQ : 0)
        }
        filterNodes(QQ) {
          let WQ = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          WQ.setGraph(this.graph()), Object.entries(this._nodes).forEach((XQ => {
            let [wQ, qQ] = XQ;
            QQ(wQ) && WQ.setNode(wQ, qQ)
          })), Object.values(this._edgeObjs).forEach((QQ => {
            WQ.hasNode(QQ.v) && WQ.hasNode(QQ.w) && WQ.setEdge(QQ, this.edge(QQ))
          }));
          let XQ = {},
            wQ = QQ => {
              let qQ = this.parent(QQ);
              return !qQ || WQ.hasNode(qQ) ? (XQ[QQ] = qQ, qQ) : qQ in XQ ? XQ[qQ] : wQ(qQ)
            };
          return this._isCompound && WQ.nodes().forEach((QQ => WQ.setParent(QQ, wQ(QQ)))), WQ
        }
        setDefaultEdgeLabel(QQ) {
          return this._defaultEdgeLabelFn = "function" != typeof QQ ? () => QQ : QQ, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(QQ, WQ) {
          return QQ.reduce(((QQ, XQ) => (void 0 !== WQ ? this.setEdge(QQ, XQ, WQ) : this.setEdge(QQ, XQ), XQ))), this
        }
        setEdge(QQ, WQ, XQ, wQ) {
          let qQ, TQ, zQ, sQ, FQ = !1;
          "object" == typeof QQ && null !== QQ && "v" in QQ ? (qQ = QQ.v, TQ = QQ.w, zQ = QQ.name, 2 === arguments.length && (sQ = WQ, FQ = !0)) : (qQ = QQ, TQ = WQ, zQ = wQ, arguments.length > 2 && (sQ = XQ, FQ = !0)), qQ = "" + qQ, TQ = "" + TQ, void 0 !== zQ && (zQ = "" + zQ);
          let gQ = JQ(this._isDirected, qQ, TQ, zQ);
          if (gQ in this._edgeLabels) return FQ && (this._edgeLabels[gQ] = sQ), this;
          if (void 0 !== zQ && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(qQ), this.setNode(TQ), this._edgeLabels[gQ] = FQ ? sQ : this._defaultEdgeLabelFn(qQ, TQ, zQ);
          let rQ = function(QQ, WQ, XQ, wQ) {
            let qQ = "" + WQ,
              TQ = "" + XQ;
            if (!QQ && qQ > TQ) {
              let QQ = qQ;
              qQ = TQ, TQ = QQ
            }
            let zQ = {
              v: qQ,
              w: TQ
            };
            return wQ && (zQ.name = wQ), zQ
          }(this._isDirected, qQ, TQ, zQ);
          return qQ = rQ.v, TQ = rQ.w, Object.freeze(rQ), this._edgeObjs[gQ] = rQ, PQ(this._preds[TQ], qQ), PQ(this._sucs[qQ], TQ), this._in[TQ][gQ] = rQ, this._out[qQ][gQ] = rQ, this._edgeCount++, this
        }
        edge(QQ, WQ, XQ) {
          let wQ = 1 === arguments.length ? rQ(this._isDirected, QQ) : JQ(this._isDirected, QQ, WQ, XQ);
          return this._edgeLabels[wQ]
        }
        edgeAsObj(QQ, WQ, XQ) {
          let wQ = 1 === arguments.length ? this.edge(QQ) : this.edge(QQ, WQ, XQ);
          return "object" != typeof wQ || null === wQ ? {
            label: wQ
          } : wQ
        }
        hasEdge(QQ, WQ, XQ) {
          return (1 === arguments.length ? rQ(this._isDirected, QQ) : JQ(this._isDirected, QQ, WQ, XQ)) in this._edgeLabels
        }
        removeEdge(QQ, WQ, XQ) {
          let wQ = 1 === arguments.length ? rQ(this._isDirected, QQ) : JQ(this._isDirected, QQ, WQ, XQ),
            qQ = this._edgeObjs[wQ];
          if (qQ) {
            let QQ = qQ.v,
              WQ = qQ.w;
            delete this._edgeLabels[wQ], delete this._edgeObjs[wQ], gQ(this._preds[WQ], QQ), gQ(this._sucs[QQ], WQ), delete this._in[WQ][wQ], delete this._out[QQ][wQ], this._edgeCount--
          }
          return this
        }
        inEdges(QQ, WQ) {
          return this.isDirected() ? this.filterEdges(this._in[QQ], QQ, WQ) : this.nodeEdges(QQ, WQ)
        }
        outEdges(QQ, WQ) {
          return this.isDirected() ? this.filterEdges(this._out[QQ], QQ, WQ) : this.nodeEdges(QQ, WQ)
        }
        nodeEdges(QQ, WQ) {
          if (QQ in this._nodes) return this.filterEdges({
            ...this._in[QQ],
            ...this._out[QQ]
          }, QQ, WQ)
        }
        _removeFromParentsChildList(QQ) {
          delete this._children[this._parent[QQ]][QQ]
        }
        filterEdges(QQ, WQ, XQ) {
          if (!QQ) return;
          let wQ = Object.values(QQ);
          return XQ ? wQ.filter((QQ => QQ.v === WQ && QQ.w === XQ || QQ.v === XQ && QQ.w === WQ)) : wQ
        }
      };

    function PQ(QQ, WQ) {
      QQ[WQ] ? QQ[WQ]++ : QQ[WQ] = 1
    }

    function gQ(QQ, WQ) {
      void 0 !== QQ[WQ] && !--QQ[WQ] && delete QQ[WQ]
    }

    function JQ(QQ, WQ, XQ, wQ) {
      let qQ = "" + WQ,
        TQ = "" + XQ;
      if (!QQ && qQ > TQ) {
        let QQ = qQ;
        qQ = TQ, TQ = QQ
      }
      return qQ + "\x01" + TQ + "\x01" + (void 0 === wQ ? "\0" : wQ)
    }

    function rQ(QQ, WQ) {
      return JQ(QQ, WQ.v, WQ.w, WQ.name)
    }

    function IQ(QQ) {
      let WQ = {
          options: {
            directed: QQ.isDirected(),
            multigraph: QQ.isMultigraph(),
            compound: QQ.isCompound()
          },
          nodes: jQ(QQ),
          edges: BQ(QQ)
        },
        XQ = QQ.graph();
      return void 0 !== XQ && (WQ.value = structuredClone(XQ)), WQ
    }

    function jQ(QQ) {
      return QQ.nodes().map((WQ => {
        let XQ = QQ.node(WQ),
          wQ = QQ.parent(WQ),
          qQ = {
            v: WQ
          };
        return void 0 !== XQ && (qQ.value = XQ), void 0 !== wQ && (qQ.parent = wQ), qQ
      }))
    }

    function BQ(QQ) {
      return QQ.edges().map((WQ => {
        let XQ = QQ.edge(WQ),
          wQ = {
            v: WQ.v,
            w: WQ.w
          };
        return void 0 !== WQ.name && (wQ.name = WQ.name), void 0 !== XQ && (wQ.value = XQ), wQ
      }))
    }

    function yQ(QQ) {
      let WQ = new FQ(QQ.options);
      return void 0 !== QQ.value && WQ.setGraph(QQ.value), QQ.nodes.forEach((QQ => {
        WQ.setNode(QQ.v, QQ.value), QQ.parent && WQ.setParent(QQ.v, QQ.parent)
      })), QQ.edges.forEach((QQ => {
        WQ.setEdge({
          v: QQ.v,
          w: QQ.w,
          name: QQ.name
        }, QQ.value)
      })), WQ
    }
    sQ({}, {
      read: () => yQ,
      write: () => IQ
    });
    var VQ = {};
    sQ(VQ, {
      CycleException: () => iQ,
      bellmanFord: () => pQ,
      components: () => GQ,
      dijkstra: () => vQ,
      dijkstraAll: () => dQ,
      findCycles: () => aQ,
      floydWarshall: () => hQ,
      isAcyclic: () => AQ,
      postorder: () => uQ,
      preorder: () => LQ,
      prim: () => kQ,
      shortestPaths: () => fQ,
      tarjan: () => HQ,
      topsort: () => cQ
    });
    var DQ = () => 1;

    function pQ(QQ, WQ, XQ, wQ) {
      return function(QQ, WQ, XQ, wQ) {
        let qQ, TQ = {},
          zQ = 0,
          sQ = QQ.nodes(),
          FQ = function(QQ) {
            let WQ = TQ[QQ.v],
              wQ = TQ[QQ.w];
            if (!WQ || !wQ) return;
            let zQ = XQ(QQ);
            WQ.distance + zQ < wQ.distance && (TQ[QQ.w] = {
              distance: WQ.distance + zQ,
              predecessor: QQ.v
            }, qQ = !0)
          },
          PQ = function() {
            sQ.forEach((function(QQ) {
              wQ(QQ).forEach((function(WQ) {
                let XQ = WQ.v === QQ ? WQ.v : WQ.w,
                  wQ = XQ === WQ.v ? WQ.w : WQ.v;
                FQ({
                  v: XQ,
                  w: wQ
                })
              }))
            }))
          };
        sQ.forEach((function(QQ) {
          let XQ = QQ === WQ ? 0 : Number.POSITIVE_INFINITY;
          TQ[QQ] = {
            distance: XQ,
            predecessor: ""
          }
        }));
        let gQ = sQ.length;
        for (let JQ = 1; JQ < gQ && (qQ = !1, zQ++, PQ(), qQ); JQ++);
        if (zQ === gQ - 1 && (qQ = !1, PQ(), qQ)) throw new Error("The graph contains a negative weight cycle");
        return TQ
      }(QQ, String(WQ), XQ || DQ, wQ || function(WQ) {
        var XQ;
        return null != (XQ = QQ.outEdges(WQ)) ? XQ : []
      })
    }

    function GQ(QQ) {
      let WQ, XQ = {},
        wQ = [];

      function qQ(wQ) {
        var TQ, zQ;
        wQ in XQ || (XQ[wQ] = !0, WQ.push(wQ), null == (TQ = QQ.successors(wQ)) || TQ.forEach(qQ), null == (zQ = QQ.predecessors(wQ)) || zQ.forEach(qQ))
      }
      return QQ.nodes().forEach((function(QQ) {
        WQ = [], qQ(QQ), WQ.length && wQ.push(WQ)
      })), wQ
    }
    var UQ = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((QQ => QQ.key))
        }
        has(QQ) {
          return QQ in this._keyIndices
        }
        priority(QQ) {
          let WQ = this._keyIndices[QQ];
          if (void 0 !== WQ) return this._arr[WQ].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(QQ, WQ) {
          let XQ = this._keyIndices,
            wQ = String(QQ);
          if (!(wQ in XQ)) {
            let QQ = this._arr,
              qQ = QQ.length;
            return XQ[wQ] = qQ, QQ.push({
              key: wQ,
              priority: WQ
            }), this._decrease(qQ), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let QQ = this._arr.pop();
          return delete this._keyIndices[QQ.key], this._heapify(0), QQ.key
        }
        decrease(QQ, WQ) {
          let XQ = this._keyIndices[QQ];
          if (void 0 === XQ) throw new Error(`Key not found: ${QQ}`);
          let wQ = this._arr[XQ].priority;
          if (WQ > wQ) throw new Error(`New priority is greater than current priority. Key: ${QQ} Old: ${wQ} New: ${WQ}`);
          this._arr[XQ].priority = WQ, this._decrease(XQ)
        }
        _heapify(QQ) {
          let WQ = this._arr,
            XQ = 2 * QQ,
            wQ = XQ + 1,
            qQ = QQ;
          XQ < WQ.length && (qQ = WQ[XQ].priority < WQ[qQ].priority ? XQ : qQ, wQ < WQ.length && (qQ = WQ[wQ].priority < WQ[qQ].priority ? wQ : qQ), qQ !== QQ && (this._swap(QQ, qQ), this._heapify(qQ)))
        }
        _decrease(QQ) {
          let WQ, XQ = this._arr,
            wQ = XQ[QQ].priority;
          for (; 0 !== QQ && (WQ = QQ >> 1, !(XQ[WQ].priority < wQ));) this._swap(QQ, WQ), QQ = WQ
        }
        _swap(QQ, WQ) {
          let XQ = this._arr,
            wQ = this._keyIndices,
            qQ = XQ[QQ],
            TQ = XQ[WQ];
          XQ[QQ] = TQ, XQ[WQ] = qQ, wQ[TQ.key] = QQ, wQ[qQ.key] = WQ
        }
      },
      bQ = () => 1;

    function vQ(QQ, WQ, XQ, wQ) {
      return function(QQ, WQ, XQ, wQ) {
        let qQ, TQ, zQ = {},
          sQ = new UQ,
          FQ = function(QQ) {
            let WQ = QQ.v !== qQ ? QQ.v : QQ.w,
              wQ = zQ[WQ];
            if (!wQ) return;
            let FQ = XQ(QQ),
              PQ = TQ.distance + FQ;
            if (FQ < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + QQ + " Weight: " + FQ);
            PQ < wQ.distance && (wQ.distance = PQ, wQ.predecessor = qQ, sQ.decrease(WQ, PQ))
          };
        for (QQ.nodes().forEach((function(QQ) {
            let XQ = QQ === WQ ? 0 : Number.POSITIVE_INFINITY;
            zQ[QQ] = {
              distance: XQ,
              predecessor: ""
            }, sQ.add(QQ, XQ)
          })); sQ.size() > 0;) {
          qQ = sQ.removeMin();
          let QQ = zQ[qQ];
          if (!QQ || QQ.distance === Number.POSITIVE_INFINITY) break;
          TQ = QQ, wQ(qQ).forEach(FQ)
        }
        return zQ
      }(QQ, String(WQ), XQ || bQ, wQ || function(WQ) {
        var XQ;
        return null != (XQ = QQ.outEdges(WQ)) ? XQ : []
      })
    }

    function dQ(QQ, WQ, XQ) {
      return QQ.nodes().reduce((function(wQ, qQ) {
        return wQ[qQ] = vQ(QQ, qQ, WQ, XQ), wQ
      }), {})
    }

    function HQ(QQ) {
      let WQ = 0,
        XQ = [],
        wQ = {},
        qQ = [];

      function TQ(zQ) {
        var sQ;
        let FQ = wQ[zQ] = {
          onStack: !0,
          lowlink: WQ,
          index: WQ++
        };
        if (XQ.push(zQ), null == (sQ = QQ.successors(zQ)) || sQ.forEach((function(QQ) {
            if (QQ in wQ) {
              let WQ = wQ[QQ];
              null != WQ && WQ.onStack && (FQ.lowlink = Math.min(FQ.lowlink, WQ.index))
            } else {
              TQ(QQ);
              let WQ = wQ[QQ];
              WQ && (FQ.lowlink = Math.min(FQ.lowlink, WQ.lowlink))
            }
          })), FQ.lowlink === FQ.index) {
          let QQ, WQ = [];
          do {
            QQ = XQ.pop();
            let qQ = wQ[QQ];
            qQ && (qQ.onStack = !1), WQ.push(QQ)
          } while (zQ !== QQ);
          qQ.push(WQ)
        }
      }
      return QQ.nodes().forEach((function(QQ) {
        QQ in wQ || TQ(QQ)
      })), qQ
    }

    function aQ(QQ) {
      return HQ(QQ).filter((function(WQ) {
        var XQ;
        let wQ = WQ[0];
        return !!wQ && (WQ.length > 1 || 1 === WQ.length && (null != (XQ = QQ.outEdges(wQ, wQ)) ? XQ : []).length > 0)
      }))
    }
    var lQ = () => 1;

    function hQ(QQ, WQ, XQ) {
      return function(QQ, WQ, XQ) {
        let wQ = {},
          qQ = QQ.nodes();
        return qQ.forEach((function(QQ) {
          let TQ = {};
          wQ[QQ] = TQ, TQ[QQ] = {
            distance: 0,
            predecessor: ""
          }, qQ.forEach((function(WQ) {
            QQ !== WQ && (TQ[WQ] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), XQ(QQ).forEach((function(XQ) {
            let wQ = XQ.v === QQ ? XQ.w : XQ.v,
              qQ = WQ(XQ);
            TQ[wQ] = {
              distance: qQ,
              predecessor: QQ
            }
          }))
        })), qQ.forEach((function(QQ) {
          let WQ = wQ[QQ];
          WQ && qQ.forEach((function(XQ) {
            let TQ = wQ[XQ];
            TQ && qQ.forEach((function(XQ) {
              let wQ = TQ[QQ],
                qQ = WQ[XQ],
                zQ = TQ[XQ];
              if (wQ && qQ && zQ) {
                let QQ = wQ.distance + qQ.distance;
                QQ < zQ.distance && (zQ.distance = QQ, zQ.predecessor = qQ.predecessor)
              }
            }))
          }))
        })), wQ
      }(QQ, WQ || lQ, XQ || function(WQ) {
        var XQ;
        return null != (XQ = QQ.outEdges(WQ)) ? XQ : []
      })
    }
    var iQ = class extends Error {
      constructor(QQ) {
        super(QQ), this.name = "CycleException"
      }
    };

    function cQ(QQ) {
      let WQ = {},
        XQ = {},
        wQ = [];
      if (QQ.sinks().forEach((function qQ(TQ) {
          var zQ;
          if (TQ in XQ) throw new iQ;
          TQ in WQ || (XQ[TQ] = !0, WQ[TQ] = !0, null == (zQ = QQ.predecessors(TQ)) || zQ.forEach(qQ), delete XQ[TQ], wQ.push(TQ))
        })), Object.keys(WQ).length !== QQ.nodeCount()) throw new iQ;
      return wQ
    }

    function AQ(QQ) {
      try {
        cQ(QQ)
      } catch (WQ) {
        if (WQ instanceof iQ) return !1;
        throw WQ
      }
      return !0
    }

    function RQ(QQ, WQ, XQ, wQ, qQ) {
      Array.isArray(WQ) || (WQ = [WQ]);
      let TQ = WQ => {
          var XQ;
          return null != (XQ = QQ.isDirected() ? QQ.successors(WQ) : QQ.neighbors(WQ)) ? XQ : []
        },
        zQ = {};
      return WQ.forEach((function(WQ) {
        if (!QQ.hasNode(WQ)) throw new Error("Graph does not have node: " + WQ);
        qQ = EQ(QQ, WQ, "post" === XQ, zQ, TQ, wQ, qQ)
      })), qQ
    }

    function EQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      return WQ in wQ || (wQ[WQ] = !0, XQ || (zQ = TQ(zQ, WQ)), qQ(WQ).forEach((function(WQ) {
        zQ = EQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ)
      })), XQ && (zQ = TQ(zQ, WQ))), zQ
    }

    function CQ(QQ, WQ, XQ) {
      return RQ(QQ, WQ, XQ, (function(QQ, WQ) {
        return QQ.push(WQ), QQ
      }), [])
    }

    function uQ(QQ, WQ) {
      return CQ(QQ, WQ, "post")
    }

    function LQ(QQ, WQ) {
      return CQ(QQ, WQ, "pre")
    }

    function kQ(QQ, WQ) {
      var XQ;
      let wQ, qQ = new FQ,
        TQ = {},
        zQ = new UQ;

      function sQ(QQ) {
        let XQ = QQ.v === wQ ? QQ.w : QQ.v,
          qQ = zQ.priority(XQ);
        if (void 0 !== qQ) {
          let sQ = WQ(QQ);
          sQ < qQ && (TQ[XQ] = wQ, zQ.decrease(XQ, sQ))
        }
      }
      if (0 === QQ.nodeCount()) return qQ;
      QQ.nodes().forEach((function(QQ) {
        zQ.add(QQ, Number.POSITIVE_INFINITY), qQ.setNode(QQ)
      }));
      let PQ = QQ.nodes()[0];
      void 0 !== PQ && zQ.decrease(PQ, 0);
      let gQ = !1;
      for (; zQ.size() > 0;) {
        if (wQ = zQ.removeMin(), wQ in TQ) qQ.setEdge(wQ, TQ[wQ]);
        else {
          if (gQ) throw new Error("Input graph is not connected: " + QQ);
          gQ = !0
        }
        null == (XQ = QQ.nodeEdges(wQ)) || XQ.forEach(sQ)
      }
      return qQ
    }

    function fQ(QQ, WQ, XQ, wQ) {
      return function(QQ, WQ, XQ, wQ) {
        if (void 0 === XQ) return vQ(QQ, WQ, XQ, wQ);
        let qQ = !1,
          TQ = QQ.nodes();
        for (let zQ = 0; zQ < TQ.length; zQ++) {
          let sQ = TQ[zQ];
          if (void 0 === sQ) continue;
          let FQ = wQ(sQ);
          for (let QQ = 0; QQ < FQ.length; QQ++) {
            let WQ = FQ[QQ];
            if (!WQ) continue;
            let wQ = WQ.v === sQ ? WQ.v : WQ.w;
            XQ({
              v: wQ,
              w: wQ === WQ.v ? WQ.w : WQ.v
            }) < 0 && (qQ = !0)
          }
          if (qQ) return pQ(QQ, WQ, XQ, wQ)
        }
        return vQ(QQ, WQ, XQ, wQ)
      }(QQ, WQ, XQ, null != wQ ? wQ : WQ => {
        var XQ;
        return null != (XQ = QQ.outEdges(WQ)) ? XQ : []
      })
    }
    var SQ = FQ;

    function tQ(QQ, WQ, XQ, wQ) {
      let qQ = wQ;
      for (; QQ.hasNode(qQ);) qQ = MQ(wQ);
      return XQ.dummy = WQ, QQ.setNode(qQ, XQ), qQ
    }

    function oQ(QQ) {
      let WQ = new SQ({
        multigraph: QQ.isMultigraph()
      }).setGraph(QQ.graph());
      return QQ.nodes().forEach((XQ => {
        QQ.children(XQ).length || WQ.setNode(XQ, QQ.node(XQ))
      })), QQ.edges().forEach((XQ => {
        WQ.setEdge(XQ, QQ.edge(XQ))
      })), WQ
    }

    function eQ(QQ, WQ) {
      let XQ, wQ, qQ = QQ.x,
        TQ = QQ.y,
        zQ = WQ.x - qQ,
        sQ = WQ.y - TQ,
        FQ = QQ.width / 2,
        PQ = QQ.height / 2;
      if (!zQ && !sQ) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(sQ) * FQ > Math.abs(zQ) * PQ ? (sQ < 0 && (PQ = -PQ), XQ = PQ * zQ / sQ, wQ = PQ) : (zQ < 0 && (FQ = -FQ), XQ = FQ, wQ = FQ * sQ / zQ), {
        x: qQ + XQ,
        y: TQ + wQ
      }
    }

    function nQ(QQ) {
      let WQ = QW(ZQ(QQ) + 1).map((() => []));
      return QQ.nodes().forEach((XQ => {
        let wQ = QQ.node(XQ),
          qQ = wQ.rank;
        void 0 !== qQ && (WQ[qQ] || (WQ[qQ] = []), WQ[qQ][wQ.order] = XQ)
      })), WQ
    }

    function xQ(QQ, WQ, XQ, wQ) {
      let qQ = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (qQ.rank = XQ, qQ.order = wQ), tQ(QQ, "border", qQ, WQ)
    }
    var YQ = 65535;

    function NQ(QQ, WQ) {
      if (WQ.length > YQ) {
        let XQ = function(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YQ,
            XQ = [];
          for (let wQ = 0; wQ < QQ.length; wQ += WQ) {
            let qQ = QQ.slice(wQ, wQ + WQ);
            XQ.push(qQ)
          }
          return XQ
        }(WQ);
        return QQ(...XQ.map((WQ => QQ(...WQ))))
      }
      return QQ(...WQ)
    }

    function ZQ(QQ) {
      let WQ = QQ.nodes().map((WQ => {
        let XQ = QQ.node(WQ).rank;
        return void 0 === XQ ? Number.MIN_VALUE : XQ
      }));
      return NQ(Math.max, WQ)
    }

    function OQ(QQ, WQ) {
      let XQ = Date.now();
      try {
        return WQ()
      } finally {
        console.log(QQ + " time: " + (Date.now() - XQ) + "ms")
      }
    }

    function KQ(QQ, WQ) {
      return WQ()
    }
    var mQ = 0;

    function MQ(QQ) {
      return QQ + "" + ++mQ
    }

    function QW(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == WQ && (WQ = QQ, QQ = 0);
      let wQ = QQ => QQ < WQ;
      XQ < 0 && (wQ = QQ => WQ < QQ);
      let qQ = [];
      for (let TQ = QQ; wQ(TQ); TQ += XQ) qQ.push(TQ);
      return qQ
    }

    function WW(QQ, WQ) {
      let XQ = {};
      for (let wQ of WQ) void 0 !== QQ[wQ] && (XQ[wQ] = QQ[wQ]);
      return XQ
    }

    function XW(QQ, WQ) {
      let XQ;
      return XQ = "string" == typeof WQ ? QQ => QQ[WQ] : WQ, Object.entries(QQ).reduce(((QQ, WQ) => {
        let [wQ, qQ] = WQ;
        return QQ[wQ] = XQ(qQ, wQ), QQ
      }), {})
    }
    var wW = "\0";

    function qW(QQ, WQ, XQ) {
      var wQ, qQ, TQ, zQ, sQ, FQ;
      if (!(QQ && WQ && XQ && "edge" === WQ.dummy && "edge" === XQ.dummy && WQ.edgeObj && XQ.edgeObj && QQ[WQ.edgeObj.v] && QQ[XQ.edgeObj.v] && QQ[WQ.edgeObj.w] && QQ[XQ.edgeObj.w])) return 0;
      let PQ = !0;
      WQ.edgeObj.w === XQ.edgeObj.w && (PQ = !1);
      let gQ = PQ ? null != (qQ = null == (wQ = QQ[WQ.edgeObj.v]) ? void 0 : wQ.rank) ? qQ : NaN : null != (zQ = null == (TQ = QQ[WQ.edgeObj.w]) ? void 0 : TQ.rank) ? zQ : NaN,
        JQ = Object.entries(QQ).find((QQ => {
          var XQ, wQ;
          return (null == (XQ = QQ[1].edgeObj) ? void 0 : XQ.v) === WQ.edgeObj.v && (null == (wQ = QQ[1].edgeObj) ? void 0 : wQ.w) === WQ.edgeObj.w && QQ[1].rank === gQ
        })),
        rQ = Object.entries(QQ).find((QQ => {
          var WQ, wQ;
          return (null == (WQ = QQ[1].edgeObj) ? void 0 : WQ.v) === XQ.edgeObj.v && (null == (wQ = QQ[1].edgeObj) ? void 0 : wQ.w) === XQ.edgeObj.w && QQ[1].rank === gQ
        }));
      if (!JQ || !rQ) return 0;
      let IQ = null != (sQ = JQ[1].order) ? sQ : NaN,
        jQ = null != (FQ = rQ[1].order) ? FQ : NaN;
      return isNaN(IQ - jQ) ? 0 : IQ - jQ
    }
    var TW = "3.1.1";

    function zW(QQ) {
      QQ._prev._next = QQ._next, QQ._next._prev = QQ._prev, delete QQ._next, delete QQ._prev
    }

    function sW(QQ, WQ) {
      if ("_next" !== QQ && "_prev" !== QQ) return WQ
    }
    var FW = class {
        constructor() {
          qQ(this, "_sentinel");
          let QQ = {};
          QQ._next = QQ._prev = QQ, this._sentinel = QQ
        }
        dequeue() {
          let QQ = this._sentinel,
            WQ = QQ._prev;
          if (WQ !== QQ) return zW(WQ), WQ
        }
        enqueue(QQ) {
          let WQ = this._sentinel;
          QQ._prev && QQ._next && zW(QQ), QQ._next = WQ._next, WQ._next._prev = QQ, WQ._next = QQ, QQ._prev = WQ
        }
        toString() {
          let QQ = [],
            WQ = this._sentinel,
            XQ = WQ._prev;
          for (; XQ !== WQ;) QQ.push(JSON.stringify(XQ, sW)), XQ = XQ._prev;
          return "[" + QQ.join(", ") + "]"
        }
      },
      PW = () => 1;

    function gW(QQ, WQ) {
      if (QQ.nodeCount() <= 1) return [];
      let XQ = function(QQ, WQ) {
        let XQ = new SQ,
          wQ = 0,
          qQ = 0;
        QQ.nodes().forEach((QQ => {
          XQ.setNode(QQ, {
            v: QQ,
            in: 0,
            out: 0
          })
        })), QQ.edges().forEach((QQ => {
          let TQ = XQ.edge(QQ.v, QQ.w) || 0,
            zQ = WQ(QQ),
            sQ = TQ + zQ;
          XQ.setEdge(QQ.v, QQ.w, sQ);
          let FQ = XQ.node(QQ.v),
            PQ = XQ.node(QQ.w);
          qQ = Math.max(qQ, FQ.out += zQ), wQ = Math.max(wQ, PQ.in += zQ)
        }));
        let TQ = function(QQ) {
            let WQ = [];
            for (let XQ = 0; XQ < QQ; XQ++) WQ.push(XQ);
            return WQ
          }(qQ + wQ + 3).map((() => new FW)),
          zQ = wQ + 1;
        return XQ.nodes().forEach((QQ => {
          rW(TQ, zQ, XQ.node(QQ))
        })), {
          graph: XQ,
          buckets: TQ,
          zeroIdx: zQ
        }
      }(QQ, WQ || PW);
      return function(QQ, WQ, XQ) {
        var wQ;
        let qQ, TQ = [],
          zQ = WQ[WQ.length - 1],
          sQ = WQ[0];
        for (; QQ.nodeCount();) {
          for (; qQ = sQ.dequeue();) JW(QQ, WQ, XQ, qQ);
          for (; qQ = zQ.dequeue();) JW(QQ, WQ, XQ, qQ);
          if (QQ.nodeCount())
            for (let zQ = WQ.length - 2; zQ > 0; --zQ)
              if (qQ = null == (wQ = WQ[zQ]) ? void 0 : wQ.dequeue(), qQ) {
                TQ = TQ.concat(JW(QQ, WQ, XQ, qQ, !0) || []);
                break
              }
        }
        return TQ
      }(XQ.graph, XQ.buckets, XQ.zeroIdx).flatMap((WQ => QQ.outEdges(WQ.v, WQ.w) || []))
    }

    function JW(QQ, WQ, XQ, wQ, qQ) {
      let TQ = [],
        zQ = qQ ? TQ : void 0;
      return (QQ.inEdges(wQ.v) || []).forEach((wQ => {
        let zQ = QQ.edge(wQ),
          sQ = QQ.node(wQ.v);
        qQ && TQ.push({
          v: wQ.v,
          w: wQ.w
        }), sQ.out -= zQ, rW(WQ, XQ, sQ)
      })), (QQ.outEdges(wQ.v) || []).forEach((wQ => {
        let qQ = QQ.edge(wQ),
          TQ = wQ.w,
          zQ = QQ.node(TQ);
        zQ.in -= qQ, rW(WQ, XQ, zQ)
      })), QQ.removeNode(wQ.v), zQ
    }

    function rW(QQ, WQ, XQ) {
      var wQ, qQ, TQ;
      XQ.out ? XQ.in ? null == (TQ = QQ[XQ.out - XQ.in + WQ]) || TQ.enqueue(XQ) : null == (qQ = QQ[QQ.length - 1]) || qQ.enqueue(XQ) : null == (wQ = QQ[0]) || wQ.enqueue(XQ)
    }

    function IW(QQ, WQ) {
      var XQ;
      ("greedy" === QQ.graph().acyclicer ? gW(QQ, (XQ = QQ, QQ => XQ.edge(QQ).weight)) : function(QQ, WQ) {
        let XQ = [],
          wQ = {},
          qQ = {};

        function TQ(WQ) {
          Object.hasOwn(qQ, WQ) || (qQ[WQ] = !0, wQ[WQ] = !0, QQ.outEdges(WQ).forEach((QQ => {
            Object.hasOwn(wQ, QQ.w) ? XQ.push(QQ) : TQ(QQ.w)
          })), delete wQ[WQ])
        }

        function zQ(TQ) {
          var sQ;
          Object.hasOwn(qQ, TQ) || (qQ[TQ] = !0, wQ[TQ] = !0, null == (sQ = QQ.outEdges(TQ)) || sQ.forEach((qQ => {
            var sQ, FQ;
            Object.hasOwn(wQ, qQ.w) || (null == (sQ = WQ.node(TQ)) ? void 0 : sQ.rank) > (null == (FQ = WQ.node(qQ.w)) ? void 0 : FQ.rank) && function(QQ, WQ, XQ) {
              let wQ = new Set;

              function qQ(WQ) {
                var TQ;
                if (QQ.sources().includes(WQ)) return !0;
                wQ.add(WQ);
                for (let zQ of null != (TQ = QQ.inEdges(WQ)) ? TQ : [])
                  if ((zQ.v !== XQ.v || zQ.w !== XQ.w) && !wQ.has(zQ.v) && qQ(zQ.v)) return !0;
                return !1
              }
              return qQ(WQ)
            }(QQ, qQ.w, qQ) ? XQ.push(qQ) : zQ(qQ.w)
          })), delete wQ[TQ])
        }
        let sQ = TQ;
        return WQ && "function" == typeof WQ.node && (sQ = zQ), QQ.sources().forEach(sQ), QQ.nodes().forEach(sQ), XQ
      }(QQ, null != WQ ? WQ : null)).forEach((WQ => {
        let XQ = QQ.edge(WQ);
        QQ.removeEdge(WQ), XQ.forwardName = WQ.name, XQ.reversed = !0, QQ.setEdge(WQ.w, WQ.v, XQ, MQ("rev"))
      }))
    }

    function jW(QQ) {
      QQ.graph().dummyChains = [], QQ.edges().forEach((WQ => function(QQ, WQ) {
        let XQ, wQ, qQ, TQ = WQ.v,
          zQ = QQ.node(TQ).rank,
          sQ = WQ.w,
          FQ = QQ.node(sQ).rank,
          PQ = WQ.name,
          gQ = QQ.edge(WQ),
          JQ = gQ.labelRank;
        if (FQ === zQ + 1) return;
        for (QQ.removeEdge(WQ), qQ = 0, ++zQ; zQ < FQ; ++qQ, ++zQ) gQ.points = [], wQ = {
          width: 0,
          height: 0,
          edgeLabel: gQ,
          edgeObj: WQ,
          rank: zQ
        }, XQ = tQ(QQ, "edge", wQ, "_d"), zQ === JQ && (wQ.width = gQ.width, wQ.height = gQ.height, wQ.dummy = "edge-label", wQ.labelpos = gQ.labelpos), QQ.setEdge(TQ, XQ, {
          weight: gQ.weight
        }, PQ), 0 === qQ && QQ.graph().dummyChains.push(XQ), TQ = XQ;
        QQ.setEdge(TQ, sQ, {
          weight: gQ.weight
        }, PQ)
      }(QQ, WQ)))
    }

    function BW(QQ) {
      let WQ = {};
      QQ.sources().forEach((function XQ(wQ) {
        let qQ = QQ.node(wQ);
        if (Object.hasOwn(WQ, wQ)) return qQ.rank;
        WQ[wQ] = !0;
        let TQ = QQ.outEdges(wQ),
          zQ = TQ ? TQ.map((WQ => null == WQ ? Number.POSITIVE_INFINITY : XQ(WQ.w) - QQ.edge(WQ).minlen)) : [],
          sQ = NQ(Math.min, zQ);
        return sQ === Number.POSITIVE_INFINITY && (sQ = 0), qQ.rank = sQ
      }))
    }

    function yW(QQ, WQ) {
      return QQ.node(WQ.w).rank - QQ.node(WQ.v).rank - QQ.edge(WQ).minlen
    }
    var VW = function(QQ) {
      let WQ = new SQ({
          directed: !1
        }),
        XQ = QQ.nodes();
      if (0 === XQ.length) throw new Error("Graph must have at least one node");
      let wQ, qQ, TQ = XQ[0],
        zQ = QQ.nodeCount();
      for (WQ.setNode(TQ, {}); DW(WQ, QQ) < zQ && (wQ = pW(WQ, QQ), wQ);) qQ = WQ.hasNode(wQ.v) ? yW(QQ, wQ) : -yW(QQ, wQ), GW(WQ, QQ, qQ);
      return WQ
    };

    function DW(QQ, WQ) {
      return QQ.nodes().forEach((function XQ(wQ) {
        let qQ = WQ.nodeEdges(wQ);
        qQ && qQ.forEach((qQ => {
          let TQ = qQ.v,
            zQ = wQ === TQ ? qQ.w : TQ;
          !QQ.hasNode(zQ) && !yW(WQ, qQ) && (QQ.setNode(zQ, {}), QQ.setEdge(wQ, zQ, {}), XQ(zQ))
        }))
      })), QQ.nodeCount()
    }

    function pW(QQ, WQ) {
      return WQ.edges().reduce(((XQ, wQ) => {
        let qQ = Number.POSITIVE_INFINITY;
        return QQ.hasNode(wQ.v) !== QQ.hasNode(wQ.w) && (qQ = yW(WQ, wQ)), qQ < XQ[0] ? [qQ, wQ] : XQ
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function GW(QQ, WQ, XQ) {
      QQ.nodes().forEach((QQ => WQ.node(QQ).rank += XQ))
    }
    var {
      preorder: UW,
      postorder: bW
    } = VQ, vW = dW;

    function dW(QQ) {
      QQ = function(QQ) {
        let WQ = (new SQ).setGraph(QQ.graph());
        return QQ.nodes().forEach((XQ => WQ.setNode(XQ, QQ.node(XQ)))), QQ.edges().forEach((XQ => {
          let wQ = WQ.edge(XQ.v, XQ.w) || {
              weight: 0,
              minlen: 1
            },
            qQ = QQ.edge(XQ);
          WQ.setEdge(XQ.v, XQ.w, {
            weight: wQ.weight + qQ.weight,
            minlen: Math.max(wQ.minlen, qQ.minlen)
          })
        })), WQ
      }(QQ), BW(QQ);
      let WQ, XQ, wQ = VW(QQ);
      for (lW(wQ), HW(wQ, QQ); WQ = iW(wQ);) XQ = cW(wQ, QQ, WQ), AW(wQ, QQ, WQ, XQ)
    }

    function HW(QQ, WQ) {
      let XQ = bW(QQ, QQ.nodes());
      XQ = XQ.slice(0, XQ.length - 1), XQ.forEach((XQ => function(QQ, WQ, XQ) {
        let wQ = QQ.node(XQ).parent,
          qQ = QQ.edge(XQ, wQ);
        qQ.cutvalue = aW(QQ, WQ, XQ)
      }(QQ, WQ, XQ)))
    }

    function aW(QQ, WQ, XQ) {
      let wQ = QQ.node(XQ).parent,
        qQ = !0,
        TQ = WQ.edge(XQ, wQ),
        zQ = 0;
      TQ || (qQ = !1, TQ = WQ.edge(wQ, XQ)), zQ = TQ.weight;
      let sQ = WQ.nodeEdges(XQ);
      return sQ && sQ.forEach((TQ => {
        let sQ = TQ.v === XQ,
          FQ = sQ ? TQ.w : TQ.v;
        if (FQ !== wQ) {
          let wQ = sQ === qQ,
            PQ = WQ.edge(TQ).weight;
          if (zQ += wQ ? PQ : -PQ, function(QQ, WQ, XQ) {
              return QQ.hasEdge(WQ, XQ)
            }(QQ, XQ, FQ)) {
            let WQ = QQ.edge(XQ, FQ).cutvalue;
            zQ += wQ ? -WQ : WQ
          }
        }
      })), zQ
    }

    function lW(QQ, WQ) {
      arguments.length < 2 && (WQ = QQ.nodes()[0]), hW(QQ, {}, 1, WQ)
    }

    function hW(QQ, WQ, XQ, wQ, qQ) {
      let TQ = XQ,
        zQ = QQ.node(wQ);
      WQ[wQ] = !0;
      let sQ = QQ.neighbors(wQ);
      return sQ && sQ.forEach((qQ => {
        Object.hasOwn(WQ, qQ) || (XQ = hW(QQ, WQ, XQ, qQ, wQ))
      })), zQ.low = TQ, zQ.lim = XQ++, qQ ? zQ.parent = qQ : delete zQ.parent, XQ
    }

    function iW(QQ) {
      return QQ.edges().find((WQ => QQ.edge(WQ).cutvalue < 0))
    }

    function cW(QQ, WQ, XQ) {
      let wQ = XQ.v,
        qQ = XQ.w;
      WQ.hasEdge(wQ, qQ) || (wQ = XQ.w, qQ = XQ.v);
      let TQ = QQ.node(wQ),
        zQ = QQ.node(qQ),
        sQ = TQ,
        FQ = !1;
      return TQ.lim > zQ.lim && (sQ = zQ, FQ = !0), WQ.edges().filter((WQ => FQ === RW(QQ, QQ.node(WQ.v), sQ) && FQ !== RW(QQ, QQ.node(WQ.w), sQ))).reduce(((QQ, XQ) => yW(WQ, XQ) < yW(WQ, QQ) ? XQ : QQ))
    }

    function AW(QQ, WQ, XQ, wQ) {
      let qQ = XQ.v,
        TQ = XQ.w;
      QQ.removeEdge(qQ, TQ), QQ.setEdge(wQ.v, wQ.w, {}), lW(QQ), HW(QQ, WQ),
        function(QQ, WQ) {
          let XQ = QQ.nodes().find((WQ => !QQ.node(WQ).parent));
          if (!XQ) return;
          let wQ = UW(QQ, [XQ]);
          wQ = wQ.slice(1), wQ.forEach((XQ => {
            let wQ = QQ.node(XQ).parent,
              qQ = WQ.edge(XQ, wQ),
              TQ = !1;
            qQ || (qQ = WQ.edge(wQ, XQ), TQ = !0), WQ.node(XQ).rank = WQ.node(wQ).rank + (TQ ? qQ.minlen : -qQ.minlen)
          }))
        }(QQ, WQ)
    }

    function RW(QQ, WQ, XQ) {
      return XQ.low <= WQ.lim && WQ.lim <= XQ.lim
    }
    dW.initLowLimValues = lW, dW.initCutValues = HW, dW.calcCutValue = aW, dW.leaveEdge = iW, dW.enterEdge = cW, dW.exchangeEdges = AW;
    var EW = function(QQ) {
      let WQ = QQ.graph().ranker;
      if ("function" == typeof WQ) return WQ(QQ);
      switch (WQ) {
        case "network-simplex":
        default:
          uW(QQ);
          break;
        case "tight-tree":
          ! function(QQ) {
            BW(QQ), VW(QQ)
          }(QQ);
          break;
        case "longest-path":
          CW(QQ);
        case "none":
      }
    };
    var CW = BW;

    function uW(QQ) {
      vW(QQ)
    }
    var LW = function(QQ) {
      let WQ = function(QQ) {
          let WQ = {},
            XQ = 0;

          function wQ(qQ) {
            let TQ = XQ;
            QQ.children(qQ).forEach(wQ), WQ[qQ] = {
              low: TQ,
              lim: XQ++
            }
          }
          return QQ.children(wW).forEach(wQ), WQ
        }(QQ),
        XQ = QQ.graph();
      if (!Array.isArray(XQ.dummyChains)) return;
      XQ.dummyChains.forEach((XQ => {
        let wQ = QQ.node(XQ),
          qQ = wQ.edgeObj,
          TQ = function(QQ, WQ, XQ, wQ) {
            let qQ, TQ = [],
              zQ = [],
              sQ = Math.min(WQ[XQ].low, WQ[wQ].low),
              FQ = Math.max(WQ[XQ].lim, WQ[wQ].lim);
            qQ = XQ;
            do {
              qQ = QQ.parent(qQ), TQ.push(qQ)
            } while (qQ && (WQ[qQ].low > sQ || FQ > WQ[qQ].lim));
            let PQ = qQ,
              gQ = wQ;
            for (;
              (gQ = QQ.parent(gQ)) !== PQ;) zQ.push(gQ);
            return {
              path: TQ.concat(zQ.reverse()),
              lca: PQ
            }
          }(QQ, WQ, qQ.v, qQ.w),
          zQ = TQ.path,
          sQ = TQ.lca,
          FQ = 0,
          PQ = zQ[FQ],
          gQ = !0;
        for (; XQ !== qQ.w;) {
          if (wQ = QQ.node(XQ), gQ) {
            for (;
              (PQ = zQ[FQ]) !== sQ && QQ.node(PQ).maxRank < wQ.rank;) FQ++;
            PQ === sQ && (gQ = !1)
          }
          if (!gQ) {
            for (; FQ < zQ.length - 1 && QQ.node(zQ[FQ + 1]).minRank <= wQ.rank;) FQ++;
            PQ = zQ[FQ]
          }
          void 0 !== PQ && QQ.setParent(XQ, PQ), XQ = QQ.successors(XQ)[0]
        }
      }))
    };

    function kW(QQ) {
      let WQ = tQ(QQ, "root", {}, "_root"),
        XQ = function(QQ) {
          let WQ = {};

          function XQ(wQ, qQ) {
            let TQ = QQ.children(wQ);
            TQ && TQ.length && TQ.forEach((QQ => XQ(QQ, qQ + 1))), WQ[wQ] = qQ
          }
          return QQ.children(wW).forEach((QQ => XQ(QQ, 1))), WQ
        }(QQ),
        wQ = Object.values(XQ),
        qQ = NQ(Math.max, wQ) - 1,
        TQ = 2 * qQ + 1;
      QQ.graph().nestingRoot = WQ, QQ.edges().forEach((WQ => QQ.edge(WQ).minlen *= TQ));
      let zQ = function(QQ) {
        return QQ.edges().reduce(((WQ, XQ) => WQ + QQ.edge(XQ).weight), 0)
      }(QQ) + 1;
      QQ.children(wW).forEach((wQ => {
        fW(QQ, WQ, TQ, zQ, qQ, XQ, wQ)
      })), QQ.graph().nodeRankFactor = TQ
    }

    function fW(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      var sQ;
      let FQ = QQ.children(zQ);
      if (!FQ.length) return void(zQ !== WQ && QQ.setEdge(WQ, zQ, {
        weight: 0,
        minlen: XQ
      }));
      let PQ = xQ(QQ, "_bt"),
        gQ = xQ(QQ, "_bb"),
        JQ = QQ.node(zQ);
      QQ.setParent(PQ, zQ), JQ.borderTop = PQ, QQ.setParent(gQ, zQ), JQ.borderBottom = gQ, FQ.forEach((sQ => {
        var FQ;
        fW(QQ, WQ, XQ, wQ, qQ, TQ, sQ);
        let JQ = QQ.node(sQ),
          rQ = JQ.borderTop ? JQ.borderTop : sQ,
          IQ = JQ.borderBottom ? JQ.borderBottom : sQ,
          jQ = JQ.borderTop ? wQ : 2 * wQ,
          BQ = rQ !== IQ ? 1 : qQ - (null != (FQ = TQ[zQ]) ? FQ : 0) + 1;
        QQ.setEdge(PQ, rQ, {
          weight: jQ,
          minlen: BQ,
          nestingEdge: !0
        }), QQ.setEdge(IQ, gQ, {
          weight: jQ,
          minlen: BQ,
          nestingEdge: !0
        })
      })), QQ.parent(zQ) || QQ.setEdge(WQ, PQ, {
        weight: 0,
        minlen: qQ + (null != (sQ = TQ[zQ]) ? sQ : 0)
      })
    }
    var SW = function(QQ) {
      QQ.children(wW).forEach((function WQ(XQ) {
        let wQ = QQ.children(XQ),
          qQ = QQ.node(XQ);
        if (wQ.length && wQ.forEach(WQ), qQ && Object.hasOwn(qQ, "minRank")) {
          qQ.borderLeft = [], qQ.borderRight = [];
          for (let WQ = qQ.minRank, wQ = qQ.maxRank + 1; WQ < wQ; ++WQ) tW(QQ, "borderLeft", "_bl", XQ, qQ, WQ), tW(QQ, "borderRight", "_br", XQ, qQ, WQ)
        }
      }))
    };

    function tW(QQ, WQ, XQ, wQ, qQ, TQ) {
      let zQ = {
          width: 0,
          height: 0,
          rank: TQ,
          borderType: WQ
        },
        sQ = qQ[WQ][TQ - 1],
        FQ = tQ(QQ, "border", zQ, XQ);
      qQ[WQ][TQ] = FQ, QQ.setParent(FQ, wQ), sQ && QQ.setEdge(sQ, FQ, {
        weight: 1
      })
    }

    function oW(QQ) {
      var WQ;
      let XQ = null == (WQ = QQ.graph().rankdir) ? void 0 : WQ.toLowerCase();
      ("bt" === XQ || "rl" === XQ) && function(QQ) {
        QQ.nodes().forEach((WQ => xW(QQ.node(WQ)))), QQ.edges().forEach((WQ => {
          var XQ;
          let wQ = QQ.edge(WQ);
          null == (XQ = wQ.points) || XQ.forEach(xW), Object.hasOwn(wQ, "y") && xW(wQ)
        }))
      }(QQ), ("lr" === XQ || "rl" === XQ) && (function(QQ) {
        QQ.nodes().forEach((WQ => YW(QQ.node(WQ)))), QQ.edges().forEach((WQ => {
          var XQ;
          let wQ = QQ.edge(WQ);
          null == (XQ = wQ.points) || XQ.forEach(YW), Object.hasOwn(wQ, "x") && YW(wQ)
        }))
      }(QQ), eW(QQ))
    }

    function eW(QQ) {
      QQ.nodes().forEach((WQ => nW(QQ.node(WQ)))), QQ.edges().forEach((WQ => nW(QQ.edge(WQ))))
    }

    function nW(QQ) {
      let WQ = QQ.width;
      QQ.width = QQ.height, QQ.height = WQ
    }

    function xW(QQ) {
      QQ.y = -QQ.y
    }

    function YW(QQ) {
      let WQ = QQ.x;
      QQ.x = QQ.y, QQ.y = WQ
    }

    function NW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        XQ = {},
        wQ = QQ.nodes().filter((WQ => !QQ.children(WQ).length)),
        qQ = wQ.map((WQ => QQ.node(WQ).rank)),
        TQ = QW(NQ(Math.max, qQ) + 1).map((() => []));
      return wQ.sort(((WQ, XQ) => QQ.node(WQ).rank - QQ.node(XQ).rank)).forEach((function wQ(qQ) {
        if (XQ[qQ]) return;
        XQ[qQ] = !0;
        let zQ = QQ.node(qQ);
        TQ[zQ.rank].push(qQ);
        let sQ = QQ.successors(qQ);
        sQ && [...sQ].sort(((XQ, wQ) => function(XQ, wQ) {
          let qQ = QQ.node(XQ),
            TQ = QQ.node(wQ);
          return qW(WQ, qQ, TQ)
        }(XQ, wQ))).forEach(wQ)
      })), TQ
    }

    function ZW(QQ, WQ) {
      let XQ = 0;
      for (let wQ = 1; wQ < WQ.length; ++wQ) XQ += OW(QQ, WQ[wQ - 1], WQ[wQ]);
      return XQ
    }

    function OW(QQ, WQ, XQ) {
      let wQ = function(QQ, WQ) {
          return QQ.reduce(((QQ, XQ, wQ) => (QQ[XQ] = WQ[wQ], QQ)), {})
        }(XQ, XQ.map(((QQ, WQ) => WQ))),
        qQ = WQ.flatMap((WQ => {
          let XQ = QQ.outEdges(WQ);
          return XQ ? XQ.map((WQ => ({
            pos: wQ[WQ.w],
            weight: QQ.edge(WQ).weight
          }))).sort(((QQ, WQ) => QQ.pos - WQ.pos)) : []
        })),
        TQ = 1;
      for (; TQ < XQ.length;) TQ <<= 1;
      let zQ = 2 * TQ - 1;
      TQ -= 1;
      let sQ = new Array(zQ).fill(0),
        FQ = 0;
      return qQ.forEach((QQ => {
        let WQ = QQ.pos + TQ;
        sQ[WQ] += QQ.weight;
        let XQ = 0;
        for (; WQ > 0;) WQ % 2 && (XQ += sQ[WQ + 1]), WQ = WQ - 1 >> 1, sQ[WQ] += QQ.weight;
        FQ += QQ.weight * XQ
      })), FQ
    }

    function KW(QQ, WQ) {
      let XQ = {};
      return QQ.forEach(((QQ, WQ) => {
          let wQ = {
            indegree: 0,
            in: [],
            out: [],
            vs: [QQ.v],
            i: WQ
          };
          void 0 !== QQ.barycenter && (wQ.barycenter = QQ.barycenter, wQ.weight = QQ.weight), XQ[QQ.v] = wQ
        })), WQ.edges().forEach((QQ => {
          let WQ = XQ[QQ.v],
            wQ = XQ[QQ.w];
          void 0 !== WQ && void 0 !== wQ && (wQ.indegree++, WQ.out.push(wQ))
        })),
        function(QQ) {
          let WQ = [];

          function XQ(QQ) {
            return WQ => {
              WQ.merged || (void 0 === WQ.barycenter || void 0 === QQ.barycenter || WQ.barycenter >= QQ.barycenter) && function(QQ, WQ) {
                let XQ = 0,
                  wQ = 0;
                QQ.weight && (XQ += QQ.barycenter * QQ.weight, wQ += QQ.weight), WQ.weight && (XQ += WQ.barycenter * WQ.weight, wQ += WQ.weight), QQ.vs = WQ.vs.concat(QQ.vs), QQ.barycenter = XQ / wQ, QQ.weight = wQ, QQ.i = Math.min(WQ.i, QQ.i), WQ.merged = !0
              }(QQ, WQ)
            }
          }

          function wQ(WQ) {
            return XQ => {
              XQ.in.push(WQ), 0 === --XQ.indegree && QQ.push(XQ)
            }
          }
          for (; QQ.length;) {
            let qQ = QQ.pop();
            WQ.push(qQ), qQ.in.reverse().forEach(XQ(qQ)), qQ.out.forEach(wQ(qQ))
          }
          return WQ.filter((QQ => !QQ.merged)).map((QQ => WW(QQ, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(XQ).filter((QQ => !QQ.indegree)))
    }

    function mW(QQ, WQ, XQ, wQ, qQ) {
      let TQ = {},
        zQ = null,
        sQ = null,
        FQ = qQ;
      "boolean" == typeof WQ ? (FQ = WQ, TQ = {}) : WQ && (TQ = WQ, zQ = null != XQ ? XQ : null, sQ = null != wQ ? wQ : null);
      let PQ = function(QQ, WQ) {
          let XQ = {
            lhs: [],
            rhs: []
          };
          return QQ.forEach((QQ => {
            WQ(QQ) ? XQ.lhs.push(QQ) : XQ.rhs.push(QQ)
          })), XQ
        }(QQ, (QQ => Object.hasOwn(QQ, "barycenter"))),
        gQ = PQ.lhs,
        JQ = PQ.rhs.sort(((QQ, WQ) => WQ.i - QQ.i)),
        rQ = [],
        IQ = 0,
        jQ = 0,
        BQ = 0;
      gQ.sort(function(QQ, WQ, XQ) {
        return (wQ, qQ) => {
          if (wQ.barycenter < qQ.barycenter) return -1;
          if (wQ.barycenter > qQ.barycenter) return 1;
          if (QQ && ("string" == typeof wQ.vs[0] || "string" == typeof qQ.vs[0])) {
            let XQ = QQ.node(wQ.vs[0]),
              TQ = QQ.node(qQ.vs[0]),
              zQ = qW(WQ, XQ, TQ);
            if (0 !== zQ) return zQ
          }
          return XQ ? qQ.i - wQ.i : wQ.i - qQ.i
        }
      }(sQ, zQ, !!FQ));
      for (let [VQ, DQ] of Object.entries(TQ)) {
        let QQ = gQ.findIndex((QQ => QQ.vs[0] === VQ));
        gQ.splice(QQ + 1, 0, DQ)
      }
      BQ = MW(rQ, JQ, BQ), gQ.forEach((QQ => {
        BQ += QQ.vs.length, rQ.push(QQ.vs), IQ += QQ.barycenter * QQ.weight, jQ += QQ.weight, BQ = MW(rQ, JQ, BQ)
      }));
      let yQ = {
        vs: rQ.flat(1)
      };
      return jQ && (yQ.barycenter = IQ / jQ, yQ.weight = jQ), yQ
    }

    function MW(QQ, WQ, XQ) {
      let wQ;
      for (; WQ.length && (wQ = WQ[WQ.length - 1]).i <= XQ;) WQ.pop(), QQ.push(wQ.vs), XQ++;
      return XQ
    }

    function QX(QQ, WQ, XQ, wQ, qQ) {
      var TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ;
      let yQ = null,
        VQ = qQ;
      "boolean" == typeof wQ ? (VQ = wQ, yQ = null) : void 0 !== wQ && (yQ = wQ);
      let DQ = QQ.children(WQ),
        pQ = QQ.node(WQ),
        GQ = pQ ? pQ.borderLeft : void 0,
        UQ = pQ ? pQ.borderRight : void 0,
        bQ = {};
      GQ && (DQ = DQ.filter((QQ => QQ !== GQ && QQ !== UQ)));
      let vQ = function(QQ) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((WQ => {
          let XQ = QQ.inEdges(WQ);
          if (!XQ || !XQ.length) return {
            v: WQ
          };
          {
            let wQ = XQ.reduce(((WQ, XQ) => {
              let wQ = QQ.edge(XQ),
                qQ = QQ.node(XQ.v);
              return {
                sum: WQ.sum + wQ.weight * qQ.order,
                weight: WQ.weight + wQ.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: WQ,
              barycenter: wQ.sum / wQ.weight,
              weight: wQ.weight
            }
          }
        }))
      }(QQ, DQ);
      vQ.forEach((WQ => {
        if (QQ.children(WQ.v).length) {
          let {
            result: wQ
          } = QX(QQ, WQ.v, XQ, yQ, VQ);
          bQ[WQ.v] = wQ, Object.hasOwn(wQ, "barycenter") && function(QQ, WQ) {
            void 0 !== QQ.barycenter ? (QQ.barycenter = (QQ.barycenter * QQ.weight + WQ.barycenter * WQ.weight) / (QQ.weight + WQ.weight), QQ.weight += WQ.weight) : (QQ.barycenter = WQ.barycenter, QQ.weight = WQ.weight)
          }(WQ, wQ)
        }
      }));
      let dQ = KW(vQ, XQ);
      ! function(QQ, WQ) {
        QQ.forEach((QQ => {
          QQ.vs = QQ.vs.flatMap((QQ => WQ[QQ] ? WQ[QQ].vs : QQ))
        }))
      }(dQ, bQ);
      let HQ = {},
        aQ = !1;
      for (let hQ = 0; hQ < dQ.length; hQ++)
        for (let WQ = hQ + 1; WQ < dQ.length; WQ++)
          if (dQ[hQ] && dQ[WQ] && null != (TQ = dQ[hQ]) && TQ.barycenter && null != (zQ = dQ[WQ]) && zQ.barycenter && (null == (sQ = dQ[hQ]) ? void 0 : sQ.barycenter) === dQ[WQ].barycenter) {
            let XQ = null != (PQ = null == (FQ = dQ[hQ]) ? void 0 : FQ.vs[0]) ? PQ : "",
              wQ = null != (JQ = null == (gQ = dQ[WQ]) ? void 0 : gQ.vs[0]) ? JQ : "",
              qQ = QQ.node(XQ),
              TQ = QQ.node(wQ);
            if ("edge" === qQ.dummy && "edge" === TQ.dummy && (null == (rQ = qQ.edgeObj) ? void 0 : rQ.v) === (null == (IQ = TQ.edgeObj) ? void 0 : IQ.v) && (null == (jQ = qQ.edgeObj) ? void 0 : jQ.w) === (null == (BQ = TQ.edgeObj) ? void 0 : BQ.w)) {
              if (qQ.edgeLabel.reversed) {
                HQ[wQ] = dQ[hQ], dQ.splice(hQ, 1), hQ--;
                break
              }
              HQ[XQ] = dQ[WQ], dQ.splice(WQ, 1), WQ--
            } else aQ = !0
          } let lQ = mW(dQ, HQ, yQ, QQ, VQ);
      if (GQ && UQ) {
        lQ.vs = [GQ, lQ.vs, UQ].flat(1);
        let WQ = QQ.predecessors(GQ);
        if (WQ && WQ.length) {
          let XQ = QQ.node(WQ[0]),
            wQ = QQ.predecessors(UQ),
            qQ = QQ.node(wQ[0]);
          Object.hasOwn(lQ, "barycenter") || (lQ.barycenter = 0, lQ.weight = 0), lQ.barycenter = (lQ.barycenter * lQ.weight + XQ.order + qQ.order) / (lQ.weight + 2), lQ.weight += 2
        }
      }
      return Object.defineProperty(lQ, "result", {
        value: lQ,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(lQ, "usedBias", {
        value: aQ,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), lQ
    }

    function WX(QQ, WQ, XQ, wQ) {
      wQ || (wQ = QQ.nodes());
      let qQ = function(QQ) {
          let WQ;
          for (; QQ.hasNode(WQ = MQ("_root")););
          return WQ
        }(QQ),
        TQ = new SQ({
          compound: !0
        }).setGraph({
          root: qQ
        }).setDefaultNodeLabel((WQ => QQ.node(WQ)));
      return wQ.forEach((wQ => {
        let zQ = QQ.node(wQ),
          sQ = QQ.parent(wQ);
        if (zQ.rank === WQ || zQ.minRank <= WQ && WQ <= zQ.maxRank) {
          TQ.setNode(wQ), TQ.setParent(wQ, sQ || qQ);
          let FQ = QQ[XQ](wQ);
          FQ && FQ.forEach((WQ => {
            let XQ = WQ.v === wQ ? WQ.w : WQ.v,
              qQ = TQ.edge(XQ, wQ),
              zQ = void 0 !== qQ ? qQ.weight : 0;
            TQ.setEdge(XQ, wQ, {
              weight: QQ.edge(WQ).weight + zQ
            })
          })), Object.hasOwn(zQ, "minRank") && TQ.setNode(wQ, {
            borderLeft: zQ.borderLeft[WQ],
            borderRight: zQ.borderRight[WQ]
          })
        }
      })), TQ
    }

    function XX(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof WQ.customOrder) return void WQ.customOrder(QQ, XX);
      let wQ = ZQ(QQ),
        qQ = wX(QQ, QW(1, wQ + 1), "inEdges"),
        TQ = wX(QQ, QW(wQ - 1, -1, -1), "outEdges"),
        zQ = NW(QQ, XQ);
      if (TX(QQ, zQ), WQ.disableOptimalOrderHeuristic) return;
      let sQ, FQ = Number.POSITIVE_INFINITY,
        PQ = WQ.constraints || [];
      for (let gQ = 0, JQ = 0; JQ < 4; ++gQ, ++JQ) {
        qX(gQ % 2 ? qQ : TQ, gQ % 4 >= 2, PQ, XQ), zQ = nQ(QQ);
        let WQ = ZW(QQ, zQ);
        WQ < FQ ? (JQ = 0, sQ = Object.assign({}, zQ), FQ = WQ) : WQ === FQ && (sQ = structuredClone(zQ))
      }
      TX(QQ, sQ)
    }

    function wX(QQ, WQ, XQ) {
      let wQ = new Map,
        qQ = (QQ, WQ) => {
          wQ.has(QQ) || wQ.set(QQ, []), wQ.get(QQ).push(WQ)
        };
      for (let TQ of QQ.nodes()) {
        let WQ = QQ.node(TQ);
        if ("number" == typeof WQ.rank && qQ(WQ.rank, TQ), "number" == typeof WQ.minRank && "number" == typeof WQ.maxRank)
          for (let QQ = WQ.minRank; QQ <= WQ.maxRank; QQ++) QQ !== WQ.rank && qQ(QQ, TQ)
      }
      return WQ.map((function(WQ) {
        return WX(QQ, WQ, XQ, wQ.get(WQ) || [])
      }))
    }

    function qX(QQ, WQ, XQ, wQ) {
      let qQ = !0,
        TQ = new SQ;
      QQ.forEach((function(QQ) {
        XQ.forEach((QQ => TQ.setEdge(QQ.left, QQ.right)));
        let zQ = QQ.graph().root,
          {
            result: sQ,
            usedBias: FQ
          } = QX(QQ, zQ, TQ, wQ, qQ);
        WQ && FQ && (qQ = !qQ), sQ.vs.forEach(((WQ, XQ) => QQ.node(WQ).order = XQ)),
          function(QQ, WQ, XQ) {
            let wQ, qQ = {};
            XQ.forEach((XQ => {
              let TQ, zQ, sQ = QQ.parent(XQ);
              for (; sQ;) {
                if (TQ = QQ.parent(sQ), TQ ? (zQ = qQ[TQ], qQ[TQ] = sQ) : (zQ = wQ, wQ = sQ), zQ && zQ !== sQ) return void WQ.setEdge(zQ, sQ);
                sQ = TQ
              }
            }))
          }(QQ, TQ, sQ.vs)
      }))
    }

    function TX(QQ, WQ) {
      Object.values(WQ).forEach((WQ => WQ.forEach(((WQ, XQ) => QQ.node(WQ).order = XQ))))
    }

    function zX(QQ, WQ, XQ) {
      if (WQ > XQ) {
        let QQ = WQ;
        WQ = XQ, XQ = QQ
      }
      let wQ = QQ[WQ];
      wQ || (QQ[WQ] = wQ = {}), wQ[XQ] = !0
    }

    function sX(QQ, WQ, XQ) {
      if (WQ > XQ) {
        let QQ = WQ;
        WQ = XQ, XQ = QQ
      }
      let wQ = QQ[WQ];
      return void 0 !== wQ && Object.hasOwn(wQ, XQ)
    }

    function FX(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        TQ = {},
        zQ = function(QQ, WQ, XQ, wQ) {
          let qQ = new SQ,
            TQ = QQ.graph(),
            zQ = function(QQ, WQ, XQ) {
              return (wQ, qQ, TQ) => {
                let zQ, sQ = wQ.node(qQ),
                  FQ = wQ.node(TQ),
                  PQ = 0;
                if (PQ += sQ.width / 2, Object.hasOwn(sQ, "labelpos")) switch (sQ.labelpos.toLowerCase()) {
                  case "l":
                    zQ = -sQ.width / 2;
                    break;
                  case "r":
                    zQ = sQ.width / 2
                }
                if (zQ && (PQ += XQ ? zQ : -zQ), zQ = void 0, PQ += (sQ.dummy ? WQ : QQ) / 2, PQ += (FQ.dummy ? WQ : QQ) / 2, PQ += FQ.width / 2, Object.hasOwn(FQ, "labelpos")) switch (FQ.labelpos.toLowerCase()) {
                  case "l":
                    zQ = FQ.width / 2;
                    break;
                  case "r":
                    zQ = -FQ.width / 2
                }
                return zQ && (PQ += XQ ? zQ : -zQ), PQ
              }
            }(TQ.nodesep, TQ.edgesep, wQ);
          return WQ.forEach((WQ => {
            let wQ;
            WQ.forEach((WQ => {
              let TQ = XQ[WQ];
              if (void 0 !== TQ) {
                if (qQ.setNode(TQ), void 0 !== wQ) {
                  let sQ = XQ[wQ];
                  if (void 0 !== sQ) {
                    let XQ = qQ.edge(sQ, TQ);
                    qQ.setEdge(sQ, TQ, Math.max(zQ(QQ, WQ, wQ), XQ || 0))
                  }
                }
                wQ = WQ
              }
            }))
          })), qQ
        }(QQ, WQ, XQ, qQ),
        sQ = qQ ? "borderLeft" : "borderRight";

      function FQ(QQ, WQ) {
        let XQ = zQ.nodes().slice(),
          wQ = {},
          qQ = XQ.pop();
        for (; qQ;) {
          if (wQ[qQ]) QQ(qQ);
          else {
            wQ[qQ] = !0, XQ.push(qQ);
            for (let QQ of WQ(qQ)) XQ.push(QQ)
          }
          qQ = XQ.pop()
        }
      }
      return FQ((function(QQ) {
        let WQ = zQ.inEdges(QQ);
        TQ[QQ] = WQ ? WQ.reduce(((QQ, WQ) => {
          var XQ;
          let wQ = null != (XQ = TQ[WQ.v]) ? XQ : 0,
            qQ = zQ.edge(WQ);
          return Math.max(QQ, wQ + (void 0 !== qQ ? qQ : 0))
        }), 0) : 0
      }), (function(QQ) {
        return zQ.predecessors(QQ) || []
      })), FQ((function(WQ) {
        let XQ = zQ.outEdges(WQ),
          wQ = Number.POSITIVE_INFINITY;
        XQ && (wQ = XQ.reduce(((QQ, WQ) => {
          let XQ = TQ[WQ.w],
            wQ = zQ.edge(WQ);
          return Math.min(QQ, (void 0 !== XQ ? XQ : 0) - (void 0 !== wQ ? wQ : 0))
        }), Number.POSITIVE_INFINITY));
        let qQ = QQ.node(WQ);
        wQ !== Number.POSITIVE_INFINITY && qQ.borderType !== sQ && (TQ[WQ] = Math.max(void 0 !== TQ[WQ] ? TQ[WQ] : 0, wQ))
      }), (function(QQ) {
        return zQ.successors(QQ) || []
      })), Object.keys(wQ).forEach((QQ => {
        var WQ;
        let wQ = XQ[QQ];
        void 0 !== wQ && (TQ[QQ] = null != (WQ = TQ[wQ]) ? WQ : 0)
      })), TQ
    }

    function PX(QQ, WQ) {
      let XQ, wQ = nQ(QQ),
        qQ = Object.assign(function(QQ, WQ) {
          let XQ = {};
          return WQ.length && WQ.reduce((function(WQ, wQ) {
            let qQ = 0,
              TQ = 0,
              zQ = WQ.length,
              sQ = wQ[wQ.length - 1];
            return wQ.forEach(((WQ, FQ) => {
              let PQ = function(QQ, WQ) {
                  if (QQ.node(WQ).dummy) {
                    let XQ = QQ.predecessors(WQ);
                    if (XQ) return XQ.find((WQ => QQ.node(WQ).dummy))
                  }
                }(QQ, WQ),
                gQ = PQ ? QQ.node(PQ).order : zQ;
              (PQ || WQ === sQ) && (wQ.slice(TQ, FQ + 1).forEach((WQ => {
                let wQ = QQ.predecessors(WQ);
                wQ && wQ.forEach((wQ => {
                  let TQ = QQ.node(wQ),
                    zQ = TQ.order;
                  (zQ < qQ || gQ < zQ) && (!TQ.dummy || !QQ.node(WQ).dummy) && zX(XQ, wQ, WQ)
                }))
              })), TQ = FQ + 1, qQ = gQ)
            })), wQ
          })), XQ
        }(QQ, wQ), function(QQ, WQ) {
          let XQ = {};

          function wQ(WQ, wQ, qQ, TQ, zQ) {
            QW(wQ, qQ).forEach((wQ => {
              let qQ = WQ[wQ];
              if (void 0 !== qQ && QQ.node(qQ).dummy) {
                let WQ = QQ.predecessors(qQ);
                WQ && WQ.forEach((WQ => {
                  if (void 0 === WQ) return;
                  let wQ = QQ.node(WQ);
                  wQ.dummy && (wQ.order < TQ || wQ.order > zQ) && zX(XQ, WQ, qQ)
                }))
              }
            }))
          }
          return WQ.length && WQ.reduce((function(WQ, XQ) {
            let qQ = -1,
              TQ = -1,
              zQ = 0;
            return XQ.forEach(((sQ, FQ) => {
              if ("border" === QQ.node(sQ).dummy) {
                let WQ = QQ.predecessors(sQ);
                if (WQ && WQ.length) {
                  let sQ = WQ[0];
                  if (void 0 === sQ) return;
                  TQ = QQ.node(sQ).order, wQ(XQ, zQ, FQ, qQ, TQ), zQ = FQ, qQ = TQ
                }
              }
              wQ(XQ, zQ, XQ.length, TQ, WQ.length)
            })), XQ
          })), XQ
        }(QQ, wQ)),
        TQ = {};
      ["u", "d"].forEach((zQ => {
        XQ = "u" === zQ ? wQ : Object.values(wQ).reverse(), ["l", "r"].forEach((wQ => {
          "r" === wQ && (XQ = XQ.map((QQ => Object.values(QQ).reverse())));
          let sQ = function(QQ, WQ, XQ, wQ, qQ) {
              let TQ = {},
                zQ = {},
                sQ = {};
              return WQ.forEach((QQ => {
                QQ.forEach(((QQ, WQ) => {
                  TQ[QQ] = QQ, zQ[QQ] = QQ, sQ[QQ] = WQ
                }))
              })), WQ.forEach((WQ => {
                let FQ = -1,
                  PQ = -1,
                  gQ = !1,
                  JQ = WQ,
                  rQ = WQ.findIndex((WQ => (null == qQ ? void 0 : qQ.includes(WQ)) || gX(WQ, QQ, qQ)));
                rQ > 0 && (JQ = [WQ[rQ], ...WQ.slice(0, rQ), ...WQ.slice(rQ + 1)], gQ = !0), JQ.forEach((WQ => {
                  var JQ;
                  let rQ = wQ(WQ);
                  if (rQ && rQ.length) {
                    null != qQ && qQ.includes(WQ) && (rQ = rQ.filter((WQ => gX(WQ, QQ, qQ))));
                    let wQ = rQ.sort(((QQ, WQ) => {
                        let XQ = sQ[QQ],
                          wQ = sQ[WQ];
                        return (void 0 !== XQ ? XQ : 0) - (void 0 !== wQ ? wQ : 0)
                      })),
                      IQ = (wQ.length - 1) / 2;
                    for (let QQ = Math.floor(IQ), qQ = Math.ceil(IQ); QQ <= qQ; ++QQ) {
                      let qQ = wQ[QQ];
                      if (void 0 === qQ) continue;
                      let rQ = sQ[qQ];
                      if (void 0 !== rQ && zQ[WQ] === WQ && FQ < rQ && sQ[qQ] !== PQ && !sX(XQ, WQ, qQ)) {
                        let QQ = TQ[qQ];
                        void 0 !== QQ && (zQ[qQ] = WQ, zQ[WQ] = TQ[WQ] = QQ, FQ = rQ, gQ && (FQ = -1, PQ = null != (JQ = sQ[qQ]) ? JQ : -1, gQ = !1))
                      }
                    }
                  }
                }))
              })), {
                root: TQ,
                align: zQ
              }
            }(QQ, XQ, qQ, (WQ => ("u" === zQ ? QQ.predecessors(WQ) : QQ.successors(WQ)) || []), WQ),
            FQ = FX(QQ, XQ, sQ.root, sQ.align, "r" === wQ);
          "r" === wQ && (FQ = XW(FQ, (QQ => -QQ))), TQ[zQ + wQ] = FQ
        }))
      }));
      let zQ = function(QQ, WQ) {
        return Object.values(WQ).reduce(((WQ, XQ) => {
          let wQ = Number.NEGATIVE_INFINITY,
            qQ = Number.POSITIVE_INFINITY;
          Object.entries(XQ).forEach((WQ => {
            let [XQ, TQ] = WQ, zQ = function(QQ, WQ) {
              return QQ.node(WQ).width
            }(QQ, XQ) / 2;
            wQ = Math.max(TQ + zQ, wQ), qQ = Math.min(TQ - zQ, qQ)
          }));
          let TQ = wQ - qQ;
          return TQ < WQ[0] && (WQ = [TQ, XQ]), WQ
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(QQ, TQ);
      return function(QQ, WQ) {
          let XQ = Object.values(WQ),
            wQ = NQ(Math.min, XQ),
            qQ = NQ(Math.max, XQ);
          ["u", "d"].forEach((XQ => {
            ["l", "r"].forEach((TQ => {
              let zQ = XQ + TQ,
                sQ = QQ[zQ];
              if (!sQ || sQ === WQ) return;
              let FQ = Object.values(sQ),
                PQ = wQ - NQ(Math.min, FQ);
              "l" !== TQ && (PQ = qQ - NQ(Math.max, FQ)), PQ && (QQ[zQ] = XW(sQ, (QQ => QQ + PQ)))
            }))
          }))
        }(TQ, zQ),
        function(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            XQ = QQ.ul;
          return XQ ? XW(XQ, ((XQ, wQ) => {
            var qQ, TQ;
            if (WQ) {
              let XQ = WQ.toLowerCase(),
                qQ = QQ[XQ];
              if (qQ && void 0 !== qQ[wQ]) return qQ[wQ]
            }
            let zQ = Object.values(QQ).map((QQ => {
              let WQ = QQ[wQ];
              return void 0 !== WQ ? WQ : 0
            })).sort(((QQ, WQ) => QQ - WQ));
            return ((null != (qQ = zQ[1]) ? qQ : 0) + (null != (TQ = zQ[2]) ? TQ : 0)) / 2
          })) : {}
        }(TQ, QQ.graph().align)
    }

    function gX(QQ, WQ, XQ) {
      var wQ;
      if (!XQ) return !1;
      let qQ = null == (wQ = WQ.node(QQ)) ? void 0 : wQ.edgeObj;
      if (!qQ || WQ.node(QQ).edgeLabel.reversed) return !1;
      let TQ = XQ.indexOf(null == qQ ? void 0 : qQ.v),
        zQ = XQ.indexOf(null == qQ ? void 0 : qQ.w);
      return -1 !== TQ && -1 !== zQ && TQ === (zQ + 1) % XQ.length || TQ === (zQ - 1) % XQ.length
    }

    function JX(QQ, WQ) {
      (function(QQ) {
        let WQ = nQ(QQ),
          XQ = QQ.graph(),
          wQ = XQ.ranksep,
          qQ = XQ.rankalign,
          TQ = 0;
        WQ.forEach((WQ => {
          let XQ = WQ.reduce(((WQ, XQ) => {
            var wQ;
            let qQ = null != (wQ = QQ.node(XQ).height) ? wQ : 0;
            return WQ > qQ ? WQ : qQ
          }), 0);
          WQ.forEach((WQ => {
            let wQ = QQ.node(WQ);
            wQ.y = "top" === qQ ? TQ + wQ.height / 2 : "bottom" === qQ ? TQ + XQ - wQ.height / 2 : TQ + XQ / 2
          })), TQ += XQ + wQ
        }))
      })(QQ = oQ(QQ)), Object.entries(PX(QQ, WQ)).forEach((WQ => {
        let [XQ, wQ] = WQ;
        return QQ.node(XQ).x = wQ
      }))
    }
    var rX = new WeakMap;

    function IX(QQ) {
      return BX(QQ, KQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), QQ
    }

    function jX(QQ, WQ, XQ) {
      let wQ = WQ;
      for (; void 0 !== wQ;) {
        let WQ = QQ.parent(wQ);
        if (WQ === XQ) return wQ;
        wQ = WQ
      }
    }

    function BX(QQ, WQ, XQ) {
      var wQ;
      let qQ = QQ.nodes().filter((WQ => QQ.children(WQ).length)),
        TQ = {};
      qQ.forEach((wQ => {
        let qQ = QQ.node(wQ);
        if (qQ && qQ.rankdir) {
          let zQ = new SQ({
            multigraph: !0,
            compound: !0
          });
          zQ.setGraph({
            rankdir: qQ.rankdir
          });
          let sQ = QQ.children(wQ);
          sQ.forEach((WQ => {
            let XQ = {
              ...QQ.node(WQ)
            };
            zQ.setNode(WQ, XQ);
            let qQ = QQ.parent(WQ);
            qQ && qQ !== wQ && sQ.includes(qQ) && zQ.setParent(WQ, qQ)
          }));
          let FQ = new Set;
          QQ.edges().forEach((WQ => {
            let XQ = jX(QQ, WQ.v, wQ),
              qQ = jX(QQ, WQ.w, wQ);
            if (XQ && qQ && XQ !== qQ) {
              let wQ = `${XQ}\0${qQ}`;
              FQ.has(wQ) || (FQ.add(wQ), zQ.setEdge(XQ, qQ, {
                ...QQ.edge(WQ)
              }))
            }
          })), BX(zQ, WQ, XQ);
          let PQ = aX(zQ);
          yX(PQ, WQ, XQ, null), VX(zQ, PQ);
          let gQ = 1 / 0,
            JQ = 1 / 0,
            rQ = -1 / 0,
            IQ = -1 / 0;
          zQ.nodes().forEach((QQ => {
            if (QQ === wQ) return;
            let WQ = zQ.node(QQ);
            WQ && "number" == typeof WQ.x && "number" == typeof WQ.y && "number" == typeof WQ.width && "number" == typeof WQ.height && (gQ = Math.min(gQ, WQ.x - WQ.width / 2), rQ = Math.max(rQ, WQ.x + WQ.width / 2), JQ = Math.min(JQ, WQ.y - WQ.height / 2), IQ = Math.max(IQ, WQ.y + WQ.height / 2))
          })), (!isFinite(gQ) || !isFinite(JQ) || !isFinite(rQ) || !isFinite(IQ)) && (gQ = JQ = 0, rQ = IQ = 0);
          let jQ = rQ - gQ,
            BQ = IQ - JQ;
          TQ[wQ] = {
            minX: gQ,
            mX: JQ,
            maxX: rQ,
            MX: IQ,
            width: jQ,
            height: BQ,
            offsetX: gQ,
            offsetY: JQ
          }, qQ._dagreClusterSubgraph = zQ
        }
      }));
      let zQ = [],
        sQ = new Map;
      qQ.forEach((WQ => {
        let XQ = QQ.node(WQ);
        XQ && XQ.rankdir && TQ[WQ] && sQ.set(WQ, (QQ.children(WQ) || []).filter((QQ => QQ !== WQ)))
      }));
      let FQ = new Set([...sQ.values()].flat()),
        PQ = new Map;
      sQ.forEach(((WQ, XQ) => {
        FQ.has(XQ) || PQ.set(XQ, (WQ => {
          let XQ = [],
            wQ = (QQ.children(WQ) || []).filter((QQ => QQ !== WQ));
          for (; wQ.length > 0;) {
            let WQ = wQ.shift();
            XQ.push(WQ), (QQ.children(WQ) || []).filter((QQ => QQ !== WQ)).forEach((QQ => wQ.push(QQ)))
          }
          return XQ
        })(XQ))
      }));
      let gQ = new Set([...PQ.values()].flat()),
        JQ = QQ => {
          for (let [WQ, XQ] of PQ)
            if (XQ.includes(QQ)) return WQ;
          return QQ
        },
        rQ = [];
      QQ.edges().forEach((WQ => {
        (gQ.has(WQ.v) || gQ.has(WQ.w)) && rQ.push({
          edge: WQ,
          label: QQ.edge(WQ)
        })
      }));
      let IQ = new Map;
      gQ.forEach((WQ => {
        let XQ = QQ.parent(WQ);
        IQ.set(WQ, "string" == typeof XQ ? XQ : void 0)
      })), PQ.forEach(((WQ, XQ) => {
        let wQ = QQ.node(XQ),
          qQ = [];
        WQ.forEach((WQ => {
          let XQ = QQ.node(WQ);
          XQ && (qQ.push({
            id: WQ,
            node: XQ,
            parent: IQ.get(WQ)
          }), QQ.removeNode(WQ))
        }));
        let sQ = rQ.filter((QQ => {
            let {
              edge: XQ
            } = QQ;
            return WQ.includes(XQ.v) || WQ.includes(XQ.w)
          })),
          FQ = TQ[XQ];
        wQ && (zQ.push({
          clusterId: XQ,
          subgraph: wQ._dagreClusterSubgraph,
          bounds: FQ,
          children: WQ,
          removedNodes: qQ,
          removedEdges: sQ
        }), wQ.width = FQ.width, wQ.height = FQ.height)
      }));
      let jQ = new Set;
      rQ.forEach((WQ => {
        let {
          edge: XQ,
          label: wQ
        } = WQ, qQ = JQ(XQ.v), TQ = JQ(XQ.w);
        if (qQ !== TQ && QQ.hasNode(qQ) && QQ.hasNode(TQ)) {
          let WQ = `${qQ}\0${TQ}`;
          jQ.has(WQ) || (jQ.add(WQ), QQ.setEdge(qQ, TQ, {
            ...wQ,
            width: 0,
            height: 0
          }))
        }
      }));
      let BQ = aX(QQ),
        yQ = yX(BQ, WQ, XQ, null != (wQ = rX.get(QQ)) ? wQ : null);
      rX.set(QQ, yQ), VX(QQ, BQ), jQ.forEach((WQ => {
        let XQ = WQ.indexOf("\0"),
          wQ = WQ.slice(0, XQ),
          qQ = WQ.slice(XQ + 1);
        QQ.hasEdge(wQ, qQ) && QQ.removeEdge(wQ, qQ)
      })), zQ.forEach((WQ => {
        let {
          clusterId: XQ,
          subgraph: wQ,
          bounds: qQ,
          removedNodes: TQ,
          removedEdges: zQ
        } = WQ;
        var sQ, FQ;
        let PQ = QQ.node(XQ),
          gQ = null != (sQ = null == PQ ? void 0 : PQ.x) ? sQ : 0,
          JQ = null != (FQ = null == PQ ? void 0 : PQ.y) ? FQ : 0,
          rQ = (qQ.minX + qQ.maxX) / 2,
          IQ = (qQ.mX + qQ.MX) / 2;
        TQ.forEach((WQ => {
          let {
            id: XQ,
            node: wQ,
            parent: qQ
          } = WQ;
          QQ.setNode(XQ, wQ), void 0 !== qQ && QQ.setParent(XQ, qQ)
        })), zQ.forEach((WQ => {
          let {
            edge: XQ,
            label: wQ
          } = WQ;
          QQ.setEdge(XQ, wQ)
        })), wQ.nodes().forEach((WQ => {
          if (WQ === XQ) return;
          let qQ = wQ.node(WQ),
            TQ = QQ.node(WQ);
          TQ && qQ && "number" == typeof qQ.x && "number" == typeof qQ.y && (TQ.x = gQ + (qQ.x - rQ), TQ.y = JQ + (qQ.y - IQ))
        })), delete PQ._dagreClusterSubgraph
      })), qQ.forEach((WQ => {
        var XQ, wQ;
        let qQ = QQ.node(WQ),
          zQ = TQ[WQ];
        if (qQ && qQ.rankdir && qQ._dagreClusterSubgraph && zQ) {
          let TQ = qQ._dagreClusterSubgraph,
            sQ = null != (XQ = qQ.x) ? XQ : 0,
            FQ = null != (wQ = qQ.y) ? wQ : 0,
            PQ = (zQ.minX + zQ.maxX) / 2,
            gQ = (zQ.mX + zQ.MX) / 2;
          TQ.nodes().forEach((XQ => {
            if (XQ === WQ) return;
            let wQ = TQ.node(XQ),
              qQ = QQ.node(XQ);
            if (qQ && wQ && "number" == typeof wQ.x && "number" == typeof wQ.y) {
              let QQ = wQ.x - PQ,
                WQ = wQ.y - gQ;
              qQ.x = sQ + QQ, qQ.y = FQ + WQ
            }
          })), delete qQ._dagreClusterSubgraph
        }
      }))
    }

    function yX(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var qQ, TQ;
      let zQ = !1 !== (null == XQ ? void 0 : XQ.useDynamic),
        sQ = zQ && null != (qQ = null == wQ ? void 0 : wQ.graph) ? qQ : null,
        FQ = zQ && null != (TQ = null == wQ ? void 0 : wQ.rawNodes) ? TQ : null;
      WQ("    makeSpaceForEdgeLabels", (() => function(QQ) {
        let WQ = QQ.graph();
        WQ.ranksep /= 2, QQ.edges().forEach((XQ => {
          var wQ;
          let qQ = QQ.edge(XQ);
          qQ.minlen *= 2, "c" !== (null != (wQ = qQ.labelpos) ? wQ : "r").toLowerCase() && ("TB" === WQ.rankdir || "BT" === WQ.rankdir ? qQ.width += qQ.labeloffset : qQ.height += qQ.labeloffset)
        }))
      }(QQ))), WQ("    removeSelfEdges", (() => function(QQ) {
        QQ.edges().forEach((WQ => {
          if (WQ.v === WQ.w) {
            let XQ = QQ.node(WQ.v);
            XQ.selfEdges || (XQ.selfEdges = []), XQ.selfEdges.push({
              e: WQ,
              label: QQ.edge(WQ)
            }), QQ.removeEdge(WQ)
          }
        }))
      }(QQ))), WQ("    acyclic", (() => IW(QQ, sQ))), WQ("    nestingGraph.run", (() => kW(QQ))), WQ("    rank", (() => EW(oQ(QQ)))), WQ("    injectEdgeLabelProxies", (() => function(QQ) {
        QQ.edges().forEach((WQ => {
          let XQ = QQ.edge(WQ);
          if (XQ.width && XQ.height) {
            let XQ = QQ.node(WQ.v),
              wQ = {
                rank: (QQ.node(WQ.w).rank - XQ.rank) / 2 + XQ.rank,
                e: WQ
              };
            tQ(QQ, "edge-proxy", wQ, "_ep")
          }
        }))
      }(QQ))), WQ("    removeEmptyRanks", (() => function(QQ) {
        let WQ = QQ.nodes().map((WQ => QQ.node(WQ).rank)).filter((QQ => void 0 !== QQ)),
          XQ = NQ(Math.min, WQ),
          wQ = [];
        QQ.nodes().forEach((WQ => {
          let qQ = QQ.node(WQ).rank - XQ;
          wQ[qQ] || (wQ[qQ] = []), wQ[qQ].push(WQ)
        }));
        let qQ = 0,
          TQ = QQ.graph().nodeRankFactor;
        Array.from(wQ).forEach(((WQ, XQ) => {
          void 0 === WQ && XQ % TQ !== 0 ? --qQ : void 0 !== WQ && qQ && WQ.forEach((WQ => QQ.node(WQ).rank += qQ))
        }))
      }(QQ))), WQ("    nestingGraph.cleanup", (() => function(QQ) {
        let WQ = QQ.graph();
        QQ.removeNode(WQ.nestingRoot), delete WQ.nestingRoot, QQ.edges().forEach((WQ => {
          QQ.edge(WQ).nestingEdge && QQ.removeEdge(WQ)
        }))
      }(QQ))), WQ("    normalizeRanks", (() => function(QQ) {
        let WQ = QQ.nodes().map((WQ => {
            let XQ = QQ.node(WQ).rank;
            return void 0 === XQ ? Number.MAX_VALUE : XQ
          })),
          XQ = NQ(Math.min, WQ);
        QQ.nodes().forEach((WQ => {
          let wQ = QQ.node(WQ);
          Object.hasOwn(wQ, "rank") && (wQ.rank -= XQ)
        }))
      }(QQ))), WQ("    assignRankMinMax", (() => function(QQ) {
        let WQ = 0;
        QQ.nodes().forEach((XQ => {
          let wQ = QQ.node(XQ);
          wQ.borderTop && (wQ.minRank = QQ.node(wQ.borderTop).rank, wQ.maxRank = QQ.node(wQ.borderBottom).rank, WQ = Math.max(WQ, wQ.maxRank))
        })), QQ.graph().maxRank = WQ
      }(QQ))), WQ("    removeEdgeLabelProxies", (() => function(QQ) {
        QQ.nodes().forEach((WQ => {
          let XQ = QQ.node(WQ);
          if ("edge-proxy" === XQ.dummy) {
            let wQ = XQ;
            QQ.edge(wQ.e).labelRank = XQ.rank, QQ.removeNode(WQ)
          }
        }))
      }(QQ))), WQ("    normalize.run", (() => jW(QQ))), WQ("    parentDummyChains", (() => LW(QQ))), WQ("    addBorderSegments", (() => SW(QQ))), WQ("    order", (() => XX(QQ, XQ, FQ))), WQ("    insertSelfEdges", (() => function(QQ) {
        nQ(QQ).forEach((WQ => {
          let XQ = 0;
          WQ.forEach(((WQ, wQ) => {
            let qQ = QQ.node(WQ);
            "number" != typeof qQ.rank && (qQ.rank = 0), qQ.order = wQ + XQ, (qQ.selfEdges || []).forEach((WQ => {
              tQ(QQ, "selfedge", {
                width: WQ.label.width,
                height: WQ.label.height,
                rank: qQ.rank,
                order: wQ + ++XQ,
                e: WQ.e,
                edgeLabel: WQ.label
              }, "_se"), (!Array.isArray(WQ.label.points) || 7 !== WQ.label.points.length) && (WQ.label.points = [{
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
            })), delete qQ.selfEdges
          }))
        }))
      }(QQ))), WQ("    adjustCoordinateSystem", (() => function(QQ) {
        var WQ;
        let XQ = null == (WQ = QQ.graph().rankdir) ? void 0 : WQ.toLowerCase();
        ("lr" === XQ || "rl" === XQ) && eW(QQ)
      }(QQ))), WQ("    position", (() => JX(QQ, XQ.corePath))), WQ("    positionSelfEdges", (() => function(QQ) {
        QQ.nodes().forEach((WQ => {
          let XQ = QQ.node(WQ),
            wQ = QQ => "number" == typeof QQ && isFinite(QQ);
          if ("selfedge" === XQ.dummy) {
            let qQ = XQ,
              TQ = QQ.node(qQ.e.v),
              zQ = wQ(null == TQ ? void 0 : TQ.x) ? TQ.x : 0,
              sQ = wQ(null == TQ ? void 0 : TQ.y) ? TQ.y : 0,
              FQ = wQ(null == TQ ? void 0 : TQ.width) ? TQ.width : 0,
              PQ = wQ(null == TQ ? void 0 : TQ.height) ? TQ.height : 0,
              gQ = wQ(XQ.x) ? XQ.x : zQ,
              JQ = wQ(XQ.y) ? XQ.y : sQ,
              rQ = FQ / 2,
              IQ = PQ / 2;
            qQ.edgeLabel.points = [{
              x: gQ + rQ,
              y: JQ - IQ
            }, {
              x: gQ + rQ,
              y: JQ - IQ
            }, {
              x: gQ,
              y: JQ
            }, {
              x: gQ - rQ,
              y: JQ + IQ
            }, {
              x: gQ - rQ,
              y: JQ + IQ
            }, {
              x: gQ,
              y: JQ
            }, {
              x: gQ,
              y: JQ
            }], qQ.edgeLabel.x = gQ, qQ.edgeLabel.y = JQ, QQ.setEdge(qQ.e, qQ.edgeLabel), QQ.removeNode(WQ)
          } else XQ && Array.isArray(XQ.selfEdges) && XQ.selfEdges.forEach((QQ => {
            if (!Array.isArray(QQ.label.points) || 7 !== QQ.label.points.length) {
              let WQ = wQ(XQ.x) ? XQ.x : 0,
                qQ = wQ(XQ.y) ? XQ.y : 0,
                TQ = (wQ(XQ.width) ? XQ.width : 0) / 2,
                zQ = (wQ(XQ.height) ? XQ.height : 0) / 2;
              QQ.label.points = [{
                x: WQ + TQ,
                y: qQ - zQ
              }, {
                x: WQ + TQ,
                y: qQ - zQ
              }, {
                x: WQ,
                y: qQ
              }, {
                x: WQ - TQ,
                y: qQ + zQ
              }, {
                x: WQ - TQ,
                y: qQ + zQ
              }, {
                x: WQ,
                y: qQ
              }, {
                x: WQ,
                y: qQ
              }]
            }
          }))
        }))
      }(QQ)));
      let PQ = JSON.parse(JSON.stringify(QQ._nodes));
      return WQ("    removeBorderNodes", (() => function(QQ) {
        QQ.nodes().forEach((WQ => {
          if (QQ.children(WQ).length) {
            let XQ = QQ.node(WQ),
              wQ = QQ.node(XQ.borderTop),
              qQ = QQ.node(XQ.borderBottom),
              TQ = QQ.node(XQ.borderLeft[XQ.borderLeft.length - 1]),
              zQ = QQ.node(XQ.borderRight[XQ.borderRight.length - 1]);
            XQ.width = Math.abs(zQ.x - TQ.x), XQ.height = Math.abs(qQ.y - wQ.y), XQ.x = TQ.x + XQ.width / 2, XQ.y = wQ.y + XQ.height / 2
          }
        })), QQ.nodes().forEach((WQ => {
          "border" === QQ.node(WQ).dummy && QQ.removeNode(WQ)
        }))
      }(QQ))), WQ("    normalize.undo", (() => function(QQ) {
        QQ.graph().dummyChains.forEach((WQ => {
          let XQ, wQ = QQ.node(WQ),
            qQ = wQ.edgeLabel;
          for (QQ.setEdge(wQ.edgeObj, qQ); wQ.dummy;) XQ = QQ.successors(WQ)[0], QQ.removeNode(WQ), qQ.points.push({
            x: wQ.x,
            y: wQ.y
          }), "edge-label" === wQ.dummy && (qQ.x = wQ.x, qQ.y = wQ.y, qQ.width = wQ.width, qQ.height = wQ.height), WQ = XQ, wQ = QQ.node(WQ)
        }))
      }(QQ))), WQ("    fixupEdgeLabelCoords", (() => function(QQ) {
        QQ.edges().forEach((WQ => {
          let XQ = QQ.edge(WQ);
          if (Object.hasOwn(XQ, "x")) switch (("l" === XQ.labelpos || "r" === XQ.labelpos) && (XQ.width -= XQ.labeloffset), XQ.labelpos) {
            case "l":
              XQ.x -= XQ.width / 2 + XQ.labeloffset;
              break;
            case "r":
              XQ.x += XQ.width / 2 + XQ.labeloffset
          }
        }))
      }(QQ))), WQ("    undoCoordinateSystem", (() => oW(QQ))), WQ("    translateGraph", (() => function(QQ) {
        let WQ = Number.POSITIVE_INFINITY,
          XQ = 0,
          wQ = Number.POSITIVE_INFINITY,
          qQ = 0,
          TQ = QQ.graph(),
          zQ = TQ.marginx || 0,
          sQ = TQ.marginy || 0;

        function FQ(QQ) {
          let TQ = QQ.x,
            zQ = QQ.y,
            sQ = QQ.width,
            FQ = QQ.height;
          WQ = Math.min(WQ, TQ - sQ / 2), XQ = Math.max(XQ, TQ + sQ / 2), wQ = Math.min(wQ, zQ - FQ / 2), qQ = Math.max(qQ, zQ + FQ / 2)
        }
        QQ.nodes().forEach((WQ => FQ(QQ.node(WQ)))), QQ.edges().forEach((WQ => {
          let XQ = QQ.edge(WQ);
          Object.hasOwn(XQ, "x") && FQ(XQ)
        })), WQ -= zQ, wQ -= sQ, QQ.nodes().forEach((XQ => {
          let qQ = QQ.node(XQ);
          qQ.x -= WQ, qQ.y -= wQ
        })), QQ.edges().forEach((XQ => {
          let qQ = QQ.edge(XQ);
          qQ.points.forEach((QQ => {
            QQ.x -= WQ, QQ.y -= wQ
          })), Object.hasOwn(qQ, "x") && (qQ.x -= WQ), Object.hasOwn(qQ, "y") && (qQ.y -= wQ)
        })), TQ.width = XQ - WQ + zQ, TQ.height = qQ - wQ + sQ
      }(QQ))), WQ("    assignNodeIntersects", (() => function(QQ) {
        QQ.edges().forEach((WQ => {
          if (WQ.v === WQ.w) return;
          let XQ, wQ, qQ = QQ.edge(WQ),
            TQ = QQ.node(WQ.v),
            zQ = QQ.node(WQ.w);
          qQ.points ? (XQ = qQ.points[0], wQ = qQ.points[qQ.points.length - 1]) : (qQ.points = [], XQ = zQ, wQ = TQ), qQ.points.unshift(eQ(TQ, XQ)), qQ.points.push(eQ(zQ, wQ))
        }))
      }(QQ))), WQ("    reversePoints", (() => function(QQ) {
        QQ.edges().forEach((WQ => {
          let XQ = QQ.edge(WQ);
          XQ.reversed && XQ.points.reverse()
        }))
      }(QQ))), WQ("    acyclic.undo", (() => function(QQ) {
        QQ.edges().forEach((WQ => {
          let XQ = QQ.edge(WQ);
          if (XQ.reversed) {
            QQ.removeEdge(WQ);
            let wQ = XQ.forwardName;
            delete XQ.reversed, delete XQ.forwardName, QQ.setEdge(WQ.w, WQ.v, XQ, wQ)
          }
        }))
      }(QQ))), {
        graph: QQ,
        rawNodes: PQ
      }
    }

    function VX(QQ, WQ) {
      QQ.nodes().forEach((XQ => {
        let wQ = QQ.node(XQ),
          qQ = WQ.node(XQ);
        wQ && (wQ.x = qQ.x, wQ.y = qQ.y, wQ.order = qQ.order, wQ.rank = qQ.rank, WQ.children(XQ).length && (wQ.width = qQ.width, wQ.height = qQ.height))
      })), QQ.edges().forEach((XQ => {
        let wQ = QQ.edge(XQ),
          qQ = WQ.edge(XQ);
        wQ.points = qQ.points, Object.hasOwn(qQ, "x") && (wQ.x = qQ.x, wQ.y = qQ.y)
      })), QQ.graph().width = WQ.graph().width, QQ.graph().height = WQ.graph().height
    }
    var DX = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      pX = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      GX = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      UX = ["width", "height", "rank"],
      bX = {
        width: 0,
        height: 0
      },
      vX = ["minlen", "weight", "width", "height", "labeloffset"],
      dX = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      HX = ["labelpos"];

    function aX(QQ) {
      let WQ = new SQ({
          multigraph: !0,
          compound: !0
        }),
        XQ = hX(QQ.graph());
      return WQ.setGraph(Object.assign({}, pX, lX(XQ, DX), WW(XQ, GX))), QQ.nodes().forEach((XQ => {
        let wQ = lX(hX(QQ.node(XQ)), UX);
        Object.keys(bX).forEach((QQ => {
          void 0 === wQ[QQ] && (wQ[QQ] = bX[QQ])
        })), WQ.setNode(XQ, wQ);
        let qQ = QQ.parent(XQ);
        void 0 !== qQ && WQ.setParent(XQ, qQ)
      })), QQ.edges().forEach((XQ => {
        let wQ = hX(QQ.edge(XQ));
        WQ.setEdge(XQ, Object.assign({}, dX, lX(wQ, vX), WW(wQ, HX)))
      })), WQ
    }

    function lX(QQ, WQ) {
      return XW(WW(QQ, WQ), Number)
    }

    function hX(QQ) {
      let WQ = {};
      return QQ && Object.entries(QQ).forEach((QQ => {
        let [XQ, wQ] = QQ;
        "string" == typeof XQ && (XQ = XQ.toLowerCase()), WQ[XQ] = wQ
      })), WQ
    }

    function iX(QQ) {
      let WQ = nQ(QQ),
        XQ = new SQ({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return QQ.nodes().forEach((WQ => {
        XQ.setNode(WQ, {
          label: WQ
        }), XQ.setParent(WQ, "layer" + QQ.node(WQ).rank)
      })), QQ.edges().forEach((QQ => XQ.setEdge(QQ.v, QQ.w, {}, QQ.name))), WQ.forEach(((QQ, WQ) => {
        let wQ = "layer" + WQ;
        XQ.setNode(wQ, {
          rank: "same"
        }), QQ.reduce(((QQ, WQ) => (XQ.setEdge(QQ, WQ, {
          style: "invis"
        }), WQ)))
      })), XQ
    }
    var cX = {
        time: OQ,
        notime: KQ
      },
      AX = {
        graphlib: TQ,
        version: TW,
        layout: IX,
        debug: iX,
        util: {
          time: OQ,
          notime: KQ
        }
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);