/*! For license information please see bqoxjr.112.d02fab11.chunk.js.LICENSE.txt */
export const id = 112;
export const ids = [112];
export const modules = {
  6280: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      Graph: () => XQ,
      debug: () => Iw,
      default: () => Nw,
      graphlib: () => oQ,
      layout: () => Yw,
      util: () => Uw,
      version: () => oF
    });
    var LQ = Object.defineProperty,
      qQ = (QQ, FQ, wQ) => ((QQ, FQ, wQ) => FQ in QQ ? LQ(QQ, FQ, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: wQ
      }) : QQ[FQ] = wQ)(QQ, "symbol" != typeof FQ ? FQ + "" : FQ, wQ),
      oQ = {};
    ((QQ, FQ) => {
      for (var wQ in FQ) LQ(QQ, wQ, {
        get: FQ[wQ],
        enumerable: !0
      })
    })(oQ, {
      Graph: () => XQ,
      alg: () => eQ
    });
    var DQ = Object.defineProperty,
      kQ = (QQ, FQ) => {
        for (var wQ in FQ) DQ(QQ, wQ, {
          get: FQ[wQ],
          enumerable: !0
        })
      },
      vQ = class {
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
        setNodes(QQ, FQ) {
          return QQ.forEach((QQ => {
            void 0 !== FQ ? this.setNode(QQ, FQ) : this.setNode(QQ)
          })), this
        }
        setNode(QQ, FQ) {
          return QQ in this._nodes ? (arguments.length > 1 && (this._nodes[QQ] = FQ), this) : (this._nodes[QQ] = arguments.length > 1 ? FQ : this._defaultNodeLabelFn(QQ), this._isCompound && (this._parent[QQ] = "\0", this._children[QQ] = {}, this._children["\0"][QQ] = !0), this._in[QQ] = {}, this._preds[QQ] = {}, this._out[QQ] = {}, this._sucs[QQ] = {}, ++this._nodeCount, this)
        }
        node(QQ) {
          return this._nodes[QQ]
        }
        hasNode(QQ) {
          return QQ in this._nodes
        }
        removeNode(QQ) {
          if (QQ in this._nodes) {
            let FQ = QQ => this.removeEdge(this._edgeObjs[QQ]);
            delete this._nodes[QQ], this._isCompound && (this._removeFromParentsChildList(QQ), delete this._parent[QQ], this.children(QQ).forEach((QQ => {
              this.setParent(QQ)
            })), delete this._children[QQ]), Object.keys(this._in[QQ]).forEach(FQ), delete this._in[QQ], delete this._preds[QQ], Object.keys(this._out[QQ]).forEach(FQ), delete this._out[QQ], delete this._sucs[QQ], --this._nodeCount
          }
          return this
        }
        setParent(QQ, FQ) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === FQ) FQ = "\0";
          else {
            for (let wQ = FQ += ""; void 0 !== wQ; wQ = this.parent(wQ))
              if (wQ === QQ) throw new Error("Setting " + FQ + " as parent of " + QQ + " would create a cycle");
            this.setNode(FQ)
          }
          return this.setNode(QQ), this._removeFromParentsChildList(QQ), this._parent[QQ] = FQ, this._children[FQ][QQ] = !0, this
        }
        parent(QQ) {
          if (this._isCompound) {
            let FQ = this._parent[QQ];
            if ("\0" !== FQ) return FQ
          }
        }
        children() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let FQ = this._children[QQ];
            if (FQ) return Object.keys(FQ)
          } else {
            if ("\0" === QQ) return this.nodes();
            if (this.hasNode(QQ)) return []
          }
          return []
        }
        predecessors(QQ) {
          let FQ = this._preds[QQ];
          if (FQ) return Object.keys(FQ)
        }
        successors(QQ) {
          let FQ = this._sucs[QQ];
          if (FQ) return Object.keys(FQ)
        }
        neighbors(QQ) {
          let FQ = this.predecessors(QQ);
          if (FQ) {
            let wQ = new Set(FQ),
              LQ = this.successors(QQ);
            if (LQ)
              for (let QQ of LQ) wQ.add(QQ);
            return Array.from(wQ.values())
          }
        }
        isLeaf(QQ) {
          var FQ;
          let wQ;
          return wQ = this.isDirected() ? this.successors(QQ) : this.neighbors(QQ), 0 === (null != (FQ = null == wQ ? void 0 : wQ.length) ? FQ : 0)
        }
        filterNodes(QQ) {
          let FQ = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          FQ.setGraph(this.graph()), Object.entries(this._nodes).forEach((wQ => {
            let [LQ, qQ] = wQ;
            QQ(LQ) && FQ.setNode(LQ, qQ)
          })), Object.values(this._edgeObjs).forEach((QQ => {
            FQ.hasNode(QQ.v) && FQ.hasNode(QQ.w) && FQ.setEdge(QQ, this.edge(QQ))
          }));
          let wQ = {},
            LQ = QQ => {
              let qQ = this.parent(QQ);
              return !qQ || FQ.hasNode(qQ) ? (wQ[QQ] = qQ, qQ) : qQ in wQ ? wQ[qQ] : LQ(qQ)
            };
          return this._isCompound && FQ.nodes().forEach((QQ => FQ.setParent(QQ, LQ(QQ)))), FQ
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
        setPath(QQ, FQ) {
          return QQ.reduce(((QQ, wQ) => (void 0 !== FQ ? this.setEdge(QQ, wQ, FQ) : this.setEdge(QQ, wQ), wQ))), this
        }
        setEdge(QQ, FQ, wQ, LQ) {
          let qQ, oQ, DQ, kQ, vQ = !1;
          "object" == typeof QQ && null !== QQ && "v" in QQ ? (qQ = QQ.v, oQ = QQ.w, DQ = QQ.name, 2 === arguments.length && (kQ = FQ, vQ = !0)) : (qQ = QQ, oQ = FQ, DQ = LQ, arguments.length > 2 && (kQ = wQ, vQ = !0)), qQ = "" + qQ, oQ = "" + oQ, void 0 !== DQ && (DQ = "" + DQ);
          let uQ = HQ(this._isDirected, qQ, oQ, DQ);
          if (uQ in this._edgeLabels) return vQ && (this._edgeLabels[uQ] = kQ), this;
          if (void 0 !== DQ && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(qQ), this.setNode(oQ), this._edgeLabels[uQ] = vQ ? kQ : this._defaultEdgeLabelFn(qQ, oQ, DQ);
          let bQ = function(QQ, FQ, wQ, LQ) {
            let qQ = "" + FQ,
              oQ = "" + wQ;
            if (!QQ && qQ > oQ) {
              let QQ = qQ;
              qQ = oQ, oQ = QQ
            }
            let DQ = {
              v: qQ,
              w: oQ
            };
            return LQ && (DQ.name = LQ), DQ
          }(this._isDirected, qQ, oQ, DQ);
          return qQ = bQ.v, oQ = bQ.w, Object.freeze(bQ), this._edgeObjs[uQ] = bQ, mQ(this._preds[oQ], qQ), mQ(this._sucs[qQ], oQ), this._in[oQ][uQ] = bQ, this._out[qQ][uQ] = bQ, this._edgeCount++, this
        }
        edge(QQ, FQ, wQ) {
          let LQ = 1 === arguments.length ? bQ(this._isDirected, QQ) : HQ(this._isDirected, QQ, FQ, wQ);
          return this._edgeLabels[LQ]
        }
        edgeAsObj(QQ, FQ, wQ) {
          let LQ = 1 === arguments.length ? this.edge(QQ) : this.edge(QQ, FQ, wQ);
          return "object" != typeof LQ || null === LQ ? {
            label: LQ
          } : LQ
        }
        hasEdge(QQ, FQ, wQ) {
          return (1 === arguments.length ? bQ(this._isDirected, QQ) : HQ(this._isDirected, QQ, FQ, wQ)) in this._edgeLabels
        }
        removeEdge(QQ, FQ, wQ) {
          let LQ = 1 === arguments.length ? bQ(this._isDirected, QQ) : HQ(this._isDirected, QQ, FQ, wQ),
            qQ = this._edgeObjs[LQ];
          if (qQ) {
            let QQ = qQ.v,
              FQ = qQ.w;
            delete this._edgeLabels[LQ], delete this._edgeObjs[LQ], uQ(this._preds[FQ], QQ), uQ(this._sucs[QQ], FQ), delete this._in[FQ][LQ], delete this._out[QQ][LQ], this._edgeCount--
          }
          return this
        }
        inEdges(QQ, FQ) {
          return this.isDirected() ? this.filterEdges(this._in[QQ], QQ, FQ) : this.nodeEdges(QQ, FQ)
        }
        outEdges(QQ, FQ) {
          return this.isDirected() ? this.filterEdges(this._out[QQ], QQ, FQ) : this.nodeEdges(QQ, FQ)
        }
        nodeEdges(QQ, FQ) {
          if (QQ in this._nodes) return this.filterEdges({
            ...this._in[QQ],
            ...this._out[QQ]
          }, QQ, FQ)
        }
        _removeFromParentsChildList(QQ) {
          delete this._children[this._parent[QQ]][QQ]
        }
        filterEdges(QQ, FQ, wQ) {
          if (!QQ) return;
          let LQ = Object.values(QQ);
          return wQ ? LQ.filter((QQ => QQ.v === FQ && QQ.w === wQ || QQ.v === wQ && QQ.w === FQ)) : LQ
        }
      };

    function mQ(QQ, FQ) {
      QQ[FQ] ? QQ[FQ]++ : QQ[FQ] = 1
    }

    function uQ(QQ, FQ) {
      void 0 !== QQ[FQ] && !--QQ[FQ] && delete QQ[FQ]
    }

    function HQ(QQ, FQ, wQ, LQ) {
      let qQ = "" + FQ,
        oQ = "" + wQ;
      if (!QQ && qQ > oQ) {
        let QQ = qQ;
        qQ = oQ, oQ = QQ
      }
      return qQ + "\x01" + oQ + "\x01" + (void 0 === LQ ? "\0" : LQ)
    }

    function bQ(QQ, FQ) {
      return HQ(QQ, FQ.v, FQ.w, FQ.name)
    }

    function YQ(QQ) {
      let FQ = {
          options: {
            directed: QQ.isDirected(),
            multigraph: QQ.isMultigraph(),
            compound: QQ.isCompound()
          },
          nodes: xQ(QQ),
          edges: AQ(QQ)
        },
        wQ = QQ.graph();
      return void 0 !== wQ && (FQ.value = structuredClone(wQ)), FQ
    }

    function xQ(QQ) {
      return QQ.nodes().map((FQ => {
        let wQ = QQ.node(FQ),
          LQ = QQ.parent(FQ),
          qQ = {
            v: FQ
          };
        return void 0 !== wQ && (qQ.value = wQ), void 0 !== LQ && (qQ.parent = LQ), qQ
      }))
    }

    function AQ(QQ) {
      return QQ.edges().map((FQ => {
        let wQ = QQ.edge(FQ),
          LQ = {
            v: FQ.v,
            w: FQ.w
          };
        return void 0 !== FQ.name && (LQ.name = FQ.name), void 0 !== wQ && (LQ.value = wQ), LQ
      }))
    }

    function tQ(QQ) {
      let FQ = new vQ(QQ.options);
      return void 0 !== QQ.value && FQ.setGraph(QQ.value), QQ.nodes.forEach((QQ => {
        FQ.setNode(QQ.v, QQ.value), QQ.parent && FQ.setParent(QQ.v, QQ.parent)
      })), QQ.edges.forEach((QQ => {
        FQ.setEdge({
          v: QQ.v,
          w: QQ.w,
          name: QQ.name
        }, QQ.value)
      })), FQ
    }
    kQ({}, {
      read: () => tQ,
      write: () => YQ
    });
    var eQ = {};
    kQ(eQ, {
      CycleException: () => rQ,
      bellmanFord: () => GQ,
      components: () => pQ,
      dijkstra: () => SQ,
      dijkstraAll: () => iQ,
      findCycles: () => RQ,
      floydWarshall: () => sQ,
      isAcyclic: () => UQ,
      postorder: () => zQ,
      preorder: () => lQ,
      prim: () => jQ,
      shortestPaths: () => aQ,
      tarjan: () => WQ,
      topsort: () => IQ
    });
    var MQ = () => 1;

    function GQ(QQ, FQ, wQ, LQ) {
      return function(QQ, FQ, wQ, LQ) {
        let qQ, oQ = {},
          DQ = 0,
          kQ = QQ.nodes(),
          vQ = function(QQ) {
            let FQ = oQ[QQ.v],
              LQ = oQ[QQ.w];
            if (!FQ || !LQ) return;
            let DQ = wQ(QQ);
            FQ.distance + DQ < LQ.distance && (oQ[QQ.w] = {
              distance: FQ.distance + DQ,
              predecessor: QQ.v
            }, qQ = !0)
          },
          mQ = function() {
            kQ.forEach((function(QQ) {
              LQ(QQ).forEach((function(FQ) {
                let wQ = FQ.v === QQ ? FQ.v : FQ.w,
                  LQ = wQ === FQ.v ? FQ.w : FQ.v;
                vQ({
                  v: wQ,
                  w: LQ
                })
              }))
            }))
          };
        kQ.forEach((function(QQ) {
          let wQ = QQ === FQ ? 0 : Number.POSITIVE_INFINITY;
          oQ[QQ] = {
            distance: wQ,
            predecessor: ""
          }
        }));
        let uQ = kQ.length;
        for (let HQ = 1; HQ < uQ && (qQ = !1, DQ++, mQ(), qQ); HQ++);
        if (DQ === uQ - 1 && (qQ = !1, mQ(), qQ)) throw new Error("The graph contains a negative weight cycle");
        return oQ
      }(QQ, String(FQ), wQ || MQ, LQ || function(FQ) {
        var wQ;
        return null != (wQ = QQ.outEdges(FQ)) ? wQ : []
      })
    }

    function pQ(QQ) {
      let FQ, wQ = {},
        LQ = [];

      function qQ(LQ) {
        var oQ, DQ;
        LQ in wQ || (wQ[LQ] = !0, FQ.push(LQ), null == (oQ = QQ.successors(LQ)) || oQ.forEach(qQ), null == (DQ = QQ.predecessors(LQ)) || DQ.forEach(qQ))
      }
      return QQ.nodes().forEach((function(QQ) {
        FQ = [], qQ(QQ), FQ.length && LQ.push(FQ)
      })), LQ
    }
    var cQ = class {
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
          let FQ = this._keyIndices[QQ];
          if (void 0 !== FQ) return this._arr[FQ].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(QQ, FQ) {
          let wQ = this._keyIndices,
            LQ = String(QQ);
          if (!(LQ in wQ)) {
            let QQ = this._arr,
              qQ = QQ.length;
            return wQ[LQ] = qQ, QQ.push({
              key: LQ,
              priority: FQ
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
        decrease(QQ, FQ) {
          let wQ = this._keyIndices[QQ];
          if (void 0 === wQ) throw new Error(`Key not found: ${QQ}`);
          let LQ = this._arr[wQ].priority;
          if (FQ > LQ) throw new Error(`New priority is greater than current priority. Key: ${QQ} Old: ${LQ} New: ${FQ}`);
          this._arr[wQ].priority = FQ, this._decrease(wQ)
        }
        _heapify(QQ) {
          let FQ = this._arr,
            wQ = 2 * QQ,
            LQ = wQ + 1,
            qQ = QQ;
          wQ < FQ.length && (qQ = FQ[wQ].priority < FQ[qQ].priority ? wQ : qQ, LQ < FQ.length && (qQ = FQ[LQ].priority < FQ[qQ].priority ? LQ : qQ), qQ !== QQ && (this._swap(QQ, qQ), this._heapify(qQ)))
        }
        _decrease(QQ) {
          let FQ, wQ = this._arr,
            LQ = wQ[QQ].priority;
          for (; 0 !== QQ && (FQ = QQ >> 1, !(wQ[FQ].priority < LQ));) this._swap(QQ, FQ), QQ = FQ
        }
        _swap(QQ, FQ) {
          let wQ = this._arr,
            LQ = this._keyIndices,
            qQ = wQ[QQ],
            oQ = wQ[FQ];
          wQ[QQ] = oQ, wQ[FQ] = qQ, LQ[oQ.key] = QQ, LQ[qQ.key] = FQ
        }
      },
      CQ = () => 1;

    function SQ(QQ, FQ, wQ, LQ) {
      return function(QQ, FQ, wQ, LQ) {
        let qQ, oQ, DQ = {},
          kQ = new cQ,
          vQ = function(QQ) {
            let FQ = QQ.v !== qQ ? QQ.v : QQ.w,
              LQ = DQ[FQ];
            if (!LQ) return;
            let vQ = wQ(QQ),
              mQ = oQ.distance + vQ;
            if (vQ < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + QQ + " Weight: " + vQ);
            mQ < LQ.distance && (LQ.distance = mQ, LQ.predecessor = qQ, kQ.decrease(FQ, mQ))
          };
        for (QQ.nodes().forEach((function(QQ) {
            let wQ = QQ === FQ ? 0 : Number.POSITIVE_INFINITY;
            DQ[QQ] = {
              distance: wQ,
              predecessor: ""
            }, kQ.add(QQ, wQ)
          })); kQ.size() > 0;) {
          qQ = kQ.removeMin();
          let QQ = DQ[qQ];
          if (!QQ || QQ.distance === Number.POSITIVE_INFINITY) break;
          oQ = QQ, LQ(qQ).forEach(vQ)
        }
        return DQ
      }(QQ, String(FQ), wQ || CQ, LQ || function(FQ) {
        var wQ;
        return null != (wQ = QQ.outEdges(FQ)) ? wQ : []
      })
    }

    function iQ(QQ, FQ, wQ) {
      return QQ.nodes().reduce((function(LQ, qQ) {
        return LQ[qQ] = SQ(QQ, qQ, FQ, wQ), LQ
      }), {})
    }

    function WQ(QQ) {
      let FQ = 0,
        wQ = [],
        LQ = {},
        qQ = [];

      function oQ(DQ) {
        var kQ;
        let vQ = LQ[DQ] = {
          onStack: !0,
          lowlink: FQ,
          index: FQ++
        };
        if (wQ.push(DQ), null == (kQ = QQ.successors(DQ)) || kQ.forEach((function(QQ) {
            if (QQ in LQ) {
              let FQ = LQ[QQ];
              null != FQ && FQ.onStack && (vQ.lowlink = Math.min(vQ.lowlink, FQ.index))
            } else {
              oQ(QQ);
              let FQ = LQ[QQ];
              FQ && (vQ.lowlink = Math.min(vQ.lowlink, FQ.lowlink))
            }
          })), vQ.lowlink === vQ.index) {
          let QQ, FQ = [];
          do {
            QQ = wQ.pop();
            let qQ = LQ[QQ];
            qQ && (qQ.onStack = !1), FQ.push(QQ)
          } while (DQ !== QQ);
          qQ.push(FQ)
        }
      }
      return QQ.nodes().forEach((function(QQ) {
        QQ in LQ || oQ(QQ)
      })), qQ
    }

    function RQ(QQ) {
      return WQ(QQ).filter((function(FQ) {
        var wQ;
        let LQ = FQ[0];
        return !!LQ && (FQ.length > 1 || 1 === FQ.length && (null != (wQ = QQ.outEdges(LQ, LQ)) ? wQ : []).length > 0)
      }))
    }
    var OQ = () => 1;

    function sQ(QQ, FQ, wQ) {
      return function(QQ, FQ, wQ) {
        let LQ = {},
          qQ = QQ.nodes();
        return qQ.forEach((function(QQ) {
          let oQ = {};
          LQ[QQ] = oQ, oQ[QQ] = {
            distance: 0,
            predecessor: ""
          }, qQ.forEach((function(FQ) {
            QQ !== FQ && (oQ[FQ] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), wQ(QQ).forEach((function(wQ) {
            let LQ = wQ.v === QQ ? wQ.w : wQ.v,
              qQ = FQ(wQ);
            oQ[LQ] = {
              distance: qQ,
              predecessor: QQ
            }
          }))
        })), qQ.forEach((function(QQ) {
          let FQ = LQ[QQ];
          FQ && qQ.forEach((function(wQ) {
            let oQ = LQ[wQ];
            oQ && qQ.forEach((function(wQ) {
              let LQ = oQ[QQ],
                qQ = FQ[wQ],
                DQ = oQ[wQ];
              if (LQ && qQ && DQ) {
                let QQ = LQ.distance + qQ.distance;
                QQ < DQ.distance && (DQ.distance = QQ, DQ.predecessor = qQ.predecessor)
              }
            }))
          }))
        })), LQ
      }(QQ, FQ || OQ, wQ || function(FQ) {
        var wQ;
        return null != (wQ = QQ.outEdges(FQ)) ? wQ : []
      })
    }
    var rQ = class extends Error {
      constructor(QQ) {
        super(QQ), this.name = "CycleException"
      }
    };

    function IQ(QQ) {
      let FQ = {},
        wQ = {},
        LQ = [];
      if (QQ.sinks().forEach((function qQ(oQ) {
          var DQ;
          if (oQ in wQ) throw new rQ;
          oQ in FQ || (wQ[oQ] = !0, FQ[oQ] = !0, null == (DQ = QQ.predecessors(oQ)) || DQ.forEach(qQ), delete wQ[oQ], LQ.push(oQ))
        })), Object.keys(FQ).length !== QQ.nodeCount()) throw new rQ;
      return LQ
    }

    function UQ(QQ) {
      try {
        IQ(QQ)
      } catch (FQ) {
        if (FQ instanceof rQ) return !1;
        throw FQ
      }
      return !0
    }

    function NQ(QQ, FQ, wQ, LQ, qQ) {
      Array.isArray(FQ) || (FQ = [FQ]);
      let oQ = FQ => {
          var wQ;
          return null != (wQ = QQ.isDirected() ? QQ.successors(FQ) : QQ.neighbors(FQ)) ? wQ : []
        },
        DQ = {};
      return FQ.forEach((function(FQ) {
        if (!QQ.hasNode(FQ)) throw new Error("Graph does not have node: " + FQ);
        qQ = TQ(QQ, FQ, "post" === wQ, DQ, oQ, LQ, qQ)
      })), qQ
    }

    function TQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      return FQ in LQ || (LQ[FQ] = !0, wQ || (DQ = oQ(DQ, FQ)), qQ(FQ).forEach((function(FQ) {
        DQ = TQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ)
      })), wQ && (DQ = oQ(DQ, FQ))), DQ
    }

    function KQ(QQ, FQ, wQ) {
      return NQ(QQ, FQ, wQ, (function(QQ, FQ) {
        return QQ.push(FQ), QQ
      }), [])
    }

    function zQ(QQ, FQ) {
      return KQ(QQ, FQ, "post")
    }

    function lQ(QQ, FQ) {
      return KQ(QQ, FQ, "pre")
    }

    function jQ(QQ, FQ) {
      var wQ;
      let LQ, qQ = new vQ,
        oQ = {},
        DQ = new cQ;

      function kQ(QQ) {
        let wQ = QQ.v === LQ ? QQ.w : QQ.v,
          qQ = DQ.priority(wQ);
        if (void 0 !== qQ) {
          let kQ = FQ(QQ);
          kQ < qQ && (oQ[wQ] = LQ, DQ.decrease(wQ, kQ))
        }
      }
      if (0 === QQ.nodeCount()) return qQ;
      QQ.nodes().forEach((function(QQ) {
        DQ.add(QQ, Number.POSITIVE_INFINITY), qQ.setNode(QQ)
      }));
      let mQ = QQ.nodes()[0];
      void 0 !== mQ && DQ.decrease(mQ, 0);
      let uQ = !1;
      for (; DQ.size() > 0;) {
        if (LQ = DQ.removeMin(), LQ in oQ) qQ.setEdge(LQ, oQ[LQ]);
        else {
          if (uQ) throw new Error("Input graph is not connected: " + QQ);
          uQ = !0
        }
        null == (wQ = QQ.nodeEdges(LQ)) || wQ.forEach(kQ)
      }
      return qQ
    }

    function aQ(QQ, FQ, wQ, LQ) {
      return function(QQ, FQ, wQ, LQ) {
        if (void 0 === wQ) return SQ(QQ, FQ, wQ, LQ);
        let qQ = !1,
          oQ = QQ.nodes();
        for (let DQ = 0; DQ < oQ.length; DQ++) {
          let kQ = oQ[DQ];
          if (void 0 === kQ) continue;
          let vQ = LQ(kQ);
          for (let QQ = 0; QQ < vQ.length; QQ++) {
            let FQ = vQ[QQ];
            if (!FQ) continue;
            let LQ = FQ.v === kQ ? FQ.v : FQ.w;
            wQ({
              v: LQ,
              w: LQ === FQ.v ? FQ.w : FQ.v
            }) < 0 && (qQ = !0)
          }
          if (qQ) return GQ(QQ, FQ, wQ, LQ)
        }
        return SQ(QQ, FQ, wQ, LQ)
      }(QQ, FQ, wQ, null != LQ ? LQ : FQ => {
        var wQ;
        return null != (wQ = QQ.outEdges(FQ)) ? wQ : []
      })
    }
    var XQ = vQ;

    function fQ(QQ, FQ, wQ, LQ) {
      let qQ = LQ;
      for (; QQ.hasNode(qQ);) qQ = dQ(LQ);
      return wQ.dummy = FQ, QQ.setNode(qQ, wQ), qQ
    }

    function VQ(QQ) {
      let FQ = new XQ({
        multigraph: QQ.isMultigraph()
      }).setGraph(QQ.graph());
      return QQ.nodes().forEach((wQ => {
        QQ.children(wQ).length || FQ.setNode(wQ, QQ.node(wQ))
      })), QQ.edges().forEach((wQ => {
        FQ.setEdge(wQ, QQ.edge(wQ))
      })), FQ
    }

    function hQ(QQ, FQ) {
      let wQ, LQ, qQ = QQ.x,
        oQ = QQ.y,
        DQ = FQ.x - qQ,
        kQ = FQ.y - oQ,
        vQ = QQ.width / 2,
        mQ = QQ.height / 2;
      if (!DQ && !kQ) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(kQ) * vQ > Math.abs(DQ) * mQ ? (kQ < 0 && (mQ = -mQ), wQ = mQ * DQ / kQ, LQ = mQ) : (DQ < 0 && (vQ = -vQ), wQ = vQ, LQ = vQ * kQ / DQ), {
        x: qQ + wQ,
        y: oQ + LQ
      }
    }

    function JQ(QQ) {
      let FQ = QF(PQ(QQ) + 1).map((() => []));
      return QQ.nodes().forEach((wQ => {
        let LQ = QQ.node(wQ),
          qQ = LQ.rank;
        void 0 !== qQ && (FQ[qQ] || (FQ[qQ] = []), FQ[qQ][LQ.order] = wQ)
      })), FQ
    }

    function EQ(QQ, FQ, wQ, LQ) {
      let qQ = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (qQ.rank = wQ, qQ.order = LQ), fQ(QQ, "border", qQ, FQ)
    }
    var nQ = 65535;

    function gQ(QQ, FQ) {
      if (FQ.length > nQ) {
        let wQ = function(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nQ,
            wQ = [];
          for (let LQ = 0; LQ < QQ.length; LQ += FQ) {
            let qQ = QQ.slice(LQ, LQ + FQ);
            wQ.push(qQ)
          }
          return wQ
        }(FQ);
        return QQ(...wQ.map((FQ => QQ(...FQ))))
      }
      return QQ(...FQ)
    }

    function PQ(QQ) {
      let FQ = QQ.nodes().map((FQ => {
        let wQ = QQ.node(FQ).rank;
        return void 0 === wQ ? Number.MIN_VALUE : wQ
      }));
      return gQ(Math.max, FQ)
    }

    function ZQ(QQ, FQ) {
      let wQ = Date.now();
      try {
        return FQ()
      } finally {
        console.log(QQ + " time: " + (Date.now() - wQ) + "ms")
      }
    }

    function yQ(QQ, FQ) {
      return FQ()
    }
    var BQ = 0;

    function dQ(QQ) {
      return QQ + "" + ++BQ
    }

    function QF(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == FQ && (FQ = QQ, QQ = 0);
      let LQ = QQ => QQ < FQ;
      wQ < 0 && (LQ = QQ => FQ < QQ);
      let qQ = [];
      for (let oQ = QQ; LQ(oQ); oQ += wQ) qQ.push(oQ);
      return qQ
    }

    function FF(QQ, FQ) {
      let wQ = {};
      for (let LQ of FQ) void 0 !== QQ[LQ] && (wQ[LQ] = QQ[LQ]);
      return wQ
    }

    function wF(QQ, FQ) {
      let wQ;
      return wQ = "string" == typeof FQ ? QQ => QQ[FQ] : FQ, Object.entries(QQ).reduce(((QQ, FQ) => {
        let [LQ, qQ] = FQ;
        return QQ[LQ] = wQ(qQ, LQ), QQ
      }), {})
    }
    var LF = "\0";

    function qF(QQ, FQ, wQ) {
      var LQ, qQ, oQ, DQ, kQ, vQ;
      if (!(QQ && FQ && wQ && "edge" === FQ.dummy && "edge" === wQ.dummy && FQ.edgeObj && wQ.edgeObj && QQ[FQ.edgeObj.v] && QQ[wQ.edgeObj.v] && QQ[FQ.edgeObj.w] && QQ[wQ.edgeObj.w])) return 0;
      let mQ = !0;
      FQ.edgeObj.w === wQ.edgeObj.w && (mQ = !1);
      let uQ = mQ ? null != (qQ = null == (LQ = QQ[FQ.edgeObj.v]) ? void 0 : LQ.rank) ? qQ : NaN : null != (DQ = null == (oQ = QQ[FQ.edgeObj.w]) ? void 0 : oQ.rank) ? DQ : NaN,
        HQ = Object.entries(QQ).find((QQ => {
          var wQ, LQ;
          return (null == (wQ = QQ[1].edgeObj) ? void 0 : wQ.v) === FQ.edgeObj.v && (null == (LQ = QQ[1].edgeObj) ? void 0 : LQ.w) === FQ.edgeObj.w && QQ[1].rank === uQ
        })),
        bQ = Object.entries(QQ).find((QQ => {
          var FQ, LQ;
          return (null == (FQ = QQ[1].edgeObj) ? void 0 : FQ.v) === wQ.edgeObj.v && (null == (LQ = QQ[1].edgeObj) ? void 0 : LQ.w) === wQ.edgeObj.w && QQ[1].rank === uQ
        }));
      if (!HQ || !bQ) return 0;
      let YQ = null != (kQ = HQ[1].order) ? kQ : NaN,
        xQ = null != (vQ = bQ[1].order) ? vQ : NaN;
      return isNaN(YQ - xQ) ? 0 : YQ - xQ
    }
    var oF = "3.1.1";

    function DF(QQ) {
      QQ._prev._next = QQ._next, QQ._next._prev = QQ._prev, delete QQ._next, delete QQ._prev
    }

    function kF(QQ, FQ) {
      if ("_next" !== QQ && "_prev" !== QQ) return FQ
    }
    var vF = class {
        constructor() {
          qQ(this, "_sentinel");
          let QQ = {};
          QQ._next = QQ._prev = QQ, this._sentinel = QQ
        }
        dequeue() {
          let QQ = this._sentinel,
            FQ = QQ._prev;
          if (FQ !== QQ) return DF(FQ), FQ
        }
        enqueue(QQ) {
          let FQ = this._sentinel;
          QQ._prev && QQ._next && DF(QQ), QQ._next = FQ._next, FQ._next._prev = QQ, FQ._next = QQ, QQ._prev = FQ
        }
        toString() {
          let QQ = [],
            FQ = this._sentinel,
            wQ = FQ._prev;
          for (; wQ !== FQ;) QQ.push(JSON.stringify(wQ, kF)), wQ = wQ._prev;
          return "[" + QQ.join(", ") + "]"
        }
      },
      mF = () => 1;

    function uF(QQ, FQ) {
      if (QQ.nodeCount() <= 1) return [];
      let wQ = function(QQ, FQ) {
        let wQ = new XQ,
          LQ = 0,
          qQ = 0;
        QQ.nodes().forEach((QQ => {
          wQ.setNode(QQ, {
            v: QQ,
            in: 0,
            out: 0
          })
        })), QQ.edges().forEach((QQ => {
          let oQ = wQ.edge(QQ.v, QQ.w) || 0,
            DQ = FQ(QQ),
            kQ = oQ + DQ;
          wQ.setEdge(QQ.v, QQ.w, kQ);
          let vQ = wQ.node(QQ.v),
            mQ = wQ.node(QQ.w);
          qQ = Math.max(qQ, vQ.out += DQ), LQ = Math.max(LQ, mQ.in += DQ)
        }));
        let oQ = function(QQ) {
            let FQ = [];
            for (let wQ = 0; wQ < QQ; wQ++) FQ.push(wQ);
            return FQ
          }(qQ + LQ + 3).map((() => new vF)),
          DQ = LQ + 1;
        return wQ.nodes().forEach((QQ => {
          bF(oQ, DQ, wQ.node(QQ))
        })), {
          graph: wQ,
          buckets: oQ,
          zeroIdx: DQ
        }
      }(QQ, FQ || mF);
      return function(QQ, FQ, wQ) {
        var LQ;
        let qQ, oQ = [],
          DQ = FQ[FQ.length - 1],
          kQ = FQ[0];
        for (; QQ.nodeCount();) {
          for (; qQ = kQ.dequeue();) HF(QQ, FQ, wQ, qQ);
          for (; qQ = DQ.dequeue();) HF(QQ, FQ, wQ, qQ);
          if (QQ.nodeCount())
            for (let DQ = FQ.length - 2; DQ > 0; --DQ)
              if (qQ = null == (LQ = FQ[DQ]) ? void 0 : LQ.dequeue(), qQ) {
                oQ = oQ.concat(HF(QQ, FQ, wQ, qQ, !0) || []);
                break
              }
        }
        return oQ
      }(wQ.graph, wQ.buckets, wQ.zeroIdx).flatMap((FQ => QQ.outEdges(FQ.v, FQ.w) || []))
    }

    function HF(QQ, FQ, wQ, LQ, qQ) {
      let oQ = [],
        DQ = qQ ? oQ : void 0;
      return (QQ.inEdges(LQ.v) || []).forEach((LQ => {
        let DQ = QQ.edge(LQ),
          kQ = QQ.node(LQ.v);
        qQ && oQ.push({
          v: LQ.v,
          w: LQ.w
        }), kQ.out -= DQ, bF(FQ, wQ, kQ)
      })), (QQ.outEdges(LQ.v) || []).forEach((LQ => {
        let qQ = QQ.edge(LQ),
          oQ = LQ.w,
          DQ = QQ.node(oQ);
        DQ.in -= qQ, bF(FQ, wQ, DQ)
      })), QQ.removeNode(LQ.v), DQ
    }

    function bF(QQ, FQ, wQ) {
      var LQ, qQ, oQ;
      wQ.out ? wQ.in ? null == (oQ = QQ[wQ.out - wQ.in + FQ]) || oQ.enqueue(wQ) : null == (qQ = QQ[QQ.length - 1]) || qQ.enqueue(wQ) : null == (LQ = QQ[0]) || LQ.enqueue(wQ)
    }

    function YF(QQ, FQ) {
      var wQ;
      ("greedy" === QQ.graph().acyclicer ? uF(QQ, (wQ = QQ, QQ => wQ.edge(QQ).weight)) : function(QQ, FQ) {
        let wQ = [],
          LQ = {},
          qQ = {};

        function oQ(FQ) {
          Object.hasOwn(qQ, FQ) || (qQ[FQ] = !0, LQ[FQ] = !0, QQ.outEdges(FQ).forEach((QQ => {
            Object.hasOwn(LQ, QQ.w) ? wQ.push(QQ) : oQ(QQ.w)
          })), delete LQ[FQ])
        }

        function DQ(oQ) {
          var kQ;
          Object.hasOwn(qQ, oQ) || (qQ[oQ] = !0, LQ[oQ] = !0, null == (kQ = QQ.outEdges(oQ)) || kQ.forEach((qQ => {
            var kQ, vQ;
            Object.hasOwn(LQ, qQ.w) || (null == (kQ = FQ.node(oQ)) ? void 0 : kQ.rank) > (null == (vQ = FQ.node(qQ.w)) ? void 0 : vQ.rank) && function(QQ, FQ, wQ) {
              let LQ = new Set;

              function qQ(FQ) {
                var oQ;
                if (QQ.sources().includes(FQ)) return !0;
                LQ.add(FQ);
                for (let DQ of null != (oQ = QQ.inEdges(FQ)) ? oQ : [])
                  if ((DQ.v !== wQ.v || DQ.w !== wQ.w) && !LQ.has(DQ.v) && qQ(DQ.v)) return !0;
                return !1
              }
              return qQ(FQ)
            }(QQ, qQ.w, qQ) ? wQ.push(qQ) : DQ(qQ.w)
          })), delete LQ[oQ])
        }
        let kQ = oQ;
        return FQ && "function" == typeof FQ.node && (kQ = DQ), QQ.sources().forEach(kQ), QQ.nodes().forEach(kQ), wQ
      }(QQ, null != FQ ? FQ : null)).forEach((FQ => {
        let wQ = QQ.edge(FQ);
        QQ.removeEdge(FQ), wQ.forwardName = FQ.name, wQ.reversed = !0, QQ.setEdge(FQ.w, FQ.v, wQ, dQ("rev"))
      }))
    }

    function xF(QQ) {
      QQ.graph().dummyChains = [], QQ.edges().forEach((FQ => function(QQ, FQ) {
        let wQ, LQ, qQ, oQ = FQ.v,
          DQ = QQ.node(oQ).rank,
          kQ = FQ.w,
          vQ = QQ.node(kQ).rank,
          mQ = FQ.name,
          uQ = QQ.edge(FQ),
          HQ = uQ.labelRank;
        if (vQ === DQ + 1) return;
        for (QQ.removeEdge(FQ), qQ = 0, ++DQ; DQ < vQ; ++qQ, ++DQ) uQ.points = [], LQ = {
          width: 0,
          height: 0,
          edgeLabel: uQ,
          edgeObj: FQ,
          rank: DQ
        }, wQ = fQ(QQ, "edge", LQ, "_d"), DQ === HQ && (LQ.width = uQ.width, LQ.height = uQ.height, LQ.dummy = "edge-label", LQ.labelpos = uQ.labelpos), QQ.setEdge(oQ, wQ, {
          weight: uQ.weight
        }, mQ), 0 === qQ && QQ.graph().dummyChains.push(wQ), oQ = wQ;
        QQ.setEdge(oQ, kQ, {
          weight: uQ.weight
        }, mQ)
      }(QQ, FQ)))
    }

    function AF(QQ) {
      let FQ = {};
      QQ.sources().forEach((function wQ(LQ) {
        let qQ = QQ.node(LQ);
        if (Object.hasOwn(FQ, LQ)) return qQ.rank;
        FQ[LQ] = !0;
        let oQ = QQ.outEdges(LQ),
          DQ = oQ ? oQ.map((FQ => null == FQ ? Number.POSITIVE_INFINITY : wQ(FQ.w) - QQ.edge(FQ).minlen)) : [],
          kQ = gQ(Math.min, DQ);
        return kQ === Number.POSITIVE_INFINITY && (kQ = 0), qQ.rank = kQ
      }))
    }

    function tF(QQ, FQ) {
      return QQ.node(FQ.w).rank - QQ.node(FQ.v).rank - QQ.edge(FQ).minlen
    }
    var eF = function(QQ) {
      let FQ = new XQ({
          directed: !1
        }),
        wQ = QQ.nodes();
      if (0 === wQ.length) throw new Error("Graph must have at least one node");
      let LQ, qQ, oQ = wQ[0],
        DQ = QQ.nodeCount();
      for (FQ.setNode(oQ, {}); MF(FQ, QQ) < DQ && (LQ = GF(FQ, QQ), LQ);) qQ = FQ.hasNode(LQ.v) ? tF(QQ, LQ) : -tF(QQ, LQ), pF(FQ, QQ, qQ);
      return FQ
    };

    function MF(QQ, FQ) {
      return QQ.nodes().forEach((function wQ(LQ) {
        let qQ = FQ.nodeEdges(LQ);
        qQ && qQ.forEach((qQ => {
          let oQ = qQ.v,
            DQ = LQ === oQ ? qQ.w : oQ;
          !QQ.hasNode(DQ) && !tF(FQ, qQ) && (QQ.setNode(DQ, {}), QQ.setEdge(LQ, DQ, {}), wQ(DQ))
        }))
      })), QQ.nodeCount()
    }

    function GF(QQ, FQ) {
      return FQ.edges().reduce(((wQ, LQ) => {
        let qQ = Number.POSITIVE_INFINITY;
        return QQ.hasNode(LQ.v) !== QQ.hasNode(LQ.w) && (qQ = tF(FQ, LQ)), qQ < wQ[0] ? [qQ, LQ] : wQ
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function pF(QQ, FQ, wQ) {
      QQ.nodes().forEach((QQ => FQ.node(QQ).rank += wQ))
    }
    var {
      preorder: cF,
      postorder: CF
    } = eQ, SF = iF;

    function iF(QQ) {
      QQ = function(QQ) {
        let FQ = (new XQ).setGraph(QQ.graph());
        return QQ.nodes().forEach((wQ => FQ.setNode(wQ, QQ.node(wQ)))), QQ.edges().forEach((wQ => {
          let LQ = FQ.edge(wQ.v, wQ.w) || {
              weight: 0,
              minlen: 1
            },
            qQ = QQ.edge(wQ);
          FQ.setEdge(wQ.v, wQ.w, {
            weight: LQ.weight + qQ.weight,
            minlen: Math.max(LQ.minlen, qQ.minlen)
          })
        })), FQ
      }(QQ), AF(QQ);
      let FQ, wQ, LQ = eF(QQ);
      for (OF(LQ), WF(LQ, QQ); FQ = rF(LQ);) wQ = IF(LQ, QQ, FQ), UF(LQ, QQ, FQ, wQ)
    }

    function WF(QQ, FQ) {
      let wQ = CF(QQ, QQ.nodes());
      wQ = wQ.slice(0, wQ.length - 1), wQ.forEach((wQ => function(QQ, FQ, wQ) {
        let LQ = QQ.node(wQ).parent,
          qQ = QQ.edge(wQ, LQ);
        qQ.cutvalue = RF(QQ, FQ, wQ)
      }(QQ, FQ, wQ)))
    }

    function RF(QQ, FQ, wQ) {
      let LQ = QQ.node(wQ).parent,
        qQ = !0,
        oQ = FQ.edge(wQ, LQ),
        DQ = 0;
      oQ || (qQ = !1, oQ = FQ.edge(LQ, wQ)), DQ = oQ.weight;
      let kQ = FQ.nodeEdges(wQ);
      return kQ && kQ.forEach((oQ => {
        let kQ = oQ.v === wQ,
          vQ = kQ ? oQ.w : oQ.v;
        if (vQ !== LQ) {
          let LQ = kQ === qQ,
            mQ = FQ.edge(oQ).weight;
          if (DQ += LQ ? mQ : -mQ, function(QQ, FQ, wQ) {
              return QQ.hasEdge(FQ, wQ)
            }(QQ, wQ, vQ)) {
            let FQ = QQ.edge(wQ, vQ).cutvalue;
            DQ += LQ ? -FQ : FQ
          }
        }
      })), DQ
    }

    function OF(QQ, FQ) {
      arguments.length < 2 && (FQ = QQ.nodes()[0]), sF(QQ, {}, 1, FQ)
    }

    function sF(QQ, FQ, wQ, LQ, qQ) {
      let oQ = wQ,
        DQ = QQ.node(LQ);
      FQ[LQ] = !0;
      let kQ = QQ.neighbors(LQ);
      return kQ && kQ.forEach((qQ => {
        Object.hasOwn(FQ, qQ) || (wQ = sF(QQ, FQ, wQ, qQ, LQ))
      })), DQ.low = oQ, DQ.lim = wQ++, qQ ? DQ.parent = qQ : delete DQ.parent, wQ
    }

    function rF(QQ) {
      return QQ.edges().find((FQ => QQ.edge(FQ).cutvalue < 0))
    }

    function IF(QQ, FQ, wQ) {
      let LQ = wQ.v,
        qQ = wQ.w;
      FQ.hasEdge(LQ, qQ) || (LQ = wQ.w, qQ = wQ.v);
      let oQ = QQ.node(LQ),
        DQ = QQ.node(qQ),
        kQ = oQ,
        vQ = !1;
      return oQ.lim > DQ.lim && (kQ = DQ, vQ = !0), FQ.edges().filter((FQ => vQ === NF(QQ, QQ.node(FQ.v), kQ) && vQ !== NF(QQ, QQ.node(FQ.w), kQ))).reduce(((QQ, wQ) => tF(FQ, wQ) < tF(FQ, QQ) ? wQ : QQ))
    }

    function UF(QQ, FQ, wQ, LQ) {
      let qQ = wQ.v,
        oQ = wQ.w;
      QQ.removeEdge(qQ, oQ), QQ.setEdge(LQ.v, LQ.w, {}), OF(QQ), WF(QQ, FQ),
        function(QQ, FQ) {
          let wQ = QQ.nodes().find((FQ => !QQ.node(FQ).parent));
          if (!wQ) return;
          let LQ = cF(QQ, [wQ]);
          LQ = LQ.slice(1), LQ.forEach((wQ => {
            let LQ = QQ.node(wQ).parent,
              qQ = FQ.edge(wQ, LQ),
              oQ = !1;
            qQ || (qQ = FQ.edge(LQ, wQ), oQ = !0), FQ.node(wQ).rank = FQ.node(LQ).rank + (oQ ? qQ.minlen : -qQ.minlen)
          }))
        }(QQ, FQ)
    }

    function NF(QQ, FQ, wQ) {
      return wQ.low <= FQ.lim && FQ.lim <= wQ.lim
    }
    iF.initLowLimValues = OF, iF.initCutValues = WF, iF.calcCutValue = RF, iF.leaveEdge = rF, iF.enterEdge = IF, iF.exchangeEdges = UF;
    var TF = function(QQ) {
      let FQ = QQ.graph().ranker;
      if ("function" == typeof FQ) return FQ(QQ);
      switch (FQ) {
        case "network-simplex":
        default:
          zF(QQ);
          break;
        case "tight-tree":
          ! function(QQ) {
            AF(QQ), eF(QQ)
          }(QQ);
          break;
        case "longest-path":
          KF(QQ);
        case "none":
      }
    };
    var KF = AF;

    function zF(QQ) {
      SF(QQ)
    }
    var lF = function(QQ) {
      let FQ = function(QQ) {
          let FQ = {},
            wQ = 0;

          function LQ(qQ) {
            let oQ = wQ;
            QQ.children(qQ).forEach(LQ), FQ[qQ] = {
              low: oQ,
              lim: wQ++
            }
          }
          return QQ.children(LF).forEach(LQ), FQ
        }(QQ),
        wQ = QQ.graph();
      if (!Array.isArray(wQ.dummyChains)) return;
      wQ.dummyChains.forEach((wQ => {
        let LQ = QQ.node(wQ),
          qQ = LQ.edgeObj,
          oQ = function(QQ, FQ, wQ, LQ) {
            let qQ, oQ = [],
              DQ = [],
              kQ = Math.min(FQ[wQ].low, FQ[LQ].low),
              vQ = Math.max(FQ[wQ].lim, FQ[LQ].lim);
            qQ = wQ;
            do {
              qQ = QQ.parent(qQ), oQ.push(qQ)
            } while (qQ && (FQ[qQ].low > kQ || vQ > FQ[qQ].lim));
            let mQ = qQ,
              uQ = LQ;
            for (;
              (uQ = QQ.parent(uQ)) !== mQ;) DQ.push(uQ);
            return {
              path: oQ.concat(DQ.reverse()),
              lca: mQ
            }
          }(QQ, FQ, qQ.v, qQ.w),
          DQ = oQ.path,
          kQ = oQ.lca,
          vQ = 0,
          mQ = DQ[vQ],
          uQ = !0;
        for (; wQ !== qQ.w;) {
          if (LQ = QQ.node(wQ), uQ) {
            for (;
              (mQ = DQ[vQ]) !== kQ && QQ.node(mQ).maxRank < LQ.rank;) vQ++;
            mQ === kQ && (uQ = !1)
          }
          if (!uQ) {
            for (; vQ < DQ.length - 1 && QQ.node(DQ[vQ + 1]).minRank <= LQ.rank;) vQ++;
            mQ = DQ[vQ]
          }
          void 0 !== mQ && QQ.setParent(wQ, mQ), wQ = QQ.successors(wQ)[0]
        }
      }))
    };

    function jF(QQ) {
      let FQ = fQ(QQ, "root", {}, "_root"),
        wQ = function(QQ) {
          let FQ = {};

          function wQ(LQ, qQ) {
            let oQ = QQ.children(LQ);
            oQ && oQ.length && oQ.forEach((QQ => wQ(QQ, qQ + 1))), FQ[LQ] = qQ
          }
          return QQ.children(LF).forEach((QQ => wQ(QQ, 1))), FQ
        }(QQ),
        LQ = Object.values(wQ),
        qQ = gQ(Math.max, LQ) - 1,
        oQ = 2 * qQ + 1;
      QQ.graph().nestingRoot = FQ, QQ.edges().forEach((FQ => QQ.edge(FQ).minlen *= oQ));
      let DQ = function(QQ) {
        return QQ.edges().reduce(((FQ, wQ) => FQ + QQ.edge(wQ).weight), 0)
      }(QQ) + 1;
      QQ.children(LF).forEach((LQ => {
        aF(QQ, FQ, oQ, DQ, qQ, wQ, LQ)
      })), QQ.graph().nodeRankFactor = oQ
    }

    function aF(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      var kQ;
      let vQ = QQ.children(DQ);
      if (!vQ.length) return void(DQ !== FQ && QQ.setEdge(FQ, DQ, {
        weight: 0,
        minlen: wQ
      }));
      let mQ = EQ(QQ, "_bt"),
        uQ = EQ(QQ, "_bb"),
        HQ = QQ.node(DQ);
      QQ.setParent(mQ, DQ), HQ.borderTop = mQ, QQ.setParent(uQ, DQ), HQ.borderBottom = uQ, vQ.forEach((kQ => {
        var vQ;
        aF(QQ, FQ, wQ, LQ, qQ, oQ, kQ);
        let HQ = QQ.node(kQ),
          bQ = HQ.borderTop ? HQ.borderTop : kQ,
          YQ = HQ.borderBottom ? HQ.borderBottom : kQ,
          xQ = HQ.borderTop ? LQ : 2 * LQ,
          AQ = bQ !== YQ ? 1 : qQ - (null != (vQ = oQ[DQ]) ? vQ : 0) + 1;
        QQ.setEdge(mQ, bQ, {
          weight: xQ,
          minlen: AQ,
          nestingEdge: !0
        }), QQ.setEdge(YQ, uQ, {
          weight: xQ,
          minlen: AQ,
          nestingEdge: !0
        })
      })), QQ.parent(DQ) || QQ.setEdge(FQ, mQ, {
        weight: 0,
        minlen: qQ + (null != (kQ = oQ[DQ]) ? kQ : 0)
      })
    }
    var XF = function(QQ) {
      QQ.children(LF).forEach((function FQ(wQ) {
        let LQ = QQ.children(wQ),
          qQ = QQ.node(wQ);
        if (LQ.length && LQ.forEach(FQ), qQ && Object.hasOwn(qQ, "minRank")) {
          qQ.borderLeft = [], qQ.borderRight = [];
          for (let FQ = qQ.minRank, LQ = qQ.maxRank + 1; FQ < LQ; ++FQ) fF(QQ, "borderLeft", "_bl", wQ, qQ, FQ), fF(QQ, "borderRight", "_br", wQ, qQ, FQ)
        }
      }))
    };

    function fF(QQ, FQ, wQ, LQ, qQ, oQ) {
      let DQ = {
          width: 0,
          height: 0,
          rank: oQ,
          borderType: FQ
        },
        kQ = qQ[FQ][oQ - 1],
        vQ = fQ(QQ, "border", DQ, wQ);
      qQ[FQ][oQ] = vQ, QQ.setParent(vQ, LQ), kQ && QQ.setEdge(kQ, vQ, {
        weight: 1
      })
    }

    function VF(QQ) {
      var FQ;
      let wQ = null == (FQ = QQ.graph().rankdir) ? void 0 : FQ.toLowerCase();
      ("bt" === wQ || "rl" === wQ) && function(QQ) {
        QQ.nodes().forEach((FQ => EF(QQ.node(FQ)))), QQ.edges().forEach((FQ => {
          var wQ;
          let LQ = QQ.edge(FQ);
          null == (wQ = LQ.points) || wQ.forEach(EF), Object.hasOwn(LQ, "y") && EF(LQ)
        }))
      }(QQ), ("lr" === wQ || "rl" === wQ) && (function(QQ) {
        QQ.nodes().forEach((FQ => nF(QQ.node(FQ)))), QQ.edges().forEach((FQ => {
          var wQ;
          let LQ = QQ.edge(FQ);
          null == (wQ = LQ.points) || wQ.forEach(nF), Object.hasOwn(LQ, "x") && nF(LQ)
        }))
      }(QQ), hF(QQ))
    }

    function hF(QQ) {
      QQ.nodes().forEach((FQ => JF(QQ.node(FQ)))), QQ.edges().forEach((FQ => JF(QQ.edge(FQ))))
    }

    function JF(QQ) {
      let FQ = QQ.width;
      QQ.width = QQ.height, QQ.height = FQ
    }

    function EF(QQ) {
      QQ.y = -QQ.y
    }

    function nF(QQ) {
      let FQ = QQ.x;
      QQ.x = QQ.y, QQ.y = FQ
    }

    function gF(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        wQ = {},
        LQ = QQ.nodes().filter((FQ => !QQ.children(FQ).length)),
        qQ = LQ.map((FQ => QQ.node(FQ).rank)),
        oQ = QF(gQ(Math.max, qQ) + 1).map((() => []));
      return LQ.sort(((FQ, wQ) => QQ.node(FQ).rank - QQ.node(wQ).rank)).forEach((function LQ(qQ) {
        if (wQ[qQ]) return;
        wQ[qQ] = !0;
        let DQ = QQ.node(qQ);
        oQ[DQ.rank].push(qQ);
        let kQ = QQ.successors(qQ);
        kQ && [...kQ].sort(((wQ, LQ) => function(wQ, LQ) {
          let qQ = QQ.node(wQ),
            oQ = QQ.node(LQ);
          return qF(FQ, qQ, oQ)
        }(wQ, LQ))).forEach(LQ)
      })), oQ
    }

    function PF(QQ, FQ) {
      let wQ = 0;
      for (let LQ = 1; LQ < FQ.length; ++LQ) wQ += ZF(QQ, FQ[LQ - 1], FQ[LQ]);
      return wQ
    }

    function ZF(QQ, FQ, wQ) {
      let LQ = function(QQ, FQ) {
          return QQ.reduce(((QQ, wQ, LQ) => (QQ[wQ] = FQ[LQ], QQ)), {})
        }(wQ, wQ.map(((QQ, FQ) => FQ))),
        qQ = FQ.flatMap((FQ => {
          let wQ = QQ.outEdges(FQ);
          return wQ ? wQ.map((FQ => ({
            pos: LQ[FQ.w],
            weight: QQ.edge(FQ).weight
          }))).sort(((QQ, FQ) => QQ.pos - FQ.pos)) : []
        })),
        oQ = 1;
      for (; oQ < wQ.length;) oQ <<= 1;
      let DQ = 2 * oQ - 1;
      oQ -= 1;
      let kQ = new Array(DQ).fill(0),
        vQ = 0;
      return qQ.forEach((QQ => {
        let FQ = QQ.pos + oQ;
        kQ[FQ] += QQ.weight;
        let wQ = 0;
        for (; FQ > 0;) FQ % 2 && (wQ += kQ[FQ + 1]), FQ = FQ - 1 >> 1, kQ[FQ] += QQ.weight;
        vQ += QQ.weight * wQ
      })), vQ
    }

    function yF(QQ, FQ) {
      let wQ = {};
      return QQ.forEach(((QQ, FQ) => {
          let LQ = {
            indegree: 0,
            in: [],
            out: [],
            vs: [QQ.v],
            i: FQ
          };
          void 0 !== QQ.barycenter && (LQ.barycenter = QQ.barycenter, LQ.weight = QQ.weight), wQ[QQ.v] = LQ
        })), FQ.edges().forEach((QQ => {
          let FQ = wQ[QQ.v],
            LQ = wQ[QQ.w];
          void 0 !== FQ && void 0 !== LQ && (LQ.indegree++, FQ.out.push(LQ))
        })),
        function(QQ) {
          let FQ = [];

          function wQ(QQ) {
            return FQ => {
              FQ.merged || (void 0 === FQ.barycenter || void 0 === QQ.barycenter || FQ.barycenter >= QQ.barycenter) && function(QQ, FQ) {
                let wQ = 0,
                  LQ = 0;
                QQ.weight && (wQ += QQ.barycenter * QQ.weight, LQ += QQ.weight), FQ.weight && (wQ += FQ.barycenter * FQ.weight, LQ += FQ.weight), QQ.vs = FQ.vs.concat(QQ.vs), QQ.barycenter = wQ / LQ, QQ.weight = LQ, QQ.i = Math.min(FQ.i, QQ.i), FQ.merged = !0
              }(QQ, FQ)
            }
          }

          function LQ(FQ) {
            return wQ => {
              wQ.in.push(FQ), 0 === --wQ.indegree && QQ.push(wQ)
            }
          }
          for (; QQ.length;) {
            let qQ = QQ.pop();
            FQ.push(qQ), qQ.in.reverse().forEach(wQ(qQ)), qQ.out.forEach(LQ(qQ))
          }
          return FQ.filter((QQ => !QQ.merged)).map((QQ => FF(QQ, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(wQ).filter((QQ => !QQ.indegree)))
    }

    function BF(QQ, FQ, wQ, LQ, qQ) {
      let oQ = {},
        DQ = null,
        kQ = null,
        vQ = qQ;
      "boolean" == typeof FQ ? (vQ = FQ, oQ = {}) : FQ && (oQ = FQ, DQ = null != wQ ? wQ : null, kQ = null != LQ ? LQ : null);
      let mQ = function(QQ, FQ) {
          let wQ = {
            lhs: [],
            rhs: []
          };
          return QQ.forEach((QQ => {
            FQ(QQ) ? wQ.lhs.push(QQ) : wQ.rhs.push(QQ)
          })), wQ
        }(QQ, (QQ => Object.hasOwn(QQ, "barycenter"))),
        uQ = mQ.lhs,
        HQ = mQ.rhs.sort(((QQ, FQ) => FQ.i - QQ.i)),
        bQ = [],
        YQ = 0,
        xQ = 0,
        AQ = 0;
      uQ.sort(function(QQ, FQ, wQ) {
        return (LQ, qQ) => {
          if (LQ.barycenter < qQ.barycenter) return -1;
          if (LQ.barycenter > qQ.barycenter) return 1;
          if (QQ && ("string" == typeof LQ.vs[0] || "string" == typeof qQ.vs[0])) {
            let wQ = QQ.node(LQ.vs[0]),
              oQ = QQ.node(qQ.vs[0]),
              DQ = qF(FQ, wQ, oQ);
            if (0 !== DQ) return DQ
          }
          return wQ ? qQ.i - LQ.i : LQ.i - qQ.i
        }
      }(kQ, DQ, !!vQ));
      for (let [eQ, MQ] of Object.entries(oQ)) {
        let QQ = uQ.findIndex((QQ => QQ.vs[0] === eQ));
        uQ.splice(QQ + 1, 0, MQ)
      }
      AQ = dF(bQ, HQ, AQ), uQ.forEach((QQ => {
        AQ += QQ.vs.length, bQ.push(QQ.vs), YQ += QQ.barycenter * QQ.weight, xQ += QQ.weight, AQ = dF(bQ, HQ, AQ)
      }));
      let tQ = {
        vs: bQ.flat(1)
      };
      return xQ && (tQ.barycenter = YQ / xQ, tQ.weight = xQ), tQ
    }

    function dF(QQ, FQ, wQ) {
      let LQ;
      for (; FQ.length && (LQ = FQ[FQ.length - 1]).i <= wQ;) FQ.pop(), QQ.push(LQ.vs), wQ++;
      return wQ
    }

    function Qw(QQ, FQ, wQ, LQ, qQ) {
      var oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ;
      let tQ = null,
        eQ = qQ;
      "boolean" == typeof LQ ? (eQ = LQ, tQ = null) : void 0 !== LQ && (tQ = LQ);
      let MQ = QQ.children(FQ),
        GQ = QQ.node(FQ),
        pQ = GQ ? GQ.borderLeft : void 0,
        cQ = GQ ? GQ.borderRight : void 0,
        CQ = {};
      pQ && (MQ = MQ.filter((QQ => QQ !== pQ && QQ !== cQ)));
      let SQ = function(QQ) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((FQ => {
          let wQ = QQ.inEdges(FQ);
          if (!wQ || !wQ.length) return {
            v: FQ
          };
          {
            let LQ = wQ.reduce(((FQ, wQ) => {
              let LQ = QQ.edge(wQ),
                qQ = QQ.node(wQ.v);
              return {
                sum: FQ.sum + LQ.weight * qQ.order,
                weight: FQ.weight + LQ.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: FQ,
              barycenter: LQ.sum / LQ.weight,
              weight: LQ.weight
            }
          }
        }))
      }(QQ, MQ);
      SQ.forEach((FQ => {
        if (QQ.children(FQ.v).length) {
          let {
            result: LQ
          } = Qw(QQ, FQ.v, wQ, tQ, eQ);
          CQ[FQ.v] = LQ, Object.hasOwn(LQ, "barycenter") && function(QQ, FQ) {
            void 0 !== QQ.barycenter ? (QQ.barycenter = (QQ.barycenter * QQ.weight + FQ.barycenter * FQ.weight) / (QQ.weight + FQ.weight), QQ.weight += FQ.weight) : (QQ.barycenter = FQ.barycenter, QQ.weight = FQ.weight)
          }(FQ, LQ)
        }
      }));
      let iQ = yF(SQ, wQ);
      ! function(QQ, FQ) {
        QQ.forEach((QQ => {
          QQ.vs = QQ.vs.flatMap((QQ => FQ[QQ] ? FQ[QQ].vs : QQ))
        }))
      }(iQ, CQ);
      let WQ = {},
        RQ = !1;
      for (let sQ = 0; sQ < iQ.length; sQ++)
        for (let FQ = sQ + 1; FQ < iQ.length; FQ++)
          if (iQ[sQ] && iQ[FQ] && null != (oQ = iQ[sQ]) && oQ.barycenter && null != (DQ = iQ[FQ]) && DQ.barycenter && (null == (kQ = iQ[sQ]) ? void 0 : kQ.barycenter) === iQ[FQ].barycenter) {
            let wQ = null != (mQ = null == (vQ = iQ[sQ]) ? void 0 : vQ.vs[0]) ? mQ : "",
              LQ = null != (HQ = null == (uQ = iQ[FQ]) ? void 0 : uQ.vs[0]) ? HQ : "",
              qQ = QQ.node(wQ),
              oQ = QQ.node(LQ);
            if ("edge" === qQ.dummy && "edge" === oQ.dummy && (null == (bQ = qQ.edgeObj) ? void 0 : bQ.v) === (null == (YQ = oQ.edgeObj) ? void 0 : YQ.v) && (null == (xQ = qQ.edgeObj) ? void 0 : xQ.w) === (null == (AQ = oQ.edgeObj) ? void 0 : AQ.w)) {
              if (qQ.edgeLabel.reversed) {
                WQ[LQ] = iQ[sQ], iQ.splice(sQ, 1), sQ--;
                break
              }
              WQ[wQ] = iQ[FQ], iQ.splice(FQ, 1), FQ--
            } else RQ = !0
          } let OQ = BF(iQ, WQ, tQ, QQ, eQ);
      if (pQ && cQ) {
        OQ.vs = [pQ, OQ.vs, cQ].flat(1);
        let FQ = QQ.predecessors(pQ);
        if (FQ && FQ.length) {
          let wQ = QQ.node(FQ[0]),
            LQ = QQ.predecessors(cQ),
            qQ = QQ.node(LQ[0]);
          Object.hasOwn(OQ, "barycenter") || (OQ.barycenter = 0, OQ.weight = 0), OQ.barycenter = (OQ.barycenter * OQ.weight + wQ.order + qQ.order) / (OQ.weight + 2), OQ.weight += 2
        }
      }
      return Object.defineProperty(OQ, "result", {
        value: OQ,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(OQ, "usedBias", {
        value: RQ,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), OQ
    }

    function Fw(QQ, FQ, wQ, LQ) {
      LQ || (LQ = QQ.nodes());
      let qQ = function(QQ) {
          let FQ;
          for (; QQ.hasNode(FQ = dQ("_root")););
          return FQ
        }(QQ),
        oQ = new XQ({
          compound: !0
        }).setGraph({
          root: qQ
        }).setDefaultNodeLabel((FQ => QQ.node(FQ)));
      return LQ.forEach((LQ => {
        let DQ = QQ.node(LQ),
          kQ = QQ.parent(LQ);
        if (DQ.rank === FQ || DQ.minRank <= FQ && FQ <= DQ.maxRank) {
          oQ.setNode(LQ), oQ.setParent(LQ, kQ || qQ);
          let vQ = QQ[wQ](LQ);
          vQ && vQ.forEach((FQ => {
            let wQ = FQ.v === LQ ? FQ.w : FQ.v,
              qQ = oQ.edge(wQ, LQ),
              DQ = void 0 !== qQ ? qQ.weight : 0;
            oQ.setEdge(wQ, LQ, {
              weight: QQ.edge(FQ).weight + DQ
            })
          })), Object.hasOwn(DQ, "minRank") && oQ.setNode(LQ, {
            borderLeft: DQ.borderLeft[FQ],
            borderRight: DQ.borderRight[FQ]
          })
        }
      })), oQ
    }

    function ww(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof FQ.customOrder) return void FQ.customOrder(QQ, ww);
      let LQ = PQ(QQ),
        qQ = Lw(QQ, QF(1, LQ + 1), "inEdges"),
        oQ = Lw(QQ, QF(LQ - 1, -1, -1), "outEdges"),
        DQ = gF(QQ, wQ);
      if (ow(QQ, DQ), FQ.disableOptimalOrderHeuristic) return;
      let kQ, vQ = Number.POSITIVE_INFINITY,
        mQ = FQ.constraints || [];
      for (let uQ = 0, HQ = 0; HQ < 4; ++uQ, ++HQ) {
        qw(uQ % 2 ? qQ : oQ, uQ % 4 >= 2, mQ, wQ), DQ = JQ(QQ);
        let FQ = PF(QQ, DQ);
        FQ < vQ ? (HQ = 0, kQ = Object.assign({}, DQ), vQ = FQ) : FQ === vQ && (kQ = structuredClone(DQ))
      }
      ow(QQ, kQ)
    }

    function Lw(QQ, FQ, wQ) {
      let LQ = new Map,
        qQ = (QQ, FQ) => {
          LQ.has(QQ) || LQ.set(QQ, []), LQ.get(QQ).push(FQ)
        };
      for (let oQ of QQ.nodes()) {
        let FQ = QQ.node(oQ);
        if ("number" == typeof FQ.rank && qQ(FQ.rank, oQ), "number" == typeof FQ.minRank && "number" == typeof FQ.maxRank)
          for (let QQ = FQ.minRank; QQ <= FQ.maxRank; QQ++) QQ !== FQ.rank && qQ(QQ, oQ)
      }
      return FQ.map((function(FQ) {
        return Fw(QQ, FQ, wQ, LQ.get(FQ) || [])
      }))
    }

    function qw(QQ, FQ, wQ, LQ) {
      let qQ = !0,
        oQ = new XQ;
      QQ.forEach((function(QQ) {
        wQ.forEach((QQ => oQ.setEdge(QQ.left, QQ.right)));
        let DQ = QQ.graph().root,
          {
            result: kQ,
            usedBias: vQ
          } = Qw(QQ, DQ, oQ, LQ, qQ);
        FQ && vQ && (qQ = !qQ), kQ.vs.forEach(((FQ, wQ) => QQ.node(FQ).order = wQ)),
          function(QQ, FQ, wQ) {
            let LQ, qQ = {};
            wQ.forEach((wQ => {
              let oQ, DQ, kQ = QQ.parent(wQ);
              for (; kQ;) {
                if (oQ = QQ.parent(kQ), oQ ? (DQ = qQ[oQ], qQ[oQ] = kQ) : (DQ = LQ, LQ = kQ), DQ && DQ !== kQ) return void FQ.setEdge(DQ, kQ);
                kQ = oQ
              }
            }))
          }(QQ, oQ, kQ.vs)
      }))
    }

    function ow(QQ, FQ) {
      Object.values(FQ).forEach((FQ => FQ.forEach(((FQ, wQ) => QQ.node(FQ).order = wQ))))
    }

    function Dw(QQ, FQ, wQ) {
      if (FQ > wQ) {
        let QQ = FQ;
        FQ = wQ, wQ = QQ
      }
      let LQ = QQ[FQ];
      LQ || (QQ[FQ] = LQ = {}), LQ[wQ] = !0
    }

    function kw(QQ, FQ, wQ) {
      if (FQ > wQ) {
        let QQ = FQ;
        FQ = wQ, wQ = QQ
      }
      let LQ = QQ[FQ];
      return void 0 !== LQ && Object.hasOwn(LQ, wQ)
    }

    function vw(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        oQ = {},
        DQ = function(QQ, FQ, wQ, LQ) {
          let qQ = new XQ,
            oQ = QQ.graph(),
            DQ = function(QQ, FQ, wQ) {
              return (LQ, qQ, oQ) => {
                let DQ, kQ = LQ.node(qQ),
                  vQ = LQ.node(oQ),
                  mQ = 0;
                if (mQ += kQ.width / 2, Object.hasOwn(kQ, "labelpos")) switch (kQ.labelpos.toLowerCase()) {
                  case "l":
                    DQ = -kQ.width / 2;
                    break;
                  case "r":
                    DQ = kQ.width / 2
                }
                if (DQ && (mQ += wQ ? DQ : -DQ), DQ = void 0, mQ += (kQ.dummy ? FQ : QQ) / 2, mQ += (vQ.dummy ? FQ : QQ) / 2, mQ += vQ.width / 2, Object.hasOwn(vQ, "labelpos")) switch (vQ.labelpos.toLowerCase()) {
                  case "l":
                    DQ = vQ.width / 2;
                    break;
                  case "r":
                    DQ = -vQ.width / 2
                }
                return DQ && (mQ += wQ ? DQ : -DQ), mQ
              }
            }(oQ.nodesep, oQ.edgesep, LQ);
          return FQ.forEach((FQ => {
            let LQ;
            FQ.forEach((FQ => {
              let oQ = wQ[FQ];
              if (void 0 !== oQ) {
                if (qQ.setNode(oQ), void 0 !== LQ) {
                  let kQ = wQ[LQ];
                  if (void 0 !== kQ) {
                    let wQ = qQ.edge(kQ, oQ);
                    qQ.setEdge(kQ, oQ, Math.max(DQ(QQ, FQ, LQ), wQ || 0))
                  }
                }
                LQ = FQ
              }
            }))
          })), qQ
        }(QQ, FQ, wQ, qQ),
        kQ = qQ ? "borderLeft" : "borderRight";

      function vQ(QQ, FQ) {
        let wQ = DQ.nodes().slice(),
          LQ = {},
          qQ = wQ.pop();
        for (; qQ;) {
          if (LQ[qQ]) QQ(qQ);
          else {
            LQ[qQ] = !0, wQ.push(qQ);
            for (let QQ of FQ(qQ)) wQ.push(QQ)
          }
          qQ = wQ.pop()
        }
      }
      return vQ((function(QQ) {
        let FQ = DQ.inEdges(QQ);
        oQ[QQ] = FQ ? FQ.reduce(((QQ, FQ) => {
          var wQ;
          let LQ = null != (wQ = oQ[FQ.v]) ? wQ : 0,
            qQ = DQ.edge(FQ);
          return Math.max(QQ, LQ + (void 0 !== qQ ? qQ : 0))
        }), 0) : 0
      }), (function(QQ) {
        return DQ.predecessors(QQ) || []
      })), vQ((function(FQ) {
        let wQ = DQ.outEdges(FQ),
          LQ = Number.POSITIVE_INFINITY;
        wQ && (LQ = wQ.reduce(((QQ, FQ) => {
          let wQ = oQ[FQ.w],
            LQ = DQ.edge(FQ);
          return Math.min(QQ, (void 0 !== wQ ? wQ : 0) - (void 0 !== LQ ? LQ : 0))
        }), Number.POSITIVE_INFINITY));
        let qQ = QQ.node(FQ);
        LQ !== Number.POSITIVE_INFINITY && qQ.borderType !== kQ && (oQ[FQ] = Math.max(void 0 !== oQ[FQ] ? oQ[FQ] : 0, LQ))
      }), (function(QQ) {
        return DQ.successors(QQ) || []
      })), Object.keys(LQ).forEach((QQ => {
        var FQ;
        let LQ = wQ[QQ];
        void 0 !== LQ && (oQ[QQ] = null != (FQ = oQ[LQ]) ? FQ : 0)
      })), oQ
    }

    function mw(QQ, FQ) {
      let wQ, LQ = JQ(QQ),
        qQ = Object.assign(function(QQ, FQ) {
          let wQ = {};
          return FQ.length && FQ.reduce((function(FQ, LQ) {
            let qQ = 0,
              oQ = 0,
              DQ = FQ.length,
              kQ = LQ[LQ.length - 1];
            return LQ.forEach(((FQ, vQ) => {
              let mQ = function(QQ, FQ) {
                  if (QQ.node(FQ).dummy) {
                    let wQ = QQ.predecessors(FQ);
                    if (wQ) return wQ.find((FQ => QQ.node(FQ).dummy))
                  }
                }(QQ, FQ),
                uQ = mQ ? QQ.node(mQ).order : DQ;
              (mQ || FQ === kQ) && (LQ.slice(oQ, vQ + 1).forEach((FQ => {
                let LQ = QQ.predecessors(FQ);
                LQ && LQ.forEach((LQ => {
                  let oQ = QQ.node(LQ),
                    DQ = oQ.order;
                  (DQ < qQ || uQ < DQ) && (!oQ.dummy || !QQ.node(FQ).dummy) && Dw(wQ, LQ, FQ)
                }))
              })), oQ = vQ + 1, qQ = uQ)
            })), LQ
          })), wQ
        }(QQ, LQ), function(QQ, FQ) {
          let wQ = {};

          function LQ(FQ, LQ, qQ, oQ, DQ) {
            QF(LQ, qQ).forEach((LQ => {
              let qQ = FQ[LQ];
              if (void 0 !== qQ && QQ.node(qQ).dummy) {
                let FQ = QQ.predecessors(qQ);
                FQ && FQ.forEach((FQ => {
                  if (void 0 === FQ) return;
                  let LQ = QQ.node(FQ);
                  LQ.dummy && (LQ.order < oQ || LQ.order > DQ) && Dw(wQ, FQ, qQ)
                }))
              }
            }))
          }
          return FQ.length && FQ.reduce((function(FQ, wQ) {
            let qQ = -1,
              oQ = -1,
              DQ = 0;
            return wQ.forEach(((kQ, vQ) => {
              if ("border" === QQ.node(kQ).dummy) {
                let FQ = QQ.predecessors(kQ);
                if (FQ && FQ.length) {
                  let kQ = FQ[0];
                  if (void 0 === kQ) return;
                  oQ = QQ.node(kQ).order, LQ(wQ, DQ, vQ, qQ, oQ), DQ = vQ, qQ = oQ
                }
              }
              LQ(wQ, DQ, wQ.length, oQ, FQ.length)
            })), wQ
          })), wQ
        }(QQ, LQ)),
        oQ = {};
      ["u", "d"].forEach((DQ => {
        wQ = "u" === DQ ? LQ : Object.values(LQ).reverse(), ["l", "r"].forEach((LQ => {
          "r" === LQ && (wQ = wQ.map((QQ => Object.values(QQ).reverse())));
          let kQ = function(QQ, FQ, wQ, LQ, qQ) {
              let oQ = {},
                DQ = {},
                kQ = {};
              return FQ.forEach((QQ => {
                QQ.forEach(((QQ, FQ) => {
                  oQ[QQ] = QQ, DQ[QQ] = QQ, kQ[QQ] = FQ
                }))
              })), FQ.forEach((FQ => {
                let vQ = -1,
                  mQ = -1,
                  uQ = !1,
                  HQ = FQ,
                  bQ = FQ.findIndex((FQ => (null == qQ ? void 0 : qQ.includes(FQ)) || uw(FQ, QQ, qQ)));
                bQ > 0 && (HQ = [FQ[bQ], ...FQ.slice(0, bQ), ...FQ.slice(bQ + 1)], uQ = !0), HQ.forEach((FQ => {
                  var HQ;
                  let bQ = LQ(FQ);
                  if (bQ && bQ.length) {
                    null != qQ && qQ.includes(FQ) && (bQ = bQ.filter((FQ => uw(FQ, QQ, qQ))));
                    let LQ = bQ.sort(((QQ, FQ) => {
                        let wQ = kQ[QQ],
                          LQ = kQ[FQ];
                        return (void 0 !== wQ ? wQ : 0) - (void 0 !== LQ ? LQ : 0)
                      })),
                      YQ = (LQ.length - 1) / 2;
                    for (let QQ = Math.floor(YQ), qQ = Math.ceil(YQ); QQ <= qQ; ++QQ) {
                      let qQ = LQ[QQ];
                      if (void 0 === qQ) continue;
                      let bQ = kQ[qQ];
                      if (void 0 !== bQ && DQ[FQ] === FQ && vQ < bQ && kQ[qQ] !== mQ && !kw(wQ, FQ, qQ)) {
                        let QQ = oQ[qQ];
                        void 0 !== QQ && (DQ[qQ] = FQ, DQ[FQ] = oQ[FQ] = QQ, vQ = bQ, uQ && (vQ = -1, mQ = null != (HQ = kQ[qQ]) ? HQ : -1, uQ = !1))
                      }
                    }
                  }
                }))
              })), {
                root: oQ,
                align: DQ
              }
            }(QQ, wQ, qQ, (FQ => ("u" === DQ ? QQ.predecessors(FQ) : QQ.successors(FQ)) || []), FQ),
            vQ = vw(QQ, wQ, kQ.root, kQ.align, "r" === LQ);
          "r" === LQ && (vQ = wF(vQ, (QQ => -QQ))), oQ[DQ + LQ] = vQ
        }))
      }));
      let DQ = function(QQ, FQ) {
        return Object.values(FQ).reduce(((FQ, wQ) => {
          let LQ = Number.NEGATIVE_INFINITY,
            qQ = Number.POSITIVE_INFINITY;
          Object.entries(wQ).forEach((FQ => {
            let [wQ, oQ] = FQ, DQ = function(QQ, FQ) {
              return QQ.node(FQ).width
            }(QQ, wQ) / 2;
            LQ = Math.max(oQ + DQ, LQ), qQ = Math.min(oQ - DQ, qQ)
          }));
          let oQ = LQ - qQ;
          return oQ < FQ[0] && (FQ = [oQ, wQ]), FQ
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(QQ, oQ);
      return function(QQ, FQ) {
          let wQ = Object.values(FQ),
            LQ = gQ(Math.min, wQ),
            qQ = gQ(Math.max, wQ);
          ["u", "d"].forEach((wQ => {
            ["l", "r"].forEach((oQ => {
              let DQ = wQ + oQ,
                kQ = QQ[DQ];
              if (!kQ || kQ === FQ) return;
              let vQ = Object.values(kQ),
                mQ = LQ - gQ(Math.min, vQ);
              "l" !== oQ && (mQ = qQ - gQ(Math.max, vQ)), mQ && (QQ[DQ] = wF(kQ, (QQ => QQ + mQ)))
            }))
          }))
        }(oQ, DQ),
        function(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            wQ = QQ.ul;
          return wQ ? wF(wQ, ((wQ, LQ) => {
            var qQ, oQ;
            if (FQ) {
              let wQ = FQ.toLowerCase(),
                qQ = QQ[wQ];
              if (qQ && void 0 !== qQ[LQ]) return qQ[LQ]
            }
            let DQ = Object.values(QQ).map((QQ => {
              let FQ = QQ[LQ];
              return void 0 !== FQ ? FQ : 0
            })).sort(((QQ, FQ) => QQ - FQ));
            return ((null != (qQ = DQ[1]) ? qQ : 0) + (null != (oQ = DQ[2]) ? oQ : 0)) / 2
          })) : {}
        }(oQ, QQ.graph().align)
    }

    function uw(QQ, FQ, wQ) {
      var LQ;
      if (!wQ) return !1;
      let qQ = null == (LQ = FQ.node(QQ)) ? void 0 : LQ.edgeObj;
      if (!qQ || FQ.node(QQ).edgeLabel.reversed) return !1;
      let oQ = wQ.indexOf(null == qQ ? void 0 : qQ.v),
        DQ = wQ.indexOf(null == qQ ? void 0 : qQ.w);
      return -1 !== oQ && -1 !== DQ && oQ === (DQ + 1) % wQ.length || oQ === (DQ - 1) % wQ.length
    }

    function Hw(QQ, FQ) {
      (function(QQ) {
        let FQ = JQ(QQ),
          wQ = QQ.graph(),
          LQ = wQ.ranksep,
          qQ = wQ.rankalign,
          oQ = 0;
        FQ.forEach((FQ => {
          let wQ = FQ.reduce(((FQ, wQ) => {
            var LQ;
            let qQ = null != (LQ = QQ.node(wQ).height) ? LQ : 0;
            return FQ > qQ ? FQ : qQ
          }), 0);
          FQ.forEach((FQ => {
            let LQ = QQ.node(FQ);
            LQ.y = "top" === qQ ? oQ + LQ.height / 2 : "bottom" === qQ ? oQ + wQ - LQ.height / 2 : oQ + wQ / 2
          })), oQ += wQ + LQ
        }))
      })(QQ = VQ(QQ)), Object.entries(mw(QQ, FQ)).forEach((FQ => {
        let [wQ, LQ] = FQ;
        return QQ.node(wQ).x = LQ
      }))
    }
    var bw = new WeakMap;

    function Yw(QQ) {
      return Aw(QQ, yQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), QQ
    }

    function xw(QQ, FQ, wQ) {
      let LQ = FQ;
      for (; void 0 !== LQ;) {
        let FQ = QQ.parent(LQ);
        if (FQ === wQ) return LQ;
        LQ = FQ
      }
    }

    function Aw(QQ, FQ, wQ) {
      var LQ;
      let qQ = QQ.nodes().filter((FQ => QQ.children(FQ).length)),
        oQ = {};
      qQ.forEach((LQ => {
        let qQ = QQ.node(LQ);
        if (qQ && qQ.rankdir) {
          let DQ = new XQ({
            multigraph: !0,
            compound: !0
          });
          DQ.setGraph({
            rankdir: qQ.rankdir
          });
          let kQ = QQ.children(LQ);
          kQ.forEach((FQ => {
            let wQ = {
              ...QQ.node(FQ)
            };
            DQ.setNode(FQ, wQ);
            let qQ = QQ.parent(FQ);
            qQ && qQ !== LQ && kQ.includes(qQ) && DQ.setParent(FQ, qQ)
          }));
          let vQ = new Set;
          QQ.edges().forEach((FQ => {
            let wQ = xw(QQ, FQ.v, LQ),
              qQ = xw(QQ, FQ.w, LQ);
            if (wQ && qQ && wQ !== qQ) {
              let LQ = `${wQ}\0${qQ}`;
              vQ.has(LQ) || (vQ.add(LQ), DQ.setEdge(wQ, qQ, {
                ...QQ.edge(FQ)
              }))
            }
          })), Aw(DQ, FQ, wQ);
          let mQ = Ow(DQ);
          tw(mQ, FQ, wQ, null), ew(DQ, mQ);
          let uQ = 1 / 0,
            HQ = 1 / 0,
            bQ = -1 / 0,
            YQ = -1 / 0;
          DQ.nodes().forEach((QQ => {
            if (QQ === LQ) return;
            let FQ = DQ.node(QQ);
            FQ && "number" == typeof FQ.x && "number" == typeof FQ.y && "number" == typeof FQ.width && "number" == typeof FQ.height && (uQ = Math.min(uQ, FQ.x - FQ.width / 2), bQ = Math.max(bQ, FQ.x + FQ.width / 2), HQ = Math.min(HQ, FQ.y - FQ.height / 2), YQ = Math.max(YQ, FQ.y + FQ.height / 2))
          })), (!isFinite(uQ) || !isFinite(HQ) || !isFinite(bQ) || !isFinite(YQ)) && (uQ = HQ = 0, bQ = YQ = 0);
          let xQ = bQ - uQ,
            AQ = YQ - HQ;
          oQ[LQ] = {
            minX: uQ,
            yq: HQ,
            maxX: bQ,
            Bq: YQ,
            width: xQ,
            height: AQ,
            offsetX: uQ,
            offsetY: HQ
          }, qQ._dagreClusterSubgraph = DQ
        }
      }));
      let DQ = [],
        kQ = new Map;
      qQ.forEach((FQ => {
        let wQ = QQ.node(FQ);
        wQ && wQ.rankdir && oQ[FQ] && kQ.set(FQ, (QQ.children(FQ) || []).filter((QQ => QQ !== FQ)))
      }));
      let vQ = new Set([...kQ.values()].flat()),
        mQ = new Map;
      kQ.forEach(((FQ, wQ) => {
        vQ.has(wQ) || mQ.set(wQ, (FQ => {
          let wQ = [],
            LQ = (QQ.children(FQ) || []).filter((QQ => QQ !== FQ));
          for (; LQ.length > 0;) {
            let FQ = LQ.shift();
            wQ.push(FQ), (QQ.children(FQ) || []).filter((QQ => QQ !== FQ)).forEach((QQ => LQ.push(QQ)))
          }
          return wQ
        })(wQ))
      }));
      let uQ = new Set([...mQ.values()].flat()),
        HQ = QQ => {
          for (let [FQ, wQ] of mQ)
            if (wQ.includes(QQ)) return FQ;
          return QQ
        },
        bQ = [];
      QQ.edges().forEach((FQ => {
        (uQ.has(FQ.v) || uQ.has(FQ.w)) && bQ.push({
          edge: FQ,
          label: QQ.edge(FQ)
        })
      }));
      let YQ = new Map;
      uQ.forEach((FQ => {
        let wQ = QQ.parent(FQ);
        YQ.set(FQ, "string" == typeof wQ ? wQ : void 0)
      })), mQ.forEach(((FQ, wQ) => {
        let LQ = QQ.node(wQ),
          qQ = [];
        FQ.forEach((FQ => {
          let wQ = QQ.node(FQ);
          wQ && (qQ.push({
            id: FQ,
            node: wQ,
            parent: YQ.get(FQ)
          }), QQ.removeNode(FQ))
        }));
        let kQ = bQ.filter((QQ => {
            let {
              edge: wQ
            } = QQ;
            return FQ.includes(wQ.v) || FQ.includes(wQ.w)
          })),
          vQ = oQ[wQ];
        LQ && (DQ.push({
          clusterId: wQ,
          subgraph: LQ._dagreClusterSubgraph,
          bounds: vQ,
          children: FQ,
          removedNodes: qQ,
          removedEdges: kQ
        }), LQ.width = vQ.width, LQ.height = vQ.height)
      }));
      let xQ = new Set;
      bQ.forEach((FQ => {
        let {
          edge: wQ,
          label: LQ
        } = FQ, qQ = HQ(wQ.v), oQ = HQ(wQ.w);
        if (qQ !== oQ && QQ.hasNode(qQ) && QQ.hasNode(oQ)) {
          let FQ = `${qQ}\0${oQ}`;
          xQ.has(FQ) || (xQ.add(FQ), QQ.setEdge(qQ, oQ, {
            ...LQ,
            width: 0,
            height: 0
          }))
        }
      }));
      let AQ = Ow(QQ),
        tQ = tw(AQ, FQ, wQ, null != (LQ = bw.get(QQ)) ? LQ : null);
      bw.set(QQ, tQ), ew(QQ, AQ), xQ.forEach((FQ => {
        let wQ = FQ.indexOf("\0"),
          LQ = FQ.slice(0, wQ),
          qQ = FQ.slice(wQ + 1);
        QQ.hasEdge(LQ, qQ) && QQ.removeEdge(LQ, qQ)
      })), DQ.forEach((FQ => {
        let {
          clusterId: wQ,
          subgraph: LQ,
          bounds: qQ,
          removedNodes: oQ,
          removedEdges: DQ
        } = FQ;
        var kQ, vQ;
        let mQ = QQ.node(wQ),
          uQ = null != (kQ = null == mQ ? void 0 : mQ.x) ? kQ : 0,
          HQ = null != (vQ = null == mQ ? void 0 : mQ.y) ? vQ : 0,
          bQ = (qQ.minX + qQ.maxX) / 2,
          YQ = (qQ.yq + qQ.Bq) / 2;
        oQ.forEach((FQ => {
          let {
            id: wQ,
            node: LQ,
            parent: qQ
          } = FQ;
          QQ.setNode(wQ, LQ), void 0 !== qQ && QQ.setParent(wQ, qQ)
        })), DQ.forEach((FQ => {
          let {
            edge: wQ,
            label: LQ
          } = FQ;
          QQ.setEdge(wQ, LQ)
        })), LQ.nodes().forEach((FQ => {
          if (FQ === wQ) return;
          let qQ = LQ.node(FQ),
            oQ = QQ.node(FQ);
          oQ && qQ && "number" == typeof qQ.x && "number" == typeof qQ.y && (oQ.x = uQ + (qQ.x - bQ), oQ.y = HQ + (qQ.y - YQ))
        })), delete mQ._dagreClusterSubgraph
      })), qQ.forEach((FQ => {
        var wQ, LQ;
        let qQ = QQ.node(FQ),
          DQ = oQ[FQ];
        if (qQ && qQ.rankdir && qQ._dagreClusterSubgraph && DQ) {
          let oQ = qQ._dagreClusterSubgraph,
            kQ = null != (wQ = qQ.x) ? wQ : 0,
            vQ = null != (LQ = qQ.y) ? LQ : 0,
            mQ = (DQ.minX + DQ.maxX) / 2,
            uQ = (DQ.yq + DQ.Bq) / 2;
          oQ.nodes().forEach((wQ => {
            if (wQ === FQ) return;
            let LQ = oQ.node(wQ),
              qQ = QQ.node(wQ);
            if (qQ && LQ && "number" == typeof LQ.x && "number" == typeof LQ.y) {
              let QQ = LQ.x - mQ,
                FQ = LQ.y - uQ;
              qQ.x = kQ + QQ, qQ.y = vQ + FQ
            }
          })), delete qQ._dagreClusterSubgraph
        }
      }))
    }

    function tw(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var qQ, oQ;
      let DQ = !1 !== (null == wQ ? void 0 : wQ.useDynamic),
        kQ = DQ && null != (qQ = null == LQ ? void 0 : LQ.graph) ? qQ : null,
        vQ = DQ && null != (oQ = null == LQ ? void 0 : LQ.rawNodes) ? oQ : null;
      FQ("    makeSpaceForEdgeLabels", (() => function(QQ) {
        let FQ = QQ.graph();
        FQ.ranksep /= 2, QQ.edges().forEach((wQ => {
          var LQ;
          let qQ = QQ.edge(wQ);
          qQ.minlen *= 2, "c" !== (null != (LQ = qQ.labelpos) ? LQ : "r").toLowerCase() && ("TB" === FQ.rankdir || "BT" === FQ.rankdir ? qQ.width += qQ.labeloffset : qQ.height += qQ.labeloffset)
        }))
      }(QQ))), FQ("    removeSelfEdges", (() => function(QQ) {
        QQ.edges().forEach((FQ => {
          if (FQ.v === FQ.w) {
            let wQ = QQ.node(FQ.v);
            wQ.selfEdges || (wQ.selfEdges = []), wQ.selfEdges.push({
              e: FQ,
              label: QQ.edge(FQ)
            }), QQ.removeEdge(FQ)
          }
        }))
      }(QQ))), FQ("    acyclic", (() => YF(QQ, kQ))), FQ("    nestingGraph.run", (() => jF(QQ))), FQ("    rank", (() => TF(VQ(QQ)))), FQ("    injectEdgeLabelProxies", (() => function(QQ) {
        QQ.edges().forEach((FQ => {
          let wQ = QQ.edge(FQ);
          if (wQ.width && wQ.height) {
            let wQ = QQ.node(FQ.v),
              LQ = {
                rank: (QQ.node(FQ.w).rank - wQ.rank) / 2 + wQ.rank,
                e: FQ
              };
            fQ(QQ, "edge-proxy", LQ, "_ep")
          }
        }))
      }(QQ))), FQ("    removeEmptyRanks", (() => function(QQ) {
        let FQ = QQ.nodes().map((FQ => QQ.node(FQ).rank)).filter((QQ => void 0 !== QQ)),
          wQ = gQ(Math.min, FQ),
          LQ = [];
        QQ.nodes().forEach((FQ => {
          let qQ = QQ.node(FQ).rank - wQ;
          LQ[qQ] || (LQ[qQ] = []), LQ[qQ].push(FQ)
        }));
        let qQ = 0,
          oQ = QQ.graph().nodeRankFactor;
        Array.from(LQ).forEach(((FQ, wQ) => {
          void 0 === FQ && wQ % oQ !== 0 ? --qQ : void 0 !== FQ && qQ && FQ.forEach((FQ => QQ.node(FQ).rank += qQ))
        }))
      }(QQ))), FQ("    nestingGraph.cleanup", (() => function(QQ) {
        let FQ = QQ.graph();
        QQ.removeNode(FQ.nestingRoot), delete FQ.nestingRoot, QQ.edges().forEach((FQ => {
          QQ.edge(FQ).nestingEdge && QQ.removeEdge(FQ)
        }))
      }(QQ))), FQ("    normalizeRanks", (() => function(QQ) {
        let FQ = QQ.nodes().map((FQ => {
            let wQ = QQ.node(FQ).rank;
            return void 0 === wQ ? Number.MAX_VALUE : wQ
          })),
          wQ = gQ(Math.min, FQ);
        QQ.nodes().forEach((FQ => {
          let LQ = QQ.node(FQ);
          Object.hasOwn(LQ, "rank") && (LQ.rank -= wQ)
        }))
      }(QQ))), FQ("    assignRankMinMax", (() => function(QQ) {
        let FQ = 0;
        QQ.nodes().forEach((wQ => {
          let LQ = QQ.node(wQ);
          LQ.borderTop && (LQ.minRank = QQ.node(LQ.borderTop).rank, LQ.maxRank = QQ.node(LQ.borderBottom).rank, FQ = Math.max(FQ, LQ.maxRank))
        })), QQ.graph().maxRank = FQ
      }(QQ))), FQ("    removeEdgeLabelProxies", (() => function(QQ) {
        QQ.nodes().forEach((FQ => {
          let wQ = QQ.node(FQ);
          if ("edge-proxy" === wQ.dummy) {
            let LQ = wQ;
            QQ.edge(LQ.e).labelRank = wQ.rank, QQ.removeNode(FQ)
          }
        }))
      }(QQ))), FQ("    normalize.run", (() => xF(QQ))), FQ("    parentDummyChains", (() => lF(QQ))), FQ("    addBorderSegments", (() => XF(QQ))), FQ("    order", (() => ww(QQ, wQ, vQ))), FQ("    insertSelfEdges", (() => function(QQ) {
        JQ(QQ).forEach((FQ => {
          let wQ = 0;
          FQ.forEach(((FQ, LQ) => {
            let qQ = QQ.node(FQ);
            "number" != typeof qQ.rank && (qQ.rank = 0), qQ.order = LQ + wQ, (qQ.selfEdges || []).forEach((FQ => {
              fQ(QQ, "selfedge", {
                width: FQ.label.width,
                height: FQ.label.height,
                rank: qQ.rank,
                order: LQ + ++wQ,
                e: FQ.e,
                edgeLabel: FQ.label
              }, "_se"), (!Array.isArray(FQ.label.points) || 7 !== FQ.label.points.length) && (FQ.label.points = [{
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
      }(QQ))), FQ("    adjustCoordinateSystem", (() => function(QQ) {
        var FQ;
        let wQ = null == (FQ = QQ.graph().rankdir) ? void 0 : FQ.toLowerCase();
        ("lr" === wQ || "rl" === wQ) && hF(QQ)
      }(QQ))), FQ("    position", (() => Hw(QQ, wQ.corePath))), FQ("    positionSelfEdges", (() => function(QQ) {
        QQ.nodes().forEach((FQ => {
          let wQ = QQ.node(FQ),
            LQ = QQ => "number" == typeof QQ && isFinite(QQ);
          if ("selfedge" === wQ.dummy) {
            let qQ = wQ,
              oQ = QQ.node(qQ.e.v),
              DQ = LQ(null == oQ ? void 0 : oQ.x) ? oQ.x : 0,
              kQ = LQ(null == oQ ? void 0 : oQ.y) ? oQ.y : 0,
              vQ = LQ(null == oQ ? void 0 : oQ.width) ? oQ.width : 0,
              mQ = LQ(null == oQ ? void 0 : oQ.height) ? oQ.height : 0,
              uQ = LQ(wQ.x) ? wQ.x : DQ,
              HQ = LQ(wQ.y) ? wQ.y : kQ,
              bQ = vQ / 2,
              YQ = mQ / 2;
            qQ.edgeLabel.points = [{
              x: uQ + bQ,
              y: HQ - YQ
            }, {
              x: uQ + bQ,
              y: HQ - YQ
            }, {
              x: uQ,
              y: HQ
            }, {
              x: uQ - bQ,
              y: HQ + YQ
            }, {
              x: uQ - bQ,
              y: HQ + YQ
            }, {
              x: uQ,
              y: HQ
            }, {
              x: uQ,
              y: HQ
            }], qQ.edgeLabel.x = uQ, qQ.edgeLabel.y = HQ, QQ.setEdge(qQ.e, qQ.edgeLabel), QQ.removeNode(FQ)
          } else wQ && Array.isArray(wQ.selfEdges) && wQ.selfEdges.forEach((QQ => {
            if (!Array.isArray(QQ.label.points) || 7 !== QQ.label.points.length) {
              let FQ = LQ(wQ.x) ? wQ.x : 0,
                qQ = LQ(wQ.y) ? wQ.y : 0,
                oQ = (LQ(wQ.width) ? wQ.width : 0) / 2,
                DQ = (LQ(wQ.height) ? wQ.height : 0) / 2;
              QQ.label.points = [{
                x: FQ + oQ,
                y: qQ - DQ
              }, {
                x: FQ + oQ,
                y: qQ - DQ
              }, {
                x: FQ,
                y: qQ
              }, {
                x: FQ - oQ,
                y: qQ + DQ
              }, {
                x: FQ - oQ,
                y: qQ + DQ
              }, {
                x: FQ,
                y: qQ
              }, {
                x: FQ,
                y: qQ
              }]
            }
          }))
        }))
      }(QQ)));
      let mQ = JSON.parse(JSON.stringify(QQ._nodes));
      return FQ("    removeBorderNodes", (() => function(QQ) {
        QQ.nodes().forEach((FQ => {
          if (QQ.children(FQ).length) {
            let wQ = QQ.node(FQ),
              LQ = QQ.node(wQ.borderTop),
              qQ = QQ.node(wQ.borderBottom),
              oQ = QQ.node(wQ.borderLeft[wQ.borderLeft.length - 1]),
              DQ = QQ.node(wQ.borderRight[wQ.borderRight.length - 1]);
            wQ.width = Math.abs(DQ.x - oQ.x), wQ.height = Math.abs(qQ.y - LQ.y), wQ.x = oQ.x + wQ.width / 2, wQ.y = LQ.y + wQ.height / 2
          }
        })), QQ.nodes().forEach((FQ => {
          "border" === QQ.node(FQ).dummy && QQ.removeNode(FQ)
        }))
      }(QQ))), FQ("    normalize.undo", (() => function(QQ) {
        QQ.graph().dummyChains.forEach((FQ => {
          let wQ, LQ = QQ.node(FQ),
            qQ = LQ.edgeLabel;
          for (QQ.setEdge(LQ.edgeObj, qQ); LQ.dummy;) wQ = QQ.successors(FQ)[0], QQ.removeNode(FQ), qQ.points.push({
            x: LQ.x,
            y: LQ.y
          }), "edge-label" === LQ.dummy && (qQ.x = LQ.x, qQ.y = LQ.y, qQ.width = LQ.width, qQ.height = LQ.height), FQ = wQ, LQ = QQ.node(FQ)
        }))
      }(QQ))), FQ("    fixupEdgeLabelCoords", (() => function(QQ) {
        QQ.edges().forEach((FQ => {
          let wQ = QQ.edge(FQ);
          if (Object.hasOwn(wQ, "x")) switch (("l" === wQ.labelpos || "r" === wQ.labelpos) && (wQ.width -= wQ.labeloffset), wQ.labelpos) {
            case "l":
              wQ.x -= wQ.width / 2 + wQ.labeloffset;
              break;
            case "r":
              wQ.x += wQ.width / 2 + wQ.labeloffset
          }
        }))
      }(QQ))), FQ("    undoCoordinateSystem", (() => VF(QQ))), FQ("    translateGraph", (() => function(QQ) {
        let FQ = Number.POSITIVE_INFINITY,
          wQ = 0,
          LQ = Number.POSITIVE_INFINITY,
          qQ = 0,
          oQ = QQ.graph(),
          DQ = oQ.marginx || 0,
          kQ = oQ.marginy || 0;

        function vQ(QQ) {
          let oQ = QQ.x,
            DQ = QQ.y,
            kQ = QQ.width,
            vQ = QQ.height;
          FQ = Math.min(FQ, oQ - kQ / 2), wQ = Math.max(wQ, oQ + kQ / 2), LQ = Math.min(LQ, DQ - vQ / 2), qQ = Math.max(qQ, DQ + vQ / 2)
        }
        QQ.nodes().forEach((FQ => vQ(QQ.node(FQ)))), QQ.edges().forEach((FQ => {
          let wQ = QQ.edge(FQ);
          Object.hasOwn(wQ, "x") && vQ(wQ)
        })), FQ -= DQ, LQ -= kQ, QQ.nodes().forEach((wQ => {
          let qQ = QQ.node(wQ);
          qQ.x -= FQ, qQ.y -= LQ
        })), QQ.edges().forEach((wQ => {
          let qQ = QQ.edge(wQ);
          qQ.points.forEach((QQ => {
            QQ.x -= FQ, QQ.y -= LQ
          })), Object.hasOwn(qQ, "x") && (qQ.x -= FQ), Object.hasOwn(qQ, "y") && (qQ.y -= LQ)
        })), oQ.width = wQ - FQ + DQ, oQ.height = qQ - LQ + kQ
      }(QQ))), FQ("    assignNodeIntersects", (() => function(QQ) {
        QQ.edges().forEach((FQ => {
          if (FQ.v === FQ.w) return;
          let wQ, LQ, qQ = QQ.edge(FQ),
            oQ = QQ.node(FQ.v),
            DQ = QQ.node(FQ.w);
          qQ.points ? (wQ = qQ.points[0], LQ = qQ.points[qQ.points.length - 1]) : (qQ.points = [], wQ = DQ, LQ = oQ), qQ.points.unshift(hQ(oQ, wQ)), qQ.points.push(hQ(DQ, LQ))
        }))
      }(QQ))), FQ("    reversePoints", (() => function(QQ) {
        QQ.edges().forEach((FQ => {
          let wQ = QQ.edge(FQ);
          wQ.reversed && wQ.points.reverse()
        }))
      }(QQ))), FQ("    acyclic.undo", (() => function(QQ) {
        QQ.edges().forEach((FQ => {
          let wQ = QQ.edge(FQ);
          if (wQ.reversed) {
            QQ.removeEdge(FQ);
            let LQ = wQ.forwardName;
            delete wQ.reversed, delete wQ.forwardName, QQ.setEdge(FQ.w, FQ.v, wQ, LQ)
          }
        }))
      }(QQ))), {
        graph: QQ,
        rawNodes: mQ
      }
    }

    function ew(QQ, FQ) {
      QQ.nodes().forEach((wQ => {
        let LQ = QQ.node(wQ),
          qQ = FQ.node(wQ);
        LQ && (LQ.x = qQ.x, LQ.y = qQ.y, LQ.order = qQ.order, LQ.rank = qQ.rank, FQ.children(wQ).length && (LQ.width = qQ.width, LQ.height = qQ.height))
      })), QQ.edges().forEach((wQ => {
        let LQ = QQ.edge(wQ),
          qQ = FQ.edge(wQ);
        LQ.points = qQ.points, Object.hasOwn(qQ, "x") && (LQ.x = qQ.x, LQ.y = qQ.y)
      })), QQ.graph().width = FQ.graph().width, QQ.graph().height = FQ.graph().height
    }
    var Mw = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Gw = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      pw = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Cw = ["width", "height", "rank"],
      Sw = {
        width: 0,
        height: 0
      },
      iw = ["minlen", "weight", "width", "height", "labeloffset"],
      Ww = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Rw = ["labelpos"];

    function Ow(QQ) {
      let FQ = new XQ({
          multigraph: !0,
          compound: !0
        }),
        wQ = rw(QQ.graph());
      return FQ.setGraph(Object.assign({}, Gw, sw(wQ, Mw), FF(wQ, pw))), QQ.nodes().forEach((wQ => {
        let LQ = sw(rw(QQ.node(wQ)), Cw);
        Object.keys(Sw).forEach((QQ => {
          void 0 === LQ[QQ] && (LQ[QQ] = Sw[QQ])
        })), FQ.setNode(wQ, LQ);
        let qQ = QQ.parent(wQ);
        void 0 !== qQ && FQ.setParent(wQ, qQ)
      })), QQ.edges().forEach((wQ => {
        let LQ = rw(QQ.edge(wQ));
        FQ.setEdge(wQ, Object.assign({}, Ww, sw(LQ, iw), FF(LQ, Rw)))
      })), FQ
    }

    function sw(QQ, FQ) {
      return wF(FF(QQ, FQ), Number)
    }

    function rw(QQ) {
      let FQ = {};
      return QQ && Object.entries(QQ).forEach((QQ => {
        let [wQ, LQ] = QQ;
        "string" == typeof wQ && (wQ = wQ.toLowerCase()), FQ[wQ] = LQ
      })), FQ
    }

    function Iw(QQ) {
      let FQ = JQ(QQ),
        wQ = new XQ({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return QQ.nodes().forEach((FQ => {
        wQ.setNode(FQ, {
          label: FQ
        }), wQ.setParent(FQ, "layer" + QQ.node(FQ).rank)
      })), QQ.edges().forEach((QQ => wQ.setEdge(QQ.v, QQ.w, {}, QQ.name))), FQ.forEach(((QQ, FQ) => {
        let LQ = "layer" + FQ;
        wQ.setNode(LQ, {
          rank: "same"
        }), QQ.reduce(((QQ, FQ) => (wQ.setEdge(QQ, FQ, {
          style: "invis"
        }), FQ)))
      })), wQ
    }
    var Uw = {
        time: ZQ,
        notime: yQ
      },
      Nw = {
        graphlib: oQ,
        version: oF,
        layout: Yw,
        debug: Iw,
        util: {
          time: ZQ,
          notime: yQ
        }
      }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);