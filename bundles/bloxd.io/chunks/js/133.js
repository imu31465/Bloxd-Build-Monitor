/*! For license information please see pxmq3aq.133.2525b333.chunk.js.LICENSE.txt */
export const id = 133;
export const ids = [133];
export const modules = {
  6987: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      Graph: () => hV,
      debug: () => Gx,
      default: () => Rx,
      graphlib: () => UV,
      layout: () => rx,
      util: () => Wx,
      version: () => Ue
    });
    var JV = Object.defineProperty,
      YV = (VV, eV, xV) => ((VV, eV, xV) => eV in VV ? JV(VV, eV, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: xV
      }) : VV[eV] = xV)(VV, "symbol" != typeof eV ? eV + "" : eV, xV),
      UV = {};
    ((VV, eV) => {
      for (var xV in eV) JV(VV, xV, {
        get: eV[xV],
        enumerable: !0
      })
    })(UV, {
      Graph: () => hV,
      alg: () => BV
    });
    var yV = Object.defineProperty,
      pV = (VV, eV) => {
        for (var xV in eV) yV(VV, xV, {
          get: eV[xV],
          enumerable: !0
        })
      },
      QV = class {
        constructor(VV) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, VV && (this._isDirected = !("directed" in VV) || VV.directed, this._isMultigraph = "multigraph" in VV && VV.multigraph, this._isCompound = "compound" in VV && VV.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(VV) {
          return this._label = VV, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(VV) {
          return this._defaultNodeLabelFn = "function" != typeof VV ? () => VV : VV, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((VV => 0 === Object.keys(this._in[VV]).length))
        }
        sinks() {
          return this.nodes().filter((VV => 0 === Object.keys(this._out[VV]).length))
        }
        setNodes(VV, eV) {
          return VV.forEach((VV => {
            void 0 !== eV ? this.setNode(VV, eV) : this.setNode(VV)
          })), this
        }
        setNode(VV, eV) {
          return VV in this._nodes ? (arguments.length > 1 && (this._nodes[VV] = eV), this) : (this._nodes[VV] = arguments.length > 1 ? eV : this._defaultNodeLabelFn(VV), this._isCompound && (this._parent[VV] = "\0", this._children[VV] = {}, this._children["\0"][VV] = !0), this._in[VV] = {}, this._preds[VV] = {}, this._out[VV] = {}, this._sucs[VV] = {}, ++this._nodeCount, this)
        }
        node(VV) {
          return this._nodes[VV]
        }
        hasNode(VV) {
          return VV in this._nodes
        }
        removeNode(VV) {
          if (VV in this._nodes) {
            let eV = VV => this.removeEdge(this._edgeObjs[VV]);
            delete this._nodes[VV], this._isCompound && (this._removeFromParentsChildList(VV), delete this._parent[VV], this.children(VV).forEach((VV => {
              this.setParent(VV)
            })), delete this._children[VV]), Object.keys(this._in[VV]).forEach(eV), delete this._in[VV], delete this._preds[VV], Object.keys(this._out[VV]).forEach(eV), delete this._out[VV], delete this._sucs[VV], --this._nodeCount
          }
          return this
        }
        setParent(VV, eV) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === eV) eV = "\0";
          else {
            for (let xV = eV += ""; void 0 !== xV; xV = this.parent(xV))
              if (xV === VV) throw new Error("Setting " + eV + " as parent of " + VV + " would create a cycle");
            this.setNode(eV)
          }
          return this.setNode(VV), this._removeFromParentsChildList(VV), this._parent[VV] = eV, this._children[eV][VV] = !0, this
        }
        parent(VV) {
          if (this._isCompound) {
            let eV = this._parent[VV];
            if ("\0" !== eV) return eV
          }
        }
        children() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let eV = this._children[VV];
            if (eV) return Object.keys(eV)
          } else {
            if ("\0" === VV) return this.nodes();
            if (this.hasNode(VV)) return []
          }
          return []
        }
        predecessors(VV) {
          let eV = this._preds[VV];
          if (eV) return Object.keys(eV)
        }
        successors(VV) {
          let eV = this._sucs[VV];
          if (eV) return Object.keys(eV)
        }
        neighbors(VV) {
          let eV = this.predecessors(VV);
          if (eV) {
            let xV = new Set(eV),
              JV = this.successors(VV);
            if (JV)
              for (let VV of JV) xV.add(VV);
            return Array.from(xV.values())
          }
        }
        isLeaf(VV) {
          var eV;
          let xV;
          return xV = this.isDirected() ? this.successors(VV) : this.neighbors(VV), 0 === (null != (eV = null == xV ? void 0 : xV.length) ? eV : 0)
        }
        filterNodes(VV) {
          let eV = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          eV.setGraph(this.graph()), Object.entries(this._nodes).forEach((xV => {
            let [JV, YV] = xV;
            VV(JV) && eV.setNode(JV, YV)
          })), Object.values(this._edgeObjs).forEach((VV => {
            eV.hasNode(VV.v) && eV.hasNode(VV.w) && eV.setEdge(VV, this.edge(VV))
          }));
          let xV = {},
            JV = VV => {
              let YV = this.parent(VV);
              return !YV || eV.hasNode(YV) ? (xV[VV] = YV, YV) : YV in xV ? xV[YV] : JV(YV)
            };
          return this._isCompound && eV.nodes().forEach((VV => eV.setParent(VV, JV(VV)))), eV
        }
        setDefaultEdgeLabel(VV) {
          return this._defaultEdgeLabelFn = "function" != typeof VV ? () => VV : VV, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(VV, eV) {
          return VV.reduce(((VV, xV) => (void 0 !== eV ? this.setEdge(VV, xV, eV) : this.setEdge(VV, xV), xV))), this
        }
        setEdge(VV, eV, xV, JV) {
          let YV, UV, yV, pV, QV = !1;
          "object" == typeof VV && null !== VV && "v" in VV ? (YV = VV.v, UV = VV.w, yV = VV.name, 2 === arguments.length && (pV = eV, QV = !0)) : (YV = VV, UV = eV, yV = JV, arguments.length > 2 && (pV = xV, QV = !0)), YV = "" + YV, UV = "" + UV, void 0 !== yV && (yV = "" + yV);
          let wV = ZV(this._isDirected, YV, UV, yV);
          if (wV in this._edgeLabels) return QV && (this._edgeLabels[wV] = pV), this;
          if (void 0 !== yV && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(YV), this.setNode(UV), this._edgeLabels[wV] = QV ? pV : this._defaultEdgeLabelFn(YV, UV, yV);
          let vV = function(VV, eV, xV, JV) {
            let YV = "" + eV,
              UV = "" + xV;
            if (!VV && YV > UV) {
              let VV = YV;
              YV = UV, UV = VV
            }
            let yV = {
              v: YV,
              w: UV
            };
            return JV && (yV.name = JV), yV
          }(this._isDirected, YV, UV, yV);
          return YV = vV.v, UV = vV.w, Object.freeze(vV), this._edgeObjs[wV] = vV, nV(this._preds[UV], YV), nV(this._sucs[YV], UV), this._in[UV][wV] = vV, this._out[YV][wV] = vV, this._edgeCount++, this
        }
        edge(VV, eV, xV) {
          let JV = 1 === arguments.length ? vV(this._isDirected, VV) : ZV(this._isDirected, VV, eV, xV);
          return this._edgeLabels[JV]
        }
        edgeAsObj(VV, eV, xV) {
          let JV = 1 === arguments.length ? this.edge(VV) : this.edge(VV, eV, xV);
          return "object" != typeof JV || null === JV ? {
            label: JV
          } : JV
        }
        hasEdge(VV, eV, xV) {
          return (1 === arguments.length ? vV(this._isDirected, VV) : ZV(this._isDirected, VV, eV, xV)) in this._edgeLabels
        }
        removeEdge(VV, eV, xV) {
          let JV = 1 === arguments.length ? vV(this._isDirected, VV) : ZV(this._isDirected, VV, eV, xV),
            YV = this._edgeObjs[JV];
          if (YV) {
            let VV = YV.v,
              eV = YV.w;
            delete this._edgeLabels[JV], delete this._edgeObjs[JV], wV(this._preds[eV], VV), wV(this._sucs[VV], eV), delete this._in[eV][JV], delete this._out[VV][JV], this._edgeCount--
          }
          return this
        }
        inEdges(VV, eV) {
          return this.isDirected() ? this.filterEdges(this._in[VV], VV, eV) : this.nodeEdges(VV, eV)
        }
        outEdges(VV, eV) {
          return this.isDirected() ? this.filterEdges(this._out[VV], VV, eV) : this.nodeEdges(VV, eV)
        }
        nodeEdges(VV, eV) {
          if (VV in this._nodes) return this.filterEdges({
            ...this._in[VV],
            ...this._out[VV]
          }, VV, eV)
        }
        _removeFromParentsChildList(VV) {
          delete this._children[this._parent[VV]][VV]
        }
        filterEdges(VV, eV, xV) {
          if (!VV) return;
          let JV = Object.values(VV);
          return xV ? JV.filter((VV => VV.v === eV && VV.w === xV || VV.v === xV && VV.w === eV)) : JV
        }
      };

    function nV(VV, eV) {
      VV[eV] ? VV[eV]++ : VV[eV] = 1
    }

    function wV(VV, eV) {
      void 0 !== VV[eV] && !--VV[eV] && delete VV[eV]
    }

    function ZV(VV, eV, xV, JV) {
      let YV = "" + eV,
        UV = "" + xV;
      if (!VV && YV > UV) {
        let VV = YV;
        YV = UV, UV = VV
      }
      return YV + "\x01" + UV + "\x01" + (void 0 === JV ? "\0" : JV)
    }

    function vV(VV, eV) {
      return ZV(VV, eV.v, eV.w, eV.name)
    }

    function rV(VV) {
      let eV = {
          options: {
            directed: VV.isDirected(),
            multigraph: VV.isMultigraph(),
            compound: VV.isCompound()
          },
          nodes: kV(VV),
          edges: bV(VV)
        },
        xV = VV.graph();
      return void 0 !== xV && (eV.value = structuredClone(xV)), eV
    }

    function kV(VV) {
      return VV.nodes().map((eV => {
        let xV = VV.node(eV),
          JV = VV.parent(eV),
          YV = {
            v: eV
          };
        return void 0 !== xV && (YV.value = xV), void 0 !== JV && (YV.parent = JV), YV
      }))
    }

    function bV(VV) {
      return VV.edges().map((eV => {
        let xV = VV.edge(eV),
          JV = {
            v: eV.v,
            w: eV.w
          };
        return void 0 !== eV.name && (JV.name = eV.name), void 0 !== xV && (JV.value = xV), JV
      }))
    }

    function EV(VV) {
      let eV = new QV(VV.options);
      return void 0 !== VV.value && eV.setGraph(VV.value), VV.nodes.forEach((VV => {
        eV.setNode(VV.v, VV.value), VV.parent && eV.setParent(VV.v, VV.parent)
      })), VV.edges.forEach((VV => {
        eV.setEdge({
          v: VV.v,
          w: VV.w,
          name: VV.name
        }, VV.value)
      })), eV
    }
    pV({}, {
      read: () => EV,
      write: () => rV
    });
    var BV = {};
    pV(BV, {
      CycleException: () => GV,
      bellmanFord: () => qV,
      components: () => tV,
      dijkstra: () => PV,
      dijkstraAll: () => AV,
      findCycles: () => XV,
      floydWarshall: () => zV,
      isAcyclic: () => RV,
      postorder: () => CV,
      preorder: () => aV,
      prim: () => oV,
      shortestPaths: () => cV,
      tarjan: () => NV,
      topsort: () => WV
    });
    var jV = () => 1;

    function qV(VV, eV, xV, JV) {
      return function(VV, eV, xV, JV) {
        let YV, UV = {},
          yV = 0,
          pV = VV.nodes(),
          QV = function(VV) {
            let eV = UV[VV.v],
              JV = UV[VV.w];
            if (!eV || !JV) return;
            let yV = xV(VV);
            eV.distance + yV < JV.distance && (UV[VV.w] = {
              distance: eV.distance + yV,
              predecessor: VV.v
            }, YV = !0)
          },
          nV = function() {
            pV.forEach((function(VV) {
              JV(VV).forEach((function(eV) {
                let xV = eV.v === VV ? eV.v : eV.w,
                  JV = xV === eV.v ? eV.w : eV.v;
                QV({
                  v: xV,
                  w: JV
                })
              }))
            }))
          };
        pV.forEach((function(VV) {
          let xV = VV === eV ? 0 : Number.POSITIVE_INFINITY;
          UV[VV] = {
            distance: xV,
            predecessor: ""
          }
        }));
        let wV = pV.length;
        for (let ZV = 1; ZV < wV && (YV = !1, yV++, nV(), YV); ZV++);
        if (yV === wV - 1 && (YV = !1, nV(), YV)) throw new Error("The graph contains a negative weight cycle");
        return UV
      }(VV, String(eV), xV || jV, JV || function(eV) {
        var xV;
        return null != (xV = VV.outEdges(eV)) ? xV : []
      })
    }

    function tV(VV) {
      let eV, xV = {},
        JV = [];

      function YV(JV) {
        var UV, yV;
        JV in xV || (xV[JV] = !0, eV.push(JV), null == (UV = VV.successors(JV)) || UV.forEach(YV), null == (yV = VV.predecessors(JV)) || yV.forEach(YV))
      }
      return VV.nodes().forEach((function(VV) {
        eV = [], YV(VV), eV.length && JV.push(eV)
      })), JV
    }
    var FV = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((VV => VV.key))
        }
        has(VV) {
          return VV in this._keyIndices
        }
        priority(VV) {
          let eV = this._keyIndices[VV];
          if (void 0 !== eV) return this._arr[eV].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(VV, eV) {
          let xV = this._keyIndices,
            JV = String(VV);
          if (!(JV in xV)) {
            let VV = this._arr,
              YV = VV.length;
            return xV[JV] = YV, VV.push({
              key: JV,
              priority: eV
            }), this._decrease(YV), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let VV = this._arr.pop();
          return delete this._keyIndices[VV.key], this._heapify(0), VV.key
        }
        decrease(VV, eV) {
          let xV = this._keyIndices[VV];
          if (void 0 === xV) throw new Error(`Key not found: ${VV}`);
          let JV = this._arr[xV].priority;
          if (eV > JV) throw new Error(`New priority is greater than current priority. Key: ${VV} Old: ${JV} New: ${eV}`);
          this._arr[xV].priority = eV, this._decrease(xV)
        }
        _heapify(VV) {
          let eV = this._arr,
            xV = 2 * VV,
            JV = xV + 1,
            YV = VV;
          xV < eV.length && (YV = eV[xV].priority < eV[YV].priority ? xV : YV, JV < eV.length && (YV = eV[JV].priority < eV[YV].priority ? JV : YV), YV !== VV && (this._swap(VV, YV), this._heapify(YV)))
        }
        _decrease(VV) {
          let eV, xV = this._arr,
            JV = xV[VV].priority;
          for (; 0 !== VV && (eV = VV >> 1, !(xV[eV].priority < JV));) this._swap(VV, eV), VV = eV
        }
        _swap(VV, eV) {
          let xV = this._arr,
            JV = this._keyIndices,
            YV = xV[VV],
            UV = xV[eV];
          xV[VV] = UV, xV[eV] = YV, JV[UV.key] = VV, JV[YV.key] = eV
        }
      },
      TV = () => 1;

    function PV(VV, eV, xV, JV) {
      return function(VV, eV, xV, JV) {
        let YV, UV, yV = {},
          pV = new FV,
          QV = function(VV) {
            let eV = VV.v !== YV ? VV.v : VV.w,
              JV = yV[eV];
            if (!JV) return;
            let QV = xV(VV),
              nV = UV.distance + QV;
            if (QV < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + VV + " Weight: " + QV);
            nV < JV.distance && (JV.distance = nV, JV.predecessor = YV, pV.decrease(eV, nV))
          };
        for (VV.nodes().forEach((function(VV) {
            let xV = VV === eV ? 0 : Number.POSITIVE_INFINITY;
            yV[VV] = {
              distance: xV,
              predecessor: ""
            }, pV.add(VV, xV)
          })); pV.size() > 0;) {
          YV = pV.removeMin();
          let VV = yV[YV];
          if (!VV || VV.distance === Number.POSITIVE_INFINITY) break;
          UV = VV, JV(YV).forEach(QV)
        }
        return yV
      }(VV, String(eV), xV || TV, JV || function(eV) {
        var xV;
        return null != (xV = VV.outEdges(eV)) ? xV : []
      })
    }

    function AV(VV, eV, xV) {
      return VV.nodes().reduce((function(JV, YV) {
        return JV[YV] = PV(VV, YV, eV, xV), JV
      }), {})
    }

    function NV(VV) {
      let eV = 0,
        xV = [],
        JV = {},
        YV = [];

      function UV(yV) {
        var pV;
        let QV = JV[yV] = {
          onStack: !0,
          lowlink: eV,
          index: eV++
        };
        if (xV.push(yV), null == (pV = VV.successors(yV)) || pV.forEach((function(VV) {
            if (VV in JV) {
              let eV = JV[VV];
              null != eV && eV.onStack && (QV.lowlink = Math.min(QV.lowlink, eV.index))
            } else {
              UV(VV);
              let eV = JV[VV];
              eV && (QV.lowlink = Math.min(QV.lowlink, eV.lowlink))
            }
          })), QV.lowlink === QV.index) {
          let VV, eV = [];
          do {
            VV = xV.pop();
            let YV = JV[VV];
            YV && (YV.onStack = !1), eV.push(VV)
          } while (yV !== VV);
          YV.push(eV)
        }
      }
      return VV.nodes().forEach((function(VV) {
        VV in JV || UV(VV)
      })), YV
    }

    function XV(VV) {
      return NV(VV).filter((function(eV) {
        var xV;
        let JV = eV[0];
        return !!JV && (eV.length > 1 || 1 === eV.length && (null != (xV = VV.outEdges(JV, JV)) ? xV : []).length > 0)
      }))
    }
    var MV = () => 1;

    function zV(VV, eV, xV) {
      return function(VV, eV, xV) {
        let JV = {},
          YV = VV.nodes();
        return YV.forEach((function(VV) {
          let UV = {};
          JV[VV] = UV, UV[VV] = {
            distance: 0,
            predecessor: ""
          }, YV.forEach((function(eV) {
            VV !== eV && (UV[eV] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), xV(VV).forEach((function(xV) {
            let JV = xV.v === VV ? xV.w : xV.v,
              YV = eV(xV);
            UV[JV] = {
              distance: YV,
              predecessor: VV
            }
          }))
        })), YV.forEach((function(VV) {
          let eV = JV[VV];
          eV && YV.forEach((function(xV) {
            let UV = JV[xV];
            UV && YV.forEach((function(xV) {
              let JV = UV[VV],
                YV = eV[xV],
                yV = UV[xV];
              if (JV && YV && yV) {
                let VV = JV.distance + YV.distance;
                VV < yV.distance && (yV.distance = VV, yV.predecessor = YV.predecessor)
              }
            }))
          }))
        })), JV
      }(VV, eV || MV, xV || function(eV) {
        var xV;
        return null != (xV = VV.outEdges(eV)) ? xV : []
      })
    }
    var GV = class extends Error {
      constructor(VV) {
        super(VV), this.name = "CycleException"
      }
    };

    function WV(VV) {
      let eV = {},
        xV = {},
        JV = [];
      if (VV.sinks().forEach((function YV(UV) {
          var yV;
          if (UV in xV) throw new GV;
          UV in eV || (xV[UV] = !0, eV[UV] = !0, null == (yV = VV.predecessors(UV)) || yV.forEach(YV), delete xV[UV], JV.push(UV))
        })), Object.keys(eV).length !== VV.nodeCount()) throw new GV;
      return JV
    }

    function RV(VV) {
      try {
        WV(VV)
      } catch (eV) {
        if (eV instanceof GV) return !1;
        throw eV
      }
      return !0
    }

    function gV(VV, eV, xV, JV, YV) {
      Array.isArray(eV) || (eV = [eV]);
      let UV = eV => {
          var xV;
          return null != (xV = VV.isDirected() ? VV.successors(eV) : VV.neighbors(eV)) ? xV : []
        },
        yV = {};
      return eV.forEach((function(eV) {
        if (!VV.hasNode(eV)) throw new Error("Graph does not have node: " + eV);
        YV = DV(VV, eV, "post" === xV, yV, UV, JV, YV)
      })), YV
    }

    function DV(VV, eV, xV, JV, YV, UV, yV) {
      return eV in JV || (JV[eV] = !0, xV || (yV = UV(yV, eV)), YV(eV).forEach((function(eV) {
        yV = DV(VV, eV, xV, JV, YV, UV, yV)
      })), xV && (yV = UV(yV, eV))), yV
    }

    function iV(VV, eV, xV) {
      return gV(VV, eV, xV, (function(VV, eV) {
        return VV.push(eV), VV
      }), [])
    }

    function CV(VV, eV) {
      return iV(VV, eV, "post")
    }

    function aV(VV, eV) {
      return iV(VV, eV, "pre")
    }

    function oV(VV, eV) {
      var xV;
      let JV, YV = new QV,
        UV = {},
        yV = new FV;

      function pV(VV) {
        let xV = VV.v === JV ? VV.w : VV.v,
          YV = yV.priority(xV);
        if (void 0 !== YV) {
          let pV = eV(VV);
          pV < YV && (UV[xV] = JV, yV.decrease(xV, pV))
        }
      }
      if (0 === VV.nodeCount()) return YV;
      VV.nodes().forEach((function(VV) {
        yV.add(VV, Number.POSITIVE_INFINITY), YV.setNode(VV)
      }));
      let nV = VV.nodes()[0];
      void 0 !== nV && yV.decrease(nV, 0);
      let wV = !1;
      for (; yV.size() > 0;) {
        if (JV = yV.removeMin(), JV in UV) YV.setEdge(JV, UV[JV]);
        else {
          if (wV) throw new Error("Input graph is not connected: " + VV);
          wV = !0
        }
        null == (xV = VV.nodeEdges(JV)) || xV.forEach(pV)
      }
      return YV
    }

    function cV(VV, eV, xV, JV) {
      return function(VV, eV, xV, JV) {
        if (void 0 === xV) return PV(VV, eV, xV, JV);
        let YV = !1,
          UV = VV.nodes();
        for (let yV = 0; yV < UV.length; yV++) {
          let pV = UV[yV];
          if (void 0 === pV) continue;
          let QV = JV(pV);
          for (let VV = 0; VV < QV.length; VV++) {
            let eV = QV[VV];
            if (!eV) continue;
            let JV = eV.v === pV ? eV.v : eV.w;
            xV({
              v: JV,
              w: JV === eV.v ? eV.w : eV.v
            }) < 0 && (YV = !0)
          }
          if (YV) return qV(VV, eV, xV, JV)
        }
        return PV(VV, eV, xV, JV)
      }(VV, eV, xV, null != JV ? JV : eV => {
        var xV;
        return null != (xV = VV.outEdges(eV)) ? xV : []
      })
    }
    var hV = QV;

    function lV(VV, eV, xV, JV) {
      let YV = JV;
      for (; VV.hasNode(YV);) YV = OV(JV);
      return xV.dummy = eV, VV.setNode(YV, xV), YV
    }

    function LV(VV) {
      let eV = new hV({
        multigraph: VV.isMultigraph()
      }).setGraph(VV.graph());
      return VV.nodes().forEach((xV => {
        VV.children(xV).length || eV.setNode(xV, VV.node(xV))
      })), VV.edges().forEach((xV => {
        eV.setEdge(xV, VV.edge(xV))
      })), eV
    }

    function fV(VV, eV) {
      let xV, JV, YV = VV.x,
        UV = VV.y,
        yV = eV.x - YV,
        pV = eV.y - UV,
        QV = VV.width / 2,
        nV = VV.height / 2;
      if (!yV && !pV) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(pV) * QV > Math.abs(yV) * nV ? (pV < 0 && (nV = -nV), xV = nV * yV / pV, JV = nV) : (yV < 0 && (QV = -QV), xV = QV, JV = QV * pV / yV), {
        x: YV + xV,
        y: UV + JV
      }
    }

    function mV(VV) {
      let eV = Ve(sV(VV) + 1).map((() => []));
      return VV.nodes().forEach((xV => {
        let JV = VV.node(xV),
          YV = JV.rank;
        void 0 !== YV && (eV[YV] || (eV[YV] = []), eV[YV][JV.order] = xV)
      })), eV
    }

    function KV(VV, eV, xV, JV) {
      let YV = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (YV.rank = xV, YV.order = JV), lV(VV, "border", YV, eV)
    }
    var HV = 65535;

    function uV(VV, eV) {
      if (eV.length > HV) {
        let xV = function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HV,
            xV = [];
          for (let JV = 0; JV < VV.length; JV += eV) {
            let YV = VV.slice(JV, JV + eV);
            xV.push(YV)
          }
          return xV
        }(eV);
        return VV(...xV.map((eV => VV(...eV))))
      }
      return VV(...eV)
    }

    function sV(VV) {
      let eV = VV.nodes().map((eV => {
        let xV = VV.node(eV).rank;
        return void 0 === xV ? Number.MIN_VALUE : xV
      }));
      return uV(Math.max, eV)
    }

    function SV(VV, eV) {
      let xV = Date.now();
      try {
        return eV()
      } finally {
        console.log(VV + " time: " + (Date.now() - xV) + "ms")
      }
    }

    function IV(VV, eV) {
      return eV()
    }
    var dV = 0;

    function OV(VV) {
      return VV + "" + ++dV
    }

    function Ve(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == eV && (eV = VV, VV = 0);
      let JV = VV => VV < eV;
      xV < 0 && (JV = VV => eV < VV);
      let YV = [];
      for (let UV = VV; JV(UV); UV += xV) YV.push(UV);
      return YV
    }

    function ee(VV, eV) {
      let xV = {};
      for (let JV of eV) void 0 !== VV[JV] && (xV[JV] = VV[JV]);
      return xV
    }

    function xe(VV, eV) {
      let xV;
      return xV = "string" == typeof eV ? VV => VV[eV] : eV, Object.entries(VV).reduce(((VV, eV) => {
        let [JV, YV] = eV;
        return VV[JV] = xV(YV, JV), VV
      }), {})
    }
    var Je = "\0";

    function Ye(VV, eV, xV) {
      var JV, YV, UV, yV, pV, QV;
      if (!(VV && eV && xV && "edge" === eV.dummy && "edge" === xV.dummy && eV.edgeObj && xV.edgeObj && VV[eV.edgeObj.v] && VV[xV.edgeObj.v] && VV[eV.edgeObj.w] && VV[xV.edgeObj.w])) return 0;
      let nV = !0;
      eV.edgeObj.w === xV.edgeObj.w && (nV = !1);
      let wV = nV ? null != (YV = null == (JV = VV[eV.edgeObj.v]) ? void 0 : JV.rank) ? YV : NaN : null != (yV = null == (UV = VV[eV.edgeObj.w]) ? void 0 : UV.rank) ? yV : NaN,
        ZV = Object.entries(VV).find((VV => {
          var xV, JV;
          return (null == (xV = VV[1].edgeObj) ? void 0 : xV.v) === eV.edgeObj.v && (null == (JV = VV[1].edgeObj) ? void 0 : JV.w) === eV.edgeObj.w && VV[1].rank === wV
        })),
        vV = Object.entries(VV).find((VV => {
          var eV, JV;
          return (null == (eV = VV[1].edgeObj) ? void 0 : eV.v) === xV.edgeObj.v && (null == (JV = VV[1].edgeObj) ? void 0 : JV.w) === xV.edgeObj.w && VV[1].rank === wV
        }));
      if (!ZV || !vV) return 0;
      let rV = null != (pV = ZV[1].order) ? pV : NaN,
        kV = null != (QV = vV[1].order) ? QV : NaN;
      return isNaN(rV - kV) ? 0 : rV - kV
    }
    var Ue = "3.1.1";

    function ye(VV) {
      VV._prev._next = VV._next, VV._next._prev = VV._prev, delete VV._next, delete VV._prev
    }

    function pe(VV, eV) {
      if ("_next" !== VV && "_prev" !== VV) return eV
    }
    var Qe = class {
        constructor() {
          YV(this, "_sentinel");
          let VV = {};
          VV._next = VV._prev = VV, this._sentinel = VV
        }
        dequeue() {
          let VV = this._sentinel,
            eV = VV._prev;
          if (eV !== VV) return ye(eV), eV
        }
        enqueue(VV) {
          let eV = this._sentinel;
          VV._prev && VV._next && ye(VV), VV._next = eV._next, eV._next._prev = VV, eV._next = VV, VV._prev = eV
        }
        toString() {
          let VV = [],
            eV = this._sentinel,
            xV = eV._prev;
          for (; xV !== eV;) VV.push(JSON.stringify(xV, pe)), xV = xV._prev;
          return "[" + VV.join(", ") + "]"
        }
      },
      ne = () => 1;

    function we(VV, eV) {
      if (VV.nodeCount() <= 1) return [];
      let xV = function(VV, eV) {
        let xV = new hV,
          JV = 0,
          YV = 0;
        VV.nodes().forEach((VV => {
          xV.setNode(VV, {
            v: VV,
            in: 0,
            out: 0
          })
        })), VV.edges().forEach((VV => {
          let UV = xV.edge(VV.v, VV.w) || 0,
            yV = eV(VV),
            pV = UV + yV;
          xV.setEdge(VV.v, VV.w, pV);
          let QV = xV.node(VV.v),
            nV = xV.node(VV.w);
          YV = Math.max(YV, QV.out += yV), JV = Math.max(JV, nV.in += yV)
        }));
        let UV = function(VV) {
            let eV = [];
            for (let xV = 0; xV < VV; xV++) eV.push(xV);
            return eV
          }(YV + JV + 3).map((() => new Qe)),
          yV = JV + 1;
        return xV.nodes().forEach((VV => {
          ve(UV, yV, xV.node(VV))
        })), {
          graph: xV,
          buckets: UV,
          zeroIdx: yV
        }
      }(VV, eV || ne);
      return function(VV, eV, xV) {
        var JV;
        let YV, UV = [],
          yV = eV[eV.length - 1],
          pV = eV[0];
        for (; VV.nodeCount();) {
          for (; YV = pV.dequeue();) Ze(VV, eV, xV, YV);
          for (; YV = yV.dequeue();) Ze(VV, eV, xV, YV);
          if (VV.nodeCount())
            for (let yV = eV.length - 2; yV > 0; --yV)
              if (YV = null == (JV = eV[yV]) ? void 0 : JV.dequeue(), YV) {
                UV = UV.concat(Ze(VV, eV, xV, YV, !0) || []);
                break
              }
        }
        return UV
      }(xV.graph, xV.buckets, xV.zeroIdx).flatMap((eV => VV.outEdges(eV.v, eV.w) || []))
    }

    function Ze(VV, eV, xV, JV, YV) {
      let UV = [],
        yV = YV ? UV : void 0;
      return (VV.inEdges(JV.v) || []).forEach((JV => {
        let yV = VV.edge(JV),
          pV = VV.node(JV.v);
        YV && UV.push({
          v: JV.v,
          w: JV.w
        }), pV.out -= yV, ve(eV, xV, pV)
      })), (VV.outEdges(JV.v) || []).forEach((JV => {
        let YV = VV.edge(JV),
          UV = JV.w,
          yV = VV.node(UV);
        yV.in -= YV, ve(eV, xV, yV)
      })), VV.removeNode(JV.v), yV
    }

    function ve(VV, eV, xV) {
      var JV, YV, UV;
      xV.out ? xV.in ? null == (UV = VV[xV.out - xV.in + eV]) || UV.enqueue(xV) : null == (YV = VV[VV.length - 1]) || YV.enqueue(xV) : null == (JV = VV[0]) || JV.enqueue(xV)
    }

    function re(VV, eV) {
      var xV;
      ("greedy" === VV.graph().acyclicer ? we(VV, (xV = VV, VV => xV.edge(VV).weight)) : function(VV, eV) {
        let xV = [],
          JV = {},
          YV = {};

        function UV(eV) {
          Object.hasOwn(YV, eV) || (YV[eV] = !0, JV[eV] = !0, VV.outEdges(eV).forEach((VV => {
            Object.hasOwn(JV, VV.w) ? xV.push(VV) : UV(VV.w)
          })), delete JV[eV])
        }

        function yV(UV) {
          var pV;
          Object.hasOwn(YV, UV) || (YV[UV] = !0, JV[UV] = !0, null == (pV = VV.outEdges(UV)) || pV.forEach((YV => {
            var pV, QV;
            Object.hasOwn(JV, YV.w) || (null == (pV = eV.node(UV)) ? void 0 : pV.rank) > (null == (QV = eV.node(YV.w)) ? void 0 : QV.rank) && function(VV, eV, xV) {
              let JV = new Set;

              function YV(eV) {
                var UV;
                if (VV.sources().includes(eV)) return !0;
                JV.add(eV);
                for (let yV of null != (UV = VV.inEdges(eV)) ? UV : [])
                  if ((yV.v !== xV.v || yV.w !== xV.w) && !JV.has(yV.v) && YV(yV.v)) return !0;
                return !1
              }
              return YV(eV)
            }(VV, YV.w, YV) ? xV.push(YV) : yV(YV.w)
          })), delete JV[UV])
        }
        let pV = UV;
        return eV && "function" == typeof eV.node && (pV = yV), VV.sources().forEach(pV), VV.nodes().forEach(pV), xV
      }(VV, null != eV ? eV : null)).forEach((eV => {
        let xV = VV.edge(eV);
        VV.removeEdge(eV), xV.forwardName = eV.name, xV.reversed = !0, VV.setEdge(eV.w, eV.v, xV, OV("rev"))
      }))
    }

    function ke(VV) {
      VV.graph().dummyChains = [], VV.edges().forEach((eV => function(VV, eV) {
        let xV, JV, YV, UV = eV.v,
          yV = VV.node(UV).rank,
          pV = eV.w,
          QV = VV.node(pV).rank,
          nV = eV.name,
          wV = VV.edge(eV),
          ZV = wV.labelRank;
        if (QV === yV + 1) return;
        for (VV.removeEdge(eV), YV = 0, ++yV; yV < QV; ++YV, ++yV) wV.points = [], JV = {
          width: 0,
          height: 0,
          edgeLabel: wV,
          edgeObj: eV,
          rank: yV
        }, xV = lV(VV, "edge", JV, "_d"), yV === ZV && (JV.width = wV.width, JV.height = wV.height, JV.dummy = "edge-label", JV.labelpos = wV.labelpos), VV.setEdge(UV, xV, {
          weight: wV.weight
        }, nV), 0 === YV && VV.graph().dummyChains.push(xV), UV = xV;
        VV.setEdge(UV, pV, {
          weight: wV.weight
        }, nV)
      }(VV, eV)))
    }

    function be(VV) {
      let eV = {};
      VV.sources().forEach((function xV(JV) {
        let YV = VV.node(JV);
        if (Object.hasOwn(eV, JV)) return YV.rank;
        eV[JV] = !0;
        let UV = VV.outEdges(JV),
          yV = UV ? UV.map((eV => null == eV ? Number.POSITIVE_INFINITY : xV(eV.w) - VV.edge(eV).minlen)) : [],
          pV = uV(Math.min, yV);
        return pV === Number.POSITIVE_INFINITY && (pV = 0), YV.rank = pV
      }))
    }

    function Ee(VV, eV) {
      return VV.node(eV.w).rank - VV.node(eV.v).rank - VV.edge(eV).minlen
    }
    var Be = function(VV) {
      let eV = new hV({
          directed: !1
        }),
        xV = VV.nodes();
      if (0 === xV.length) throw new Error("Graph must have at least one node");
      let JV, YV, UV = xV[0],
        yV = VV.nodeCount();
      for (eV.setNode(UV, {}); je(eV, VV) < yV && (JV = qe(eV, VV), JV);) YV = eV.hasNode(JV.v) ? Ee(VV, JV) : -Ee(VV, JV), te(eV, VV, YV);
      return eV
    };

    function je(VV, eV) {
      return VV.nodes().forEach((function xV(JV) {
        let YV = eV.nodeEdges(JV);
        YV && YV.forEach((YV => {
          let UV = YV.v,
            yV = JV === UV ? YV.w : UV;
          !VV.hasNode(yV) && !Ee(eV, YV) && (VV.setNode(yV, {}), VV.setEdge(JV, yV, {}), xV(yV))
        }))
      })), VV.nodeCount()
    }

    function qe(VV, eV) {
      return eV.edges().reduce(((xV, JV) => {
        let YV = Number.POSITIVE_INFINITY;
        return VV.hasNode(JV.v) !== VV.hasNode(JV.w) && (YV = Ee(eV, JV)), YV < xV[0] ? [YV, JV] : xV
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function te(VV, eV, xV) {
      VV.nodes().forEach((VV => eV.node(VV).rank += xV))
    }
    var {
      preorder: Fe,
      postorder: Te
    } = BV, Pe = Ae;

    function Ae(VV) {
      VV = function(VV) {
        let eV = (new hV).setGraph(VV.graph());
        return VV.nodes().forEach((xV => eV.setNode(xV, VV.node(xV)))), VV.edges().forEach((xV => {
          let JV = eV.edge(xV.v, xV.w) || {
              weight: 0,
              minlen: 1
            },
            YV = VV.edge(xV);
          eV.setEdge(xV.v, xV.w, {
            weight: JV.weight + YV.weight,
            minlen: Math.max(JV.minlen, YV.minlen)
          })
        })), eV
      }(VV), be(VV);
      let eV, xV, JV = Be(VV);
      for (Me(JV), Ne(JV, VV); eV = Ge(JV);) xV = We(JV, VV, eV), Re(JV, VV, eV, xV)
    }

    function Ne(VV, eV) {
      let xV = Te(VV, VV.nodes());
      xV = xV.slice(0, xV.length - 1), xV.forEach((xV => function(VV, eV, xV) {
        let JV = VV.node(xV).parent,
          YV = VV.edge(xV, JV);
        YV.cutvalue = Xe(VV, eV, xV)
      }(VV, eV, xV)))
    }

    function Xe(VV, eV, xV) {
      let JV = VV.node(xV).parent,
        YV = !0,
        UV = eV.edge(xV, JV),
        yV = 0;
      UV || (YV = !1, UV = eV.edge(JV, xV)), yV = UV.weight;
      let pV = eV.nodeEdges(xV);
      return pV && pV.forEach((UV => {
        let pV = UV.v === xV,
          QV = pV ? UV.w : UV.v;
        if (QV !== JV) {
          let JV = pV === YV,
            nV = eV.edge(UV).weight;
          if (yV += JV ? nV : -nV, function(VV, eV, xV) {
              return VV.hasEdge(eV, xV)
            }(VV, xV, QV)) {
            let eV = VV.edge(xV, QV).cutvalue;
            yV += JV ? -eV : eV
          }
        }
      })), yV
    }

    function Me(VV, eV) {
      arguments.length < 2 && (eV = VV.nodes()[0]), ze(VV, {}, 1, eV)
    }

    function ze(VV, eV, xV, JV, YV) {
      let UV = xV,
        yV = VV.node(JV);
      eV[JV] = !0;
      let pV = VV.neighbors(JV);
      return pV && pV.forEach((YV => {
        Object.hasOwn(eV, YV) || (xV = ze(VV, eV, xV, YV, JV))
      })), yV.low = UV, yV.lim = xV++, YV ? yV.parent = YV : delete yV.parent, xV
    }

    function Ge(VV) {
      return VV.edges().find((eV => VV.edge(eV).cutvalue < 0))
    }

    function We(VV, eV, xV) {
      let JV = xV.v,
        YV = xV.w;
      eV.hasEdge(JV, YV) || (JV = xV.w, YV = xV.v);
      let UV = VV.node(JV),
        yV = VV.node(YV),
        pV = UV,
        QV = !1;
      return UV.lim > yV.lim && (pV = yV, QV = !0), eV.edges().filter((eV => QV === ge(VV, VV.node(eV.v), pV) && QV !== ge(VV, VV.node(eV.w), pV))).reduce(((VV, xV) => Ee(eV, xV) < Ee(eV, VV) ? xV : VV))
    }

    function Re(VV, eV, xV, JV) {
      let YV = xV.v,
        UV = xV.w;
      VV.removeEdge(YV, UV), VV.setEdge(JV.v, JV.w, {}), Me(VV), Ne(VV, eV),
        function(VV, eV) {
          let xV = VV.nodes().find((eV => !VV.node(eV).parent));
          if (!xV) return;
          let JV = Fe(VV, [xV]);
          JV = JV.slice(1), JV.forEach((xV => {
            let JV = VV.node(xV).parent,
              YV = eV.edge(xV, JV),
              UV = !1;
            YV || (YV = eV.edge(JV, xV), UV = !0), eV.node(xV).rank = eV.node(JV).rank + (UV ? YV.minlen : -YV.minlen)
          }))
        }(VV, eV)
    }

    function ge(VV, eV, xV) {
      return xV.low <= eV.lim && eV.lim <= xV.lim
    }
    Ae.initLowLimValues = Me, Ae.initCutValues = Ne, Ae.calcCutValue = Xe, Ae.leaveEdge = Ge, Ae.enterEdge = We, Ae.exchangeEdges = Re;
    var De = function(VV) {
      let eV = VV.graph().ranker;
      if ("function" == typeof eV) return eV(VV);
      switch (eV) {
        case "network-simplex":
        default:
          Ce(VV);
          break;
        case "tight-tree":
          ! function(VV) {
            be(VV), Be(VV)
          }(VV);
          break;
        case "longest-path":
          ie(VV);
        case "none":
      }
    };
    var ie = be;

    function Ce(VV) {
      Pe(VV)
    }
    var ae = function(VV) {
      let eV = function(VV) {
          let eV = {},
            xV = 0;

          function JV(YV) {
            let UV = xV;
            VV.children(YV).forEach(JV), eV[YV] = {
              low: UV,
              lim: xV++
            }
          }
          return VV.children(Je).forEach(JV), eV
        }(VV),
        xV = VV.graph();
      if (!Array.isArray(xV.dummyChains)) return;
      xV.dummyChains.forEach((xV => {
        let JV = VV.node(xV),
          YV = JV.edgeObj,
          UV = function(VV, eV, xV, JV) {
            let YV, UV = [],
              yV = [],
              pV = Math.min(eV[xV].low, eV[JV].low),
              QV = Math.max(eV[xV].lim, eV[JV].lim);
            YV = xV;
            do {
              YV = VV.parent(YV), UV.push(YV)
            } while (YV && (eV[YV].low > pV || QV > eV[YV].lim));
            let nV = YV,
              wV = JV;
            for (;
              (wV = VV.parent(wV)) !== nV;) yV.push(wV);
            return {
              path: UV.concat(yV.reverse()),
              lca: nV
            }
          }(VV, eV, YV.v, YV.w),
          yV = UV.path,
          pV = UV.lca,
          QV = 0,
          nV = yV[QV],
          wV = !0;
        for (; xV !== YV.w;) {
          if (JV = VV.node(xV), wV) {
            for (;
              (nV = yV[QV]) !== pV && VV.node(nV).maxRank < JV.rank;) QV++;
            nV === pV && (wV = !1)
          }
          if (!wV) {
            for (; QV < yV.length - 1 && VV.node(yV[QV + 1]).minRank <= JV.rank;) QV++;
            nV = yV[QV]
          }
          void 0 !== nV && VV.setParent(xV, nV), xV = VV.successors(xV)[0]
        }
      }))
    };

    function oe(VV) {
      let eV = lV(VV, "root", {}, "_root"),
        xV = function(VV) {
          let eV = {};

          function xV(JV, YV) {
            let UV = VV.children(JV);
            UV && UV.length && UV.forEach((VV => xV(VV, YV + 1))), eV[JV] = YV
          }
          return VV.children(Je).forEach((VV => xV(VV, 1))), eV
        }(VV),
        JV = Object.values(xV),
        YV = uV(Math.max, JV) - 1,
        UV = 2 * YV + 1;
      VV.graph().nestingRoot = eV, VV.edges().forEach((eV => VV.edge(eV).minlen *= UV));
      let yV = function(VV) {
        return VV.edges().reduce(((eV, xV) => eV + VV.edge(xV).weight), 0)
      }(VV) + 1;
      VV.children(Je).forEach((JV => {
        ce(VV, eV, UV, yV, YV, xV, JV)
      })), VV.graph().nodeRankFactor = UV
    }

    function ce(VV, eV, xV, JV, YV, UV, yV) {
      var pV;
      let QV = VV.children(yV);
      if (!QV.length) return void(yV !== eV && VV.setEdge(eV, yV, {
        weight: 0,
        minlen: xV
      }));
      let nV = KV(VV, "_bt"),
        wV = KV(VV, "_bb"),
        ZV = VV.node(yV);
      VV.setParent(nV, yV), ZV.borderTop = nV, VV.setParent(wV, yV), ZV.borderBottom = wV, QV.forEach((pV => {
        var QV;
        ce(VV, eV, xV, JV, YV, UV, pV);
        let ZV = VV.node(pV),
          vV = ZV.borderTop ? ZV.borderTop : pV,
          rV = ZV.borderBottom ? ZV.borderBottom : pV,
          kV = ZV.borderTop ? JV : 2 * JV,
          bV = vV !== rV ? 1 : YV - (null != (QV = UV[yV]) ? QV : 0) + 1;
        VV.setEdge(nV, vV, {
          weight: kV,
          minlen: bV,
          nestingEdge: !0
        }), VV.setEdge(rV, wV, {
          weight: kV,
          minlen: bV,
          nestingEdge: !0
        })
      })), VV.parent(yV) || VV.setEdge(eV, nV, {
        weight: 0,
        minlen: YV + (null != (pV = UV[yV]) ? pV : 0)
      })
    }
    var he = function(VV) {
      VV.children(Je).forEach((function eV(xV) {
        let JV = VV.children(xV),
          YV = VV.node(xV);
        if (JV.length && JV.forEach(eV), YV && Object.hasOwn(YV, "minRank")) {
          YV.borderLeft = [], YV.borderRight = [];
          for (let eV = YV.minRank, JV = YV.maxRank + 1; eV < JV; ++eV) le(VV, "borderLeft", "_bl", xV, YV, eV), le(VV, "borderRight", "_br", xV, YV, eV)
        }
      }))
    };

    function le(VV, eV, xV, JV, YV, UV) {
      let yV = {
          width: 0,
          height: 0,
          rank: UV,
          borderType: eV
        },
        pV = YV[eV][UV - 1],
        QV = lV(VV, "border", yV, xV);
      YV[eV][UV] = QV, VV.setParent(QV, JV), pV && VV.setEdge(pV, QV, {
        weight: 1
      })
    }

    function Le(VV) {
      var eV;
      let xV = null == (eV = VV.graph().rankdir) ? void 0 : eV.toLowerCase();
      ("bt" === xV || "rl" === xV) && function(VV) {
        VV.nodes().forEach((eV => Ke(VV.node(eV)))), VV.edges().forEach((eV => {
          var xV;
          let JV = VV.edge(eV);
          null == (xV = JV.points) || xV.forEach(Ke), Object.hasOwn(JV, "y") && Ke(JV)
        }))
      }(VV), ("lr" === xV || "rl" === xV) && (function(VV) {
        VV.nodes().forEach((eV => He(VV.node(eV)))), VV.edges().forEach((eV => {
          var xV;
          let JV = VV.edge(eV);
          null == (xV = JV.points) || xV.forEach(He), Object.hasOwn(JV, "x") && He(JV)
        }))
      }(VV), fe(VV))
    }

    function fe(VV) {
      VV.nodes().forEach((eV => me(VV.node(eV)))), VV.edges().forEach((eV => me(VV.edge(eV))))
    }

    function me(VV) {
      let eV = VV.width;
      VV.width = VV.height, VV.height = eV
    }

    function Ke(VV) {
      VV.y = -VV.y
    }

    function He(VV) {
      let eV = VV.x;
      VV.x = VV.y, VV.y = eV
    }

    function ue(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        xV = {},
        JV = VV.nodes().filter((eV => !VV.children(eV).length)),
        YV = JV.map((eV => VV.node(eV).rank)),
        UV = Ve(uV(Math.max, YV) + 1).map((() => []));
      return JV.sort(((eV, xV) => VV.node(eV).rank - VV.node(xV).rank)).forEach((function JV(YV) {
        if (xV[YV]) return;
        xV[YV] = !0;
        let yV = VV.node(YV);
        UV[yV.rank].push(YV);
        let pV = VV.successors(YV);
        pV && [...pV].sort(((xV, JV) => function(xV, JV) {
          let YV = VV.node(xV),
            UV = VV.node(JV);
          return Ye(eV, YV, UV)
        }(xV, JV))).forEach(JV)
      })), UV
    }

    function se(VV, eV) {
      let xV = 0;
      for (let JV = 1; JV < eV.length; ++JV) xV += Se(VV, eV[JV - 1], eV[JV]);
      return xV
    }

    function Se(VV, eV, xV) {
      let JV = function(VV, eV) {
          return VV.reduce(((VV, xV, JV) => (VV[xV] = eV[JV], VV)), {})
        }(xV, xV.map(((VV, eV) => eV))),
        YV = eV.flatMap((eV => {
          let xV = VV.outEdges(eV);
          return xV ? xV.map((eV => ({
            pos: JV[eV.w],
            weight: VV.edge(eV).weight
          }))).sort(((VV, eV) => VV.pos - eV.pos)) : []
        })),
        UV = 1;
      for (; UV < xV.length;) UV <<= 1;
      let yV = 2 * UV - 1;
      UV -= 1;
      let pV = new Array(yV).fill(0),
        QV = 0;
      return YV.forEach((VV => {
        let eV = VV.pos + UV;
        pV[eV] += VV.weight;
        let xV = 0;
        for (; eV > 0;) eV % 2 && (xV += pV[eV + 1]), eV = eV - 1 >> 1, pV[eV] += VV.weight;
        QV += VV.weight * xV
      })), QV
    }

    function Ie(VV, eV) {
      let xV = {};
      return VV.forEach(((VV, eV) => {
          let JV = {
            indegree: 0,
            in: [],
            out: [],
            vs: [VV.v],
            i: eV
          };
          void 0 !== VV.barycenter && (JV.barycenter = VV.barycenter, JV.weight = VV.weight), xV[VV.v] = JV
        })), eV.edges().forEach((VV => {
          let eV = xV[VV.v],
            JV = xV[VV.w];
          void 0 !== eV && void 0 !== JV && (JV.indegree++, eV.out.push(JV))
        })),
        function(VV) {
          let eV = [];

          function xV(VV) {
            return eV => {
              eV.merged || (void 0 === eV.barycenter || void 0 === VV.barycenter || eV.barycenter >= VV.barycenter) && function(VV, eV) {
                let xV = 0,
                  JV = 0;
                VV.weight && (xV += VV.barycenter * VV.weight, JV += VV.weight), eV.weight && (xV += eV.barycenter * eV.weight, JV += eV.weight), VV.vs = eV.vs.concat(VV.vs), VV.barycenter = xV / JV, VV.weight = JV, VV.i = Math.min(eV.i, VV.i), eV.merged = !0
              }(VV, eV)
            }
          }

          function JV(eV) {
            return xV => {
              xV.in.push(eV), 0 === --xV.indegree && VV.push(xV)
            }
          }
          for (; VV.length;) {
            let YV = VV.pop();
            eV.push(YV), YV.in.reverse().forEach(xV(YV)), YV.out.forEach(JV(YV))
          }
          return eV.filter((VV => !VV.merged)).map((VV => ee(VV, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(xV).filter((VV => !VV.indegree)))
    }

    function de(VV, eV, xV, JV, YV) {
      let UV = {},
        yV = null,
        pV = null,
        QV = YV;
      "boolean" == typeof eV ? (QV = eV, UV = {}) : eV && (UV = eV, yV = null != xV ? xV : null, pV = null != JV ? JV : null);
      let nV = function(VV, eV) {
          let xV = {
            lhs: [],
            rhs: []
          };
          return VV.forEach((VV => {
            eV(VV) ? xV.lhs.push(VV) : xV.rhs.push(VV)
          })), xV
        }(VV, (VV => Object.hasOwn(VV, "barycenter"))),
        wV = nV.lhs,
        ZV = nV.rhs.sort(((VV, eV) => eV.i - VV.i)),
        vV = [],
        rV = 0,
        kV = 0,
        bV = 0;
      wV.sort(function(VV, eV, xV) {
        return (JV, YV) => {
          if (JV.barycenter < YV.barycenter) return -1;
          if (JV.barycenter > YV.barycenter) return 1;
          if (VV && ("string" == typeof JV.vs[0] || "string" == typeof YV.vs[0])) {
            let xV = VV.node(JV.vs[0]),
              UV = VV.node(YV.vs[0]),
              yV = Ye(eV, xV, UV);
            if (0 !== yV) return yV
          }
          return xV ? YV.i - JV.i : JV.i - YV.i
        }
      }(pV, yV, !!QV));
      for (let [BV, jV] of Object.entries(UV)) {
        let VV = wV.findIndex((VV => VV.vs[0] === BV));
        wV.splice(VV + 1, 0, jV)
      }
      bV = Oe(vV, ZV, bV), wV.forEach((VV => {
        bV += VV.vs.length, vV.push(VV.vs), rV += VV.barycenter * VV.weight, kV += VV.weight, bV = Oe(vV, ZV, bV)
      }));
      let EV = {
        vs: vV.flat(1)
      };
      return kV && (EV.barycenter = rV / kV, EV.weight = kV), EV
    }

    function Oe(VV, eV, xV) {
      let JV;
      for (; eV.length && (JV = eV[eV.length - 1]).i <= xV;) eV.pop(), VV.push(JV.vs), xV++;
      return xV
    }

    function Vx(VV, eV, xV, JV, YV) {
      var UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV;
      let EV = null,
        BV = YV;
      "boolean" == typeof JV ? (BV = JV, EV = null) : void 0 !== JV && (EV = JV);
      let jV = VV.children(eV),
        qV = VV.node(eV),
        tV = qV ? qV.borderLeft : void 0,
        FV = qV ? qV.borderRight : void 0,
        TV = {};
      tV && (jV = jV.filter((VV => VV !== tV && VV !== FV)));
      let PV = function(VV) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((eV => {
          let xV = VV.inEdges(eV);
          if (!xV || !xV.length) return {
            v: eV
          };
          {
            let JV = xV.reduce(((eV, xV) => {
              let JV = VV.edge(xV),
                YV = VV.node(xV.v);
              return {
                sum: eV.sum + JV.weight * YV.order,
                weight: eV.weight + JV.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: eV,
              barycenter: JV.sum / JV.weight,
              weight: JV.weight
            }
          }
        }))
      }(VV, jV);
      PV.forEach((eV => {
        if (VV.children(eV.v).length) {
          let {
            result: JV
          } = Vx(VV, eV.v, xV, EV, BV);
          TV[eV.v] = JV, Object.hasOwn(JV, "barycenter") && function(VV, eV) {
            void 0 !== VV.barycenter ? (VV.barycenter = (VV.barycenter * VV.weight + eV.barycenter * eV.weight) / (VV.weight + eV.weight), VV.weight += eV.weight) : (VV.barycenter = eV.barycenter, VV.weight = eV.weight)
          }(eV, JV)
        }
      }));
      let AV = Ie(PV, xV);
      ! function(VV, eV) {
        VV.forEach((VV => {
          VV.vs = VV.vs.flatMap((VV => eV[VV] ? eV[VV].vs : VV))
        }))
      }(AV, TV);
      let NV = {},
        XV = !1;
      for (let zV = 0; zV < AV.length; zV++)
        for (let eV = zV + 1; eV < AV.length; eV++)
          if (AV[zV] && AV[eV] && null != (UV = AV[zV]) && UV.barycenter && null != (yV = AV[eV]) && yV.barycenter && (null == (pV = AV[zV]) ? void 0 : pV.barycenter) === AV[eV].barycenter) {
            let xV = null != (nV = null == (QV = AV[zV]) ? void 0 : QV.vs[0]) ? nV : "",
              JV = null != (ZV = null == (wV = AV[eV]) ? void 0 : wV.vs[0]) ? ZV : "",
              YV = VV.node(xV),
              UV = VV.node(JV);
            if ("edge" === YV.dummy && "edge" === UV.dummy && (null == (vV = YV.edgeObj) ? void 0 : vV.v) === (null == (rV = UV.edgeObj) ? void 0 : rV.v) && (null == (kV = YV.edgeObj) ? void 0 : kV.w) === (null == (bV = UV.edgeObj) ? void 0 : bV.w)) {
              if (YV.edgeLabel.reversed) {
                NV[JV] = AV[zV], AV.splice(zV, 1), zV--;
                break
              }
              NV[xV] = AV[eV], AV.splice(eV, 1), eV--
            } else XV = !0
          } let MV = de(AV, NV, EV, VV, BV);
      if (tV && FV) {
        MV.vs = [tV, MV.vs, FV].flat(1);
        let eV = VV.predecessors(tV);
        if (eV && eV.length) {
          let xV = VV.node(eV[0]),
            JV = VV.predecessors(FV),
            YV = VV.node(JV[0]);
          Object.hasOwn(MV, "barycenter") || (MV.barycenter = 0, MV.weight = 0), MV.barycenter = (MV.barycenter * MV.weight + xV.order + YV.order) / (MV.weight + 2), MV.weight += 2
        }
      }
      return Object.defineProperty(MV, "result", {
        value: MV,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(MV, "usedBias", {
        value: XV,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), MV
    }

    function ex(VV, eV, xV, JV) {
      JV || (JV = VV.nodes());
      let YV = function(VV) {
          let eV;
          for (; VV.hasNode(eV = OV("_root")););
          return eV
        }(VV),
        UV = new hV({
          compound: !0
        }).setGraph({
          root: YV
        }).setDefaultNodeLabel((eV => VV.node(eV)));
      return JV.forEach((JV => {
        let yV = VV.node(JV),
          pV = VV.parent(JV);
        if (yV.rank === eV || yV.minRank <= eV && eV <= yV.maxRank) {
          UV.setNode(JV), UV.setParent(JV, pV || YV);
          let QV = VV[xV](JV);
          QV && QV.forEach((eV => {
            let xV = eV.v === JV ? eV.w : eV.v,
              YV = UV.edge(xV, JV),
              yV = void 0 !== YV ? YV.weight : 0;
            UV.setEdge(xV, JV, {
              weight: VV.edge(eV).weight + yV
            })
          })), Object.hasOwn(yV, "minRank") && UV.setNode(JV, {
            borderLeft: yV.borderLeft[eV],
            borderRight: yV.borderRight[eV]
          })
        }
      })), UV
    }

    function xx(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof eV.customOrder) return void eV.customOrder(VV, xx);
      let JV = sV(VV),
        YV = Jx(VV, Ve(1, JV + 1), "inEdges"),
        UV = Jx(VV, Ve(JV - 1, -1, -1), "outEdges"),
        yV = ue(VV, xV);
      if (Ux(VV, yV), eV.disableOptimalOrderHeuristic) return;
      let pV, QV = Number.POSITIVE_INFINITY,
        nV = eV.constraints || [];
      for (let wV = 0, ZV = 0; ZV < 4; ++wV, ++ZV) {
        Yx(wV % 2 ? YV : UV, wV % 4 >= 2, nV, xV), yV = mV(VV);
        let eV = se(VV, yV);
        eV < QV ? (ZV = 0, pV = Object.assign({}, yV), QV = eV) : eV === QV && (pV = structuredClone(yV))
      }
      Ux(VV, pV)
    }

    function Jx(VV, eV, xV) {
      let JV = new Map,
        YV = (VV, eV) => {
          JV.has(VV) || JV.set(VV, []), JV.get(VV).push(eV)
        };
      for (let UV of VV.nodes()) {
        let eV = VV.node(UV);
        if ("number" == typeof eV.rank && YV(eV.rank, UV), "number" == typeof eV.minRank && "number" == typeof eV.maxRank)
          for (let VV = eV.minRank; VV <= eV.maxRank; VV++) VV !== eV.rank && YV(VV, UV)
      }
      return eV.map((function(eV) {
        return ex(VV, eV, xV, JV.get(eV) || [])
      }))
    }

    function Yx(VV, eV, xV, JV) {
      let YV = !0,
        UV = new hV;
      VV.forEach((function(VV) {
        xV.forEach((VV => UV.setEdge(VV.left, VV.right)));
        let yV = VV.graph().root,
          {
            result: pV,
            usedBias: QV
          } = Vx(VV, yV, UV, JV, YV);
        eV && QV && (YV = !YV), pV.vs.forEach(((eV, xV) => VV.node(eV).order = xV)),
          function(VV, eV, xV) {
            let JV, YV = {};
            xV.forEach((xV => {
              let UV, yV, pV = VV.parent(xV);
              for (; pV;) {
                if (UV = VV.parent(pV), UV ? (yV = YV[UV], YV[UV] = pV) : (yV = JV, JV = pV), yV && yV !== pV) return void eV.setEdge(yV, pV);
                pV = UV
              }
            }))
          }(VV, UV, pV.vs)
      }))
    }

    function Ux(VV, eV) {
      Object.values(eV).forEach((eV => eV.forEach(((eV, xV) => VV.node(eV).order = xV))))
    }

    function yx(VV, eV, xV) {
      if (eV > xV) {
        let VV = eV;
        eV = xV, xV = VV
      }
      let JV = VV[eV];
      JV || (VV[eV] = JV = {}), JV[xV] = !0
    }

    function px(VV, eV, xV) {
      if (eV > xV) {
        let VV = eV;
        eV = xV, xV = VV
      }
      let JV = VV[eV];
      return void 0 !== JV && Object.hasOwn(JV, xV)
    }

    function Qx(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        UV = {},
        yV = function(VV, eV, xV, JV) {
          let YV = new hV,
            UV = VV.graph(),
            yV = function(VV, eV, xV) {
              return (JV, YV, UV) => {
                let yV, pV = JV.node(YV),
                  QV = JV.node(UV),
                  nV = 0;
                if (nV += pV.width / 2, Object.hasOwn(pV, "labelpos")) switch (pV.labelpos.toLowerCase()) {
                  case "l":
                    yV = -pV.width / 2;
                    break;
                  case "r":
                    yV = pV.width / 2
                }
                if (yV && (nV += xV ? yV : -yV), yV = void 0, nV += (pV.dummy ? eV : VV) / 2, nV += (QV.dummy ? eV : VV) / 2, nV += QV.width / 2, Object.hasOwn(QV, "labelpos")) switch (QV.labelpos.toLowerCase()) {
                  case "l":
                    yV = QV.width / 2;
                    break;
                  case "r":
                    yV = -QV.width / 2
                }
                return yV && (nV += xV ? yV : -yV), nV
              }
            }(UV.nodesep, UV.edgesep, JV);
          return eV.forEach((eV => {
            let JV;
            eV.forEach((eV => {
              let UV = xV[eV];
              if (void 0 !== UV) {
                if (YV.setNode(UV), void 0 !== JV) {
                  let pV = xV[JV];
                  if (void 0 !== pV) {
                    let xV = YV.edge(pV, UV);
                    YV.setEdge(pV, UV, Math.max(yV(VV, eV, JV), xV || 0))
                  }
                }
                JV = eV
              }
            }))
          })), YV
        }(VV, eV, xV, YV),
        pV = YV ? "borderLeft" : "borderRight";

      function QV(VV, eV) {
        let xV = yV.nodes().slice(),
          JV = {},
          YV = xV.pop();
        for (; YV;) {
          if (JV[YV]) VV(YV);
          else {
            JV[YV] = !0, xV.push(YV);
            for (let VV of eV(YV)) xV.push(VV)
          }
          YV = xV.pop()
        }
      }
      return QV((function(VV) {
        let eV = yV.inEdges(VV);
        UV[VV] = eV ? eV.reduce(((VV, eV) => {
          var xV;
          let JV = null != (xV = UV[eV.v]) ? xV : 0,
            YV = yV.edge(eV);
          return Math.max(VV, JV + (void 0 !== YV ? YV : 0))
        }), 0) : 0
      }), (function(VV) {
        return yV.predecessors(VV) || []
      })), QV((function(eV) {
        let xV = yV.outEdges(eV),
          JV = Number.POSITIVE_INFINITY;
        xV && (JV = xV.reduce(((VV, eV) => {
          let xV = UV[eV.w],
            JV = yV.edge(eV);
          return Math.min(VV, (void 0 !== xV ? xV : 0) - (void 0 !== JV ? JV : 0))
        }), Number.POSITIVE_INFINITY));
        let YV = VV.node(eV);
        JV !== Number.POSITIVE_INFINITY && YV.borderType !== pV && (UV[eV] = Math.max(void 0 !== UV[eV] ? UV[eV] : 0, JV))
      }), (function(VV) {
        return yV.successors(VV) || []
      })), Object.keys(JV).forEach((VV => {
        var eV;
        let JV = xV[VV];
        void 0 !== JV && (UV[VV] = null != (eV = UV[JV]) ? eV : 0)
      })), UV
    }

    function nx(VV, eV) {
      let xV, JV = mV(VV),
        YV = Object.assign(function(VV, eV) {
          let xV = {};
          return eV.length && eV.reduce((function(eV, JV) {
            let YV = 0,
              UV = 0,
              yV = eV.length,
              pV = JV[JV.length - 1];
            return JV.forEach(((eV, QV) => {
              let nV = function(VV, eV) {
                  if (VV.node(eV).dummy) {
                    let xV = VV.predecessors(eV);
                    if (xV) return xV.find((eV => VV.node(eV).dummy))
                  }
                }(VV, eV),
                wV = nV ? VV.node(nV).order : yV;
              (nV || eV === pV) && (JV.slice(UV, QV + 1).forEach((eV => {
                let JV = VV.predecessors(eV);
                JV && JV.forEach((JV => {
                  let UV = VV.node(JV),
                    yV = UV.order;
                  (yV < YV || wV < yV) && (!UV.dummy || !VV.node(eV).dummy) && yx(xV, JV, eV)
                }))
              })), UV = QV + 1, YV = wV)
            })), JV
          })), xV
        }(VV, JV), function(VV, eV) {
          let xV = {};

          function JV(eV, JV, YV, UV, yV) {
            Ve(JV, YV).forEach((JV => {
              let YV = eV[JV];
              if (void 0 !== YV && VV.node(YV).dummy) {
                let eV = VV.predecessors(YV);
                eV && eV.forEach((eV => {
                  if (void 0 === eV) return;
                  let JV = VV.node(eV);
                  JV.dummy && (JV.order < UV || JV.order > yV) && yx(xV, eV, YV)
                }))
              }
            }))
          }
          return eV.length && eV.reduce((function(eV, xV) {
            let YV = -1,
              UV = -1,
              yV = 0;
            return xV.forEach(((pV, QV) => {
              if ("border" === VV.node(pV).dummy) {
                let eV = VV.predecessors(pV);
                if (eV && eV.length) {
                  let pV = eV[0];
                  if (void 0 === pV) return;
                  UV = VV.node(pV).order, JV(xV, yV, QV, YV, UV), yV = QV, YV = UV
                }
              }
              JV(xV, yV, xV.length, UV, eV.length)
            })), xV
          })), xV
        }(VV, JV)),
        UV = {};
      ["u", "d"].forEach((yV => {
        xV = "u" === yV ? JV : Object.values(JV).reverse(), ["l", "r"].forEach((JV => {
          "r" === JV && (xV = xV.map((VV => Object.values(VV).reverse())));
          let pV = function(VV, eV, xV, JV, YV) {
              let UV = {},
                yV = {},
                pV = {};
              return eV.forEach((VV => {
                VV.forEach(((VV, eV) => {
                  UV[VV] = VV, yV[VV] = VV, pV[VV] = eV
                }))
              })), eV.forEach((eV => {
                let QV = -1,
                  nV = -1,
                  wV = !1,
                  ZV = eV,
                  vV = eV.findIndex((eV => (null == YV ? void 0 : YV.includes(eV)) || wx(eV, VV, YV)));
                vV > 0 && (ZV = [eV[vV], ...eV.slice(0, vV), ...eV.slice(vV + 1)], wV = !0), ZV.forEach((eV => {
                  var ZV;
                  let vV = JV(eV);
                  if (vV && vV.length) {
                    null != YV && YV.includes(eV) && (vV = vV.filter((eV => wx(eV, VV, YV))));
                    let JV = vV.sort(((VV, eV) => {
                        let xV = pV[VV],
                          JV = pV[eV];
                        return (void 0 !== xV ? xV : 0) - (void 0 !== JV ? JV : 0)
                      })),
                      rV = (JV.length - 1) / 2;
                    for (let VV = Math.floor(rV), YV = Math.ceil(rV); VV <= YV; ++VV) {
                      let YV = JV[VV];
                      if (void 0 === YV) continue;
                      let vV = pV[YV];
                      if (void 0 !== vV && yV[eV] === eV && QV < vV && pV[YV] !== nV && !px(xV, eV, YV)) {
                        let VV = UV[YV];
                        void 0 !== VV && (yV[YV] = eV, yV[eV] = UV[eV] = VV, QV = vV, wV && (QV = -1, nV = null != (ZV = pV[YV]) ? ZV : -1, wV = !1))
                      }
                    }
                  }
                }))
              })), {
                root: UV,
                align: yV
              }
            }(VV, xV, YV, (eV => ("u" === yV ? VV.predecessors(eV) : VV.successors(eV)) || []), eV),
            QV = Qx(VV, xV, pV.root, pV.align, "r" === JV);
          "r" === JV && (QV = xe(QV, (VV => -VV))), UV[yV + JV] = QV
        }))
      }));
      let yV = function(VV, eV) {
        return Object.values(eV).reduce(((eV, xV) => {
          let JV = Number.NEGATIVE_INFINITY,
            YV = Number.POSITIVE_INFINITY;
          Object.entries(xV).forEach((eV => {
            let [xV, UV] = eV, yV = function(VV, eV) {
              return VV.node(eV).width
            }(VV, xV) / 2;
            JV = Math.max(UV + yV, JV), YV = Math.min(UV - yV, YV)
          }));
          let UV = JV - YV;
          return UV < eV[0] && (eV = [UV, xV]), eV
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(VV, UV);
      return function(VV, eV) {
          let xV = Object.values(eV),
            JV = uV(Math.min, xV),
            YV = uV(Math.max, xV);
          ["u", "d"].forEach((xV => {
            ["l", "r"].forEach((UV => {
              let yV = xV + UV,
                pV = VV[yV];
              if (!pV || pV === eV) return;
              let QV = Object.values(pV),
                nV = JV - uV(Math.min, QV);
              "l" !== UV && (nV = YV - uV(Math.max, QV)), nV && (VV[yV] = xe(pV, (VV => VV + nV)))
            }))
          }))
        }(UV, yV),
        function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            xV = VV.ul;
          return xV ? xe(xV, ((xV, JV) => {
            var YV, UV;
            if (eV) {
              let xV = eV.toLowerCase(),
                YV = VV[xV];
              if (YV && void 0 !== YV[JV]) return YV[JV]
            }
            let yV = Object.values(VV).map((VV => {
              let eV = VV[JV];
              return void 0 !== eV ? eV : 0
            })).sort(((VV, eV) => VV - eV));
            return ((null != (YV = yV[1]) ? YV : 0) + (null != (UV = yV[2]) ? UV : 0)) / 2
          })) : {}
        }(UV, VV.graph().align)
    }

    function wx(VV, eV, xV) {
      var JV;
      if (!xV) return !1;
      let YV = null == (JV = eV.node(VV)) ? void 0 : JV.edgeObj;
      if (!YV || eV.node(VV).edgeLabel.reversed) return !1;
      let UV = xV.indexOf(null == YV ? void 0 : YV.v),
        yV = xV.indexOf(null == YV ? void 0 : YV.w);
      return -1 !== UV && -1 !== yV && UV === (yV + 1) % xV.length || UV === (yV - 1) % xV.length
    }

    function Zx(VV, eV) {
      (function(VV) {
        let eV = mV(VV),
          xV = VV.graph(),
          JV = xV.ranksep,
          YV = xV.rankalign,
          UV = 0;
        eV.forEach((eV => {
          let xV = eV.reduce(((eV, xV) => {
            var JV;
            let YV = null != (JV = VV.node(xV).height) ? JV : 0;
            return eV > YV ? eV : YV
          }), 0);
          eV.forEach((eV => {
            let JV = VV.node(eV);
            JV.y = "top" === YV ? UV + JV.height / 2 : "bottom" === YV ? UV + xV - JV.height / 2 : UV + xV / 2
          })), UV += xV + JV
        }))
      })(VV = LV(VV)), Object.entries(nx(VV, eV)).forEach((eV => {
        let [xV, JV] = eV;
        return VV.node(xV).x = JV
      }))
    }
    var vx = new WeakMap;

    function rx(VV) {
      return bx(VV, IV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), VV
    }

    function kx(VV, eV, xV) {
      let JV = eV;
      for (; void 0 !== JV;) {
        let eV = VV.parent(JV);
        if (eV === xV) return JV;
        JV = eV
      }
    }

    function bx(VV, eV, xV) {
      var JV;
      let YV = VV.nodes().filter((eV => VV.children(eV).length)),
        UV = {};
      YV.forEach((JV => {
        let YV = VV.node(JV);
        if (YV && YV.rankdir) {
          let yV = new hV({
            multigraph: !0,
            compound: !0
          });
          yV.setGraph({
            rankdir: YV.rankdir
          });
          let pV = VV.children(JV);
          pV.forEach((eV => {
            let xV = {
              ...VV.node(eV)
            };
            yV.setNode(eV, xV);
            let YV = VV.parent(eV);
            YV && YV !== JV && pV.includes(YV) && yV.setParent(eV, YV)
          }));
          let QV = new Set;
          VV.edges().forEach((eV => {
            let xV = kx(VV, eV.v, JV),
              YV = kx(VV, eV.w, JV);
            if (xV && YV && xV !== YV) {
              let JV = `${xV}\0${YV}`;
              QV.has(JV) || (QV.add(JV), yV.setEdge(xV, YV, {
                ...VV.edge(eV)
              }))
            }
          })), bx(yV, eV, xV);
          let nV = Xx(yV);
          Ex(nV, eV, xV, null), Bx(yV, nV);
          let wV = 1 / 0,
            ZV = 1 / 0,
            vV = -1 / 0,
            rV = -1 / 0;
          yV.nodes().forEach((VV => {
            if (VV === JV) return;
            let eV = yV.node(VV);
            eV && "number" == typeof eV.x && "number" == typeof eV.y && "number" == typeof eV.width && "number" == typeof eV.height && (wV = Math.min(wV, eV.x - eV.width / 2), vV = Math.max(vV, eV.x + eV.width / 2), ZV = Math.min(ZV, eV.y - eV.height / 2), rV = Math.max(rV, eV.y + eV.height / 2))
          })), (!isFinite(wV) || !isFinite(ZV) || !isFinite(vV) || !isFinite(rV)) && (wV = ZV = 0, vV = rV = 0);
          let kV = vV - wV,
            bV = rV - ZV;
          UV[JV] = {
            minX: wV,
            SY: ZV,
            maxX: vV,
            IY: rV,
            width: kV,
            height: bV,
            offsetX: wV,
            offsetY: ZV
          }, YV._dagreClusterSubgraph = yV
        }
      }));
      let yV = [],
        pV = new Map;
      YV.forEach((eV => {
        let xV = VV.node(eV);
        xV && xV.rankdir && UV[eV] && pV.set(eV, (VV.children(eV) || []).filter((VV => VV !== eV)))
      }));
      let QV = new Set([...pV.values()].flat()),
        nV = new Map;
      pV.forEach(((eV, xV) => {
        QV.has(xV) || nV.set(xV, (eV => {
          let xV = [],
            JV = (VV.children(eV) || []).filter((VV => VV !== eV));
          for (; JV.length > 0;) {
            let eV = JV.shift();
            xV.push(eV), (VV.children(eV) || []).filter((VV => VV !== eV)).forEach((VV => JV.push(VV)))
          }
          return xV
        })(xV))
      }));
      let wV = new Set([...nV.values()].flat()),
        ZV = VV => {
          for (let [eV, xV] of nV)
            if (xV.includes(VV)) return eV;
          return VV
        },
        vV = [];
      VV.edges().forEach((eV => {
        (wV.has(eV.v) || wV.has(eV.w)) && vV.push({
          edge: eV,
          label: VV.edge(eV)
        })
      }));
      let rV = new Map;
      wV.forEach((eV => {
        let xV = VV.parent(eV);
        rV.set(eV, "string" == typeof xV ? xV : void 0)
      })), nV.forEach(((eV, xV) => {
        let JV = VV.node(xV),
          YV = [];
        eV.forEach((eV => {
          let xV = VV.node(eV);
          xV && (YV.push({
            id: eV,
            node: xV,
            parent: rV.get(eV)
          }), VV.removeNode(eV))
        }));
        let pV = vV.filter((VV => {
            let {
              edge: xV
            } = VV;
            return eV.includes(xV.v) || eV.includes(xV.w)
          })),
          QV = UV[xV];
        JV && (yV.push({
          clusterId: xV,
          subgraph: JV._dagreClusterSubgraph,
          bounds: QV,
          children: eV,
          removedNodes: YV,
          removedEdges: pV
        }), JV.width = QV.width, JV.height = QV.height)
      }));
      let kV = new Set;
      vV.forEach((eV => {
        let {
          edge: xV,
          label: JV
        } = eV, YV = ZV(xV.v), UV = ZV(xV.w);
        if (YV !== UV && VV.hasNode(YV) && VV.hasNode(UV)) {
          let eV = `${YV}\0${UV}`;
          kV.has(eV) || (kV.add(eV), VV.setEdge(YV, UV, {
            ...JV,
            width: 0,
            height: 0
          }))
        }
      }));
      let bV = Xx(VV),
        EV = Ex(bV, eV, xV, null != (JV = vx.get(VV)) ? JV : null);
      vx.set(VV, EV), Bx(VV, bV), kV.forEach((eV => {
        let xV = eV.indexOf("\0"),
          JV = eV.slice(0, xV),
          YV = eV.slice(xV + 1);
        VV.hasEdge(JV, YV) && VV.removeEdge(JV, YV)
      })), yV.forEach((eV => {
        let {
          clusterId: xV,
          subgraph: JV,
          bounds: YV,
          removedNodes: UV,
          removedEdges: yV
        } = eV;
        var pV, QV;
        let nV = VV.node(xV),
          wV = null != (pV = null == nV ? void 0 : nV.x) ? pV : 0,
          ZV = null != (QV = null == nV ? void 0 : nV.y) ? QV : 0,
          vV = (YV.minX + YV.maxX) / 2,
          rV = (YV.SY + YV.IY) / 2;
        UV.forEach((eV => {
          let {
            id: xV,
            node: JV,
            parent: YV
          } = eV;
          VV.setNode(xV, JV), void 0 !== YV && VV.setParent(xV, YV)
        })), yV.forEach((eV => {
          let {
            edge: xV,
            label: JV
          } = eV;
          VV.setEdge(xV, JV)
        })), JV.nodes().forEach((eV => {
          if (eV === xV) return;
          let YV = JV.node(eV),
            UV = VV.node(eV);
          UV && YV && "number" == typeof YV.x && "number" == typeof YV.y && (UV.x = wV + (YV.x - vV), UV.y = ZV + (YV.y - rV))
        })), delete nV._dagreClusterSubgraph
      })), YV.forEach((eV => {
        var xV, JV;
        let YV = VV.node(eV),
          yV = UV[eV];
        if (YV && YV.rankdir && YV._dagreClusterSubgraph && yV) {
          let UV = YV._dagreClusterSubgraph,
            pV = null != (xV = YV.x) ? xV : 0,
            QV = null != (JV = YV.y) ? JV : 0,
            nV = (yV.minX + yV.maxX) / 2,
            wV = (yV.SY + yV.IY) / 2;
          UV.nodes().forEach((xV => {
            if (xV === eV) return;
            let JV = UV.node(xV),
              YV = VV.node(xV);
            if (YV && JV && "number" == typeof JV.x && "number" == typeof JV.y) {
              let VV = JV.x - nV,
                eV = JV.y - wV;
              YV.x = pV + VV, YV.y = QV + eV
            }
          })), delete YV._dagreClusterSubgraph
        }
      }))
    }

    function Ex(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var YV, UV;
      let yV = !1 !== (null == xV ? void 0 : xV.useDynamic),
        pV = yV && null != (YV = null == JV ? void 0 : JV.graph) ? YV : null,
        QV = yV && null != (UV = null == JV ? void 0 : JV.rawNodes) ? UV : null;
      eV("    makeSpaceForEdgeLabels", (() => function(VV) {
        let eV = VV.graph();
        eV.ranksep /= 2, VV.edges().forEach((xV => {
          var JV;
          let YV = VV.edge(xV);
          YV.minlen *= 2, "c" !== (null != (JV = YV.labelpos) ? JV : "r").toLowerCase() && ("TB" === eV.rankdir || "BT" === eV.rankdir ? YV.width += YV.labeloffset : YV.height += YV.labeloffset)
        }))
      }(VV))), eV("    removeSelfEdges", (() => function(VV) {
        VV.edges().forEach((eV => {
          if (eV.v === eV.w) {
            let xV = VV.node(eV.v);
            xV.selfEdges || (xV.selfEdges = []), xV.selfEdges.push({
              e: eV,
              label: VV.edge(eV)
            }), VV.removeEdge(eV)
          }
        }))
      }(VV))), eV("    acyclic", (() => re(VV, pV))), eV("    nestingGraph.run", (() => oe(VV))), eV("    rank", (() => De(LV(VV)))), eV("    injectEdgeLabelProxies", (() => function(VV) {
        VV.edges().forEach((eV => {
          let xV = VV.edge(eV);
          if (xV.width && xV.height) {
            let xV = VV.node(eV.v),
              JV = {
                rank: (VV.node(eV.w).rank - xV.rank) / 2 + xV.rank,
                e: eV
              };
            lV(VV, "edge-proxy", JV, "_ep")
          }
        }))
      }(VV))), eV("    removeEmptyRanks", (() => function(VV) {
        let eV = VV.nodes().map((eV => VV.node(eV).rank)).filter((VV => void 0 !== VV)),
          xV = uV(Math.min, eV),
          JV = [];
        VV.nodes().forEach((eV => {
          let YV = VV.node(eV).rank - xV;
          JV[YV] || (JV[YV] = []), JV[YV].push(eV)
        }));
        let YV = 0,
          UV = VV.graph().nodeRankFactor;
        Array.from(JV).forEach(((eV, xV) => {
          void 0 === eV && xV % UV !== 0 ? --YV : void 0 !== eV && YV && eV.forEach((eV => VV.node(eV).rank += YV))
        }))
      }(VV))), eV("    nestingGraph.cleanup", (() => function(VV) {
        let eV = VV.graph();
        VV.removeNode(eV.nestingRoot), delete eV.nestingRoot, VV.edges().forEach((eV => {
          VV.edge(eV).nestingEdge && VV.removeEdge(eV)
        }))
      }(VV))), eV("    normalizeRanks", (() => function(VV) {
        let eV = VV.nodes().map((eV => {
            let xV = VV.node(eV).rank;
            return void 0 === xV ? Number.MAX_VALUE : xV
          })),
          xV = uV(Math.min, eV);
        VV.nodes().forEach((eV => {
          let JV = VV.node(eV);
          Object.hasOwn(JV, "rank") && (JV.rank -= xV)
        }))
      }(VV))), eV("    assignRankMinMax", (() => function(VV) {
        let eV = 0;
        VV.nodes().forEach((xV => {
          let JV = VV.node(xV);
          JV.borderTop && (JV.minRank = VV.node(JV.borderTop).rank, JV.maxRank = VV.node(JV.borderBottom).rank, eV = Math.max(eV, JV.maxRank))
        })), VV.graph().maxRank = eV
      }(VV))), eV("    removeEdgeLabelProxies", (() => function(VV) {
        VV.nodes().forEach((eV => {
          let xV = VV.node(eV);
          if ("edge-proxy" === xV.dummy) {
            let JV = xV;
            VV.edge(JV.e).labelRank = xV.rank, VV.removeNode(eV)
          }
        }))
      }(VV))), eV("    normalize.run", (() => ke(VV))), eV("    parentDummyChains", (() => ae(VV))), eV("    addBorderSegments", (() => he(VV))), eV("    order", (() => xx(VV, xV, QV))), eV("    insertSelfEdges", (() => function(VV) {
        mV(VV).forEach((eV => {
          let xV = 0;
          eV.forEach(((eV, JV) => {
            let YV = VV.node(eV);
            "number" != typeof YV.rank && (YV.rank = 0), YV.order = JV + xV, (YV.selfEdges || []).forEach((eV => {
              lV(VV, "selfedge", {
                width: eV.label.width,
                height: eV.label.height,
                rank: YV.rank,
                order: JV + ++xV,
                e: eV.e,
                edgeLabel: eV.label
              }, "_se"), (!Array.isArray(eV.label.points) || 7 !== eV.label.points.length) && (eV.label.points = [{
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
            })), delete YV.selfEdges
          }))
        }))
      }(VV))), eV("    adjustCoordinateSystem", (() => function(VV) {
        var eV;
        let xV = null == (eV = VV.graph().rankdir) ? void 0 : eV.toLowerCase();
        ("lr" === xV || "rl" === xV) && fe(VV)
      }(VV))), eV("    position", (() => Zx(VV, xV.corePath))), eV("    positionSelfEdges", (() => function(VV) {
        VV.nodes().forEach((eV => {
          let xV = VV.node(eV),
            JV = VV => "number" == typeof VV && isFinite(VV);
          if ("selfedge" === xV.dummy) {
            let YV = xV,
              UV = VV.node(YV.e.v),
              yV = JV(null == UV ? void 0 : UV.x) ? UV.x : 0,
              pV = JV(null == UV ? void 0 : UV.y) ? UV.y : 0,
              QV = JV(null == UV ? void 0 : UV.width) ? UV.width : 0,
              nV = JV(null == UV ? void 0 : UV.height) ? UV.height : 0,
              wV = JV(xV.x) ? xV.x : yV,
              ZV = JV(xV.y) ? xV.y : pV,
              vV = QV / 2,
              rV = nV / 2;
            YV.edgeLabel.points = [{
              x: wV + vV,
              y: ZV - rV
            }, {
              x: wV + vV,
              y: ZV - rV
            }, {
              x: wV,
              y: ZV
            }, {
              x: wV - vV,
              y: ZV + rV
            }, {
              x: wV - vV,
              y: ZV + rV
            }, {
              x: wV,
              y: ZV
            }, {
              x: wV,
              y: ZV
            }], YV.edgeLabel.x = wV, YV.edgeLabel.y = ZV, VV.setEdge(YV.e, YV.edgeLabel), VV.removeNode(eV)
          } else xV && Array.isArray(xV.selfEdges) && xV.selfEdges.forEach((VV => {
            if (!Array.isArray(VV.label.points) || 7 !== VV.label.points.length) {
              let eV = JV(xV.x) ? xV.x : 0,
                YV = JV(xV.y) ? xV.y : 0,
                UV = (JV(xV.width) ? xV.width : 0) / 2,
                yV = (JV(xV.height) ? xV.height : 0) / 2;
              VV.label.points = [{
                x: eV + UV,
                y: YV - yV
              }, {
                x: eV + UV,
                y: YV - yV
              }, {
                x: eV,
                y: YV
              }, {
                x: eV - UV,
                y: YV + yV
              }, {
                x: eV - UV,
                y: YV + yV
              }, {
                x: eV,
                y: YV
              }, {
                x: eV,
                y: YV
              }]
            }
          }))
        }))
      }(VV)));
      let nV = JSON.parse(JSON.stringify(VV._nodes));
      return eV("    removeBorderNodes", (() => function(VV) {
        VV.nodes().forEach((eV => {
          if (VV.children(eV).length) {
            let xV = VV.node(eV),
              JV = VV.node(xV.borderTop),
              YV = VV.node(xV.borderBottom),
              UV = VV.node(xV.borderLeft[xV.borderLeft.length - 1]),
              yV = VV.node(xV.borderRight[xV.borderRight.length - 1]);
            xV.width = Math.abs(yV.x - UV.x), xV.height = Math.abs(YV.y - JV.y), xV.x = UV.x + xV.width / 2, xV.y = JV.y + xV.height / 2
          }
        })), VV.nodes().forEach((eV => {
          "border" === VV.node(eV).dummy && VV.removeNode(eV)
        }))
      }(VV))), eV("    normalize.undo", (() => function(VV) {
        VV.graph().dummyChains.forEach((eV => {
          let xV, JV = VV.node(eV),
            YV = JV.edgeLabel;
          for (VV.setEdge(JV.edgeObj, YV); JV.dummy;) xV = VV.successors(eV)[0], VV.removeNode(eV), YV.points.push({
            x: JV.x,
            y: JV.y
          }), "edge-label" === JV.dummy && (YV.x = JV.x, YV.y = JV.y, YV.width = JV.width, YV.height = JV.height), eV = xV, JV = VV.node(eV)
        }))
      }(VV))), eV("    fixupEdgeLabelCoords", (() => function(VV) {
        VV.edges().forEach((eV => {
          let xV = VV.edge(eV);
          if (Object.hasOwn(xV, "x")) switch (("l" === xV.labelpos || "r" === xV.labelpos) && (xV.width -= xV.labeloffset), xV.labelpos) {
            case "l":
              xV.x -= xV.width / 2 + xV.labeloffset;
              break;
            case "r":
              xV.x += xV.width / 2 + xV.labeloffset
          }
        }))
      }(VV))), eV("    undoCoordinateSystem", (() => Le(VV))), eV("    translateGraph", (() => function(VV) {
        let eV = Number.POSITIVE_INFINITY,
          xV = 0,
          JV = Number.POSITIVE_INFINITY,
          YV = 0,
          UV = VV.graph(),
          yV = UV.marginx || 0,
          pV = UV.marginy || 0;

        function QV(VV) {
          let UV = VV.x,
            yV = VV.y,
            pV = VV.width,
            QV = VV.height;
          eV = Math.min(eV, UV - pV / 2), xV = Math.max(xV, UV + pV / 2), JV = Math.min(JV, yV - QV / 2), YV = Math.max(YV, yV + QV / 2)
        }
        VV.nodes().forEach((eV => QV(VV.node(eV)))), VV.edges().forEach((eV => {
          let xV = VV.edge(eV);
          Object.hasOwn(xV, "x") && QV(xV)
        })), eV -= yV, JV -= pV, VV.nodes().forEach((xV => {
          let YV = VV.node(xV);
          YV.x -= eV, YV.y -= JV
        })), VV.edges().forEach((xV => {
          let YV = VV.edge(xV);
          YV.points.forEach((VV => {
            VV.x -= eV, VV.y -= JV
          })), Object.hasOwn(YV, "x") && (YV.x -= eV), Object.hasOwn(YV, "y") && (YV.y -= JV)
        })), UV.width = xV - eV + yV, UV.height = YV - JV + pV
      }(VV))), eV("    assignNodeIntersects", (() => function(VV) {
        VV.edges().forEach((eV => {
          if (eV.v === eV.w) return;
          let xV, JV, YV = VV.edge(eV),
            UV = VV.node(eV.v),
            yV = VV.node(eV.w);
          YV.points ? (xV = YV.points[0], JV = YV.points[YV.points.length - 1]) : (YV.points = [], xV = yV, JV = UV), YV.points.unshift(fV(UV, xV)), YV.points.push(fV(yV, JV))
        }))
      }(VV))), eV("    reversePoints", (() => function(VV) {
        VV.edges().forEach((eV => {
          let xV = VV.edge(eV);
          xV.reversed && xV.points.reverse()
        }))
      }(VV))), eV("    acyclic.undo", (() => function(VV) {
        VV.edges().forEach((eV => {
          let xV = VV.edge(eV);
          if (xV.reversed) {
            VV.removeEdge(eV);
            let JV = xV.forwardName;
            delete xV.reversed, delete xV.forwardName, VV.setEdge(eV.w, eV.v, xV, JV)
          }
        }))
      }(VV))), {
        graph: VV,
        rawNodes: nV
      }
    }

    function Bx(VV, eV) {
      VV.nodes().forEach((xV => {
        let JV = VV.node(xV),
          YV = eV.node(xV);
        JV && (JV.x = YV.x, JV.y = YV.y, JV.order = YV.order, JV.rank = YV.rank, eV.children(xV).length && (JV.width = YV.width, JV.height = YV.height))
      })), VV.edges().forEach((xV => {
        let JV = VV.edge(xV),
          YV = eV.edge(xV);
        JV.points = YV.points, Object.hasOwn(YV, "x") && (JV.x = YV.x, JV.y = YV.y)
      })), VV.graph().width = eV.graph().width, VV.graph().height = eV.graph().height
    }
    var jx = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      qx = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      tx = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Fx = ["width", "height", "rank"],
      Tx = {
        width: 0,
        height: 0
      },
      Px = ["minlen", "weight", "width", "height", "labeloffset"],
      Ax = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Nx = ["labelpos"];

    function Xx(VV) {
      let eV = new hV({
          multigraph: !0,
          compound: !0
        }),
        xV = zx(VV.graph());
      return eV.setGraph(Object.assign({}, qx, Mx(xV, jx), ee(xV, tx))), VV.nodes().forEach((xV => {
        let JV = Mx(zx(VV.node(xV)), Fx);
        Object.keys(Tx).forEach((VV => {
          void 0 === JV[VV] && (JV[VV] = Tx[VV])
        })), eV.setNode(xV, JV);
        let YV = VV.parent(xV);
        void 0 !== YV && eV.setParent(xV, YV)
      })), VV.edges().forEach((xV => {
        let JV = zx(VV.edge(xV));
        eV.setEdge(xV, Object.assign({}, Ax, Mx(JV, Px), ee(JV, Nx)))
      })), eV
    }

    function Mx(VV, eV) {
      return xe(ee(VV, eV), Number)
    }

    function zx(VV) {
      let eV = {};
      return VV && Object.entries(VV).forEach((VV => {
        let [xV, JV] = VV;
        "string" == typeof xV && (xV = xV.toLowerCase()), eV[xV] = JV
      })), eV
    }

    function Gx(VV) {
      let eV = mV(VV),
        xV = new hV({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return VV.nodes().forEach((eV => {
        xV.setNode(eV, {
          label: eV
        }), xV.setParent(eV, "layer" + VV.node(eV).rank)
      })), VV.edges().forEach((VV => xV.setEdge(VV.v, VV.w, {}, VV.name))), eV.forEach(((VV, eV) => {
        let JV = "layer" + eV;
        xV.setNode(JV, {
          rank: "same"
        }), VV.reduce(((VV, eV) => (xV.setEdge(VV, eV, {
          style: "invis"
        }), eV)))
      })), xV
    }
    var Wx = {
        time: SV,
        notime: IV
      },
      Rx = {
        graphlib: UV,
        version: Ue,
        layout: rx,
        debug: Gx,
        util: {
          time: SV,
          notime: IV
        }
      }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);