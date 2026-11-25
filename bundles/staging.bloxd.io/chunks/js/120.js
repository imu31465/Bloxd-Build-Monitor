/*! For license information please see wp3j0a.120.f099002a.chunk.js.LICENSE.txt */
export const id = 120;
export const ids = [120];
export const modules = {
  6445: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      Graph: () => qG,
      debug: () => FZ,
      default: () => aZ,
      graphlib: () => LG,
      layout: () => QZ,
      util: () => vZ,
      version: () => Lb
    });
    var wG = Object.defineProperty,
      SG = (GG, bG, ZG) => ((GG, bG, ZG) => bG in GG ? wG(GG, bG, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ZG
      }) : GG[bG] = ZG)(GG, "symbol" != typeof bG ? bG + "" : bG, ZG),
      LG = {};
    ((GG, bG) => {
      for (var ZG in bG) wG(GG, ZG, {
        get: bG[ZG],
        enumerable: !0
      })
    })(LG, {
      Graph: () => qG,
      alg: () => JG
    });
    var yG = Object.defineProperty,
      kG = (GG, bG) => {
        for (var ZG in bG) yG(GG, ZG, {
          get: bG[ZG],
          enumerable: !0
        })
      },
      UG = class {
        constructor(GG) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, GG && (this._isDirected = !("directed" in GG) || GG.directed, this._isMultigraph = "multigraph" in GG && GG.multigraph, this._isCompound = "compound" in GG && GG.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(GG) {
          return this._label = GG, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(GG) {
          return this._defaultNodeLabelFn = "function" != typeof GG ? () => GG : GG, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((GG => 0 === Object.keys(this._in[GG]).length))
        }
        sinks() {
          return this.nodes().filter((GG => 0 === Object.keys(this._out[GG]).length))
        }
        setNodes(GG, bG) {
          return GG.forEach((GG => {
            void 0 !== bG ? this.setNode(GG, bG) : this.setNode(GG)
          })), this
        }
        setNode(GG, bG) {
          return GG in this._nodes ? (arguments.length > 1 && (this._nodes[GG] = bG), this) : (this._nodes[GG] = arguments.length > 1 ? bG : this._defaultNodeLabelFn(GG), this._isCompound && (this._parent[GG] = "\0", this._children[GG] = {}, this._children["\0"][GG] = !0), this._in[GG] = {}, this._preds[GG] = {}, this._out[GG] = {}, this._sucs[GG] = {}, ++this._nodeCount, this)
        }
        node(GG) {
          return this._nodes[GG]
        }
        hasNode(GG) {
          return GG in this._nodes
        }
        removeNode(GG) {
          if (GG in this._nodes) {
            let bG = GG => this.removeEdge(this._edgeObjs[GG]);
            delete this._nodes[GG], this._isCompound && (this._removeFromParentsChildList(GG), delete this._parent[GG], this.children(GG).forEach((GG => {
              this.setParent(GG)
            })), delete this._children[GG]), Object.keys(this._in[GG]).forEach(bG), delete this._in[GG], delete this._preds[GG], Object.keys(this._out[GG]).forEach(bG), delete this._out[GG], delete this._sucs[GG], --this._nodeCount
          }
          return this
        }
        setParent(GG, bG) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === bG) bG = "\0";
          else {
            for (let ZG = bG += ""; void 0 !== ZG; ZG = this.parent(ZG))
              if (ZG === GG) throw new Error("Setting " + bG + " as parent of " + GG + " would create a cycle");
            this.setNode(bG)
          }
          return this.setNode(GG), this._removeFromParentsChildList(GG), this._parent[GG] = bG, this._children[bG][GG] = !0, this
        }
        parent(GG) {
          if (this._isCompound) {
            let bG = this._parent[GG];
            if ("\0" !== bG) return bG
          }
        }
        children() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let bG = this._children[GG];
            if (bG) return Object.keys(bG)
          } else {
            if ("\0" === GG) return this.nodes();
            if (this.hasNode(GG)) return []
          }
          return []
        }
        predecessors(GG) {
          let bG = this._preds[GG];
          if (bG) return Object.keys(bG)
        }
        successors(GG) {
          let bG = this._sucs[GG];
          if (bG) return Object.keys(bG)
        }
        neighbors(GG) {
          let bG = this.predecessors(GG);
          if (bG) {
            let ZG = new Set(bG),
              wG = this.successors(GG);
            if (wG)
              for (let GG of wG) ZG.add(GG);
            return Array.from(ZG.values())
          }
        }
        isLeaf(GG) {
          var bG;
          let ZG;
          return ZG = this.isDirected() ? this.successors(GG) : this.neighbors(GG), 0 === (null != (bG = null == ZG ? void 0 : ZG.length) ? bG : 0)
        }
        filterNodes(GG) {
          let bG = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          bG.setGraph(this.graph()), Object.entries(this._nodes).forEach((ZG => {
            let [wG, SG] = ZG;
            GG(wG) && bG.setNode(wG, SG)
          })), Object.values(this._edgeObjs).forEach((GG => {
            bG.hasNode(GG.v) && bG.hasNode(GG.w) && bG.setEdge(GG, this.edge(GG))
          }));
          let ZG = {},
            wG = GG => {
              let SG = this.parent(GG);
              return !SG || bG.hasNode(SG) ? (ZG[GG] = SG, SG) : SG in ZG ? ZG[SG] : wG(SG)
            };
          return this._isCompound && bG.nodes().forEach((GG => bG.setParent(GG, wG(GG)))), bG
        }
        setDefaultEdgeLabel(GG) {
          return this._defaultEdgeLabelFn = "function" != typeof GG ? () => GG : GG, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(GG, bG) {
          return GG.reduce(((GG, ZG) => (void 0 !== bG ? this.setEdge(GG, ZG, bG) : this.setEdge(GG, ZG), ZG))), this
        }
        setEdge(GG, bG, ZG, wG) {
          let SG, LG, yG, kG, UG = !1;
          "object" == typeof GG && null !== GG && "v" in GG ? (SG = GG.v, LG = GG.w, yG = GG.name, 2 === arguments.length && (kG = bG, UG = !0)) : (SG = GG, LG = bG, yG = wG, arguments.length > 2 && (kG = ZG, UG = !0)), SG = "" + SG, LG = "" + LG, void 0 !== yG && (yG = "" + yG);
          let VG = pG(this._isDirected, SG, LG, yG);
          if (VG in this._edgeLabels) return UG && (this._edgeLabels[VG] = kG), this;
          if (void 0 !== yG && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(SG), this.setNode(LG), this._edgeLabels[VG] = UG ? kG : this._defaultEdgeLabelFn(SG, LG, yG);
          let fG = function(GG, bG, ZG, wG) {
            let SG = "" + bG,
              LG = "" + ZG;
            if (!GG && SG > LG) {
              let GG = SG;
              SG = LG, LG = GG
            }
            let yG = {
              v: SG,
              w: LG
            };
            return wG && (yG.name = wG), yG
          }(this._isDirected, SG, LG, yG);
          return SG = fG.v, LG = fG.w, Object.freeze(fG), this._edgeObjs[VG] = fG, YG(this._preds[LG], SG), YG(this._sucs[SG], LG), this._in[LG][VG] = fG, this._out[SG][VG] = fG, this._edgeCount++, this
        }
        edge(GG, bG, ZG) {
          let wG = 1 === arguments.length ? fG(this._isDirected, GG) : pG(this._isDirected, GG, bG, ZG);
          return this._edgeLabels[wG]
        }
        edgeAsObj(GG, bG, ZG) {
          let wG = 1 === arguments.length ? this.edge(GG) : this.edge(GG, bG, ZG);
          return "object" != typeof wG || null === wG ? {
            label: wG
          } : wG
        }
        hasEdge(GG, bG, ZG) {
          return (1 === arguments.length ? fG(this._isDirected, GG) : pG(this._isDirected, GG, bG, ZG)) in this._edgeLabels
        }
        removeEdge(GG, bG, ZG) {
          let wG = 1 === arguments.length ? fG(this._isDirected, GG) : pG(this._isDirected, GG, bG, ZG),
            SG = this._edgeObjs[wG];
          if (SG) {
            let GG = SG.v,
              bG = SG.w;
            delete this._edgeLabels[wG], delete this._edgeObjs[wG], VG(this._preds[bG], GG), VG(this._sucs[GG], bG), delete this._in[bG][wG], delete this._out[GG][wG], this._edgeCount--
          }
          return this
        }
        inEdges(GG, bG) {
          return this.isDirected() ? this.filterEdges(this._in[GG], GG, bG) : this.nodeEdges(GG, bG)
        }
        outEdges(GG, bG) {
          return this.isDirected() ? this.filterEdges(this._out[GG], GG, bG) : this.nodeEdges(GG, bG)
        }
        nodeEdges(GG, bG) {
          if (GG in this._nodes) return this.filterEdges({
            ...this._in[GG],
            ...this._out[GG]
          }, GG, bG)
        }
        _removeFromParentsChildList(GG) {
          delete this._children[this._parent[GG]][GG]
        }
        filterEdges(GG, bG, ZG) {
          if (!GG) return;
          let wG = Object.values(GG);
          return ZG ? wG.filter((GG => GG.v === bG && GG.w === ZG || GG.v === ZG && GG.w === bG)) : wG
        }
      };

    function YG(GG, bG) {
      GG[bG] ? GG[bG]++ : GG[bG] = 1
    }

    function VG(GG, bG) {
      void 0 !== GG[bG] && !--GG[bG] && delete GG[bG]
    }

    function pG(GG, bG, ZG, wG) {
      let SG = "" + bG,
        LG = "" + ZG;
      if (!GG && SG > LG) {
        let GG = SG;
        SG = LG, LG = GG
      }
      return SG + "\x01" + LG + "\x01" + (void 0 === wG ? "\0" : wG)
    }

    function fG(GG, bG) {
      return pG(GG, bG.v, bG.w, bG.name)
    }

    function QG(GG) {
      let bG = {
          options: {
            directed: GG.isDirected(),
            multigraph: GG.isMultigraph(),
            compound: GG.isCompound()
          },
          nodes: KG(GG),
          edges: hG(GG)
        },
        ZG = GG.graph();
      return void 0 !== ZG && (bG.value = structuredClone(ZG)), bG
    }

    function KG(GG) {
      return GG.nodes().map((bG => {
        let ZG = GG.node(bG),
          wG = GG.parent(bG),
          SG = {
            v: bG
          };
        return void 0 !== ZG && (SG.value = ZG), void 0 !== wG && (SG.parent = wG), SG
      }))
    }

    function hG(GG) {
      return GG.edges().map((bG => {
        let ZG = GG.edge(bG),
          wG = {
            v: bG.v,
            w: bG.w
          };
        return void 0 !== bG.name && (wG.name = bG.name), void 0 !== ZG && (wG.value = ZG), wG
      }))
    }

    function dG(GG) {
      let bG = new UG(GG.options);
      return void 0 !== GG.value && bG.setGraph(GG.value), GG.nodes.forEach((GG => {
        bG.setNode(GG.v, GG.value), GG.parent && bG.setParent(GG.v, GG.parent)
      })), GG.edges.forEach((GG => {
        bG.setEdge({
          v: GG.v,
          w: GG.w,
          name: GG.name
        }, GG.value)
      })), bG
    }
    kG({}, {
      read: () => dG,
      write: () => QG
    });
    var JG = {};
    kG(JG, {
      CycleException: () => FG,
      bellmanFord: () => zG,
      components: () => EG,
      dijkstra: () => uG,
      dijkstraAll: () => iG,
      findCycles: () => WG,
      floydWarshall: () => IG,
      isAcyclic: () => aG,
      postorder: () => PG,
      preorder: () => MG,
      prim: () => AG,
      shortestPaths: () => sG,
      tarjan: () => CG,
      topsort: () => vG
    });
    var rG = () => 1;

    function zG(GG, bG, ZG, wG) {
      return function(GG, bG, ZG, wG) {
        let SG, LG = {},
          yG = 0,
          kG = GG.nodes(),
          UG = function(GG) {
            let bG = LG[GG.v],
              wG = LG[GG.w];
            if (!bG || !wG) return;
            let yG = ZG(GG);
            bG.distance + yG < wG.distance && (LG[GG.w] = {
              distance: bG.distance + yG,
              predecessor: GG.v
            }, SG = !0)
          },
          YG = function() {
            kG.forEach((function(GG) {
              wG(GG).forEach((function(bG) {
                let ZG = bG.v === GG ? bG.v : bG.w,
                  wG = ZG === bG.v ? bG.w : bG.v;
                UG({
                  v: ZG,
                  w: wG
                })
              }))
            }))
          };
        kG.forEach((function(GG) {
          let ZG = GG === bG ? 0 : Number.POSITIVE_INFINITY;
          LG[GG] = {
            distance: ZG,
            predecessor: ""
          }
        }));
        let VG = kG.length;
        for (let pG = 1; pG < VG && (SG = !1, yG++, YG(), SG); pG++);
        if (yG === VG - 1 && (SG = !1, YG(), SG)) throw new Error("The graph contains a negative weight cycle");
        return LG
      }(GG, String(bG), ZG || rG, wG || function(bG) {
        var ZG;
        return null != (ZG = GG.outEdges(bG)) ? ZG : []
      })
    }

    function EG(GG) {
      let bG, ZG = {},
        wG = [];

      function SG(wG) {
        var LG, yG;
        wG in ZG || (ZG[wG] = !0, bG.push(wG), null == (LG = GG.successors(wG)) || LG.forEach(SG), null == (yG = GG.predecessors(wG)) || yG.forEach(SG))
      }
      return GG.nodes().forEach((function(GG) {
        bG = [], SG(GG), bG.length && wG.push(bG)
      })), wG
    }
    var oG = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((GG => GG.key))
        }
        has(GG) {
          return GG in this._keyIndices
        }
        priority(GG) {
          let bG = this._keyIndices[GG];
          if (void 0 !== bG) return this._arr[bG].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(GG, bG) {
          let ZG = this._keyIndices,
            wG = String(GG);
          if (!(wG in ZG)) {
            let GG = this._arr,
              SG = GG.length;
            return ZG[wG] = SG, GG.push({
              key: wG,
              priority: bG
            }), this._decrease(SG), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let GG = this._arr.pop();
          return delete this._keyIndices[GG.key], this._heapify(0), GG.key
        }
        decrease(GG, bG) {
          let ZG = this._keyIndices[GG];
          if (void 0 === ZG) throw new Error(`Key not found: ${GG}`);
          let wG = this._arr[ZG].priority;
          if (bG > wG) throw new Error(`New priority is greater than current priority. Key: ${GG} Old: ${wG} New: ${bG}`);
          this._arr[ZG].priority = bG, this._decrease(ZG)
        }
        _heapify(GG) {
          let bG = this._arr,
            ZG = 2 * GG,
            wG = ZG + 1,
            SG = GG;
          ZG < bG.length && (SG = bG[ZG].priority < bG[SG].priority ? ZG : SG, wG < bG.length && (SG = bG[wG].priority < bG[SG].priority ? wG : SG), SG !== GG && (this._swap(GG, SG), this._heapify(SG)))
        }
        _decrease(GG) {
          let bG, ZG = this._arr,
            wG = ZG[GG].priority;
          for (; 0 !== GG && (bG = GG >> 1, !(ZG[bG].priority < wG));) this._swap(GG, bG), GG = bG
        }
        _swap(GG, bG) {
          let ZG = this._arr,
            wG = this._keyIndices,
            SG = ZG[GG],
            LG = ZG[bG];
          ZG[GG] = LG, ZG[bG] = SG, wG[LG.key] = GG, wG[SG.key] = bG
        }
      },
      XG = () => 1;

    function uG(GG, bG, ZG, wG) {
      return function(GG, bG, ZG, wG) {
        let SG, LG, yG = {},
          kG = new oG,
          UG = function(GG) {
            let bG = GG.v !== SG ? GG.v : GG.w,
              wG = yG[bG];
            if (!wG) return;
            let UG = ZG(GG),
              YG = LG.distance + UG;
            if (UG < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + GG + " Weight: " + UG);
            YG < wG.distance && (wG.distance = YG, wG.predecessor = SG, kG.decrease(bG, YG))
          };
        for (GG.nodes().forEach((function(GG) {
            let ZG = GG === bG ? 0 : Number.POSITIVE_INFINITY;
            yG[GG] = {
              distance: ZG,
              predecessor: ""
            }, kG.add(GG, ZG)
          })); kG.size() > 0;) {
          SG = kG.removeMin();
          let GG = yG[SG];
          if (!GG || GG.distance === Number.POSITIVE_INFINITY) break;
          LG = GG, wG(SG).forEach(UG)
        }
        return yG
      }(GG, String(bG), ZG || XG, wG || function(bG) {
        var ZG;
        return null != (ZG = GG.outEdges(bG)) ? ZG : []
      })
    }

    function iG(GG, bG, ZG) {
      return GG.nodes().reduce((function(wG, SG) {
        return wG[SG] = uG(GG, SG, bG, ZG), wG
      }), {})
    }

    function CG(GG) {
      let bG = 0,
        ZG = [],
        wG = {},
        SG = [];

      function LG(yG) {
        var kG;
        let UG = wG[yG] = {
          onStack: !0,
          lowlink: bG,
          index: bG++
        };
        if (ZG.push(yG), null == (kG = GG.successors(yG)) || kG.forEach((function(GG) {
            if (GG in wG) {
              let bG = wG[GG];
              null != bG && bG.onStack && (UG.lowlink = Math.min(UG.lowlink, bG.index))
            } else {
              LG(GG);
              let bG = wG[GG];
              bG && (UG.lowlink = Math.min(UG.lowlink, bG.lowlink))
            }
          })), UG.lowlink === UG.index) {
          let GG, bG = [];
          do {
            GG = ZG.pop();
            let SG = wG[GG];
            SG && (SG.onStack = !1), bG.push(GG)
          } while (yG !== GG);
          SG.push(bG)
        }
      }
      return GG.nodes().forEach((function(GG) {
        GG in wG || LG(GG)
      })), SG
    }

    function WG(GG) {
      return CG(GG).filter((function(bG) {
        var ZG;
        let wG = bG[0];
        return !!wG && (bG.length > 1 || 1 === bG.length && (null != (ZG = GG.outEdges(wG, wG)) ? ZG : []).length > 0)
      }))
    }
    var mG = () => 1;

    function IG(GG, bG, ZG) {
      return function(GG, bG, ZG) {
        let wG = {},
          SG = GG.nodes();
        return SG.forEach((function(GG) {
          let LG = {};
          wG[GG] = LG, LG[GG] = {
            distance: 0,
            predecessor: ""
          }, SG.forEach((function(bG) {
            GG !== bG && (LG[bG] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), ZG(GG).forEach((function(ZG) {
            let wG = ZG.v === GG ? ZG.w : ZG.v,
              SG = bG(ZG);
            LG[wG] = {
              distance: SG,
              predecessor: GG
            }
          }))
        })), SG.forEach((function(GG) {
          let bG = wG[GG];
          bG && SG.forEach((function(ZG) {
            let LG = wG[ZG];
            LG && SG.forEach((function(ZG) {
              let wG = LG[GG],
                SG = bG[ZG],
                yG = LG[ZG];
              if (wG && SG && yG) {
                let GG = wG.distance + SG.distance;
                GG < yG.distance && (yG.distance = GG, yG.predecessor = SG.predecessor)
              }
            }))
          }))
        })), wG
      }(GG, bG || mG, ZG || function(bG) {
        var ZG;
        return null != (ZG = GG.outEdges(bG)) ? ZG : []
      })
    }
    var FG = class extends Error {
      constructor(GG) {
        super(GG), this.name = "CycleException"
      }
    };

    function vG(GG) {
      let bG = {},
        ZG = {},
        wG = [];
      if (GG.sinks().forEach((function SG(LG) {
          var yG;
          if (LG in ZG) throw new FG;
          LG in bG || (ZG[LG] = !0, bG[LG] = !0, null == (yG = GG.predecessors(LG)) || yG.forEach(SG), delete ZG[LG], wG.push(LG))
        })), Object.keys(bG).length !== GG.nodeCount()) throw new FG;
      return wG
    }

    function aG(GG) {
      try {
        vG(GG)
      } catch (bG) {
        if (bG instanceof FG) return !1;
        throw bG
      }
      return !0
    }

    function cG(GG, bG, ZG, wG, SG) {
      Array.isArray(bG) || (bG = [bG]);
      let LG = bG => {
          var ZG;
          return null != (ZG = GG.isDirected() ? GG.successors(bG) : GG.neighbors(bG)) ? ZG : []
        },
        yG = {};
      return bG.forEach((function(bG) {
        if (!GG.hasNode(bG)) throw new Error("Graph does not have node: " + bG);
        SG = lG(GG, bG, "post" === ZG, yG, LG, wG, SG)
      })), SG
    }

    function lG(GG, bG, ZG, wG, SG, LG, yG) {
      return bG in wG || (wG[bG] = !0, ZG || (yG = LG(yG, bG)), SG(bG).forEach((function(bG) {
        yG = lG(GG, bG, ZG, wG, SG, LG, yG)
      })), ZG && (yG = LG(yG, bG))), yG
    }

    function jG(GG, bG, ZG) {
      return cG(GG, bG, ZG, (function(GG, bG) {
        return GG.push(bG), GG
      }), [])
    }

    function PG(GG, bG) {
      return jG(GG, bG, "post")
    }

    function MG(GG, bG) {
      return jG(GG, bG, "pre")
    }

    function AG(GG, bG) {
      var ZG;
      let wG, SG = new UG,
        LG = {},
        yG = new oG;

      function kG(GG) {
        let ZG = GG.v === wG ? GG.w : GG.v,
          SG = yG.priority(ZG);
        if (void 0 !== SG) {
          let kG = bG(GG);
          kG < SG && (LG[ZG] = wG, yG.decrease(ZG, kG))
        }
      }
      if (0 === GG.nodeCount()) return SG;
      GG.nodes().forEach((function(GG) {
        yG.add(GG, Number.POSITIVE_INFINITY), SG.setNode(GG)
      }));
      let YG = GG.nodes()[0];
      void 0 !== YG && yG.decrease(YG, 0);
      let VG = !1;
      for (; yG.size() > 0;) {
        if (wG = yG.removeMin(), wG in LG) SG.setEdge(wG, LG[wG]);
        else {
          if (VG) throw new Error("Input graph is not connected: " + GG);
          VG = !0
        }
        null == (ZG = GG.nodeEdges(wG)) || ZG.forEach(kG)
      }
      return SG
    }

    function sG(GG, bG, ZG, wG) {
      return function(GG, bG, ZG, wG) {
        if (void 0 === ZG) return uG(GG, bG, ZG, wG);
        let SG = !1,
          LG = GG.nodes();
        for (let yG = 0; yG < LG.length; yG++) {
          let kG = LG[yG];
          if (void 0 === kG) continue;
          let UG = wG(kG);
          for (let GG = 0; GG < UG.length; GG++) {
            let bG = UG[GG];
            if (!bG) continue;
            let wG = bG.v === kG ? bG.v : bG.w;
            ZG({
              v: wG,
              w: wG === bG.v ? bG.w : bG.v
            }) < 0 && (SG = !0)
          }
          if (SG) return zG(GG, bG, ZG, wG)
        }
        return uG(GG, bG, ZG, wG)
      }(GG, bG, ZG, null != wG ? wG : bG => {
        var ZG;
        return null != (ZG = GG.outEdges(bG)) ? ZG : []
      })
    }
    var qG = UG;

    function nG(GG, bG, ZG, wG) {
      let SG = wG;
      for (; GG.hasNode(SG);) SG = BG(wG);
      return ZG.dummy = bG, GG.setNode(SG, ZG), SG
    }

    function gG(GG) {
      let bG = new qG({
        multigraph: GG.isMultigraph()
      }).setGraph(GG.graph());
      return GG.nodes().forEach((ZG => {
        GG.children(ZG).length || bG.setNode(ZG, GG.node(ZG))
      })), GG.edges().forEach((ZG => {
        bG.setEdge(ZG, GG.edge(ZG))
      })), bG
    }

    function eG(GG, bG) {
      let ZG, wG, SG = GG.x,
        LG = GG.y,
        yG = bG.x - SG,
        kG = bG.y - LG,
        UG = GG.width / 2,
        YG = GG.height / 2;
      if (!yG && !kG) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(kG) * UG > Math.abs(yG) * YG ? (kG < 0 && (YG = -YG), ZG = YG * yG / kG, wG = YG) : (yG < 0 && (UG = -UG), ZG = UG, wG = UG * kG / yG), {
        x: SG + ZG,
        y: LG + wG
      }
    }

    function RG(GG) {
      let bG = Gb(DG(GG) + 1).map((() => []));
      return GG.nodes().forEach((ZG => {
        let wG = GG.node(ZG),
          SG = wG.rank;
        void 0 !== SG && (bG[SG] || (bG[SG] = []), bG[SG][wG.order] = ZG)
      })), bG
    }

    function TG(GG, bG, ZG, wG) {
      let SG = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (SG.rank = ZG, SG.order = wG), nG(GG, "border", SG, bG)
    }
    var HG = 65535;

    function tG(GG, bG) {
      if (bG.length > HG) {
        let ZG = function(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HG,
            ZG = [];
          for (let wG = 0; wG < GG.length; wG += bG) {
            let SG = GG.slice(wG, wG + bG);
            ZG.push(SG)
          }
          return ZG
        }(bG);
        return GG(...ZG.map((bG => GG(...bG))))
      }
      return GG(...bG)
    }

    function DG(GG) {
      let bG = GG.nodes().map((bG => {
        let ZG = GG.node(bG).rank;
        return void 0 === ZG ? Number.MIN_VALUE : ZG
      }));
      return tG(Math.max, bG)
    }

    function NG(GG, bG) {
      let ZG = Date.now();
      try {
        return bG()
      } finally {
        console.log(GG + " time: " + (Date.now() - ZG) + "ms")
      }
    }

    function OG(GG, bG) {
      return bG()
    }
    var xG = 0;

    function BG(GG) {
      return GG + "" + ++xG
    }

    function Gb(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == bG && (bG = GG, GG = 0);
      let wG = GG => GG < bG;
      ZG < 0 && (wG = GG => bG < GG);
      let SG = [];
      for (let LG = GG; wG(LG); LG += ZG) SG.push(LG);
      return SG
    }

    function bb(GG, bG) {
      let ZG = {};
      for (let wG of bG) void 0 !== GG[wG] && (ZG[wG] = GG[wG]);
      return ZG
    }

    function Zb(GG, bG) {
      let ZG;
      return ZG = "string" == typeof bG ? GG => GG[bG] : bG, Object.entries(GG).reduce(((GG, bG) => {
        let [wG, SG] = bG;
        return GG[wG] = ZG(SG, wG), GG
      }), {})
    }
    var wb = "\0";

    function Sb(GG, bG, ZG) {
      var wG, SG, LG, yG, kG, UG;
      if (!(GG && bG && ZG && "edge" === bG.dummy && "edge" === ZG.dummy && bG.edgeObj && ZG.edgeObj && GG[bG.edgeObj.v] && GG[ZG.edgeObj.v] && GG[bG.edgeObj.w] && GG[ZG.edgeObj.w])) return 0;
      let YG = !0;
      bG.edgeObj.w === ZG.edgeObj.w && (YG = !1);
      let VG = YG ? null != (SG = null == (wG = GG[bG.edgeObj.v]) ? void 0 : wG.rank) ? SG : NaN : null != (yG = null == (LG = GG[bG.edgeObj.w]) ? void 0 : LG.rank) ? yG : NaN,
        pG = Object.entries(GG).find((GG => {
          var ZG, wG;
          return (null == (ZG = GG[1].edgeObj) ? void 0 : ZG.v) === bG.edgeObj.v && (null == (wG = GG[1].edgeObj) ? void 0 : wG.w) === bG.edgeObj.w && GG[1].rank === VG
        })),
        fG = Object.entries(GG).find((GG => {
          var bG, wG;
          return (null == (bG = GG[1].edgeObj) ? void 0 : bG.v) === ZG.edgeObj.v && (null == (wG = GG[1].edgeObj) ? void 0 : wG.w) === ZG.edgeObj.w && GG[1].rank === VG
        }));
      if (!pG || !fG) return 0;
      let QG = null != (kG = pG[1].order) ? kG : NaN,
        KG = null != (UG = fG[1].order) ? UG : NaN;
      return isNaN(QG - KG) ? 0 : QG - KG
    }
    var Lb = "3.1.1";

    function yb(GG) {
      GG._prev._next = GG._next, GG._next._prev = GG._prev, delete GG._next, delete GG._prev
    }

    function kb(GG, bG) {
      if ("_next" !== GG && "_prev" !== GG) return bG
    }
    var Ub = class {
        constructor() {
          SG(this, "_sentinel");
          let GG = {};
          GG._next = GG._prev = GG, this._sentinel = GG
        }
        dequeue() {
          let GG = this._sentinel,
            bG = GG._prev;
          if (bG !== GG) return yb(bG), bG
        }
        enqueue(GG) {
          let bG = this._sentinel;
          GG._prev && GG._next && yb(GG), GG._next = bG._next, bG._next._prev = GG, bG._next = GG, GG._prev = bG
        }
        toString() {
          let GG = [],
            bG = this._sentinel,
            ZG = bG._prev;
          for (; ZG !== bG;) GG.push(JSON.stringify(ZG, kb)), ZG = ZG._prev;
          return "[" + GG.join(", ") + "]"
        }
      },
      Yb = () => 1;

    function Vb(GG, bG) {
      if (GG.nodeCount() <= 1) return [];
      let ZG = function(GG, bG) {
        let ZG = new qG,
          wG = 0,
          SG = 0;
        GG.nodes().forEach((GG => {
          ZG.setNode(GG, {
            v: GG,
            in: 0,
            out: 0
          })
        })), GG.edges().forEach((GG => {
          let LG = ZG.edge(GG.v, GG.w) || 0,
            yG = bG(GG),
            kG = LG + yG;
          ZG.setEdge(GG.v, GG.w, kG);
          let UG = ZG.node(GG.v),
            YG = ZG.node(GG.w);
          SG = Math.max(SG, UG.out += yG), wG = Math.max(wG, YG.in += yG)
        }));
        let LG = function(GG) {
            let bG = [];
            for (let ZG = 0; ZG < GG; ZG++) bG.push(ZG);
            return bG
          }(SG + wG + 3).map((() => new Ub)),
          yG = wG + 1;
        return ZG.nodes().forEach((GG => {
          fb(LG, yG, ZG.node(GG))
        })), {
          graph: ZG,
          buckets: LG,
          zeroIdx: yG
        }
      }(GG, bG || Yb);
      return function(GG, bG, ZG) {
        var wG;
        let SG, LG = [],
          yG = bG[bG.length - 1],
          kG = bG[0];
        for (; GG.nodeCount();) {
          for (; SG = kG.dequeue();) pb(GG, bG, ZG, SG);
          for (; SG = yG.dequeue();) pb(GG, bG, ZG, SG);
          if (GG.nodeCount())
            for (let yG = bG.length - 2; yG > 0; --yG)
              if (SG = null == (wG = bG[yG]) ? void 0 : wG.dequeue(), SG) {
                LG = LG.concat(pb(GG, bG, ZG, SG, !0) || []);
                break
              }
        }
        return LG
      }(ZG.graph, ZG.buckets, ZG.zeroIdx).flatMap((bG => GG.outEdges(bG.v, bG.w) || []))
    }

    function pb(GG, bG, ZG, wG, SG) {
      let LG = [],
        yG = SG ? LG : void 0;
      return (GG.inEdges(wG.v) || []).forEach((wG => {
        let yG = GG.edge(wG),
          kG = GG.node(wG.v);
        SG && LG.push({
          v: wG.v,
          w: wG.w
        }), kG.out -= yG, fb(bG, ZG, kG)
      })), (GG.outEdges(wG.v) || []).forEach((wG => {
        let SG = GG.edge(wG),
          LG = wG.w,
          yG = GG.node(LG);
        yG.in -= SG, fb(bG, ZG, yG)
      })), GG.removeNode(wG.v), yG
    }

    function fb(GG, bG, ZG) {
      var wG, SG, LG;
      ZG.out ? ZG.in ? null == (LG = GG[ZG.out - ZG.in + bG]) || LG.enqueue(ZG) : null == (SG = GG[GG.length - 1]) || SG.enqueue(ZG) : null == (wG = GG[0]) || wG.enqueue(ZG)
    }

    function Qb(GG, bG) {
      var ZG;
      ("greedy" === GG.graph().acyclicer ? Vb(GG, (ZG = GG, GG => ZG.edge(GG).weight)) : function(GG, bG) {
        let ZG = [],
          wG = {},
          SG = {};

        function LG(bG) {
          Object.hasOwn(SG, bG) || (SG[bG] = !0, wG[bG] = !0, GG.outEdges(bG).forEach((GG => {
            Object.hasOwn(wG, GG.w) ? ZG.push(GG) : LG(GG.w)
          })), delete wG[bG])
        }

        function yG(LG) {
          var kG;
          Object.hasOwn(SG, LG) || (SG[LG] = !0, wG[LG] = !0, null == (kG = GG.outEdges(LG)) || kG.forEach((SG => {
            var kG, UG;
            Object.hasOwn(wG, SG.w) || (null == (kG = bG.node(LG)) ? void 0 : kG.rank) > (null == (UG = bG.node(SG.w)) ? void 0 : UG.rank) && function(GG, bG, ZG) {
              let wG = new Set;

              function SG(bG) {
                var LG;
                if (GG.sources().includes(bG)) return !0;
                wG.add(bG);
                for (let yG of null != (LG = GG.inEdges(bG)) ? LG : [])
                  if ((yG.v !== ZG.v || yG.w !== ZG.w) && !wG.has(yG.v) && SG(yG.v)) return !0;
                return !1
              }
              return SG(bG)
            }(GG, SG.w, SG) ? ZG.push(SG) : yG(SG.w)
          })), delete wG[LG])
        }
        let kG = LG;
        return bG && "function" == typeof bG.node && (kG = yG), GG.sources().forEach(kG), GG.nodes().forEach(kG), ZG
      }(GG, null != bG ? bG : null)).forEach((bG => {
        let ZG = GG.edge(bG);
        GG.removeEdge(bG), ZG.forwardName = bG.name, ZG.reversed = !0, GG.setEdge(bG.w, bG.v, ZG, BG("rev"))
      }))
    }

    function Kb(GG) {
      GG.graph().dummyChains = [], GG.edges().forEach((bG => function(GG, bG) {
        let ZG, wG, SG, LG = bG.v,
          yG = GG.node(LG).rank,
          kG = bG.w,
          UG = GG.node(kG).rank,
          YG = bG.name,
          VG = GG.edge(bG),
          pG = VG.labelRank;
        if (UG === yG + 1) return;
        for (GG.removeEdge(bG), SG = 0, ++yG; yG < UG; ++SG, ++yG) VG.points = [], wG = {
          width: 0,
          height: 0,
          edgeLabel: VG,
          edgeObj: bG,
          rank: yG
        }, ZG = nG(GG, "edge", wG, "_d"), yG === pG && (wG.width = VG.width, wG.height = VG.height, wG.dummy = "edge-label", wG.labelpos = VG.labelpos), GG.setEdge(LG, ZG, {
          weight: VG.weight
        }, YG), 0 === SG && GG.graph().dummyChains.push(ZG), LG = ZG;
        GG.setEdge(LG, kG, {
          weight: VG.weight
        }, YG)
      }(GG, bG)))
    }

    function hb(GG) {
      let bG = {};
      GG.sources().forEach((function ZG(wG) {
        let SG = GG.node(wG);
        if (Object.hasOwn(bG, wG)) return SG.rank;
        bG[wG] = !0;
        let LG = GG.outEdges(wG),
          yG = LG ? LG.map((bG => null == bG ? Number.POSITIVE_INFINITY : ZG(bG.w) - GG.edge(bG).minlen)) : [],
          kG = tG(Math.min, yG);
        return kG === Number.POSITIVE_INFINITY && (kG = 0), SG.rank = kG
      }))
    }

    function db(GG, bG) {
      return GG.node(bG.w).rank - GG.node(bG.v).rank - GG.edge(bG).minlen
    }
    var Jb = function(GG) {
      let bG = new qG({
          directed: !1
        }),
        ZG = GG.nodes();
      if (0 === ZG.length) throw new Error("Graph must have at least one node");
      let wG, SG, LG = ZG[0],
        yG = GG.nodeCount();
      for (bG.setNode(LG, {}); rb(bG, GG) < yG && (wG = zb(bG, GG), wG);) SG = bG.hasNode(wG.v) ? db(GG, wG) : -db(GG, wG), Eb(bG, GG, SG);
      return bG
    };

    function rb(GG, bG) {
      return GG.nodes().forEach((function ZG(wG) {
        let SG = bG.nodeEdges(wG);
        SG && SG.forEach((SG => {
          let LG = SG.v,
            yG = wG === LG ? SG.w : LG;
          !GG.hasNode(yG) && !db(bG, SG) && (GG.setNode(yG, {}), GG.setEdge(wG, yG, {}), ZG(yG))
        }))
      })), GG.nodeCount()
    }

    function zb(GG, bG) {
      return bG.edges().reduce(((ZG, wG) => {
        let SG = Number.POSITIVE_INFINITY;
        return GG.hasNode(wG.v) !== GG.hasNode(wG.w) && (SG = db(bG, wG)), SG < ZG[0] ? [SG, wG] : ZG
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Eb(GG, bG, ZG) {
      GG.nodes().forEach((GG => bG.node(GG).rank += ZG))
    }
    var {
      preorder: ob,
      postorder: Xb
    } = JG, ub = ib;

    function ib(GG) {
      GG = function(GG) {
        let bG = (new qG).setGraph(GG.graph());
        return GG.nodes().forEach((ZG => bG.setNode(ZG, GG.node(ZG)))), GG.edges().forEach((ZG => {
          let wG = bG.edge(ZG.v, ZG.w) || {
              weight: 0,
              minlen: 1
            },
            SG = GG.edge(ZG);
          bG.setEdge(ZG.v, ZG.w, {
            weight: wG.weight + SG.weight,
            minlen: Math.max(wG.minlen, SG.minlen)
          })
        })), bG
      }(GG), hb(GG);
      let bG, ZG, wG = Jb(GG);
      for (mb(wG), Cb(wG, GG); bG = Fb(wG);) ZG = vb(wG, GG, bG), ab(wG, GG, bG, ZG)
    }

    function Cb(GG, bG) {
      let ZG = Xb(GG, GG.nodes());
      ZG = ZG.slice(0, ZG.length - 1), ZG.forEach((ZG => function(GG, bG, ZG) {
        let wG = GG.node(ZG).parent,
          SG = GG.edge(ZG, wG);
        SG.cutvalue = Wb(GG, bG, ZG)
      }(GG, bG, ZG)))
    }

    function Wb(GG, bG, ZG) {
      let wG = GG.node(ZG).parent,
        SG = !0,
        LG = bG.edge(ZG, wG),
        yG = 0;
      LG || (SG = !1, LG = bG.edge(wG, ZG)), yG = LG.weight;
      let kG = bG.nodeEdges(ZG);
      return kG && kG.forEach((LG => {
        let kG = LG.v === ZG,
          UG = kG ? LG.w : LG.v;
        if (UG !== wG) {
          let wG = kG === SG,
            YG = bG.edge(LG).weight;
          if (yG += wG ? YG : -YG, function(GG, bG, ZG) {
              return GG.hasEdge(bG, ZG)
            }(GG, ZG, UG)) {
            let bG = GG.edge(ZG, UG).cutvalue;
            yG += wG ? -bG : bG
          }
        }
      })), yG
    }

    function mb(GG, bG) {
      arguments.length < 2 && (bG = GG.nodes()[0]), Ib(GG, {}, 1, bG)
    }

    function Ib(GG, bG, ZG, wG, SG) {
      let LG = ZG,
        yG = GG.node(wG);
      bG[wG] = !0;
      let kG = GG.neighbors(wG);
      return kG && kG.forEach((SG => {
        Object.hasOwn(bG, SG) || (ZG = Ib(GG, bG, ZG, SG, wG))
      })), yG.low = LG, yG.lim = ZG++, SG ? yG.parent = SG : delete yG.parent, ZG
    }

    function Fb(GG) {
      return GG.edges().find((bG => GG.edge(bG).cutvalue < 0))
    }

    function vb(GG, bG, ZG) {
      let wG = ZG.v,
        SG = ZG.w;
      bG.hasEdge(wG, SG) || (wG = ZG.w, SG = ZG.v);
      let LG = GG.node(wG),
        yG = GG.node(SG),
        kG = LG,
        UG = !1;
      return LG.lim > yG.lim && (kG = yG, UG = !0), bG.edges().filter((bG => UG === cb(GG, GG.node(bG.v), kG) && UG !== cb(GG, GG.node(bG.w), kG))).reduce(((GG, ZG) => db(bG, ZG) < db(bG, GG) ? ZG : GG))
    }

    function ab(GG, bG, ZG, wG) {
      let SG = ZG.v,
        LG = ZG.w;
      GG.removeEdge(SG, LG), GG.setEdge(wG.v, wG.w, {}), mb(GG), Cb(GG, bG),
        function(GG, bG) {
          let ZG = GG.nodes().find((bG => !GG.node(bG).parent));
          if (!ZG) return;
          let wG = ob(GG, [ZG]);
          wG = wG.slice(1), wG.forEach((ZG => {
            let wG = GG.node(ZG).parent,
              SG = bG.edge(ZG, wG),
              LG = !1;
            SG || (SG = bG.edge(wG, ZG), LG = !0), bG.node(ZG).rank = bG.node(wG).rank + (LG ? SG.minlen : -SG.minlen)
          }))
        }(GG, bG)
    }

    function cb(GG, bG, ZG) {
      return ZG.low <= bG.lim && bG.lim <= ZG.lim
    }
    ib.initLowLimValues = mb, ib.initCutValues = Cb, ib.calcCutValue = Wb, ib.leaveEdge = Fb, ib.enterEdge = vb, ib.exchangeEdges = ab;
    var lb = function(GG) {
      let bG = GG.graph().ranker;
      if ("function" == typeof bG) return bG(GG);
      switch (bG) {
        case "network-simplex":
        default:
          Pb(GG);
          break;
        case "tight-tree":
          ! function(GG) {
            hb(GG), Jb(GG)
          }(GG);
          break;
        case "longest-path":
          jb(GG);
        case "none":
      }
    };
    var jb = hb;

    function Pb(GG) {
      ub(GG)
    }
    var Mb = function(GG) {
      let bG = function(GG) {
          let bG = {},
            ZG = 0;

          function wG(SG) {
            let LG = ZG;
            GG.children(SG).forEach(wG), bG[SG] = {
              low: LG,
              lim: ZG++
            }
          }
          return GG.children(wb).forEach(wG), bG
        }(GG),
        ZG = GG.graph();
      if (!Array.isArray(ZG.dummyChains)) return;
      ZG.dummyChains.forEach((ZG => {
        let wG = GG.node(ZG),
          SG = wG.edgeObj,
          LG = function(GG, bG, ZG, wG) {
            let SG, LG = [],
              yG = [],
              kG = Math.min(bG[ZG].low, bG[wG].low),
              UG = Math.max(bG[ZG].lim, bG[wG].lim);
            SG = ZG;
            do {
              SG = GG.parent(SG), LG.push(SG)
            } while (SG && (bG[SG].low > kG || UG > bG[SG].lim));
            let YG = SG,
              VG = wG;
            for (;
              (VG = GG.parent(VG)) !== YG;) yG.push(VG);
            return {
              path: LG.concat(yG.reverse()),
              lca: YG
            }
          }(GG, bG, SG.v, SG.w),
          yG = LG.path,
          kG = LG.lca,
          UG = 0,
          YG = yG[UG],
          VG = !0;
        for (; ZG !== SG.w;) {
          if (wG = GG.node(ZG), VG) {
            for (;
              (YG = yG[UG]) !== kG && GG.node(YG).maxRank < wG.rank;) UG++;
            YG === kG && (VG = !1)
          }
          if (!VG) {
            for (; UG < yG.length - 1 && GG.node(yG[UG + 1]).minRank <= wG.rank;) UG++;
            YG = yG[UG]
          }
          void 0 !== YG && GG.setParent(ZG, YG), ZG = GG.successors(ZG)[0]
        }
      }))
    };

    function Ab(GG) {
      let bG = nG(GG, "root", {}, "_root"),
        ZG = function(GG) {
          let bG = {};

          function ZG(wG, SG) {
            let LG = GG.children(wG);
            LG && LG.length && LG.forEach((GG => ZG(GG, SG + 1))), bG[wG] = SG
          }
          return GG.children(wb).forEach((GG => ZG(GG, 1))), bG
        }(GG),
        wG = Object.values(ZG),
        SG = tG(Math.max, wG) - 1,
        LG = 2 * SG + 1;
      GG.graph().nestingRoot = bG, GG.edges().forEach((bG => GG.edge(bG).minlen *= LG));
      let yG = function(GG) {
        return GG.edges().reduce(((bG, ZG) => bG + GG.edge(ZG).weight), 0)
      }(GG) + 1;
      GG.children(wb).forEach((wG => {
        sb(GG, bG, LG, yG, SG, ZG, wG)
      })), GG.graph().nodeRankFactor = LG
    }

    function sb(GG, bG, ZG, wG, SG, LG, yG) {
      var kG;
      let UG = GG.children(yG);
      if (!UG.length) return void(yG !== bG && GG.setEdge(bG, yG, {
        weight: 0,
        minlen: ZG
      }));
      let YG = TG(GG, "_bt"),
        VG = TG(GG, "_bb"),
        pG = GG.node(yG);
      GG.setParent(YG, yG), pG.borderTop = YG, GG.setParent(VG, yG), pG.borderBottom = VG, UG.forEach((kG => {
        var UG;
        sb(GG, bG, ZG, wG, SG, LG, kG);
        let pG = GG.node(kG),
          fG = pG.borderTop ? pG.borderTop : kG,
          QG = pG.borderBottom ? pG.borderBottom : kG,
          KG = pG.borderTop ? wG : 2 * wG,
          hG = fG !== QG ? 1 : SG - (null != (UG = LG[yG]) ? UG : 0) + 1;
        GG.setEdge(YG, fG, {
          weight: KG,
          minlen: hG,
          nestingEdge: !0
        }), GG.setEdge(QG, VG, {
          weight: KG,
          minlen: hG,
          nestingEdge: !0
        })
      })), GG.parent(yG) || GG.setEdge(bG, YG, {
        weight: 0,
        minlen: SG + (null != (kG = LG[yG]) ? kG : 0)
      })
    }
    var qb = function(GG) {
      GG.children(wb).forEach((function bG(ZG) {
        let wG = GG.children(ZG),
          SG = GG.node(ZG);
        if (wG.length && wG.forEach(bG), SG && Object.hasOwn(SG, "minRank")) {
          SG.borderLeft = [], SG.borderRight = [];
          for (let bG = SG.minRank, wG = SG.maxRank + 1; bG < wG; ++bG) nb(GG, "borderLeft", "_bl", ZG, SG, bG), nb(GG, "borderRight", "_br", ZG, SG, bG)
        }
      }))
    };

    function nb(GG, bG, ZG, wG, SG, LG) {
      let yG = {
          width: 0,
          height: 0,
          rank: LG,
          borderType: bG
        },
        kG = SG[bG][LG - 1],
        UG = nG(GG, "border", yG, ZG);
      SG[bG][LG] = UG, GG.setParent(UG, wG), kG && GG.setEdge(kG, UG, {
        weight: 1
      })
    }

    function gb(GG) {
      var bG;
      let ZG = null == (bG = GG.graph().rankdir) ? void 0 : bG.toLowerCase();
      ("bt" === ZG || "rl" === ZG) && function(GG) {
        GG.nodes().forEach((bG => Tb(GG.node(bG)))), GG.edges().forEach((bG => {
          var ZG;
          let wG = GG.edge(bG);
          null == (ZG = wG.points) || ZG.forEach(Tb), Object.hasOwn(wG, "y") && Tb(wG)
        }))
      }(GG), ("lr" === ZG || "rl" === ZG) && (function(GG) {
        GG.nodes().forEach((bG => Hb(GG.node(bG)))), GG.edges().forEach((bG => {
          var ZG;
          let wG = GG.edge(bG);
          null == (ZG = wG.points) || ZG.forEach(Hb), Object.hasOwn(wG, "x") && Hb(wG)
        }))
      }(GG), eb(GG))
    }

    function eb(GG) {
      GG.nodes().forEach((bG => Rb(GG.node(bG)))), GG.edges().forEach((bG => Rb(GG.edge(bG))))
    }

    function Rb(GG) {
      let bG = GG.width;
      GG.width = GG.height, GG.height = bG
    }

    function Tb(GG) {
      GG.y = -GG.y
    }

    function Hb(GG) {
      let bG = GG.x;
      GG.x = GG.y, GG.y = bG
    }

    function tb(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ZG = {},
        wG = GG.nodes().filter((bG => !GG.children(bG).length)),
        SG = wG.map((bG => GG.node(bG).rank)),
        LG = Gb(tG(Math.max, SG) + 1).map((() => []));
      return wG.sort(((bG, ZG) => GG.node(bG).rank - GG.node(ZG).rank)).forEach((function wG(SG) {
        if (ZG[SG]) return;
        ZG[SG] = !0;
        let yG = GG.node(SG);
        LG[yG.rank].push(SG);
        let kG = GG.successors(SG);
        kG && [...kG].sort(((ZG, wG) => function(ZG, wG) {
          let SG = GG.node(ZG),
            LG = GG.node(wG);
          return Sb(bG, SG, LG)
        }(ZG, wG))).forEach(wG)
      })), LG
    }

    function Db(GG, bG) {
      let ZG = 0;
      for (let wG = 1; wG < bG.length; ++wG) ZG += Nb(GG, bG[wG - 1], bG[wG]);
      return ZG
    }

    function Nb(GG, bG, ZG) {
      let wG = function(GG, bG) {
          return GG.reduce(((GG, ZG, wG) => (GG[ZG] = bG[wG], GG)), {})
        }(ZG, ZG.map(((GG, bG) => bG))),
        SG = bG.flatMap((bG => {
          let ZG = GG.outEdges(bG);
          return ZG ? ZG.map((bG => ({
            pos: wG[bG.w],
            weight: GG.edge(bG).weight
          }))).sort(((GG, bG) => GG.pos - bG.pos)) : []
        })),
        LG = 1;
      for (; LG < ZG.length;) LG <<= 1;
      let yG = 2 * LG - 1;
      LG -= 1;
      let kG = new Array(yG).fill(0),
        UG = 0;
      return SG.forEach((GG => {
        let bG = GG.pos + LG;
        kG[bG] += GG.weight;
        let ZG = 0;
        for (; bG > 0;) bG % 2 && (ZG += kG[bG + 1]), bG = bG - 1 >> 1, kG[bG] += GG.weight;
        UG += GG.weight * ZG
      })), UG
    }

    function Ob(GG, bG) {
      let ZG = {};
      return GG.forEach(((GG, bG) => {
          let wG = {
            indegree: 0,
            in: [],
            out: [],
            vs: [GG.v],
            i: bG
          };
          void 0 !== GG.barycenter && (wG.barycenter = GG.barycenter, wG.weight = GG.weight), ZG[GG.v] = wG
        })), bG.edges().forEach((GG => {
          let bG = ZG[GG.v],
            wG = ZG[GG.w];
          void 0 !== bG && void 0 !== wG && (wG.indegree++, bG.out.push(wG))
        })),
        function(GG) {
          let bG = [];

          function ZG(GG) {
            return bG => {
              bG.merged || (void 0 === bG.barycenter || void 0 === GG.barycenter || bG.barycenter >= GG.barycenter) && function(GG, bG) {
                let ZG = 0,
                  wG = 0;
                GG.weight && (ZG += GG.barycenter * GG.weight, wG += GG.weight), bG.weight && (ZG += bG.barycenter * bG.weight, wG += bG.weight), GG.vs = bG.vs.concat(GG.vs), GG.barycenter = ZG / wG, GG.weight = wG, GG.i = Math.min(bG.i, GG.i), bG.merged = !0
              }(GG, bG)
            }
          }

          function wG(bG) {
            return ZG => {
              ZG.in.push(bG), 0 === --ZG.indegree && GG.push(ZG)
            }
          }
          for (; GG.length;) {
            let SG = GG.pop();
            bG.push(SG), SG.in.reverse().forEach(ZG(SG)), SG.out.forEach(wG(SG))
          }
          return bG.filter((GG => !GG.merged)).map((GG => bb(GG, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(ZG).filter((GG => !GG.indegree)))
    }

    function xb(GG, bG, ZG, wG, SG) {
      let LG = {},
        yG = null,
        kG = null,
        UG = SG;
      "boolean" == typeof bG ? (UG = bG, LG = {}) : bG && (LG = bG, yG = null != ZG ? ZG : null, kG = null != wG ? wG : null);
      let YG = function(GG, bG) {
          let ZG = {
            lhs: [],
            rhs: []
          };
          return GG.forEach((GG => {
            bG(GG) ? ZG.lhs.push(GG) : ZG.rhs.push(GG)
          })), ZG
        }(GG, (GG => Object.hasOwn(GG, "barycenter"))),
        VG = YG.lhs,
        pG = YG.rhs.sort(((GG, bG) => bG.i - GG.i)),
        fG = [],
        QG = 0,
        KG = 0,
        hG = 0;
      VG.sort(function(GG, bG, ZG) {
        return (wG, SG) => {
          if (wG.barycenter < SG.barycenter) return -1;
          if (wG.barycenter > SG.barycenter) return 1;
          if (GG && ("string" == typeof wG.vs[0] || "string" == typeof SG.vs[0])) {
            let ZG = GG.node(wG.vs[0]),
              LG = GG.node(SG.vs[0]),
              yG = Sb(bG, ZG, LG);
            if (0 !== yG) return yG
          }
          return ZG ? SG.i - wG.i : wG.i - SG.i
        }
      }(kG, yG, !!UG));
      for (let [JG, rG] of Object.entries(LG)) {
        let GG = VG.findIndex((GG => GG.vs[0] === JG));
        VG.splice(GG + 1, 0, rG)
      }
      hG = Bb(fG, pG, hG), VG.forEach((GG => {
        hG += GG.vs.length, fG.push(GG.vs), QG += GG.barycenter * GG.weight, KG += GG.weight, hG = Bb(fG, pG, hG)
      }));
      let dG = {
        vs: fG.flat(1)
      };
      return KG && (dG.barycenter = QG / KG, dG.weight = KG), dG
    }

    function Bb(GG, bG, ZG) {
      let wG;
      for (; bG.length && (wG = bG[bG.length - 1]).i <= ZG;) bG.pop(), GG.push(wG.vs), ZG++;
      return ZG
    }

    function GZ(GG, bG, ZG, wG, SG) {
      var LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG;
      let dG = null,
        JG = SG;
      "boolean" == typeof wG ? (JG = wG, dG = null) : void 0 !== wG && (dG = wG);
      let rG = GG.children(bG),
        zG = GG.node(bG),
        EG = zG ? zG.borderLeft : void 0,
        oG = zG ? zG.borderRight : void 0,
        XG = {};
      EG && (rG = rG.filter((GG => GG !== EG && GG !== oG)));
      let uG = function(GG) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((bG => {
          let ZG = GG.inEdges(bG);
          if (!ZG || !ZG.length) return {
            v: bG
          };
          {
            let wG = ZG.reduce(((bG, ZG) => {
              let wG = GG.edge(ZG),
                SG = GG.node(ZG.v);
              return {
                sum: bG.sum + wG.weight * SG.order,
                weight: bG.weight + wG.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: bG,
              barycenter: wG.sum / wG.weight,
              weight: wG.weight
            }
          }
        }))
      }(GG, rG);
      uG.forEach((bG => {
        if (GG.children(bG.v).length) {
          let {
            result: wG
          } = GZ(GG, bG.v, ZG, dG, JG);
          XG[bG.v] = wG, Object.hasOwn(wG, "barycenter") && function(GG, bG) {
            void 0 !== GG.barycenter ? (GG.barycenter = (GG.barycenter * GG.weight + bG.barycenter * bG.weight) / (GG.weight + bG.weight), GG.weight += bG.weight) : (GG.barycenter = bG.barycenter, GG.weight = bG.weight)
          }(bG, wG)
        }
      }));
      let iG = Ob(uG, ZG);
      ! function(GG, bG) {
        GG.forEach((GG => {
          GG.vs = GG.vs.flatMap((GG => bG[GG] ? bG[GG].vs : GG))
        }))
      }(iG, XG);
      let CG = {},
        WG = !1;
      for (let IG = 0; IG < iG.length; IG++)
        for (let bG = IG + 1; bG < iG.length; bG++)
          if (iG[IG] && iG[bG] && null != (LG = iG[IG]) && LG.barycenter && null != (yG = iG[bG]) && yG.barycenter && (null == (kG = iG[IG]) ? void 0 : kG.barycenter) === iG[bG].barycenter) {
            let ZG = null != (YG = null == (UG = iG[IG]) ? void 0 : UG.vs[0]) ? YG : "",
              wG = null != (pG = null == (VG = iG[bG]) ? void 0 : VG.vs[0]) ? pG : "",
              SG = GG.node(ZG),
              LG = GG.node(wG);
            if ("edge" === SG.dummy && "edge" === LG.dummy && (null == (fG = SG.edgeObj) ? void 0 : fG.v) === (null == (QG = LG.edgeObj) ? void 0 : QG.v) && (null == (KG = SG.edgeObj) ? void 0 : KG.w) === (null == (hG = LG.edgeObj) ? void 0 : hG.w)) {
              if (SG.edgeLabel.reversed) {
                CG[wG] = iG[IG], iG.splice(IG, 1), IG--;
                break
              }
              CG[ZG] = iG[bG], iG.splice(bG, 1), bG--
            } else WG = !0
          } let mG = xb(iG, CG, dG, GG, JG);
      if (EG && oG) {
        mG.vs = [EG, mG.vs, oG].flat(1);
        let bG = GG.predecessors(EG);
        if (bG && bG.length) {
          let ZG = GG.node(bG[0]),
            wG = GG.predecessors(oG),
            SG = GG.node(wG[0]);
          Object.hasOwn(mG, "barycenter") || (mG.barycenter = 0, mG.weight = 0), mG.barycenter = (mG.barycenter * mG.weight + ZG.order + SG.order) / (mG.weight + 2), mG.weight += 2
        }
      }
      return Object.defineProperty(mG, "result", {
        value: mG,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(mG, "usedBias", {
        value: WG,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), mG
    }

    function bZ(GG, bG, ZG, wG) {
      wG || (wG = GG.nodes());
      let SG = function(GG) {
          let bG;
          for (; GG.hasNode(bG = BG("_root")););
          return bG
        }(GG),
        LG = new qG({
          compound: !0
        }).setGraph({
          root: SG
        }).setDefaultNodeLabel((bG => GG.node(bG)));
      return wG.forEach((wG => {
        let yG = GG.node(wG),
          kG = GG.parent(wG);
        if (yG.rank === bG || yG.minRank <= bG && bG <= yG.maxRank) {
          LG.setNode(wG), LG.setParent(wG, kG || SG);
          let UG = GG[ZG](wG);
          UG && UG.forEach((bG => {
            let ZG = bG.v === wG ? bG.w : bG.v,
              SG = LG.edge(ZG, wG),
              yG = void 0 !== SG ? SG.weight : 0;
            LG.setEdge(ZG, wG, {
              weight: GG.edge(bG).weight + yG
            })
          })), Object.hasOwn(yG, "minRank") && LG.setNode(wG, {
            borderLeft: yG.borderLeft[bG],
            borderRight: yG.borderRight[bG]
          })
        }
      })), LG
    }

    function ZZ(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof bG.customOrder) return void bG.customOrder(GG, ZZ);
      let wG = DG(GG),
        SG = wZ(GG, Gb(1, wG + 1), "inEdges"),
        LG = wZ(GG, Gb(wG - 1, -1, -1), "outEdges"),
        yG = tb(GG, ZG);
      if (LZ(GG, yG), bG.disableOptimalOrderHeuristic) return;
      let kG, UG = Number.POSITIVE_INFINITY,
        YG = bG.constraints || [];
      for (let VG = 0, pG = 0; pG < 4; ++VG, ++pG) {
        SZ(VG % 2 ? SG : LG, VG % 4 >= 2, YG, ZG), yG = RG(GG);
        let bG = Db(GG, yG);
        bG < UG ? (pG = 0, kG = Object.assign({}, yG), UG = bG) : bG === UG && (kG = structuredClone(yG))
      }
      LZ(GG, kG)
    }

    function wZ(GG, bG, ZG) {
      let wG = new Map,
        SG = (GG, bG) => {
          wG.has(GG) || wG.set(GG, []), wG.get(GG).push(bG)
        };
      for (let LG of GG.nodes()) {
        let bG = GG.node(LG);
        if ("number" == typeof bG.rank && SG(bG.rank, LG), "number" == typeof bG.minRank && "number" == typeof bG.maxRank)
          for (let GG = bG.minRank; GG <= bG.maxRank; GG++) GG !== bG.rank && SG(GG, LG)
      }
      return bG.map((function(bG) {
        return bZ(GG, bG, ZG, wG.get(bG) || [])
      }))
    }

    function SZ(GG, bG, ZG, wG) {
      let SG = !0,
        LG = new qG;
      GG.forEach((function(GG) {
        ZG.forEach((GG => LG.setEdge(GG.left, GG.right)));
        let yG = GG.graph().root,
          {
            result: kG,
            usedBias: UG
          } = GZ(GG, yG, LG, wG, SG);
        bG && UG && (SG = !SG), kG.vs.forEach(((bG, ZG) => GG.node(bG).order = ZG)),
          function(GG, bG, ZG) {
            let wG, SG = {};
            ZG.forEach((ZG => {
              let LG, yG, kG = GG.parent(ZG);
              for (; kG;) {
                if (LG = GG.parent(kG), LG ? (yG = SG[LG], SG[LG] = kG) : (yG = wG, wG = kG), yG && yG !== kG) return void bG.setEdge(yG, kG);
                kG = LG
              }
            }))
          }(GG, LG, kG.vs)
      }))
    }

    function LZ(GG, bG) {
      Object.values(bG).forEach((bG => bG.forEach(((bG, ZG) => GG.node(bG).order = ZG))))
    }

    function yZ(GG, bG, ZG) {
      if (bG > ZG) {
        let GG = bG;
        bG = ZG, ZG = GG
      }
      let wG = GG[bG];
      wG || (GG[bG] = wG = {}), wG[ZG] = !0
    }

    function kZ(GG, bG, ZG) {
      if (bG > ZG) {
        let GG = bG;
        bG = ZG, ZG = GG
      }
      let wG = GG[bG];
      return void 0 !== wG && Object.hasOwn(wG, ZG)
    }

    function UZ(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        LG = {},
        yG = function(GG, bG, ZG, wG) {
          let SG = new qG,
            LG = GG.graph(),
            yG = function(GG, bG, ZG) {
              return (wG, SG, LG) => {
                let yG, kG = wG.node(SG),
                  UG = wG.node(LG),
                  YG = 0;
                if (YG += kG.width / 2, Object.hasOwn(kG, "labelpos")) switch (kG.labelpos.toLowerCase()) {
                  case "l":
                    yG = -kG.width / 2;
                    break;
                  case "r":
                    yG = kG.width / 2
                }
                if (yG && (YG += ZG ? yG : -yG), yG = void 0, YG += (kG.dummy ? bG : GG) / 2, YG += (UG.dummy ? bG : GG) / 2, YG += UG.width / 2, Object.hasOwn(UG, "labelpos")) switch (UG.labelpos.toLowerCase()) {
                  case "l":
                    yG = UG.width / 2;
                    break;
                  case "r":
                    yG = -UG.width / 2
                }
                return yG && (YG += ZG ? yG : -yG), YG
              }
            }(LG.nodesep, LG.edgesep, wG);
          return bG.forEach((bG => {
            let wG;
            bG.forEach((bG => {
              let LG = ZG[bG];
              if (void 0 !== LG) {
                if (SG.setNode(LG), void 0 !== wG) {
                  let kG = ZG[wG];
                  if (void 0 !== kG) {
                    let ZG = SG.edge(kG, LG);
                    SG.setEdge(kG, LG, Math.max(yG(GG, bG, wG), ZG || 0))
                  }
                }
                wG = bG
              }
            }))
          })), SG
        }(GG, bG, ZG, SG),
        kG = SG ? "borderLeft" : "borderRight";

      function UG(GG, bG) {
        let ZG = yG.nodes().slice(),
          wG = {},
          SG = ZG.pop();
        for (; SG;) {
          if (wG[SG]) GG(SG);
          else {
            wG[SG] = !0, ZG.push(SG);
            for (let GG of bG(SG)) ZG.push(GG)
          }
          SG = ZG.pop()
        }
      }
      return UG((function(GG) {
        let bG = yG.inEdges(GG);
        LG[GG] = bG ? bG.reduce(((GG, bG) => {
          var ZG;
          let wG = null != (ZG = LG[bG.v]) ? ZG : 0,
            SG = yG.edge(bG);
          return Math.max(GG, wG + (void 0 !== SG ? SG : 0))
        }), 0) : 0
      }), (function(GG) {
        return yG.predecessors(GG) || []
      })), UG((function(bG) {
        let ZG = yG.outEdges(bG),
          wG = Number.POSITIVE_INFINITY;
        ZG && (wG = ZG.reduce(((GG, bG) => {
          let ZG = LG[bG.w],
            wG = yG.edge(bG);
          return Math.min(GG, (void 0 !== ZG ? ZG : 0) - (void 0 !== wG ? wG : 0))
        }), Number.POSITIVE_INFINITY));
        let SG = GG.node(bG);
        wG !== Number.POSITIVE_INFINITY && SG.borderType !== kG && (LG[bG] = Math.max(void 0 !== LG[bG] ? LG[bG] : 0, wG))
      }), (function(GG) {
        return yG.successors(GG) || []
      })), Object.keys(wG).forEach((GG => {
        var bG;
        let wG = ZG[GG];
        void 0 !== wG && (LG[GG] = null != (bG = LG[wG]) ? bG : 0)
      })), LG
    }

    function YZ(GG, bG) {
      let ZG, wG = RG(GG),
        SG = Object.assign(function(GG, bG) {
          let ZG = {};
          return bG.length && bG.reduce((function(bG, wG) {
            let SG = 0,
              LG = 0,
              yG = bG.length,
              kG = wG[wG.length - 1];
            return wG.forEach(((bG, UG) => {
              let YG = function(GG, bG) {
                  if (GG.node(bG).dummy) {
                    let ZG = GG.predecessors(bG);
                    if (ZG) return ZG.find((bG => GG.node(bG).dummy))
                  }
                }(GG, bG),
                VG = YG ? GG.node(YG).order : yG;
              (YG || bG === kG) && (wG.slice(LG, UG + 1).forEach((bG => {
                let wG = GG.predecessors(bG);
                wG && wG.forEach((wG => {
                  let LG = GG.node(wG),
                    yG = LG.order;
                  (yG < SG || VG < yG) && (!LG.dummy || !GG.node(bG).dummy) && yZ(ZG, wG, bG)
                }))
              })), LG = UG + 1, SG = VG)
            })), wG
          })), ZG
        }(GG, wG), function(GG, bG) {
          let ZG = {};

          function wG(bG, wG, SG, LG, yG) {
            Gb(wG, SG).forEach((wG => {
              let SG = bG[wG];
              if (void 0 !== SG && GG.node(SG).dummy) {
                let bG = GG.predecessors(SG);
                bG && bG.forEach((bG => {
                  if (void 0 === bG) return;
                  let wG = GG.node(bG);
                  wG.dummy && (wG.order < LG || wG.order > yG) && yZ(ZG, bG, SG)
                }))
              }
            }))
          }
          return bG.length && bG.reduce((function(bG, ZG) {
            let SG = -1,
              LG = -1,
              yG = 0;
            return ZG.forEach(((kG, UG) => {
              if ("border" === GG.node(kG).dummy) {
                let bG = GG.predecessors(kG);
                if (bG && bG.length) {
                  let kG = bG[0];
                  if (void 0 === kG) return;
                  LG = GG.node(kG).order, wG(ZG, yG, UG, SG, LG), yG = UG, SG = LG
                }
              }
              wG(ZG, yG, ZG.length, LG, bG.length)
            })), ZG
          })), ZG
        }(GG, wG)),
        LG = {};
      ["u", "d"].forEach((yG => {
        ZG = "u" === yG ? wG : Object.values(wG).reverse(), ["l", "r"].forEach((wG => {
          "r" === wG && (ZG = ZG.map((GG => Object.values(GG).reverse())));
          let kG = function(GG, bG, ZG, wG, SG) {
              let LG = {},
                yG = {},
                kG = {};
              return bG.forEach((GG => {
                GG.forEach(((GG, bG) => {
                  LG[GG] = GG, yG[GG] = GG, kG[GG] = bG
                }))
              })), bG.forEach((bG => {
                let UG = -1,
                  YG = -1,
                  VG = !1,
                  pG = bG,
                  fG = bG.findIndex((bG => (null == SG ? void 0 : SG.includes(bG)) || VZ(bG, GG, SG)));
                fG > 0 && (pG = [bG[fG], ...bG.slice(0, fG), ...bG.slice(fG + 1)], VG = !0), pG.forEach((bG => {
                  var pG;
                  let fG = wG(bG);
                  if (fG && fG.length) {
                    null != SG && SG.includes(bG) && (fG = fG.filter((bG => VZ(bG, GG, SG))));
                    let wG = fG.sort(((GG, bG) => {
                        let ZG = kG[GG],
                          wG = kG[bG];
                        return (void 0 !== ZG ? ZG : 0) - (void 0 !== wG ? wG : 0)
                      })),
                      QG = (wG.length - 1) / 2;
                    for (let GG = Math.floor(QG), SG = Math.ceil(QG); GG <= SG; ++GG) {
                      let SG = wG[GG];
                      if (void 0 === SG) continue;
                      let fG = kG[SG];
                      if (void 0 !== fG && yG[bG] === bG && UG < fG && kG[SG] !== YG && !kZ(ZG, bG, SG)) {
                        let GG = LG[SG];
                        void 0 !== GG && (yG[SG] = bG, yG[bG] = LG[bG] = GG, UG = fG, VG && (UG = -1, YG = null != (pG = kG[SG]) ? pG : -1, VG = !1))
                      }
                    }
                  }
                }))
              })), {
                root: LG,
                align: yG
              }
            }(GG, ZG, SG, (bG => ("u" === yG ? GG.predecessors(bG) : GG.successors(bG)) || []), bG),
            UG = UZ(GG, ZG, kG.root, kG.align, "r" === wG);
          "r" === wG && (UG = Zb(UG, (GG => -GG))), LG[yG + wG] = UG
        }))
      }));
      let yG = function(GG, bG) {
        return Object.values(bG).reduce(((bG, ZG) => {
          let wG = Number.NEGATIVE_INFINITY,
            SG = Number.POSITIVE_INFINITY;
          Object.entries(ZG).forEach((bG => {
            let [ZG, LG] = bG, yG = function(GG, bG) {
              return GG.node(bG).width
            }(GG, ZG) / 2;
            wG = Math.max(LG + yG, wG), SG = Math.min(LG - yG, SG)
          }));
          let LG = wG - SG;
          return LG < bG[0] && (bG = [LG, ZG]), bG
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(GG, LG);
      return function(GG, bG) {
          let ZG = Object.values(bG),
            wG = tG(Math.min, ZG),
            SG = tG(Math.max, ZG);
          ["u", "d"].forEach((ZG => {
            ["l", "r"].forEach((LG => {
              let yG = ZG + LG,
                kG = GG[yG];
              if (!kG || kG === bG) return;
              let UG = Object.values(kG),
                YG = wG - tG(Math.min, UG);
              "l" !== LG && (YG = SG - tG(Math.max, UG)), YG && (GG[yG] = Zb(kG, (GG => GG + YG)))
            }))
          }))
        }(LG, yG),
        function(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            ZG = GG.ul;
          return ZG ? Zb(ZG, ((ZG, wG) => {
            var SG, LG;
            if (bG) {
              let ZG = bG.toLowerCase(),
                SG = GG[ZG];
              if (SG && void 0 !== SG[wG]) return SG[wG]
            }
            let yG = Object.values(GG).map((GG => {
              let bG = GG[wG];
              return void 0 !== bG ? bG : 0
            })).sort(((GG, bG) => GG - bG));
            return ((null != (SG = yG[1]) ? SG : 0) + (null != (LG = yG[2]) ? LG : 0)) / 2
          })) : {}
        }(LG, GG.graph().align)
    }

    function VZ(GG, bG, ZG) {
      var wG;
      if (!ZG) return !1;
      let SG = null == (wG = bG.node(GG)) ? void 0 : wG.edgeObj;
      if (!SG || bG.node(GG).edgeLabel.reversed) return !1;
      let LG = ZG.indexOf(null == SG ? void 0 : SG.v),
        yG = ZG.indexOf(null == SG ? void 0 : SG.w);
      return -1 !== LG && -1 !== yG && LG === (yG + 1) % ZG.length || LG === (yG - 1) % ZG.length
    }

    function pZ(GG, bG) {
      (function(GG) {
        let bG = RG(GG),
          ZG = GG.graph(),
          wG = ZG.ranksep,
          SG = ZG.rankalign,
          LG = 0;
        bG.forEach((bG => {
          let ZG = bG.reduce(((bG, ZG) => {
            var wG;
            let SG = null != (wG = GG.node(ZG).height) ? wG : 0;
            return bG > SG ? bG : SG
          }), 0);
          bG.forEach((bG => {
            let wG = GG.node(bG);
            wG.y = "top" === SG ? LG + wG.height / 2 : "bottom" === SG ? LG + ZG - wG.height / 2 : LG + ZG / 2
          })), LG += ZG + wG
        }))
      })(GG = gG(GG)), Object.entries(YZ(GG, bG)).forEach((bG => {
        let [ZG, wG] = bG;
        return GG.node(ZG).x = wG
      }))
    }
    var fZ = new WeakMap;

    function QZ(GG) {
      return hZ(GG, OG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), GG
    }

    function KZ(GG, bG, ZG) {
      let wG = bG;
      for (; void 0 !== wG;) {
        let bG = GG.parent(wG);
        if (bG === ZG) return wG;
        wG = bG
      }
    }

    function hZ(GG, bG, ZG) {
      var wG;
      let SG = GG.nodes().filter((bG => GG.children(bG).length)),
        LG = {};
      SG.forEach((wG => {
        let SG = GG.node(wG);
        if (SG && SG.rankdir) {
          let yG = new qG({
            multigraph: !0,
            compound: !0
          });
          yG.setGraph({
            rankdir: SG.rankdir
          });
          let kG = GG.children(wG);
          kG.forEach((bG => {
            let ZG = {
              ...GG.node(bG)
            };
            yG.setNode(bG, ZG);
            let SG = GG.parent(bG);
            SG && SG !== wG && kG.includes(SG) && yG.setParent(bG, SG)
          }));
          let UG = new Set;
          GG.edges().forEach((bG => {
            let ZG = KZ(GG, bG.v, wG),
              SG = KZ(GG, bG.w, wG);
            if (ZG && SG && ZG !== SG) {
              let wG = `${ZG}\0${SG}`;
              UG.has(wG) || (UG.add(wG), yG.setEdge(ZG, SG, {
                ...GG.edge(bG)
              }))
            }
          })), hZ(yG, bG, ZG);
          let YG = WZ(yG);
          dZ(YG, bG, ZG, null), JZ(yG, YG);
          let VG = 1 / 0,
            pG = 1 / 0,
            fG = -1 / 0,
            QG = -1 / 0;
          yG.nodes().forEach((GG => {
            if (GG === wG) return;
            let bG = yG.node(GG);
            bG && "number" == typeof bG.x && "number" == typeof bG.y && "number" == typeof bG.width && "number" == typeof bG.height && (VG = Math.min(VG, bG.x - bG.width / 2), fG = Math.max(fG, bG.x + bG.width / 2), pG = Math.min(pG, bG.y - bG.height / 2), QG = Math.max(QG, bG.y + bG.height / 2))
          })), (!isFinite(VG) || !isFinite(pG) || !isFinite(fG) || !isFinite(QG)) && (VG = pG = 0, fG = QG = 0);
          let KG = fG - VG,
            hG = QG - pG;
          LG[wG] = {
            minX: VG,
            Zw: pG,
            maxX: fG,
            ww: QG,
            width: KG,
            height: hG,
            offsetX: VG,
            offsetY: pG
          }, SG._dagreClusterSubgraph = yG
        }
      }));
      let yG = [],
        kG = new Map;
      SG.forEach((bG => {
        let ZG = GG.node(bG);
        ZG && ZG.rankdir && LG[bG] && kG.set(bG, (GG.children(bG) || []).filter((GG => GG !== bG)))
      }));
      let UG = new Set([...kG.values()].flat()),
        YG = new Map;
      kG.forEach(((bG, ZG) => {
        UG.has(ZG) || YG.set(ZG, (bG => {
          let ZG = [],
            wG = (GG.children(bG) || []).filter((GG => GG !== bG));
          for (; wG.length > 0;) {
            let bG = wG.shift();
            ZG.push(bG), (GG.children(bG) || []).filter((GG => GG !== bG)).forEach((GG => wG.push(GG)))
          }
          return ZG
        })(ZG))
      }));
      let VG = new Set([...YG.values()].flat()),
        pG = GG => {
          for (let [bG, ZG] of YG)
            if (ZG.includes(GG)) return bG;
          return GG
        },
        fG = [];
      GG.edges().forEach((bG => {
        (VG.has(bG.v) || VG.has(bG.w)) && fG.push({
          edge: bG,
          label: GG.edge(bG)
        })
      }));
      let QG = new Map;
      VG.forEach((bG => {
        let ZG = GG.parent(bG);
        QG.set(bG, "string" == typeof ZG ? ZG : void 0)
      })), YG.forEach(((bG, ZG) => {
        let wG = GG.node(ZG),
          SG = [];
        bG.forEach((bG => {
          let ZG = GG.node(bG);
          ZG && (SG.push({
            id: bG,
            node: ZG,
            parent: QG.get(bG)
          }), GG.removeNode(bG))
        }));
        let kG = fG.filter((GG => {
            let {
              edge: ZG
            } = GG;
            return bG.includes(ZG.v) || bG.includes(ZG.w)
          })),
          UG = LG[ZG];
        wG && (yG.push({
          clusterId: ZG,
          subgraph: wG._dagreClusterSubgraph,
          bounds: UG,
          children: bG,
          removedNodes: SG,
          removedEdges: kG
        }), wG.width = UG.width, wG.height = UG.height)
      }));
      let KG = new Set;
      fG.forEach((bG => {
        let {
          edge: ZG,
          label: wG
        } = bG, SG = pG(ZG.v), LG = pG(ZG.w);
        if (SG !== LG && GG.hasNode(SG) && GG.hasNode(LG)) {
          let bG = `${SG}\0${LG}`;
          KG.has(bG) || (KG.add(bG), GG.setEdge(SG, LG, {
            ...wG,
            width: 0,
            height: 0
          }))
        }
      }));
      let hG = WZ(GG),
        dG = dZ(hG, bG, ZG, null != (wG = fZ.get(GG)) ? wG : null);
      fZ.set(GG, dG), JZ(GG, hG), KG.forEach((bG => {
        let ZG = bG.indexOf("\0"),
          wG = bG.slice(0, ZG),
          SG = bG.slice(ZG + 1);
        GG.hasEdge(wG, SG) && GG.removeEdge(wG, SG)
      })), yG.forEach((bG => {
        let {
          clusterId: ZG,
          subgraph: wG,
          bounds: SG,
          removedNodes: LG,
          removedEdges: yG
        } = bG;
        var kG, UG;
        let YG = GG.node(ZG),
          VG = null != (kG = null == YG ? void 0 : YG.x) ? kG : 0,
          pG = null != (UG = null == YG ? void 0 : YG.y) ? UG : 0,
          fG = (SG.minX + SG.maxX) / 2,
          QG = (SG.Zw + SG.ww) / 2;
        LG.forEach((bG => {
          let {
            id: ZG,
            node: wG,
            parent: SG
          } = bG;
          GG.setNode(ZG, wG), void 0 !== SG && GG.setParent(ZG, SG)
        })), yG.forEach((bG => {
          let {
            edge: ZG,
            label: wG
          } = bG;
          GG.setEdge(ZG, wG)
        })), wG.nodes().forEach((bG => {
          if (bG === ZG) return;
          let SG = wG.node(bG),
            LG = GG.node(bG);
          LG && SG && "number" == typeof SG.x && "number" == typeof SG.y && (LG.x = VG + (SG.x - fG), LG.y = pG + (SG.y - QG))
        })), delete YG._dagreClusterSubgraph
      })), SG.forEach((bG => {
        var ZG, wG;
        let SG = GG.node(bG),
          yG = LG[bG];
        if (SG && SG.rankdir && SG._dagreClusterSubgraph && yG) {
          let LG = SG._dagreClusterSubgraph,
            kG = null != (ZG = SG.x) ? ZG : 0,
            UG = null != (wG = SG.y) ? wG : 0,
            YG = (yG.minX + yG.maxX) / 2,
            VG = (yG.Zw + yG.ww) / 2;
          LG.nodes().forEach((ZG => {
            if (ZG === bG) return;
            let wG = LG.node(ZG),
              SG = GG.node(ZG);
            if (SG && wG && "number" == typeof wG.x && "number" == typeof wG.y) {
              let GG = wG.x - YG,
                bG = wG.y - VG;
              SG.x = kG + GG, SG.y = UG + bG
            }
          })), delete SG._dagreClusterSubgraph
        }
      }))
    }

    function dZ(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var SG, LG;
      let yG = !1 !== (null == ZG ? void 0 : ZG.useDynamic),
        kG = yG && null != (SG = null == wG ? void 0 : wG.graph) ? SG : null,
        UG = yG && null != (LG = null == wG ? void 0 : wG.rawNodes) ? LG : null;
      bG("    makeSpaceForEdgeLabels", (() => function(GG) {
        let bG = GG.graph();
        bG.ranksep /= 2, GG.edges().forEach((ZG => {
          var wG;
          let SG = GG.edge(ZG);
          SG.minlen *= 2, "c" !== (null != (wG = SG.labelpos) ? wG : "r").toLowerCase() && ("TB" === bG.rankdir || "BT" === bG.rankdir ? SG.width += SG.labeloffset : SG.height += SG.labeloffset)
        }))
      }(GG))), bG("    removeSelfEdges", (() => function(GG) {
        GG.edges().forEach((bG => {
          if (bG.v === bG.w) {
            let ZG = GG.node(bG.v);
            ZG.selfEdges || (ZG.selfEdges = []), ZG.selfEdges.push({
              e: bG,
              label: GG.edge(bG)
            }), GG.removeEdge(bG)
          }
        }))
      }(GG))), bG("    acyclic", (() => Qb(GG, kG))), bG("    nestingGraph.run", (() => Ab(GG))), bG("    rank", (() => lb(gG(GG)))), bG("    injectEdgeLabelProxies", (() => function(GG) {
        GG.edges().forEach((bG => {
          let ZG = GG.edge(bG);
          if (ZG.width && ZG.height) {
            let ZG = GG.node(bG.v),
              wG = {
                rank: (GG.node(bG.w).rank - ZG.rank) / 2 + ZG.rank,
                e: bG
              };
            nG(GG, "edge-proxy", wG, "_ep")
          }
        }))
      }(GG))), bG("    removeEmptyRanks", (() => function(GG) {
        let bG = GG.nodes().map((bG => GG.node(bG).rank)).filter((GG => void 0 !== GG)),
          ZG = tG(Math.min, bG),
          wG = [];
        GG.nodes().forEach((bG => {
          let SG = GG.node(bG).rank - ZG;
          wG[SG] || (wG[SG] = []), wG[SG].push(bG)
        }));
        let SG = 0,
          LG = GG.graph().nodeRankFactor;
        Array.from(wG).forEach(((bG, ZG) => {
          void 0 === bG && ZG % LG !== 0 ? --SG : void 0 !== bG && SG && bG.forEach((bG => GG.node(bG).rank += SG))
        }))
      }(GG))), bG("    nestingGraph.cleanup", (() => function(GG) {
        let bG = GG.graph();
        GG.removeNode(bG.nestingRoot), delete bG.nestingRoot, GG.edges().forEach((bG => {
          GG.edge(bG).nestingEdge && GG.removeEdge(bG)
        }))
      }(GG))), bG("    normalizeRanks", (() => function(GG) {
        let bG = GG.nodes().map((bG => {
            let ZG = GG.node(bG).rank;
            return void 0 === ZG ? Number.MAX_VALUE : ZG
          })),
          ZG = tG(Math.min, bG);
        GG.nodes().forEach((bG => {
          let wG = GG.node(bG);
          Object.hasOwn(wG, "rank") && (wG.rank -= ZG)
        }))
      }(GG))), bG("    assignRankMinMax", (() => function(GG) {
        let bG = 0;
        GG.nodes().forEach((ZG => {
          let wG = GG.node(ZG);
          wG.borderTop && (wG.minRank = GG.node(wG.borderTop).rank, wG.maxRank = GG.node(wG.borderBottom).rank, bG = Math.max(bG, wG.maxRank))
        })), GG.graph().maxRank = bG
      }(GG))), bG("    removeEdgeLabelProxies", (() => function(GG) {
        GG.nodes().forEach((bG => {
          let ZG = GG.node(bG);
          if ("edge-proxy" === ZG.dummy) {
            let wG = ZG;
            GG.edge(wG.e).labelRank = ZG.rank, GG.removeNode(bG)
          }
        }))
      }(GG))), bG("    normalize.run", (() => Kb(GG))), bG("    parentDummyChains", (() => Mb(GG))), bG("    addBorderSegments", (() => qb(GG))), bG("    order", (() => ZZ(GG, ZG, UG))), bG("    insertSelfEdges", (() => function(GG) {
        RG(GG).forEach((bG => {
          let ZG = 0;
          bG.forEach(((bG, wG) => {
            let SG = GG.node(bG);
            "number" != typeof SG.rank && (SG.rank = 0), SG.order = wG + ZG, (SG.selfEdges || []).forEach((bG => {
              nG(GG, "selfedge", {
                width: bG.label.width,
                height: bG.label.height,
                rank: SG.rank,
                order: wG + ++ZG,
                e: bG.e,
                edgeLabel: bG.label
              }, "_se"), (!Array.isArray(bG.label.points) || 7 !== bG.label.points.length) && (bG.label.points = [{
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
            })), delete SG.selfEdges
          }))
        }))
      }(GG))), bG("    adjustCoordinateSystem", (() => function(GG) {
        var bG;
        let ZG = null == (bG = GG.graph().rankdir) ? void 0 : bG.toLowerCase();
        ("lr" === ZG || "rl" === ZG) && eb(GG)
      }(GG))), bG("    position", (() => pZ(GG, ZG.corePath))), bG("    positionSelfEdges", (() => function(GG) {
        GG.nodes().forEach((bG => {
          let ZG = GG.node(bG),
            wG = GG => "number" == typeof GG && isFinite(GG);
          if ("selfedge" === ZG.dummy) {
            let SG = ZG,
              LG = GG.node(SG.e.v),
              yG = wG(null == LG ? void 0 : LG.x) ? LG.x : 0,
              kG = wG(null == LG ? void 0 : LG.y) ? LG.y : 0,
              UG = wG(null == LG ? void 0 : LG.width) ? LG.width : 0,
              YG = wG(null == LG ? void 0 : LG.height) ? LG.height : 0,
              VG = wG(ZG.x) ? ZG.x : yG,
              pG = wG(ZG.y) ? ZG.y : kG,
              fG = UG / 2,
              QG = YG / 2;
            SG.edgeLabel.points = [{
              x: VG + fG,
              y: pG - QG
            }, {
              x: VG + fG,
              y: pG - QG
            }, {
              x: VG,
              y: pG
            }, {
              x: VG - fG,
              y: pG + QG
            }, {
              x: VG - fG,
              y: pG + QG
            }, {
              x: VG,
              y: pG
            }, {
              x: VG,
              y: pG
            }], SG.edgeLabel.x = VG, SG.edgeLabel.y = pG, GG.setEdge(SG.e, SG.edgeLabel), GG.removeNode(bG)
          } else ZG && Array.isArray(ZG.selfEdges) && ZG.selfEdges.forEach((GG => {
            if (!Array.isArray(GG.label.points) || 7 !== GG.label.points.length) {
              let bG = wG(ZG.x) ? ZG.x : 0,
                SG = wG(ZG.y) ? ZG.y : 0,
                LG = (wG(ZG.width) ? ZG.width : 0) / 2,
                yG = (wG(ZG.height) ? ZG.height : 0) / 2;
              GG.label.points = [{
                x: bG + LG,
                y: SG - yG
              }, {
                x: bG + LG,
                y: SG - yG
              }, {
                x: bG,
                y: SG
              }, {
                x: bG - LG,
                y: SG + yG
              }, {
                x: bG - LG,
                y: SG + yG
              }, {
                x: bG,
                y: SG
              }, {
                x: bG,
                y: SG
              }]
            }
          }))
        }))
      }(GG)));
      let YG = JSON.parse(JSON.stringify(GG._nodes));
      return bG("    removeBorderNodes", (() => function(GG) {
        GG.nodes().forEach((bG => {
          if (GG.children(bG).length) {
            let ZG = GG.node(bG),
              wG = GG.node(ZG.borderTop),
              SG = GG.node(ZG.borderBottom),
              LG = GG.node(ZG.borderLeft[ZG.borderLeft.length - 1]),
              yG = GG.node(ZG.borderRight[ZG.borderRight.length - 1]);
            ZG.width = Math.abs(yG.x - LG.x), ZG.height = Math.abs(SG.y - wG.y), ZG.x = LG.x + ZG.width / 2, ZG.y = wG.y + ZG.height / 2
          }
        })), GG.nodes().forEach((bG => {
          "border" === GG.node(bG).dummy && GG.removeNode(bG)
        }))
      }(GG))), bG("    normalize.undo", (() => function(GG) {
        GG.graph().dummyChains.forEach((bG => {
          let ZG, wG = GG.node(bG),
            SG = wG.edgeLabel;
          for (GG.setEdge(wG.edgeObj, SG); wG.dummy;) ZG = GG.successors(bG)[0], GG.removeNode(bG), SG.points.push({
            x: wG.x,
            y: wG.y
          }), "edge-label" === wG.dummy && (SG.x = wG.x, SG.y = wG.y, SG.width = wG.width, SG.height = wG.height), bG = ZG, wG = GG.node(bG)
        }))
      }(GG))), bG("    fixupEdgeLabelCoords", (() => function(GG) {
        GG.edges().forEach((bG => {
          let ZG = GG.edge(bG);
          if (Object.hasOwn(ZG, "x")) switch (("l" === ZG.labelpos || "r" === ZG.labelpos) && (ZG.width -= ZG.labeloffset), ZG.labelpos) {
            case "l":
              ZG.x -= ZG.width / 2 + ZG.labeloffset;
              break;
            case "r":
              ZG.x += ZG.width / 2 + ZG.labeloffset
          }
        }))
      }(GG))), bG("    undoCoordinateSystem", (() => gb(GG))), bG("    translateGraph", (() => function(GG) {
        let bG = Number.POSITIVE_INFINITY,
          ZG = 0,
          wG = Number.POSITIVE_INFINITY,
          SG = 0,
          LG = GG.graph(),
          yG = LG.marginx || 0,
          kG = LG.marginy || 0;

        function UG(GG) {
          let LG = GG.x,
            yG = GG.y,
            kG = GG.width,
            UG = GG.height;
          bG = Math.min(bG, LG - kG / 2), ZG = Math.max(ZG, LG + kG / 2), wG = Math.min(wG, yG - UG / 2), SG = Math.max(SG, yG + UG / 2)
        }
        GG.nodes().forEach((bG => UG(GG.node(bG)))), GG.edges().forEach((bG => {
          let ZG = GG.edge(bG);
          Object.hasOwn(ZG, "x") && UG(ZG)
        })), bG -= yG, wG -= kG, GG.nodes().forEach((ZG => {
          let SG = GG.node(ZG);
          SG.x -= bG, SG.y -= wG
        })), GG.edges().forEach((ZG => {
          let SG = GG.edge(ZG);
          SG.points.forEach((GG => {
            GG.x -= bG, GG.y -= wG
          })), Object.hasOwn(SG, "x") && (SG.x -= bG), Object.hasOwn(SG, "y") && (SG.y -= wG)
        })), LG.width = ZG - bG + yG, LG.height = SG - wG + kG
      }(GG))), bG("    assignNodeIntersects", (() => function(GG) {
        GG.edges().forEach((bG => {
          if (bG.v === bG.w) return;
          let ZG, wG, SG = GG.edge(bG),
            LG = GG.node(bG.v),
            yG = GG.node(bG.w);
          SG.points ? (ZG = SG.points[0], wG = SG.points[SG.points.length - 1]) : (SG.points = [], ZG = yG, wG = LG), SG.points.unshift(eG(LG, ZG)), SG.points.push(eG(yG, wG))
        }))
      }(GG))), bG("    reversePoints", (() => function(GG) {
        GG.edges().forEach((bG => {
          let ZG = GG.edge(bG);
          ZG.reversed && ZG.points.reverse()
        }))
      }(GG))), bG("    acyclic.undo", (() => function(GG) {
        GG.edges().forEach((bG => {
          let ZG = GG.edge(bG);
          if (ZG.reversed) {
            GG.removeEdge(bG);
            let wG = ZG.forwardName;
            delete ZG.reversed, delete ZG.forwardName, GG.setEdge(bG.w, bG.v, ZG, wG)
          }
        }))
      }(GG))), {
        graph: GG,
        rawNodes: YG
      }
    }

    function JZ(GG, bG) {
      GG.nodes().forEach((ZG => {
        let wG = GG.node(ZG),
          SG = bG.node(ZG);
        wG && (wG.x = SG.x, wG.y = SG.y, wG.order = SG.order, wG.rank = SG.rank, bG.children(ZG).length && (wG.width = SG.width, wG.height = SG.height))
      })), GG.edges().forEach((ZG => {
        let wG = GG.edge(ZG),
          SG = bG.edge(ZG);
        wG.points = SG.points, Object.hasOwn(SG, "x") && (wG.x = SG.x, wG.y = SG.y)
      })), GG.graph().width = bG.graph().width, GG.graph().height = bG.graph().height
    }
    var rZ = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      zZ = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      EZ = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      oZ = ["width", "height", "rank"],
      XZ = {
        width: 0,
        height: 0
      },
      uZ = ["minlen", "weight", "width", "height", "labeloffset"],
      iZ = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      CZ = ["labelpos"];

    function WZ(GG) {
      let bG = new qG({
          multigraph: !0,
          compound: !0
        }),
        ZG = IZ(GG.graph());
      return bG.setGraph(Object.assign({}, zZ, mZ(ZG, rZ), bb(ZG, EZ))), GG.nodes().forEach((ZG => {
        let wG = mZ(IZ(GG.node(ZG)), oZ);
        Object.keys(XZ).forEach((GG => {
          void 0 === wG[GG] && (wG[GG] = XZ[GG])
        })), bG.setNode(ZG, wG);
        let SG = GG.parent(ZG);
        void 0 !== SG && bG.setParent(ZG, SG)
      })), GG.edges().forEach((ZG => {
        let wG = IZ(GG.edge(ZG));
        bG.setEdge(ZG, Object.assign({}, iZ, mZ(wG, uZ), bb(wG, CZ)))
      })), bG
    }

    function mZ(GG, bG) {
      return Zb(bb(GG, bG), Number)
    }

    function IZ(GG) {
      let bG = {};
      return GG && Object.entries(GG).forEach((GG => {
        let [ZG, wG] = GG;
        "string" == typeof ZG && (ZG = ZG.toLowerCase()), bG[ZG] = wG
      })), bG
    }

    function FZ(GG) {
      let bG = RG(GG),
        ZG = new qG({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return GG.nodes().forEach((bG => {
        ZG.setNode(bG, {
          label: bG
        }), ZG.setParent(bG, "layer" + GG.node(bG).rank)
      })), GG.edges().forEach((GG => ZG.setEdge(GG.v, GG.w, {}, GG.name))), bG.forEach(((GG, bG) => {
        let wG = "layer" + bG;
        ZG.setNode(wG, {
          rank: "same"
        }), GG.reduce(((GG, bG) => (ZG.setEdge(GG, bG, {
          style: "invis"
        }), bG)))
      })), ZG
    }
    var vZ = {
        time: NG,
        notime: OG
      },
      aZ = {
        graphlib: LG,
        version: Lb,
        layout: QZ,
        debug: FZ,
        util: {
          time: NG,
          notime: OG
        }
      }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);