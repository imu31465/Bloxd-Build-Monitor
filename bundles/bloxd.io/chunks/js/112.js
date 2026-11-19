/*! For license information please see qsji88.112.5b8bea86.chunk.js.LICENSE.txt */
export const id = 112;
export const ids = [112];
export const modules = {
  5927: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      Graph: () => qT,
      debug: () => JI,
      default: () => aI,
      graphlib: () => kT,
      layout: () => KI,
      util: () => UI,
      version: () => ko
    });
    var iT = Object.defineProperty,
      zT = (TT, oT, IT) => ((TT, oT, IT) => oT in TT ? iT(TT, oT, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: IT
      }) : TT[oT] = IT)(TT, "symbol" != typeof oT ? oT + "" : oT, IT),
      kT = {};
    ((TT, oT) => {
      for (var IT in oT) iT(TT, IT, {
        get: oT[IT],
        enumerable: !0
      })
    })(kT, {
      Graph: () => qT,
      alg: () => rT
    });
    var WT = Object.defineProperty,
      XT = (TT, oT) => {
        for (var IT in oT) WT(TT, IT, {
          get: oT[IT],
          enumerable: !0
        })
      },
      BT = class {
        constructor(TT) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, TT && (this._isDirected = !("directed" in TT) || TT.directed, this._isMultigraph = "multigraph" in TT && TT.multigraph, this._isCompound = "compound" in TT && TT.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(TT) {
          return this._label = TT, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(TT) {
          return this._defaultNodeLabelFn = "function" != typeof TT ? () => TT : TT, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((TT => 0 === Object.keys(this._in[TT]).length))
        }
        sinks() {
          return this.nodes().filter((TT => 0 === Object.keys(this._out[TT]).length))
        }
        setNodes(TT, oT) {
          return TT.forEach((TT => {
            void 0 !== oT ? this.setNode(TT, oT) : this.setNode(TT)
          })), this
        }
        setNode(TT, oT) {
          return TT in this._nodes ? (arguments.length > 1 && (this._nodes[TT] = oT), this) : (this._nodes[TT] = arguments.length > 1 ? oT : this._defaultNodeLabelFn(TT), this._isCompound && (this._parent[TT] = "\0", this._children[TT] = {}, this._children["\0"][TT] = !0), this._in[TT] = {}, this._preds[TT] = {}, this._out[TT] = {}, this._sucs[TT] = {}, ++this._nodeCount, this)
        }
        node(TT) {
          return this._nodes[TT]
        }
        hasNode(TT) {
          return TT in this._nodes
        }
        removeNode(TT) {
          if (TT in this._nodes) {
            let oT = TT => this.removeEdge(this._edgeObjs[TT]);
            delete this._nodes[TT], this._isCompound && (this._removeFromParentsChildList(TT), delete this._parent[TT], this.children(TT).forEach((TT => {
              this.setParent(TT)
            })), delete this._children[TT]), Object.keys(this._in[TT]).forEach(oT), delete this._in[TT], delete this._preds[TT], Object.keys(this._out[TT]).forEach(oT), delete this._out[TT], delete this._sucs[TT], --this._nodeCount
          }
          return this
        }
        setParent(TT, oT) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === oT) oT = "\0";
          else {
            for (let IT = oT += ""; void 0 !== IT; IT = this.parent(IT))
              if (IT === TT) throw new Error("Setting " + oT + " as parent of " + TT + " would create a cycle");
            this.setNode(oT)
          }
          return this.setNode(TT), this._removeFromParentsChildList(TT), this._parent[TT] = oT, this._children[oT][TT] = !0, this
        }
        parent(TT) {
          if (this._isCompound) {
            let oT = this._parent[TT];
            if ("\0" !== oT) return oT
          }
        }
        children() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let oT = this._children[TT];
            if (oT) return Object.keys(oT)
          } else {
            if ("\0" === TT) return this.nodes();
            if (this.hasNode(TT)) return []
          }
          return []
        }
        predecessors(TT) {
          let oT = this._preds[TT];
          if (oT) return Object.keys(oT)
        }
        successors(TT) {
          let oT = this._sucs[TT];
          if (oT) return Object.keys(oT)
        }
        neighbors(TT) {
          let oT = this.predecessors(TT);
          if (oT) {
            let IT = new Set(oT),
              iT = this.successors(TT);
            if (iT)
              for (let TT of iT) IT.add(TT);
            return Array.from(IT.values())
          }
        }
        isLeaf(TT) {
          var oT;
          let IT;
          return IT = this.isDirected() ? this.successors(TT) : this.neighbors(TT), 0 === (null != (oT = null == IT ? void 0 : IT.length) ? oT : 0)
        }
        filterNodes(TT) {
          let oT = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          oT.setGraph(this.graph()), Object.entries(this._nodes).forEach((IT => {
            let [iT, zT] = IT;
            TT(iT) && oT.setNode(iT, zT)
          })), Object.values(this._edgeObjs).forEach((TT => {
            oT.hasNode(TT.v) && oT.hasNode(TT.w) && oT.setEdge(TT, this.edge(TT))
          }));
          let IT = {},
            iT = TT => {
              let zT = this.parent(TT);
              return !zT || oT.hasNode(zT) ? (IT[TT] = zT, zT) : zT in IT ? IT[zT] : iT(zT)
            };
          return this._isCompound && oT.nodes().forEach((TT => oT.setParent(TT, iT(TT)))), oT
        }
        setDefaultEdgeLabel(TT) {
          return this._defaultEdgeLabelFn = "function" != typeof TT ? () => TT : TT, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(TT, oT) {
          return TT.reduce(((TT, IT) => (void 0 !== oT ? this.setEdge(TT, IT, oT) : this.setEdge(TT, IT), IT))), this
        }
        setEdge(TT, oT, IT, iT) {
          let zT, kT, WT, XT, BT = !1;
          "object" == typeof TT && null !== TT && "v" in TT ? (zT = TT.v, kT = TT.w, WT = TT.name, 2 === arguments.length && (XT = oT, BT = !0)) : (zT = TT, kT = oT, WT = iT, arguments.length > 2 && (XT = IT, BT = !0)), zT = "" + zT, kT = "" + kT, void 0 !== WT && (WT = "" + WT);
          let ST = DT(this._isDirected, zT, kT, WT);
          if (ST in this._edgeLabels) return BT && (this._edgeLabels[ST] = XT), this;
          if (void 0 !== WT && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(zT), this.setNode(kT), this._edgeLabels[ST] = BT ? XT : this._defaultEdgeLabelFn(zT, kT, WT);
          let LT = function(TT, oT, IT, iT) {
            let zT = "" + oT,
              kT = "" + IT;
            if (!TT && zT > kT) {
              let TT = zT;
              zT = kT, kT = TT
            }
            let WT = {
              v: zT,
              w: kT
            };
            return iT && (WT.name = iT), WT
          }(this._isDirected, zT, kT, WT);
          return zT = LT.v, kT = LT.w, Object.freeze(LT), this._edgeObjs[ST] = LT, FT(this._preds[kT], zT), FT(this._sucs[zT], kT), this._in[kT][ST] = LT, this._out[zT][ST] = LT, this._edgeCount++, this
        }
        edge(TT, oT, IT) {
          let iT = 1 === arguments.length ? LT(this._isDirected, TT) : DT(this._isDirected, TT, oT, IT);
          return this._edgeLabels[iT]
        }
        edgeAsObj(TT, oT, IT) {
          let iT = 1 === arguments.length ? this.edge(TT) : this.edge(TT, oT, IT);
          return "object" != typeof iT || null === iT ? {
            label: iT
          } : iT
        }
        hasEdge(TT, oT, IT) {
          return (1 === arguments.length ? LT(this._isDirected, TT) : DT(this._isDirected, TT, oT, IT)) in this._edgeLabels
        }
        removeEdge(TT, oT, IT) {
          let iT = 1 === arguments.length ? LT(this._isDirected, TT) : DT(this._isDirected, TT, oT, IT),
            zT = this._edgeObjs[iT];
          if (zT) {
            let TT = zT.v,
              oT = zT.w;
            delete this._edgeLabels[iT], delete this._edgeObjs[iT], ST(this._preds[oT], TT), ST(this._sucs[TT], oT), delete this._in[oT][iT], delete this._out[TT][iT], this._edgeCount--
          }
          return this
        }
        inEdges(TT, oT) {
          return this.isDirected() ? this.filterEdges(this._in[TT], TT, oT) : this.nodeEdges(TT, oT)
        }
        outEdges(TT, oT) {
          return this.isDirected() ? this.filterEdges(this._out[TT], TT, oT) : this.nodeEdges(TT, oT)
        }
        nodeEdges(TT, oT) {
          if (TT in this._nodes) return this.filterEdges({
            ...this._in[TT],
            ...this._out[TT]
          }, TT, oT)
        }
        _removeFromParentsChildList(TT) {
          delete this._children[this._parent[TT]][TT]
        }
        filterEdges(TT, oT, IT) {
          if (!TT) return;
          let iT = Object.values(TT);
          return IT ? iT.filter((TT => TT.v === oT && TT.w === IT || TT.v === IT && TT.w === oT)) : iT
        }
      };

    function FT(TT, oT) {
      TT[oT] ? TT[oT]++ : TT[oT] = 1
    }

    function ST(TT, oT) {
      void 0 !== TT[oT] && !--TT[oT] && delete TT[oT]
    }

    function DT(TT, oT, IT, iT) {
      let zT = "" + oT,
        kT = "" + IT;
      if (!TT && zT > kT) {
        let TT = zT;
        zT = kT, kT = TT
      }
      return zT + "\x01" + kT + "\x01" + (void 0 === iT ? "\0" : iT)
    }

    function LT(TT, oT) {
      return DT(TT, oT.v, oT.w, oT.name)
    }

    function xT(TT) {
      let oT = {
          options: {
            directed: TT.isDirected(),
            multigraph: TT.isMultigraph(),
            compound: TT.isCompound()
          },
          nodes: cT(TT),
          edges: KT(TT)
        },
        IT = TT.graph();
      return void 0 !== IT && (oT.value = structuredClone(IT)), oT
    }

    function cT(TT) {
      return TT.nodes().map((oT => {
        let IT = TT.node(oT),
          iT = TT.parent(oT),
          zT = {
            v: oT
          };
        return void 0 !== IT && (zT.value = IT), void 0 !== iT && (zT.parent = iT), zT
      }))
    }

    function KT(TT) {
      return TT.edges().map((oT => {
        let IT = TT.edge(oT),
          iT = {
            v: oT.v,
            w: oT.w
          };
        return void 0 !== oT.name && (iT.name = oT.name), void 0 !== IT && (iT.value = IT), iT
      }))
    }

    function MT(TT) {
      let oT = new BT(TT.options);
      return void 0 !== TT.value && oT.setGraph(TT.value), TT.nodes.forEach((TT => {
        oT.setNode(TT.v, TT.value), TT.parent && oT.setParent(TT.v, TT.parent)
      })), TT.edges.forEach((TT => {
        oT.setEdge({
          v: TT.v,
          w: TT.w,
          name: TT.name
        }, TT.value)
      })), oT
    }
    XT({}, {
      read: () => MT,
      write: () => xT
    });
    var rT = {};
    XT(rT, {
      CycleException: () => CT,
      bellmanFord: () => gT,
      components: () => hT,
      dijkstra: () => eT,
      dijkstraAll: () => RT,
      findCycles: () => vT,
      floydWarshall: () => fT,
      isAcyclic: () => JT,
      postorder: () => QT,
      preorder: () => OT,
      prim: () => HT,
      shortestPaths: () => nT,
      tarjan: () => uT,
      topsort: () => jT
    });
    var AT = () => 1;

    function gT(TT, oT, IT, iT) {
      return function(TT, oT, IT, iT) {
        let zT, kT = {},
          WT = 0,
          XT = TT.nodes(),
          BT = function(TT) {
            let oT = kT[TT.v],
              iT = kT[TT.w];
            if (!oT || !iT) return;
            let WT = IT(TT);
            oT.distance + WT < iT.distance && (kT[TT.w] = {
              distance: oT.distance + WT,
              predecessor: TT.v
            }, zT = !0)
          },
          FT = function() {
            XT.forEach((function(TT) {
              iT(TT).forEach((function(oT) {
                let IT = oT.v === TT ? oT.v : oT.w,
                  iT = IT === oT.v ? oT.w : oT.v;
                BT({
                  v: IT,
                  w: iT
                })
              }))
            }))
          };
        XT.forEach((function(TT) {
          let IT = TT === oT ? 0 : Number.POSITIVE_INFINITY;
          kT[TT] = {
            distance: IT,
            predecessor: ""
          }
        }));
        let ST = XT.length;
        for (let DT = 1; DT < ST && (zT = !1, WT++, FT(), zT); DT++);
        if (WT === ST - 1 && (zT = !1, FT(), zT)) throw new Error("The graph contains a negative weight cycle");
        return kT
      }(TT, String(oT), IT || AT, iT || function(oT) {
        var IT;
        return null != (IT = TT.outEdges(oT)) ? IT : []
      })
    }

    function hT(TT) {
      let oT, IT = {},
        iT = [];

      function zT(iT) {
        var kT, WT;
        iT in IT || (IT[iT] = !0, oT.push(iT), null == (kT = TT.successors(iT)) || kT.forEach(zT), null == (WT = TT.predecessors(iT)) || WT.forEach(zT))
      }
      return TT.nodes().forEach((function(TT) {
        oT = [], zT(TT), oT.length && iT.push(oT)
      })), iT
    }
    var wT = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((TT => TT.key))
        }
        has(TT) {
          return TT in this._keyIndices
        }
        priority(TT) {
          let oT = this._keyIndices[TT];
          if (void 0 !== oT) return this._arr[oT].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(TT, oT) {
          let IT = this._keyIndices,
            iT = String(TT);
          if (!(iT in IT)) {
            let TT = this._arr,
              zT = TT.length;
            return IT[iT] = zT, TT.push({
              key: iT,
              priority: oT
            }), this._decrease(zT), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let TT = this._arr.pop();
          return delete this._keyIndices[TT.key], this._heapify(0), TT.key
        }
        decrease(TT, oT) {
          let IT = this._keyIndices[TT];
          if (void 0 === IT) throw new Error(`Key not found: ${TT}`);
          let iT = this._arr[IT].priority;
          if (oT > iT) throw new Error(`New priority is greater than current priority. Key: ${TT} Old: ${iT} New: ${oT}`);
          this._arr[IT].priority = oT, this._decrease(IT)
        }
        _heapify(TT) {
          let oT = this._arr,
            IT = 2 * TT,
            iT = IT + 1,
            zT = TT;
          IT < oT.length && (zT = oT[IT].priority < oT[zT].priority ? IT : zT, iT < oT.length && (zT = oT[iT].priority < oT[zT].priority ? iT : zT), zT !== TT && (this._swap(TT, zT), this._heapify(zT)))
        }
        _decrease(TT) {
          let oT, IT = this._arr,
            iT = IT[TT].priority;
          for (; 0 !== TT && (oT = TT >> 1, !(IT[oT].priority < iT));) this._swap(TT, oT), TT = oT
        }
        _swap(TT, oT) {
          let IT = this._arr,
            iT = this._keyIndices,
            zT = IT[TT],
            kT = IT[oT];
          IT[TT] = kT, IT[oT] = zT, iT[kT.key] = TT, iT[zT.key] = oT
        }
      },
      mT = () => 1;

    function eT(TT, oT, IT, iT) {
      return function(TT, oT, IT, iT) {
        let zT, kT, WT = {},
          XT = new wT,
          BT = function(TT) {
            let oT = TT.v !== zT ? TT.v : TT.w,
              iT = WT[oT];
            if (!iT) return;
            let BT = IT(TT),
              FT = kT.distance + BT;
            if (BT < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + TT + " Weight: " + BT);
            FT < iT.distance && (iT.distance = FT, iT.predecessor = zT, XT.decrease(oT, FT))
          };
        for (TT.nodes().forEach((function(TT) {
            let IT = TT === oT ? 0 : Number.POSITIVE_INFINITY;
            WT[TT] = {
              distance: IT,
              predecessor: ""
            }, XT.add(TT, IT)
          })); XT.size() > 0;) {
          zT = XT.removeMin();
          let TT = WT[zT];
          if (!TT || TT.distance === Number.POSITIVE_INFINITY) break;
          kT = TT, iT(zT).forEach(BT)
        }
        return WT
      }(TT, String(oT), IT || mT, iT || function(oT) {
        var IT;
        return null != (IT = TT.outEdges(oT)) ? IT : []
      })
    }

    function RT(TT, oT, IT) {
      return TT.nodes().reduce((function(iT, zT) {
        return iT[zT] = eT(TT, zT, oT, IT), iT
      }), {})
    }

    function uT(TT) {
      let oT = 0,
        IT = [],
        iT = {},
        zT = [];

      function kT(WT) {
        var XT;
        let BT = iT[WT] = {
          onStack: !0,
          lowlink: oT,
          index: oT++
        };
        if (IT.push(WT), null == (XT = TT.successors(WT)) || XT.forEach((function(TT) {
            if (TT in iT) {
              let oT = iT[TT];
              null != oT && oT.onStack && (BT.lowlink = Math.min(BT.lowlink, oT.index))
            } else {
              kT(TT);
              let oT = iT[TT];
              oT && (BT.lowlink = Math.min(BT.lowlink, oT.lowlink))
            }
          })), BT.lowlink === BT.index) {
          let TT, oT = [];
          do {
            TT = IT.pop();
            let zT = iT[TT];
            zT && (zT.onStack = !1), oT.push(TT)
          } while (WT !== TT);
          zT.push(oT)
        }
      }
      return TT.nodes().forEach((function(TT) {
        TT in iT || kT(TT)
      })), zT
    }

    function vT(TT) {
      return uT(TT).filter((function(oT) {
        var IT;
        let iT = oT[0];
        return !!iT && (oT.length > 1 || 1 === oT.length && (null != (IT = TT.outEdges(iT, iT)) ? IT : []).length > 0)
      }))
    }
    var ET = () => 1;

    function fT(TT, oT, IT) {
      return function(TT, oT, IT) {
        let iT = {},
          zT = TT.nodes();
        return zT.forEach((function(TT) {
          let kT = {};
          iT[TT] = kT, kT[TT] = {
            distance: 0,
            predecessor: ""
          }, zT.forEach((function(oT) {
            TT !== oT && (kT[oT] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), IT(TT).forEach((function(IT) {
            let iT = IT.v === TT ? IT.w : IT.v,
              zT = oT(IT);
            kT[iT] = {
              distance: zT,
              predecessor: TT
            }
          }))
        })), zT.forEach((function(TT) {
          let oT = iT[TT];
          oT && zT.forEach((function(IT) {
            let kT = iT[IT];
            kT && zT.forEach((function(IT) {
              let iT = kT[TT],
                zT = oT[IT],
                WT = kT[IT];
              if (iT && zT && WT) {
                let TT = iT.distance + zT.distance;
                TT < WT.distance && (WT.distance = TT, WT.predecessor = zT.predecessor)
              }
            }))
          }))
        })), iT
      }(TT, oT || ET, IT || function(oT) {
        var IT;
        return null != (IT = TT.outEdges(oT)) ? IT : []
      })
    }
    var CT = class extends Error {
      constructor(TT) {
        super(TT), this.name = "CycleException"
      }
    };

    function jT(TT) {
      let oT = {},
        IT = {},
        iT = [];
      if (TT.sinks().forEach((function zT(kT) {
          var WT;
          if (kT in IT) throw new CT;
          kT in oT || (IT[kT] = !0, oT[kT] = !0, null == (WT = TT.predecessors(kT)) || WT.forEach(zT), delete IT[kT], iT.push(kT))
        })), Object.keys(oT).length !== TT.nodeCount()) throw new CT;
      return iT
    }

    function JT(TT) {
      try {
        jT(TT)
      } catch (oT) {
        if (oT instanceof CT) return !1;
        throw oT
      }
      return !0
    }

    function UT(TT, oT, IT, iT, zT) {
      Array.isArray(oT) || (oT = [oT]);
      let kT = oT => {
          var IT;
          return null != (IT = TT.isDirected() ? TT.successors(oT) : TT.neighbors(oT)) ? IT : []
        },
        WT = {};
      return oT.forEach((function(oT) {
        if (!TT.hasNode(oT)) throw new Error("Graph does not have node: " + oT);
        zT = aT(TT, oT, "post" === IT, WT, kT, iT, zT)
      })), zT
    }

    function aT(TT, oT, IT, iT, zT, kT, WT) {
      return oT in iT || (iT[oT] = !0, IT || (WT = kT(WT, oT)), zT(oT).forEach((function(oT) {
        WT = aT(TT, oT, IT, iT, zT, kT, WT)
      })), IT && (WT = kT(WT, oT))), WT
    }

    function YT(TT, oT, IT) {
      return UT(TT, oT, IT, (function(TT, oT) {
        return TT.push(oT), TT
      }), [])
    }

    function QT(TT, oT) {
      return YT(TT, oT, "post")
    }

    function OT(TT, oT) {
      return YT(TT, oT, "pre")
    }

    function HT(TT, oT) {
      var IT;
      let iT, zT = new BT,
        kT = {},
        WT = new wT;

      function XT(TT) {
        let IT = TT.v === iT ? TT.w : TT.v,
          zT = WT.priority(IT);
        if (void 0 !== zT) {
          let XT = oT(TT);
          XT < zT && (kT[IT] = iT, WT.decrease(IT, XT))
        }
      }
      if (0 === TT.nodeCount()) return zT;
      TT.nodes().forEach((function(TT) {
        WT.add(TT, Number.POSITIVE_INFINITY), zT.setNode(TT)
      }));
      let FT = TT.nodes()[0];
      void 0 !== FT && WT.decrease(FT, 0);
      let ST = !1;
      for (; WT.size() > 0;) {
        if (iT = WT.removeMin(), iT in kT) zT.setEdge(iT, kT[iT]);
        else {
          if (ST) throw new Error("Input graph is not connected: " + TT);
          ST = !0
        }
        null == (IT = TT.nodeEdges(iT)) || IT.forEach(XT)
      }
      return zT
    }

    function nT(TT, oT, IT, iT) {
      return function(TT, oT, IT, iT) {
        if (void 0 === IT) return eT(TT, oT, IT, iT);
        let zT = !1,
          kT = TT.nodes();
        for (let WT = 0; WT < kT.length; WT++) {
          let XT = kT[WT];
          if (void 0 === XT) continue;
          let BT = iT(XT);
          for (let TT = 0; TT < BT.length; TT++) {
            let oT = BT[TT];
            if (!oT) continue;
            let iT = oT.v === XT ? oT.v : oT.w;
            IT({
              v: iT,
              w: iT === oT.v ? oT.w : oT.v
            }) < 0 && (zT = !0)
          }
          if (zT) return gT(TT, oT, IT, iT)
        }
        return eT(TT, oT, IT, iT)
      }(TT, oT, IT, null != iT ? iT : oT => {
        var IT;
        return null != (IT = TT.outEdges(oT)) ? IT : []
      })
    }
    var qT = BT;

    function ZT(TT, oT, IT, iT) {
      let zT = iT;
      for (; TT.hasNode(zT);) zT = VT(iT);
      return IT.dummy = oT, TT.setNode(zT, IT), zT
    }

    function lT(TT) {
      let oT = new qT({
        multigraph: TT.isMultigraph()
      }).setGraph(TT.graph());
      return TT.nodes().forEach((IT => {
        TT.children(IT).length || oT.setNode(IT, TT.node(IT))
      })), TT.edges().forEach((IT => {
        oT.setEdge(IT, TT.edge(IT))
      })), oT
    }

    function sT(TT, oT) {
      let IT, iT, zT = TT.x,
        kT = TT.y,
        WT = oT.x - zT,
        XT = oT.y - kT,
        BT = TT.width / 2,
        FT = TT.height / 2;
      if (!WT && !XT) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(XT) * BT > Math.abs(WT) * FT ? (XT < 0 && (FT = -FT), IT = FT * WT / XT, iT = FT) : (WT < 0 && (BT = -BT), IT = BT, iT = BT * XT / WT), {
        x: zT + IT,
        y: kT + iT
      }
    }

    function tT(TT) {
      let oT = To(yT(TT) + 1).map((() => []));
      return TT.nodes().forEach((IT => {
        let iT = TT.node(IT),
          zT = iT.rank;
        void 0 !== zT && (oT[zT] || (oT[zT] = []), oT[zT][iT.order] = IT)
      })), oT
    }

    function GT(TT, oT, IT, iT) {
      let zT = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (zT.rank = IT, zT.order = iT), ZT(TT, "border", zT, oT)
    }
    var pT = 65535;

    function bT(TT, oT) {
      if (oT.length > pT) {
        let IT = function(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pT,
            IT = [];
          for (let iT = 0; iT < TT.length; iT += oT) {
            let zT = TT.slice(iT, iT + oT);
            IT.push(zT)
          }
          return IT
        }(oT);
        return TT(...IT.map((oT => TT(...oT))))
      }
      return TT(...oT)
    }

    function yT(TT) {
      let oT = TT.nodes().map((oT => {
        let IT = TT.node(oT).rank;
        return void 0 === IT ? Number.MIN_VALUE : IT
      }));
      return bT(Math.max, oT)
    }

    function NT(TT, oT) {
      let IT = Date.now();
      try {
        return oT()
      } finally {
        console.log(TT + " time: " + (Date.now() - IT) + "ms")
      }
    }

    function PT(TT, oT) {
      return oT()
    }
    var dT = 0;

    function VT(TT) {
      return TT + "" + ++dT
    }

    function To(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == oT && (oT = TT, TT = 0);
      let iT = TT => TT < oT;
      IT < 0 && (iT = TT => oT < TT);
      let zT = [];
      for (let kT = TT; iT(kT); kT += IT) zT.push(kT);
      return zT
    }

    function oo(TT, oT) {
      let IT = {};
      for (let iT of oT) void 0 !== TT[iT] && (IT[iT] = TT[iT]);
      return IT
    }

    function Io(TT, oT) {
      let IT;
      return IT = "string" == typeof oT ? TT => TT[oT] : oT, Object.entries(TT).reduce(((TT, oT) => {
        let [iT, zT] = oT;
        return TT[iT] = IT(zT, iT), TT
      }), {})
    }
    var io = "\0";

    function zo(TT, oT, IT) {
      var iT, zT, kT, WT, XT, BT;
      if (!(TT && oT && IT && "edge" === oT.dummy && "edge" === IT.dummy && oT.edgeObj && IT.edgeObj && TT[oT.edgeObj.v] && TT[IT.edgeObj.v] && TT[oT.edgeObj.w] && TT[IT.edgeObj.w])) return 0;
      let FT = !0;
      oT.edgeObj.w === IT.edgeObj.w && (FT = !1);
      let ST = FT ? null != (zT = null == (iT = TT[oT.edgeObj.v]) ? void 0 : iT.rank) ? zT : NaN : null != (WT = null == (kT = TT[oT.edgeObj.w]) ? void 0 : kT.rank) ? WT : NaN,
        DT = Object.entries(TT).find((TT => {
          var IT, iT;
          return (null == (IT = TT[1].edgeObj) ? void 0 : IT.v) === oT.edgeObj.v && (null == (iT = TT[1].edgeObj) ? void 0 : iT.w) === oT.edgeObj.w && TT[1].rank === ST
        })),
        LT = Object.entries(TT).find((TT => {
          var oT, iT;
          return (null == (oT = TT[1].edgeObj) ? void 0 : oT.v) === IT.edgeObj.v && (null == (iT = TT[1].edgeObj) ? void 0 : iT.w) === IT.edgeObj.w && TT[1].rank === ST
        }));
      if (!DT || !LT) return 0;
      let xT = null != (XT = DT[1].order) ? XT : NaN,
        cT = null != (BT = LT[1].order) ? BT : NaN;
      return isNaN(xT - cT) ? 0 : xT - cT
    }
    var ko = "3.1.1";

    function Wo(TT) {
      TT._prev._next = TT._next, TT._next._prev = TT._prev, delete TT._next, delete TT._prev
    }

    function Xo(TT, oT) {
      if ("_next" !== TT && "_prev" !== TT) return oT
    }
    var Bo = class {
        constructor() {
          zT(this, "_sentinel");
          let TT = {};
          TT._next = TT._prev = TT, this._sentinel = TT
        }
        dequeue() {
          let TT = this._sentinel,
            oT = TT._prev;
          if (oT !== TT) return Wo(oT), oT
        }
        enqueue(TT) {
          let oT = this._sentinel;
          TT._prev && TT._next && Wo(TT), TT._next = oT._next, oT._next._prev = TT, oT._next = TT, TT._prev = oT
        }
        toString() {
          let TT = [],
            oT = this._sentinel,
            IT = oT._prev;
          for (; IT !== oT;) TT.push(JSON.stringify(IT, Xo)), IT = IT._prev;
          return "[" + TT.join(", ") + "]"
        }
      },
      Fo = () => 1;

    function So(TT, oT) {
      if (TT.nodeCount() <= 1) return [];
      let IT = function(TT, oT) {
        let IT = new qT,
          iT = 0,
          zT = 0;
        TT.nodes().forEach((TT => {
          IT.setNode(TT, {
            v: TT,
            in: 0,
            out: 0
          })
        })), TT.edges().forEach((TT => {
          let kT = IT.edge(TT.v, TT.w) || 0,
            WT = oT(TT),
            XT = kT + WT;
          IT.setEdge(TT.v, TT.w, XT);
          let BT = IT.node(TT.v),
            FT = IT.node(TT.w);
          zT = Math.max(zT, BT.out += WT), iT = Math.max(iT, FT.in += WT)
        }));
        let kT = function(TT) {
            let oT = [];
            for (let IT = 0; IT < TT; IT++) oT.push(IT);
            return oT
          }(zT + iT + 3).map((() => new Bo)),
          WT = iT + 1;
        return IT.nodes().forEach((TT => {
          Lo(kT, WT, IT.node(TT))
        })), {
          graph: IT,
          buckets: kT,
          zeroIdx: WT
        }
      }(TT, oT || Fo);
      return function(TT, oT, IT) {
        var iT;
        let zT, kT = [],
          WT = oT[oT.length - 1],
          XT = oT[0];
        for (; TT.nodeCount();) {
          for (; zT = XT.dequeue();) Do(TT, oT, IT, zT);
          for (; zT = WT.dequeue();) Do(TT, oT, IT, zT);
          if (TT.nodeCount())
            for (let WT = oT.length - 2; WT > 0; --WT)
              if (zT = null == (iT = oT[WT]) ? void 0 : iT.dequeue(), zT) {
                kT = kT.concat(Do(TT, oT, IT, zT, !0) || []);
                break
              }
        }
        return kT
      }(IT.graph, IT.buckets, IT.zeroIdx).flatMap((oT => TT.outEdges(oT.v, oT.w) || []))
    }

    function Do(TT, oT, IT, iT, zT) {
      let kT = [],
        WT = zT ? kT : void 0;
      return (TT.inEdges(iT.v) || []).forEach((iT => {
        let WT = TT.edge(iT),
          XT = TT.node(iT.v);
        zT && kT.push({
          v: iT.v,
          w: iT.w
        }), XT.out -= WT, Lo(oT, IT, XT)
      })), (TT.outEdges(iT.v) || []).forEach((iT => {
        let zT = TT.edge(iT),
          kT = iT.w,
          WT = TT.node(kT);
        WT.in -= zT, Lo(oT, IT, WT)
      })), TT.removeNode(iT.v), WT
    }

    function Lo(TT, oT, IT) {
      var iT, zT, kT;
      IT.out ? IT.in ? null == (kT = TT[IT.out - IT.in + oT]) || kT.enqueue(IT) : null == (zT = TT[TT.length - 1]) || zT.enqueue(IT) : null == (iT = TT[0]) || iT.enqueue(IT)
    }

    function xo(TT, oT) {
      var IT;
      ("greedy" === TT.graph().acyclicer ? So(TT, (IT = TT, TT => IT.edge(TT).weight)) : function(TT, oT) {
        let IT = [],
          iT = {},
          zT = {};

        function kT(oT) {
          Object.hasOwn(zT, oT) || (zT[oT] = !0, iT[oT] = !0, TT.outEdges(oT).forEach((TT => {
            Object.hasOwn(iT, TT.w) ? IT.push(TT) : kT(TT.w)
          })), delete iT[oT])
        }

        function WT(kT) {
          var XT;
          Object.hasOwn(zT, kT) || (zT[kT] = !0, iT[kT] = !0, null == (XT = TT.outEdges(kT)) || XT.forEach((zT => {
            var XT, BT;
            Object.hasOwn(iT, zT.w) || (null == (XT = oT.node(kT)) ? void 0 : XT.rank) > (null == (BT = oT.node(zT.w)) ? void 0 : BT.rank) && function(TT, oT, IT) {
              let iT = new Set;

              function zT(oT) {
                var kT;
                if (TT.sources().includes(oT)) return !0;
                iT.add(oT);
                for (let WT of null != (kT = TT.inEdges(oT)) ? kT : [])
                  if ((WT.v !== IT.v || WT.w !== IT.w) && !iT.has(WT.v) && zT(WT.v)) return !0;
                return !1
              }
              return zT(oT)
            }(TT, zT.w, zT) ? IT.push(zT) : WT(zT.w)
          })), delete iT[kT])
        }
        let XT = kT;
        return oT && "function" == typeof oT.node && (XT = WT), TT.sources().forEach(XT), TT.nodes().forEach(XT), IT
      }(TT, null != oT ? oT : null)).forEach((oT => {
        let IT = TT.edge(oT);
        TT.removeEdge(oT), IT.forwardName = oT.name, IT.reversed = !0, TT.setEdge(oT.w, oT.v, IT, VT("rev"))
      }))
    }

    function co(TT) {
      TT.graph().dummyChains = [], TT.edges().forEach((oT => function(TT, oT) {
        let IT, iT, zT, kT = oT.v,
          WT = TT.node(kT).rank,
          XT = oT.w,
          BT = TT.node(XT).rank,
          FT = oT.name,
          ST = TT.edge(oT),
          DT = ST.labelRank;
        if (BT === WT + 1) return;
        for (TT.removeEdge(oT), zT = 0, ++WT; WT < BT; ++zT, ++WT) ST.points = [], iT = {
          width: 0,
          height: 0,
          edgeLabel: ST,
          edgeObj: oT,
          rank: WT
        }, IT = ZT(TT, "edge", iT, "_d"), WT === DT && (iT.width = ST.width, iT.height = ST.height, iT.dummy = "edge-label", iT.labelpos = ST.labelpos), TT.setEdge(kT, IT, {
          weight: ST.weight
        }, FT), 0 === zT && TT.graph().dummyChains.push(IT), kT = IT;
        TT.setEdge(kT, XT, {
          weight: ST.weight
        }, FT)
      }(TT, oT)))
    }

    function Ko(TT) {
      let oT = {};
      TT.sources().forEach((function IT(iT) {
        let zT = TT.node(iT);
        if (Object.hasOwn(oT, iT)) return zT.rank;
        oT[iT] = !0;
        let kT = TT.outEdges(iT),
          WT = kT ? kT.map((oT => null == oT ? Number.POSITIVE_INFINITY : IT(oT.w) - TT.edge(oT).minlen)) : [],
          XT = bT(Math.min, WT);
        return XT === Number.POSITIVE_INFINITY && (XT = 0), zT.rank = XT
      }))
    }

    function Mo(TT, oT) {
      return TT.node(oT.w).rank - TT.node(oT.v).rank - TT.edge(oT).minlen
    }
    var ro = function(TT) {
      let oT = new qT({
          directed: !1
        }),
        IT = TT.nodes();
      if (0 === IT.length) throw new Error("Graph must have at least one node");
      let iT, zT, kT = IT[0],
        WT = TT.nodeCount();
      for (oT.setNode(kT, {}); Ao(oT, TT) < WT && (iT = go(oT, TT), iT);) zT = oT.hasNode(iT.v) ? Mo(TT, iT) : -Mo(TT, iT), ho(oT, TT, zT);
      return oT
    };

    function Ao(TT, oT) {
      return TT.nodes().forEach((function IT(iT) {
        let zT = oT.nodeEdges(iT);
        zT && zT.forEach((zT => {
          let kT = zT.v,
            WT = iT === kT ? zT.w : kT;
          !TT.hasNode(WT) && !Mo(oT, zT) && (TT.setNode(WT, {}), TT.setEdge(iT, WT, {}), IT(WT))
        }))
      })), TT.nodeCount()
    }

    function go(TT, oT) {
      return oT.edges().reduce(((IT, iT) => {
        let zT = Number.POSITIVE_INFINITY;
        return TT.hasNode(iT.v) !== TT.hasNode(iT.w) && (zT = Mo(oT, iT)), zT < IT[0] ? [zT, iT] : IT
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function ho(TT, oT, IT) {
      TT.nodes().forEach((TT => oT.node(TT).rank += IT))
    }
    var {
      preorder: wo,
      postorder: mo
    } = rT, eo = Ro;

    function Ro(TT) {
      TT = function(TT) {
        let oT = (new qT).setGraph(TT.graph());
        return TT.nodes().forEach((IT => oT.setNode(IT, TT.node(IT)))), TT.edges().forEach((IT => {
          let iT = oT.edge(IT.v, IT.w) || {
              weight: 0,
              minlen: 1
            },
            zT = TT.edge(IT);
          oT.setEdge(IT.v, IT.w, {
            weight: iT.weight + zT.weight,
            minlen: Math.max(iT.minlen, zT.minlen)
          })
        })), oT
      }(TT), Ko(TT);
      let oT, IT, iT = ro(TT);
      for (Eo(iT), uo(iT, TT); oT = Co(iT);) IT = jo(iT, TT, oT), Jo(iT, TT, oT, IT)
    }

    function uo(TT, oT) {
      let IT = mo(TT, TT.nodes());
      IT = IT.slice(0, IT.length - 1), IT.forEach((IT => function(TT, oT, IT) {
        let iT = TT.node(IT).parent,
          zT = TT.edge(IT, iT);
        zT.cutvalue = vo(TT, oT, IT)
      }(TT, oT, IT)))
    }

    function vo(TT, oT, IT) {
      let iT = TT.node(IT).parent,
        zT = !0,
        kT = oT.edge(IT, iT),
        WT = 0;
      kT || (zT = !1, kT = oT.edge(iT, IT)), WT = kT.weight;
      let XT = oT.nodeEdges(IT);
      return XT && XT.forEach((kT => {
        let XT = kT.v === IT,
          BT = XT ? kT.w : kT.v;
        if (BT !== iT) {
          let iT = XT === zT,
            FT = oT.edge(kT).weight;
          if (WT += iT ? FT : -FT, function(TT, oT, IT) {
              return TT.hasEdge(oT, IT)
            }(TT, IT, BT)) {
            let oT = TT.edge(IT, BT).cutvalue;
            WT += iT ? -oT : oT
          }
        }
      })), WT
    }

    function Eo(TT, oT) {
      arguments.length < 2 && (oT = TT.nodes()[0]), fo(TT, {}, 1, oT)
    }

    function fo(TT, oT, IT, iT, zT) {
      let kT = IT,
        WT = TT.node(iT);
      oT[iT] = !0;
      let XT = TT.neighbors(iT);
      return XT && XT.forEach((zT => {
        Object.hasOwn(oT, zT) || (IT = fo(TT, oT, IT, zT, iT))
      })), WT.low = kT, WT.lim = IT++, zT ? WT.parent = zT : delete WT.parent, IT
    }

    function Co(TT) {
      return TT.edges().find((oT => TT.edge(oT).cutvalue < 0))
    }

    function jo(TT, oT, IT) {
      let iT = IT.v,
        zT = IT.w;
      oT.hasEdge(iT, zT) || (iT = IT.w, zT = IT.v);
      let kT = TT.node(iT),
        WT = TT.node(zT),
        XT = kT,
        BT = !1;
      return kT.lim > WT.lim && (XT = WT, BT = !0), oT.edges().filter((oT => BT === Uo(TT, TT.node(oT.v), XT) && BT !== Uo(TT, TT.node(oT.w), XT))).reduce(((TT, IT) => Mo(oT, IT) < Mo(oT, TT) ? IT : TT))
    }

    function Jo(TT, oT, IT, iT) {
      let zT = IT.v,
        kT = IT.w;
      TT.removeEdge(zT, kT), TT.setEdge(iT.v, iT.w, {}), Eo(TT), uo(TT, oT),
        function(TT, oT) {
          let IT = TT.nodes().find((oT => !TT.node(oT).parent));
          if (!IT) return;
          let iT = wo(TT, [IT]);
          iT = iT.slice(1), iT.forEach((IT => {
            let iT = TT.node(IT).parent,
              zT = oT.edge(IT, iT),
              kT = !1;
            zT || (zT = oT.edge(iT, IT), kT = !0), oT.node(IT).rank = oT.node(iT).rank + (kT ? zT.minlen : -zT.minlen)
          }))
        }(TT, oT)
    }

    function Uo(TT, oT, IT) {
      return IT.low <= oT.lim && oT.lim <= IT.lim
    }
    Ro.initLowLimValues = Eo, Ro.initCutValues = uo, Ro.calcCutValue = vo, Ro.leaveEdge = Co, Ro.enterEdge = jo, Ro.exchangeEdges = Jo;
    var ao = function(TT) {
      let oT = TT.graph().ranker;
      if ("function" == typeof oT) return oT(TT);
      switch (oT) {
        case "network-simplex":
        default:
          Qo(TT);
          break;
        case "tight-tree":
          ! function(TT) {
            Ko(TT), ro(TT)
          }(TT);
          break;
        case "longest-path":
          Yo(TT);
        case "none":
      }
    };
    var Yo = Ko;

    function Qo(TT) {
      eo(TT)
    }
    var Oo = function(TT) {
      let oT = function(TT) {
          let oT = {},
            IT = 0;

          function iT(zT) {
            let kT = IT;
            TT.children(zT).forEach(iT), oT[zT] = {
              low: kT,
              lim: IT++
            }
          }
          return TT.children(io).forEach(iT), oT
        }(TT),
        IT = TT.graph();
      if (!Array.isArray(IT.dummyChains)) return;
      IT.dummyChains.forEach((IT => {
        let iT = TT.node(IT),
          zT = iT.edgeObj,
          kT = function(TT, oT, IT, iT) {
            let zT, kT = [],
              WT = [],
              XT = Math.min(oT[IT].low, oT[iT].low),
              BT = Math.max(oT[IT].lim, oT[iT].lim);
            zT = IT;
            do {
              zT = TT.parent(zT), kT.push(zT)
            } while (zT && (oT[zT].low > XT || BT > oT[zT].lim));
            let FT = zT,
              ST = iT;
            for (;
              (ST = TT.parent(ST)) !== FT;) WT.push(ST);
            return {
              path: kT.concat(WT.reverse()),
              lca: FT
            }
          }(TT, oT, zT.v, zT.w),
          WT = kT.path,
          XT = kT.lca,
          BT = 0,
          FT = WT[BT],
          ST = !0;
        for (; IT !== zT.w;) {
          if (iT = TT.node(IT), ST) {
            for (;
              (FT = WT[BT]) !== XT && TT.node(FT).maxRank < iT.rank;) BT++;
            FT === XT && (ST = !1)
          }
          if (!ST) {
            for (; BT < WT.length - 1 && TT.node(WT[BT + 1]).minRank <= iT.rank;) BT++;
            FT = WT[BT]
          }
          void 0 !== FT && TT.setParent(IT, FT), IT = TT.successors(IT)[0]
        }
      }))
    };

    function Ho(TT) {
      let oT = ZT(TT, "root", {}, "_root"),
        IT = function(TT) {
          let oT = {};

          function IT(iT, zT) {
            let kT = TT.children(iT);
            kT && kT.length && kT.forEach((TT => IT(TT, zT + 1))), oT[iT] = zT
          }
          return TT.children(io).forEach((TT => IT(TT, 1))), oT
        }(TT),
        iT = Object.values(IT),
        zT = bT(Math.max, iT) - 1,
        kT = 2 * zT + 1;
      TT.graph().nestingRoot = oT, TT.edges().forEach((oT => TT.edge(oT).minlen *= kT));
      let WT = function(TT) {
        return TT.edges().reduce(((oT, IT) => oT + TT.edge(IT).weight), 0)
      }(TT) + 1;
      TT.children(io).forEach((iT => {
        no(TT, oT, kT, WT, zT, IT, iT)
      })), TT.graph().nodeRankFactor = kT
    }

    function no(TT, oT, IT, iT, zT, kT, WT) {
      var XT;
      let BT = TT.children(WT);
      if (!BT.length) return void(WT !== oT && TT.setEdge(oT, WT, {
        weight: 0,
        minlen: IT
      }));
      let FT = GT(TT, "_bt"),
        ST = GT(TT, "_bb"),
        DT = TT.node(WT);
      TT.setParent(FT, WT), DT.borderTop = FT, TT.setParent(ST, WT), DT.borderBottom = ST, BT.forEach((XT => {
        var BT;
        no(TT, oT, IT, iT, zT, kT, XT);
        let DT = TT.node(XT),
          LT = DT.borderTop ? DT.borderTop : XT,
          xT = DT.borderBottom ? DT.borderBottom : XT,
          cT = DT.borderTop ? iT : 2 * iT,
          KT = LT !== xT ? 1 : zT - (null != (BT = kT[WT]) ? BT : 0) + 1;
        TT.setEdge(FT, LT, {
          weight: cT,
          minlen: KT,
          nestingEdge: !0
        }), TT.setEdge(xT, ST, {
          weight: cT,
          minlen: KT,
          nestingEdge: !0
        })
      })), TT.parent(WT) || TT.setEdge(oT, FT, {
        weight: 0,
        minlen: zT + (null != (XT = kT[WT]) ? XT : 0)
      })
    }
    var qo = function(TT) {
      TT.children(io).forEach((function oT(IT) {
        let iT = TT.children(IT),
          zT = TT.node(IT);
        if (iT.length && iT.forEach(oT), zT && Object.hasOwn(zT, "minRank")) {
          zT.borderLeft = [], zT.borderRight = [];
          for (let oT = zT.minRank, iT = zT.maxRank + 1; oT < iT; ++oT) Zo(TT, "borderLeft", "_bl", IT, zT, oT), Zo(TT, "borderRight", "_br", IT, zT, oT)
        }
      }))
    };

    function Zo(TT, oT, IT, iT, zT, kT) {
      let WT = {
          width: 0,
          height: 0,
          rank: kT,
          borderType: oT
        },
        XT = zT[oT][kT - 1],
        BT = ZT(TT, "border", WT, IT);
      zT[oT][kT] = BT, TT.setParent(BT, iT), XT && TT.setEdge(XT, BT, {
        weight: 1
      })
    }

    function so(TT) {
      var oT;
      let IT = null == (oT = TT.graph().rankdir) ? void 0 : oT.toLowerCase();
      ("bt" === IT || "rl" === IT) && function(TT) {
        TT.nodes().forEach((oT => po(TT.node(oT)))), TT.edges().forEach((oT => {
          var IT;
          let iT = TT.edge(oT);
          null == (IT = iT.points) || IT.forEach(po), Object.hasOwn(iT, "y") && po(iT)
        }))
      }(TT), ("lr" === IT || "rl" === IT) && (function(TT) {
        TT.nodes().forEach((oT => bo(TT.node(oT)))), TT.edges().forEach((oT => {
          var IT;
          let iT = TT.edge(oT);
          null == (IT = iT.points) || IT.forEach(bo), Object.hasOwn(iT, "x") && bo(iT)
        }))
      }(TT), to(TT))
    }

    function to(TT) {
      TT.nodes().forEach((oT => Go(TT.node(oT)))), TT.edges().forEach((oT => Go(TT.edge(oT))))
    }

    function Go(TT) {
      let oT = TT.width;
      TT.width = TT.height, TT.height = oT
    }

    function po(TT) {
      TT.y = -TT.y
    }

    function bo(TT) {
      let oT = TT.x;
      TT.x = TT.y, TT.y = oT
    }

    function yo(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        IT = {},
        iT = TT.nodes().filter((oT => !TT.children(oT).length)),
        zT = iT.map((oT => TT.node(oT).rank)),
        kT = To(bT(Math.max, zT) + 1).map((() => []));
      return iT.sort(((oT, IT) => TT.node(oT).rank - TT.node(IT).rank)).forEach((function iT(zT) {
        if (IT[zT]) return;
        IT[zT] = !0;
        let WT = TT.node(zT);
        kT[WT.rank].push(zT);
        let XT = TT.successors(zT);
        XT && [...XT].sort(((IT, iT) => function(IT, iT) {
          let zT = TT.node(IT),
            kT = TT.node(iT);
          return zo(oT, zT, kT)
        }(IT, iT))).forEach(iT)
      })), kT
    }

    function No(TT, oT) {
      let IT = 0;
      for (let iT = 1; iT < oT.length; ++iT) IT += Po(TT, oT[iT - 1], oT[iT]);
      return IT
    }

    function Po(TT, oT, IT) {
      let iT = function(TT, oT) {
          return TT.reduce(((TT, IT, iT) => (TT[IT] = oT[iT], TT)), {})
        }(IT, IT.map(((TT, oT) => oT))),
        zT = oT.flatMap((oT => {
          let IT = TT.outEdges(oT);
          return IT ? IT.map((oT => ({
            pos: iT[oT.w],
            weight: TT.edge(oT).weight
          }))).sort(((TT, oT) => TT.pos - oT.pos)) : []
        })),
        kT = 1;
      for (; kT < IT.length;) kT <<= 1;
      let WT = 2 * kT - 1;
      kT -= 1;
      let XT = new Array(WT).fill(0),
        BT = 0;
      return zT.forEach((TT => {
        let oT = TT.pos + kT;
        XT[oT] += TT.weight;
        let IT = 0;
        for (; oT > 0;) oT % 2 && (IT += XT[oT + 1]), oT = oT - 1 >> 1, XT[oT] += TT.weight;
        BT += TT.weight * IT
      })), BT
    }

    function Vo(TT, oT) {
      let IT = {};
      return TT.forEach(((TT, oT) => {
          let iT = {
            indegree: 0,
            in: [],
            out: [],
            vs: [TT.v],
            i: oT
          };
          void 0 !== TT.barycenter && (iT.barycenter = TT.barycenter, iT.weight = TT.weight), IT[TT.v] = iT
        })), oT.edges().forEach((TT => {
          let oT = IT[TT.v],
            iT = IT[TT.w];
          void 0 !== oT && void 0 !== iT && (iT.indegree++, oT.out.push(iT))
        })),
        function(TT) {
          let oT = [];

          function IT(TT) {
            return oT => {
              oT.merged || (void 0 === oT.barycenter || void 0 === TT.barycenter || oT.barycenter >= TT.barycenter) && function(TT, oT) {
                let IT = 0,
                  iT = 0;
                TT.weight && (IT += TT.barycenter * TT.weight, iT += TT.weight), oT.weight && (IT += oT.barycenter * oT.weight, iT += oT.weight), TT.vs = oT.vs.concat(TT.vs), TT.barycenter = IT / iT, TT.weight = iT, TT.i = Math.min(oT.i, TT.i), oT.merged = !0
              }(TT, oT)
            }
          }

          function iT(oT) {
            return IT => {
              IT.in.push(oT), 0 === --IT.indegree && TT.push(IT)
            }
          }
          for (; TT.length;) {
            let zT = TT.pop();
            oT.push(zT), zT.in.reverse().forEach(IT(zT)), zT.out.forEach(iT(zT))
          }
          return oT.filter((TT => !TT.merged)).map((TT => oo(TT, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(IT).filter((TT => !TT.indegree)))
    }

    function TI(TT, oT, IT, iT, zT) {
      let kT = {},
        WT = null,
        XT = null,
        BT = zT;
      "boolean" == typeof oT ? (BT = oT, kT = {}) : oT && (kT = oT, WT = null != IT ? IT : null, XT = null != iT ? iT : null);
      let FT = function(TT, oT) {
          let IT = {
            lhs: [],
            rhs: []
          };
          return TT.forEach((TT => {
            oT(TT) ? IT.lhs.push(TT) : IT.rhs.push(TT)
          })), IT
        }(TT, (TT => Object.hasOwn(TT, "barycenter"))),
        ST = FT.lhs,
        DT = FT.rhs.sort(((TT, oT) => oT.i - TT.i)),
        LT = [],
        xT = 0,
        cT = 0,
        KT = 0;
      ST.sort(function(TT, oT, IT) {
        return (iT, zT) => {
          if (iT.barycenter < zT.barycenter) return -1;
          if (iT.barycenter > zT.barycenter) return 1;
          if (TT && ("string" == typeof iT.vs[0] || "string" == typeof zT.vs[0])) {
            let IT = TT.node(iT.vs[0]),
              kT = TT.node(zT.vs[0]),
              WT = zo(oT, IT, kT);
            if (0 !== WT) return WT
          }
          return IT ? zT.i - iT.i : iT.i - zT.i
        }
      }(XT, WT, !!BT));
      for (let [rT, AT] of Object.entries(kT)) {
        let TT = ST.findIndex((TT => TT.vs[0] === rT));
        ST.splice(TT + 1, 0, AT)
      }
      KT = oI(LT, DT, KT), ST.forEach((TT => {
        KT += TT.vs.length, LT.push(TT.vs), xT += TT.barycenter * TT.weight, cT += TT.weight, KT = oI(LT, DT, KT)
      }));
      let MT = {
        vs: LT.flat(1)
      };
      return cT && (MT.barycenter = xT / cT, MT.weight = cT), MT
    }

    function oI(TT, oT, IT) {
      let iT;
      for (; oT.length && (iT = oT[oT.length - 1]).i <= IT;) oT.pop(), TT.push(iT.vs), IT++;
      return IT
    }

    function II(TT, oT, IT, iT, zT) {
      var kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT;
      let MT = null,
        rT = zT;
      "boolean" == typeof iT ? (rT = iT, MT = null) : void 0 !== iT && (MT = iT);
      let AT = TT.children(oT),
        gT = TT.node(oT),
        hT = gT ? gT.borderLeft : void 0,
        wT = gT ? gT.borderRight : void 0,
        mT = {};
      hT && (AT = AT.filter((TT => TT !== hT && TT !== wT)));
      let eT = function(TT) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((oT => {
          let IT = TT.inEdges(oT);
          if (!IT || !IT.length) return {
            v: oT
          };
          {
            let iT = IT.reduce(((oT, IT) => {
              let iT = TT.edge(IT),
                zT = TT.node(IT.v);
              return {
                sum: oT.sum + iT.weight * zT.order,
                weight: oT.weight + iT.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: oT,
              barycenter: iT.sum / iT.weight,
              weight: iT.weight
            }
          }
        }))
      }(TT, AT);
      eT.forEach((oT => {
        if (TT.children(oT.v).length) {
          let {
            result: iT
          } = II(TT, oT.v, IT, MT, rT);
          mT[oT.v] = iT, Object.hasOwn(iT, "barycenter") && function(TT, oT) {
            void 0 !== TT.barycenter ? (TT.barycenter = (TT.barycenter * TT.weight + oT.barycenter * oT.weight) / (TT.weight + oT.weight), TT.weight += oT.weight) : (TT.barycenter = oT.barycenter, TT.weight = oT.weight)
          }(oT, iT)
        }
      }));
      let RT = Vo(eT, IT);
      ! function(TT, oT) {
        TT.forEach((TT => {
          TT.vs = TT.vs.flatMap((TT => oT[TT] ? oT[TT].vs : TT))
        }))
      }(RT, mT);
      let uT = {},
        vT = !1;
      for (let fT = 0; fT < RT.length; fT++)
        for (let oT = fT + 1; oT < RT.length; oT++)
          if (RT[fT] && RT[oT] && null != (kT = RT[fT]) && kT.barycenter && null != (WT = RT[oT]) && WT.barycenter && (null == (XT = RT[fT]) ? void 0 : XT.barycenter) === RT[oT].barycenter) {
            let IT = null != (FT = null == (BT = RT[fT]) ? void 0 : BT.vs[0]) ? FT : "",
              iT = null != (DT = null == (ST = RT[oT]) ? void 0 : ST.vs[0]) ? DT : "",
              zT = TT.node(IT),
              kT = TT.node(iT);
            if ("edge" === zT.dummy && "edge" === kT.dummy && (null == (LT = zT.edgeObj) ? void 0 : LT.v) === (null == (xT = kT.edgeObj) ? void 0 : xT.v) && (null == (cT = zT.edgeObj) ? void 0 : cT.w) === (null == (KT = kT.edgeObj) ? void 0 : KT.w)) {
              if (zT.edgeLabel.reversed) {
                uT[iT] = RT[fT], RT.splice(fT, 1), fT--;
                break
              }
              uT[IT] = RT[oT], RT.splice(oT, 1), oT--
            } else vT = !0
          } let ET = TI(RT, uT, MT, TT, rT);
      if (hT && wT) {
        ET.vs = [hT, ET.vs, wT].flat(1);
        let oT = TT.predecessors(hT);
        if (oT && oT.length) {
          let IT = TT.node(oT[0]),
            iT = TT.predecessors(wT),
            zT = TT.node(iT[0]);
          Object.hasOwn(ET, "barycenter") || (ET.barycenter = 0, ET.weight = 0), ET.barycenter = (ET.barycenter * ET.weight + IT.order + zT.order) / (ET.weight + 2), ET.weight += 2
        }
      }
      return Object.defineProperty(ET, "result", {
        value: ET,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(ET, "usedBias", {
        value: vT,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), ET
    }

    function iI(TT, oT, IT, iT) {
      iT || (iT = TT.nodes());
      let zT = function(TT) {
          let oT;
          for (; TT.hasNode(oT = VT("_root")););
          return oT
        }(TT),
        kT = new qT({
          compound: !0
        }).setGraph({
          root: zT
        }).setDefaultNodeLabel((oT => TT.node(oT)));
      return iT.forEach((iT => {
        let WT = TT.node(iT),
          XT = TT.parent(iT);
        if (WT.rank === oT || WT.minRank <= oT && oT <= WT.maxRank) {
          kT.setNode(iT), kT.setParent(iT, XT || zT);
          let BT = TT[IT](iT);
          BT && BT.forEach((oT => {
            let IT = oT.v === iT ? oT.w : oT.v,
              zT = kT.edge(IT, iT),
              WT = void 0 !== zT ? zT.weight : 0;
            kT.setEdge(IT, iT, {
              weight: TT.edge(oT).weight + WT
            })
          })), Object.hasOwn(WT, "minRank") && kT.setNode(iT, {
            borderLeft: WT.borderLeft[oT],
            borderRight: WT.borderRight[oT]
          })
        }
      })), kT
    }

    function zI(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof oT.customOrder) return void oT.customOrder(TT, zI);
      let iT = yT(TT),
        zT = kI(TT, To(1, iT + 1), "inEdges"),
        kT = kI(TT, To(iT - 1, -1, -1), "outEdges"),
        WT = yo(TT, IT);
      if (XI(TT, WT), oT.disableOptimalOrderHeuristic) return;
      let XT, BT = Number.POSITIVE_INFINITY,
        FT = oT.constraints || [];
      for (let ST = 0, DT = 0; DT < 4; ++ST, ++DT) {
        WI(ST % 2 ? zT : kT, ST % 4 >= 2, FT, IT), WT = tT(TT);
        let oT = No(TT, WT);
        oT < BT ? (DT = 0, XT = Object.assign({}, WT), BT = oT) : oT === BT && (XT = structuredClone(WT))
      }
      XI(TT, XT)
    }

    function kI(TT, oT, IT) {
      let iT = new Map,
        zT = (TT, oT) => {
          iT.has(TT) || iT.set(TT, []), iT.get(TT).push(oT)
        };
      for (let kT of TT.nodes()) {
        let oT = TT.node(kT);
        if ("number" == typeof oT.rank && zT(oT.rank, kT), "number" == typeof oT.minRank && "number" == typeof oT.maxRank)
          for (let TT = oT.minRank; TT <= oT.maxRank; TT++) TT !== oT.rank && zT(TT, kT)
      }
      return oT.map((function(oT) {
        return iI(TT, oT, IT, iT.get(oT) || [])
      }))
    }

    function WI(TT, oT, IT, iT) {
      let zT = !0,
        kT = new qT;
      TT.forEach((function(TT) {
        IT.forEach((TT => kT.setEdge(TT.left, TT.right)));
        let WT = TT.graph().root,
          {
            result: XT,
            usedBias: BT
          } = II(TT, WT, kT, iT, zT);
        oT && BT && (zT = !zT), XT.vs.forEach(((oT, IT) => TT.node(oT).order = IT)),
          function(TT, oT, IT) {
            let iT, zT = {};
            IT.forEach((IT => {
              let kT, WT, XT = TT.parent(IT);
              for (; XT;) {
                if (kT = TT.parent(XT), kT ? (WT = zT[kT], zT[kT] = XT) : (WT = iT, iT = XT), WT && WT !== XT) return void oT.setEdge(WT, XT);
                XT = kT
              }
            }))
          }(TT, kT, XT.vs)
      }))
    }

    function XI(TT, oT) {
      Object.values(oT).forEach((oT => oT.forEach(((oT, IT) => TT.node(oT).order = IT))))
    }

    function BI(TT, oT, IT) {
      if (oT > IT) {
        let TT = oT;
        oT = IT, IT = TT
      }
      let iT = TT[oT];
      iT || (TT[oT] = iT = {}), iT[IT] = !0
    }

    function FI(TT, oT, IT) {
      if (oT > IT) {
        let TT = oT;
        oT = IT, IT = TT
      }
      let iT = TT[oT];
      return void 0 !== iT && Object.hasOwn(iT, IT)
    }

    function SI(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        kT = {},
        WT = function(TT, oT, IT, iT) {
          let zT = new qT,
            kT = TT.graph(),
            WT = function(TT, oT, IT) {
              return (iT, zT, kT) => {
                let WT, XT = iT.node(zT),
                  BT = iT.node(kT),
                  FT = 0;
                if (FT += XT.width / 2, Object.hasOwn(XT, "labelpos")) switch (XT.labelpos.toLowerCase()) {
                  case "l":
                    WT = -XT.width / 2;
                    break;
                  case "r":
                    WT = XT.width / 2
                }
                if (WT && (FT += IT ? WT : -WT), WT = void 0, FT += (XT.dummy ? oT : TT) / 2, FT += (BT.dummy ? oT : TT) / 2, FT += BT.width / 2, Object.hasOwn(BT, "labelpos")) switch (BT.labelpos.toLowerCase()) {
                  case "l":
                    WT = BT.width / 2;
                    break;
                  case "r":
                    WT = -BT.width / 2
                }
                return WT && (FT += IT ? WT : -WT), FT
              }
            }(kT.nodesep, kT.edgesep, iT);
          return oT.forEach((oT => {
            let iT;
            oT.forEach((oT => {
              let kT = IT[oT];
              if (void 0 !== kT) {
                if (zT.setNode(kT), void 0 !== iT) {
                  let XT = IT[iT];
                  if (void 0 !== XT) {
                    let IT = zT.edge(XT, kT);
                    zT.setEdge(XT, kT, Math.max(WT(TT, oT, iT), IT || 0))
                  }
                }
                iT = oT
              }
            }))
          })), zT
        }(TT, oT, IT, zT),
        XT = zT ? "borderLeft" : "borderRight";

      function BT(TT, oT) {
        let IT = WT.nodes().slice(),
          iT = {},
          zT = IT.pop();
        for (; zT;) {
          if (iT[zT]) TT(zT);
          else {
            iT[zT] = !0, IT.push(zT);
            for (let TT of oT(zT)) IT.push(TT)
          }
          zT = IT.pop()
        }
      }
      return BT((function(TT) {
        let oT = WT.inEdges(TT);
        kT[TT] = oT ? oT.reduce(((TT, oT) => {
          var IT;
          let iT = null != (IT = kT[oT.v]) ? IT : 0,
            zT = WT.edge(oT);
          return Math.max(TT, iT + (void 0 !== zT ? zT : 0))
        }), 0) : 0
      }), (function(TT) {
        return WT.predecessors(TT) || []
      })), BT((function(oT) {
        let IT = WT.outEdges(oT),
          iT = Number.POSITIVE_INFINITY;
        IT && (iT = IT.reduce(((TT, oT) => {
          let IT = kT[oT.w],
            iT = WT.edge(oT);
          return Math.min(TT, (void 0 !== IT ? IT : 0) - (void 0 !== iT ? iT : 0))
        }), Number.POSITIVE_INFINITY));
        let zT = TT.node(oT);
        iT !== Number.POSITIVE_INFINITY && zT.borderType !== XT && (kT[oT] = Math.max(void 0 !== kT[oT] ? kT[oT] : 0, iT))
      }), (function(TT) {
        return WT.successors(TT) || []
      })), Object.keys(iT).forEach((TT => {
        var oT;
        let iT = IT[TT];
        void 0 !== iT && (kT[TT] = null != (oT = kT[iT]) ? oT : 0)
      })), kT
    }

    function DI(TT, oT) {
      let IT, iT = tT(TT),
        zT = Object.assign(function(TT, oT) {
          let IT = {};
          return oT.length && oT.reduce((function(oT, iT) {
            let zT = 0,
              kT = 0,
              WT = oT.length,
              XT = iT[iT.length - 1];
            return iT.forEach(((oT, BT) => {
              let FT = function(TT, oT) {
                  if (TT.node(oT).dummy) {
                    let IT = TT.predecessors(oT);
                    if (IT) return IT.find((oT => TT.node(oT).dummy))
                  }
                }(TT, oT),
                ST = FT ? TT.node(FT).order : WT;
              (FT || oT === XT) && (iT.slice(kT, BT + 1).forEach((oT => {
                let iT = TT.predecessors(oT);
                iT && iT.forEach((iT => {
                  let kT = TT.node(iT),
                    WT = kT.order;
                  (WT < zT || ST < WT) && (!kT.dummy || !TT.node(oT).dummy) && BI(IT, iT, oT)
                }))
              })), kT = BT + 1, zT = ST)
            })), iT
          })), IT
        }(TT, iT), function(TT, oT) {
          let IT = {};

          function iT(oT, iT, zT, kT, WT) {
            To(iT, zT).forEach((iT => {
              let zT = oT[iT];
              if (void 0 !== zT && TT.node(zT).dummy) {
                let oT = TT.predecessors(zT);
                oT && oT.forEach((oT => {
                  if (void 0 === oT) return;
                  let iT = TT.node(oT);
                  iT.dummy && (iT.order < kT || iT.order > WT) && BI(IT, oT, zT)
                }))
              }
            }))
          }
          return oT.length && oT.reduce((function(oT, IT) {
            let zT = -1,
              kT = -1,
              WT = 0;
            return IT.forEach(((XT, BT) => {
              if ("border" === TT.node(XT).dummy) {
                let oT = TT.predecessors(XT);
                if (oT && oT.length) {
                  let XT = oT[0];
                  if (void 0 === XT) return;
                  kT = TT.node(XT).order, iT(IT, WT, BT, zT, kT), WT = BT, zT = kT
                }
              }
              iT(IT, WT, IT.length, kT, oT.length)
            })), IT
          })), IT
        }(TT, iT)),
        kT = {};
      ["u", "d"].forEach((WT => {
        IT = "u" === WT ? iT : Object.values(iT).reverse(), ["l", "r"].forEach((iT => {
          "r" === iT && (IT = IT.map((TT => Object.values(TT).reverse())));
          let XT = function(TT, oT, IT, iT, zT) {
              let kT = {},
                WT = {},
                XT = {};
              return oT.forEach((TT => {
                TT.forEach(((TT, oT) => {
                  kT[TT] = TT, WT[TT] = TT, XT[TT] = oT
                }))
              })), oT.forEach((oT => {
                let BT = -1,
                  FT = -1,
                  ST = !1,
                  DT = oT,
                  LT = oT.findIndex((oT => (null == zT ? void 0 : zT.includes(oT)) || LI(oT, TT, zT)));
                LT > 0 && (DT = [oT[LT], ...oT.slice(0, LT), ...oT.slice(LT + 1)], ST = !0), DT.forEach((oT => {
                  var DT;
                  let LT = iT(oT);
                  if (LT && LT.length) {
                    null != zT && zT.includes(oT) && (LT = LT.filter((oT => LI(oT, TT, zT))));
                    let iT = LT.sort(((TT, oT) => {
                        let IT = XT[TT],
                          iT = XT[oT];
                        return (void 0 !== IT ? IT : 0) - (void 0 !== iT ? iT : 0)
                      })),
                      xT = (iT.length - 1) / 2;
                    for (let TT = Math.floor(xT), zT = Math.ceil(xT); TT <= zT; ++TT) {
                      let zT = iT[TT];
                      if (void 0 === zT) continue;
                      let LT = XT[zT];
                      if (void 0 !== LT && WT[oT] === oT && BT < LT && XT[zT] !== FT && !FI(IT, oT, zT)) {
                        let TT = kT[zT];
                        void 0 !== TT && (WT[zT] = oT, WT[oT] = kT[oT] = TT, BT = LT, ST && (BT = -1, FT = null != (DT = XT[zT]) ? DT : -1, ST = !1))
                      }
                    }
                  }
                }))
              })), {
                root: kT,
                align: WT
              }
            }(TT, IT, zT, (oT => ("u" === WT ? TT.predecessors(oT) : TT.successors(oT)) || []), oT),
            BT = SI(TT, IT, XT.root, XT.align, "r" === iT);
          "r" === iT && (BT = Io(BT, (TT => -TT))), kT[WT + iT] = BT
        }))
      }));
      let WT = function(TT, oT) {
        return Object.values(oT).reduce(((oT, IT) => {
          let iT = Number.NEGATIVE_INFINITY,
            zT = Number.POSITIVE_INFINITY;
          Object.entries(IT).forEach((oT => {
            let [IT, kT] = oT, WT = function(TT, oT) {
              return TT.node(oT).width
            }(TT, IT) / 2;
            iT = Math.max(kT + WT, iT), zT = Math.min(kT - WT, zT)
          }));
          let kT = iT - zT;
          return kT < oT[0] && (oT = [kT, IT]), oT
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(TT, kT);
      return function(TT, oT) {
          let IT = Object.values(oT),
            iT = bT(Math.min, IT),
            zT = bT(Math.max, IT);
          ["u", "d"].forEach((IT => {
            ["l", "r"].forEach((kT => {
              let WT = IT + kT,
                XT = TT[WT];
              if (!XT || XT === oT) return;
              let BT = Object.values(XT),
                FT = iT - bT(Math.min, BT);
              "l" !== kT && (FT = zT - bT(Math.max, BT)), FT && (TT[WT] = Io(XT, (TT => TT + FT)))
            }))
          }))
        }(kT, WT),
        function(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            IT = TT.ul;
          return IT ? Io(IT, ((IT, iT) => {
            var zT, kT;
            if (oT) {
              let IT = oT.toLowerCase(),
                zT = TT[IT];
              if (zT && void 0 !== zT[iT]) return zT[iT]
            }
            let WT = Object.values(TT).map((TT => {
              let oT = TT[iT];
              return void 0 !== oT ? oT : 0
            })).sort(((TT, oT) => TT - oT));
            return ((null != (zT = WT[1]) ? zT : 0) + (null != (kT = WT[2]) ? kT : 0)) / 2
          })) : {}
        }(kT, TT.graph().align)
    }

    function LI(TT, oT, IT) {
      var iT;
      if (!IT) return !1;
      let zT = null == (iT = oT.node(TT)) ? void 0 : iT.edgeObj;
      if (!zT || oT.node(TT).edgeLabel.reversed) return !1;
      let kT = IT.indexOf(null == zT ? void 0 : zT.v),
        WT = IT.indexOf(null == zT ? void 0 : zT.w);
      return -1 !== kT && -1 !== WT && kT === (WT + 1) % IT.length || kT === (WT - 1) % IT.length
    }

    function xI(TT, oT) {
      (function(TT) {
        let oT = tT(TT),
          IT = TT.graph(),
          iT = IT.ranksep,
          zT = IT.rankalign,
          kT = 0;
        oT.forEach((oT => {
          let IT = oT.reduce(((oT, IT) => {
            var iT;
            let zT = null != (iT = TT.node(IT).height) ? iT : 0;
            return oT > zT ? oT : zT
          }), 0);
          oT.forEach((oT => {
            let iT = TT.node(oT);
            iT.y = "top" === zT ? kT + iT.height / 2 : "bottom" === zT ? kT + IT - iT.height / 2 : kT + IT / 2
          })), kT += IT + iT
        }))
      })(TT = lT(TT)), Object.entries(DI(TT, oT)).forEach((oT => {
        let [IT, iT] = oT;
        return TT.node(IT).x = iT
      }))
    }
    var cI = new WeakMap;

    function KI(TT) {
      return rI(TT, PT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), TT
    }

    function MI(TT, oT, IT) {
      let iT = oT;
      for (; void 0 !== iT;) {
        let oT = TT.parent(iT);
        if (oT === IT) return iT;
        iT = oT
      }
    }

    function rI(TT, oT, IT) {
      var iT;
      let zT = TT.nodes().filter((oT => TT.children(oT).length)),
        kT = {};
      zT.forEach((iT => {
        let zT = TT.node(iT);
        if (zT && zT.rankdir) {
          let WT = new qT({
            multigraph: !0,
            compound: !0
          });
          WT.setGraph({
            rankdir: zT.rankdir
          });
          let XT = TT.children(iT);
          XT.forEach((oT => {
            let IT = {
              ...TT.node(oT)
            };
            WT.setNode(oT, IT);
            let zT = TT.parent(oT);
            zT && zT !== iT && XT.includes(zT) && WT.setParent(oT, zT)
          }));
          let BT = new Set;
          TT.edges().forEach((oT => {
            let IT = MI(TT, oT.v, iT),
              zT = MI(TT, oT.w, iT);
            if (IT && zT && IT !== zT) {
              let iT = `${IT}\0${zT}`;
              BT.has(iT) || (BT.add(iT), WT.setEdge(IT, zT, {
                ...TT.edge(oT)
              }))
            }
          })), rI(WT, oT, IT);
          let FT = fI(WT);
          AI(FT, oT, IT, null), gI(WT, FT);
          let ST = 1 / 0,
            DT = 1 / 0,
            LT = -1 / 0,
            xT = -1 / 0;
          WT.nodes().forEach((TT => {
            if (TT === iT) return;
            let oT = WT.node(TT);
            oT && "number" == typeof oT.x && "number" == typeof oT.y && "number" == typeof oT.width && "number" == typeof oT.height && (ST = Math.min(ST, oT.x - oT.width / 2), LT = Math.max(LT, oT.x + oT.width / 2), DT = Math.min(DT, oT.y - oT.height / 2), xT = Math.max(xT, oT.y + oT.height / 2))
          })), (!isFinite(ST) || !isFinite(DT) || !isFinite(LT) || !isFinite(xT)) && (ST = DT = 0, LT = xT = 0);
          let cT = LT - ST,
            KT = xT - DT;
          kT[iT] = {
            minX: ST,
            tz: DT,
            maxX: LT,
            Gz: xT,
            width: cT,
            height: KT,
            offsetX: ST,
            offsetY: DT
          }, zT._dagreClusterSubgraph = WT
        }
      }));
      let WT = [],
        XT = new Map;
      zT.forEach((oT => {
        let IT = TT.node(oT);
        IT && IT.rankdir && kT[oT] && XT.set(oT, (TT.children(oT) || []).filter((TT => TT !== oT)))
      }));
      let BT = new Set([...XT.values()].flat()),
        FT = new Map;
      XT.forEach(((oT, IT) => {
        BT.has(IT) || FT.set(IT, (oT => {
          let IT = [],
            iT = (TT.children(oT) || []).filter((TT => TT !== oT));
          for (; iT.length > 0;) {
            let oT = iT.shift();
            IT.push(oT), (TT.children(oT) || []).filter((TT => TT !== oT)).forEach((TT => iT.push(TT)))
          }
          return IT
        })(IT))
      }));
      let ST = new Set([...FT.values()].flat()),
        DT = TT => {
          for (let [oT, IT] of FT)
            if (IT.includes(TT)) return oT;
          return TT
        },
        LT = [];
      TT.edges().forEach((oT => {
        (ST.has(oT.v) || ST.has(oT.w)) && LT.push({
          edge: oT,
          label: TT.edge(oT)
        })
      }));
      let xT = new Map;
      ST.forEach((oT => {
        let IT = TT.parent(oT);
        xT.set(oT, "string" == typeof IT ? IT : void 0)
      })), FT.forEach(((oT, IT) => {
        let iT = TT.node(IT),
          zT = [];
        oT.forEach((oT => {
          let IT = TT.node(oT);
          IT && (zT.push({
            id: oT,
            node: IT,
            parent: xT.get(oT)
          }), TT.removeNode(oT))
        }));
        let XT = LT.filter((TT => {
            let {
              edge: IT
            } = TT;
            return oT.includes(IT.v) || oT.includes(IT.w)
          })),
          BT = kT[IT];
        iT && (WT.push({
          clusterId: IT,
          subgraph: iT._dagreClusterSubgraph,
          bounds: BT,
          children: oT,
          removedNodes: zT,
          removedEdges: XT
        }), iT.width = BT.width, iT.height = BT.height)
      }));
      let cT = new Set;
      LT.forEach((oT => {
        let {
          edge: IT,
          label: iT
        } = oT, zT = DT(IT.v), kT = DT(IT.w);
        if (zT !== kT && TT.hasNode(zT) && TT.hasNode(kT)) {
          let oT = `${zT}\0${kT}`;
          cT.has(oT) || (cT.add(oT), TT.setEdge(zT, kT, {
            ...iT,
            width: 0,
            height: 0
          }))
        }
      }));
      let KT = fI(TT),
        MT = AI(KT, oT, IT, null != (iT = cI.get(TT)) ? iT : null);
      cI.set(TT, MT), gI(TT, KT), cT.forEach((oT => {
        let IT = oT.indexOf("\0"),
          iT = oT.slice(0, IT),
          zT = oT.slice(IT + 1);
        TT.hasEdge(iT, zT) && TT.removeEdge(iT, zT)
      })), WT.forEach((oT => {
        let {
          clusterId: IT,
          subgraph: iT,
          bounds: zT,
          removedNodes: kT,
          removedEdges: WT
        } = oT;
        var XT, BT;
        let FT = TT.node(IT),
          ST = null != (XT = null == FT ? void 0 : FT.x) ? XT : 0,
          DT = null != (BT = null == FT ? void 0 : FT.y) ? BT : 0,
          LT = (zT.minX + zT.maxX) / 2,
          xT = (zT.tz + zT.Gz) / 2;
        kT.forEach((oT => {
          let {
            id: IT,
            node: iT,
            parent: zT
          } = oT;
          TT.setNode(IT, iT), void 0 !== zT && TT.setParent(IT, zT)
        })), WT.forEach((oT => {
          let {
            edge: IT,
            label: iT
          } = oT;
          TT.setEdge(IT, iT)
        })), iT.nodes().forEach((oT => {
          if (oT === IT) return;
          let zT = iT.node(oT),
            kT = TT.node(oT);
          kT && zT && "number" == typeof zT.x && "number" == typeof zT.y && (kT.x = ST + (zT.x - LT), kT.y = DT + (zT.y - xT))
        })), delete FT._dagreClusterSubgraph
      })), zT.forEach((oT => {
        var IT, iT;
        let zT = TT.node(oT),
          WT = kT[oT];
        if (zT && zT.rankdir && zT._dagreClusterSubgraph && WT) {
          let kT = zT._dagreClusterSubgraph,
            XT = null != (IT = zT.x) ? IT : 0,
            BT = null != (iT = zT.y) ? iT : 0,
            FT = (WT.minX + WT.maxX) / 2,
            ST = (WT.tz + WT.Gz) / 2;
          kT.nodes().forEach((IT => {
            if (IT === oT) return;
            let iT = kT.node(IT),
              zT = TT.node(IT);
            if (zT && iT && "number" == typeof iT.x && "number" == typeof iT.y) {
              let TT = iT.x - FT,
                oT = iT.y - ST;
              zT.x = XT + TT, zT.y = BT + oT
            }
          })), delete zT._dagreClusterSubgraph
        }
      }))
    }

    function AI(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var zT, kT;
      let WT = !1 !== (null == IT ? void 0 : IT.useDynamic),
        XT = WT && null != (zT = null == iT ? void 0 : iT.graph) ? zT : null,
        BT = WT && null != (kT = null == iT ? void 0 : iT.rawNodes) ? kT : null;
      oT("    makeSpaceForEdgeLabels", (() => function(TT) {
        let oT = TT.graph();
        oT.ranksep /= 2, TT.edges().forEach((IT => {
          var iT;
          let zT = TT.edge(IT);
          zT.minlen *= 2, "c" !== (null != (iT = zT.labelpos) ? iT : "r").toLowerCase() && ("TB" === oT.rankdir || "BT" === oT.rankdir ? zT.width += zT.labeloffset : zT.height += zT.labeloffset)
        }))
      }(TT))), oT("    removeSelfEdges", (() => function(TT) {
        TT.edges().forEach((oT => {
          if (oT.v === oT.w) {
            let IT = TT.node(oT.v);
            IT.selfEdges || (IT.selfEdges = []), IT.selfEdges.push({
              e: oT,
              label: TT.edge(oT)
            }), TT.removeEdge(oT)
          }
        }))
      }(TT))), oT("    acyclic", (() => xo(TT, XT))), oT("    nestingGraph.run", (() => Ho(TT))), oT("    rank", (() => ao(lT(TT)))), oT("    injectEdgeLabelProxies", (() => function(TT) {
        TT.edges().forEach((oT => {
          let IT = TT.edge(oT);
          if (IT.width && IT.height) {
            let IT = TT.node(oT.v),
              iT = {
                rank: (TT.node(oT.w).rank - IT.rank) / 2 + IT.rank,
                e: oT
              };
            ZT(TT, "edge-proxy", iT, "_ep")
          }
        }))
      }(TT))), oT("    removeEmptyRanks", (() => function(TT) {
        let oT = TT.nodes().map((oT => TT.node(oT).rank)).filter((TT => void 0 !== TT)),
          IT = bT(Math.min, oT),
          iT = [];
        TT.nodes().forEach((oT => {
          let zT = TT.node(oT).rank - IT;
          iT[zT] || (iT[zT] = []), iT[zT].push(oT)
        }));
        let zT = 0,
          kT = TT.graph().nodeRankFactor;
        Array.from(iT).forEach(((oT, IT) => {
          void 0 === oT && IT % kT !== 0 ? --zT : void 0 !== oT && zT && oT.forEach((oT => TT.node(oT).rank += zT))
        }))
      }(TT))), oT("    nestingGraph.cleanup", (() => function(TT) {
        let oT = TT.graph();
        TT.removeNode(oT.nestingRoot), delete oT.nestingRoot, TT.edges().forEach((oT => {
          TT.edge(oT).nestingEdge && TT.removeEdge(oT)
        }))
      }(TT))), oT("    normalizeRanks", (() => function(TT) {
        let oT = TT.nodes().map((oT => {
            let IT = TT.node(oT).rank;
            return void 0 === IT ? Number.MAX_VALUE : IT
          })),
          IT = bT(Math.min, oT);
        TT.nodes().forEach((oT => {
          let iT = TT.node(oT);
          Object.hasOwn(iT, "rank") && (iT.rank -= IT)
        }))
      }(TT))), oT("    assignRankMinMax", (() => function(TT) {
        let oT = 0;
        TT.nodes().forEach((IT => {
          let iT = TT.node(IT);
          iT.borderTop && (iT.minRank = TT.node(iT.borderTop).rank, iT.maxRank = TT.node(iT.borderBottom).rank, oT = Math.max(oT, iT.maxRank))
        })), TT.graph().maxRank = oT
      }(TT))), oT("    removeEdgeLabelProxies", (() => function(TT) {
        TT.nodes().forEach((oT => {
          let IT = TT.node(oT);
          if ("edge-proxy" === IT.dummy) {
            let iT = IT;
            TT.edge(iT.e).labelRank = IT.rank, TT.removeNode(oT)
          }
        }))
      }(TT))), oT("    normalize.run", (() => co(TT))), oT("    parentDummyChains", (() => Oo(TT))), oT("    addBorderSegments", (() => qo(TT))), oT("    order", (() => zI(TT, IT, BT))), oT("    insertSelfEdges", (() => function(TT) {
        tT(TT).forEach((oT => {
          let IT = 0;
          oT.forEach(((oT, iT) => {
            let zT = TT.node(oT);
            "number" != typeof zT.rank && (zT.rank = 0), zT.order = iT + IT, (zT.selfEdges || []).forEach((oT => {
              ZT(TT, "selfedge", {
                width: oT.label.width,
                height: oT.label.height,
                rank: zT.rank,
                order: iT + ++IT,
                e: oT.e,
                edgeLabel: oT.label
              }, "_se"), (!Array.isArray(oT.label.points) || 7 !== oT.label.points.length) && (oT.label.points = [{
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
            })), delete zT.selfEdges
          }))
        }))
      }(TT))), oT("    adjustCoordinateSystem", (() => function(TT) {
        var oT;
        let IT = null == (oT = TT.graph().rankdir) ? void 0 : oT.toLowerCase();
        ("lr" === IT || "rl" === IT) && to(TT)
      }(TT))), oT("    position", (() => xI(TT, IT.corePath))), oT("    positionSelfEdges", (() => function(TT) {
        TT.nodes().forEach((oT => {
          let IT = TT.node(oT),
            iT = TT => "number" == typeof TT && isFinite(TT);
          if ("selfedge" === IT.dummy) {
            let zT = IT,
              kT = TT.node(zT.e.v),
              WT = iT(null == kT ? void 0 : kT.x) ? kT.x : 0,
              XT = iT(null == kT ? void 0 : kT.y) ? kT.y : 0,
              BT = iT(null == kT ? void 0 : kT.width) ? kT.width : 0,
              FT = iT(null == kT ? void 0 : kT.height) ? kT.height : 0,
              ST = iT(IT.x) ? IT.x : WT,
              DT = iT(IT.y) ? IT.y : XT,
              LT = BT / 2,
              xT = FT / 2;
            zT.edgeLabel.points = [{
              x: ST + LT,
              y: DT - xT
            }, {
              x: ST + LT,
              y: DT - xT
            }, {
              x: ST,
              y: DT
            }, {
              x: ST - LT,
              y: DT + xT
            }, {
              x: ST - LT,
              y: DT + xT
            }, {
              x: ST,
              y: DT
            }, {
              x: ST,
              y: DT
            }], zT.edgeLabel.x = ST, zT.edgeLabel.y = DT, TT.setEdge(zT.e, zT.edgeLabel), TT.removeNode(oT)
          } else IT && Array.isArray(IT.selfEdges) && IT.selfEdges.forEach((TT => {
            if (!Array.isArray(TT.label.points) || 7 !== TT.label.points.length) {
              let oT = iT(IT.x) ? IT.x : 0,
                zT = iT(IT.y) ? IT.y : 0,
                kT = (iT(IT.width) ? IT.width : 0) / 2,
                WT = (iT(IT.height) ? IT.height : 0) / 2;
              TT.label.points = [{
                x: oT + kT,
                y: zT - WT
              }, {
                x: oT + kT,
                y: zT - WT
              }, {
                x: oT,
                y: zT
              }, {
                x: oT - kT,
                y: zT + WT
              }, {
                x: oT - kT,
                y: zT + WT
              }, {
                x: oT,
                y: zT
              }, {
                x: oT,
                y: zT
              }]
            }
          }))
        }))
      }(TT)));
      let FT = JSON.parse(JSON.stringify(TT._nodes));
      return oT("    removeBorderNodes", (() => function(TT) {
        TT.nodes().forEach((oT => {
          if (TT.children(oT).length) {
            let IT = TT.node(oT),
              iT = TT.node(IT.borderTop),
              zT = TT.node(IT.borderBottom),
              kT = TT.node(IT.borderLeft[IT.borderLeft.length - 1]),
              WT = TT.node(IT.borderRight[IT.borderRight.length - 1]);
            IT.width = Math.abs(WT.x - kT.x), IT.height = Math.abs(zT.y - iT.y), IT.x = kT.x + IT.width / 2, IT.y = iT.y + IT.height / 2
          }
        })), TT.nodes().forEach((oT => {
          "border" === TT.node(oT).dummy && TT.removeNode(oT)
        }))
      }(TT))), oT("    normalize.undo", (() => function(TT) {
        TT.graph().dummyChains.forEach((oT => {
          let IT, iT = TT.node(oT),
            zT = iT.edgeLabel;
          for (TT.setEdge(iT.edgeObj, zT); iT.dummy;) IT = TT.successors(oT)[0], TT.removeNode(oT), zT.points.push({
            x: iT.x,
            y: iT.y
          }), "edge-label" === iT.dummy && (zT.x = iT.x, zT.y = iT.y, zT.width = iT.width, zT.height = iT.height), oT = IT, iT = TT.node(oT)
        }))
      }(TT))), oT("    fixupEdgeLabelCoords", (() => function(TT) {
        TT.edges().forEach((oT => {
          let IT = TT.edge(oT);
          if (Object.hasOwn(IT, "x")) switch (("l" === IT.labelpos || "r" === IT.labelpos) && (IT.width -= IT.labeloffset), IT.labelpos) {
            case "l":
              IT.x -= IT.width / 2 + IT.labeloffset;
              break;
            case "r":
              IT.x += IT.width / 2 + IT.labeloffset
          }
        }))
      }(TT))), oT("    undoCoordinateSystem", (() => so(TT))), oT("    translateGraph", (() => function(TT) {
        let oT = Number.POSITIVE_INFINITY,
          IT = 0,
          iT = Number.POSITIVE_INFINITY,
          zT = 0,
          kT = TT.graph(),
          WT = kT.marginx || 0,
          XT = kT.marginy || 0;

        function BT(TT) {
          let kT = TT.x,
            WT = TT.y,
            XT = TT.width,
            BT = TT.height;
          oT = Math.min(oT, kT - XT / 2), IT = Math.max(IT, kT + XT / 2), iT = Math.min(iT, WT - BT / 2), zT = Math.max(zT, WT + BT / 2)
        }
        TT.nodes().forEach((oT => BT(TT.node(oT)))), TT.edges().forEach((oT => {
          let IT = TT.edge(oT);
          Object.hasOwn(IT, "x") && BT(IT)
        })), oT -= WT, iT -= XT, TT.nodes().forEach((IT => {
          let zT = TT.node(IT);
          zT.x -= oT, zT.y -= iT
        })), TT.edges().forEach((IT => {
          let zT = TT.edge(IT);
          zT.points.forEach((TT => {
            TT.x -= oT, TT.y -= iT
          })), Object.hasOwn(zT, "x") && (zT.x -= oT), Object.hasOwn(zT, "y") && (zT.y -= iT)
        })), kT.width = IT - oT + WT, kT.height = zT - iT + XT
      }(TT))), oT("    assignNodeIntersects", (() => function(TT) {
        TT.edges().forEach((oT => {
          if (oT.v === oT.w) return;
          let IT, iT, zT = TT.edge(oT),
            kT = TT.node(oT.v),
            WT = TT.node(oT.w);
          zT.points ? (IT = zT.points[0], iT = zT.points[zT.points.length - 1]) : (zT.points = [], IT = WT, iT = kT), zT.points.unshift(sT(kT, IT)), zT.points.push(sT(WT, iT))
        }))
      }(TT))), oT("    reversePoints", (() => function(TT) {
        TT.edges().forEach((oT => {
          let IT = TT.edge(oT);
          IT.reversed && IT.points.reverse()
        }))
      }(TT))), oT("    acyclic.undo", (() => function(TT) {
        TT.edges().forEach((oT => {
          let IT = TT.edge(oT);
          if (IT.reversed) {
            TT.removeEdge(oT);
            let iT = IT.forwardName;
            delete IT.reversed, delete IT.forwardName, TT.setEdge(oT.w, oT.v, IT, iT)
          }
        }))
      }(TT))), {
        graph: TT,
        rawNodes: FT
      }
    }

    function gI(TT, oT) {
      TT.nodes().forEach((IT => {
        let iT = TT.node(IT),
          zT = oT.node(IT);
        iT && (iT.x = zT.x, iT.y = zT.y, iT.order = zT.order, iT.rank = zT.rank, oT.children(IT).length && (iT.width = zT.width, iT.height = zT.height))
      })), TT.edges().forEach((IT => {
        let iT = TT.edge(IT),
          zT = oT.edge(IT);
        iT.points = zT.points, Object.hasOwn(zT, "x") && (iT.x = zT.x, iT.y = zT.y)
      })), TT.graph().width = oT.graph().width, TT.graph().height = oT.graph().height
    }
    var hI = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      wI = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      mI = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      eI = ["width", "height", "rank"],
      RI = {
        width: 0,
        height: 0
      },
      uI = ["minlen", "weight", "width", "height", "labeloffset"],
      vI = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      EI = ["labelpos"];

    function fI(TT) {
      let oT = new qT({
          multigraph: !0,
          compound: !0
        }),
        IT = jI(TT.graph());
      return oT.setGraph(Object.assign({}, wI, CI(IT, hI), oo(IT, mI))), TT.nodes().forEach((IT => {
        let iT = CI(jI(TT.node(IT)), eI);
        Object.keys(RI).forEach((TT => {
          void 0 === iT[TT] && (iT[TT] = RI[TT])
        })), oT.setNode(IT, iT);
        let zT = TT.parent(IT);
        void 0 !== zT && oT.setParent(IT, zT)
      })), TT.edges().forEach((IT => {
        let iT = jI(TT.edge(IT));
        oT.setEdge(IT, Object.assign({}, vI, CI(iT, uI), oo(iT, EI)))
      })), oT
    }

    function CI(TT, oT) {
      return Io(oo(TT, oT), Number)
    }

    function jI(TT) {
      let oT = {};
      return TT && Object.entries(TT).forEach((TT => {
        let [IT, iT] = TT;
        "string" == typeof IT && (IT = IT.toLowerCase()), oT[IT] = iT
      })), oT
    }

    function JI(TT) {
      let oT = tT(TT),
        IT = new qT({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return TT.nodes().forEach((oT => {
        IT.setNode(oT, {
          label: oT
        }), IT.setParent(oT, "layer" + TT.node(oT).rank)
      })), TT.edges().forEach((TT => IT.setEdge(TT.v, TT.w, {}, TT.name))), oT.forEach(((TT, oT) => {
        let iT = "layer" + oT;
        IT.setNode(iT, {
          rank: "same"
        }), TT.reduce(((TT, oT) => (IT.setEdge(TT, oT, {
          style: "invis"
        }), oT)))
      })), IT
    }
    var UI = {
        time: NT,
        notime: PT
      },
      aI = {
        graphlib: kT,
        version: ko,
        layout: KI,
        debug: JI,
        util: {
          time: NT,
          notime: PT
        }
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);