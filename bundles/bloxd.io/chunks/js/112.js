/*! For license information please see zyyatq.112.6e3183e8.chunk.js.LICENSE.txt */
export const id = 112;
export const ids = [112];
export const modules = {
  5998: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      Graph: () => wY,
      debug: () => HD,
      default: () => ZD,
      graphlib: () => IY,
      layout: () => iD,
      util: () => zD,
      version: () => Ir
    });
    var FY = Object.defineProperty,
      AY = (YY, rY, DY) => ((YY, rY, DY) => rY in YY ? FY(YY, rY, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: DY
      }) : YY[rY] = DY)(YY, "symbol" != typeof rY ? rY + "" : rY, DY),
      IY = {};
    ((YY, rY) => {
      for (var DY in rY) FY(YY, DY, {
        get: rY[DY],
        enumerable: !0
      })
    })(IY, {
      Graph: () => wY,
      alg: () => WY
    });
    var RY = Object.defineProperty,
      OY = (YY, rY) => {
        for (var DY in rY) RY(YY, DY, {
          get: rY[DY],
          enumerable: !0
        })
      },
      gY = class {
        constructor(YY) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, YY && (this._isDirected = !("directed" in YY) || YY.directed, this._isMultigraph = "multigraph" in YY && YY.multigraph, this._isCompound = "compound" in YY && YY.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(YY) {
          return this._label = YY, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(YY) {
          return this._defaultNodeLabelFn = "function" != typeof YY ? () => YY : YY, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((YY => 0 === Object.keys(this._in[YY]).length))
        }
        sinks() {
          return this.nodes().filter((YY => 0 === Object.keys(this._out[YY]).length))
        }
        setNodes(YY, rY) {
          return YY.forEach((YY => {
            void 0 !== rY ? this.setNode(YY, rY) : this.setNode(YY)
          })), this
        }
        setNode(YY, rY) {
          return YY in this._nodes ? (arguments.length > 1 && (this._nodes[YY] = rY), this) : (this._nodes[YY] = arguments.length > 1 ? rY : this._defaultNodeLabelFn(YY), this._isCompound && (this._parent[YY] = "\0", this._children[YY] = {}, this._children["\0"][YY] = !0), this._in[YY] = {}, this._preds[YY] = {}, this._out[YY] = {}, this._sucs[YY] = {}, ++this._nodeCount, this)
        }
        node(YY) {
          return this._nodes[YY]
        }
        hasNode(YY) {
          return YY in this._nodes
        }
        removeNode(YY) {
          if (YY in this._nodes) {
            let rY = YY => this.removeEdge(this._edgeObjs[YY]);
            delete this._nodes[YY], this._isCompound && (this._removeFromParentsChildList(YY), delete this._parent[YY], this.children(YY).forEach((YY => {
              this.setParent(YY)
            })), delete this._children[YY]), Object.keys(this._in[YY]).forEach(rY), delete this._in[YY], delete this._preds[YY], Object.keys(this._out[YY]).forEach(rY), delete this._out[YY], delete this._sucs[YY], --this._nodeCount
          }
          return this
        }
        setParent(YY, rY) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === rY) rY = "\0";
          else {
            for (let DY = rY += ""; void 0 !== DY; DY = this.parent(DY))
              if (DY === YY) throw new Error("Setting " + rY + " as parent of " + YY + " would create a cycle");
            this.setNode(rY)
          }
          return this.setNode(YY), this._removeFromParentsChildList(YY), this._parent[YY] = rY, this._children[rY][YY] = !0, this
        }
        parent(YY) {
          if (this._isCompound) {
            let rY = this._parent[YY];
            if ("\0" !== rY) return rY
          }
        }
        children() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let rY = this._children[YY];
            if (rY) return Object.keys(rY)
          } else {
            if ("\0" === YY) return this.nodes();
            if (this.hasNode(YY)) return []
          }
          return []
        }
        predecessors(YY) {
          let rY = this._preds[YY];
          if (rY) return Object.keys(rY)
        }
        successors(YY) {
          let rY = this._sucs[YY];
          if (rY) return Object.keys(rY)
        }
        neighbors(YY) {
          let rY = this.predecessors(YY);
          if (rY) {
            let DY = new Set(rY),
              FY = this.successors(YY);
            if (FY)
              for (let YY of FY) DY.add(YY);
            return Array.from(DY.values())
          }
        }
        isLeaf(YY) {
          var rY;
          let DY;
          return DY = this.isDirected() ? this.successors(YY) : this.neighbors(YY), 0 === (null != (rY = null == DY ? void 0 : DY.length) ? rY : 0)
        }
        filterNodes(YY) {
          let rY = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          rY.setGraph(this.graph()), Object.entries(this._nodes).forEach((DY => {
            let [FY, AY] = DY;
            YY(FY) && rY.setNode(FY, AY)
          })), Object.values(this._edgeObjs).forEach((YY => {
            rY.hasNode(YY.v) && rY.hasNode(YY.w) && rY.setEdge(YY, this.edge(YY))
          }));
          let DY = {},
            FY = YY => {
              let AY = this.parent(YY);
              return !AY || rY.hasNode(AY) ? (DY[YY] = AY, AY) : AY in DY ? DY[AY] : FY(AY)
            };
          return this._isCompound && rY.nodes().forEach((YY => rY.setParent(YY, FY(YY)))), rY
        }
        setDefaultEdgeLabel(YY) {
          return this._defaultEdgeLabelFn = "function" != typeof YY ? () => YY : YY, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(YY, rY) {
          return YY.reduce(((YY, DY) => (void 0 !== rY ? this.setEdge(YY, DY, rY) : this.setEdge(YY, DY), DY))), this
        }
        setEdge(YY, rY, DY, FY) {
          let AY, IY, RY, OY, gY = !1;
          "object" == typeof YY && null !== YY && "v" in YY ? (AY = YY.v, IY = YY.w, RY = YY.name, 2 === arguments.length && (OY = rY, gY = !0)) : (AY = YY, IY = rY, RY = FY, arguments.length > 2 && (OY = DY, gY = !0)), AY = "" + AY, IY = "" + IY, void 0 !== RY && (RY = "" + RY);
          let vY = uY(this._isDirected, AY, IY, RY);
          if (vY in this._edgeLabels) return gY && (this._edgeLabels[vY] = OY), this;
          if (void 0 !== RY && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(AY), this.setNode(IY), this._edgeLabels[vY] = gY ? OY : this._defaultEdgeLabelFn(AY, IY, RY);
          let sY = function(YY, rY, DY, FY) {
            let AY = "" + rY,
              IY = "" + DY;
            if (!YY && AY > IY) {
              let YY = AY;
              AY = IY, IY = YY
            }
            let RY = {
              v: AY,
              w: IY
            };
            return FY && (RY.name = FY), RY
          }(this._isDirected, AY, IY, RY);
          return AY = sY.v, IY = sY.w, Object.freeze(sY), this._edgeObjs[vY] = sY, aY(this._preds[IY], AY), aY(this._sucs[AY], IY), this._in[IY][vY] = sY, this._out[AY][vY] = sY, this._edgeCount++, this
        }
        edge(YY, rY, DY) {
          let FY = 1 === arguments.length ? sY(this._isDirected, YY) : uY(this._isDirected, YY, rY, DY);
          return this._edgeLabels[FY]
        }
        edgeAsObj(YY, rY, DY) {
          let FY = 1 === arguments.length ? this.edge(YY) : this.edge(YY, rY, DY);
          return "object" != typeof FY || null === FY ? {
            label: FY
          } : FY
        }
        hasEdge(YY, rY, DY) {
          return (1 === arguments.length ? sY(this._isDirected, YY) : uY(this._isDirected, YY, rY, DY)) in this._edgeLabels
        }
        removeEdge(YY, rY, DY) {
          let FY = 1 === arguments.length ? sY(this._isDirected, YY) : uY(this._isDirected, YY, rY, DY),
            AY = this._edgeObjs[FY];
          if (AY) {
            let YY = AY.v,
              rY = AY.w;
            delete this._edgeLabels[FY], delete this._edgeObjs[FY], vY(this._preds[rY], YY), vY(this._sucs[YY], rY), delete this._in[rY][FY], delete this._out[YY][FY], this._edgeCount--
          }
          return this
        }
        inEdges(YY, rY) {
          return this.isDirected() ? this.filterEdges(this._in[YY], YY, rY) : this.nodeEdges(YY, rY)
        }
        outEdges(YY, rY) {
          return this.isDirected() ? this.filterEdges(this._out[YY], YY, rY) : this.nodeEdges(YY, rY)
        }
        nodeEdges(YY, rY) {
          if (YY in this._nodes) return this.filterEdges({
            ...this._in[YY],
            ...this._out[YY]
          }, YY, rY)
        }
        _removeFromParentsChildList(YY) {
          delete this._children[this._parent[YY]][YY]
        }
        filterEdges(YY, rY, DY) {
          if (!YY) return;
          let FY = Object.values(YY);
          return DY ? FY.filter((YY => YY.v === rY && YY.w === DY || YY.v === DY && YY.w === rY)) : FY
        }
      };

    function aY(YY, rY) {
      YY[rY] ? YY[rY]++ : YY[rY] = 1
    }

    function vY(YY, rY) {
      void 0 !== YY[rY] && !--YY[rY] && delete YY[rY]
    }

    function uY(YY, rY, DY, FY) {
      let AY = "" + rY,
        IY = "" + DY;
      if (!YY && AY > IY) {
        let YY = AY;
        AY = IY, IY = YY
      }
      return AY + "\x01" + IY + "\x01" + (void 0 === FY ? "\0" : FY)
    }

    function sY(YY, rY) {
      return uY(YY, rY.v, rY.w, rY.name)
    }

    function iY(YY) {
      let rY = {
          options: {
            directed: YY.isDirected(),
            multigraph: YY.isMultigraph(),
            compound: YY.isCompound()
          },
          nodes: yY(YY),
          edges: QY(YY)
        },
        DY = YY.graph();
      return void 0 !== DY && (rY.value = structuredClone(DY)), rY
    }

    function yY(YY) {
      return YY.nodes().map((rY => {
        let DY = YY.node(rY),
          FY = YY.parent(rY),
          AY = {
            v: rY
          };
        return void 0 !== DY && (AY.value = DY), void 0 !== FY && (AY.parent = FY), AY
      }))
    }

    function QY(YY) {
      return YY.edges().map((rY => {
        let DY = YY.edge(rY),
          FY = {
            v: rY.v,
            w: rY.w
          };
        return void 0 !== rY.name && (FY.name = rY.name), void 0 !== DY && (FY.value = DY), FY
      }))
    }

    function oY(YY) {
      let rY = new gY(YY.options);
      return void 0 !== YY.value && rY.setGraph(YY.value), YY.nodes.forEach((YY => {
        rY.setNode(YY.v, YY.value), YY.parent && rY.setParent(YY.v, YY.parent)
      })), YY.edges.forEach((YY => {
        rY.setEdge({
          v: YY.v,
          w: YY.w,
          name: YY.name
        }, YY.value)
      })), rY
    }
    OY({}, {
      read: () => oY,
      write: () => iY
    });
    var WY = {};
    OY(WY, {
      CycleException: () => HY,
      bellmanFord: () => mY,
      components: () => VY,
      dijkstra: () => TY,
      dijkstraAll: () => eY,
      findCycles: () => BY,
      floydWarshall: () => KY,
      isAcyclic: () => ZY,
      postorder: () => hY,
      preorder: () => dY,
      prim: () => JY,
      shortestPaths: () => MY,
      tarjan: () => NY,
      topsort: () => zY
    });
    var EY = () => 1;

    function mY(YY, rY, DY, FY) {
      return function(YY, rY, DY, FY) {
        let AY, IY = {},
          RY = 0,
          OY = YY.nodes(),
          gY = function(YY) {
            let rY = IY[YY.v],
              FY = IY[YY.w];
            if (!rY || !FY) return;
            let RY = DY(YY);
            rY.distance + RY < FY.distance && (IY[YY.w] = {
              distance: rY.distance + RY,
              predecessor: YY.v
            }, AY = !0)
          },
          aY = function() {
            OY.forEach((function(YY) {
              FY(YY).forEach((function(rY) {
                let DY = rY.v === YY ? rY.v : rY.w,
                  FY = DY === rY.v ? rY.w : rY.v;
                gY({
                  v: DY,
                  w: FY
                })
              }))
            }))
          };
        OY.forEach((function(YY) {
          let DY = YY === rY ? 0 : Number.POSITIVE_INFINITY;
          IY[YY] = {
            distance: DY,
            predecessor: ""
          }
        }));
        let vY = OY.length;
        for (let uY = 1; uY < vY && (AY = !1, RY++, aY(), AY); uY++);
        if (RY === vY - 1 && (AY = !1, aY(), AY)) throw new Error("The graph contains a negative weight cycle");
        return IY
      }(YY, String(rY), DY || EY, FY || function(rY) {
        var DY;
        return null != (DY = YY.outEdges(rY)) ? DY : []
      })
    }

    function VY(YY) {
      let rY, DY = {},
        FY = [];

      function AY(FY) {
        var IY, RY;
        FY in DY || (DY[FY] = !0, rY.push(FY), null == (IY = YY.successors(FY)) || IY.forEach(AY), null == (RY = YY.predecessors(FY)) || RY.forEach(AY))
      }
      return YY.nodes().forEach((function(YY) {
        rY = [], AY(YY), rY.length && FY.push(rY)
      })), FY
    }
    var SY = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((YY => YY.key))
        }
        has(YY) {
          return YY in this._keyIndices
        }
        priority(YY) {
          let rY = this._keyIndices[YY];
          if (void 0 !== rY) return this._arr[rY].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(YY, rY) {
          let DY = this._keyIndices,
            FY = String(YY);
          if (!(FY in DY)) {
            let YY = this._arr,
              AY = YY.length;
            return DY[FY] = AY, YY.push({
              key: FY,
              priority: rY
            }), this._decrease(AY), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let YY = this._arr.pop();
          return delete this._keyIndices[YY.key], this._heapify(0), YY.key
        }
        decrease(YY, rY) {
          let DY = this._keyIndices[YY];
          if (void 0 === DY) throw new Error(`Key not found: ${YY}`);
          let FY = this._arr[DY].priority;
          if (rY > FY) throw new Error(`New priority is greater than current priority. Key: ${YY} Old: ${FY} New: ${rY}`);
          this._arr[DY].priority = rY, this._decrease(DY)
        }
        _heapify(YY) {
          let rY = this._arr,
            DY = 2 * YY,
            FY = DY + 1,
            AY = YY;
          DY < rY.length && (AY = rY[DY].priority < rY[AY].priority ? DY : AY, FY < rY.length && (AY = rY[FY].priority < rY[AY].priority ? FY : AY), AY !== YY && (this._swap(YY, AY), this._heapify(AY)))
        }
        _decrease(YY) {
          let rY, DY = this._arr,
            FY = DY[YY].priority;
          for (; 0 !== YY && (rY = YY >> 1, !(DY[rY].priority < FY));) this._swap(YY, rY), YY = rY
        }
        _swap(YY, rY) {
          let DY = this._arr,
            FY = this._keyIndices,
            AY = DY[YY],
            IY = DY[rY];
          DY[YY] = IY, DY[rY] = AY, FY[IY.key] = YY, FY[AY.key] = rY
        }
      },
      lY = () => 1;

    function TY(YY, rY, DY, FY) {
      return function(YY, rY, DY, FY) {
        let AY, IY, RY = {},
          OY = new SY,
          gY = function(YY) {
            let rY = YY.v !== AY ? YY.v : YY.w,
              FY = RY[rY];
            if (!FY) return;
            let gY = DY(YY),
              aY = IY.distance + gY;
            if (gY < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + YY + " Weight: " + gY);
            aY < FY.distance && (FY.distance = aY, FY.predecessor = AY, OY.decrease(rY, aY))
          };
        for (YY.nodes().forEach((function(YY) {
            let DY = YY === rY ? 0 : Number.POSITIVE_INFINITY;
            RY[YY] = {
              distance: DY,
              predecessor: ""
            }, OY.add(YY, DY)
          })); OY.size() > 0;) {
          AY = OY.removeMin();
          let YY = RY[AY];
          if (!YY || YY.distance === Number.POSITIVE_INFINITY) break;
          IY = YY, FY(AY).forEach(gY)
        }
        return RY
      }(YY, String(rY), DY || lY, FY || function(rY) {
        var DY;
        return null != (DY = YY.outEdges(rY)) ? DY : []
      })
    }

    function eY(YY, rY, DY) {
      return YY.nodes().reduce((function(FY, AY) {
        return FY[AY] = TY(YY, AY, rY, DY), FY
      }), {})
    }

    function NY(YY) {
      let rY = 0,
        DY = [],
        FY = {},
        AY = [];

      function IY(RY) {
        var OY;
        let gY = FY[RY] = {
          onStack: !0,
          lowlink: rY,
          index: rY++
        };
        if (DY.push(RY), null == (OY = YY.successors(RY)) || OY.forEach((function(YY) {
            if (YY in FY) {
              let rY = FY[YY];
              null != rY && rY.onStack && (gY.lowlink = Math.min(gY.lowlink, rY.index))
            } else {
              IY(YY);
              let rY = FY[YY];
              rY && (gY.lowlink = Math.min(gY.lowlink, rY.lowlink))
            }
          })), gY.lowlink === gY.index) {
          let YY, rY = [];
          do {
            YY = DY.pop();
            let AY = FY[YY];
            AY && (AY.onStack = !1), rY.push(YY)
          } while (RY !== YY);
          AY.push(rY)
        }
      }
      return YY.nodes().forEach((function(YY) {
        YY in FY || IY(YY)
      })), AY
    }

    function BY(YY) {
      return NY(YY).filter((function(rY) {
        var DY;
        let FY = rY[0];
        return !!FY && (rY.length > 1 || 1 === rY.length && (null != (DY = YY.outEdges(FY, FY)) ? DY : []).length > 0)
      }))
    }
    var cY = () => 1;

    function KY(YY, rY, DY) {
      return function(YY, rY, DY) {
        let FY = {},
          AY = YY.nodes();
        return AY.forEach((function(YY) {
          let IY = {};
          FY[YY] = IY, IY[YY] = {
            distance: 0,
            predecessor: ""
          }, AY.forEach((function(rY) {
            YY !== rY && (IY[rY] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), DY(YY).forEach((function(DY) {
            let FY = DY.v === YY ? DY.w : DY.v,
              AY = rY(DY);
            IY[FY] = {
              distance: AY,
              predecessor: YY
            }
          }))
        })), AY.forEach((function(YY) {
          let rY = FY[YY];
          rY && AY.forEach((function(DY) {
            let IY = FY[DY];
            IY && AY.forEach((function(DY) {
              let FY = IY[YY],
                AY = rY[DY],
                RY = IY[DY];
              if (FY && AY && RY) {
                let YY = FY.distance + AY.distance;
                YY < RY.distance && (RY.distance = YY, RY.predecessor = AY.predecessor)
              }
            }))
          }))
        })), FY
      }(YY, rY || cY, DY || function(rY) {
        var DY;
        return null != (DY = YY.outEdges(rY)) ? DY : []
      })
    }
    var HY = class extends Error {
      constructor(YY) {
        super(YY), this.name = "CycleException"
      }
    };

    function zY(YY) {
      let rY = {},
        DY = {},
        FY = [];
      if (YY.sinks().forEach((function AY(IY) {
          var RY;
          if (IY in DY) throw new HY;
          IY in rY || (DY[IY] = !0, rY[IY] = !0, null == (RY = YY.predecessors(IY)) || RY.forEach(AY), delete DY[IY], FY.push(IY))
        })), Object.keys(rY).length !== YY.nodeCount()) throw new HY;
      return FY
    }

    function ZY(YY) {
      try {
        zY(YY)
      } catch (rY) {
        if (rY instanceof HY) return !1;
        throw rY
      }
      return !0
    }

    function CY(YY, rY, DY, FY, AY) {
      Array.isArray(rY) || (rY = [rY]);
      let IY = rY => {
          var DY;
          return null != (DY = YY.isDirected() ? YY.successors(rY) : YY.neighbors(rY)) ? DY : []
        },
        RY = {};
      return rY.forEach((function(rY) {
        if (!YY.hasNode(rY)) throw new Error("Graph does not have node: " + rY);
        AY = fY(YY, rY, "post" === DY, RY, IY, FY, AY)
      })), AY
    }

    function fY(YY, rY, DY, FY, AY, IY, RY) {
      return rY in FY || (FY[rY] = !0, DY || (RY = IY(RY, rY)), AY(rY).forEach((function(rY) {
        RY = fY(YY, rY, DY, FY, AY, IY, RY)
      })), DY && (RY = IY(RY, rY))), RY
    }

    function jY(YY, rY, DY) {
      return CY(YY, rY, DY, (function(YY, rY) {
        return YY.push(rY), YY
      }), [])
    }

    function hY(YY, rY) {
      return jY(YY, rY, "post")
    }

    function dY(YY, rY) {
      return jY(YY, rY, "pre")
    }

    function JY(YY, rY) {
      var DY;
      let FY, AY = new gY,
        IY = {},
        RY = new SY;

      function OY(YY) {
        let DY = YY.v === FY ? YY.w : YY.v,
          AY = RY.priority(DY);
        if (void 0 !== AY) {
          let OY = rY(YY);
          OY < AY && (IY[DY] = FY, RY.decrease(DY, OY))
        }
      }
      if (0 === YY.nodeCount()) return AY;
      YY.nodes().forEach((function(YY) {
        RY.add(YY, Number.POSITIVE_INFINITY), AY.setNode(YY)
      }));
      let aY = YY.nodes()[0];
      void 0 !== aY && RY.decrease(aY, 0);
      let vY = !1;
      for (; RY.size() > 0;) {
        if (FY = RY.removeMin(), FY in IY) AY.setEdge(FY, IY[FY]);
        else {
          if (vY) throw new Error("Input graph is not connected: " + YY);
          vY = !0
        }
        null == (DY = YY.nodeEdges(FY)) || DY.forEach(OY)
      }
      return AY
    }

    function MY(YY, rY, DY, FY) {
      return function(YY, rY, DY, FY) {
        if (void 0 === DY) return TY(YY, rY, DY, FY);
        let AY = !1,
          IY = YY.nodes();
        for (let RY = 0; RY < IY.length; RY++) {
          let OY = IY[RY];
          if (void 0 === OY) continue;
          let gY = FY(OY);
          for (let YY = 0; YY < gY.length; YY++) {
            let rY = gY[YY];
            if (!rY) continue;
            let FY = rY.v === OY ? rY.v : rY.w;
            DY({
              v: FY,
              w: FY === rY.v ? rY.w : rY.v
            }) < 0 && (AY = !0)
          }
          if (AY) return mY(YY, rY, DY, FY)
        }
        return TY(YY, rY, DY, FY)
      }(YY, rY, DY, null != FY ? FY : rY => {
        var DY;
        return null != (DY = YY.outEdges(rY)) ? DY : []
      })
    }
    var wY = gY;

    function bY(YY, rY, DY, FY) {
      let AY = FY;
      for (; YY.hasNode(AY);) AY = tY(FY);
      return DY.dummy = rY, YY.setNode(AY, DY), AY
    }

    function XY(YY) {
      let rY = new wY({
        multigraph: YY.isMultigraph()
      }).setGraph(YY.graph());
      return YY.nodes().forEach((DY => {
        YY.children(DY).length || rY.setNode(DY, YY.node(DY))
      })), YY.edges().forEach((DY => {
        rY.setEdge(DY, YY.edge(DY))
      })), rY
    }

    function qY(YY, rY) {
      let DY, FY, AY = YY.x,
        IY = YY.y,
        RY = rY.x - AY,
        OY = rY.y - IY,
        gY = YY.width / 2,
        aY = YY.height / 2;
      if (!RY && !OY) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(OY) * gY > Math.abs(RY) * aY ? (OY < 0 && (aY = -aY), DY = aY * RY / OY, FY = aY) : (RY < 0 && (gY = -gY), DY = gY, FY = gY * OY / RY), {
        x: AY + DY,
        y: IY + FY
      }
    }

    function pY(YY) {
      let rY = Yr(nY(YY) + 1).map((() => []));
      return YY.nodes().forEach((DY => {
        let FY = YY.node(DY),
          AY = FY.rank;
        void 0 !== AY && (rY[AY] || (rY[AY] = []), rY[AY][FY.order] = DY)
      })), rY
    }

    function kY(YY, rY, DY, FY) {
      let AY = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (AY.rank = DY, AY.order = FY), bY(YY, "border", AY, rY)
    }
    var GY = 65535;

    function xY(YY, rY) {
      if (rY.length > GY) {
        let DY = function(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GY,
            DY = [];
          for (let FY = 0; FY < YY.length; FY += rY) {
            let AY = YY.slice(FY, FY + rY);
            DY.push(AY)
          }
          return DY
        }(rY);
        return YY(...DY.map((rY => YY(...rY))))
      }
      return YY(...rY)
    }

    function nY(YY) {
      let rY = YY.nodes().map((rY => {
        let DY = YY.node(rY).rank;
        return void 0 === DY ? Number.MIN_VALUE : DY
      }));
      return xY(Math.max, rY)
    }

    function PY(YY, rY) {
      let DY = Date.now();
      try {
        return rY()
      } finally {
        console.log(YY + " time: " + (Date.now() - DY) + "ms")
      }
    }

    function UY(YY, rY) {
      return rY()
    }
    var LY = 0;

    function tY(YY) {
      return YY + "" + ++LY
    }

    function Yr(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == rY && (rY = YY, YY = 0);
      let FY = YY => YY < rY;
      DY < 0 && (FY = YY => rY < YY);
      let AY = [];
      for (let IY = YY; FY(IY); IY += DY) AY.push(IY);
      return AY
    }

    function rr(YY, rY) {
      let DY = {};
      for (let FY of rY) void 0 !== YY[FY] && (DY[FY] = YY[FY]);
      return DY
    }

    function Dr(YY, rY) {
      let DY;
      return DY = "string" == typeof rY ? YY => YY[rY] : rY, Object.entries(YY).reduce(((YY, rY) => {
        let [FY, AY] = rY;
        return YY[FY] = DY(AY, FY), YY
      }), {})
    }
    var Fr = "\0";

    function Ar(YY, rY, DY) {
      var FY, AY, IY, RY, OY, gY;
      if (!(YY && rY && DY && "edge" === rY.dummy && "edge" === DY.dummy && rY.edgeObj && DY.edgeObj && YY[rY.edgeObj.v] && YY[DY.edgeObj.v] && YY[rY.edgeObj.w] && YY[DY.edgeObj.w])) return 0;
      let aY = !0;
      rY.edgeObj.w === DY.edgeObj.w && (aY = !1);
      let vY = aY ? null != (AY = null == (FY = YY[rY.edgeObj.v]) ? void 0 : FY.rank) ? AY : NaN : null != (RY = null == (IY = YY[rY.edgeObj.w]) ? void 0 : IY.rank) ? RY : NaN,
        uY = Object.entries(YY).find((YY => {
          var DY, FY;
          return (null == (DY = YY[1].edgeObj) ? void 0 : DY.v) === rY.edgeObj.v && (null == (FY = YY[1].edgeObj) ? void 0 : FY.w) === rY.edgeObj.w && YY[1].rank === vY
        })),
        sY = Object.entries(YY).find((YY => {
          var rY, FY;
          return (null == (rY = YY[1].edgeObj) ? void 0 : rY.v) === DY.edgeObj.v && (null == (FY = YY[1].edgeObj) ? void 0 : FY.w) === DY.edgeObj.w && YY[1].rank === vY
        }));
      if (!uY || !sY) return 0;
      let iY = null != (OY = uY[1].order) ? OY : NaN,
        yY = null != (gY = sY[1].order) ? gY : NaN;
      return isNaN(iY - yY) ? 0 : iY - yY
    }
    var Ir = "3.1.1";

    function Rr(YY) {
      YY._prev._next = YY._next, YY._next._prev = YY._prev, delete YY._next, delete YY._prev
    }

    function Or(YY, rY) {
      if ("_next" !== YY && "_prev" !== YY) return rY
    }
    var gr = class {
        constructor() {
          AY(this, "_sentinel");
          let YY = {};
          YY._next = YY._prev = YY, this._sentinel = YY
        }
        dequeue() {
          let YY = this._sentinel,
            rY = YY._prev;
          if (rY !== YY) return Rr(rY), rY
        }
        enqueue(YY) {
          let rY = this._sentinel;
          YY._prev && YY._next && Rr(YY), YY._next = rY._next, rY._next._prev = YY, rY._next = YY, YY._prev = rY
        }
        toString() {
          let YY = [],
            rY = this._sentinel,
            DY = rY._prev;
          for (; DY !== rY;) YY.push(JSON.stringify(DY, Or)), DY = DY._prev;
          return "[" + YY.join(", ") + "]"
        }
      },
      ar = () => 1;

    function vr(YY, rY) {
      if (YY.nodeCount() <= 1) return [];
      let DY = function(YY, rY) {
        let DY = new wY,
          FY = 0,
          AY = 0;
        YY.nodes().forEach((YY => {
          DY.setNode(YY, {
            v: YY,
            in: 0,
            out: 0
          })
        })), YY.edges().forEach((YY => {
          let IY = DY.edge(YY.v, YY.w) || 0,
            RY = rY(YY),
            OY = IY + RY;
          DY.setEdge(YY.v, YY.w, OY);
          let gY = DY.node(YY.v),
            aY = DY.node(YY.w);
          AY = Math.max(AY, gY.out += RY), FY = Math.max(FY, aY.in += RY)
        }));
        let IY = function(YY) {
            let rY = [];
            for (let DY = 0; DY < YY; DY++) rY.push(DY);
            return rY
          }(AY + FY + 3).map((() => new gr)),
          RY = FY + 1;
        return DY.nodes().forEach((YY => {
          sr(IY, RY, DY.node(YY))
        })), {
          graph: DY,
          buckets: IY,
          zeroIdx: RY
        }
      }(YY, rY || ar);
      return function(YY, rY, DY) {
        var FY;
        let AY, IY = [],
          RY = rY[rY.length - 1],
          OY = rY[0];
        for (; YY.nodeCount();) {
          for (; AY = OY.dequeue();) ur(YY, rY, DY, AY);
          for (; AY = RY.dequeue();) ur(YY, rY, DY, AY);
          if (YY.nodeCount())
            for (let RY = rY.length - 2; RY > 0; --RY)
              if (AY = null == (FY = rY[RY]) ? void 0 : FY.dequeue(), AY) {
                IY = IY.concat(ur(YY, rY, DY, AY, !0) || []);
                break
              }
        }
        return IY
      }(DY.graph, DY.buckets, DY.zeroIdx).flatMap((rY => YY.outEdges(rY.v, rY.w) || []))
    }

    function ur(YY, rY, DY, FY, AY) {
      let IY = [],
        RY = AY ? IY : void 0;
      return (YY.inEdges(FY.v) || []).forEach((FY => {
        let RY = YY.edge(FY),
          OY = YY.node(FY.v);
        AY && IY.push({
          v: FY.v,
          w: FY.w
        }), OY.out -= RY, sr(rY, DY, OY)
      })), (YY.outEdges(FY.v) || []).forEach((FY => {
        let AY = YY.edge(FY),
          IY = FY.w,
          RY = YY.node(IY);
        RY.in -= AY, sr(rY, DY, RY)
      })), YY.removeNode(FY.v), RY
    }

    function sr(YY, rY, DY) {
      var FY, AY, IY;
      DY.out ? DY.in ? null == (IY = YY[DY.out - DY.in + rY]) || IY.enqueue(DY) : null == (AY = YY[YY.length - 1]) || AY.enqueue(DY) : null == (FY = YY[0]) || FY.enqueue(DY)
    }

    function ir(YY, rY) {
      var DY;
      ("greedy" === YY.graph().acyclicer ? vr(YY, (DY = YY, YY => DY.edge(YY).weight)) : function(YY, rY) {
        let DY = [],
          FY = {},
          AY = {};

        function IY(rY) {
          Object.hasOwn(AY, rY) || (AY[rY] = !0, FY[rY] = !0, YY.outEdges(rY).forEach((YY => {
            Object.hasOwn(FY, YY.w) ? DY.push(YY) : IY(YY.w)
          })), delete FY[rY])
        }

        function RY(IY) {
          var OY;
          Object.hasOwn(AY, IY) || (AY[IY] = !0, FY[IY] = !0, null == (OY = YY.outEdges(IY)) || OY.forEach((AY => {
            var OY, gY;
            Object.hasOwn(FY, AY.w) || (null == (OY = rY.node(IY)) ? void 0 : OY.rank) > (null == (gY = rY.node(AY.w)) ? void 0 : gY.rank) && function(YY, rY, DY) {
              let FY = new Set;

              function AY(rY) {
                var IY;
                if (YY.sources().includes(rY)) return !0;
                FY.add(rY);
                for (let RY of null != (IY = YY.inEdges(rY)) ? IY : [])
                  if ((RY.v !== DY.v || RY.w !== DY.w) && !FY.has(RY.v) && AY(RY.v)) return !0;
                return !1
              }
              return AY(rY)
            }(YY, AY.w, AY) ? DY.push(AY) : RY(AY.w)
          })), delete FY[IY])
        }
        let OY = IY;
        return rY && "function" == typeof rY.node && (OY = RY), YY.sources().forEach(OY), YY.nodes().forEach(OY), DY
      }(YY, null != rY ? rY : null)).forEach((rY => {
        let DY = YY.edge(rY);
        YY.removeEdge(rY), DY.forwardName = rY.name, DY.reversed = !0, YY.setEdge(rY.w, rY.v, DY, tY("rev"))
      }))
    }

    function yr(YY) {
      YY.graph().dummyChains = [], YY.edges().forEach((rY => function(YY, rY) {
        let DY, FY, AY, IY = rY.v,
          RY = YY.node(IY).rank,
          OY = rY.w,
          gY = YY.node(OY).rank,
          aY = rY.name,
          vY = YY.edge(rY),
          uY = vY.labelRank;
        if (gY === RY + 1) return;
        for (YY.removeEdge(rY), AY = 0, ++RY; RY < gY; ++AY, ++RY) vY.points = [], FY = {
          width: 0,
          height: 0,
          edgeLabel: vY,
          edgeObj: rY,
          rank: RY
        }, DY = bY(YY, "edge", FY, "_d"), RY === uY && (FY.width = vY.width, FY.height = vY.height, FY.dummy = "edge-label", FY.labelpos = vY.labelpos), YY.setEdge(IY, DY, {
          weight: vY.weight
        }, aY), 0 === AY && YY.graph().dummyChains.push(DY), IY = DY;
        YY.setEdge(IY, OY, {
          weight: vY.weight
        }, aY)
      }(YY, rY)))
    }

    function Qr(YY) {
      let rY = {};
      YY.sources().forEach((function DY(FY) {
        let AY = YY.node(FY);
        if (Object.hasOwn(rY, FY)) return AY.rank;
        rY[FY] = !0;
        let IY = YY.outEdges(FY),
          RY = IY ? IY.map((rY => null == rY ? Number.POSITIVE_INFINITY : DY(rY.w) - YY.edge(rY).minlen)) : [],
          OY = xY(Math.min, RY);
        return OY === Number.POSITIVE_INFINITY && (OY = 0), AY.rank = OY
      }))
    }

    function or(YY, rY) {
      return YY.node(rY.w).rank - YY.node(rY.v).rank - YY.edge(rY).minlen
    }
    var Wr = function(YY) {
      let rY = new wY({
          directed: !1
        }),
        DY = YY.nodes();
      if (0 === DY.length) throw new Error("Graph must have at least one node");
      let FY, AY, IY = DY[0],
        RY = YY.nodeCount();
      for (rY.setNode(IY, {}); Er(rY, YY) < RY && (FY = mr(rY, YY), FY);) AY = rY.hasNode(FY.v) ? or(YY, FY) : -or(YY, FY), Vr(rY, YY, AY);
      return rY
    };

    function Er(YY, rY) {
      return YY.nodes().forEach((function DY(FY) {
        let AY = rY.nodeEdges(FY);
        AY && AY.forEach((AY => {
          let IY = AY.v,
            RY = FY === IY ? AY.w : IY;
          !YY.hasNode(RY) && !or(rY, AY) && (YY.setNode(RY, {}), YY.setEdge(FY, RY, {}), DY(RY))
        }))
      })), YY.nodeCount()
    }

    function mr(YY, rY) {
      return rY.edges().reduce(((DY, FY) => {
        let AY = Number.POSITIVE_INFINITY;
        return YY.hasNode(FY.v) !== YY.hasNode(FY.w) && (AY = or(rY, FY)), AY < DY[0] ? [AY, FY] : DY
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Vr(YY, rY, DY) {
      YY.nodes().forEach((YY => rY.node(YY).rank += DY))
    }
    var {
      preorder: Sr,
      postorder: lr
    } = WY, Tr = er;

    function er(YY) {
      YY = function(YY) {
        let rY = (new wY).setGraph(YY.graph());
        return YY.nodes().forEach((DY => rY.setNode(DY, YY.node(DY)))), YY.edges().forEach((DY => {
          let FY = rY.edge(DY.v, DY.w) || {
              weight: 0,
              minlen: 1
            },
            AY = YY.edge(DY);
          rY.setEdge(DY.v, DY.w, {
            weight: FY.weight + AY.weight,
            minlen: Math.max(FY.minlen, AY.minlen)
          })
        })), rY
      }(YY), Qr(YY);
      let rY, DY, FY = Wr(YY);
      for (cr(FY), Nr(FY, YY); rY = Hr(FY);) DY = zr(FY, YY, rY), Zr(FY, YY, rY, DY)
    }

    function Nr(YY, rY) {
      let DY = lr(YY, YY.nodes());
      DY = DY.slice(0, DY.length - 1), DY.forEach((DY => function(YY, rY, DY) {
        let FY = YY.node(DY).parent,
          AY = YY.edge(DY, FY);
        AY.cutvalue = Br(YY, rY, DY)
      }(YY, rY, DY)))
    }

    function Br(YY, rY, DY) {
      let FY = YY.node(DY).parent,
        AY = !0,
        IY = rY.edge(DY, FY),
        RY = 0;
      IY || (AY = !1, IY = rY.edge(FY, DY)), RY = IY.weight;
      let OY = rY.nodeEdges(DY);
      return OY && OY.forEach((IY => {
        let OY = IY.v === DY,
          gY = OY ? IY.w : IY.v;
        if (gY !== FY) {
          let FY = OY === AY,
            aY = rY.edge(IY).weight;
          if (RY += FY ? aY : -aY, function(YY, rY, DY) {
              return YY.hasEdge(rY, DY)
            }(YY, DY, gY)) {
            let rY = YY.edge(DY, gY).cutvalue;
            RY += FY ? -rY : rY
          }
        }
      })), RY
    }

    function cr(YY, rY) {
      arguments.length < 2 && (rY = YY.nodes()[0]), Kr(YY, {}, 1, rY)
    }

    function Kr(YY, rY, DY, FY, AY) {
      let IY = DY,
        RY = YY.node(FY);
      rY[FY] = !0;
      let OY = YY.neighbors(FY);
      return OY && OY.forEach((AY => {
        Object.hasOwn(rY, AY) || (DY = Kr(YY, rY, DY, AY, FY))
      })), RY.low = IY, RY.lim = DY++, AY ? RY.parent = AY : delete RY.parent, DY
    }

    function Hr(YY) {
      return YY.edges().find((rY => YY.edge(rY).cutvalue < 0))
    }

    function zr(YY, rY, DY) {
      let FY = DY.v,
        AY = DY.w;
      rY.hasEdge(FY, AY) || (FY = DY.w, AY = DY.v);
      let IY = YY.node(FY),
        RY = YY.node(AY),
        OY = IY,
        gY = !1;
      return IY.lim > RY.lim && (OY = RY, gY = !0), rY.edges().filter((rY => gY === Cr(YY, YY.node(rY.v), OY) && gY !== Cr(YY, YY.node(rY.w), OY))).reduce(((YY, DY) => or(rY, DY) < or(rY, YY) ? DY : YY))
    }

    function Zr(YY, rY, DY, FY) {
      let AY = DY.v,
        IY = DY.w;
      YY.removeEdge(AY, IY), YY.setEdge(FY.v, FY.w, {}), cr(YY), Nr(YY, rY),
        function(YY, rY) {
          let DY = YY.nodes().find((rY => !YY.node(rY).parent));
          if (!DY) return;
          let FY = Sr(YY, [DY]);
          FY = FY.slice(1), FY.forEach((DY => {
            let FY = YY.node(DY).parent,
              AY = rY.edge(DY, FY),
              IY = !1;
            AY || (AY = rY.edge(FY, DY), IY = !0), rY.node(DY).rank = rY.node(FY).rank + (IY ? AY.minlen : -AY.minlen)
          }))
        }(YY, rY)
    }

    function Cr(YY, rY, DY) {
      return DY.low <= rY.lim && rY.lim <= DY.lim
    }
    er.initLowLimValues = cr, er.initCutValues = Nr, er.calcCutValue = Br, er.leaveEdge = Hr, er.enterEdge = zr, er.exchangeEdges = Zr;
    var fr = function(YY) {
      let rY = YY.graph().ranker;
      if ("function" == typeof rY) return rY(YY);
      switch (rY) {
        case "network-simplex":
        default:
          hr(YY);
          break;
        case "tight-tree":
          ! function(YY) {
            Qr(YY), Wr(YY)
          }(YY);
          break;
        case "longest-path":
          jr(YY);
        case "none":
      }
    };
    var jr = Qr;

    function hr(YY) {
      Tr(YY)
    }
    var dr = function(YY) {
      let rY = function(YY) {
          let rY = {},
            DY = 0;

          function FY(AY) {
            let IY = DY;
            YY.children(AY).forEach(FY), rY[AY] = {
              low: IY,
              lim: DY++
            }
          }
          return YY.children(Fr).forEach(FY), rY
        }(YY),
        DY = YY.graph();
      if (!Array.isArray(DY.dummyChains)) return;
      DY.dummyChains.forEach((DY => {
        let FY = YY.node(DY),
          AY = FY.edgeObj,
          IY = function(YY, rY, DY, FY) {
            let AY, IY = [],
              RY = [],
              OY = Math.min(rY[DY].low, rY[FY].low),
              gY = Math.max(rY[DY].lim, rY[FY].lim);
            AY = DY;
            do {
              AY = YY.parent(AY), IY.push(AY)
            } while (AY && (rY[AY].low > OY || gY > rY[AY].lim));
            let aY = AY,
              vY = FY;
            for (;
              (vY = YY.parent(vY)) !== aY;) RY.push(vY);
            return {
              path: IY.concat(RY.reverse()),
              lca: aY
            }
          }(YY, rY, AY.v, AY.w),
          RY = IY.path,
          OY = IY.lca,
          gY = 0,
          aY = RY[gY],
          vY = !0;
        for (; DY !== AY.w;) {
          if (FY = YY.node(DY), vY) {
            for (;
              (aY = RY[gY]) !== OY && YY.node(aY).maxRank < FY.rank;) gY++;
            aY === OY && (vY = !1)
          }
          if (!vY) {
            for (; gY < RY.length - 1 && YY.node(RY[gY + 1]).minRank <= FY.rank;) gY++;
            aY = RY[gY]
          }
          void 0 !== aY && YY.setParent(DY, aY), DY = YY.successors(DY)[0]
        }
      }))
    };

    function Jr(YY) {
      let rY = bY(YY, "root", {}, "_root"),
        DY = function(YY) {
          let rY = {};

          function DY(FY, AY) {
            let IY = YY.children(FY);
            IY && IY.length && IY.forEach((YY => DY(YY, AY + 1))), rY[FY] = AY
          }
          return YY.children(Fr).forEach((YY => DY(YY, 1))), rY
        }(YY),
        FY = Object.values(DY),
        AY = xY(Math.max, FY) - 1,
        IY = 2 * AY + 1;
      YY.graph().nestingRoot = rY, YY.edges().forEach((rY => YY.edge(rY).minlen *= IY));
      let RY = function(YY) {
        return YY.edges().reduce(((rY, DY) => rY + YY.edge(DY).weight), 0)
      }(YY) + 1;
      YY.children(Fr).forEach((FY => {
        Mr(YY, rY, IY, RY, AY, DY, FY)
      })), YY.graph().nodeRankFactor = IY
    }

    function Mr(YY, rY, DY, FY, AY, IY, RY) {
      var OY;
      let gY = YY.children(RY);
      if (!gY.length) return void(RY !== rY && YY.setEdge(rY, RY, {
        weight: 0,
        minlen: DY
      }));
      let aY = kY(YY, "_bt"),
        vY = kY(YY, "_bb"),
        uY = YY.node(RY);
      YY.setParent(aY, RY), uY.borderTop = aY, YY.setParent(vY, RY), uY.borderBottom = vY, gY.forEach((OY => {
        var gY;
        Mr(YY, rY, DY, FY, AY, IY, OY);
        let uY = YY.node(OY),
          sY = uY.borderTop ? uY.borderTop : OY,
          iY = uY.borderBottom ? uY.borderBottom : OY,
          yY = uY.borderTop ? FY : 2 * FY,
          QY = sY !== iY ? 1 : AY - (null != (gY = IY[RY]) ? gY : 0) + 1;
        YY.setEdge(aY, sY, {
          weight: yY,
          minlen: QY,
          nestingEdge: !0
        }), YY.setEdge(iY, vY, {
          weight: yY,
          minlen: QY,
          nestingEdge: !0
        })
      })), YY.parent(RY) || YY.setEdge(rY, aY, {
        weight: 0,
        minlen: AY + (null != (OY = IY[RY]) ? OY : 0)
      })
    }
    var wr = function(YY) {
      YY.children(Fr).forEach((function rY(DY) {
        let FY = YY.children(DY),
          AY = YY.node(DY);
        if (FY.length && FY.forEach(rY), AY && Object.hasOwn(AY, "minRank")) {
          AY.borderLeft = [], AY.borderRight = [];
          for (let rY = AY.minRank, FY = AY.maxRank + 1; rY < FY; ++rY) br(YY, "borderLeft", "_bl", DY, AY, rY), br(YY, "borderRight", "_br", DY, AY, rY)
        }
      }))
    };

    function br(YY, rY, DY, FY, AY, IY) {
      let RY = {
          width: 0,
          height: 0,
          rank: IY,
          borderType: rY
        },
        OY = AY[rY][IY - 1],
        gY = bY(YY, "border", RY, DY);
      AY[rY][IY] = gY, YY.setParent(gY, FY), OY && YY.setEdge(OY, gY, {
        weight: 1
      })
    }

    function Xr(YY) {
      var rY;
      let DY = null == (rY = YY.graph().rankdir) ? void 0 : rY.toLowerCase();
      ("bt" === DY || "rl" === DY) && function(YY) {
        YY.nodes().forEach((rY => kr(YY.node(rY)))), YY.edges().forEach((rY => {
          var DY;
          let FY = YY.edge(rY);
          null == (DY = FY.points) || DY.forEach(kr), Object.hasOwn(FY, "y") && kr(FY)
        }))
      }(YY), ("lr" === DY || "rl" === DY) && (function(YY) {
        YY.nodes().forEach((rY => Gr(YY.node(rY)))), YY.edges().forEach((rY => {
          var DY;
          let FY = YY.edge(rY);
          null == (DY = FY.points) || DY.forEach(Gr), Object.hasOwn(FY, "x") && Gr(FY)
        }))
      }(YY), qr(YY))
    }

    function qr(YY) {
      YY.nodes().forEach((rY => pr(YY.node(rY)))), YY.edges().forEach((rY => pr(YY.edge(rY))))
    }

    function pr(YY) {
      let rY = YY.width;
      YY.width = YY.height, YY.height = rY
    }

    function kr(YY) {
      YY.y = -YY.y
    }

    function Gr(YY) {
      let rY = YY.x;
      YY.x = YY.y, YY.y = rY
    }

    function xr(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        DY = {},
        FY = YY.nodes().filter((rY => !YY.children(rY).length)),
        AY = FY.map((rY => YY.node(rY).rank)),
        IY = Yr(xY(Math.max, AY) + 1).map((() => []));
      return FY.sort(((rY, DY) => YY.node(rY).rank - YY.node(DY).rank)).forEach((function FY(AY) {
        if (DY[AY]) return;
        DY[AY] = !0;
        let RY = YY.node(AY);
        IY[RY.rank].push(AY);
        let OY = YY.successors(AY);
        OY && [...OY].sort(((DY, FY) => function(DY, FY) {
          let AY = YY.node(DY),
            IY = YY.node(FY);
          return Ar(rY, AY, IY)
        }(DY, FY))).forEach(FY)
      })), IY
    }

    function nr(YY, rY) {
      let DY = 0;
      for (let FY = 1; FY < rY.length; ++FY) DY += Pr(YY, rY[FY - 1], rY[FY]);
      return DY
    }

    function Pr(YY, rY, DY) {
      let FY = function(YY, rY) {
          return YY.reduce(((YY, DY, FY) => (YY[DY] = rY[FY], YY)), {})
        }(DY, DY.map(((YY, rY) => rY))),
        AY = rY.flatMap((rY => {
          let DY = YY.outEdges(rY);
          return DY ? DY.map((rY => ({
            pos: FY[rY.w],
            weight: YY.edge(rY).weight
          }))).sort(((YY, rY) => YY.pos - rY.pos)) : []
        })),
        IY = 1;
      for (; IY < DY.length;) IY <<= 1;
      let RY = 2 * IY - 1;
      IY -= 1;
      let OY = new Array(RY).fill(0),
        gY = 0;
      return AY.forEach((YY => {
        let rY = YY.pos + IY;
        OY[rY] += YY.weight;
        let DY = 0;
        for (; rY > 0;) rY % 2 && (DY += OY[rY + 1]), rY = rY - 1 >> 1, OY[rY] += YY.weight;
        gY += YY.weight * DY
      })), gY
    }

    function Ur(YY, rY) {
      let DY = {};
      return YY.forEach(((YY, rY) => {
          let FY = {
            indegree: 0,
            in: [],
            out: [],
            vs: [YY.v],
            i: rY
          };
          void 0 !== YY.barycenter && (FY.barycenter = YY.barycenter, FY.weight = YY.weight), DY[YY.v] = FY
        })), rY.edges().forEach((YY => {
          let rY = DY[YY.v],
            FY = DY[YY.w];
          void 0 !== rY && void 0 !== FY && (FY.indegree++, rY.out.push(FY))
        })),
        function(YY) {
          let rY = [];

          function DY(YY) {
            return rY => {
              rY.merged || (void 0 === rY.barycenter || void 0 === YY.barycenter || rY.barycenter >= YY.barycenter) && function(YY, rY) {
                let DY = 0,
                  FY = 0;
                YY.weight && (DY += YY.barycenter * YY.weight, FY += YY.weight), rY.weight && (DY += rY.barycenter * rY.weight, FY += rY.weight), YY.vs = rY.vs.concat(YY.vs), YY.barycenter = DY / FY, YY.weight = FY, YY.i = Math.min(rY.i, YY.i), rY.merged = !0
              }(YY, rY)
            }
          }

          function FY(rY) {
            return DY => {
              DY.in.push(rY), 0 === --DY.indegree && YY.push(DY)
            }
          }
          for (; YY.length;) {
            let AY = YY.pop();
            rY.push(AY), AY.in.reverse().forEach(DY(AY)), AY.out.forEach(FY(AY))
          }
          return rY.filter((YY => !YY.merged)).map((YY => rr(YY, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(DY).filter((YY => !YY.indegree)))
    }

    function Lr(YY, rY, DY, FY, AY) {
      let IY = {},
        RY = null,
        OY = null,
        gY = AY;
      "boolean" == typeof rY ? (gY = rY, IY = {}) : rY && (IY = rY, RY = null != DY ? DY : null, OY = null != FY ? FY : null);
      let aY = function(YY, rY) {
          let DY = {
            lhs: [],
            rhs: []
          };
          return YY.forEach((YY => {
            rY(YY) ? DY.lhs.push(YY) : DY.rhs.push(YY)
          })), DY
        }(YY, (YY => Object.hasOwn(YY, "barycenter"))),
        vY = aY.lhs,
        uY = aY.rhs.sort(((YY, rY) => rY.i - YY.i)),
        sY = [],
        iY = 0,
        yY = 0,
        QY = 0;
      vY.sort(function(YY, rY, DY) {
        return (FY, AY) => {
          if (FY.barycenter < AY.barycenter) return -1;
          if (FY.barycenter > AY.barycenter) return 1;
          if (YY && ("string" == typeof FY.vs[0] || "string" == typeof AY.vs[0])) {
            let DY = YY.node(FY.vs[0]),
              IY = YY.node(AY.vs[0]),
              RY = Ar(rY, DY, IY);
            if (0 !== RY) return RY
          }
          return DY ? AY.i - FY.i : FY.i - AY.i
        }
      }(OY, RY, !!gY));
      for (let [WY, EY] of Object.entries(IY)) {
        let YY = vY.findIndex((YY => YY.vs[0] === WY));
        vY.splice(YY + 1, 0, EY)
      }
      QY = tr(sY, uY, QY), vY.forEach((YY => {
        QY += YY.vs.length, sY.push(YY.vs), iY += YY.barycenter * YY.weight, yY += YY.weight, QY = tr(sY, uY, QY)
      }));
      let oY = {
        vs: sY.flat(1)
      };
      return yY && (oY.barycenter = iY / yY, oY.weight = yY), oY
    }

    function tr(YY, rY, DY) {
      let FY;
      for (; rY.length && (FY = rY[rY.length - 1]).i <= DY;) rY.pop(), YY.push(FY.vs), DY++;
      return DY
    }

    function YD(YY, rY, DY, FY, AY) {
      var IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY;
      let oY = null,
        WY = AY;
      "boolean" == typeof FY ? (WY = FY, oY = null) : void 0 !== FY && (oY = FY);
      let EY = YY.children(rY),
        mY = YY.node(rY),
        VY = mY ? mY.borderLeft : void 0,
        SY = mY ? mY.borderRight : void 0,
        lY = {};
      VY && (EY = EY.filter((YY => YY !== VY && YY !== SY)));
      let TY = function(YY) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((rY => {
          let DY = YY.inEdges(rY);
          if (!DY || !DY.length) return {
            v: rY
          };
          {
            let FY = DY.reduce(((rY, DY) => {
              let FY = YY.edge(DY),
                AY = YY.node(DY.v);
              return {
                sum: rY.sum + FY.weight * AY.order,
                weight: rY.weight + FY.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: rY,
              barycenter: FY.sum / FY.weight,
              weight: FY.weight
            }
          }
        }))
      }(YY, EY);
      TY.forEach((rY => {
        if (YY.children(rY.v).length) {
          let {
            result: FY
          } = YD(YY, rY.v, DY, oY, WY);
          lY[rY.v] = FY, Object.hasOwn(FY, "barycenter") && function(YY, rY) {
            void 0 !== YY.barycenter ? (YY.barycenter = (YY.barycenter * YY.weight + rY.barycenter * rY.weight) / (YY.weight + rY.weight), YY.weight += rY.weight) : (YY.barycenter = rY.barycenter, YY.weight = rY.weight)
          }(rY, FY)
        }
      }));
      let eY = Ur(TY, DY);
      ! function(YY, rY) {
        YY.forEach((YY => {
          YY.vs = YY.vs.flatMap((YY => rY[YY] ? rY[YY].vs : YY))
        }))
      }(eY, lY);
      let NY = {},
        BY = !1;
      for (let KY = 0; KY < eY.length; KY++)
        for (let rY = KY + 1; rY < eY.length; rY++)
          if (eY[KY] && eY[rY] && null != (IY = eY[KY]) && IY.barycenter && null != (RY = eY[rY]) && RY.barycenter && (null == (OY = eY[KY]) ? void 0 : OY.barycenter) === eY[rY].barycenter) {
            let DY = null != (aY = null == (gY = eY[KY]) ? void 0 : gY.vs[0]) ? aY : "",
              FY = null != (uY = null == (vY = eY[rY]) ? void 0 : vY.vs[0]) ? uY : "",
              AY = YY.node(DY),
              IY = YY.node(FY);
            if ("edge" === AY.dummy && "edge" === IY.dummy && (null == (sY = AY.edgeObj) ? void 0 : sY.v) === (null == (iY = IY.edgeObj) ? void 0 : iY.v) && (null == (yY = AY.edgeObj) ? void 0 : yY.w) === (null == (QY = IY.edgeObj) ? void 0 : QY.w)) {
              if (AY.edgeLabel.reversed) {
                NY[FY] = eY[KY], eY.splice(KY, 1), KY--;
                break
              }
              NY[DY] = eY[rY], eY.splice(rY, 1), rY--
            } else BY = !0
          } let cY = Lr(eY, NY, oY, YY, WY);
      if (VY && SY) {
        cY.vs = [VY, cY.vs, SY].flat(1);
        let rY = YY.predecessors(VY);
        if (rY && rY.length) {
          let DY = YY.node(rY[0]),
            FY = YY.predecessors(SY),
            AY = YY.node(FY[0]);
          Object.hasOwn(cY, "barycenter") || (cY.barycenter = 0, cY.weight = 0), cY.barycenter = (cY.barycenter * cY.weight + DY.order + AY.order) / (cY.weight + 2), cY.weight += 2
        }
      }
      return Object.defineProperty(cY, "result", {
        value: cY,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(cY, "usedBias", {
        value: BY,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), cY
    }

    function rD(YY, rY, DY, FY) {
      FY || (FY = YY.nodes());
      let AY = function(YY) {
          let rY;
          for (; YY.hasNode(rY = tY("_root")););
          return rY
        }(YY),
        IY = new wY({
          compound: !0
        }).setGraph({
          root: AY
        }).setDefaultNodeLabel((rY => YY.node(rY)));
      return FY.forEach((FY => {
        let RY = YY.node(FY),
          OY = YY.parent(FY);
        if (RY.rank === rY || RY.minRank <= rY && rY <= RY.maxRank) {
          IY.setNode(FY), IY.setParent(FY, OY || AY);
          let gY = YY[DY](FY);
          gY && gY.forEach((rY => {
            let DY = rY.v === FY ? rY.w : rY.v,
              AY = IY.edge(DY, FY),
              RY = void 0 !== AY ? AY.weight : 0;
            IY.setEdge(DY, FY, {
              weight: YY.edge(rY).weight + RY
            })
          })), Object.hasOwn(RY, "minRank") && IY.setNode(FY, {
            borderLeft: RY.borderLeft[rY],
            borderRight: RY.borderRight[rY]
          })
        }
      })), IY
    }

    function DD(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof rY.customOrder) return void rY.customOrder(YY, DD);
      let FY = nY(YY),
        AY = FD(YY, Yr(1, FY + 1), "inEdges"),
        IY = FD(YY, Yr(FY - 1, -1, -1), "outEdges"),
        RY = xr(YY, DY);
      if (ID(YY, RY), rY.disableOptimalOrderHeuristic) return;
      let OY, gY = Number.POSITIVE_INFINITY,
        aY = rY.constraints || [];
      for (let vY = 0, uY = 0; uY < 4; ++vY, ++uY) {
        AD(vY % 2 ? AY : IY, vY % 4 >= 2, aY, DY), RY = pY(YY);
        let rY = nr(YY, RY);
        rY < gY ? (uY = 0, OY = Object.assign({}, RY), gY = rY) : rY === gY && (OY = structuredClone(RY))
      }
      ID(YY, OY)
    }

    function FD(YY, rY, DY) {
      let FY = new Map,
        AY = (YY, rY) => {
          FY.has(YY) || FY.set(YY, []), FY.get(YY).push(rY)
        };
      for (let IY of YY.nodes()) {
        let rY = YY.node(IY);
        if ("number" == typeof rY.rank && AY(rY.rank, IY), "number" == typeof rY.minRank && "number" == typeof rY.maxRank)
          for (let YY = rY.minRank; YY <= rY.maxRank; YY++) YY !== rY.rank && AY(YY, IY)
      }
      return rY.map((function(rY) {
        return rD(YY, rY, DY, FY.get(rY) || [])
      }))
    }

    function AD(YY, rY, DY, FY) {
      let AY = !0,
        IY = new wY;
      YY.forEach((function(YY) {
        DY.forEach((YY => IY.setEdge(YY.left, YY.right)));
        let RY = YY.graph().root,
          {
            result: OY,
            usedBias: gY
          } = YD(YY, RY, IY, FY, AY);
        rY && gY && (AY = !AY), OY.vs.forEach(((rY, DY) => YY.node(rY).order = DY)),
          function(YY, rY, DY) {
            let FY, AY = {};
            DY.forEach((DY => {
              let IY, RY, OY = YY.parent(DY);
              for (; OY;) {
                if (IY = YY.parent(OY), IY ? (RY = AY[IY], AY[IY] = OY) : (RY = FY, FY = OY), RY && RY !== OY) return void rY.setEdge(RY, OY);
                OY = IY
              }
            }))
          }(YY, IY, OY.vs)
      }))
    }

    function ID(YY, rY) {
      Object.values(rY).forEach((rY => rY.forEach(((rY, DY) => YY.node(rY).order = DY))))
    }

    function RD(YY, rY, DY) {
      if (rY > DY) {
        let YY = rY;
        rY = DY, DY = YY
      }
      let FY = YY[rY];
      FY || (YY[rY] = FY = {}), FY[DY] = !0
    }

    function OD(YY, rY, DY) {
      if (rY > DY) {
        let YY = rY;
        rY = DY, DY = YY
      }
      let FY = YY[rY];
      return void 0 !== FY && Object.hasOwn(FY, DY)
    }

    function gD(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        IY = {},
        RY = function(YY, rY, DY, FY) {
          let AY = new wY,
            IY = YY.graph(),
            RY = function(YY, rY, DY) {
              return (FY, AY, IY) => {
                let RY, OY = FY.node(AY),
                  gY = FY.node(IY),
                  aY = 0;
                if (aY += OY.width / 2, Object.hasOwn(OY, "labelpos")) switch (OY.labelpos.toLowerCase()) {
                  case "l":
                    RY = -OY.width / 2;
                    break;
                  case "r":
                    RY = OY.width / 2
                }
                if (RY && (aY += DY ? RY : -RY), RY = void 0, aY += (OY.dummy ? rY : YY) / 2, aY += (gY.dummy ? rY : YY) / 2, aY += gY.width / 2, Object.hasOwn(gY, "labelpos")) switch (gY.labelpos.toLowerCase()) {
                  case "l":
                    RY = gY.width / 2;
                    break;
                  case "r":
                    RY = -gY.width / 2
                }
                return RY && (aY += DY ? RY : -RY), aY
              }
            }(IY.nodesep, IY.edgesep, FY);
          return rY.forEach((rY => {
            let FY;
            rY.forEach((rY => {
              let IY = DY[rY];
              if (void 0 !== IY) {
                if (AY.setNode(IY), void 0 !== FY) {
                  let OY = DY[FY];
                  if (void 0 !== OY) {
                    let DY = AY.edge(OY, IY);
                    AY.setEdge(OY, IY, Math.max(RY(YY, rY, FY), DY || 0))
                  }
                }
                FY = rY
              }
            }))
          })), AY
        }(YY, rY, DY, AY),
        OY = AY ? "borderLeft" : "borderRight";

      function gY(YY, rY) {
        let DY = RY.nodes().slice(),
          FY = {},
          AY = DY.pop();
        for (; AY;) {
          if (FY[AY]) YY(AY);
          else {
            FY[AY] = !0, DY.push(AY);
            for (let YY of rY(AY)) DY.push(YY)
          }
          AY = DY.pop()
        }
      }
      return gY((function(YY) {
        let rY = RY.inEdges(YY);
        IY[YY] = rY ? rY.reduce(((YY, rY) => {
          var DY;
          let FY = null != (DY = IY[rY.v]) ? DY : 0,
            AY = RY.edge(rY);
          return Math.max(YY, FY + (void 0 !== AY ? AY : 0))
        }), 0) : 0
      }), (function(YY) {
        return RY.predecessors(YY) || []
      })), gY((function(rY) {
        let DY = RY.outEdges(rY),
          FY = Number.POSITIVE_INFINITY;
        DY && (FY = DY.reduce(((YY, rY) => {
          let DY = IY[rY.w],
            FY = RY.edge(rY);
          return Math.min(YY, (void 0 !== DY ? DY : 0) - (void 0 !== FY ? FY : 0))
        }), Number.POSITIVE_INFINITY));
        let AY = YY.node(rY);
        FY !== Number.POSITIVE_INFINITY && AY.borderType !== OY && (IY[rY] = Math.max(void 0 !== IY[rY] ? IY[rY] : 0, FY))
      }), (function(YY) {
        return RY.successors(YY) || []
      })), Object.keys(FY).forEach((YY => {
        var rY;
        let FY = DY[YY];
        void 0 !== FY && (IY[YY] = null != (rY = IY[FY]) ? rY : 0)
      })), IY
    }

    function aD(YY, rY) {
      let DY, FY = pY(YY),
        AY = Object.assign(function(YY, rY) {
          let DY = {};
          return rY.length && rY.reduce((function(rY, FY) {
            let AY = 0,
              IY = 0,
              RY = rY.length,
              OY = FY[FY.length - 1];
            return FY.forEach(((rY, gY) => {
              let aY = function(YY, rY) {
                  if (YY.node(rY).dummy) {
                    let DY = YY.predecessors(rY);
                    if (DY) return DY.find((rY => YY.node(rY).dummy))
                  }
                }(YY, rY),
                vY = aY ? YY.node(aY).order : RY;
              (aY || rY === OY) && (FY.slice(IY, gY + 1).forEach((rY => {
                let FY = YY.predecessors(rY);
                FY && FY.forEach((FY => {
                  let IY = YY.node(FY),
                    RY = IY.order;
                  (RY < AY || vY < RY) && (!IY.dummy || !YY.node(rY).dummy) && RD(DY, FY, rY)
                }))
              })), IY = gY + 1, AY = vY)
            })), FY
          })), DY
        }(YY, FY), function(YY, rY) {
          let DY = {};

          function FY(rY, FY, AY, IY, RY) {
            Yr(FY, AY).forEach((FY => {
              let AY = rY[FY];
              if (void 0 !== AY && YY.node(AY).dummy) {
                let rY = YY.predecessors(AY);
                rY && rY.forEach((rY => {
                  if (void 0 === rY) return;
                  let FY = YY.node(rY);
                  FY.dummy && (FY.order < IY || FY.order > RY) && RD(DY, rY, AY)
                }))
              }
            }))
          }
          return rY.length && rY.reduce((function(rY, DY) {
            let AY = -1,
              IY = -1,
              RY = 0;
            return DY.forEach(((OY, gY) => {
              if ("border" === YY.node(OY).dummy) {
                let rY = YY.predecessors(OY);
                if (rY && rY.length) {
                  let OY = rY[0];
                  if (void 0 === OY) return;
                  IY = YY.node(OY).order, FY(DY, RY, gY, AY, IY), RY = gY, AY = IY
                }
              }
              FY(DY, RY, DY.length, IY, rY.length)
            })), DY
          })), DY
        }(YY, FY)),
        IY = {};
      ["u", "d"].forEach((RY => {
        DY = "u" === RY ? FY : Object.values(FY).reverse(), ["l", "r"].forEach((FY => {
          "r" === FY && (DY = DY.map((YY => Object.values(YY).reverse())));
          let OY = function(YY, rY, DY, FY, AY) {
              let IY = {},
                RY = {},
                OY = {};
              return rY.forEach((YY => {
                YY.forEach(((YY, rY) => {
                  IY[YY] = YY, RY[YY] = YY, OY[YY] = rY
                }))
              })), rY.forEach((rY => {
                let gY = -1,
                  aY = -1,
                  vY = !1,
                  uY = rY,
                  sY = rY.findIndex((rY => (null == AY ? void 0 : AY.includes(rY)) || vD(rY, YY, AY)));
                sY > 0 && (uY = [rY[sY], ...rY.slice(0, sY), ...rY.slice(sY + 1)], vY = !0), uY.forEach((rY => {
                  var uY;
                  let sY = FY(rY);
                  if (sY && sY.length) {
                    null != AY && AY.includes(rY) && (sY = sY.filter((rY => vD(rY, YY, AY))));
                    let FY = sY.sort(((YY, rY) => {
                        let DY = OY[YY],
                          FY = OY[rY];
                        return (void 0 !== DY ? DY : 0) - (void 0 !== FY ? FY : 0)
                      })),
                      iY = (FY.length - 1) / 2;
                    for (let YY = Math.floor(iY), AY = Math.ceil(iY); YY <= AY; ++YY) {
                      let AY = FY[YY];
                      if (void 0 === AY) continue;
                      let sY = OY[AY];
                      if (void 0 !== sY && RY[rY] === rY && gY < sY && OY[AY] !== aY && !OD(DY, rY, AY)) {
                        let YY = IY[AY];
                        void 0 !== YY && (RY[AY] = rY, RY[rY] = IY[rY] = YY, gY = sY, vY && (gY = -1, aY = null != (uY = OY[AY]) ? uY : -1, vY = !1))
                      }
                    }
                  }
                }))
              })), {
                root: IY,
                align: RY
              }
            }(YY, DY, AY, (rY => ("u" === RY ? YY.predecessors(rY) : YY.successors(rY)) || []), rY),
            gY = gD(YY, DY, OY.root, OY.align, "r" === FY);
          "r" === FY && (gY = Dr(gY, (YY => -YY))), IY[RY + FY] = gY
        }))
      }));
      let RY = function(YY, rY) {
        return Object.values(rY).reduce(((rY, DY) => {
          let FY = Number.NEGATIVE_INFINITY,
            AY = Number.POSITIVE_INFINITY;
          Object.entries(DY).forEach((rY => {
            let [DY, IY] = rY, RY = function(YY, rY) {
              return YY.node(rY).width
            }(YY, DY) / 2;
            FY = Math.max(IY + RY, FY), AY = Math.min(IY - RY, AY)
          }));
          let IY = FY - AY;
          return IY < rY[0] && (rY = [IY, DY]), rY
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(YY, IY);
      return function(YY, rY) {
          let DY = Object.values(rY),
            FY = xY(Math.min, DY),
            AY = xY(Math.max, DY);
          ["u", "d"].forEach((DY => {
            ["l", "r"].forEach((IY => {
              let RY = DY + IY,
                OY = YY[RY];
              if (!OY || OY === rY) return;
              let gY = Object.values(OY),
                aY = FY - xY(Math.min, gY);
              "l" !== IY && (aY = AY - xY(Math.max, gY)), aY && (YY[RY] = Dr(OY, (YY => YY + aY)))
            }))
          }))
        }(IY, RY),
        function(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            DY = YY.ul;
          return DY ? Dr(DY, ((DY, FY) => {
            var AY, IY;
            if (rY) {
              let DY = rY.toLowerCase(),
                AY = YY[DY];
              if (AY && void 0 !== AY[FY]) return AY[FY]
            }
            let RY = Object.values(YY).map((YY => {
              let rY = YY[FY];
              return void 0 !== rY ? rY : 0
            })).sort(((YY, rY) => YY - rY));
            return ((null != (AY = RY[1]) ? AY : 0) + (null != (IY = RY[2]) ? IY : 0)) / 2
          })) : {}
        }(IY, YY.graph().align)
    }

    function vD(YY, rY, DY) {
      var FY;
      if (!DY) return !1;
      let AY = null == (FY = rY.node(YY)) ? void 0 : FY.edgeObj;
      if (!AY || rY.node(YY).edgeLabel.reversed) return !1;
      let IY = DY.indexOf(null == AY ? void 0 : AY.v),
        RY = DY.indexOf(null == AY ? void 0 : AY.w);
      return -1 !== IY && -1 !== RY && IY === (RY + 1) % DY.length || IY === (RY - 1) % DY.length
    }

    function uD(YY, rY) {
      (function(YY) {
        let rY = pY(YY),
          DY = YY.graph(),
          FY = DY.ranksep,
          AY = DY.rankalign,
          IY = 0;
        rY.forEach((rY => {
          let DY = rY.reduce(((rY, DY) => {
            var FY;
            let AY = null != (FY = YY.node(DY).height) ? FY : 0;
            return rY > AY ? rY : AY
          }), 0);
          rY.forEach((rY => {
            let FY = YY.node(rY);
            FY.y = "top" === AY ? IY + FY.height / 2 : "bottom" === AY ? IY + DY - FY.height / 2 : IY + DY / 2
          })), IY += DY + FY
        }))
      })(YY = XY(YY)), Object.entries(aD(YY, rY)).forEach((rY => {
        let [DY, FY] = rY;
        return YY.node(DY).x = FY
      }))
    }
    var sD = new WeakMap;

    function iD(YY) {
      return QD(YY, UY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), YY
    }

    function yD(YY, rY, DY) {
      let FY = rY;
      for (; void 0 !== FY;) {
        let rY = YY.parent(FY);
        if (rY === DY) return FY;
        FY = rY
      }
    }

    function QD(YY, rY, DY) {
      var FY;
      let AY = YY.nodes().filter((rY => YY.children(rY).length)),
        IY = {};
      AY.forEach((FY => {
        let AY = YY.node(FY);
        if (AY && AY.rankdir) {
          let RY = new wY({
            multigraph: !0,
            compound: !0
          });
          RY.setGraph({
            rankdir: AY.rankdir
          });
          let OY = YY.children(FY);
          OY.forEach((rY => {
            let DY = {
              ...YY.node(rY)
            };
            RY.setNode(rY, DY);
            let AY = YY.parent(rY);
            AY && AY !== FY && OY.includes(AY) && RY.setParent(rY, AY)
          }));
          let gY = new Set;
          YY.edges().forEach((rY => {
            let DY = yD(YY, rY.v, FY),
              AY = yD(YY, rY.w, FY);
            if (DY && AY && DY !== AY) {
              let FY = `${DY}\0${AY}`;
              gY.has(FY) || (gY.add(FY), RY.setEdge(DY, AY, {
                ...YY.edge(rY)
              }))
            }
          })), QD(RY, rY, DY);
          let aY = BD(RY);
          oD(aY, rY, DY, null), WD(RY, aY);
          let vY = 1 / 0,
            uY = 1 / 0,
            sY = -1 / 0,
            iY = -1 / 0;
          RY.nodes().forEach((YY => {
            if (YY === FY) return;
            let rY = RY.node(YY);
            rY && "number" == typeof rY.x && "number" == typeof rY.y && "number" == typeof rY.width && "number" == typeof rY.height && (vY = Math.min(vY, rY.x - rY.width / 2), sY = Math.max(sY, rY.x + rY.width / 2), uY = Math.min(uY, rY.y - rY.height / 2), iY = Math.max(iY, rY.y + rY.height / 2))
          })), (!isFinite(vY) || !isFinite(uY) || !isFinite(sY) || !isFinite(iY)) && (vY = uY = 0, sY = iY = 0);
          let yY = sY - vY,
            QY = iY - uY;
          IY[FY] = {
            minX: vY,
            NA: uY,
            maxX: sY,
            BA: iY,
            width: yY,
            height: QY,
            offsetX: vY,
            offsetY: uY
          }, AY._dagreClusterSubgraph = RY
        }
      }));
      let RY = [],
        OY = new Map;
      AY.forEach((rY => {
        let DY = YY.node(rY);
        DY && DY.rankdir && IY[rY] && OY.set(rY, (YY.children(rY) || []).filter((YY => YY !== rY)))
      }));
      let gY = new Set([...OY.values()].flat()),
        aY = new Map;
      OY.forEach(((rY, DY) => {
        gY.has(DY) || aY.set(DY, (rY => {
          let DY = [],
            FY = (YY.children(rY) || []).filter((YY => YY !== rY));
          for (; FY.length > 0;) {
            let rY = FY.shift();
            DY.push(rY), (YY.children(rY) || []).filter((YY => YY !== rY)).forEach((YY => FY.push(YY)))
          }
          return DY
        })(DY))
      }));
      let vY = new Set([...aY.values()].flat()),
        uY = YY => {
          for (let [rY, DY] of aY)
            if (DY.includes(YY)) return rY;
          return YY
        },
        sY = [];
      YY.edges().forEach((rY => {
        (vY.has(rY.v) || vY.has(rY.w)) && sY.push({
          edge: rY,
          label: YY.edge(rY)
        })
      }));
      let iY = new Map;
      vY.forEach((rY => {
        let DY = YY.parent(rY);
        iY.set(rY, "string" == typeof DY ? DY : void 0)
      })), aY.forEach(((rY, DY) => {
        let FY = YY.node(DY),
          AY = [];
        rY.forEach((rY => {
          let DY = YY.node(rY);
          DY && (AY.push({
            id: rY,
            node: DY,
            parent: iY.get(rY)
          }), YY.removeNode(rY))
        }));
        let OY = sY.filter((YY => {
            let {
              edge: DY
            } = YY;
            return rY.includes(DY.v) || rY.includes(DY.w)
          })),
          gY = IY[DY];
        FY && (RY.push({
          clusterId: DY,
          subgraph: FY._dagreClusterSubgraph,
          bounds: gY,
          children: rY,
          removedNodes: AY,
          removedEdges: OY
        }), FY.width = gY.width, FY.height = gY.height)
      }));
      let yY = new Set;
      sY.forEach((rY => {
        let {
          edge: DY,
          label: FY
        } = rY, AY = uY(DY.v), IY = uY(DY.w);
        if (AY !== IY && YY.hasNode(AY) && YY.hasNode(IY)) {
          let rY = `${AY}\0${IY}`;
          yY.has(rY) || (yY.add(rY), YY.setEdge(AY, IY, {
            ...FY,
            width: 0,
            height: 0
          }))
        }
      }));
      let QY = BD(YY),
        oY = oD(QY, rY, DY, null != (FY = sD.get(YY)) ? FY : null);
      sD.set(YY, oY), WD(YY, QY), yY.forEach((rY => {
        let DY = rY.indexOf("\0"),
          FY = rY.slice(0, DY),
          AY = rY.slice(DY + 1);
        YY.hasEdge(FY, AY) && YY.removeEdge(FY, AY)
      })), RY.forEach((rY => {
        let {
          clusterId: DY,
          subgraph: FY,
          bounds: AY,
          removedNodes: IY,
          removedEdges: RY
        } = rY;
        var OY, gY;
        let aY = YY.node(DY),
          vY = null != (OY = null == aY ? void 0 : aY.x) ? OY : 0,
          uY = null != (gY = null == aY ? void 0 : aY.y) ? gY : 0,
          sY = (AY.minX + AY.maxX) / 2,
          iY = (AY.NA + AY.BA) / 2;
        IY.forEach((rY => {
          let {
            id: DY,
            node: FY,
            parent: AY
          } = rY;
          YY.setNode(DY, FY), void 0 !== AY && YY.setParent(DY, AY)
        })), RY.forEach((rY => {
          let {
            edge: DY,
            label: FY
          } = rY;
          YY.setEdge(DY, FY)
        })), FY.nodes().forEach((rY => {
          if (rY === DY) return;
          let AY = FY.node(rY),
            IY = YY.node(rY);
          IY && AY && "number" == typeof AY.x && "number" == typeof AY.y && (IY.x = vY + (AY.x - sY), IY.y = uY + (AY.y - iY))
        })), delete aY._dagreClusterSubgraph
      })), AY.forEach((rY => {
        var DY, FY;
        let AY = YY.node(rY),
          RY = IY[rY];
        if (AY && AY.rankdir && AY._dagreClusterSubgraph && RY) {
          let IY = AY._dagreClusterSubgraph,
            OY = null != (DY = AY.x) ? DY : 0,
            gY = null != (FY = AY.y) ? FY : 0,
            aY = (RY.minX + RY.maxX) / 2,
            vY = (RY.NA + RY.BA) / 2;
          IY.nodes().forEach((DY => {
            if (DY === rY) return;
            let FY = IY.node(DY),
              AY = YY.node(DY);
            if (AY && FY && "number" == typeof FY.x && "number" == typeof FY.y) {
              let YY = FY.x - aY,
                rY = FY.y - vY;
              AY.x = OY + YY, AY.y = gY + rY
            }
          })), delete AY._dagreClusterSubgraph
        }
      }))
    }

    function oD(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var AY, IY;
      let RY = !1 !== (null == DY ? void 0 : DY.useDynamic),
        OY = RY && null != (AY = null == FY ? void 0 : FY.graph) ? AY : null,
        gY = RY && null != (IY = null == FY ? void 0 : FY.rawNodes) ? IY : null;
      rY("    makeSpaceForEdgeLabels", (() => function(YY) {
        let rY = YY.graph();
        rY.ranksep /= 2, YY.edges().forEach((DY => {
          var FY;
          let AY = YY.edge(DY);
          AY.minlen *= 2, "c" !== (null != (FY = AY.labelpos) ? FY : "r").toLowerCase() && ("TB" === rY.rankdir || "BT" === rY.rankdir ? AY.width += AY.labeloffset : AY.height += AY.labeloffset)
        }))
      }(YY))), rY("    removeSelfEdges", (() => function(YY) {
        YY.edges().forEach((rY => {
          if (rY.v === rY.w) {
            let DY = YY.node(rY.v);
            DY.selfEdges || (DY.selfEdges = []), DY.selfEdges.push({
              e: rY,
              label: YY.edge(rY)
            }), YY.removeEdge(rY)
          }
        }))
      }(YY))), rY("    acyclic", (() => ir(YY, OY))), rY("    nestingGraph.run", (() => Jr(YY))), rY("    rank", (() => fr(XY(YY)))), rY("    injectEdgeLabelProxies", (() => function(YY) {
        YY.edges().forEach((rY => {
          let DY = YY.edge(rY);
          if (DY.width && DY.height) {
            let DY = YY.node(rY.v),
              FY = {
                rank: (YY.node(rY.w).rank - DY.rank) / 2 + DY.rank,
                e: rY
              };
            bY(YY, "edge-proxy", FY, "_ep")
          }
        }))
      }(YY))), rY("    removeEmptyRanks", (() => function(YY) {
        let rY = YY.nodes().map((rY => YY.node(rY).rank)).filter((YY => void 0 !== YY)),
          DY = xY(Math.min, rY),
          FY = [];
        YY.nodes().forEach((rY => {
          let AY = YY.node(rY).rank - DY;
          FY[AY] || (FY[AY] = []), FY[AY].push(rY)
        }));
        let AY = 0,
          IY = YY.graph().nodeRankFactor;
        Array.from(FY).forEach(((rY, DY) => {
          void 0 === rY && DY % IY !== 0 ? --AY : void 0 !== rY && AY && rY.forEach((rY => YY.node(rY).rank += AY))
        }))
      }(YY))), rY("    nestingGraph.cleanup", (() => function(YY) {
        let rY = YY.graph();
        YY.removeNode(rY.nestingRoot), delete rY.nestingRoot, YY.edges().forEach((rY => {
          YY.edge(rY).nestingEdge && YY.removeEdge(rY)
        }))
      }(YY))), rY("    normalizeRanks", (() => function(YY) {
        let rY = YY.nodes().map((rY => {
            let DY = YY.node(rY).rank;
            return void 0 === DY ? Number.MAX_VALUE : DY
          })),
          DY = xY(Math.min, rY);
        YY.nodes().forEach((rY => {
          let FY = YY.node(rY);
          Object.hasOwn(FY, "rank") && (FY.rank -= DY)
        }))
      }(YY))), rY("    assignRankMinMax", (() => function(YY) {
        let rY = 0;
        YY.nodes().forEach((DY => {
          let FY = YY.node(DY);
          FY.borderTop && (FY.minRank = YY.node(FY.borderTop).rank, FY.maxRank = YY.node(FY.borderBottom).rank, rY = Math.max(rY, FY.maxRank))
        })), YY.graph().maxRank = rY
      }(YY))), rY("    removeEdgeLabelProxies", (() => function(YY) {
        YY.nodes().forEach((rY => {
          let DY = YY.node(rY);
          if ("edge-proxy" === DY.dummy) {
            let FY = DY;
            YY.edge(FY.e).labelRank = DY.rank, YY.removeNode(rY)
          }
        }))
      }(YY))), rY("    normalize.run", (() => yr(YY))), rY("    parentDummyChains", (() => dr(YY))), rY("    addBorderSegments", (() => wr(YY))), rY("    order", (() => DD(YY, DY, gY))), rY("    insertSelfEdges", (() => function(YY) {
        pY(YY).forEach((rY => {
          let DY = 0;
          rY.forEach(((rY, FY) => {
            let AY = YY.node(rY);
            "number" != typeof AY.rank && (AY.rank = 0), AY.order = FY + DY, (AY.selfEdges || []).forEach((rY => {
              bY(YY, "selfedge", {
                width: rY.label.width,
                height: rY.label.height,
                rank: AY.rank,
                order: FY + ++DY,
                e: rY.e,
                edgeLabel: rY.label
              }, "_se"), (!Array.isArray(rY.label.points) || 7 !== rY.label.points.length) && (rY.label.points = [{
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
            })), delete AY.selfEdges
          }))
        }))
      }(YY))), rY("    adjustCoordinateSystem", (() => function(YY) {
        var rY;
        let DY = null == (rY = YY.graph().rankdir) ? void 0 : rY.toLowerCase();
        ("lr" === DY || "rl" === DY) && qr(YY)
      }(YY))), rY("    position", (() => uD(YY, DY.corePath))), rY("    positionSelfEdges", (() => function(YY) {
        YY.nodes().forEach((rY => {
          let DY = YY.node(rY),
            FY = YY => "number" == typeof YY && isFinite(YY);
          if ("selfedge" === DY.dummy) {
            let AY = DY,
              IY = YY.node(AY.e.v),
              RY = FY(null == IY ? void 0 : IY.x) ? IY.x : 0,
              OY = FY(null == IY ? void 0 : IY.y) ? IY.y : 0,
              gY = FY(null == IY ? void 0 : IY.width) ? IY.width : 0,
              aY = FY(null == IY ? void 0 : IY.height) ? IY.height : 0,
              vY = FY(DY.x) ? DY.x : RY,
              uY = FY(DY.y) ? DY.y : OY,
              sY = gY / 2,
              iY = aY / 2;
            AY.edgeLabel.points = [{
              x: vY + sY,
              y: uY - iY
            }, {
              x: vY + sY,
              y: uY - iY
            }, {
              x: vY,
              y: uY
            }, {
              x: vY - sY,
              y: uY + iY
            }, {
              x: vY - sY,
              y: uY + iY
            }, {
              x: vY,
              y: uY
            }, {
              x: vY,
              y: uY
            }], AY.edgeLabel.x = vY, AY.edgeLabel.y = uY, YY.setEdge(AY.e, AY.edgeLabel), YY.removeNode(rY)
          } else DY && Array.isArray(DY.selfEdges) && DY.selfEdges.forEach((YY => {
            if (!Array.isArray(YY.label.points) || 7 !== YY.label.points.length) {
              let rY = FY(DY.x) ? DY.x : 0,
                AY = FY(DY.y) ? DY.y : 0,
                IY = (FY(DY.width) ? DY.width : 0) / 2,
                RY = (FY(DY.height) ? DY.height : 0) / 2;
              YY.label.points = [{
                x: rY + IY,
                y: AY - RY
              }, {
                x: rY + IY,
                y: AY - RY
              }, {
                x: rY,
                y: AY
              }, {
                x: rY - IY,
                y: AY + RY
              }, {
                x: rY - IY,
                y: AY + RY
              }, {
                x: rY,
                y: AY
              }, {
                x: rY,
                y: AY
              }]
            }
          }))
        }))
      }(YY)));
      let aY = JSON.parse(JSON.stringify(YY._nodes));
      return rY("    removeBorderNodes", (() => function(YY) {
        YY.nodes().forEach((rY => {
          if (YY.children(rY).length) {
            let DY = YY.node(rY),
              FY = YY.node(DY.borderTop),
              AY = YY.node(DY.borderBottom),
              IY = YY.node(DY.borderLeft[DY.borderLeft.length - 1]),
              RY = YY.node(DY.borderRight[DY.borderRight.length - 1]);
            DY.width = Math.abs(RY.x - IY.x), DY.height = Math.abs(AY.y - FY.y), DY.x = IY.x + DY.width / 2, DY.y = FY.y + DY.height / 2
          }
        })), YY.nodes().forEach((rY => {
          "border" === YY.node(rY).dummy && YY.removeNode(rY)
        }))
      }(YY))), rY("    normalize.undo", (() => function(YY) {
        YY.graph().dummyChains.forEach((rY => {
          let DY, FY = YY.node(rY),
            AY = FY.edgeLabel;
          for (YY.setEdge(FY.edgeObj, AY); FY.dummy;) DY = YY.successors(rY)[0], YY.removeNode(rY), AY.points.push({
            x: FY.x,
            y: FY.y
          }), "edge-label" === FY.dummy && (AY.x = FY.x, AY.y = FY.y, AY.width = FY.width, AY.height = FY.height), rY = DY, FY = YY.node(rY)
        }))
      }(YY))), rY("    fixupEdgeLabelCoords", (() => function(YY) {
        YY.edges().forEach((rY => {
          let DY = YY.edge(rY);
          if (Object.hasOwn(DY, "x")) switch (("l" === DY.labelpos || "r" === DY.labelpos) && (DY.width -= DY.labeloffset), DY.labelpos) {
            case "l":
              DY.x -= DY.width / 2 + DY.labeloffset;
              break;
            case "r":
              DY.x += DY.width / 2 + DY.labeloffset
          }
        }))
      }(YY))), rY("    undoCoordinateSystem", (() => Xr(YY))), rY("    translateGraph", (() => function(YY) {
        let rY = Number.POSITIVE_INFINITY,
          DY = 0,
          FY = Number.POSITIVE_INFINITY,
          AY = 0,
          IY = YY.graph(),
          RY = IY.marginx || 0,
          OY = IY.marginy || 0;

        function gY(YY) {
          let IY = YY.x,
            RY = YY.y,
            OY = YY.width,
            gY = YY.height;
          rY = Math.min(rY, IY - OY / 2), DY = Math.max(DY, IY + OY / 2), FY = Math.min(FY, RY - gY / 2), AY = Math.max(AY, RY + gY / 2)
        }
        YY.nodes().forEach((rY => gY(YY.node(rY)))), YY.edges().forEach((rY => {
          let DY = YY.edge(rY);
          Object.hasOwn(DY, "x") && gY(DY)
        })), rY -= RY, FY -= OY, YY.nodes().forEach((DY => {
          let AY = YY.node(DY);
          AY.x -= rY, AY.y -= FY
        })), YY.edges().forEach((DY => {
          let AY = YY.edge(DY);
          AY.points.forEach((YY => {
            YY.x -= rY, YY.y -= FY
          })), Object.hasOwn(AY, "x") && (AY.x -= rY), Object.hasOwn(AY, "y") && (AY.y -= FY)
        })), IY.width = DY - rY + RY, IY.height = AY - FY + OY
      }(YY))), rY("    assignNodeIntersects", (() => function(YY) {
        YY.edges().forEach((rY => {
          if (rY.v === rY.w) return;
          let DY, FY, AY = YY.edge(rY),
            IY = YY.node(rY.v),
            RY = YY.node(rY.w);
          AY.points ? (DY = AY.points[0], FY = AY.points[AY.points.length - 1]) : (AY.points = [], DY = RY, FY = IY), AY.points.unshift(qY(IY, DY)), AY.points.push(qY(RY, FY))
        }))
      }(YY))), rY("    reversePoints", (() => function(YY) {
        YY.edges().forEach((rY => {
          let DY = YY.edge(rY);
          DY.reversed && DY.points.reverse()
        }))
      }(YY))), rY("    acyclic.undo", (() => function(YY) {
        YY.edges().forEach((rY => {
          let DY = YY.edge(rY);
          if (DY.reversed) {
            YY.removeEdge(rY);
            let FY = DY.forwardName;
            delete DY.reversed, delete DY.forwardName, YY.setEdge(rY.w, rY.v, DY, FY)
          }
        }))
      }(YY))), {
        graph: YY,
        rawNodes: aY
      }
    }

    function WD(YY, rY) {
      YY.nodes().forEach((DY => {
        let FY = YY.node(DY),
          AY = rY.node(DY);
        FY && (FY.x = AY.x, FY.y = AY.y, FY.order = AY.order, FY.rank = AY.rank, rY.children(DY).length && (FY.width = AY.width, FY.height = AY.height))
      })), YY.edges().forEach((DY => {
        let FY = YY.edge(DY),
          AY = rY.edge(DY);
        FY.points = AY.points, Object.hasOwn(AY, "x") && (FY.x = AY.x, FY.y = AY.y)
      })), YY.graph().width = rY.graph().width, YY.graph().height = rY.graph().height
    }
    var ED = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      mD = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      VD = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      SD = ["width", "height", "rank"],
      lD = {
        width: 0,
        height: 0
      },
      TD = ["minlen", "weight", "width", "height", "labeloffset"],
      eD = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      ND = ["labelpos"];

    function BD(YY) {
      let rY = new wY({
          multigraph: !0,
          compound: !0
        }),
        DY = KD(YY.graph());
      return rY.setGraph(Object.assign({}, mD, cD(DY, ED), rr(DY, VD))), YY.nodes().forEach((DY => {
        let FY = cD(KD(YY.node(DY)), SD);
        Object.keys(lD).forEach((YY => {
          void 0 === FY[YY] && (FY[YY] = lD[YY])
        })), rY.setNode(DY, FY);
        let AY = YY.parent(DY);
        void 0 !== AY && rY.setParent(DY, AY)
      })), YY.edges().forEach((DY => {
        let FY = KD(YY.edge(DY));
        rY.setEdge(DY, Object.assign({}, eD, cD(FY, TD), rr(FY, ND)))
      })), rY
    }

    function cD(YY, rY) {
      return Dr(rr(YY, rY), Number)
    }

    function KD(YY) {
      let rY = {};
      return YY && Object.entries(YY).forEach((YY => {
        let [DY, FY] = YY;
        "string" == typeof DY && (DY = DY.toLowerCase()), rY[DY] = FY
      })), rY
    }

    function HD(YY) {
      let rY = pY(YY),
        DY = new wY({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return YY.nodes().forEach((rY => {
        DY.setNode(rY, {
          label: rY
        }), DY.setParent(rY, "layer" + YY.node(rY).rank)
      })), YY.edges().forEach((YY => DY.setEdge(YY.v, YY.w, {}, YY.name))), rY.forEach(((YY, rY) => {
        let FY = "layer" + rY;
        DY.setNode(FY, {
          rank: "same"
        }), YY.reduce(((YY, rY) => (DY.setEdge(YY, rY, {
          style: "invis"
        }), rY)))
      })), DY
    }
    var zD = {
        time: PY,
        notime: UY
      },
      ZD = {
        graphlib: IY,
        version: Ir,
        layout: iD,
        debug: HD,
        util: {
          time: PY,
          notime: UY
        }
      }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);