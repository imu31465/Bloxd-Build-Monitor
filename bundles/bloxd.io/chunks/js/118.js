/*! For license information please see tz47m9.118.7626c30c.chunk.js.LICENSE.txt */
export const id = 118;
export const ids = [118];
export const modules = {
  6486: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      Graph: () => yD,
      debug: () => bw,
      default: () => dw,
      graphlib: () => KD,
      layout: () => Iw,
      util: () => jw,
      version: () => Kz
    });
    var pD = Object.defineProperty,
      sD = (DD, zD, wD) => ((DD, zD, wD) => zD in DD ? pD(DD, zD, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: wD
      }) : DD[zD] = wD)(DD, "symbol" != typeof zD ? zD + "" : zD, wD),
      KD = {};
    ((DD, zD) => {
      for (var wD in zD) pD(DD, wD, {
        get: zD[wD],
        enumerable: !0
      })
    })(KD, {
      Graph: () => yD,
      alg: () => hD
    });
    var rD = Object.defineProperty,
      LD = (DD, zD) => {
        for (var wD in zD) rD(DD, wD, {
          get: zD[wD],
          enumerable: !0
        })
      },
      cD = class {
        constructor(DD) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, DD && (this._isDirected = !("directed" in DD) || DD.directed, this._isMultigraph = "multigraph" in DD && DD.multigraph, this._isCompound = "compound" in DD && DD.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(DD) {
          return this._label = DD, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(DD) {
          return this._defaultNodeLabelFn = "function" != typeof DD ? () => DD : DD, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((DD => 0 === Object.keys(this._in[DD]).length))
        }
        sinks() {
          return this.nodes().filter((DD => 0 === Object.keys(this._out[DD]).length))
        }
        setNodes(DD, zD) {
          return DD.forEach((DD => {
            void 0 !== zD ? this.setNode(DD, zD) : this.setNode(DD)
          })), this
        }
        setNode(DD, zD) {
          return DD in this._nodes ? (arguments.length > 1 && (this._nodes[DD] = zD), this) : (this._nodes[DD] = arguments.length > 1 ? zD : this._defaultNodeLabelFn(DD), this._isCompound && (this._parent[DD] = "\0", this._children[DD] = {}, this._children["\0"][DD] = !0), this._in[DD] = {}, this._preds[DD] = {}, this._out[DD] = {}, this._sucs[DD] = {}, ++this._nodeCount, this)
        }
        node(DD) {
          return this._nodes[DD]
        }
        hasNode(DD) {
          return DD in this._nodes
        }
        removeNode(DD) {
          if (DD in this._nodes) {
            let zD = DD => this.removeEdge(this._edgeObjs[DD]);
            delete this._nodes[DD], this._isCompound && (this._removeFromParentsChildList(DD), delete this._parent[DD], this.children(DD).forEach((DD => {
              this.setParent(DD)
            })), delete this._children[DD]), Object.keys(this._in[DD]).forEach(zD), delete this._in[DD], delete this._preds[DD], Object.keys(this._out[DD]).forEach(zD), delete this._out[DD], delete this._sucs[DD], --this._nodeCount
          }
          return this
        }
        setParent(DD, zD) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === zD) zD = "\0";
          else {
            for (let wD = zD += ""; void 0 !== wD; wD = this.parent(wD))
              if (wD === DD) throw new Error("Setting " + zD + " as parent of " + DD + " would create a cycle");
            this.setNode(zD)
          }
          return this.setNode(DD), this._removeFromParentsChildList(DD), this._parent[DD] = zD, this._children[zD][DD] = !0, this
        }
        parent(DD) {
          if (this._isCompound) {
            let zD = this._parent[DD];
            if ("\0" !== zD) return zD
          }
        }
        children() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let zD = this._children[DD];
            if (zD) return Object.keys(zD)
          } else {
            if ("\0" === DD) return this.nodes();
            if (this.hasNode(DD)) return []
          }
          return []
        }
        predecessors(DD) {
          let zD = this._preds[DD];
          if (zD) return Object.keys(zD)
        }
        successors(DD) {
          let zD = this._sucs[DD];
          if (zD) return Object.keys(zD)
        }
        neighbors(DD) {
          let zD = this.predecessors(DD);
          if (zD) {
            let wD = new Set(zD),
              pD = this.successors(DD);
            if (pD)
              for (let DD of pD) wD.add(DD);
            return Array.from(wD.values())
          }
        }
        isLeaf(DD) {
          var zD;
          let wD;
          return wD = this.isDirected() ? this.successors(DD) : this.neighbors(DD), 0 === (null != (zD = null == wD ? void 0 : wD.length) ? zD : 0)
        }
        filterNodes(DD) {
          let zD = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          zD.setGraph(this.graph()), Object.entries(this._nodes).forEach((wD => {
            let [pD, sD] = wD;
            DD(pD) && zD.setNode(pD, sD)
          })), Object.values(this._edgeObjs).forEach((DD => {
            zD.hasNode(DD.v) && zD.hasNode(DD.w) && zD.setEdge(DD, this.edge(DD))
          }));
          let wD = {},
            pD = DD => {
              let sD = this.parent(DD);
              return !sD || zD.hasNode(sD) ? (wD[DD] = sD, sD) : sD in wD ? wD[sD] : pD(sD)
            };
          return this._isCompound && zD.nodes().forEach((DD => zD.setParent(DD, pD(DD)))), zD
        }
        setDefaultEdgeLabel(DD) {
          return this._defaultEdgeLabelFn = "function" != typeof DD ? () => DD : DD, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(DD, zD) {
          return DD.reduce(((DD, wD) => (void 0 !== zD ? this.setEdge(DD, wD, zD) : this.setEdge(DD, wD), wD))), this
        }
        setEdge(DD, zD, wD, pD) {
          let sD, KD, rD, LD, cD = !1;
          "object" == typeof DD && null !== DD && "v" in DD ? (sD = DD.v, KD = DD.w, rD = DD.name, 2 === arguments.length && (LD = zD, cD = !0)) : (sD = DD, KD = zD, rD = pD, arguments.length > 2 && (LD = wD, cD = !0)), sD = "" + sD, KD = "" + KD, void 0 !== rD && (rD = "" + rD);
          let RD = AD(this._isDirected, sD, KD, rD);
          if (RD in this._edgeLabels) return cD && (this._edgeLabels[RD] = LD), this;
          if (void 0 !== rD && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(sD), this.setNode(KD), this._edgeLabels[RD] = cD ? LD : this._defaultEdgeLabelFn(sD, KD, rD);
          let UD = function(DD, zD, wD, pD) {
            let sD = "" + zD,
              KD = "" + wD;
            if (!DD && sD > KD) {
              let DD = sD;
              sD = KD, KD = DD
            }
            let rD = {
              v: sD,
              w: KD
            };
            return pD && (rD.name = pD), rD
          }(this._isDirected, sD, KD, rD);
          return sD = UD.v, KD = UD.w, Object.freeze(UD), this._edgeObjs[RD] = UD, gD(this._preds[KD], sD), gD(this._sucs[sD], KD), this._in[KD][RD] = UD, this._out[sD][RD] = UD, this._edgeCount++, this
        }
        edge(DD, zD, wD) {
          let pD = 1 === arguments.length ? UD(this._isDirected, DD) : AD(this._isDirected, DD, zD, wD);
          return this._edgeLabels[pD]
        }
        edgeAsObj(DD, zD, wD) {
          let pD = 1 === arguments.length ? this.edge(DD) : this.edge(DD, zD, wD);
          return "object" != typeof pD || null === pD ? {
            label: pD
          } : pD
        }
        hasEdge(DD, zD, wD) {
          return (1 === arguments.length ? UD(this._isDirected, DD) : AD(this._isDirected, DD, zD, wD)) in this._edgeLabels
        }
        removeEdge(DD, zD, wD) {
          let pD = 1 === arguments.length ? UD(this._isDirected, DD) : AD(this._isDirected, DD, zD, wD),
            sD = this._edgeObjs[pD];
          if (sD) {
            let DD = sD.v,
              zD = sD.w;
            delete this._edgeLabels[pD], delete this._edgeObjs[pD], RD(this._preds[zD], DD), RD(this._sucs[DD], zD), delete this._in[zD][pD], delete this._out[DD][pD], this._edgeCount--
          }
          return this
        }
        inEdges(DD, zD) {
          return this.isDirected() ? this.filterEdges(this._in[DD], DD, zD) : this.nodeEdges(DD, zD)
        }
        outEdges(DD, zD) {
          return this.isDirected() ? this.filterEdges(this._out[DD], DD, zD) : this.nodeEdges(DD, zD)
        }
        nodeEdges(DD, zD) {
          if (DD in this._nodes) return this.filterEdges({
            ...this._in[DD],
            ...this._out[DD]
          }, DD, zD)
        }
        _removeFromParentsChildList(DD) {
          delete this._children[this._parent[DD]][DD]
        }
        filterEdges(DD, zD, wD) {
          if (!DD) return;
          let pD = Object.values(DD);
          return wD ? pD.filter((DD => DD.v === zD && DD.w === wD || DD.v === wD && DD.w === zD)) : pD
        }
      };

    function gD(DD, zD) {
      DD[zD] ? DD[zD]++ : DD[zD] = 1
    }

    function RD(DD, zD) {
      void 0 !== DD[zD] && !--DD[zD] && delete DD[zD]
    }

    function AD(DD, zD, wD, pD) {
      let sD = "" + zD,
        KD = "" + wD;
      if (!DD && sD > KD) {
        let DD = sD;
        sD = KD, KD = DD
      }
      return sD + "\x01" + KD + "\x01" + (void 0 === pD ? "\0" : pD)
    }

    function UD(DD, zD) {
      return AD(DD, zD.v, zD.w, zD.name)
    }

    function fD(DD) {
      let zD = {
          options: {
            directed: DD.isDirected(),
            multigraph: DD.isMultigraph(),
            compound: DD.isCompound()
          },
          nodes: ID(DD),
          edges: BD(DD)
        },
        wD = DD.graph();
      return void 0 !== wD && (zD.value = structuredClone(wD)), zD
    }

    function ID(DD) {
      return DD.nodes().map((zD => {
        let wD = DD.node(zD),
          pD = DD.parent(zD),
          sD = {
            v: zD
          };
        return void 0 !== wD && (sD.value = wD), void 0 !== pD && (sD.parent = pD), sD
      }))
    }

    function BD(DD) {
      return DD.edges().map((zD => {
        let wD = DD.edge(zD),
          pD = {
            v: zD.v,
            w: zD.w
          };
        return void 0 !== zD.name && (pD.name = zD.name), void 0 !== wD && (pD.value = wD), pD
      }))
    }

    function GD(DD) {
      let zD = new cD(DD.options);
      return void 0 !== DD.value && zD.setGraph(DD.value), DD.nodes.forEach((DD => {
        zD.setNode(DD.v, DD.value), DD.parent && zD.setParent(DD.v, DD.parent)
      })), DD.edges.forEach((DD => {
        zD.setEdge({
          v: DD.v,
          w: DD.w,
          name: DD.name
        }, DD.value)
      })), zD
    }
    LD({}, {
      read: () => GD,
      write: () => fD
    });
    var hD = {};
    LD(hD, {
      CycleException: () => TD,
      bellmanFord: () => MD,
      components: () => OD,
      dijkstra: () => QD,
      dijkstraAll: () => XD,
      findCycles: () => PD,
      floydWarshall: () => xD,
      isAcyclic: () => jD,
      postorder: () => lD,
      preorder: () => WD,
      prim: () => ND,
      shortestPaths: () => ZD,
      tarjan: () => VD,
      topsort: () => bD
    });
    var nD = () => 1;

    function MD(DD, zD, wD, pD) {
      return function(DD, zD, wD, pD) {
        let sD, KD = {},
          rD = 0,
          LD = DD.nodes(),
          cD = function(DD) {
            let zD = KD[DD.v],
              pD = KD[DD.w];
            if (!zD || !pD) return;
            let rD = wD(DD);
            zD.distance + rD < pD.distance && (KD[DD.w] = {
              distance: zD.distance + rD,
              predecessor: DD.v
            }, sD = !0)
          },
          gD = function() {
            LD.forEach((function(DD) {
              pD(DD).forEach((function(zD) {
                let wD = zD.v === DD ? zD.v : zD.w,
                  pD = wD === zD.v ? zD.w : zD.v;
                cD({
                  v: wD,
                  w: pD
                })
              }))
            }))
          };
        LD.forEach((function(DD) {
          let wD = DD === zD ? 0 : Number.POSITIVE_INFINITY;
          KD[DD] = {
            distance: wD,
            predecessor: ""
          }
        }));
        let RD = LD.length;
        for (let AD = 1; AD < RD && (sD = !1, rD++, gD(), sD); AD++);
        if (rD === RD - 1 && (sD = !1, gD(), sD)) throw new Error("The graph contains a negative weight cycle");
        return KD
      }(DD, String(zD), wD || nD, pD || function(zD) {
        var wD;
        return null != (wD = DD.outEdges(zD)) ? wD : []
      })
    }

    function OD(DD) {
      let zD, wD = {},
        pD = [];

      function sD(pD) {
        var KD, rD;
        pD in wD || (wD[pD] = !0, zD.push(pD), null == (KD = DD.successors(pD)) || KD.forEach(sD), null == (rD = DD.predecessors(pD)) || rD.forEach(sD))
      }
      return DD.nodes().forEach((function(DD) {
        zD = [], sD(DD), zD.length && pD.push(zD)
      })), pD
    }
    var JD = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((DD => DD.key))
        }
        has(DD) {
          return DD in this._keyIndices
        }
        priority(DD) {
          let zD = this._keyIndices[DD];
          if (void 0 !== zD) return this._arr[zD].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(DD, zD) {
          let wD = this._keyIndices,
            pD = String(DD);
          if (!(pD in wD)) {
            let DD = this._arr,
              sD = DD.length;
            return wD[pD] = sD, DD.push({
              key: pD,
              priority: zD
            }), this._decrease(sD), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let DD = this._arr.pop();
          return delete this._keyIndices[DD.key], this._heapify(0), DD.key
        }
        decrease(DD, zD) {
          let wD = this._keyIndices[DD];
          if (void 0 === wD) throw new Error(`Key not found: ${DD}`);
          let pD = this._arr[wD].priority;
          if (zD > pD) throw new Error(`New priority is greater than current priority. Key: ${DD} Old: ${pD} New: ${zD}`);
          this._arr[wD].priority = zD, this._decrease(wD)
        }
        _heapify(DD) {
          let zD = this._arr,
            wD = 2 * DD,
            pD = wD + 1,
            sD = DD;
          wD < zD.length && (sD = zD[wD].priority < zD[sD].priority ? wD : sD, pD < zD.length && (sD = zD[pD].priority < zD[sD].priority ? pD : sD), sD !== DD && (this._swap(DD, sD), this._heapify(sD)))
        }
        _decrease(DD) {
          let zD, wD = this._arr,
            pD = wD[DD].priority;
          for (; 0 !== DD && (zD = DD >> 1, !(wD[zD].priority < pD));) this._swap(DD, zD), DD = zD
        }
        _swap(DD, zD) {
          let wD = this._arr,
            pD = this._keyIndices,
            sD = wD[DD],
            KD = wD[zD];
          wD[DD] = KD, wD[zD] = sD, pD[KD.key] = DD, pD[sD.key] = zD
        }
      },
      ED = () => 1;

    function QD(DD, zD, wD, pD) {
      return function(DD, zD, wD, pD) {
        let sD, KD, rD = {},
          LD = new JD,
          cD = function(DD) {
            let zD = DD.v !== sD ? DD.v : DD.w,
              pD = rD[zD];
            if (!pD) return;
            let cD = wD(DD),
              gD = KD.distance + cD;
            if (cD < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + DD + " Weight: " + cD);
            gD < pD.distance && (pD.distance = gD, pD.predecessor = sD, LD.decrease(zD, gD))
          };
        for (DD.nodes().forEach((function(DD) {
            let wD = DD === zD ? 0 : Number.POSITIVE_INFINITY;
            rD[DD] = {
              distance: wD,
              predecessor: ""
            }, LD.add(DD, wD)
          })); LD.size() > 0;) {
          sD = LD.removeMin();
          let DD = rD[sD];
          if (!DD || DD.distance === Number.POSITIVE_INFINITY) break;
          KD = DD, pD(sD).forEach(cD)
        }
        return rD
      }(DD, String(zD), wD || ED, pD || function(zD) {
        var wD;
        return null != (wD = DD.outEdges(zD)) ? wD : []
      })
    }

    function XD(DD, zD, wD) {
      return DD.nodes().reduce((function(pD, sD) {
        return pD[sD] = QD(DD, sD, zD, wD), pD
      }), {})
    }

    function VD(DD) {
      let zD = 0,
        wD = [],
        pD = {},
        sD = [];

      function KD(rD) {
        var LD;
        let cD = pD[rD] = {
          onStack: !0,
          lowlink: zD,
          index: zD++
        };
        if (wD.push(rD), null == (LD = DD.successors(rD)) || LD.forEach((function(DD) {
            if (DD in pD) {
              let zD = pD[DD];
              null != zD && zD.onStack && (cD.lowlink = Math.min(cD.lowlink, zD.index))
            } else {
              KD(DD);
              let zD = pD[DD];
              zD && (cD.lowlink = Math.min(cD.lowlink, zD.lowlink))
            }
          })), cD.lowlink === cD.index) {
          let DD, zD = [];
          do {
            DD = wD.pop();
            let sD = pD[DD];
            sD && (sD.onStack = !1), zD.push(DD)
          } while (rD !== DD);
          sD.push(zD)
        }
      }
      return DD.nodes().forEach((function(DD) {
        DD in pD || KD(DD)
      })), sD
    }

    function PD(DD) {
      return VD(DD).filter((function(zD) {
        var wD;
        let pD = zD[0];
        return !!pD && (zD.length > 1 || 1 === zD.length && (null != (wD = DD.outEdges(pD, pD)) ? wD : []).length > 0)
      }))
    }
    var CD = () => 1;

    function xD(DD, zD, wD) {
      return function(DD, zD, wD) {
        let pD = {},
          sD = DD.nodes();
        return sD.forEach((function(DD) {
          let KD = {};
          pD[DD] = KD, KD[DD] = {
            distance: 0,
            predecessor: ""
          }, sD.forEach((function(zD) {
            DD !== zD && (KD[zD] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), wD(DD).forEach((function(wD) {
            let pD = wD.v === DD ? wD.w : wD.v,
              sD = zD(wD);
            KD[pD] = {
              distance: sD,
              predecessor: DD
            }
          }))
        })), sD.forEach((function(DD) {
          let zD = pD[DD];
          zD && sD.forEach((function(wD) {
            let KD = pD[wD];
            KD && sD.forEach((function(wD) {
              let pD = KD[DD],
                sD = zD[wD],
                rD = KD[wD];
              if (pD && sD && rD) {
                let DD = pD.distance + sD.distance;
                DD < rD.distance && (rD.distance = DD, rD.predecessor = sD.predecessor)
              }
            }))
          }))
        })), pD
      }(DD, zD || CD, wD || function(zD) {
        var wD;
        return null != (wD = DD.outEdges(zD)) ? wD : []
      })
    }
    var TD = class extends Error {
      constructor(DD) {
        super(DD), this.name = "CycleException"
      }
    };

    function bD(DD) {
      let zD = {},
        wD = {},
        pD = [];
      if (DD.sinks().forEach((function sD(KD) {
          var rD;
          if (KD in wD) throw new TD;
          KD in zD || (wD[KD] = !0, zD[KD] = !0, null == (rD = DD.predecessors(KD)) || rD.forEach(sD), delete wD[KD], pD.push(KD))
        })), Object.keys(zD).length !== DD.nodeCount()) throw new TD;
      return pD
    }

    function jD(DD) {
      try {
        bD(DD)
      } catch (zD) {
        if (zD instanceof TD) return !1;
        throw zD
      }
      return !0
    }

    function dD(DD, zD, wD, pD, sD) {
      Array.isArray(zD) || (zD = [zD]);
      let KD = zD => {
          var wD;
          return null != (wD = DD.isDirected() ? DD.successors(zD) : DD.neighbors(zD)) ? wD : []
        },
        rD = {};
      return zD.forEach((function(zD) {
        if (!DD.hasNode(zD)) throw new Error("Graph does not have node: " + zD);
        sD = SD(DD, zD, "post" === wD, rD, KD, pD, sD)
      })), sD
    }

    function SD(DD, zD, wD, pD, sD, KD, rD) {
      return zD in pD || (pD[zD] = !0, wD || (rD = KD(rD, zD)), sD(zD).forEach((function(zD) {
        rD = SD(DD, zD, wD, pD, sD, KD, rD)
      })), wD && (rD = KD(rD, zD))), rD
    }

    function iD(DD, zD, wD) {
      return dD(DD, zD, wD, (function(DD, zD) {
        return DD.push(zD), DD
      }), [])
    }

    function lD(DD, zD) {
      return iD(DD, zD, "post")
    }

    function WD(DD, zD) {
      return iD(DD, zD, "pre")
    }

    function ND(DD, zD) {
      var wD;
      let pD, sD = new cD,
        KD = {},
        rD = new JD;

      function LD(DD) {
        let wD = DD.v === pD ? DD.w : DD.v,
          sD = rD.priority(wD);
        if (void 0 !== sD) {
          let LD = zD(DD);
          LD < sD && (KD[wD] = pD, rD.decrease(wD, LD))
        }
      }
      if (0 === DD.nodeCount()) return sD;
      DD.nodes().forEach((function(DD) {
        rD.add(DD, Number.POSITIVE_INFINITY), sD.setNode(DD)
      }));
      let gD = DD.nodes()[0];
      void 0 !== gD && rD.decrease(gD, 0);
      let RD = !1;
      for (; rD.size() > 0;) {
        if (pD = rD.removeMin(), pD in KD) sD.setEdge(pD, KD[pD]);
        else {
          if (RD) throw new Error("Input graph is not connected: " + DD);
          RD = !0
        }
        null == (wD = DD.nodeEdges(pD)) || wD.forEach(LD)
      }
      return sD
    }

    function ZD(DD, zD, wD, pD) {
      return function(DD, zD, wD, pD) {
        if (void 0 === wD) return QD(DD, zD, wD, pD);
        let sD = !1,
          KD = DD.nodes();
        for (let rD = 0; rD < KD.length; rD++) {
          let LD = KD[rD];
          if (void 0 === LD) continue;
          let cD = pD(LD);
          for (let DD = 0; DD < cD.length; DD++) {
            let zD = cD[DD];
            if (!zD) continue;
            let pD = zD.v === LD ? zD.v : zD.w;
            wD({
              v: pD,
              w: pD === zD.v ? zD.w : zD.v
            }) < 0 && (sD = !0)
          }
          if (sD) return MD(DD, zD, wD, pD)
        }
        return QD(DD, zD, wD, pD)
      }(DD, zD, wD, null != pD ? pD : zD => {
        var wD;
        return null != (wD = DD.outEdges(zD)) ? wD : []
      })
    }
    var yD = cD;

    function kD(DD, zD, wD, pD) {
      let sD = pD;
      for (; DD.hasNode(sD);) sD = qD(pD);
      return wD.dummy = zD, DD.setNode(sD, wD), sD
    }

    function mD(DD) {
      let zD = new yD({
        multigraph: DD.isMultigraph()
      }).setGraph(DD.graph());
      return DD.nodes().forEach((wD => {
        DD.children(wD).length || zD.setNode(wD, DD.node(wD))
      })), DD.edges().forEach((wD => {
        zD.setEdge(wD, DD.edge(wD))
      })), zD
    }

    function eD(DD, zD) {
      let wD, pD, sD = DD.x,
        KD = DD.y,
        rD = zD.x - sD,
        LD = zD.y - KD,
        cD = DD.width / 2,
        gD = DD.height / 2;
      if (!rD && !LD) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(LD) * cD > Math.abs(rD) * gD ? (LD < 0 && (gD = -gD), wD = gD * rD / LD, pD = gD) : (rD < 0 && (cD = -cD), wD = cD, pD = cD * LD / rD), {
        x: sD + wD,
        y: KD + pD
      }
    }

    function oD(DD) {
      let zD = Dz(tD(DD) + 1).map((() => []));
      return DD.nodes().forEach((wD => {
        let pD = DD.node(wD),
          sD = pD.rank;
        void 0 !== sD && (zD[sD] || (zD[sD] = []), zD[sD][pD.order] = wD)
      })), zD
    }

    function aD(DD, zD, wD, pD) {
      let sD = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (sD.rank = wD, sD.order = pD), kD(DD, "border", sD, zD)
    }
    var uD = 65535;

    function vD(DD, zD) {
      if (zD.length > uD) {
        let wD = function(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uD,
            wD = [];
          for (let pD = 0; pD < DD.length; pD += zD) {
            let sD = DD.slice(pD, pD + zD);
            wD.push(sD)
          }
          return wD
        }(zD);
        return DD(...wD.map((zD => DD(...zD))))
      }
      return DD(...zD)
    }

    function tD(DD) {
      let zD = DD.nodes().map((zD => {
        let wD = DD.node(zD).rank;
        return void 0 === wD ? Number.MIN_VALUE : wD
      }));
      return vD(Math.max, zD)
    }

    function FD(DD, zD) {
      let wD = Date.now();
      try {
        return zD()
      } finally {
        console.log(DD + " time: " + (Date.now() - wD) + "ms")
      }
    }

    function YD(DD, zD) {
      return zD()
    }
    var HD = 0;

    function qD(DD) {
      return DD + "" + ++HD
    }

    function Dz(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == zD && (zD = DD, DD = 0);
      let pD = DD => DD < zD;
      wD < 0 && (pD = DD => zD < DD);
      let sD = [];
      for (let KD = DD; pD(KD); KD += wD) sD.push(KD);
      return sD
    }

    function zz(DD, zD) {
      let wD = {};
      for (let pD of zD) void 0 !== DD[pD] && (wD[pD] = DD[pD]);
      return wD
    }

    function wz(DD, zD) {
      let wD;
      return wD = "string" == typeof zD ? DD => DD[zD] : zD, Object.entries(DD).reduce(((DD, zD) => {
        let [pD, sD] = zD;
        return DD[pD] = wD(sD, pD), DD
      }), {})
    }
    var pz = "\0";

    function sz(DD, zD, wD) {
      var pD, sD, KD, rD, LD, cD;
      if (!(DD && zD && wD && "edge" === zD.dummy && "edge" === wD.dummy && zD.edgeObj && wD.edgeObj && DD[zD.edgeObj.v] && DD[wD.edgeObj.v] && DD[zD.edgeObj.w] && DD[wD.edgeObj.w])) return 0;
      let gD = !0;
      zD.edgeObj.w === wD.edgeObj.w && (gD = !1);
      let RD = gD ? null != (sD = null == (pD = DD[zD.edgeObj.v]) ? void 0 : pD.rank) ? sD : NaN : null != (rD = null == (KD = DD[zD.edgeObj.w]) ? void 0 : KD.rank) ? rD : NaN,
        AD = Object.entries(DD).find((DD => {
          var wD, pD;
          return (null == (wD = DD[1].edgeObj) ? void 0 : wD.v) === zD.edgeObj.v && (null == (pD = DD[1].edgeObj) ? void 0 : pD.w) === zD.edgeObj.w && DD[1].rank === RD
        })),
        UD = Object.entries(DD).find((DD => {
          var zD, pD;
          return (null == (zD = DD[1].edgeObj) ? void 0 : zD.v) === wD.edgeObj.v && (null == (pD = DD[1].edgeObj) ? void 0 : pD.w) === wD.edgeObj.w && DD[1].rank === RD
        }));
      if (!AD || !UD) return 0;
      let fD = null != (LD = AD[1].order) ? LD : NaN,
        ID = null != (cD = UD[1].order) ? cD : NaN;
      return isNaN(fD - ID) ? 0 : fD - ID
    }
    var Kz = "3.1.1";

    function rz(DD) {
      DD._prev._next = DD._next, DD._next._prev = DD._prev, delete DD._next, delete DD._prev
    }

    function Lz(DD, zD) {
      if ("_next" !== DD && "_prev" !== DD) return zD
    }
    var cz = class {
        constructor() {
          sD(this, "_sentinel");
          let DD = {};
          DD._next = DD._prev = DD, this._sentinel = DD
        }
        dequeue() {
          let DD = this._sentinel,
            zD = DD._prev;
          if (zD !== DD) return rz(zD), zD
        }
        enqueue(DD) {
          let zD = this._sentinel;
          DD._prev && DD._next && rz(DD), DD._next = zD._next, zD._next._prev = DD, zD._next = DD, DD._prev = zD
        }
        toString() {
          let DD = [],
            zD = this._sentinel,
            wD = zD._prev;
          for (; wD !== zD;) DD.push(JSON.stringify(wD, Lz)), wD = wD._prev;
          return "[" + DD.join(", ") + "]"
        }
      },
      gz = () => 1;

    function Rz(DD, zD) {
      if (DD.nodeCount() <= 1) return [];
      let wD = function(DD, zD) {
        let wD = new yD,
          pD = 0,
          sD = 0;
        DD.nodes().forEach((DD => {
          wD.setNode(DD, {
            v: DD,
            in: 0,
            out: 0
          })
        })), DD.edges().forEach((DD => {
          let KD = wD.edge(DD.v, DD.w) || 0,
            rD = zD(DD),
            LD = KD + rD;
          wD.setEdge(DD.v, DD.w, LD);
          let cD = wD.node(DD.v),
            gD = wD.node(DD.w);
          sD = Math.max(sD, cD.out += rD), pD = Math.max(pD, gD.in += rD)
        }));
        let KD = function(DD) {
            let zD = [];
            for (let wD = 0; wD < DD; wD++) zD.push(wD);
            return zD
          }(sD + pD + 3).map((() => new cz)),
          rD = pD + 1;
        return wD.nodes().forEach((DD => {
          Uz(KD, rD, wD.node(DD))
        })), {
          graph: wD,
          buckets: KD,
          zeroIdx: rD
        }
      }(DD, zD || gz);
      return function(DD, zD, wD) {
        var pD;
        let sD, KD = [],
          rD = zD[zD.length - 1],
          LD = zD[0];
        for (; DD.nodeCount();) {
          for (; sD = LD.dequeue();) Az(DD, zD, wD, sD);
          for (; sD = rD.dequeue();) Az(DD, zD, wD, sD);
          if (DD.nodeCount())
            for (let rD = zD.length - 2; rD > 0; --rD)
              if (sD = null == (pD = zD[rD]) ? void 0 : pD.dequeue(), sD) {
                KD = KD.concat(Az(DD, zD, wD, sD, !0) || []);
                break
              }
        }
        return KD
      }(wD.graph, wD.buckets, wD.zeroIdx).flatMap((zD => DD.outEdges(zD.v, zD.w) || []))
    }

    function Az(DD, zD, wD, pD, sD) {
      let KD = [],
        rD = sD ? KD : void 0;
      return (DD.inEdges(pD.v) || []).forEach((pD => {
        let rD = DD.edge(pD),
          LD = DD.node(pD.v);
        sD && KD.push({
          v: pD.v,
          w: pD.w
        }), LD.out -= rD, Uz(zD, wD, LD)
      })), (DD.outEdges(pD.v) || []).forEach((pD => {
        let sD = DD.edge(pD),
          KD = pD.w,
          rD = DD.node(KD);
        rD.in -= sD, Uz(zD, wD, rD)
      })), DD.removeNode(pD.v), rD
    }

    function Uz(DD, zD, wD) {
      var pD, sD, KD;
      wD.out ? wD.in ? null == (KD = DD[wD.out - wD.in + zD]) || KD.enqueue(wD) : null == (sD = DD[DD.length - 1]) || sD.enqueue(wD) : null == (pD = DD[0]) || pD.enqueue(wD)
    }

    function fz(DD, zD) {
      var wD;
      ("greedy" === DD.graph().acyclicer ? Rz(DD, (wD = DD, DD => wD.edge(DD).weight)) : function(DD, zD) {
        let wD = [],
          pD = {},
          sD = {};

        function KD(zD) {
          Object.hasOwn(sD, zD) || (sD[zD] = !0, pD[zD] = !0, DD.outEdges(zD).forEach((DD => {
            Object.hasOwn(pD, DD.w) ? wD.push(DD) : KD(DD.w)
          })), delete pD[zD])
        }

        function rD(KD) {
          var LD;
          Object.hasOwn(sD, KD) || (sD[KD] = !0, pD[KD] = !0, null == (LD = DD.outEdges(KD)) || LD.forEach((sD => {
            var LD, cD;
            Object.hasOwn(pD, sD.w) || (null == (LD = zD.node(KD)) ? void 0 : LD.rank) > (null == (cD = zD.node(sD.w)) ? void 0 : cD.rank) && function(DD, zD, wD) {
              let pD = new Set;

              function sD(zD) {
                var KD;
                if (DD.sources().includes(zD)) return !0;
                pD.add(zD);
                for (let rD of null != (KD = DD.inEdges(zD)) ? KD : [])
                  if ((rD.v !== wD.v || rD.w !== wD.w) && !pD.has(rD.v) && sD(rD.v)) return !0;
                return !1
              }
              return sD(zD)
            }(DD, sD.w, sD) ? wD.push(sD) : rD(sD.w)
          })), delete pD[KD])
        }
        let LD = KD;
        return zD && "function" == typeof zD.node && (LD = rD), DD.sources().forEach(LD), DD.nodes().forEach(LD), wD
      }(DD, null != zD ? zD : null)).forEach((zD => {
        let wD = DD.edge(zD);
        DD.removeEdge(zD), wD.forwardName = zD.name, wD.reversed = !0, DD.setEdge(zD.w, zD.v, wD, qD("rev"))
      }))
    }

    function Iz(DD) {
      DD.graph().dummyChains = [], DD.edges().forEach((zD => function(DD, zD) {
        let wD, pD, sD, KD = zD.v,
          rD = DD.node(KD).rank,
          LD = zD.w,
          cD = DD.node(LD).rank,
          gD = zD.name,
          RD = DD.edge(zD),
          AD = RD.labelRank;
        if (cD === rD + 1) return;
        for (DD.removeEdge(zD), sD = 0, ++rD; rD < cD; ++sD, ++rD) RD.points = [], pD = {
          width: 0,
          height: 0,
          edgeLabel: RD,
          edgeObj: zD,
          rank: rD
        }, wD = kD(DD, "edge", pD, "_d"), rD === AD && (pD.width = RD.width, pD.height = RD.height, pD.dummy = "edge-label", pD.labelpos = RD.labelpos), DD.setEdge(KD, wD, {
          weight: RD.weight
        }, gD), 0 === sD && DD.graph().dummyChains.push(wD), KD = wD;
        DD.setEdge(KD, LD, {
          weight: RD.weight
        }, gD)
      }(DD, zD)))
    }

    function Bz(DD) {
      let zD = {};
      DD.sources().forEach((function wD(pD) {
        let sD = DD.node(pD);
        if (Object.hasOwn(zD, pD)) return sD.rank;
        zD[pD] = !0;
        let KD = DD.outEdges(pD),
          rD = KD ? KD.map((zD => null == zD ? Number.POSITIVE_INFINITY : wD(zD.w) - DD.edge(zD).minlen)) : [],
          LD = vD(Math.min, rD);
        return LD === Number.POSITIVE_INFINITY && (LD = 0), sD.rank = LD
      }))
    }

    function Gz(DD, zD) {
      return DD.node(zD.w).rank - DD.node(zD.v).rank - DD.edge(zD).minlen
    }
    var hz = function(DD) {
      let zD = new yD({
          directed: !1
        }),
        wD = DD.nodes();
      if (0 === wD.length) throw new Error("Graph must have at least one node");
      let pD, sD, KD = wD[0],
        rD = DD.nodeCount();
      for (zD.setNode(KD, {}); nz(zD, DD) < rD && (pD = Mz(zD, DD), pD);) sD = zD.hasNode(pD.v) ? Gz(DD, pD) : -Gz(DD, pD), Oz(zD, DD, sD);
      return zD
    };

    function nz(DD, zD) {
      return DD.nodes().forEach((function wD(pD) {
        let sD = zD.nodeEdges(pD);
        sD && sD.forEach((sD => {
          let KD = sD.v,
            rD = pD === KD ? sD.w : KD;
          !DD.hasNode(rD) && !Gz(zD, sD) && (DD.setNode(rD, {}), DD.setEdge(pD, rD, {}), wD(rD))
        }))
      })), DD.nodeCount()
    }

    function Mz(DD, zD) {
      return zD.edges().reduce(((wD, pD) => {
        let sD = Number.POSITIVE_INFINITY;
        return DD.hasNode(pD.v) !== DD.hasNode(pD.w) && (sD = Gz(zD, pD)), sD < wD[0] ? [sD, pD] : wD
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Oz(DD, zD, wD) {
      DD.nodes().forEach((DD => zD.node(DD).rank += wD))
    }
    var {
      preorder: Jz,
      postorder: Ez
    } = hD, Qz = Xz;

    function Xz(DD) {
      DD = function(DD) {
        let zD = (new yD).setGraph(DD.graph());
        return DD.nodes().forEach((wD => zD.setNode(wD, DD.node(wD)))), DD.edges().forEach((wD => {
          let pD = zD.edge(wD.v, wD.w) || {
              weight: 0,
              minlen: 1
            },
            sD = DD.edge(wD);
          zD.setEdge(wD.v, wD.w, {
            weight: pD.weight + sD.weight,
            minlen: Math.max(pD.minlen, sD.minlen)
          })
        })), zD
      }(DD), Bz(DD);
      let zD, wD, pD = hz(DD);
      for (Cz(pD), Vz(pD, DD); zD = Tz(pD);) wD = bz(pD, DD, zD), jz(pD, DD, zD, wD)
    }

    function Vz(DD, zD) {
      let wD = Ez(DD, DD.nodes());
      wD = wD.slice(0, wD.length - 1), wD.forEach((wD => function(DD, zD, wD) {
        let pD = DD.node(wD).parent,
          sD = DD.edge(wD, pD);
        sD.cutvalue = Pz(DD, zD, wD)
      }(DD, zD, wD)))
    }

    function Pz(DD, zD, wD) {
      let pD = DD.node(wD).parent,
        sD = !0,
        KD = zD.edge(wD, pD),
        rD = 0;
      KD || (sD = !1, KD = zD.edge(pD, wD)), rD = KD.weight;
      let LD = zD.nodeEdges(wD);
      return LD && LD.forEach((KD => {
        let LD = KD.v === wD,
          cD = LD ? KD.w : KD.v;
        if (cD !== pD) {
          let pD = LD === sD,
            gD = zD.edge(KD).weight;
          if (rD += pD ? gD : -gD, function(DD, zD, wD) {
              return DD.hasEdge(zD, wD)
            }(DD, wD, cD)) {
            let zD = DD.edge(wD, cD).cutvalue;
            rD += pD ? -zD : zD
          }
        }
      })), rD
    }

    function Cz(DD, zD) {
      arguments.length < 2 && (zD = DD.nodes()[0]), xz(DD, {}, 1, zD)
    }

    function xz(DD, zD, wD, pD, sD) {
      let KD = wD,
        rD = DD.node(pD);
      zD[pD] = !0;
      let LD = DD.neighbors(pD);
      return LD && LD.forEach((sD => {
        Object.hasOwn(zD, sD) || (wD = xz(DD, zD, wD, sD, pD))
      })), rD.low = KD, rD.lim = wD++, sD ? rD.parent = sD : delete rD.parent, wD
    }

    function Tz(DD) {
      return DD.edges().find((zD => DD.edge(zD).cutvalue < 0))
    }

    function bz(DD, zD, wD) {
      let pD = wD.v,
        sD = wD.w;
      zD.hasEdge(pD, sD) || (pD = wD.w, sD = wD.v);
      let KD = DD.node(pD),
        rD = DD.node(sD),
        LD = KD,
        cD = !1;
      return KD.lim > rD.lim && (LD = rD, cD = !0), zD.edges().filter((zD => cD === dz(DD, DD.node(zD.v), LD) && cD !== dz(DD, DD.node(zD.w), LD))).reduce(((DD, wD) => Gz(zD, wD) < Gz(zD, DD) ? wD : DD))
    }

    function jz(DD, zD, wD, pD) {
      let sD = wD.v,
        KD = wD.w;
      DD.removeEdge(sD, KD), DD.setEdge(pD.v, pD.w, {}), Cz(DD), Vz(DD, zD),
        function(DD, zD) {
          let wD = DD.nodes().find((zD => !DD.node(zD).parent));
          if (!wD) return;
          let pD = Jz(DD, [wD]);
          pD = pD.slice(1), pD.forEach((wD => {
            let pD = DD.node(wD).parent,
              sD = zD.edge(wD, pD),
              KD = !1;
            sD || (sD = zD.edge(pD, wD), KD = !0), zD.node(wD).rank = zD.node(pD).rank + (KD ? sD.minlen : -sD.minlen)
          }))
        }(DD, zD)
    }

    function dz(DD, zD, wD) {
      return wD.low <= zD.lim && zD.lim <= wD.lim
    }
    Xz.initLowLimValues = Cz, Xz.initCutValues = Vz, Xz.calcCutValue = Pz, Xz.leaveEdge = Tz, Xz.enterEdge = bz, Xz.exchangeEdges = jz;
    var Sz = function(DD) {
      let zD = DD.graph().ranker;
      if ("function" == typeof zD) return zD(DD);
      switch (zD) {
        case "network-simplex":
        default:
          lz(DD);
          break;
        case "tight-tree":
          ! function(DD) {
            Bz(DD), hz(DD)
          }(DD);
          break;
        case "longest-path":
          iz(DD);
        case "none":
      }
    };
    var iz = Bz;

    function lz(DD) {
      Qz(DD)
    }
    var Wz = function(DD) {
      let zD = function(DD) {
          let zD = {},
            wD = 0;

          function pD(sD) {
            let KD = wD;
            DD.children(sD).forEach(pD), zD[sD] = {
              low: KD,
              lim: wD++
            }
          }
          return DD.children(pz).forEach(pD), zD
        }(DD),
        wD = DD.graph();
      if (!Array.isArray(wD.dummyChains)) return;
      wD.dummyChains.forEach((wD => {
        let pD = DD.node(wD),
          sD = pD.edgeObj,
          KD = function(DD, zD, wD, pD) {
            let sD, KD = [],
              rD = [],
              LD = Math.min(zD[wD].low, zD[pD].low),
              cD = Math.max(zD[wD].lim, zD[pD].lim);
            sD = wD;
            do {
              sD = DD.parent(sD), KD.push(sD)
            } while (sD && (zD[sD].low > LD || cD > zD[sD].lim));
            let gD = sD,
              RD = pD;
            for (;
              (RD = DD.parent(RD)) !== gD;) rD.push(RD);
            return {
              path: KD.concat(rD.reverse()),
              lca: gD
            }
          }(DD, zD, sD.v, sD.w),
          rD = KD.path,
          LD = KD.lca,
          cD = 0,
          gD = rD[cD],
          RD = !0;
        for (; wD !== sD.w;) {
          if (pD = DD.node(wD), RD) {
            for (;
              (gD = rD[cD]) !== LD && DD.node(gD).maxRank < pD.rank;) cD++;
            gD === LD && (RD = !1)
          }
          if (!RD) {
            for (; cD < rD.length - 1 && DD.node(rD[cD + 1]).minRank <= pD.rank;) cD++;
            gD = rD[cD]
          }
          void 0 !== gD && DD.setParent(wD, gD), wD = DD.successors(wD)[0]
        }
      }))
    };

    function Nz(DD) {
      let zD = kD(DD, "root", {}, "_root"),
        wD = function(DD) {
          let zD = {};

          function wD(pD, sD) {
            let KD = DD.children(pD);
            KD && KD.length && KD.forEach((DD => wD(DD, sD + 1))), zD[pD] = sD
          }
          return DD.children(pz).forEach((DD => wD(DD, 1))), zD
        }(DD),
        pD = Object.values(wD),
        sD = vD(Math.max, pD) - 1,
        KD = 2 * sD + 1;
      DD.graph().nestingRoot = zD, DD.edges().forEach((zD => DD.edge(zD).minlen *= KD));
      let rD = function(DD) {
        return DD.edges().reduce(((zD, wD) => zD + DD.edge(wD).weight), 0)
      }(DD) + 1;
      DD.children(pz).forEach((pD => {
        Zz(DD, zD, KD, rD, sD, wD, pD)
      })), DD.graph().nodeRankFactor = KD
    }

    function Zz(DD, zD, wD, pD, sD, KD, rD) {
      var LD;
      let cD = DD.children(rD);
      if (!cD.length) return void(rD !== zD && DD.setEdge(zD, rD, {
        weight: 0,
        minlen: wD
      }));
      let gD = aD(DD, "_bt"),
        RD = aD(DD, "_bb"),
        AD = DD.node(rD);
      DD.setParent(gD, rD), AD.borderTop = gD, DD.setParent(RD, rD), AD.borderBottom = RD, cD.forEach((LD => {
        var cD;
        Zz(DD, zD, wD, pD, sD, KD, LD);
        let AD = DD.node(LD),
          UD = AD.borderTop ? AD.borderTop : LD,
          fD = AD.borderBottom ? AD.borderBottom : LD,
          ID = AD.borderTop ? pD : 2 * pD,
          BD = UD !== fD ? 1 : sD - (null != (cD = KD[rD]) ? cD : 0) + 1;
        DD.setEdge(gD, UD, {
          weight: ID,
          minlen: BD,
          nestingEdge: !0
        }), DD.setEdge(fD, RD, {
          weight: ID,
          minlen: BD,
          nestingEdge: !0
        })
      })), DD.parent(rD) || DD.setEdge(zD, gD, {
        weight: 0,
        minlen: sD + (null != (LD = KD[rD]) ? LD : 0)
      })
    }
    var yz = function(DD) {
      DD.children(pz).forEach((function zD(wD) {
        let pD = DD.children(wD),
          sD = DD.node(wD);
        if (pD.length && pD.forEach(zD), sD && Object.hasOwn(sD, "minRank")) {
          sD.borderLeft = [], sD.borderRight = [];
          for (let zD = sD.minRank, pD = sD.maxRank + 1; zD < pD; ++zD) kz(DD, "borderLeft", "_bl", wD, sD, zD), kz(DD, "borderRight", "_br", wD, sD, zD)
        }
      }))
    };

    function kz(DD, zD, wD, pD, sD, KD) {
      let rD = {
          width: 0,
          height: 0,
          rank: KD,
          borderType: zD
        },
        LD = sD[zD][KD - 1],
        cD = kD(DD, "border", rD, wD);
      sD[zD][KD] = cD, DD.setParent(cD, pD), LD && DD.setEdge(LD, cD, {
        weight: 1
      })
    }

    function mz(DD) {
      var zD;
      let wD = null == (zD = DD.graph().rankdir) ? void 0 : zD.toLowerCase();
      ("bt" === wD || "rl" === wD) && function(DD) {
        DD.nodes().forEach((zD => az(DD.node(zD)))), DD.edges().forEach((zD => {
          var wD;
          let pD = DD.edge(zD);
          null == (wD = pD.points) || wD.forEach(az), Object.hasOwn(pD, "y") && az(pD)
        }))
      }(DD), ("lr" === wD || "rl" === wD) && (function(DD) {
        DD.nodes().forEach((zD => uz(DD.node(zD)))), DD.edges().forEach((zD => {
          var wD;
          let pD = DD.edge(zD);
          null == (wD = pD.points) || wD.forEach(uz), Object.hasOwn(pD, "x") && uz(pD)
        }))
      }(DD), ez(DD))
    }

    function ez(DD) {
      DD.nodes().forEach((zD => oz(DD.node(zD)))), DD.edges().forEach((zD => oz(DD.edge(zD))))
    }

    function oz(DD) {
      let zD = DD.width;
      DD.width = DD.height, DD.height = zD
    }

    function az(DD) {
      DD.y = -DD.y
    }

    function uz(DD) {
      let zD = DD.x;
      DD.x = DD.y, DD.y = zD
    }

    function vz(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        wD = {},
        pD = DD.nodes().filter((zD => !DD.children(zD).length)),
        sD = pD.map((zD => DD.node(zD).rank)),
        KD = Dz(vD(Math.max, sD) + 1).map((() => []));
      return pD.sort(((zD, wD) => DD.node(zD).rank - DD.node(wD).rank)).forEach((function pD(sD) {
        if (wD[sD]) return;
        wD[sD] = !0;
        let rD = DD.node(sD);
        KD[rD.rank].push(sD);
        let LD = DD.successors(sD);
        LD && [...LD].sort(((wD, pD) => function(wD, pD) {
          let sD = DD.node(wD),
            KD = DD.node(pD);
          return sz(zD, sD, KD)
        }(wD, pD))).forEach(pD)
      })), KD
    }

    function tz(DD, zD) {
      let wD = 0;
      for (let pD = 1; pD < zD.length; ++pD) wD += Fz(DD, zD[pD - 1], zD[pD]);
      return wD
    }

    function Fz(DD, zD, wD) {
      let pD = function(DD, zD) {
          return DD.reduce(((DD, wD, pD) => (DD[wD] = zD[pD], DD)), {})
        }(wD, wD.map(((DD, zD) => zD))),
        sD = zD.flatMap((zD => {
          let wD = DD.outEdges(zD);
          return wD ? wD.map((zD => ({
            pos: pD[zD.w],
            weight: DD.edge(zD).weight
          }))).sort(((DD, zD) => DD.pos - zD.pos)) : []
        })),
        KD = 1;
      for (; KD < wD.length;) KD <<= 1;
      let rD = 2 * KD - 1;
      KD -= 1;
      let LD = new Array(rD).fill(0),
        cD = 0;
      return sD.forEach((DD => {
        let zD = DD.pos + KD;
        LD[zD] += DD.weight;
        let wD = 0;
        for (; zD > 0;) zD % 2 && (wD += LD[zD + 1]), zD = zD - 1 >> 1, LD[zD] += DD.weight;
        cD += DD.weight * wD
      })), cD
    }

    function Yz(DD, zD) {
      let wD = {};
      return DD.forEach(((DD, zD) => {
          let pD = {
            indegree: 0,
            in: [],
            out: [],
            vs: [DD.v],
            i: zD
          };
          void 0 !== DD.barycenter && (pD.barycenter = DD.barycenter, pD.weight = DD.weight), wD[DD.v] = pD
        })), zD.edges().forEach((DD => {
          let zD = wD[DD.v],
            pD = wD[DD.w];
          void 0 !== zD && void 0 !== pD && (pD.indegree++, zD.out.push(pD))
        })),
        function(DD) {
          let zD = [];

          function wD(DD) {
            return zD => {
              zD.merged || (void 0 === zD.barycenter || void 0 === DD.barycenter || zD.barycenter >= DD.barycenter) && function(DD, zD) {
                let wD = 0,
                  pD = 0;
                DD.weight && (wD += DD.barycenter * DD.weight, pD += DD.weight), zD.weight && (wD += zD.barycenter * zD.weight, pD += zD.weight), DD.vs = zD.vs.concat(DD.vs), DD.barycenter = wD / pD, DD.weight = pD, DD.i = Math.min(zD.i, DD.i), zD.merged = !0
              }(DD, zD)
            }
          }

          function pD(zD) {
            return wD => {
              wD.in.push(zD), 0 === --wD.indegree && DD.push(wD)
            }
          }
          for (; DD.length;) {
            let sD = DD.pop();
            zD.push(sD), sD.in.reverse().forEach(wD(sD)), sD.out.forEach(pD(sD))
          }
          return zD.filter((DD => !DD.merged)).map((DD => zz(DD, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(wD).filter((DD => !DD.indegree)))
    }

    function Hz(DD, zD, wD, pD, sD) {
      let KD = {},
        rD = null,
        LD = null,
        cD = sD;
      "boolean" == typeof zD ? (cD = zD, KD = {}) : zD && (KD = zD, rD = null != wD ? wD : null, LD = null != pD ? pD : null);
      let gD = function(DD, zD) {
          let wD = {
            lhs: [],
            rhs: []
          };
          return DD.forEach((DD => {
            zD(DD) ? wD.lhs.push(DD) : wD.rhs.push(DD)
          })), wD
        }(DD, (DD => Object.hasOwn(DD, "barycenter"))),
        RD = gD.lhs,
        AD = gD.rhs.sort(((DD, zD) => zD.i - DD.i)),
        UD = [],
        fD = 0,
        ID = 0,
        BD = 0;
      RD.sort(function(DD, zD, wD) {
        return (pD, sD) => {
          if (pD.barycenter < sD.barycenter) return -1;
          if (pD.barycenter > sD.barycenter) return 1;
          if (DD && ("string" == typeof pD.vs[0] || "string" == typeof sD.vs[0])) {
            let wD = DD.node(pD.vs[0]),
              KD = DD.node(sD.vs[0]),
              rD = sz(zD, wD, KD);
            if (0 !== rD) return rD
          }
          return wD ? sD.i - pD.i : pD.i - sD.i
        }
      }(LD, rD, !!cD));
      for (let [hD, nD] of Object.entries(KD)) {
        let DD = RD.findIndex((DD => DD.vs[0] === hD));
        RD.splice(DD + 1, 0, nD)
      }
      BD = qz(UD, AD, BD), RD.forEach((DD => {
        BD += DD.vs.length, UD.push(DD.vs), fD += DD.barycenter * DD.weight, ID += DD.weight, BD = qz(UD, AD, BD)
      }));
      let GD = {
        vs: UD.flat(1)
      };
      return ID && (GD.barycenter = fD / ID, GD.weight = ID), GD
    }

    function qz(DD, zD, wD) {
      let pD;
      for (; zD.length && (pD = zD[zD.length - 1]).i <= wD;) zD.pop(), DD.push(pD.vs), wD++;
      return wD
    }

    function Dw(DD, zD, wD, pD, sD) {
      var KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD;
      let GD = null,
        hD = sD;
      "boolean" == typeof pD ? (hD = pD, GD = null) : void 0 !== pD && (GD = pD);
      let nD = DD.children(zD),
        MD = DD.node(zD),
        OD = MD ? MD.borderLeft : void 0,
        JD = MD ? MD.borderRight : void 0,
        ED = {};
      OD && (nD = nD.filter((DD => DD !== OD && DD !== JD)));
      let QD = function(DD) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((zD => {
          let wD = DD.inEdges(zD);
          if (!wD || !wD.length) return {
            v: zD
          };
          {
            let pD = wD.reduce(((zD, wD) => {
              let pD = DD.edge(wD),
                sD = DD.node(wD.v);
              return {
                sum: zD.sum + pD.weight * sD.order,
                weight: zD.weight + pD.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: zD,
              barycenter: pD.sum / pD.weight,
              weight: pD.weight
            }
          }
        }))
      }(DD, nD);
      QD.forEach((zD => {
        if (DD.children(zD.v).length) {
          let {
            result: pD
          } = Dw(DD, zD.v, wD, GD, hD);
          ED[zD.v] = pD, Object.hasOwn(pD, "barycenter") && function(DD, zD) {
            void 0 !== DD.barycenter ? (DD.barycenter = (DD.barycenter * DD.weight + zD.barycenter * zD.weight) / (DD.weight + zD.weight), DD.weight += zD.weight) : (DD.barycenter = zD.barycenter, DD.weight = zD.weight)
          }(zD, pD)
        }
      }));
      let XD = Yz(QD, wD);
      ! function(DD, zD) {
        DD.forEach((DD => {
          DD.vs = DD.vs.flatMap((DD => zD[DD] ? zD[DD].vs : DD))
        }))
      }(XD, ED);
      let VD = {},
        PD = !1;
      for (let xD = 0; xD < XD.length; xD++)
        for (let zD = xD + 1; zD < XD.length; zD++)
          if (XD[xD] && XD[zD] && null != (KD = XD[xD]) && KD.barycenter && null != (rD = XD[zD]) && rD.barycenter && (null == (LD = XD[xD]) ? void 0 : LD.barycenter) === XD[zD].barycenter) {
            let wD = null != (gD = null == (cD = XD[xD]) ? void 0 : cD.vs[0]) ? gD : "",
              pD = null != (AD = null == (RD = XD[zD]) ? void 0 : RD.vs[0]) ? AD : "",
              sD = DD.node(wD),
              KD = DD.node(pD);
            if ("edge" === sD.dummy && "edge" === KD.dummy && (null == (UD = sD.edgeObj) ? void 0 : UD.v) === (null == (fD = KD.edgeObj) ? void 0 : fD.v) && (null == (ID = sD.edgeObj) ? void 0 : ID.w) === (null == (BD = KD.edgeObj) ? void 0 : BD.w)) {
              if (sD.edgeLabel.reversed) {
                VD[pD] = XD[xD], XD.splice(xD, 1), xD--;
                break
              }
              VD[wD] = XD[zD], XD.splice(zD, 1), zD--
            } else PD = !0
          } let CD = Hz(XD, VD, GD, DD, hD);
      if (OD && JD) {
        CD.vs = [OD, CD.vs, JD].flat(1);
        let zD = DD.predecessors(OD);
        if (zD && zD.length) {
          let wD = DD.node(zD[0]),
            pD = DD.predecessors(JD),
            sD = DD.node(pD[0]);
          Object.hasOwn(CD, "barycenter") || (CD.barycenter = 0, CD.weight = 0), CD.barycenter = (CD.barycenter * CD.weight + wD.order + sD.order) / (CD.weight + 2), CD.weight += 2
        }
      }
      return Object.defineProperty(CD, "result", {
        value: CD,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(CD, "usedBias", {
        value: PD,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), CD
    }

    function zw(DD, zD, wD, pD) {
      pD || (pD = DD.nodes());
      let sD = function(DD) {
          let zD;
          for (; DD.hasNode(zD = qD("_root")););
          return zD
        }(DD),
        KD = new yD({
          compound: !0
        }).setGraph({
          root: sD
        }).setDefaultNodeLabel((zD => DD.node(zD)));
      return pD.forEach((pD => {
        let rD = DD.node(pD),
          LD = DD.parent(pD);
        if (rD.rank === zD || rD.minRank <= zD && zD <= rD.maxRank) {
          KD.setNode(pD), KD.setParent(pD, LD || sD);
          let cD = DD[wD](pD);
          cD && cD.forEach((zD => {
            let wD = zD.v === pD ? zD.w : zD.v,
              sD = KD.edge(wD, pD),
              rD = void 0 !== sD ? sD.weight : 0;
            KD.setEdge(wD, pD, {
              weight: DD.edge(zD).weight + rD
            })
          })), Object.hasOwn(rD, "minRank") && KD.setNode(pD, {
            borderLeft: rD.borderLeft[zD],
            borderRight: rD.borderRight[zD]
          })
        }
      })), KD
    }

    function ww(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof zD.customOrder) return void zD.customOrder(DD, ww);
      let pD = tD(DD),
        sD = pw(DD, Dz(1, pD + 1), "inEdges"),
        KD = pw(DD, Dz(pD - 1, -1, -1), "outEdges"),
        rD = vz(DD, wD);
      if (Kw(DD, rD), zD.disableOptimalOrderHeuristic) return;
      let LD, cD = Number.POSITIVE_INFINITY,
        gD = zD.constraints || [];
      for (let RD = 0, AD = 0; AD < 4; ++RD, ++AD) {
        sw(RD % 2 ? sD : KD, RD % 4 >= 2, gD, wD), rD = oD(DD);
        let zD = tz(DD, rD);
        zD < cD ? (AD = 0, LD = Object.assign({}, rD), cD = zD) : zD === cD && (LD = structuredClone(rD))
      }
      Kw(DD, LD)
    }

    function pw(DD, zD, wD) {
      let pD = new Map,
        sD = (DD, zD) => {
          pD.has(DD) || pD.set(DD, []), pD.get(DD).push(zD)
        };
      for (let KD of DD.nodes()) {
        let zD = DD.node(KD);
        if ("number" == typeof zD.rank && sD(zD.rank, KD), "number" == typeof zD.minRank && "number" == typeof zD.maxRank)
          for (let DD = zD.minRank; DD <= zD.maxRank; DD++) DD !== zD.rank && sD(DD, KD)
      }
      return zD.map((function(zD) {
        return zw(DD, zD, wD, pD.get(zD) || [])
      }))
    }

    function sw(DD, zD, wD, pD) {
      let sD = !0,
        KD = new yD;
      DD.forEach((function(DD) {
        wD.forEach((DD => KD.setEdge(DD.left, DD.right)));
        let rD = DD.graph().root,
          {
            result: LD,
            usedBias: cD
          } = Dw(DD, rD, KD, pD, sD);
        zD && cD && (sD = !sD), LD.vs.forEach(((zD, wD) => DD.node(zD).order = wD)),
          function(DD, zD, wD) {
            let pD, sD = {};
            wD.forEach((wD => {
              let KD, rD, LD = DD.parent(wD);
              for (; LD;) {
                if (KD = DD.parent(LD), KD ? (rD = sD[KD], sD[KD] = LD) : (rD = pD, pD = LD), rD && rD !== LD) return void zD.setEdge(rD, LD);
                LD = KD
              }
            }))
          }(DD, KD, LD.vs)
      }))
    }

    function Kw(DD, zD) {
      Object.values(zD).forEach((zD => zD.forEach(((zD, wD) => DD.node(zD).order = wD))))
    }

    function rw(DD, zD, wD) {
      if (zD > wD) {
        let DD = zD;
        zD = wD, wD = DD
      }
      let pD = DD[zD];
      pD || (DD[zD] = pD = {}), pD[wD] = !0
    }

    function Lw(DD, zD, wD) {
      if (zD > wD) {
        let DD = zD;
        zD = wD, wD = DD
      }
      let pD = DD[zD];
      return void 0 !== pD && Object.hasOwn(pD, wD)
    }

    function gw(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        KD = {},
        rD = function(DD, zD, wD, pD) {
          let sD = new yD,
            KD = DD.graph(),
            rD = function(DD, zD, wD) {
              return (pD, sD, KD) => {
                let rD, LD = pD.node(sD),
                  cD = pD.node(KD),
                  gD = 0;
                if (gD += LD.width / 2, Object.hasOwn(LD, "labelpos")) switch (LD.labelpos.toLowerCase()) {
                  case "l":
                    rD = -LD.width / 2;
                    break;
                  case "r":
                    rD = LD.width / 2
                }
                if (rD && (gD += wD ? rD : -rD), rD = void 0, gD += (LD.dummy ? zD : DD) / 2, gD += (cD.dummy ? zD : DD) / 2, gD += cD.width / 2, Object.hasOwn(cD, "labelpos")) switch (cD.labelpos.toLowerCase()) {
                  case "l":
                    rD = cD.width / 2;
                    break;
                  case "r":
                    rD = -cD.width / 2
                }
                return rD && (gD += wD ? rD : -rD), gD
              }
            }(KD.nodesep, KD.edgesep, pD);
          return zD.forEach((zD => {
            let pD;
            zD.forEach((zD => {
              let KD = wD[zD];
              if (void 0 !== KD) {
                if (sD.setNode(KD), void 0 !== pD) {
                  let LD = wD[pD];
                  if (void 0 !== LD) {
                    let wD = sD.edge(LD, KD);
                    sD.setEdge(LD, KD, Math.max(rD(DD, zD, pD), wD || 0))
                  }
                }
                pD = zD
              }
            }))
          })), sD
        }(DD, zD, wD, sD),
        LD = sD ? "borderLeft" : "borderRight";

      function cD(DD, zD) {
        let wD = rD.nodes().slice(),
          pD = {},
          sD = wD.pop();
        for (; sD;) {
          if (pD[sD]) DD(sD);
          else {
            pD[sD] = !0, wD.push(sD);
            for (let DD of zD(sD)) wD.push(DD)
          }
          sD = wD.pop()
        }
      }
      return cD((function(DD) {
        let zD = rD.inEdges(DD);
        KD[DD] = zD ? zD.reduce(((DD, zD) => {
          var wD;
          let pD = null != (wD = KD[zD.v]) ? wD : 0,
            sD = rD.edge(zD);
          return Math.max(DD, pD + (void 0 !== sD ? sD : 0))
        }), 0) : 0
      }), (function(DD) {
        return rD.predecessors(DD) || []
      })), cD((function(zD) {
        let wD = rD.outEdges(zD),
          pD = Number.POSITIVE_INFINITY;
        wD && (pD = wD.reduce(((DD, zD) => {
          let wD = KD[zD.w],
            pD = rD.edge(zD);
          return Math.min(DD, (void 0 !== wD ? wD : 0) - (void 0 !== pD ? pD : 0))
        }), Number.POSITIVE_INFINITY));
        let sD = DD.node(zD);
        pD !== Number.POSITIVE_INFINITY && sD.borderType !== LD && (KD[zD] = Math.max(void 0 !== KD[zD] ? KD[zD] : 0, pD))
      }), (function(DD) {
        return rD.successors(DD) || []
      })), Object.keys(pD).forEach((DD => {
        var zD;
        let pD = wD[DD];
        void 0 !== pD && (KD[DD] = null != (zD = KD[pD]) ? zD : 0)
      })), KD
    }

    function Rw(DD, zD) {
      let wD, pD = oD(DD),
        sD = Object.assign(function(DD, zD) {
          let wD = {};
          return zD.length && zD.reduce((function(zD, pD) {
            let sD = 0,
              KD = 0,
              rD = zD.length,
              LD = pD[pD.length - 1];
            return pD.forEach(((zD, cD) => {
              let gD = function(DD, zD) {
                  if (DD.node(zD).dummy) {
                    let wD = DD.predecessors(zD);
                    if (wD) return wD.find((zD => DD.node(zD).dummy))
                  }
                }(DD, zD),
                RD = gD ? DD.node(gD).order : rD;
              (gD || zD === LD) && (pD.slice(KD, cD + 1).forEach((zD => {
                let pD = DD.predecessors(zD);
                pD && pD.forEach((pD => {
                  let KD = DD.node(pD),
                    rD = KD.order;
                  (rD < sD || RD < rD) && (!KD.dummy || !DD.node(zD).dummy) && rw(wD, pD, zD)
                }))
              })), KD = cD + 1, sD = RD)
            })), pD
          })), wD
        }(DD, pD), function(DD, zD) {
          let wD = {};

          function pD(zD, pD, sD, KD, rD) {
            Dz(pD, sD).forEach((pD => {
              let sD = zD[pD];
              if (void 0 !== sD && DD.node(sD).dummy) {
                let zD = DD.predecessors(sD);
                zD && zD.forEach((zD => {
                  if (void 0 === zD) return;
                  let pD = DD.node(zD);
                  pD.dummy && (pD.order < KD || pD.order > rD) && rw(wD, zD, sD)
                }))
              }
            }))
          }
          return zD.length && zD.reduce((function(zD, wD) {
            let sD = -1,
              KD = -1,
              rD = 0;
            return wD.forEach(((LD, cD) => {
              if ("border" === DD.node(LD).dummy) {
                let zD = DD.predecessors(LD);
                if (zD && zD.length) {
                  let LD = zD[0];
                  if (void 0 === LD) return;
                  KD = DD.node(LD).order, pD(wD, rD, cD, sD, KD), rD = cD, sD = KD
                }
              }
              pD(wD, rD, wD.length, KD, zD.length)
            })), wD
          })), wD
        }(DD, pD)),
        KD = {};
      ["u", "d"].forEach((rD => {
        wD = "u" === rD ? pD : Object.values(pD).reverse(), ["l", "r"].forEach((pD => {
          "r" === pD && (wD = wD.map((DD => Object.values(DD).reverse())));
          let LD = function(DD, zD, wD, pD, sD) {
              let KD = {},
                rD = {},
                LD = {};
              return zD.forEach((DD => {
                DD.forEach(((DD, zD) => {
                  KD[DD] = DD, rD[DD] = DD, LD[DD] = zD
                }))
              })), zD.forEach((zD => {
                let cD = -1,
                  gD = -1,
                  RD = !1,
                  AD = zD,
                  UD = zD.findIndex((zD => (null == sD ? void 0 : sD.includes(zD)) || Aw(zD, DD, sD)));
                UD > 0 && (AD = [zD[UD], ...zD.slice(0, UD), ...zD.slice(UD + 1)], RD = !0), AD.forEach((zD => {
                  var AD;
                  let UD = pD(zD);
                  if (UD && UD.length) {
                    null != sD && sD.includes(zD) && (UD = UD.filter((zD => Aw(zD, DD, sD))));
                    let pD = UD.sort(((DD, zD) => {
                        let wD = LD[DD],
                          pD = LD[zD];
                        return (void 0 !== wD ? wD : 0) - (void 0 !== pD ? pD : 0)
                      })),
                      fD = (pD.length - 1) / 2;
                    for (let DD = Math.floor(fD), sD = Math.ceil(fD); DD <= sD; ++DD) {
                      let sD = pD[DD];
                      if (void 0 === sD) continue;
                      let UD = LD[sD];
                      if (void 0 !== UD && rD[zD] === zD && cD < UD && LD[sD] !== gD && !Lw(wD, zD, sD)) {
                        let DD = KD[sD];
                        void 0 !== DD && (rD[sD] = zD, rD[zD] = KD[zD] = DD, cD = UD, RD && (cD = -1, gD = null != (AD = LD[sD]) ? AD : -1, RD = !1))
                      }
                    }
                  }
                }))
              })), {
                root: KD,
                align: rD
              }
            }(DD, wD, sD, (zD => ("u" === rD ? DD.predecessors(zD) : DD.successors(zD)) || []), zD),
            cD = gw(DD, wD, LD.root, LD.align, "r" === pD);
          "r" === pD && (cD = wz(cD, (DD => -DD))), KD[rD + pD] = cD
        }))
      }));
      let rD = function(DD, zD) {
        return Object.values(zD).reduce(((zD, wD) => {
          let pD = Number.NEGATIVE_INFINITY,
            sD = Number.POSITIVE_INFINITY;
          Object.entries(wD).forEach((zD => {
            let [wD, KD] = zD, rD = function(DD, zD) {
              return DD.node(zD).width
            }(DD, wD) / 2;
            pD = Math.max(KD + rD, pD), sD = Math.min(KD - rD, sD)
          }));
          let KD = pD - sD;
          return KD < zD[0] && (zD = [KD, wD]), zD
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(DD, KD);
      return function(DD, zD) {
          let wD = Object.values(zD),
            pD = vD(Math.min, wD),
            sD = vD(Math.max, wD);
          ["u", "d"].forEach((wD => {
            ["l", "r"].forEach((KD => {
              let rD = wD + KD,
                LD = DD[rD];
              if (!LD || LD === zD) return;
              let cD = Object.values(LD),
                gD = pD - vD(Math.min, cD);
              "l" !== KD && (gD = sD - vD(Math.max, cD)), gD && (DD[rD] = wz(LD, (DD => DD + gD)))
            }))
          }))
        }(KD, rD),
        function(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            wD = DD.ul;
          return wD ? wz(wD, ((wD, pD) => {
            var sD, KD;
            if (zD) {
              let wD = zD.toLowerCase(),
                sD = DD[wD];
              if (sD && void 0 !== sD[pD]) return sD[pD]
            }
            let rD = Object.values(DD).map((DD => {
              let zD = DD[pD];
              return void 0 !== zD ? zD : 0
            })).sort(((DD, zD) => DD - zD));
            return ((null != (sD = rD[1]) ? sD : 0) + (null != (KD = rD[2]) ? KD : 0)) / 2
          })) : {}
        }(KD, DD.graph().align)
    }

    function Aw(DD, zD, wD) {
      var pD;
      if (!wD) return !1;
      let sD = null == (pD = zD.node(DD)) ? void 0 : pD.edgeObj;
      if (!sD || zD.node(DD).edgeLabel.reversed) return !1;
      let KD = wD.indexOf(null == sD ? void 0 : sD.v),
        rD = wD.indexOf(null == sD ? void 0 : sD.w);
      return -1 !== KD && -1 !== rD && KD === (rD + 1) % wD.length || KD === (rD - 1) % wD.length
    }

    function Uw(DD, zD) {
      (function(DD) {
        let zD = oD(DD),
          wD = DD.graph(),
          pD = wD.ranksep,
          sD = wD.rankalign,
          KD = 0;
        zD.forEach((zD => {
          let wD = zD.reduce(((zD, wD) => {
            var pD;
            let sD = null != (pD = DD.node(wD).height) ? pD : 0;
            return zD > sD ? zD : sD
          }), 0);
          zD.forEach((zD => {
            let pD = DD.node(zD);
            pD.y = "top" === sD ? KD + pD.height / 2 : "bottom" === sD ? KD + wD - pD.height / 2 : KD + wD / 2
          })), KD += wD + pD
        }))
      })(DD = mD(DD)), Object.entries(Rw(DD, zD)).forEach((zD => {
        let [wD, pD] = zD;
        return DD.node(wD).x = pD
      }))
    }
    var fw = new WeakMap;

    function Iw(DD) {
      return Gw(DD, YD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), DD
    }

    function Bw(DD, zD, wD) {
      let pD = zD;
      for (; void 0 !== pD;) {
        let zD = DD.parent(pD);
        if (zD === wD) return pD;
        pD = zD
      }
    }

    function Gw(DD, zD, wD) {
      var pD;
      let sD = DD.nodes().filter((zD => DD.children(zD).length)),
        KD = {};
      sD.forEach((pD => {
        let sD = DD.node(pD);
        if (sD && sD.rankdir) {
          let rD = new yD({
            multigraph: !0,
            compound: !0
          });
          rD.setGraph({
            rankdir: sD.rankdir
          });
          let LD = DD.children(pD);
          LD.forEach((zD => {
            let wD = {
              ...DD.node(zD)
            };
            rD.setNode(zD, wD);
            let sD = DD.parent(zD);
            sD && sD !== pD && LD.includes(sD) && rD.setParent(zD, sD)
          }));
          let cD = new Set;
          DD.edges().forEach((zD => {
            let wD = Bw(DD, zD.v, pD),
              sD = Bw(DD, zD.w, pD);
            if (wD && sD && wD !== sD) {
              let pD = `${wD}\0${sD}`;
              cD.has(pD) || (cD.add(pD), rD.setEdge(wD, sD, {
                ...DD.edge(zD)
              }))
            }
          })), Gw(rD, zD, wD);
          let gD = Cw(rD);
          hw(gD, zD, wD, null), nw(rD, gD);
          let RD = 1 / 0,
            AD = 1 / 0,
            UD = -1 / 0,
            fD = -1 / 0;
          rD.nodes().forEach((DD => {
            if (DD === pD) return;
            let zD = rD.node(DD);
            zD && "number" == typeof zD.x && "number" == typeof zD.y && "number" == typeof zD.width && "number" == typeof zD.height && (RD = Math.min(RD, zD.x - zD.width / 2), UD = Math.max(UD, zD.x + zD.width / 2), AD = Math.min(AD, zD.y - zD.height / 2), fD = Math.max(fD, zD.y + zD.height / 2))
          })), (!isFinite(RD) || !isFinite(AD) || !isFinite(UD) || !isFinite(fD)) && (RD = AD = 0, UD = fD = 0);
          let ID = UD - RD,
            BD = fD - AD;
          KD[pD] = {
            minX: RD,
            LD: AD,
            maxX: UD,
            cD: fD,
            width: ID,
            height: BD,
            offsetX: RD,
            offsetY: AD
          }, sD._dagreClusterSubgraph = rD
        }
      }));
      let rD = [],
        LD = new Map;
      sD.forEach((zD => {
        let wD = DD.node(zD);
        wD && wD.rankdir && KD[zD] && LD.set(zD, (DD.children(zD) || []).filter((DD => DD !== zD)))
      }));
      let cD = new Set([...LD.values()].flat()),
        gD = new Map;
      LD.forEach(((zD, wD) => {
        cD.has(wD) || gD.set(wD, (zD => {
          let wD = [],
            pD = (DD.children(zD) || []).filter((DD => DD !== zD));
          for (; pD.length > 0;) {
            let zD = pD.shift();
            wD.push(zD), (DD.children(zD) || []).filter((DD => DD !== zD)).forEach((DD => pD.push(DD)))
          }
          return wD
        })(wD))
      }));
      let RD = new Set([...gD.values()].flat()),
        AD = DD => {
          for (let [zD, wD] of gD)
            if (wD.includes(DD)) return zD;
          return DD
        },
        UD = [];
      DD.edges().forEach((zD => {
        (RD.has(zD.v) || RD.has(zD.w)) && UD.push({
          edge: zD,
          label: DD.edge(zD)
        })
      }));
      let fD = new Map;
      RD.forEach((zD => {
        let wD = DD.parent(zD);
        fD.set(zD, "string" == typeof wD ? wD : void 0)
      })), gD.forEach(((zD, wD) => {
        let pD = DD.node(wD),
          sD = [];
        zD.forEach((zD => {
          let wD = DD.node(zD);
          wD && (sD.push({
            id: zD,
            node: wD,
            parent: fD.get(zD)
          }), DD.removeNode(zD))
        }));
        let LD = UD.filter((DD => {
            let {
              edge: wD
            } = DD;
            return zD.includes(wD.v) || zD.includes(wD.w)
          })),
          cD = KD[wD];
        pD && (rD.push({
          clusterId: wD,
          subgraph: pD._dagreClusterSubgraph,
          bounds: cD,
          children: zD,
          removedNodes: sD,
          removedEdges: LD
        }), pD.width = cD.width, pD.height = cD.height)
      }));
      let ID = new Set;
      UD.forEach((zD => {
        let {
          edge: wD,
          label: pD
        } = zD, sD = AD(wD.v), KD = AD(wD.w);
        if (sD !== KD && DD.hasNode(sD) && DD.hasNode(KD)) {
          let zD = `${sD}\0${KD}`;
          ID.has(zD) || (ID.add(zD), DD.setEdge(sD, KD, {
            ...pD,
            width: 0,
            height: 0
          }))
        }
      }));
      let BD = Cw(DD),
        GD = hw(BD, zD, wD, null != (pD = fw.get(DD)) ? pD : null);
      fw.set(DD, GD), nw(DD, BD), ID.forEach((zD => {
        let wD = zD.indexOf("\0"),
          pD = zD.slice(0, wD),
          sD = zD.slice(wD + 1);
        DD.hasEdge(pD, sD) && DD.removeEdge(pD, sD)
      })), rD.forEach((zD => {
        let {
          clusterId: wD,
          subgraph: pD,
          bounds: sD,
          removedNodes: KD,
          removedEdges: rD
        } = zD;
        var LD, cD;
        let gD = DD.node(wD),
          RD = null != (LD = null == gD ? void 0 : gD.x) ? LD : 0,
          AD = null != (cD = null == gD ? void 0 : gD.y) ? cD : 0,
          UD = (sD.minX + sD.maxX) / 2,
          fD = (sD.LD + sD.cD) / 2;
        KD.forEach((zD => {
          let {
            id: wD,
            node: pD,
            parent: sD
          } = zD;
          DD.setNode(wD, pD), void 0 !== sD && DD.setParent(wD, sD)
        })), rD.forEach((zD => {
          let {
            edge: wD,
            label: pD
          } = zD;
          DD.setEdge(wD, pD)
        })), pD.nodes().forEach((zD => {
          if (zD === wD) return;
          let sD = pD.node(zD),
            KD = DD.node(zD);
          KD && sD && "number" == typeof sD.x && "number" == typeof sD.y && (KD.x = RD + (sD.x - UD), KD.y = AD + (sD.y - fD))
        })), delete gD._dagreClusterSubgraph
      })), sD.forEach((zD => {
        var wD, pD;
        let sD = DD.node(zD),
          rD = KD[zD];
        if (sD && sD.rankdir && sD._dagreClusterSubgraph && rD) {
          let KD = sD._dagreClusterSubgraph,
            LD = null != (wD = sD.x) ? wD : 0,
            cD = null != (pD = sD.y) ? pD : 0,
            gD = (rD.minX + rD.maxX) / 2,
            RD = (rD.LD + rD.cD) / 2;
          KD.nodes().forEach((wD => {
            if (wD === zD) return;
            let pD = KD.node(wD),
              sD = DD.node(wD);
            if (sD && pD && "number" == typeof pD.x && "number" == typeof pD.y) {
              let DD = pD.x - gD,
                zD = pD.y - RD;
              sD.x = LD + DD, sD.y = cD + zD
            }
          })), delete sD._dagreClusterSubgraph
        }
      }))
    }

    function hw(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var sD, KD;
      let rD = !1 !== (null == wD ? void 0 : wD.useDynamic),
        LD = rD && null != (sD = null == pD ? void 0 : pD.graph) ? sD : null,
        cD = rD && null != (KD = null == pD ? void 0 : pD.rawNodes) ? KD : null;
      zD("    makeSpaceForEdgeLabels", (() => function(DD) {
        let zD = DD.graph();
        zD.ranksep /= 2, DD.edges().forEach((wD => {
          var pD;
          let sD = DD.edge(wD);
          sD.minlen *= 2, "c" !== (null != (pD = sD.labelpos) ? pD : "r").toLowerCase() && ("TB" === zD.rankdir || "BT" === zD.rankdir ? sD.width += sD.labeloffset : sD.height += sD.labeloffset)
        }))
      }(DD))), zD("    removeSelfEdges", (() => function(DD) {
        DD.edges().forEach((zD => {
          if (zD.v === zD.w) {
            let wD = DD.node(zD.v);
            wD.selfEdges || (wD.selfEdges = []), wD.selfEdges.push({
              e: zD,
              label: DD.edge(zD)
            }), DD.removeEdge(zD)
          }
        }))
      }(DD))), zD("    acyclic", (() => fz(DD, LD))), zD("    nestingGraph.run", (() => Nz(DD))), zD("    rank", (() => Sz(mD(DD)))), zD("    injectEdgeLabelProxies", (() => function(DD) {
        DD.edges().forEach((zD => {
          let wD = DD.edge(zD);
          if (wD.width && wD.height) {
            let wD = DD.node(zD.v),
              pD = {
                rank: (DD.node(zD.w).rank - wD.rank) / 2 + wD.rank,
                e: zD
              };
            kD(DD, "edge-proxy", pD, "_ep")
          }
        }))
      }(DD))), zD("    removeEmptyRanks", (() => function(DD) {
        let zD = DD.nodes().map((zD => DD.node(zD).rank)).filter((DD => void 0 !== DD)),
          wD = vD(Math.min, zD),
          pD = [];
        DD.nodes().forEach((zD => {
          let sD = DD.node(zD).rank - wD;
          pD[sD] || (pD[sD] = []), pD[sD].push(zD)
        }));
        let sD = 0,
          KD = DD.graph().nodeRankFactor;
        Array.from(pD).forEach(((zD, wD) => {
          void 0 === zD && wD % KD !== 0 ? --sD : void 0 !== zD && sD && zD.forEach((zD => DD.node(zD).rank += sD))
        }))
      }(DD))), zD("    nestingGraph.cleanup", (() => function(DD) {
        let zD = DD.graph();
        DD.removeNode(zD.nestingRoot), delete zD.nestingRoot, DD.edges().forEach((zD => {
          DD.edge(zD).nestingEdge && DD.removeEdge(zD)
        }))
      }(DD))), zD("    normalizeRanks", (() => function(DD) {
        let zD = DD.nodes().map((zD => {
            let wD = DD.node(zD).rank;
            return void 0 === wD ? Number.MAX_VALUE : wD
          })),
          wD = vD(Math.min, zD);
        DD.nodes().forEach((zD => {
          let pD = DD.node(zD);
          Object.hasOwn(pD, "rank") && (pD.rank -= wD)
        }))
      }(DD))), zD("    assignRankMinMax", (() => function(DD) {
        let zD = 0;
        DD.nodes().forEach((wD => {
          let pD = DD.node(wD);
          pD.borderTop && (pD.minRank = DD.node(pD.borderTop).rank, pD.maxRank = DD.node(pD.borderBottom).rank, zD = Math.max(zD, pD.maxRank))
        })), DD.graph().maxRank = zD
      }(DD))), zD("    removeEdgeLabelProxies", (() => function(DD) {
        DD.nodes().forEach((zD => {
          let wD = DD.node(zD);
          if ("edge-proxy" === wD.dummy) {
            let pD = wD;
            DD.edge(pD.e).labelRank = wD.rank, DD.removeNode(zD)
          }
        }))
      }(DD))), zD("    normalize.run", (() => Iz(DD))), zD("    parentDummyChains", (() => Wz(DD))), zD("    addBorderSegments", (() => yz(DD))), zD("    order", (() => ww(DD, wD, cD))), zD("    insertSelfEdges", (() => function(DD) {
        oD(DD).forEach((zD => {
          let wD = 0;
          zD.forEach(((zD, pD) => {
            let sD = DD.node(zD);
            "number" != typeof sD.rank && (sD.rank = 0), sD.order = pD + wD, (sD.selfEdges || []).forEach((zD => {
              kD(DD, "selfedge", {
                width: zD.label.width,
                height: zD.label.height,
                rank: sD.rank,
                order: pD + ++wD,
                e: zD.e,
                edgeLabel: zD.label
              }, "_se"), (!Array.isArray(zD.label.points) || 7 !== zD.label.points.length) && (zD.label.points = [{
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
            })), delete sD.selfEdges
          }))
        }))
      }(DD))), zD("    adjustCoordinateSystem", (() => function(DD) {
        var zD;
        let wD = null == (zD = DD.graph().rankdir) ? void 0 : zD.toLowerCase();
        ("lr" === wD || "rl" === wD) && ez(DD)
      }(DD))), zD("    position", (() => Uw(DD, wD.corePath))), zD("    positionSelfEdges", (() => function(DD) {
        DD.nodes().forEach((zD => {
          let wD = DD.node(zD),
            pD = DD => "number" == typeof DD && isFinite(DD);
          if ("selfedge" === wD.dummy) {
            let sD = wD,
              KD = DD.node(sD.e.v),
              rD = pD(null == KD ? void 0 : KD.x) ? KD.x : 0,
              LD = pD(null == KD ? void 0 : KD.y) ? KD.y : 0,
              cD = pD(null == KD ? void 0 : KD.width) ? KD.width : 0,
              gD = pD(null == KD ? void 0 : KD.height) ? KD.height : 0,
              RD = pD(wD.x) ? wD.x : rD,
              AD = pD(wD.y) ? wD.y : LD,
              UD = cD / 2,
              fD = gD / 2;
            sD.edgeLabel.points = [{
              x: RD + UD,
              y: AD - fD
            }, {
              x: RD + UD,
              y: AD - fD
            }, {
              x: RD,
              y: AD
            }, {
              x: RD - UD,
              y: AD + fD
            }, {
              x: RD - UD,
              y: AD + fD
            }, {
              x: RD,
              y: AD
            }, {
              x: RD,
              y: AD
            }], sD.edgeLabel.x = RD, sD.edgeLabel.y = AD, DD.setEdge(sD.e, sD.edgeLabel), DD.removeNode(zD)
          } else wD && Array.isArray(wD.selfEdges) && wD.selfEdges.forEach((DD => {
            if (!Array.isArray(DD.label.points) || 7 !== DD.label.points.length) {
              let zD = pD(wD.x) ? wD.x : 0,
                sD = pD(wD.y) ? wD.y : 0,
                KD = (pD(wD.width) ? wD.width : 0) / 2,
                rD = (pD(wD.height) ? wD.height : 0) / 2;
              DD.label.points = [{
                x: zD + KD,
                y: sD - rD
              }, {
                x: zD + KD,
                y: sD - rD
              }, {
                x: zD,
                y: sD
              }, {
                x: zD - KD,
                y: sD + rD
              }, {
                x: zD - KD,
                y: sD + rD
              }, {
                x: zD,
                y: sD
              }, {
                x: zD,
                y: sD
              }]
            }
          }))
        }))
      }(DD)));
      let gD = JSON.parse(JSON.stringify(DD._nodes));
      return zD("    removeBorderNodes", (() => function(DD) {
        DD.nodes().forEach((zD => {
          if (DD.children(zD).length) {
            let wD = DD.node(zD),
              pD = DD.node(wD.borderTop),
              sD = DD.node(wD.borderBottom),
              KD = DD.node(wD.borderLeft[wD.borderLeft.length - 1]),
              rD = DD.node(wD.borderRight[wD.borderRight.length - 1]);
            wD.width = Math.abs(rD.x - KD.x), wD.height = Math.abs(sD.y - pD.y), wD.x = KD.x + wD.width / 2, wD.y = pD.y + wD.height / 2
          }
        })), DD.nodes().forEach((zD => {
          "border" === DD.node(zD).dummy && DD.removeNode(zD)
        }))
      }(DD))), zD("    normalize.undo", (() => function(DD) {
        DD.graph().dummyChains.forEach((zD => {
          let wD, pD = DD.node(zD),
            sD = pD.edgeLabel;
          for (DD.setEdge(pD.edgeObj, sD); pD.dummy;) wD = DD.successors(zD)[0], DD.removeNode(zD), sD.points.push({
            x: pD.x,
            y: pD.y
          }), "edge-label" === pD.dummy && (sD.x = pD.x, sD.y = pD.y, sD.width = pD.width, sD.height = pD.height), zD = wD, pD = DD.node(zD)
        }))
      }(DD))), zD("    fixupEdgeLabelCoords", (() => function(DD) {
        DD.edges().forEach((zD => {
          let wD = DD.edge(zD);
          if (Object.hasOwn(wD, "x")) switch (("l" === wD.labelpos || "r" === wD.labelpos) && (wD.width -= wD.labeloffset), wD.labelpos) {
            case "l":
              wD.x -= wD.width / 2 + wD.labeloffset;
              break;
            case "r":
              wD.x += wD.width / 2 + wD.labeloffset
          }
        }))
      }(DD))), zD("    undoCoordinateSystem", (() => mz(DD))), zD("    translateGraph", (() => function(DD) {
        let zD = Number.POSITIVE_INFINITY,
          wD = 0,
          pD = Number.POSITIVE_INFINITY,
          sD = 0,
          KD = DD.graph(),
          rD = KD.marginx || 0,
          LD = KD.marginy || 0;

        function cD(DD) {
          let KD = DD.x,
            rD = DD.y,
            LD = DD.width,
            cD = DD.height;
          zD = Math.min(zD, KD - LD / 2), wD = Math.max(wD, KD + LD / 2), pD = Math.min(pD, rD - cD / 2), sD = Math.max(sD, rD + cD / 2)
        }
        DD.nodes().forEach((zD => cD(DD.node(zD)))), DD.edges().forEach((zD => {
          let wD = DD.edge(zD);
          Object.hasOwn(wD, "x") && cD(wD)
        })), zD -= rD, pD -= LD, DD.nodes().forEach((wD => {
          let sD = DD.node(wD);
          sD.x -= zD, sD.y -= pD
        })), DD.edges().forEach((wD => {
          let sD = DD.edge(wD);
          sD.points.forEach((DD => {
            DD.x -= zD, DD.y -= pD
          })), Object.hasOwn(sD, "x") && (sD.x -= zD), Object.hasOwn(sD, "y") && (sD.y -= pD)
        })), KD.width = wD - zD + rD, KD.height = sD - pD + LD
      }(DD))), zD("    assignNodeIntersects", (() => function(DD) {
        DD.edges().forEach((zD => {
          if (zD.v === zD.w) return;
          let wD, pD, sD = DD.edge(zD),
            KD = DD.node(zD.v),
            rD = DD.node(zD.w);
          sD.points ? (wD = sD.points[0], pD = sD.points[sD.points.length - 1]) : (sD.points = [], wD = rD, pD = KD), sD.points.unshift(eD(KD, wD)), sD.points.push(eD(rD, pD))
        }))
      }(DD))), zD("    reversePoints", (() => function(DD) {
        DD.edges().forEach((zD => {
          let wD = DD.edge(zD);
          wD.reversed && wD.points.reverse()
        }))
      }(DD))), zD("    acyclic.undo", (() => function(DD) {
        DD.edges().forEach((zD => {
          let wD = DD.edge(zD);
          if (wD.reversed) {
            DD.removeEdge(zD);
            let pD = wD.forwardName;
            delete wD.reversed, delete wD.forwardName, DD.setEdge(zD.w, zD.v, wD, pD)
          }
        }))
      }(DD))), {
        graph: DD,
        rawNodes: gD
      }
    }

    function nw(DD, zD) {
      DD.nodes().forEach((wD => {
        let pD = DD.node(wD),
          sD = zD.node(wD);
        pD && (pD.x = sD.x, pD.y = sD.y, pD.order = sD.order, pD.rank = sD.rank, zD.children(wD).length && (pD.width = sD.width, pD.height = sD.height))
      })), DD.edges().forEach((wD => {
        let pD = DD.edge(wD),
          sD = zD.edge(wD);
        pD.points = sD.points, Object.hasOwn(sD, "x") && (pD.x = sD.x, pD.y = sD.y)
      })), DD.graph().width = zD.graph().width, DD.graph().height = zD.graph().height
    }
    var Mw = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Ow = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Jw = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Ew = ["width", "height", "rank"],
      Qw = {
        width: 0,
        height: 0
      },
      Xw = ["minlen", "weight", "width", "height", "labeloffset"],
      Vw = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Pw = ["labelpos"];

    function Cw(DD) {
      let zD = new yD({
          multigraph: !0,
          compound: !0
        }),
        wD = Tw(DD.graph());
      return zD.setGraph(Object.assign({}, Ow, xw(wD, Mw), zz(wD, Jw))), DD.nodes().forEach((wD => {
        let pD = xw(Tw(DD.node(wD)), Ew);
        Object.keys(Qw).forEach((DD => {
          void 0 === pD[DD] && (pD[DD] = Qw[DD])
        })), zD.setNode(wD, pD);
        let sD = DD.parent(wD);
        void 0 !== sD && zD.setParent(wD, sD)
      })), DD.edges().forEach((wD => {
        let pD = Tw(DD.edge(wD));
        zD.setEdge(wD, Object.assign({}, Vw, xw(pD, Xw), zz(pD, Pw)))
      })), zD
    }

    function xw(DD, zD) {
      return wz(zz(DD, zD), Number)
    }

    function Tw(DD) {
      let zD = {};
      return DD && Object.entries(DD).forEach((DD => {
        let [wD, pD] = DD;
        "string" == typeof wD && (wD = wD.toLowerCase()), zD[wD] = pD
      })), zD
    }

    function bw(DD) {
      let zD = oD(DD),
        wD = new yD({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return DD.nodes().forEach((zD => {
        wD.setNode(zD, {
          label: zD
        }), wD.setParent(zD, "layer" + DD.node(zD).rank)
      })), DD.edges().forEach((DD => wD.setEdge(DD.v, DD.w, {}, DD.name))), zD.forEach(((DD, zD) => {
        let pD = "layer" + zD;
        wD.setNode(pD, {
          rank: "same"
        }), DD.reduce(((DD, zD) => (wD.setEdge(DD, zD, {
          style: "invis"
        }), zD)))
      })), wD
    }
    var jw = {
        time: FD,
        notime: YD
      },
      dw = {
        graphlib: KD,
        version: Kz,
        layout: Iw,
        debug: bw,
        util: {
          time: FD,
          notime: YD
        }
      }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);