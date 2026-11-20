/*! For license information please see eulrrq.111.822ef0ae.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6123: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Graph: () => sU,
      debug: () => ag,
      default: () => Bg,
      graphlib: () => EU,
      layout: () => ug,
      util: () => Yg,
      version: () => ER
    });
    var tU = Object.defineProperty,
      pU = (UU, RU, gU) => ((UU, RU, gU) => RU in UU ? tU(UU, RU, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: gU
      }) : UU[RU] = gU)(UU, "symbol" != typeof RU ? RU + "" : RU, gU),
      EU = {};
    ((UU, RU) => {
      for (var gU in RU) tU(UU, gU, {
        get: RU[gU],
        enumerable: !0
      })
    })(EU, {
      Graph: () => sU,
      alg: () => eU
    });
    var PU = Object.defineProperty,
      TU = (UU, RU) => {
        for (var gU in RU) PU(UU, gU, {
          get: RU[gU],
          enumerable: !0
        })
      },
      qU = class {
        constructor(UU) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, UU && (this._isDirected = !("directed" in UU) || UU.directed, this._isMultigraph = "multigraph" in UU && UU.multigraph, this._isCompound = "compound" in UU && UU.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(UU) {
          return this._label = UU, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(UU) {
          return this._defaultNodeLabelFn = "function" != typeof UU ? () => UU : UU, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((UU => 0 === Object.keys(this._in[UU]).length))
        }
        sinks() {
          return this.nodes().filter((UU => 0 === Object.keys(this._out[UU]).length))
        }
        setNodes(UU, RU) {
          return UU.forEach((UU => {
            void 0 !== RU ? this.setNode(UU, RU) : this.setNode(UU)
          })), this
        }
        setNode(UU, RU) {
          return UU in this._nodes ? (arguments.length > 1 && (this._nodes[UU] = RU), this) : (this._nodes[UU] = arguments.length > 1 ? RU : this._defaultNodeLabelFn(UU), this._isCompound && (this._parent[UU] = "\0", this._children[UU] = {}, this._children["\0"][UU] = !0), this._in[UU] = {}, this._preds[UU] = {}, this._out[UU] = {}, this._sucs[UU] = {}, ++this._nodeCount, this)
        }
        node(UU) {
          return this._nodes[UU]
        }
        hasNode(UU) {
          return UU in this._nodes
        }
        removeNode(UU) {
          if (UU in this._nodes) {
            let RU = UU => this.removeEdge(this._edgeObjs[UU]);
            delete this._nodes[UU], this._isCompound && (this._removeFromParentsChildList(UU), delete this._parent[UU], this.children(UU).forEach((UU => {
              this.setParent(UU)
            })), delete this._children[UU]), Object.keys(this._in[UU]).forEach(RU), delete this._in[UU], delete this._preds[UU], Object.keys(this._out[UU]).forEach(RU), delete this._out[UU], delete this._sucs[UU], --this._nodeCount
          }
          return this
        }
        setParent(UU, RU) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === RU) RU = "\0";
          else {
            for (let gU = RU += ""; void 0 !== gU; gU = this.parent(gU))
              if (gU === UU) throw new Error("Setting " + RU + " as parent of " + UU + " would create a cycle");
            this.setNode(RU)
          }
          return this.setNode(UU), this._removeFromParentsChildList(UU), this._parent[UU] = RU, this._children[RU][UU] = !0, this
        }
        parent(UU) {
          if (this._isCompound) {
            let RU = this._parent[UU];
            if ("\0" !== RU) return RU
          }
        }
        children() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let RU = this._children[UU];
            if (RU) return Object.keys(RU)
          } else {
            if ("\0" === UU) return this.nodes();
            if (this.hasNode(UU)) return []
          }
          return []
        }
        predecessors(UU) {
          let RU = this._preds[UU];
          if (RU) return Object.keys(RU)
        }
        successors(UU) {
          let RU = this._sucs[UU];
          if (RU) return Object.keys(RU)
        }
        neighbors(UU) {
          let RU = this.predecessors(UU);
          if (RU) {
            let gU = new Set(RU),
              tU = this.successors(UU);
            if (tU)
              for (let UU of tU) gU.add(UU);
            return Array.from(gU.values())
          }
        }
        isLeaf(UU) {
          var RU;
          let gU;
          return gU = this.isDirected() ? this.successors(UU) : this.neighbors(UU), 0 === (null != (RU = null == gU ? void 0 : gU.length) ? RU : 0)
        }
        filterNodes(UU) {
          let RU = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          RU.setGraph(this.graph()), Object.entries(this._nodes).forEach((gU => {
            let [tU, pU] = gU;
            UU(tU) && RU.setNode(tU, pU)
          })), Object.values(this._edgeObjs).forEach((UU => {
            RU.hasNode(UU.v) && RU.hasNode(UU.w) && RU.setEdge(UU, this.edge(UU))
          }));
          let gU = {},
            tU = UU => {
              let pU = this.parent(UU);
              return !pU || RU.hasNode(pU) ? (gU[UU] = pU, pU) : pU in gU ? gU[pU] : tU(pU)
            };
          return this._isCompound && RU.nodes().forEach((UU => RU.setParent(UU, tU(UU)))), RU
        }
        setDefaultEdgeLabel(UU) {
          return this._defaultEdgeLabelFn = "function" != typeof UU ? () => UU : UU, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(UU, RU) {
          return UU.reduce(((UU, gU) => (void 0 !== RU ? this.setEdge(UU, gU, RU) : this.setEdge(UU, gU), gU))), this
        }
        setEdge(UU, RU, gU, tU) {
          let pU, EU, PU, TU, qU = !1;
          "object" == typeof UU && null !== UU && "v" in UU ? (pU = UU.v, EU = UU.w, PU = UU.name, 2 === arguments.length && (TU = RU, qU = !0)) : (pU = UU, EU = RU, PU = tU, arguments.length > 2 && (TU = gU, qU = !0)), pU = "" + pU, EU = "" + EU, void 0 !== PU && (PU = "" + PU);
          let cU = GU(this._isDirected, pU, EU, PU);
          if (cU in this._edgeLabels) return qU && (this._edgeLabels[cU] = TU), this;
          if (void 0 !== PU && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(pU), this.setNode(EU), this._edgeLabels[cU] = qU ? TU : this._defaultEdgeLabelFn(pU, EU, PU);
          let jU = function(UU, RU, gU, tU) {
            let pU = "" + RU,
              EU = "" + gU;
            if (!UU && pU > EU) {
              let UU = pU;
              pU = EU, EU = UU
            }
            let PU = {
              v: pU,
              w: EU
            };
            return tU && (PU.name = tU), PU
          }(this._isDirected, pU, EU, PU);
          return pU = jU.v, EU = jU.w, Object.freeze(jU), this._edgeObjs[cU] = jU, KU(this._preds[EU], pU), KU(this._sucs[pU], EU), this._in[EU][cU] = jU, this._out[pU][cU] = jU, this._edgeCount++, this
        }
        edge(UU, RU, gU) {
          let tU = 1 === arguments.length ? jU(this._isDirected, UU) : GU(this._isDirected, UU, RU, gU);
          return this._edgeLabels[tU]
        }
        edgeAsObj(UU, RU, gU) {
          let tU = 1 === arguments.length ? this.edge(UU) : this.edge(UU, RU, gU);
          return "object" != typeof tU || null === tU ? {
            label: tU
          } : tU
        }
        hasEdge(UU, RU, gU) {
          return (1 === arguments.length ? jU(this._isDirected, UU) : GU(this._isDirected, UU, RU, gU)) in this._edgeLabels
        }
        removeEdge(UU, RU, gU) {
          let tU = 1 === arguments.length ? jU(this._isDirected, UU) : GU(this._isDirected, UU, RU, gU),
            pU = this._edgeObjs[tU];
          if (pU) {
            let UU = pU.v,
              RU = pU.w;
            delete this._edgeLabels[tU], delete this._edgeObjs[tU], cU(this._preds[RU], UU), cU(this._sucs[UU], RU), delete this._in[RU][tU], delete this._out[UU][tU], this._edgeCount--
          }
          return this
        }
        inEdges(UU, RU) {
          return this.isDirected() ? this.filterEdges(this._in[UU], UU, RU) : this.nodeEdges(UU, RU)
        }
        outEdges(UU, RU) {
          return this.isDirected() ? this.filterEdges(this._out[UU], UU, RU) : this.nodeEdges(UU, RU)
        }
        nodeEdges(UU, RU) {
          if (UU in this._nodes) return this.filterEdges({
            ...this._in[UU],
            ...this._out[UU]
          }, UU, RU)
        }
        _removeFromParentsChildList(UU) {
          delete this._children[this._parent[UU]][UU]
        }
        filterEdges(UU, RU, gU) {
          if (!UU) return;
          let tU = Object.values(UU);
          return gU ? tU.filter((UU => UU.v === RU && UU.w === gU || UU.v === gU && UU.w === RU)) : tU
        }
      };

    function KU(UU, RU) {
      UU[RU] ? UU[RU]++ : UU[RU] = 1
    }

    function cU(UU, RU) {
      void 0 !== UU[RU] && !--UU[RU] && delete UU[RU]
    }

    function GU(UU, RU, gU, tU) {
      let pU = "" + RU,
        EU = "" + gU;
      if (!UU && pU > EU) {
        let UU = pU;
        pU = EU, EU = UU
      }
      return pU + "\x01" + EU + "\x01" + (void 0 === tU ? "\0" : tU)
    }

    function jU(UU, RU) {
      return GU(UU, RU.v, RU.w, RU.name)
    }

    function uU(UU) {
      let RU = {
          options: {
            directed: UU.isDirected(),
            multigraph: UU.isMultigraph(),
            compound: UU.isCompound()
          },
          nodes: CU(UU),
          edges: hU(UU)
        },
        gU = UU.graph();
      return void 0 !== gU && (RU.value = structuredClone(gU)), RU
    }

    function CU(UU) {
      return UU.nodes().map((RU => {
        let gU = UU.node(RU),
          tU = UU.parent(RU),
          pU = {
            v: RU
          };
        return void 0 !== gU && (pU.value = gU), void 0 !== tU && (pU.parent = tU), pU
      }))
    }

    function hU(UU) {
      return UU.edges().map((RU => {
        let gU = UU.edge(RU),
          tU = {
            v: RU.v,
            w: RU.w
          };
        return void 0 !== RU.name && (tU.name = RU.name), void 0 !== gU && (tU.value = gU), tU
      }))
    }

    function QU(UU) {
      let RU = new qU(UU.options);
      return void 0 !== UU.value && RU.setGraph(UU.value), UU.nodes.forEach((UU => {
        RU.setNode(UU.v, UU.value), UU.parent && RU.setParent(UU.v, UU.parent)
      })), UU.edges.forEach((UU => {
        RU.setEdge({
          v: UU.v,
          w: UU.w,
          name: UU.name
        }, UU.value)
      })), RU
    }
    TU({}, {
      read: () => QU,
      write: () => uU
    });
    var eU = {};
    TU(eU, {
      CycleException: () => aU,
      bellmanFord: () => fU,
      components: () => xU,
      dijkstra: () => JU,
      dijkstraAll: () => wU,
      findCycles: () => bU,
      floydWarshall: () => ZU,
      isAcyclic: () => BU,
      postorder: () => vU,
      preorder: () => dU,
      prim: () => HU,
      shortestPaths: () => SU,
      tarjan: () => nU,
      topsort: () => YU
    });
    var WU = () => 1;

    function fU(UU, RU, gU, tU) {
      return function(UU, RU, gU, tU) {
        let pU, EU = {},
          PU = 0,
          TU = UU.nodes(),
          qU = function(UU) {
            let RU = EU[UU.v],
              tU = EU[UU.w];
            if (!RU || !tU) return;
            let PU = gU(UU);
            RU.distance + PU < tU.distance && (EU[UU.w] = {
              distance: RU.distance + PU,
              predecessor: UU.v
            }, pU = !0)
          },
          KU = function() {
            TU.forEach((function(UU) {
              tU(UU).forEach((function(RU) {
                let gU = RU.v === UU ? RU.v : RU.w,
                  tU = gU === RU.v ? RU.w : RU.v;
                qU({
                  v: gU,
                  w: tU
                })
              }))
            }))
          };
        TU.forEach((function(UU) {
          let gU = UU === RU ? 0 : Number.POSITIVE_INFINITY;
          EU[UU] = {
            distance: gU,
            predecessor: ""
          }
        }));
        let cU = TU.length;
        for (let GU = 1; GU < cU && (pU = !1, PU++, KU(), pU); GU++);
        if (PU === cU - 1 && (pU = !1, KU(), pU)) throw new Error("The graph contains a negative weight cycle");
        return EU
      }(UU, String(RU), gU || WU, tU || function(RU) {
        var gU;
        return null != (gU = UU.outEdges(RU)) ? gU : []
      })
    }

    function xU(UU) {
      let RU, gU = {},
        tU = [];

      function pU(tU) {
        var EU, PU;
        tU in gU || (gU[tU] = !0, RU.push(tU), null == (EU = UU.successors(tU)) || EU.forEach(pU), null == (PU = UU.predecessors(tU)) || PU.forEach(pU))
      }
      return UU.nodes().forEach((function(UU) {
        RU = [], pU(UU), RU.length && tU.push(RU)
      })), tU
    }
    var mU = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((UU => UU.key))
        }
        has(UU) {
          return UU in this._keyIndices
        }
        priority(UU) {
          let RU = this._keyIndices[UU];
          if (void 0 !== RU) return this._arr[RU].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(UU, RU) {
          let gU = this._keyIndices,
            tU = String(UU);
          if (!(tU in gU)) {
            let UU = this._arr,
              pU = UU.length;
            return gU[tU] = pU, UU.push({
              key: tU,
              priority: RU
            }), this._decrease(pU), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let UU = this._arr.pop();
          return delete this._keyIndices[UU.key], this._heapify(0), UU.key
        }
        decrease(UU, RU) {
          let gU = this._keyIndices[UU];
          if (void 0 === gU) throw new Error(`Key not found: ${UU}`);
          let tU = this._arr[gU].priority;
          if (RU > tU) throw new Error(`New priority is greater than current priority. Key: ${UU} Old: ${tU} New: ${RU}`);
          this._arr[gU].priority = RU, this._decrease(gU)
        }
        _heapify(UU) {
          let RU = this._arr,
            gU = 2 * UU,
            tU = gU + 1,
            pU = UU;
          gU < RU.length && (pU = RU[gU].priority < RU[pU].priority ? gU : pU, tU < RU.length && (pU = RU[tU].priority < RU[pU].priority ? tU : pU), pU !== UU && (this._swap(UU, pU), this._heapify(pU)))
        }
        _decrease(UU) {
          let RU, gU = this._arr,
            tU = gU[UU].priority;
          for (; 0 !== UU && (RU = UU >> 1, !(gU[RU].priority < tU));) this._swap(UU, RU), UU = RU
        }
        _swap(UU, RU) {
          let gU = this._arr,
            tU = this._keyIndices,
            pU = gU[UU],
            EU = gU[RU];
          gU[UU] = EU, gU[RU] = pU, tU[EU.key] = UU, tU[pU.key] = RU
        }
      },
      IU = () => 1;

    function JU(UU, RU, gU, tU) {
      return function(UU, RU, gU, tU) {
        let pU, EU, PU = {},
          TU = new mU,
          qU = function(UU) {
            let RU = UU.v !== pU ? UU.v : UU.w,
              tU = PU[RU];
            if (!tU) return;
            let qU = gU(UU),
              KU = EU.distance + qU;
            if (qU < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + UU + " Weight: " + qU);
            KU < tU.distance && (tU.distance = KU, tU.predecessor = pU, TU.decrease(RU, KU))
          };
        for (UU.nodes().forEach((function(UU) {
            let gU = UU === RU ? 0 : Number.POSITIVE_INFINITY;
            PU[UU] = {
              distance: gU,
              predecessor: ""
            }, TU.add(UU, gU)
          })); TU.size() > 0;) {
          pU = TU.removeMin();
          let UU = PU[pU];
          if (!UU || UU.distance === Number.POSITIVE_INFINITY) break;
          EU = UU, tU(pU).forEach(qU)
        }
        return PU
      }(UU, String(RU), gU || IU, tU || function(RU) {
        var gU;
        return null != (gU = UU.outEdges(RU)) ? gU : []
      })
    }

    function wU(UU, RU, gU) {
      return UU.nodes().reduce((function(tU, pU) {
        return tU[pU] = JU(UU, pU, RU, gU), tU
      }), {})
    }

    function nU(UU) {
      let RU = 0,
        gU = [],
        tU = {},
        pU = [];

      function EU(PU) {
        var TU;
        let qU = tU[PU] = {
          onStack: !0,
          lowlink: RU,
          index: RU++
        };
        if (gU.push(PU), null == (TU = UU.successors(PU)) || TU.forEach((function(UU) {
            if (UU in tU) {
              let RU = tU[UU];
              null != RU && RU.onStack && (qU.lowlink = Math.min(qU.lowlink, RU.index))
            } else {
              EU(UU);
              let RU = tU[UU];
              RU && (qU.lowlink = Math.min(qU.lowlink, RU.lowlink))
            }
          })), qU.lowlink === qU.index) {
          let UU, RU = [];
          do {
            UU = gU.pop();
            let pU = tU[UU];
            pU && (pU.onStack = !1), RU.push(UU)
          } while (PU !== UU);
          pU.push(RU)
        }
      }
      return UU.nodes().forEach((function(UU) {
        UU in tU || EU(UU)
      })), pU
    }

    function bU(UU) {
      return nU(UU).filter((function(RU) {
        var gU;
        let tU = RU[0];
        return !!tU && (RU.length > 1 || 1 === RU.length && (null != (gU = UU.outEdges(tU, tU)) ? gU : []).length > 0)
      }))
    }
    var oU = () => 1;

    function ZU(UU, RU, gU) {
      return function(UU, RU, gU) {
        let tU = {},
          pU = UU.nodes();
        return pU.forEach((function(UU) {
          let EU = {};
          tU[UU] = EU, EU[UU] = {
            distance: 0,
            predecessor: ""
          }, pU.forEach((function(RU) {
            UU !== RU && (EU[RU] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), gU(UU).forEach((function(gU) {
            let tU = gU.v === UU ? gU.w : gU.v,
              pU = RU(gU);
            EU[tU] = {
              distance: pU,
              predecessor: UU
            }
          }))
        })), pU.forEach((function(UU) {
          let RU = tU[UU];
          RU && pU.forEach((function(gU) {
            let EU = tU[gU];
            EU && pU.forEach((function(gU) {
              let tU = EU[UU],
                pU = RU[gU],
                PU = EU[gU];
              if (tU && pU && PU) {
                let UU = tU.distance + pU.distance;
                UU < PU.distance && (PU.distance = UU, PU.predecessor = pU.predecessor)
              }
            }))
          }))
        })), tU
      }(UU, RU || oU, gU || function(RU) {
        var gU;
        return null != (gU = UU.outEdges(RU)) ? gU : []
      })
    }
    var aU = class extends Error {
      constructor(UU) {
        super(UU), this.name = "CycleException"
      }
    };

    function YU(UU) {
      let RU = {},
        gU = {},
        tU = [];
      if (UU.sinks().forEach((function pU(EU) {
          var PU;
          if (EU in gU) throw new aU;
          EU in RU || (gU[EU] = !0, RU[EU] = !0, null == (PU = UU.predecessors(EU)) || PU.forEach(pU), delete gU[EU], tU.push(EU))
        })), Object.keys(RU).length !== UU.nodeCount()) throw new aU;
      return tU
    }

    function BU(UU) {
      try {
        YU(UU)
      } catch (RU) {
        if (RU instanceof aU) return !1;
        throw RU
      }
      return !0
    }

    function VU(UU, RU, gU, tU, pU) {
      Array.isArray(RU) || (RU = [RU]);
      let EU = RU => {
          var gU;
          return null != (gU = UU.isDirected() ? UU.successors(RU) : UU.neighbors(RU)) ? gU : []
        },
        PU = {};
      return RU.forEach((function(RU) {
        if (!UU.hasNode(RU)) throw new Error("Graph does not have node: " + RU);
        pU = rU(UU, RU, "post" === gU, PU, EU, tU, pU)
      })), pU
    }

    function rU(UU, RU, gU, tU, pU, EU, PU) {
      return RU in tU || (tU[RU] = !0, gU || (PU = EU(PU, RU)), pU(RU).forEach((function(RU) {
        PU = rU(UU, RU, gU, tU, pU, EU, PU)
      })), gU && (PU = EU(PU, RU))), PU
    }

    function XU(UU, RU, gU) {
      return VU(UU, RU, gU, (function(UU, RU) {
        return UU.push(RU), UU
      }), [])
    }

    function vU(UU, RU) {
      return XU(UU, RU, "post")
    }

    function dU(UU, RU) {
      return XU(UU, RU, "pre")
    }

    function HU(UU, RU) {
      var gU;
      let tU, pU = new qU,
        EU = {},
        PU = new mU;

      function TU(UU) {
        let gU = UU.v === tU ? UU.w : UU.v,
          pU = PU.priority(gU);
        if (void 0 !== pU) {
          let TU = RU(UU);
          TU < pU && (EU[gU] = tU, PU.decrease(gU, TU))
        }
      }
      if (0 === UU.nodeCount()) return pU;
      UU.nodes().forEach((function(UU) {
        PU.add(UU, Number.POSITIVE_INFINITY), pU.setNode(UU)
      }));
      let KU = UU.nodes()[0];
      void 0 !== KU && PU.decrease(KU, 0);
      let cU = !1;
      for (; PU.size() > 0;) {
        if (tU = PU.removeMin(), tU in EU) pU.setEdge(tU, EU[tU]);
        else {
          if (cU) throw new Error("Input graph is not connected: " + UU);
          cU = !0
        }
        null == (gU = UU.nodeEdges(tU)) || gU.forEach(TU)
      }
      return pU
    }

    function SU(UU, RU, gU, tU) {
      return function(UU, RU, gU, tU) {
        if (void 0 === gU) return JU(UU, RU, gU, tU);
        let pU = !1,
          EU = UU.nodes();
        for (let PU = 0; PU < EU.length; PU++) {
          let TU = EU[PU];
          if (void 0 === TU) continue;
          let qU = tU(TU);
          for (let UU = 0; UU < qU.length; UU++) {
            let RU = qU[UU];
            if (!RU) continue;
            let tU = RU.v === TU ? RU.v : RU.w;
            gU({
              v: tU,
              w: tU === RU.v ? RU.w : RU.v
            }) < 0 && (pU = !0)
          }
          if (pU) return fU(UU, RU, gU, tU)
        }
        return JU(UU, RU, gU, tU)
      }(UU, RU, gU, null != tU ? tU : RU => {
        var gU;
        return null != (gU = UU.outEdges(RU)) ? gU : []
      })
    }
    var sU = qU;

    function yU(UU, RU, gU, tU) {
      let pU = tU;
      for (; UU.hasNode(pU);) pU = OU(tU);
      return gU.dummy = RU, UU.setNode(pU, gU), pU
    }

    function kU(UU) {
      let RU = new sU({
        multigraph: UU.isMultigraph()
      }).setGraph(UU.graph());
      return UU.nodes().forEach((gU => {
        UU.children(gU).length || RU.setNode(gU, UU.node(gU))
      })), UU.edges().forEach((gU => {
        RU.setEdge(gU, UU.edge(gU))
      })), RU
    }

    function FU(UU, RU) {
      let gU, tU, pU = UU.x,
        EU = UU.y,
        PU = RU.x - pU,
        TU = RU.y - EU,
        qU = UU.width / 2,
        KU = UU.height / 2;
      if (!PU && !TU) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(TU) * qU > Math.abs(PU) * KU ? (TU < 0 && (KU = -KU), gU = KU * PU / TU, tU = KU) : (PU < 0 && (qU = -qU), gU = qU, tU = qU * TU / PU), {
        x: pU + gU,
        y: EU + tU
      }
    }

    function iU(UU) {
      let RU = UR(DU(UU) + 1).map((() => []));
      return UU.nodes().forEach((gU => {
        let tU = UU.node(gU),
          pU = tU.rank;
        void 0 !== pU && (RU[pU] || (RU[pU] = []), RU[pU][tU.order] = gU)
      })), RU
    }

    function AU(UU, RU, gU, tU) {
      let pU = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (pU.rank = gU, pU.order = tU), yU(UU, "border", pU, RU)
    }
    var zU = 65535;

    function MU(UU, RU) {
      if (RU.length > zU) {
        let gU = function(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zU,
            gU = [];
          for (let tU = 0; tU < UU.length; tU += RU) {
            let pU = UU.slice(tU, tU + RU);
            gU.push(pU)
          }
          return gU
        }(RU);
        return UU(...gU.map((RU => UU(...RU))))
      }
      return UU(...RU)
    }

    function DU(UU) {
      let RU = UU.nodes().map((RU => {
        let gU = UU.node(RU).rank;
        return void 0 === gU ? Number.MIN_VALUE : gU
      }));
      return MU(Math.max, RU)
    }

    function LU(UU, RU) {
      let gU = Date.now();
      try {
        return RU()
      } finally {
        console.log(UU + " time: " + (Date.now() - gU) + "ms")
      }
    }

    function NU(UU, RU) {
      return RU()
    }
    var lU = 0;

    function OU(UU) {
      return UU + "" + ++lU
    }

    function UR(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == RU && (RU = UU, UU = 0);
      let tU = UU => UU < RU;
      gU < 0 && (tU = UU => RU < UU);
      let pU = [];
      for (let EU = UU; tU(EU); EU += gU) pU.push(EU);
      return pU
    }

    function RR(UU, RU) {
      let gU = {};
      for (let tU of RU) void 0 !== UU[tU] && (gU[tU] = UU[tU]);
      return gU
    }

    function gR(UU, RU) {
      let gU;
      return gU = "string" == typeof RU ? UU => UU[RU] : RU, Object.entries(UU).reduce(((UU, RU) => {
        let [tU, pU] = RU;
        return UU[tU] = gU(pU, tU), UU
      }), {})
    }
    var tR = "\0";

    function pR(UU, RU, gU) {
      var tU, pU, EU, PU, TU, qU;
      if (!(UU && RU && gU && "edge" === RU.dummy && "edge" === gU.dummy && RU.edgeObj && gU.edgeObj && UU[RU.edgeObj.v] && UU[gU.edgeObj.v] && UU[RU.edgeObj.w] && UU[gU.edgeObj.w])) return 0;
      let KU = !0;
      RU.edgeObj.w === gU.edgeObj.w && (KU = !1);
      let cU = KU ? null != (pU = null == (tU = UU[RU.edgeObj.v]) ? void 0 : tU.rank) ? pU : NaN : null != (PU = null == (EU = UU[RU.edgeObj.w]) ? void 0 : EU.rank) ? PU : NaN,
        GU = Object.entries(UU).find((UU => {
          var gU, tU;
          return (null == (gU = UU[1].edgeObj) ? void 0 : gU.v) === RU.edgeObj.v && (null == (tU = UU[1].edgeObj) ? void 0 : tU.w) === RU.edgeObj.w && UU[1].rank === cU
        })),
        jU = Object.entries(UU).find((UU => {
          var RU, tU;
          return (null == (RU = UU[1].edgeObj) ? void 0 : RU.v) === gU.edgeObj.v && (null == (tU = UU[1].edgeObj) ? void 0 : tU.w) === gU.edgeObj.w && UU[1].rank === cU
        }));
      if (!GU || !jU) return 0;
      let uU = null != (TU = GU[1].order) ? TU : NaN,
        CU = null != (qU = jU[1].order) ? qU : NaN;
      return isNaN(uU - CU) ? 0 : uU - CU
    }
    var ER = "3.1.1";

    function PR(UU) {
      UU._prev._next = UU._next, UU._next._prev = UU._prev, delete UU._next, delete UU._prev
    }

    function TR(UU, RU) {
      if ("_next" !== UU && "_prev" !== UU) return RU
    }
    var qR = class {
        constructor() {
          pU(this, "_sentinel");
          let UU = {};
          UU._next = UU._prev = UU, this._sentinel = UU
        }
        dequeue() {
          let UU = this._sentinel,
            RU = UU._prev;
          if (RU !== UU) return PR(RU), RU
        }
        enqueue(UU) {
          let RU = this._sentinel;
          UU._prev && UU._next && PR(UU), UU._next = RU._next, RU._next._prev = UU, RU._next = UU, UU._prev = RU
        }
        toString() {
          let UU = [],
            RU = this._sentinel,
            gU = RU._prev;
          for (; gU !== RU;) UU.push(JSON.stringify(gU, TR)), gU = gU._prev;
          return "[" + UU.join(", ") + "]"
        }
      },
      KR = () => 1;

    function cR(UU, RU) {
      if (UU.nodeCount() <= 1) return [];
      let gU = function(UU, RU) {
        let gU = new sU,
          tU = 0,
          pU = 0;
        UU.nodes().forEach((UU => {
          gU.setNode(UU, {
            v: UU,
            in: 0,
            out: 0
          })
        })), UU.edges().forEach((UU => {
          let EU = gU.edge(UU.v, UU.w) || 0,
            PU = RU(UU),
            TU = EU + PU;
          gU.setEdge(UU.v, UU.w, TU);
          let qU = gU.node(UU.v),
            KU = gU.node(UU.w);
          pU = Math.max(pU, qU.out += PU), tU = Math.max(tU, KU.in += PU)
        }));
        let EU = function(UU) {
            let RU = [];
            for (let gU = 0; gU < UU; gU++) RU.push(gU);
            return RU
          }(pU + tU + 3).map((() => new qR)),
          PU = tU + 1;
        return gU.nodes().forEach((UU => {
          jR(EU, PU, gU.node(UU))
        })), {
          graph: gU,
          buckets: EU,
          zeroIdx: PU
        }
      }(UU, RU || KR);
      return function(UU, RU, gU) {
        var tU;
        let pU, EU = [],
          PU = RU[RU.length - 1],
          TU = RU[0];
        for (; UU.nodeCount();) {
          for (; pU = TU.dequeue();) GR(UU, RU, gU, pU);
          for (; pU = PU.dequeue();) GR(UU, RU, gU, pU);
          if (UU.nodeCount())
            for (let PU = RU.length - 2; PU > 0; --PU)
              if (pU = null == (tU = RU[PU]) ? void 0 : tU.dequeue(), pU) {
                EU = EU.concat(GR(UU, RU, gU, pU, !0) || []);
                break
              }
        }
        return EU
      }(gU.graph, gU.buckets, gU.zeroIdx).flatMap((RU => UU.outEdges(RU.v, RU.w) || []))
    }

    function GR(UU, RU, gU, tU, pU) {
      let EU = [],
        PU = pU ? EU : void 0;
      return (UU.inEdges(tU.v) || []).forEach((tU => {
        let PU = UU.edge(tU),
          TU = UU.node(tU.v);
        pU && EU.push({
          v: tU.v,
          w: tU.w
        }), TU.out -= PU, jR(RU, gU, TU)
      })), (UU.outEdges(tU.v) || []).forEach((tU => {
        let pU = UU.edge(tU),
          EU = tU.w,
          PU = UU.node(EU);
        PU.in -= pU, jR(RU, gU, PU)
      })), UU.removeNode(tU.v), PU
    }

    function jR(UU, RU, gU) {
      var tU, pU, EU;
      gU.out ? gU.in ? null == (EU = UU[gU.out - gU.in + RU]) || EU.enqueue(gU) : null == (pU = UU[UU.length - 1]) || pU.enqueue(gU) : null == (tU = UU[0]) || tU.enqueue(gU)
    }

    function uR(UU, RU) {
      var gU;
      ("greedy" === UU.graph().acyclicer ? cR(UU, (gU = UU, UU => gU.edge(UU).weight)) : function(UU, RU) {
        let gU = [],
          tU = {},
          pU = {};

        function EU(RU) {
          Object.hasOwn(pU, RU) || (pU[RU] = !0, tU[RU] = !0, UU.outEdges(RU).forEach((UU => {
            Object.hasOwn(tU, UU.w) ? gU.push(UU) : EU(UU.w)
          })), delete tU[RU])
        }

        function PU(EU) {
          var TU;
          Object.hasOwn(pU, EU) || (pU[EU] = !0, tU[EU] = !0, null == (TU = UU.outEdges(EU)) || TU.forEach((pU => {
            var TU, qU;
            Object.hasOwn(tU, pU.w) || (null == (TU = RU.node(EU)) ? void 0 : TU.rank) > (null == (qU = RU.node(pU.w)) ? void 0 : qU.rank) && function(UU, RU, gU) {
              let tU = new Set;

              function pU(RU) {
                var EU;
                if (UU.sources().includes(RU)) return !0;
                tU.add(RU);
                for (let PU of null != (EU = UU.inEdges(RU)) ? EU : [])
                  if ((PU.v !== gU.v || PU.w !== gU.w) && !tU.has(PU.v) && pU(PU.v)) return !0;
                return !1
              }
              return pU(RU)
            }(UU, pU.w, pU) ? gU.push(pU) : PU(pU.w)
          })), delete tU[EU])
        }
        let TU = EU;
        return RU && "function" == typeof RU.node && (TU = PU), UU.sources().forEach(TU), UU.nodes().forEach(TU), gU
      }(UU, null != RU ? RU : null)).forEach((RU => {
        let gU = UU.edge(RU);
        UU.removeEdge(RU), gU.forwardName = RU.name, gU.reversed = !0, UU.setEdge(RU.w, RU.v, gU, OU("rev"))
      }))
    }

    function CR(UU) {
      UU.graph().dummyChains = [], UU.edges().forEach((RU => function(UU, RU) {
        let gU, tU, pU, EU = RU.v,
          PU = UU.node(EU).rank,
          TU = RU.w,
          qU = UU.node(TU).rank,
          KU = RU.name,
          cU = UU.edge(RU),
          GU = cU.labelRank;
        if (qU === PU + 1) return;
        for (UU.removeEdge(RU), pU = 0, ++PU; PU < qU; ++pU, ++PU) cU.points = [], tU = {
          width: 0,
          height: 0,
          edgeLabel: cU,
          edgeObj: RU,
          rank: PU
        }, gU = yU(UU, "edge", tU, "_d"), PU === GU && (tU.width = cU.width, tU.height = cU.height, tU.dummy = "edge-label", tU.labelpos = cU.labelpos), UU.setEdge(EU, gU, {
          weight: cU.weight
        }, KU), 0 === pU && UU.graph().dummyChains.push(gU), EU = gU;
        UU.setEdge(EU, TU, {
          weight: cU.weight
        }, KU)
      }(UU, RU)))
    }

    function hR(UU) {
      let RU = {};
      UU.sources().forEach((function gU(tU) {
        let pU = UU.node(tU);
        if (Object.hasOwn(RU, tU)) return pU.rank;
        RU[tU] = !0;
        let EU = UU.outEdges(tU),
          PU = EU ? EU.map((RU => null == RU ? Number.POSITIVE_INFINITY : gU(RU.w) - UU.edge(RU).minlen)) : [],
          TU = MU(Math.min, PU);
        return TU === Number.POSITIVE_INFINITY && (TU = 0), pU.rank = TU
      }))
    }

    function QR(UU, RU) {
      return UU.node(RU.w).rank - UU.node(RU.v).rank - UU.edge(RU).minlen
    }
    var eR = function(UU) {
      let RU = new sU({
          directed: !1
        }),
        gU = UU.nodes();
      if (0 === gU.length) throw new Error("Graph must have at least one node");
      let tU, pU, EU = gU[0],
        PU = UU.nodeCount();
      for (RU.setNode(EU, {}); WR(RU, UU) < PU && (tU = fR(RU, UU), tU);) pU = RU.hasNode(tU.v) ? QR(UU, tU) : -QR(UU, tU), xR(RU, UU, pU);
      return RU
    };

    function WR(UU, RU) {
      return UU.nodes().forEach((function gU(tU) {
        let pU = RU.nodeEdges(tU);
        pU && pU.forEach((pU => {
          let EU = pU.v,
            PU = tU === EU ? pU.w : EU;
          !UU.hasNode(PU) && !QR(RU, pU) && (UU.setNode(PU, {}), UU.setEdge(tU, PU, {}), gU(PU))
        }))
      })), UU.nodeCount()
    }

    function fR(UU, RU) {
      return RU.edges().reduce(((gU, tU) => {
        let pU = Number.POSITIVE_INFINITY;
        return UU.hasNode(tU.v) !== UU.hasNode(tU.w) && (pU = QR(RU, tU)), pU < gU[0] ? [pU, tU] : gU
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function xR(UU, RU, gU) {
      UU.nodes().forEach((UU => RU.node(UU).rank += gU))
    }
    var {
      preorder: mR,
      postorder: IR
    } = eU, JR = wR;

    function wR(UU) {
      UU = function(UU) {
        let RU = (new sU).setGraph(UU.graph());
        return UU.nodes().forEach((gU => RU.setNode(gU, UU.node(gU)))), UU.edges().forEach((gU => {
          let tU = RU.edge(gU.v, gU.w) || {
              weight: 0,
              minlen: 1
            },
            pU = UU.edge(gU);
          RU.setEdge(gU.v, gU.w, {
            weight: tU.weight + pU.weight,
            minlen: Math.max(tU.minlen, pU.minlen)
          })
        })), RU
      }(UU), hR(UU);
      let RU, gU, tU = eR(UU);
      for (oR(tU), nR(tU, UU); RU = aR(tU);) gU = YR(tU, UU, RU), BR(tU, UU, RU, gU)
    }

    function nR(UU, RU) {
      let gU = IR(UU, UU.nodes());
      gU = gU.slice(0, gU.length - 1), gU.forEach((gU => function(UU, RU, gU) {
        let tU = UU.node(gU).parent,
          pU = UU.edge(gU, tU);
        pU.cutvalue = bR(UU, RU, gU)
      }(UU, RU, gU)))
    }

    function bR(UU, RU, gU) {
      let tU = UU.node(gU).parent,
        pU = !0,
        EU = RU.edge(gU, tU),
        PU = 0;
      EU || (pU = !1, EU = RU.edge(tU, gU)), PU = EU.weight;
      let TU = RU.nodeEdges(gU);
      return TU && TU.forEach((EU => {
        let TU = EU.v === gU,
          qU = TU ? EU.w : EU.v;
        if (qU !== tU) {
          let tU = TU === pU,
            KU = RU.edge(EU).weight;
          if (PU += tU ? KU : -KU, function(UU, RU, gU) {
              return UU.hasEdge(RU, gU)
            }(UU, gU, qU)) {
            let RU = UU.edge(gU, qU).cutvalue;
            PU += tU ? -RU : RU
          }
        }
      })), PU
    }

    function oR(UU, RU) {
      arguments.length < 2 && (RU = UU.nodes()[0]), ZR(UU, {}, 1, RU)
    }

    function ZR(UU, RU, gU, tU, pU) {
      let EU = gU,
        PU = UU.node(tU);
      RU[tU] = !0;
      let TU = UU.neighbors(tU);
      return TU && TU.forEach((pU => {
        Object.hasOwn(RU, pU) || (gU = ZR(UU, RU, gU, pU, tU))
      })), PU.low = EU, PU.lim = gU++, pU ? PU.parent = pU : delete PU.parent, gU
    }

    function aR(UU) {
      return UU.edges().find((RU => UU.edge(RU).cutvalue < 0))
    }

    function YR(UU, RU, gU) {
      let tU = gU.v,
        pU = gU.w;
      RU.hasEdge(tU, pU) || (tU = gU.w, pU = gU.v);
      let EU = UU.node(tU),
        PU = UU.node(pU),
        TU = EU,
        qU = !1;
      return EU.lim > PU.lim && (TU = PU, qU = !0), RU.edges().filter((RU => qU === VR(UU, UU.node(RU.v), TU) && qU !== VR(UU, UU.node(RU.w), TU))).reduce(((UU, gU) => QR(RU, gU) < QR(RU, UU) ? gU : UU))
    }

    function BR(UU, RU, gU, tU) {
      let pU = gU.v,
        EU = gU.w;
      UU.removeEdge(pU, EU), UU.setEdge(tU.v, tU.w, {}), oR(UU), nR(UU, RU),
        function(UU, RU) {
          let gU = UU.nodes().find((RU => !UU.node(RU).parent));
          if (!gU) return;
          let tU = mR(UU, [gU]);
          tU = tU.slice(1), tU.forEach((gU => {
            let tU = UU.node(gU).parent,
              pU = RU.edge(gU, tU),
              EU = !1;
            pU || (pU = RU.edge(tU, gU), EU = !0), RU.node(gU).rank = RU.node(tU).rank + (EU ? pU.minlen : -pU.minlen)
          }))
        }(UU, RU)
    }

    function VR(UU, RU, gU) {
      return gU.low <= RU.lim && RU.lim <= gU.lim
    }
    wR.initLowLimValues = oR, wR.initCutValues = nR, wR.calcCutValue = bR, wR.leaveEdge = aR, wR.enterEdge = YR, wR.exchangeEdges = BR;
    var rR = function(UU) {
      let RU = UU.graph().ranker;
      if ("function" == typeof RU) return RU(UU);
      switch (RU) {
        case "network-simplex":
        default:
          vR(UU);
          break;
        case "tight-tree":
          ! function(UU) {
            hR(UU), eR(UU)
          }(UU);
          break;
        case "longest-path":
          XR(UU);
        case "none":
      }
    };
    var XR = hR;

    function vR(UU) {
      JR(UU)
    }
    var dR = function(UU) {
      let RU = function(UU) {
          let RU = {},
            gU = 0;

          function tU(pU) {
            let EU = gU;
            UU.children(pU).forEach(tU), RU[pU] = {
              low: EU,
              lim: gU++
            }
          }
          return UU.children(tR).forEach(tU), RU
        }(UU),
        gU = UU.graph();
      if (!Array.isArray(gU.dummyChains)) return;
      gU.dummyChains.forEach((gU => {
        let tU = UU.node(gU),
          pU = tU.edgeObj,
          EU = function(UU, RU, gU, tU) {
            let pU, EU = [],
              PU = [],
              TU = Math.min(RU[gU].low, RU[tU].low),
              qU = Math.max(RU[gU].lim, RU[tU].lim);
            pU = gU;
            do {
              pU = UU.parent(pU), EU.push(pU)
            } while (pU && (RU[pU].low > TU || qU > RU[pU].lim));
            let KU = pU,
              cU = tU;
            for (;
              (cU = UU.parent(cU)) !== KU;) PU.push(cU);
            return {
              path: EU.concat(PU.reverse()),
              lca: KU
            }
          }(UU, RU, pU.v, pU.w),
          PU = EU.path,
          TU = EU.lca,
          qU = 0,
          KU = PU[qU],
          cU = !0;
        for (; gU !== pU.w;) {
          if (tU = UU.node(gU), cU) {
            for (;
              (KU = PU[qU]) !== TU && UU.node(KU).maxRank < tU.rank;) qU++;
            KU === TU && (cU = !1)
          }
          if (!cU) {
            for (; qU < PU.length - 1 && UU.node(PU[qU + 1]).minRank <= tU.rank;) qU++;
            KU = PU[qU]
          }
          void 0 !== KU && UU.setParent(gU, KU), gU = UU.successors(gU)[0]
        }
      }))
    };

    function HR(UU) {
      let RU = yU(UU, "root", {}, "_root"),
        gU = function(UU) {
          let RU = {};

          function gU(tU, pU) {
            let EU = UU.children(tU);
            EU && EU.length && EU.forEach((UU => gU(UU, pU + 1))), RU[tU] = pU
          }
          return UU.children(tR).forEach((UU => gU(UU, 1))), RU
        }(UU),
        tU = Object.values(gU),
        pU = MU(Math.max, tU) - 1,
        EU = 2 * pU + 1;
      UU.graph().nestingRoot = RU, UU.edges().forEach((RU => UU.edge(RU).minlen *= EU));
      let PU = function(UU) {
        return UU.edges().reduce(((RU, gU) => RU + UU.edge(gU).weight), 0)
      }(UU) + 1;
      UU.children(tR).forEach((tU => {
        SR(UU, RU, EU, PU, pU, gU, tU)
      })), UU.graph().nodeRankFactor = EU
    }

    function SR(UU, RU, gU, tU, pU, EU, PU) {
      var TU;
      let qU = UU.children(PU);
      if (!qU.length) return void(PU !== RU && UU.setEdge(RU, PU, {
        weight: 0,
        minlen: gU
      }));
      let KU = AU(UU, "_bt"),
        cU = AU(UU, "_bb"),
        GU = UU.node(PU);
      UU.setParent(KU, PU), GU.borderTop = KU, UU.setParent(cU, PU), GU.borderBottom = cU, qU.forEach((TU => {
        var qU;
        SR(UU, RU, gU, tU, pU, EU, TU);
        let GU = UU.node(TU),
          jU = GU.borderTop ? GU.borderTop : TU,
          uU = GU.borderBottom ? GU.borderBottom : TU,
          CU = GU.borderTop ? tU : 2 * tU,
          hU = jU !== uU ? 1 : pU - (null != (qU = EU[PU]) ? qU : 0) + 1;
        UU.setEdge(KU, jU, {
          weight: CU,
          minlen: hU,
          nestingEdge: !0
        }), UU.setEdge(uU, cU, {
          weight: CU,
          minlen: hU,
          nestingEdge: !0
        })
      })), UU.parent(PU) || UU.setEdge(RU, KU, {
        weight: 0,
        minlen: pU + (null != (TU = EU[PU]) ? TU : 0)
      })
    }
    var sR = function(UU) {
      UU.children(tR).forEach((function RU(gU) {
        let tU = UU.children(gU),
          pU = UU.node(gU);
        if (tU.length && tU.forEach(RU), pU && Object.hasOwn(pU, "minRank")) {
          pU.borderLeft = [], pU.borderRight = [];
          for (let RU = pU.minRank, tU = pU.maxRank + 1; RU < tU; ++RU) yR(UU, "borderLeft", "_bl", gU, pU, RU), yR(UU, "borderRight", "_br", gU, pU, RU)
        }
      }))
    };

    function yR(UU, RU, gU, tU, pU, EU) {
      let PU = {
          width: 0,
          height: 0,
          rank: EU,
          borderType: RU
        },
        TU = pU[RU][EU - 1],
        qU = yU(UU, "border", PU, gU);
      pU[RU][EU] = qU, UU.setParent(qU, tU), TU && UU.setEdge(TU, qU, {
        weight: 1
      })
    }

    function kR(UU) {
      var RU;
      let gU = null == (RU = UU.graph().rankdir) ? void 0 : RU.toLowerCase();
      ("bt" === gU || "rl" === gU) && function(UU) {
        UU.nodes().forEach((RU => AR(UU.node(RU)))), UU.edges().forEach((RU => {
          var gU;
          let tU = UU.edge(RU);
          null == (gU = tU.points) || gU.forEach(AR), Object.hasOwn(tU, "y") && AR(tU)
        }))
      }(UU), ("lr" === gU || "rl" === gU) && (function(UU) {
        UU.nodes().forEach((RU => zR(UU.node(RU)))), UU.edges().forEach((RU => {
          var gU;
          let tU = UU.edge(RU);
          null == (gU = tU.points) || gU.forEach(zR), Object.hasOwn(tU, "x") && zR(tU)
        }))
      }(UU), FR(UU))
    }

    function FR(UU) {
      UU.nodes().forEach((RU => iR(UU.node(RU)))), UU.edges().forEach((RU => iR(UU.edge(RU))))
    }

    function iR(UU) {
      let RU = UU.width;
      UU.width = UU.height, UU.height = RU
    }

    function AR(UU) {
      UU.y = -UU.y
    }

    function zR(UU) {
      let RU = UU.x;
      UU.x = UU.y, UU.y = RU
    }

    function MR(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        gU = {},
        tU = UU.nodes().filter((RU => !UU.children(RU).length)),
        pU = tU.map((RU => UU.node(RU).rank)),
        EU = UR(MU(Math.max, pU) + 1).map((() => []));
      return tU.sort(((RU, gU) => UU.node(RU).rank - UU.node(gU).rank)).forEach((function tU(pU) {
        if (gU[pU]) return;
        gU[pU] = !0;
        let PU = UU.node(pU);
        EU[PU.rank].push(pU);
        let TU = UU.successors(pU);
        TU && [...TU].sort(((gU, tU) => function(gU, tU) {
          let pU = UU.node(gU),
            EU = UU.node(tU);
          return pR(RU, pU, EU)
        }(gU, tU))).forEach(tU)
      })), EU
    }

    function DR(UU, RU) {
      let gU = 0;
      for (let tU = 1; tU < RU.length; ++tU) gU += LR(UU, RU[tU - 1], RU[tU]);
      return gU
    }

    function LR(UU, RU, gU) {
      let tU = function(UU, RU) {
          return UU.reduce(((UU, gU, tU) => (UU[gU] = RU[tU], UU)), {})
        }(gU, gU.map(((UU, RU) => RU))),
        pU = RU.flatMap((RU => {
          let gU = UU.outEdges(RU);
          return gU ? gU.map((RU => ({
            pos: tU[RU.w],
            weight: UU.edge(RU).weight
          }))).sort(((UU, RU) => UU.pos - RU.pos)) : []
        })),
        EU = 1;
      for (; EU < gU.length;) EU <<= 1;
      let PU = 2 * EU - 1;
      EU -= 1;
      let TU = new Array(PU).fill(0),
        qU = 0;
      return pU.forEach((UU => {
        let RU = UU.pos + EU;
        TU[RU] += UU.weight;
        let gU = 0;
        for (; RU > 0;) RU % 2 && (gU += TU[RU + 1]), RU = RU - 1 >> 1, TU[RU] += UU.weight;
        qU += UU.weight * gU
      })), qU
    }

    function NR(UU, RU) {
      let gU = {};
      return UU.forEach(((UU, RU) => {
          let tU = {
            indegree: 0,
            in: [],
            out: [],
            vs: [UU.v],
            i: RU
          };
          void 0 !== UU.barycenter && (tU.barycenter = UU.barycenter, tU.weight = UU.weight), gU[UU.v] = tU
        })), RU.edges().forEach((UU => {
          let RU = gU[UU.v],
            tU = gU[UU.w];
          void 0 !== RU && void 0 !== tU && (tU.indegree++, RU.out.push(tU))
        })),
        function(UU) {
          let RU = [];

          function gU(UU) {
            return RU => {
              RU.merged || (void 0 === RU.barycenter || void 0 === UU.barycenter || RU.barycenter >= UU.barycenter) && function(UU, RU) {
                let gU = 0,
                  tU = 0;
                UU.weight && (gU += UU.barycenter * UU.weight, tU += UU.weight), RU.weight && (gU += RU.barycenter * RU.weight, tU += RU.weight), UU.vs = RU.vs.concat(UU.vs), UU.barycenter = gU / tU, UU.weight = tU, UU.i = Math.min(RU.i, UU.i), RU.merged = !0
              }(UU, RU)
            }
          }

          function tU(RU) {
            return gU => {
              gU.in.push(RU), 0 === --gU.indegree && UU.push(gU)
            }
          }
          for (; UU.length;) {
            let pU = UU.pop();
            RU.push(pU), pU.in.reverse().forEach(gU(pU)), pU.out.forEach(tU(pU))
          }
          return RU.filter((UU => !UU.merged)).map((UU => RR(UU, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(gU).filter((UU => !UU.indegree)))
    }

    function lR(UU, RU, gU, tU, pU) {
      let EU = {},
        PU = null,
        TU = null,
        qU = pU;
      "boolean" == typeof RU ? (qU = RU, EU = {}) : RU && (EU = RU, PU = null != gU ? gU : null, TU = null != tU ? tU : null);
      let KU = function(UU, RU) {
          let gU = {
            lhs: [],
            rhs: []
          };
          return UU.forEach((UU => {
            RU(UU) ? gU.lhs.push(UU) : gU.rhs.push(UU)
          })), gU
        }(UU, (UU => Object.hasOwn(UU, "barycenter"))),
        cU = KU.lhs,
        GU = KU.rhs.sort(((UU, RU) => RU.i - UU.i)),
        jU = [],
        uU = 0,
        CU = 0,
        hU = 0;
      cU.sort(function(UU, RU, gU) {
        return (tU, pU) => {
          if (tU.barycenter < pU.barycenter) return -1;
          if (tU.barycenter > pU.barycenter) return 1;
          if (UU && ("string" == typeof tU.vs[0] || "string" == typeof pU.vs[0])) {
            let gU = UU.node(tU.vs[0]),
              EU = UU.node(pU.vs[0]),
              PU = pR(RU, gU, EU);
            if (0 !== PU) return PU
          }
          return gU ? pU.i - tU.i : tU.i - pU.i
        }
      }(TU, PU, !!qU));
      for (let [eU, WU] of Object.entries(EU)) {
        let UU = cU.findIndex((UU => UU.vs[0] === eU));
        cU.splice(UU + 1, 0, WU)
      }
      hU = OR(jU, GU, hU), cU.forEach((UU => {
        hU += UU.vs.length, jU.push(UU.vs), uU += UU.barycenter * UU.weight, CU += UU.weight, hU = OR(jU, GU, hU)
      }));
      let QU = {
        vs: jU.flat(1)
      };
      return CU && (QU.barycenter = uU / CU, QU.weight = CU), QU
    }

    function OR(UU, RU, gU) {
      let tU;
      for (; RU.length && (tU = RU[RU.length - 1]).i <= gU;) RU.pop(), UU.push(tU.vs), gU++;
      return gU
    }

    function Ug(UU, RU, gU, tU, pU) {
      var EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU;
      let QU = null,
        eU = pU;
      "boolean" == typeof tU ? (eU = tU, QU = null) : void 0 !== tU && (QU = tU);
      let WU = UU.children(RU),
        fU = UU.node(RU),
        xU = fU ? fU.borderLeft : void 0,
        mU = fU ? fU.borderRight : void 0,
        IU = {};
      xU && (WU = WU.filter((UU => UU !== xU && UU !== mU)));
      let JU = function(UU) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((RU => {
          let gU = UU.inEdges(RU);
          if (!gU || !gU.length) return {
            v: RU
          };
          {
            let tU = gU.reduce(((RU, gU) => {
              let tU = UU.edge(gU),
                pU = UU.node(gU.v);
              return {
                sum: RU.sum + tU.weight * pU.order,
                weight: RU.weight + tU.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: RU,
              barycenter: tU.sum / tU.weight,
              weight: tU.weight
            }
          }
        }))
      }(UU, WU);
      JU.forEach((RU => {
        if (UU.children(RU.v).length) {
          let {
            result: tU
          } = Ug(UU, RU.v, gU, QU, eU);
          IU[RU.v] = tU, Object.hasOwn(tU, "barycenter") && function(UU, RU) {
            void 0 !== UU.barycenter ? (UU.barycenter = (UU.barycenter * UU.weight + RU.barycenter * RU.weight) / (UU.weight + RU.weight), UU.weight += RU.weight) : (UU.barycenter = RU.barycenter, UU.weight = RU.weight)
          }(RU, tU)
        }
      }));
      let wU = NR(JU, gU);
      ! function(UU, RU) {
        UU.forEach((UU => {
          UU.vs = UU.vs.flatMap((UU => RU[UU] ? RU[UU].vs : UU))
        }))
      }(wU, IU);
      let nU = {},
        bU = !1;
      for (let ZU = 0; ZU < wU.length; ZU++)
        for (let RU = ZU + 1; RU < wU.length; RU++)
          if (wU[ZU] && wU[RU] && null != (EU = wU[ZU]) && EU.barycenter && null != (PU = wU[RU]) && PU.barycenter && (null == (TU = wU[ZU]) ? void 0 : TU.barycenter) === wU[RU].barycenter) {
            let gU = null != (KU = null == (qU = wU[ZU]) ? void 0 : qU.vs[0]) ? KU : "",
              tU = null != (GU = null == (cU = wU[RU]) ? void 0 : cU.vs[0]) ? GU : "",
              pU = UU.node(gU),
              EU = UU.node(tU);
            if ("edge" === pU.dummy && "edge" === EU.dummy && (null == (jU = pU.edgeObj) ? void 0 : jU.v) === (null == (uU = EU.edgeObj) ? void 0 : uU.v) && (null == (CU = pU.edgeObj) ? void 0 : CU.w) === (null == (hU = EU.edgeObj) ? void 0 : hU.w)) {
              if (pU.edgeLabel.reversed) {
                nU[tU] = wU[ZU], wU.splice(ZU, 1), ZU--;
                break
              }
              nU[gU] = wU[RU], wU.splice(RU, 1), RU--
            } else bU = !0
          } let oU = lR(wU, nU, QU, UU, eU);
      if (xU && mU) {
        oU.vs = [xU, oU.vs, mU].flat(1);
        let RU = UU.predecessors(xU);
        if (RU && RU.length) {
          let gU = UU.node(RU[0]),
            tU = UU.predecessors(mU),
            pU = UU.node(tU[0]);
          Object.hasOwn(oU, "barycenter") || (oU.barycenter = 0, oU.weight = 0), oU.barycenter = (oU.barycenter * oU.weight + gU.order + pU.order) / (oU.weight + 2), oU.weight += 2
        }
      }
      return Object.defineProperty(oU, "result", {
        value: oU,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(oU, "usedBias", {
        value: bU,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), oU
    }

    function Rg(UU, RU, gU, tU) {
      tU || (tU = UU.nodes());
      let pU = function(UU) {
          let RU;
          for (; UU.hasNode(RU = OU("_root")););
          return RU
        }(UU),
        EU = new sU({
          compound: !0
        }).setGraph({
          root: pU
        }).setDefaultNodeLabel((RU => UU.node(RU)));
      return tU.forEach((tU => {
        let PU = UU.node(tU),
          TU = UU.parent(tU);
        if (PU.rank === RU || PU.minRank <= RU && RU <= PU.maxRank) {
          EU.setNode(tU), EU.setParent(tU, TU || pU);
          let qU = UU[gU](tU);
          qU && qU.forEach((RU => {
            let gU = RU.v === tU ? RU.w : RU.v,
              pU = EU.edge(gU, tU),
              PU = void 0 !== pU ? pU.weight : 0;
            EU.setEdge(gU, tU, {
              weight: UU.edge(RU).weight + PU
            })
          })), Object.hasOwn(PU, "minRank") && EU.setNode(tU, {
            borderLeft: PU.borderLeft[RU],
            borderRight: PU.borderRight[RU]
          })
        }
      })), EU
    }

    function gg(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof RU.customOrder) return void RU.customOrder(UU, gg);
      let tU = DU(UU),
        pU = tg(UU, UR(1, tU + 1), "inEdges"),
        EU = tg(UU, UR(tU - 1, -1, -1), "outEdges"),
        PU = MR(UU, gU);
      if (Eg(UU, PU), RU.disableOptimalOrderHeuristic) return;
      let TU, qU = Number.POSITIVE_INFINITY,
        KU = RU.constraints || [];
      for (let cU = 0, GU = 0; GU < 4; ++cU, ++GU) {
        pg(cU % 2 ? pU : EU, cU % 4 >= 2, KU, gU), PU = iU(UU);
        let RU = DR(UU, PU);
        RU < qU ? (GU = 0, TU = Object.assign({}, PU), qU = RU) : RU === qU && (TU = structuredClone(PU))
      }
      Eg(UU, TU)
    }

    function tg(UU, RU, gU) {
      let tU = new Map,
        pU = (UU, RU) => {
          tU.has(UU) || tU.set(UU, []), tU.get(UU).push(RU)
        };
      for (let EU of UU.nodes()) {
        let RU = UU.node(EU);
        if ("number" == typeof RU.rank && pU(RU.rank, EU), "number" == typeof RU.minRank && "number" == typeof RU.maxRank)
          for (let UU = RU.minRank; UU <= RU.maxRank; UU++) UU !== RU.rank && pU(UU, EU)
      }
      return RU.map((function(RU) {
        return Rg(UU, RU, gU, tU.get(RU) || [])
      }))
    }

    function pg(UU, RU, gU, tU) {
      let pU = !0,
        EU = new sU;
      UU.forEach((function(UU) {
        gU.forEach((UU => EU.setEdge(UU.left, UU.right)));
        let PU = UU.graph().root,
          {
            result: TU,
            usedBias: qU
          } = Ug(UU, PU, EU, tU, pU);
        RU && qU && (pU = !pU), TU.vs.forEach(((RU, gU) => UU.node(RU).order = gU)),
          function(UU, RU, gU) {
            let tU, pU = {};
            gU.forEach((gU => {
              let EU, PU, TU = UU.parent(gU);
              for (; TU;) {
                if (EU = UU.parent(TU), EU ? (PU = pU[EU], pU[EU] = TU) : (PU = tU, tU = TU), PU && PU !== TU) return void RU.setEdge(PU, TU);
                TU = EU
              }
            }))
          }(UU, EU, TU.vs)
      }))
    }

    function Eg(UU, RU) {
      Object.values(RU).forEach((RU => RU.forEach(((RU, gU) => UU.node(RU).order = gU))))
    }

    function Pg(UU, RU, gU) {
      if (RU > gU) {
        let UU = RU;
        RU = gU, gU = UU
      }
      let tU = UU[RU];
      tU || (UU[RU] = tU = {}), tU[gU] = !0
    }

    function Tg(UU, RU, gU) {
      if (RU > gU) {
        let UU = RU;
        RU = gU, gU = UU
      }
      let tU = UU[RU];
      return void 0 !== tU && Object.hasOwn(tU, gU)
    }

    function qg(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        EU = {},
        PU = function(UU, RU, gU, tU) {
          let pU = new sU,
            EU = UU.graph(),
            PU = function(UU, RU, gU) {
              return (tU, pU, EU) => {
                let PU, TU = tU.node(pU),
                  qU = tU.node(EU),
                  KU = 0;
                if (KU += TU.width / 2, Object.hasOwn(TU, "labelpos")) switch (TU.labelpos.toLowerCase()) {
                  case "l":
                    PU = -TU.width / 2;
                    break;
                  case "r":
                    PU = TU.width / 2
                }
                if (PU && (KU += gU ? PU : -PU), PU = void 0, KU += (TU.dummy ? RU : UU) / 2, KU += (qU.dummy ? RU : UU) / 2, KU += qU.width / 2, Object.hasOwn(qU, "labelpos")) switch (qU.labelpos.toLowerCase()) {
                  case "l":
                    PU = qU.width / 2;
                    break;
                  case "r":
                    PU = -qU.width / 2
                }
                return PU && (KU += gU ? PU : -PU), KU
              }
            }(EU.nodesep, EU.edgesep, tU);
          return RU.forEach((RU => {
            let tU;
            RU.forEach((RU => {
              let EU = gU[RU];
              if (void 0 !== EU) {
                if (pU.setNode(EU), void 0 !== tU) {
                  let TU = gU[tU];
                  if (void 0 !== TU) {
                    let gU = pU.edge(TU, EU);
                    pU.setEdge(TU, EU, Math.max(PU(UU, RU, tU), gU || 0))
                  }
                }
                tU = RU
              }
            }))
          })), pU
        }(UU, RU, gU, pU),
        TU = pU ? "borderLeft" : "borderRight";

      function qU(UU, RU) {
        let gU = PU.nodes().slice(),
          tU = {},
          pU = gU.pop();
        for (; pU;) {
          if (tU[pU]) UU(pU);
          else {
            tU[pU] = !0, gU.push(pU);
            for (let UU of RU(pU)) gU.push(UU)
          }
          pU = gU.pop()
        }
      }
      return qU((function(UU) {
        let RU = PU.inEdges(UU);
        EU[UU] = RU ? RU.reduce(((UU, RU) => {
          var gU;
          let tU = null != (gU = EU[RU.v]) ? gU : 0,
            pU = PU.edge(RU);
          return Math.max(UU, tU + (void 0 !== pU ? pU : 0))
        }), 0) : 0
      }), (function(UU) {
        return PU.predecessors(UU) || []
      })), qU((function(RU) {
        let gU = PU.outEdges(RU),
          tU = Number.POSITIVE_INFINITY;
        gU && (tU = gU.reduce(((UU, RU) => {
          let gU = EU[RU.w],
            tU = PU.edge(RU);
          return Math.min(UU, (void 0 !== gU ? gU : 0) - (void 0 !== tU ? tU : 0))
        }), Number.POSITIVE_INFINITY));
        let pU = UU.node(RU);
        tU !== Number.POSITIVE_INFINITY && pU.borderType !== TU && (EU[RU] = Math.max(void 0 !== EU[RU] ? EU[RU] : 0, tU))
      }), (function(UU) {
        return PU.successors(UU) || []
      })), Object.keys(tU).forEach((UU => {
        var RU;
        let tU = gU[UU];
        void 0 !== tU && (EU[UU] = null != (RU = EU[tU]) ? RU : 0)
      })), EU
    }

    function Kg(UU, RU) {
      let gU, tU = iU(UU),
        pU = Object.assign(function(UU, RU) {
          let gU = {};
          return RU.length && RU.reduce((function(RU, tU) {
            let pU = 0,
              EU = 0,
              PU = RU.length,
              TU = tU[tU.length - 1];
            return tU.forEach(((RU, qU) => {
              let KU = function(UU, RU) {
                  if (UU.node(RU).dummy) {
                    let gU = UU.predecessors(RU);
                    if (gU) return gU.find((RU => UU.node(RU).dummy))
                  }
                }(UU, RU),
                cU = KU ? UU.node(KU).order : PU;
              (KU || RU === TU) && (tU.slice(EU, qU + 1).forEach((RU => {
                let tU = UU.predecessors(RU);
                tU && tU.forEach((tU => {
                  let EU = UU.node(tU),
                    PU = EU.order;
                  (PU < pU || cU < PU) && (!EU.dummy || !UU.node(RU).dummy) && Pg(gU, tU, RU)
                }))
              })), EU = qU + 1, pU = cU)
            })), tU
          })), gU
        }(UU, tU), function(UU, RU) {
          let gU = {};

          function tU(RU, tU, pU, EU, PU) {
            UR(tU, pU).forEach((tU => {
              let pU = RU[tU];
              if (void 0 !== pU && UU.node(pU).dummy) {
                let RU = UU.predecessors(pU);
                RU && RU.forEach((RU => {
                  if (void 0 === RU) return;
                  let tU = UU.node(RU);
                  tU.dummy && (tU.order < EU || tU.order > PU) && Pg(gU, RU, pU)
                }))
              }
            }))
          }
          return RU.length && RU.reduce((function(RU, gU) {
            let pU = -1,
              EU = -1,
              PU = 0;
            return gU.forEach(((TU, qU) => {
              if ("border" === UU.node(TU).dummy) {
                let RU = UU.predecessors(TU);
                if (RU && RU.length) {
                  let TU = RU[0];
                  if (void 0 === TU) return;
                  EU = UU.node(TU).order, tU(gU, PU, qU, pU, EU), PU = qU, pU = EU
                }
              }
              tU(gU, PU, gU.length, EU, RU.length)
            })), gU
          })), gU
        }(UU, tU)),
        EU = {};
      ["u", "d"].forEach((PU => {
        gU = "u" === PU ? tU : Object.values(tU).reverse(), ["l", "r"].forEach((tU => {
          "r" === tU && (gU = gU.map((UU => Object.values(UU).reverse())));
          let TU = function(UU, RU, gU, tU, pU) {
              let EU = {},
                PU = {},
                TU = {};
              return RU.forEach((UU => {
                UU.forEach(((UU, RU) => {
                  EU[UU] = UU, PU[UU] = UU, TU[UU] = RU
                }))
              })), RU.forEach((RU => {
                let qU = -1,
                  KU = -1,
                  cU = !1,
                  GU = RU,
                  jU = RU.findIndex((RU => (null == pU ? void 0 : pU.includes(RU)) || cg(RU, UU, pU)));
                jU > 0 && (GU = [RU[jU], ...RU.slice(0, jU), ...RU.slice(jU + 1)], cU = !0), GU.forEach((RU => {
                  var GU;
                  let jU = tU(RU);
                  if (jU && jU.length) {
                    null != pU && pU.includes(RU) && (jU = jU.filter((RU => cg(RU, UU, pU))));
                    let tU = jU.sort(((UU, RU) => {
                        let gU = TU[UU],
                          tU = TU[RU];
                        return (void 0 !== gU ? gU : 0) - (void 0 !== tU ? tU : 0)
                      })),
                      uU = (tU.length - 1) / 2;
                    for (let UU = Math.floor(uU), pU = Math.ceil(uU); UU <= pU; ++UU) {
                      let pU = tU[UU];
                      if (void 0 === pU) continue;
                      let jU = TU[pU];
                      if (void 0 !== jU && PU[RU] === RU && qU < jU && TU[pU] !== KU && !Tg(gU, RU, pU)) {
                        let UU = EU[pU];
                        void 0 !== UU && (PU[pU] = RU, PU[RU] = EU[RU] = UU, qU = jU, cU && (qU = -1, KU = null != (GU = TU[pU]) ? GU : -1, cU = !1))
                      }
                    }
                  }
                }))
              })), {
                root: EU,
                align: PU
              }
            }(UU, gU, pU, (RU => ("u" === PU ? UU.predecessors(RU) : UU.successors(RU)) || []), RU),
            qU = qg(UU, gU, TU.root, TU.align, "r" === tU);
          "r" === tU && (qU = gR(qU, (UU => -UU))), EU[PU + tU] = qU
        }))
      }));
      let PU = function(UU, RU) {
        return Object.values(RU).reduce(((RU, gU) => {
          let tU = Number.NEGATIVE_INFINITY,
            pU = Number.POSITIVE_INFINITY;
          Object.entries(gU).forEach((RU => {
            let [gU, EU] = RU, PU = function(UU, RU) {
              return UU.node(RU).width
            }(UU, gU) / 2;
            tU = Math.max(EU + PU, tU), pU = Math.min(EU - PU, pU)
          }));
          let EU = tU - pU;
          return EU < RU[0] && (RU = [EU, gU]), RU
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(UU, EU);
      return function(UU, RU) {
          let gU = Object.values(RU),
            tU = MU(Math.min, gU),
            pU = MU(Math.max, gU);
          ["u", "d"].forEach((gU => {
            ["l", "r"].forEach((EU => {
              let PU = gU + EU,
                TU = UU[PU];
              if (!TU || TU === RU) return;
              let qU = Object.values(TU),
                KU = tU - MU(Math.min, qU);
              "l" !== EU && (KU = pU - MU(Math.max, qU)), KU && (UU[PU] = gR(TU, (UU => UU + KU)))
            }))
          }))
        }(EU, PU),
        function(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            gU = UU.ul;
          return gU ? gR(gU, ((gU, tU) => {
            var pU, EU;
            if (RU) {
              let gU = RU.toLowerCase(),
                pU = UU[gU];
              if (pU && void 0 !== pU[tU]) return pU[tU]
            }
            let PU = Object.values(UU).map((UU => {
              let RU = UU[tU];
              return void 0 !== RU ? RU : 0
            })).sort(((UU, RU) => UU - RU));
            return ((null != (pU = PU[1]) ? pU : 0) + (null != (EU = PU[2]) ? EU : 0)) / 2
          })) : {}
        }(EU, UU.graph().align)
    }

    function cg(UU, RU, gU) {
      var tU;
      if (!gU) return !1;
      let pU = null == (tU = RU.node(UU)) ? void 0 : tU.edgeObj;
      if (!pU || RU.node(UU).edgeLabel.reversed) return !1;
      let EU = gU.indexOf(null == pU ? void 0 : pU.v),
        PU = gU.indexOf(null == pU ? void 0 : pU.w);
      return -1 !== EU && -1 !== PU && EU === (PU + 1) % gU.length || EU === (PU - 1) % gU.length
    }

    function Gg(UU, RU) {
      (function(UU) {
        let RU = iU(UU),
          gU = UU.graph(),
          tU = gU.ranksep,
          pU = gU.rankalign,
          EU = 0;
        RU.forEach((RU => {
          let gU = RU.reduce(((RU, gU) => {
            var tU;
            let pU = null != (tU = UU.node(gU).height) ? tU : 0;
            return RU > pU ? RU : pU
          }), 0);
          RU.forEach((RU => {
            let tU = UU.node(RU);
            tU.y = "top" === pU ? EU + tU.height / 2 : "bottom" === pU ? EU + gU - tU.height / 2 : EU + gU / 2
          })), EU += gU + tU
        }))
      })(UU = kU(UU)), Object.entries(Kg(UU, RU)).forEach((RU => {
        let [gU, tU] = RU;
        return UU.node(gU).x = tU
      }))
    }
    var jg = new WeakMap;

    function ug(UU) {
      return hg(UU, NU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), UU
    }

    function Cg(UU, RU, gU) {
      let tU = RU;
      for (; void 0 !== tU;) {
        let RU = UU.parent(tU);
        if (RU === gU) return tU;
        tU = RU
      }
    }

    function hg(UU, RU, gU) {
      var tU;
      let pU = UU.nodes().filter((RU => UU.children(RU).length)),
        EU = {};
      pU.forEach((tU => {
        let pU = UU.node(tU);
        if (pU && pU.rankdir) {
          let PU = new sU({
            multigraph: !0,
            compound: !0
          });
          PU.setGraph({
            rankdir: pU.rankdir
          });
          let TU = UU.children(tU);
          TU.forEach((RU => {
            let gU = {
              ...UU.node(RU)
            };
            PU.setNode(RU, gU);
            let pU = UU.parent(RU);
            pU && pU !== tU && TU.includes(pU) && PU.setParent(RU, pU)
          }));
          let qU = new Set;
          UU.edges().forEach((RU => {
            let gU = Cg(UU, RU.v, tU),
              pU = Cg(UU, RU.w, tU);
            if (gU && pU && gU !== pU) {
              let tU = `${gU}\0${pU}`;
              qU.has(tU) || (qU.add(tU), PU.setEdge(gU, pU, {
                ...UU.edge(RU)
              }))
            }
          })), hg(PU, RU, gU);
          let KU = bg(PU);
          Qg(KU, RU, gU, null), eg(PU, KU);
          let cU = 1 / 0,
            GU = 1 / 0,
            jU = -1 / 0,
            uU = -1 / 0;
          PU.nodes().forEach((UU => {
            if (UU === tU) return;
            let RU = PU.node(UU);
            RU && "number" == typeof RU.x && "number" == typeof RU.y && "number" == typeof RU.width && "number" == typeof RU.height && (cU = Math.min(cU, RU.x - RU.width / 2), jU = Math.max(jU, RU.x + RU.width / 2), GU = Math.min(GU, RU.y - RU.height / 2), uU = Math.max(uU, RU.y + RU.height / 2))
          })), (!isFinite(cU) || !isFinite(GU) || !isFinite(jU) || !isFinite(uU)) && (cU = GU = 0, jU = uU = 0);
          let CU = jU - cU,
            hU = uU - GU;
          EU[tU] = {
            minX: cU,
            et: GU,
            maxX: jU,
            Wt: uU,
            width: CU,
            height: hU,
            offsetX: cU,
            offsetY: GU
          }, pU._dagreClusterSubgraph = PU
        }
      }));
      let PU = [],
        TU = new Map;
      pU.forEach((RU => {
        let gU = UU.node(RU);
        gU && gU.rankdir && EU[RU] && TU.set(RU, (UU.children(RU) || []).filter((UU => UU !== RU)))
      }));
      let qU = new Set([...TU.values()].flat()),
        KU = new Map;
      TU.forEach(((RU, gU) => {
        qU.has(gU) || KU.set(gU, (RU => {
          let gU = [],
            tU = (UU.children(RU) || []).filter((UU => UU !== RU));
          for (; tU.length > 0;) {
            let RU = tU.shift();
            gU.push(RU), (UU.children(RU) || []).filter((UU => UU !== RU)).forEach((UU => tU.push(UU)))
          }
          return gU
        })(gU))
      }));
      let cU = new Set([...KU.values()].flat()),
        GU = UU => {
          for (let [RU, gU] of KU)
            if (gU.includes(UU)) return RU;
          return UU
        },
        jU = [];
      UU.edges().forEach((RU => {
        (cU.has(RU.v) || cU.has(RU.w)) && jU.push({
          edge: RU,
          label: UU.edge(RU)
        })
      }));
      let uU = new Map;
      cU.forEach((RU => {
        let gU = UU.parent(RU);
        uU.set(RU, "string" == typeof gU ? gU : void 0)
      })), KU.forEach(((RU, gU) => {
        let tU = UU.node(gU),
          pU = [];
        RU.forEach((RU => {
          let gU = UU.node(RU);
          gU && (pU.push({
            id: RU,
            node: gU,
            parent: uU.get(RU)
          }), UU.removeNode(RU))
        }));
        let TU = jU.filter((UU => {
            let {
              edge: gU
            } = UU;
            return RU.includes(gU.v) || RU.includes(gU.w)
          })),
          qU = EU[gU];
        tU && (PU.push({
          clusterId: gU,
          subgraph: tU._dagreClusterSubgraph,
          bounds: qU,
          children: RU,
          removedNodes: pU,
          removedEdges: TU
        }), tU.width = qU.width, tU.height = qU.height)
      }));
      let CU = new Set;
      jU.forEach((RU => {
        let {
          edge: gU,
          label: tU
        } = RU, pU = GU(gU.v), EU = GU(gU.w);
        if (pU !== EU && UU.hasNode(pU) && UU.hasNode(EU)) {
          let RU = `${pU}\0${EU}`;
          CU.has(RU) || (CU.add(RU), UU.setEdge(pU, EU, {
            ...tU,
            width: 0,
            height: 0
          }))
        }
      }));
      let hU = bg(UU),
        QU = Qg(hU, RU, gU, null != (tU = jg.get(UU)) ? tU : null);
      jg.set(UU, QU), eg(UU, hU), CU.forEach((RU => {
        let gU = RU.indexOf("\0"),
          tU = RU.slice(0, gU),
          pU = RU.slice(gU + 1);
        UU.hasEdge(tU, pU) && UU.removeEdge(tU, pU)
      })), PU.forEach((RU => {
        let {
          clusterId: gU,
          subgraph: tU,
          bounds: pU,
          removedNodes: EU,
          removedEdges: PU
        } = RU;
        var TU, qU;
        let KU = UU.node(gU),
          cU = null != (TU = null == KU ? void 0 : KU.x) ? TU : 0,
          GU = null != (qU = null == KU ? void 0 : KU.y) ? qU : 0,
          jU = (pU.minX + pU.maxX) / 2,
          uU = (pU.et + pU.Wt) / 2;
        EU.forEach((RU => {
          let {
            id: gU,
            node: tU,
            parent: pU
          } = RU;
          UU.setNode(gU, tU), void 0 !== pU && UU.setParent(gU, pU)
        })), PU.forEach((RU => {
          let {
            edge: gU,
            label: tU
          } = RU;
          UU.setEdge(gU, tU)
        })), tU.nodes().forEach((RU => {
          if (RU === gU) return;
          let pU = tU.node(RU),
            EU = UU.node(RU);
          EU && pU && "number" == typeof pU.x && "number" == typeof pU.y && (EU.x = cU + (pU.x - jU), EU.y = GU + (pU.y - uU))
        })), delete KU._dagreClusterSubgraph
      })), pU.forEach((RU => {
        var gU, tU;
        let pU = UU.node(RU),
          PU = EU[RU];
        if (pU && pU.rankdir && pU._dagreClusterSubgraph && PU) {
          let EU = pU._dagreClusterSubgraph,
            TU = null != (gU = pU.x) ? gU : 0,
            qU = null != (tU = pU.y) ? tU : 0,
            KU = (PU.minX + PU.maxX) / 2,
            cU = (PU.et + PU.Wt) / 2;
          EU.nodes().forEach((gU => {
            if (gU === RU) return;
            let tU = EU.node(gU),
              pU = UU.node(gU);
            if (pU && tU && "number" == typeof tU.x && "number" == typeof tU.y) {
              let UU = tU.x - KU,
                RU = tU.y - cU;
              pU.x = TU + UU, pU.y = qU + RU
            }
          })), delete pU._dagreClusterSubgraph
        }
      }))
    }

    function Qg(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var pU, EU;
      let PU = !1 !== (null == gU ? void 0 : gU.useDynamic),
        TU = PU && null != (pU = null == tU ? void 0 : tU.graph) ? pU : null,
        qU = PU && null != (EU = null == tU ? void 0 : tU.rawNodes) ? EU : null;
      RU("    makeSpaceForEdgeLabels", (() => function(UU) {
        let RU = UU.graph();
        RU.ranksep /= 2, UU.edges().forEach((gU => {
          var tU;
          let pU = UU.edge(gU);
          pU.minlen *= 2, "c" !== (null != (tU = pU.labelpos) ? tU : "r").toLowerCase() && ("TB" === RU.rankdir || "BT" === RU.rankdir ? pU.width += pU.labeloffset : pU.height += pU.labeloffset)
        }))
      }(UU))), RU("    removeSelfEdges", (() => function(UU) {
        UU.edges().forEach((RU => {
          if (RU.v === RU.w) {
            let gU = UU.node(RU.v);
            gU.selfEdges || (gU.selfEdges = []), gU.selfEdges.push({
              e: RU,
              label: UU.edge(RU)
            }), UU.removeEdge(RU)
          }
        }))
      }(UU))), RU("    acyclic", (() => uR(UU, TU))), RU("    nestingGraph.run", (() => HR(UU))), RU("    rank", (() => rR(kU(UU)))), RU("    injectEdgeLabelProxies", (() => function(UU) {
        UU.edges().forEach((RU => {
          let gU = UU.edge(RU);
          if (gU.width && gU.height) {
            let gU = UU.node(RU.v),
              tU = {
                rank: (UU.node(RU.w).rank - gU.rank) / 2 + gU.rank,
                e: RU
              };
            yU(UU, "edge-proxy", tU, "_ep")
          }
        }))
      }(UU))), RU("    removeEmptyRanks", (() => function(UU) {
        let RU = UU.nodes().map((RU => UU.node(RU).rank)).filter((UU => void 0 !== UU)),
          gU = MU(Math.min, RU),
          tU = [];
        UU.nodes().forEach((RU => {
          let pU = UU.node(RU).rank - gU;
          tU[pU] || (tU[pU] = []), tU[pU].push(RU)
        }));
        let pU = 0,
          EU = UU.graph().nodeRankFactor;
        Array.from(tU).forEach(((RU, gU) => {
          void 0 === RU && gU % EU !== 0 ? --pU : void 0 !== RU && pU && RU.forEach((RU => UU.node(RU).rank += pU))
        }))
      }(UU))), RU("    nestingGraph.cleanup", (() => function(UU) {
        let RU = UU.graph();
        UU.removeNode(RU.nestingRoot), delete RU.nestingRoot, UU.edges().forEach((RU => {
          UU.edge(RU).nestingEdge && UU.removeEdge(RU)
        }))
      }(UU))), RU("    normalizeRanks", (() => function(UU) {
        let RU = UU.nodes().map((RU => {
            let gU = UU.node(RU).rank;
            return void 0 === gU ? Number.MAX_VALUE : gU
          })),
          gU = MU(Math.min, RU);
        UU.nodes().forEach((RU => {
          let tU = UU.node(RU);
          Object.hasOwn(tU, "rank") && (tU.rank -= gU)
        }))
      }(UU))), RU("    assignRankMinMax", (() => function(UU) {
        let RU = 0;
        UU.nodes().forEach((gU => {
          let tU = UU.node(gU);
          tU.borderTop && (tU.minRank = UU.node(tU.borderTop).rank, tU.maxRank = UU.node(tU.borderBottom).rank, RU = Math.max(RU, tU.maxRank))
        })), UU.graph().maxRank = RU
      }(UU))), RU("    removeEdgeLabelProxies", (() => function(UU) {
        UU.nodes().forEach((RU => {
          let gU = UU.node(RU);
          if ("edge-proxy" === gU.dummy) {
            let tU = gU;
            UU.edge(tU.e).labelRank = gU.rank, UU.removeNode(RU)
          }
        }))
      }(UU))), RU("    normalize.run", (() => CR(UU))), RU("    parentDummyChains", (() => dR(UU))), RU("    addBorderSegments", (() => sR(UU))), RU("    order", (() => gg(UU, gU, qU))), RU("    insertSelfEdges", (() => function(UU) {
        iU(UU).forEach((RU => {
          let gU = 0;
          RU.forEach(((RU, tU) => {
            let pU = UU.node(RU);
            "number" != typeof pU.rank && (pU.rank = 0), pU.order = tU + gU, (pU.selfEdges || []).forEach((RU => {
              yU(UU, "selfedge", {
                width: RU.label.width,
                height: RU.label.height,
                rank: pU.rank,
                order: tU + ++gU,
                e: RU.e,
                edgeLabel: RU.label
              }, "_se"), (!Array.isArray(RU.label.points) || 7 !== RU.label.points.length) && (RU.label.points = [{
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
            })), delete pU.selfEdges
          }))
        }))
      }(UU))), RU("    adjustCoordinateSystem", (() => function(UU) {
        var RU;
        let gU = null == (RU = UU.graph().rankdir) ? void 0 : RU.toLowerCase();
        ("lr" === gU || "rl" === gU) && FR(UU)
      }(UU))), RU("    position", (() => Gg(UU, gU.corePath))), RU("    positionSelfEdges", (() => function(UU) {
        UU.nodes().forEach((RU => {
          let gU = UU.node(RU),
            tU = UU => "number" == typeof UU && isFinite(UU);
          if ("selfedge" === gU.dummy) {
            let pU = gU,
              EU = UU.node(pU.e.v),
              PU = tU(null == EU ? void 0 : EU.x) ? EU.x : 0,
              TU = tU(null == EU ? void 0 : EU.y) ? EU.y : 0,
              qU = tU(null == EU ? void 0 : EU.width) ? EU.width : 0,
              KU = tU(null == EU ? void 0 : EU.height) ? EU.height : 0,
              cU = tU(gU.x) ? gU.x : PU,
              GU = tU(gU.y) ? gU.y : TU,
              jU = qU / 2,
              uU = KU / 2;
            pU.edgeLabel.points = [{
              x: cU + jU,
              y: GU - uU
            }, {
              x: cU + jU,
              y: GU - uU
            }, {
              x: cU,
              y: GU
            }, {
              x: cU - jU,
              y: GU + uU
            }, {
              x: cU - jU,
              y: GU + uU
            }, {
              x: cU,
              y: GU
            }, {
              x: cU,
              y: GU
            }], pU.edgeLabel.x = cU, pU.edgeLabel.y = GU, UU.setEdge(pU.e, pU.edgeLabel), UU.removeNode(RU)
          } else gU && Array.isArray(gU.selfEdges) && gU.selfEdges.forEach((UU => {
            if (!Array.isArray(UU.label.points) || 7 !== UU.label.points.length) {
              let RU = tU(gU.x) ? gU.x : 0,
                pU = tU(gU.y) ? gU.y : 0,
                EU = (tU(gU.width) ? gU.width : 0) / 2,
                PU = (tU(gU.height) ? gU.height : 0) / 2;
              UU.label.points = [{
                x: RU + EU,
                y: pU - PU
              }, {
                x: RU + EU,
                y: pU - PU
              }, {
                x: RU,
                y: pU
              }, {
                x: RU - EU,
                y: pU + PU
              }, {
                x: RU - EU,
                y: pU + PU
              }, {
                x: RU,
                y: pU
              }, {
                x: RU,
                y: pU
              }]
            }
          }))
        }))
      }(UU)));
      let KU = JSON.parse(JSON.stringify(UU._nodes));
      return RU("    removeBorderNodes", (() => function(UU) {
        UU.nodes().forEach((RU => {
          if (UU.children(RU).length) {
            let gU = UU.node(RU),
              tU = UU.node(gU.borderTop),
              pU = UU.node(gU.borderBottom),
              EU = UU.node(gU.borderLeft[gU.borderLeft.length - 1]),
              PU = UU.node(gU.borderRight[gU.borderRight.length - 1]);
            gU.width = Math.abs(PU.x - EU.x), gU.height = Math.abs(pU.y - tU.y), gU.x = EU.x + gU.width / 2, gU.y = tU.y + gU.height / 2
          }
        })), UU.nodes().forEach((RU => {
          "border" === UU.node(RU).dummy && UU.removeNode(RU)
        }))
      }(UU))), RU("    normalize.undo", (() => function(UU) {
        UU.graph().dummyChains.forEach((RU => {
          let gU, tU = UU.node(RU),
            pU = tU.edgeLabel;
          for (UU.setEdge(tU.edgeObj, pU); tU.dummy;) gU = UU.successors(RU)[0], UU.removeNode(RU), pU.points.push({
            x: tU.x,
            y: tU.y
          }), "edge-label" === tU.dummy && (pU.x = tU.x, pU.y = tU.y, pU.width = tU.width, pU.height = tU.height), RU = gU, tU = UU.node(RU)
        }))
      }(UU))), RU("    fixupEdgeLabelCoords", (() => function(UU) {
        UU.edges().forEach((RU => {
          let gU = UU.edge(RU);
          if (Object.hasOwn(gU, "x")) switch (("l" === gU.labelpos || "r" === gU.labelpos) && (gU.width -= gU.labeloffset), gU.labelpos) {
            case "l":
              gU.x -= gU.width / 2 + gU.labeloffset;
              break;
            case "r":
              gU.x += gU.width / 2 + gU.labeloffset
          }
        }))
      }(UU))), RU("    undoCoordinateSystem", (() => kR(UU))), RU("    translateGraph", (() => function(UU) {
        let RU = Number.POSITIVE_INFINITY,
          gU = 0,
          tU = Number.POSITIVE_INFINITY,
          pU = 0,
          EU = UU.graph(),
          PU = EU.marginx || 0,
          TU = EU.marginy || 0;

        function qU(UU) {
          let EU = UU.x,
            PU = UU.y,
            TU = UU.width,
            qU = UU.height;
          RU = Math.min(RU, EU - TU / 2), gU = Math.max(gU, EU + TU / 2), tU = Math.min(tU, PU - qU / 2), pU = Math.max(pU, PU + qU / 2)
        }
        UU.nodes().forEach((RU => qU(UU.node(RU)))), UU.edges().forEach((RU => {
          let gU = UU.edge(RU);
          Object.hasOwn(gU, "x") && qU(gU)
        })), RU -= PU, tU -= TU, UU.nodes().forEach((gU => {
          let pU = UU.node(gU);
          pU.x -= RU, pU.y -= tU
        })), UU.edges().forEach((gU => {
          let pU = UU.edge(gU);
          pU.points.forEach((UU => {
            UU.x -= RU, UU.y -= tU
          })), Object.hasOwn(pU, "x") && (pU.x -= RU), Object.hasOwn(pU, "y") && (pU.y -= tU)
        })), EU.width = gU - RU + PU, EU.height = pU - tU + TU
      }(UU))), RU("    assignNodeIntersects", (() => function(UU) {
        UU.edges().forEach((RU => {
          if (RU.v === RU.w) return;
          let gU, tU, pU = UU.edge(RU),
            EU = UU.node(RU.v),
            PU = UU.node(RU.w);
          pU.points ? (gU = pU.points[0], tU = pU.points[pU.points.length - 1]) : (pU.points = [], gU = PU, tU = EU), pU.points.unshift(FU(EU, gU)), pU.points.push(FU(PU, tU))
        }))
      }(UU))), RU("    reversePoints", (() => function(UU) {
        UU.edges().forEach((RU => {
          let gU = UU.edge(RU);
          gU.reversed && gU.points.reverse()
        }))
      }(UU))), RU("    acyclic.undo", (() => function(UU) {
        UU.edges().forEach((RU => {
          let gU = UU.edge(RU);
          if (gU.reversed) {
            UU.removeEdge(RU);
            let tU = gU.forwardName;
            delete gU.reversed, delete gU.forwardName, UU.setEdge(RU.w, RU.v, gU, tU)
          }
        }))
      }(UU))), {
        graph: UU,
        rawNodes: KU
      }
    }

    function eg(UU, RU) {
      UU.nodes().forEach((gU => {
        let tU = UU.node(gU),
          pU = RU.node(gU);
        tU && (tU.x = pU.x, tU.y = pU.y, tU.order = pU.order, tU.rank = pU.rank, RU.children(gU).length && (tU.width = pU.width, tU.height = pU.height))
      })), UU.edges().forEach((gU => {
        let tU = UU.edge(gU),
          pU = RU.edge(gU);
        tU.points = pU.points, Object.hasOwn(pU, "x") && (tU.x = pU.x, tU.y = pU.y)
      })), UU.graph().width = RU.graph().width, UU.graph().height = RU.graph().height
    }
    var Wg = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      fg = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      xg = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      mg = ["width", "height", "rank"],
      Ig = {
        width: 0,
        height: 0
      },
      Jg = ["minlen", "weight", "width", "height", "labeloffset"],
      wg = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      ng = ["labelpos"];

    function bg(UU) {
      let RU = new sU({
          multigraph: !0,
          compound: !0
        }),
        gU = Zg(UU.graph());
      return RU.setGraph(Object.assign({}, fg, og(gU, Wg), RR(gU, xg))), UU.nodes().forEach((gU => {
        let tU = og(Zg(UU.node(gU)), mg);
        Object.keys(Ig).forEach((UU => {
          void 0 === tU[UU] && (tU[UU] = Ig[UU])
        })), RU.setNode(gU, tU);
        let pU = UU.parent(gU);
        void 0 !== pU && RU.setParent(gU, pU)
      })), UU.edges().forEach((gU => {
        let tU = Zg(UU.edge(gU));
        RU.setEdge(gU, Object.assign({}, wg, og(tU, Jg), RR(tU, ng)))
      })), RU
    }

    function og(UU, RU) {
      return gR(RR(UU, RU), Number)
    }

    function Zg(UU) {
      let RU = {};
      return UU && Object.entries(UU).forEach((UU => {
        let [gU, tU] = UU;
        "string" == typeof gU && (gU = gU.toLowerCase()), RU[gU] = tU
      })), RU
    }

    function ag(UU) {
      let RU = iU(UU),
        gU = new sU({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return UU.nodes().forEach((RU => {
        gU.setNode(RU, {
          label: RU
        }), gU.setParent(RU, "layer" + UU.node(RU).rank)
      })), UU.edges().forEach((UU => gU.setEdge(UU.v, UU.w, {}, UU.name))), RU.forEach(((UU, RU) => {
        let tU = "layer" + RU;
        gU.setNode(tU, {
          rank: "same"
        }), UU.reduce(((UU, RU) => (gU.setEdge(UU, RU, {
          style: "invis"
        }), RU)))
      })), gU
    }
    var Yg = {
        time: LU,
        notime: NU
      },
      Bg = {
        graphlib: EU,
        version: ER,
        layout: ug,
        debug: ag,
        util: {
          time: LU,
          notime: NU
        }
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);