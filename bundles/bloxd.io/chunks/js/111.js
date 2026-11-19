/*! For license information please see wd13r.111.10b18e45.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6171: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      Graph: () => RD,
      debug: () => Jc,
      default: () => ac,
      graphlib: () => iD,
      layout: () => Mc,
      util: () => Kc,
      version: () => iC
    });
    var ID = Object.defineProperty,
      pD = (DD, CD, cD) => ((DD, CD, cD) => CD in DD ? ID(DD, CD, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: cD
      }) : DD[CD] = cD)(DD, "symbol" != typeof CD ? CD + "" : CD, cD),
      iD = {};
    ((DD, CD) => {
      for (var cD in CD) ID(DD, cD, {
        get: CD[cD],
        enumerable: !0
      })
    })(iD, {
      Graph: () => RD,
      alg: () => vD
    });
    var fD = Object.defineProperty,
      bD = (DD, CD) => {
        for (var cD in CD) fD(DD, cD, {
          get: CD[cD],
          enumerable: !0
        })
      },
      QD = class {
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
        setNodes(DD, CD) {
          return DD.forEach((DD => {
            void 0 !== CD ? this.setNode(DD, CD) : this.setNode(DD)
          })), this
        }
        setNode(DD, CD) {
          return DD in this._nodes ? (arguments.length > 1 && (this._nodes[DD] = CD), this) : (this._nodes[DD] = arguments.length > 1 ? CD : this._defaultNodeLabelFn(DD), this._isCompound && (this._parent[DD] = "\0", this._children[DD] = {}, this._children["\0"][DD] = !0), this._in[DD] = {}, this._preds[DD] = {}, this._out[DD] = {}, this._sucs[DD] = {}, ++this._nodeCount, this)
        }
        node(DD) {
          return this._nodes[DD]
        }
        hasNode(DD) {
          return DD in this._nodes
        }
        removeNode(DD) {
          if (DD in this._nodes) {
            let CD = DD => this.removeEdge(this._edgeObjs[DD]);
            delete this._nodes[DD], this._isCompound && (this._removeFromParentsChildList(DD), delete this._parent[DD], this.children(DD).forEach((DD => {
              this.setParent(DD)
            })), delete this._children[DD]), Object.keys(this._in[DD]).forEach(CD), delete this._in[DD], delete this._preds[DD], Object.keys(this._out[DD]).forEach(CD), delete this._out[DD], delete this._sucs[DD], --this._nodeCount
          }
          return this
        }
        setParent(DD, CD) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === CD) CD = "\0";
          else {
            for (let cD = CD += ""; void 0 !== cD; cD = this.parent(cD))
              if (cD === DD) throw new Error("Setting " + CD + " as parent of " + DD + " would create a cycle");
            this.setNode(CD)
          }
          return this.setNode(DD), this._removeFromParentsChildList(DD), this._parent[DD] = CD, this._children[CD][DD] = !0, this
        }
        parent(DD) {
          if (this._isCompound) {
            let CD = this._parent[DD];
            if ("\0" !== CD) return CD
          }
        }
        children() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let CD = this._children[DD];
            if (CD) return Object.keys(CD)
          } else {
            if ("\0" === DD) return this.nodes();
            if (this.hasNode(DD)) return []
          }
          return []
        }
        predecessors(DD) {
          let CD = this._preds[DD];
          if (CD) return Object.keys(CD)
        }
        successors(DD) {
          let CD = this._sucs[DD];
          if (CD) return Object.keys(CD)
        }
        neighbors(DD) {
          let CD = this.predecessors(DD);
          if (CD) {
            let cD = new Set(CD),
              ID = this.successors(DD);
            if (ID)
              for (let DD of ID) cD.add(DD);
            return Array.from(cD.values())
          }
        }
        isLeaf(DD) {
          var CD;
          let cD;
          return cD = this.isDirected() ? this.successors(DD) : this.neighbors(DD), 0 === (null != (CD = null == cD ? void 0 : cD.length) ? CD : 0)
        }
        filterNodes(DD) {
          let CD = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          CD.setGraph(this.graph()), Object.entries(this._nodes).forEach((cD => {
            let [ID, pD] = cD;
            DD(ID) && CD.setNode(ID, pD)
          })), Object.values(this._edgeObjs).forEach((DD => {
            CD.hasNode(DD.v) && CD.hasNode(DD.w) && CD.setEdge(DD, this.edge(DD))
          }));
          let cD = {},
            ID = DD => {
              let pD = this.parent(DD);
              return !pD || CD.hasNode(pD) ? (cD[DD] = pD, pD) : pD in cD ? cD[pD] : ID(pD)
            };
          return this._isCompound && CD.nodes().forEach((DD => CD.setParent(DD, ID(DD)))), CD
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
        setPath(DD, CD) {
          return DD.reduce(((DD, cD) => (void 0 !== CD ? this.setEdge(DD, cD, CD) : this.setEdge(DD, cD), cD))), this
        }
        setEdge(DD, CD, cD, ID) {
          let pD, iD, fD, bD, QD = !1;
          "object" == typeof DD && null !== DD && "v" in DD ? (pD = DD.v, iD = DD.w, fD = DD.name, 2 === arguments.length && (bD = CD, QD = !0)) : (pD = DD, iD = CD, fD = ID, arguments.length > 2 && (bD = cD, QD = !0)), pD = "" + pD, iD = "" + iD, void 0 !== fD && (fD = "" + fD);
          let SD = BD(this._isDirected, pD, iD, fD);
          if (SD in this._edgeLabels) return QD && (this._edgeLabels[SD] = bD), this;
          if (void 0 !== fD && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(pD), this.setNode(iD), this._edgeLabels[SD] = QD ? bD : this._defaultEdgeLabelFn(pD, iD, fD);
          let yD = function(DD, CD, cD, ID) {
            let pD = "" + CD,
              iD = "" + cD;
            if (!DD && pD > iD) {
              let DD = pD;
              pD = iD, iD = DD
            }
            let fD = {
              v: pD,
              w: iD
            };
            return ID && (fD.name = ID), fD
          }(this._isDirected, pD, iD, fD);
          return pD = yD.v, iD = yD.w, Object.freeze(yD), this._edgeObjs[SD] = yD, wD(this._preds[iD], pD), wD(this._sucs[pD], iD), this._in[iD][SD] = yD, this._out[pD][SD] = yD, this._edgeCount++, this
        }
        edge(DD, CD, cD) {
          let ID = 1 === arguments.length ? yD(this._isDirected, DD) : BD(this._isDirected, DD, CD, cD);
          return this._edgeLabels[ID]
        }
        edgeAsObj(DD, CD, cD) {
          let ID = 1 === arguments.length ? this.edge(DD) : this.edge(DD, CD, cD);
          return "object" != typeof ID || null === ID ? {
            label: ID
          } : ID
        }
        hasEdge(DD, CD, cD) {
          return (1 === arguments.length ? yD(this._isDirected, DD) : BD(this._isDirected, DD, CD, cD)) in this._edgeLabels
        }
        removeEdge(DD, CD, cD) {
          let ID = 1 === arguments.length ? yD(this._isDirected, DD) : BD(this._isDirected, DD, CD, cD),
            pD = this._edgeObjs[ID];
          if (pD) {
            let DD = pD.v,
              CD = pD.w;
            delete this._edgeLabels[ID], delete this._edgeObjs[ID], SD(this._preds[CD], DD), SD(this._sucs[DD], CD), delete this._in[CD][ID], delete this._out[DD][ID], this._edgeCount--
          }
          return this
        }
        inEdges(DD, CD) {
          return this.isDirected() ? this.filterEdges(this._in[DD], DD, CD) : this.nodeEdges(DD, CD)
        }
        outEdges(DD, CD) {
          return this.isDirected() ? this.filterEdges(this._out[DD], DD, CD) : this.nodeEdges(DD, CD)
        }
        nodeEdges(DD, CD) {
          if (DD in this._nodes) return this.filterEdges({
            ...this._in[DD],
            ...this._out[DD]
          }, DD, CD)
        }
        _removeFromParentsChildList(DD) {
          delete this._children[this._parent[DD]][DD]
        }
        filterEdges(DD, CD, cD) {
          if (!DD) return;
          let ID = Object.values(DD);
          return cD ? ID.filter((DD => DD.v === CD && DD.w === cD || DD.v === cD && DD.w === CD)) : ID
        }
      };

    function wD(DD, CD) {
      DD[CD] ? DD[CD]++ : DD[CD] = 1
    }

    function SD(DD, CD) {
      void 0 !== DD[CD] && !--DD[CD] && delete DD[CD]
    }

    function BD(DD, CD, cD, ID) {
      let pD = "" + CD,
        iD = "" + cD;
      if (!DD && pD > iD) {
        let DD = pD;
        pD = iD, iD = DD
      }
      return pD + "\x01" + iD + "\x01" + (void 0 === ID ? "\0" : ID)
    }

    function yD(DD, CD) {
      return BD(DD, CD.v, CD.w, CD.name)
    }

    function MD(DD) {
      let CD = {
          options: {
            directed: DD.isDirected(),
            multigraph: DD.isMultigraph(),
            compound: DD.isCompound()
          },
          nodes: tD(DD),
          edges: ZD(DD)
        },
        cD = DD.graph();
      return void 0 !== cD && (CD.value = structuredClone(cD)), CD
    }

    function tD(DD) {
      return DD.nodes().map((CD => {
        let cD = DD.node(CD),
          ID = DD.parent(CD),
          pD = {
            v: CD
          };
        return void 0 !== cD && (pD.value = cD), void 0 !== ID && (pD.parent = ID), pD
      }))
    }

    function ZD(DD) {
      return DD.edges().map((CD => {
        let cD = DD.edge(CD),
          ID = {
            v: CD.v,
            w: CD.w
          };
        return void 0 !== CD.name && (ID.name = CD.name), void 0 !== cD && (ID.value = cD), ID
      }))
    }

    function oD(DD) {
      let CD = new QD(DD.options);
      return void 0 !== DD.value && CD.setGraph(DD.value), DD.nodes.forEach((DD => {
        CD.setNode(DD.v, DD.value), DD.parent && CD.setParent(DD.v, DD.parent)
      })), DD.edges.forEach((DD => {
        CD.setEdge({
          v: DD.v,
          w: DD.w,
          name: DD.name
        }, DD.value)
      })), CD
    }
    bD({}, {
      read: () => oD,
      write: () => MD
    });
    var vD = {};
    bD(vD, {
      CycleException: () => JD,
      bellmanFord: () => gD,
      components: () => XD,
      dijkstra: () => OD,
      dijkstraAll: () => PD,
      findCycles: () => UD,
      floydWarshall: () => qD,
      isAcyclic: () => aD,
      postorder: () => lD,
      preorder: () => LD,
      prim: () => TD,
      shortestPaths: () => GD,
      tarjan: () => HD,
      topsort: () => KD
    });
    var ND = () => 1;

    function gD(DD, CD, cD, ID) {
      return function(DD, CD, cD, ID) {
        let pD, iD = {},
          fD = 0,
          bD = DD.nodes(),
          QD = function(DD) {
            let CD = iD[DD.v],
              ID = iD[DD.w];
            if (!CD || !ID) return;
            let fD = cD(DD);
            CD.distance + fD < ID.distance && (iD[DD.w] = {
              distance: CD.distance + fD,
              predecessor: DD.v
            }, pD = !0)
          },
          wD = function() {
            bD.forEach((function(DD) {
              ID(DD).forEach((function(CD) {
                let cD = CD.v === DD ? CD.v : CD.w,
                  ID = cD === CD.v ? CD.w : CD.v;
                QD({
                  v: cD,
                  w: ID
                })
              }))
            }))
          };
        bD.forEach((function(DD) {
          let cD = DD === CD ? 0 : Number.POSITIVE_INFINITY;
          iD[DD] = {
            distance: cD,
            predecessor: ""
          }
        }));
        let SD = bD.length;
        for (let BD = 1; BD < SD && (pD = !1, fD++, wD(), pD); BD++);
        if (fD === SD - 1 && (pD = !1, wD(), pD)) throw new Error("The graph contains a negative weight cycle");
        return iD
      }(DD, String(CD), cD || ND, ID || function(CD) {
        var cD;
        return null != (cD = DD.outEdges(CD)) ? cD : []
      })
    }

    function XD(DD) {
      let CD, cD = {},
        ID = [];

      function pD(ID) {
        var iD, fD;
        ID in cD || (cD[ID] = !0, CD.push(ID), null == (iD = DD.successors(ID)) || iD.forEach(pD), null == (fD = DD.predecessors(ID)) || fD.forEach(pD))
      }
      return DD.nodes().forEach((function(DD) {
        CD = [], pD(DD), CD.length && ID.push(CD)
      })), ID
    }
    var mD = class {
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
          let CD = this._keyIndices[DD];
          if (void 0 !== CD) return this._arr[CD].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(DD, CD) {
          let cD = this._keyIndices,
            ID = String(DD);
          if (!(ID in cD)) {
            let DD = this._arr,
              pD = DD.length;
            return cD[ID] = pD, DD.push({
              key: ID,
              priority: CD
            }), this._decrease(pD), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let DD = this._arr.pop();
          return delete this._keyIndices[DD.key], this._heapify(0), DD.key
        }
        decrease(DD, CD) {
          let cD = this._keyIndices[DD];
          if (void 0 === cD) throw new Error(`Key not found: ${DD}`);
          let ID = this._arr[cD].priority;
          if (CD > ID) throw new Error(`New priority is greater than current priority. Key: ${DD} Old: ${ID} New: ${CD}`);
          this._arr[cD].priority = CD, this._decrease(cD)
        }
        _heapify(DD) {
          let CD = this._arr,
            cD = 2 * DD,
            ID = cD + 1,
            pD = DD;
          cD < CD.length && (pD = CD[cD].priority < CD[pD].priority ? cD : pD, ID < CD.length && (pD = CD[ID].priority < CD[pD].priority ? ID : pD), pD !== DD && (this._swap(DD, pD), this._heapify(pD)))
        }
        _decrease(DD) {
          let CD, cD = this._arr,
            ID = cD[DD].priority;
          for (; 0 !== DD && (CD = DD >> 1, !(cD[CD].priority < ID));) this._swap(DD, CD), DD = CD
        }
        _swap(DD, CD) {
          let cD = this._arr,
            ID = this._keyIndices,
            pD = cD[DD],
            iD = cD[CD];
          cD[DD] = iD, cD[CD] = pD, ID[iD.key] = DD, ID[pD.key] = CD
        }
      },
      nD = () => 1;

    function OD(DD, CD, cD, ID) {
      return function(DD, CD, cD, ID) {
        let pD, iD, fD = {},
          bD = new mD,
          QD = function(DD) {
            let CD = DD.v !== pD ? DD.v : DD.w,
              ID = fD[CD];
            if (!ID) return;
            let QD = cD(DD),
              wD = iD.distance + QD;
            if (QD < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + DD + " Weight: " + QD);
            wD < ID.distance && (ID.distance = wD, ID.predecessor = pD, bD.decrease(CD, wD))
          };
        for (DD.nodes().forEach((function(DD) {
            let cD = DD === CD ? 0 : Number.POSITIVE_INFINITY;
            fD[DD] = {
              distance: cD,
              predecessor: ""
            }, bD.add(DD, cD)
          })); bD.size() > 0;) {
          pD = bD.removeMin();
          let DD = fD[pD];
          if (!DD || DD.distance === Number.POSITIVE_INFINITY) break;
          iD = DD, ID(pD).forEach(QD)
        }
        return fD
      }(DD, String(CD), cD || nD, ID || function(CD) {
        var cD;
        return null != (cD = DD.outEdges(CD)) ? cD : []
      })
    }

    function PD(DD, CD, cD) {
      return DD.nodes().reduce((function(ID, pD) {
        return ID[pD] = OD(DD, pD, CD, cD), ID
      }), {})
    }

    function HD(DD) {
      let CD = 0,
        cD = [],
        ID = {},
        pD = [];

      function iD(fD) {
        var bD;
        let QD = ID[fD] = {
          onStack: !0,
          lowlink: CD,
          index: CD++
        };
        if (cD.push(fD), null == (bD = DD.successors(fD)) || bD.forEach((function(DD) {
            if (DD in ID) {
              let CD = ID[DD];
              null != CD && CD.onStack && (QD.lowlink = Math.min(QD.lowlink, CD.index))
            } else {
              iD(DD);
              let CD = ID[DD];
              CD && (QD.lowlink = Math.min(QD.lowlink, CD.lowlink))
            }
          })), QD.lowlink === QD.index) {
          let DD, CD = [];
          do {
            DD = cD.pop();
            let pD = ID[DD];
            pD && (pD.onStack = !1), CD.push(DD)
          } while (fD !== DD);
          pD.push(CD)
        }
      }
      return DD.nodes().forEach((function(DD) {
        DD in ID || iD(DD)
      })), pD
    }

    function UD(DD) {
      return HD(DD).filter((function(CD) {
        var cD;
        let ID = CD[0];
        return !!ID && (CD.length > 1 || 1 === CD.length && (null != (cD = DD.outEdges(ID, ID)) ? cD : []).length > 0)
      }))
    }
    var xD = () => 1;

    function qD(DD, CD, cD) {
      return function(DD, CD, cD) {
        let ID = {},
          pD = DD.nodes();
        return pD.forEach((function(DD) {
          let iD = {};
          ID[DD] = iD, iD[DD] = {
            distance: 0,
            predecessor: ""
          }, pD.forEach((function(CD) {
            DD !== CD && (iD[CD] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), cD(DD).forEach((function(cD) {
            let ID = cD.v === DD ? cD.w : cD.v,
              pD = CD(cD);
            iD[ID] = {
              distance: pD,
              predecessor: DD
            }
          }))
        })), pD.forEach((function(DD) {
          let CD = ID[DD];
          CD && pD.forEach((function(cD) {
            let iD = ID[cD];
            iD && pD.forEach((function(cD) {
              let ID = iD[DD],
                pD = CD[cD],
                fD = iD[cD];
              if (ID && pD && fD) {
                let DD = ID.distance + pD.distance;
                DD < fD.distance && (fD.distance = DD, fD.predecessor = pD.predecessor)
              }
            }))
          }))
        })), ID
      }(DD, CD || xD, cD || function(CD) {
        var cD;
        return null != (cD = DD.outEdges(CD)) ? cD : []
      })
    }
    var JD = class extends Error {
      constructor(DD) {
        super(DD), this.name = "CycleException"
      }
    };

    function KD(DD) {
      let CD = {},
        cD = {},
        ID = [];
      if (DD.sinks().forEach((function pD(iD) {
          var fD;
          if (iD in cD) throw new JD;
          iD in CD || (cD[iD] = !0, CD[iD] = !0, null == (fD = DD.predecessors(iD)) || fD.forEach(pD), delete cD[iD], ID.push(iD))
        })), Object.keys(CD).length !== DD.nodeCount()) throw new JD;
      return ID
    }

    function aD(DD) {
      try {
        KD(DD)
      } catch (CD) {
        if (CD instanceof JD) return !1;
        throw CD
      }
      return !0
    }

    function VD(DD, CD, cD, ID, pD) {
      Array.isArray(CD) || (CD = [CD]);
      let iD = CD => {
          var cD;
          return null != (cD = DD.isDirected() ? DD.successors(CD) : DD.neighbors(CD)) ? cD : []
        },
        fD = {};
      return CD.forEach((function(CD) {
        if (!DD.hasNode(CD)) throw new Error("Graph does not have node: " + CD);
        pD = zD(DD, CD, "post" === cD, fD, iD, ID, pD)
      })), pD
    }

    function zD(DD, CD, cD, ID, pD, iD, fD) {
      return CD in ID || (ID[CD] = !0, cD || (fD = iD(fD, CD)), pD(CD).forEach((function(CD) {
        fD = zD(DD, CD, cD, ID, pD, iD, fD)
      })), cD && (fD = iD(fD, CD))), fD
    }

    function jD(DD, CD, cD) {
      return VD(DD, CD, cD, (function(DD, CD) {
        return DD.push(CD), DD
      }), [])
    }

    function lD(DD, CD) {
      return jD(DD, CD, "post")
    }

    function LD(DD, CD) {
      return jD(DD, CD, "pre")
    }

    function TD(DD, CD) {
      var cD;
      let ID, pD = new QD,
        iD = {},
        fD = new mD;

      function bD(DD) {
        let cD = DD.v === ID ? DD.w : DD.v,
          pD = fD.priority(cD);
        if (void 0 !== pD) {
          let bD = CD(DD);
          bD < pD && (iD[cD] = ID, fD.decrease(cD, bD))
        }
      }
      if (0 === DD.nodeCount()) return pD;
      DD.nodes().forEach((function(DD) {
        fD.add(DD, Number.POSITIVE_INFINITY), pD.setNode(DD)
      }));
      let wD = DD.nodes()[0];
      void 0 !== wD && fD.decrease(wD, 0);
      let SD = !1;
      for (; fD.size() > 0;) {
        if (ID = fD.removeMin(), ID in iD) pD.setEdge(ID, iD[ID]);
        else {
          if (SD) throw new Error("Input graph is not connected: " + DD);
          SD = !0
        }
        null == (cD = DD.nodeEdges(ID)) || cD.forEach(bD)
      }
      return pD
    }

    function GD(DD, CD, cD, ID) {
      return function(DD, CD, cD, ID) {
        if (void 0 === cD) return OD(DD, CD, cD, ID);
        let pD = !1,
          iD = DD.nodes();
        for (let fD = 0; fD < iD.length; fD++) {
          let bD = iD[fD];
          if (void 0 === bD) continue;
          let QD = ID(bD);
          for (let DD = 0; DD < QD.length; DD++) {
            let CD = QD[DD];
            if (!CD) continue;
            let ID = CD.v === bD ? CD.v : CD.w;
            cD({
              v: ID,
              w: ID === CD.v ? CD.w : CD.v
            }) < 0 && (pD = !0)
          }
          if (pD) return gD(DD, CD, cD, ID)
        }
        return OD(DD, CD, cD, ID)
      }(DD, CD, cD, null != ID ? ID : CD => {
        var cD;
        return null != (cD = DD.outEdges(CD)) ? cD : []
      })
    }
    var RD = QD;

    function kD(DD, CD, cD, ID) {
      let pD = ID;
      for (; DD.hasNode(pD);) pD = FD(ID);
      return cD.dummy = CD, DD.setNode(pD, cD), pD
    }

    function dD(DD) {
      let CD = new RD({
        multigraph: DD.isMultigraph()
      }).setGraph(DD.graph());
      return DD.nodes().forEach((cD => {
        DD.children(cD).length || CD.setNode(cD, DD.node(cD))
      })), DD.edges().forEach((cD => {
        CD.setEdge(cD, DD.edge(cD))
      })), CD
    }

    function YD(DD, CD) {
      let cD, ID, pD = DD.x,
        iD = DD.y,
        fD = CD.x - pD,
        bD = CD.y - iD,
        QD = DD.width / 2,
        wD = DD.height / 2;
      if (!fD && !bD) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(bD) * QD > Math.abs(fD) * wD ? (bD < 0 && (wD = -wD), cD = wD * fD / bD, ID = wD) : (fD < 0 && (QD = -QD), cD = QD, ID = QD * bD / fD), {
        x: pD + cD,
        y: iD + ID
      }
    }

    function WD(DD) {
      let CD = DC(uD(DD) + 1).map((() => []));
      return DD.nodes().forEach((cD => {
        let ID = DD.node(cD),
          pD = ID.rank;
        void 0 !== pD && (CD[pD] || (CD[pD] = []), CD[pD][ID.order] = cD)
      })), CD
    }

    function sD(DD, CD, cD, ID) {
      let pD = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (pD.rank = cD, pD.order = ID), kD(DD, "border", pD, CD)
    }
    var ED = 65535;

    function eD(DD, CD) {
      if (CD.length > ED) {
        let cD = function(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ED,
            cD = [];
          for (let ID = 0; ID < DD.length; ID += CD) {
            let pD = DD.slice(ID, ID + CD);
            cD.push(pD)
          }
          return cD
        }(CD);
        return DD(...cD.map((CD => DD(...CD))))
      }
      return DD(...CD)
    }

    function uD(DD) {
      let CD = DD.nodes().map((CD => {
        let cD = DD.node(CD).rank;
        return void 0 === cD ? Number.MIN_VALUE : cD
      }));
      return eD(Math.max, CD)
    }

    function hD(DD, CD) {
      let cD = Date.now();
      try {
        return CD()
      } finally {
        console.log(DD + " time: " + (Date.now() - cD) + "ms")
      }
    }

    function rD(DD, CD) {
      return CD()
    }
    var AD = 0;

    function FD(DD) {
      return DD + "" + ++AD
    }

    function DC(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == CD && (CD = DD, DD = 0);
      let ID = DD => DD < CD;
      cD < 0 && (ID = DD => CD < DD);
      let pD = [];
      for (let iD = DD; ID(iD); iD += cD) pD.push(iD);
      return pD
    }

    function CC(DD, CD) {
      let cD = {};
      for (let ID of CD) void 0 !== DD[ID] && (cD[ID] = DD[ID]);
      return cD
    }

    function cC(DD, CD) {
      let cD;
      return cD = "string" == typeof CD ? DD => DD[CD] : CD, Object.entries(DD).reduce(((DD, CD) => {
        let [ID, pD] = CD;
        return DD[ID] = cD(pD, ID), DD
      }), {})
    }
    var IC = "\0";

    function pC(DD, CD, cD) {
      var ID, pD, iD, fD, bD, QD;
      if (!(DD && CD && cD && "edge" === CD.dummy && "edge" === cD.dummy && CD.edgeObj && cD.edgeObj && DD[CD.edgeObj.v] && DD[cD.edgeObj.v] && DD[CD.edgeObj.w] && DD[cD.edgeObj.w])) return 0;
      let wD = !0;
      CD.edgeObj.w === cD.edgeObj.w && (wD = !1);
      let SD = wD ? null != (pD = null == (ID = DD[CD.edgeObj.v]) ? void 0 : ID.rank) ? pD : NaN : null != (fD = null == (iD = DD[CD.edgeObj.w]) ? void 0 : iD.rank) ? fD : NaN,
        BD = Object.entries(DD).find((DD => {
          var cD, ID;
          return (null == (cD = DD[1].edgeObj) ? void 0 : cD.v) === CD.edgeObj.v && (null == (ID = DD[1].edgeObj) ? void 0 : ID.w) === CD.edgeObj.w && DD[1].rank === SD
        })),
        yD = Object.entries(DD).find((DD => {
          var CD, ID;
          return (null == (CD = DD[1].edgeObj) ? void 0 : CD.v) === cD.edgeObj.v && (null == (ID = DD[1].edgeObj) ? void 0 : ID.w) === cD.edgeObj.w && DD[1].rank === SD
        }));
      if (!BD || !yD) return 0;
      let MD = null != (bD = BD[1].order) ? bD : NaN,
        tD = null != (QD = yD[1].order) ? QD : NaN;
      return isNaN(MD - tD) ? 0 : MD - tD
    }
    var iC = "3.1.1";

    function fC(DD) {
      DD._prev._next = DD._next, DD._next._prev = DD._prev, delete DD._next, delete DD._prev
    }

    function bC(DD, CD) {
      if ("_next" !== DD && "_prev" !== DD) return CD
    }
    var QC = class {
        constructor() {
          pD(this, "_sentinel");
          let DD = {};
          DD._next = DD._prev = DD, this._sentinel = DD
        }
        dequeue() {
          let DD = this._sentinel,
            CD = DD._prev;
          if (CD !== DD) return fC(CD), CD
        }
        enqueue(DD) {
          let CD = this._sentinel;
          DD._prev && DD._next && fC(DD), DD._next = CD._next, CD._next._prev = DD, CD._next = DD, DD._prev = CD
        }
        toString() {
          let DD = [],
            CD = this._sentinel,
            cD = CD._prev;
          for (; cD !== CD;) DD.push(JSON.stringify(cD, bC)), cD = cD._prev;
          return "[" + DD.join(", ") + "]"
        }
      },
      wC = () => 1;

    function SC(DD, CD) {
      if (DD.nodeCount() <= 1) return [];
      let cD = function(DD, CD) {
        let cD = new RD,
          ID = 0,
          pD = 0;
        DD.nodes().forEach((DD => {
          cD.setNode(DD, {
            v: DD,
            in: 0,
            out: 0
          })
        })), DD.edges().forEach((DD => {
          let iD = cD.edge(DD.v, DD.w) || 0,
            fD = CD(DD),
            bD = iD + fD;
          cD.setEdge(DD.v, DD.w, bD);
          let QD = cD.node(DD.v),
            wD = cD.node(DD.w);
          pD = Math.max(pD, QD.out += fD), ID = Math.max(ID, wD.in += fD)
        }));
        let iD = function(DD) {
            let CD = [];
            for (let cD = 0; cD < DD; cD++) CD.push(cD);
            return CD
          }(pD + ID + 3).map((() => new QC)),
          fD = ID + 1;
        return cD.nodes().forEach((DD => {
          yC(iD, fD, cD.node(DD))
        })), {
          graph: cD,
          buckets: iD,
          zeroIdx: fD
        }
      }(DD, CD || wC);
      return function(DD, CD, cD) {
        var ID;
        let pD, iD = [],
          fD = CD[CD.length - 1],
          bD = CD[0];
        for (; DD.nodeCount();) {
          for (; pD = bD.dequeue();) BC(DD, CD, cD, pD);
          for (; pD = fD.dequeue();) BC(DD, CD, cD, pD);
          if (DD.nodeCount())
            for (let fD = CD.length - 2; fD > 0; --fD)
              if (pD = null == (ID = CD[fD]) ? void 0 : ID.dequeue(), pD) {
                iD = iD.concat(BC(DD, CD, cD, pD, !0) || []);
                break
              }
        }
        return iD
      }(cD.graph, cD.buckets, cD.zeroIdx).flatMap((CD => DD.outEdges(CD.v, CD.w) || []))
    }

    function BC(DD, CD, cD, ID, pD) {
      let iD = [],
        fD = pD ? iD : void 0;
      return (DD.inEdges(ID.v) || []).forEach((ID => {
        let fD = DD.edge(ID),
          bD = DD.node(ID.v);
        pD && iD.push({
          v: ID.v,
          w: ID.w
        }), bD.out -= fD, yC(CD, cD, bD)
      })), (DD.outEdges(ID.v) || []).forEach((ID => {
        let pD = DD.edge(ID),
          iD = ID.w,
          fD = DD.node(iD);
        fD.in -= pD, yC(CD, cD, fD)
      })), DD.removeNode(ID.v), fD
    }

    function yC(DD, CD, cD) {
      var ID, pD, iD;
      cD.out ? cD.in ? null == (iD = DD[cD.out - cD.in + CD]) || iD.enqueue(cD) : null == (pD = DD[DD.length - 1]) || pD.enqueue(cD) : null == (ID = DD[0]) || ID.enqueue(cD)
    }

    function MC(DD, CD) {
      var cD;
      ("greedy" === DD.graph().acyclicer ? SC(DD, (cD = DD, DD => cD.edge(DD).weight)) : function(DD, CD) {
        let cD = [],
          ID = {},
          pD = {};

        function iD(CD) {
          Object.hasOwn(pD, CD) || (pD[CD] = !0, ID[CD] = !0, DD.outEdges(CD).forEach((DD => {
            Object.hasOwn(ID, DD.w) ? cD.push(DD) : iD(DD.w)
          })), delete ID[CD])
        }

        function fD(iD) {
          var bD;
          Object.hasOwn(pD, iD) || (pD[iD] = !0, ID[iD] = !0, null == (bD = DD.outEdges(iD)) || bD.forEach((pD => {
            var bD, QD;
            Object.hasOwn(ID, pD.w) || (null == (bD = CD.node(iD)) ? void 0 : bD.rank) > (null == (QD = CD.node(pD.w)) ? void 0 : QD.rank) && function(DD, CD, cD) {
              let ID = new Set;

              function pD(CD) {
                var iD;
                if (DD.sources().includes(CD)) return !0;
                ID.add(CD);
                for (let fD of null != (iD = DD.inEdges(CD)) ? iD : [])
                  if ((fD.v !== cD.v || fD.w !== cD.w) && !ID.has(fD.v) && pD(fD.v)) return !0;
                return !1
              }
              return pD(CD)
            }(DD, pD.w, pD) ? cD.push(pD) : fD(pD.w)
          })), delete ID[iD])
        }
        let bD = iD;
        return CD && "function" == typeof CD.node && (bD = fD), DD.sources().forEach(bD), DD.nodes().forEach(bD), cD
      }(DD, null != CD ? CD : null)).forEach((CD => {
        let cD = DD.edge(CD);
        DD.removeEdge(CD), cD.forwardName = CD.name, cD.reversed = !0, DD.setEdge(CD.w, CD.v, cD, FD("rev"))
      }))
    }

    function tC(DD) {
      DD.graph().dummyChains = [], DD.edges().forEach((CD => function(DD, CD) {
        let cD, ID, pD, iD = CD.v,
          fD = DD.node(iD).rank,
          bD = CD.w,
          QD = DD.node(bD).rank,
          wD = CD.name,
          SD = DD.edge(CD),
          BD = SD.labelRank;
        if (QD === fD + 1) return;
        for (DD.removeEdge(CD), pD = 0, ++fD; fD < QD; ++pD, ++fD) SD.points = [], ID = {
          width: 0,
          height: 0,
          edgeLabel: SD,
          edgeObj: CD,
          rank: fD
        }, cD = kD(DD, "edge", ID, "_d"), fD === BD && (ID.width = SD.width, ID.height = SD.height, ID.dummy = "edge-label", ID.labelpos = SD.labelpos), DD.setEdge(iD, cD, {
          weight: SD.weight
        }, wD), 0 === pD && DD.graph().dummyChains.push(cD), iD = cD;
        DD.setEdge(iD, bD, {
          weight: SD.weight
        }, wD)
      }(DD, CD)))
    }

    function ZC(DD) {
      let CD = {};
      DD.sources().forEach((function cD(ID) {
        let pD = DD.node(ID);
        if (Object.hasOwn(CD, ID)) return pD.rank;
        CD[ID] = !0;
        let iD = DD.outEdges(ID),
          fD = iD ? iD.map((CD => null == CD ? Number.POSITIVE_INFINITY : cD(CD.w) - DD.edge(CD).minlen)) : [],
          bD = eD(Math.min, fD);
        return bD === Number.POSITIVE_INFINITY && (bD = 0), pD.rank = bD
      }))
    }

    function oC(DD, CD) {
      return DD.node(CD.w).rank - DD.node(CD.v).rank - DD.edge(CD).minlen
    }
    var vC = function(DD) {
      let CD = new RD({
          directed: !1
        }),
        cD = DD.nodes();
      if (0 === cD.length) throw new Error("Graph must have at least one node");
      let ID, pD, iD = cD[0],
        fD = DD.nodeCount();
      for (CD.setNode(iD, {}); NC(CD, DD) < fD && (ID = gC(CD, DD), ID);) pD = CD.hasNode(ID.v) ? oC(DD, ID) : -oC(DD, ID), XC(CD, DD, pD);
      return CD
    };

    function NC(DD, CD) {
      return DD.nodes().forEach((function cD(ID) {
        let pD = CD.nodeEdges(ID);
        pD && pD.forEach((pD => {
          let iD = pD.v,
            fD = ID === iD ? pD.w : iD;
          !DD.hasNode(fD) && !oC(CD, pD) && (DD.setNode(fD, {}), DD.setEdge(ID, fD, {}), cD(fD))
        }))
      })), DD.nodeCount()
    }

    function gC(DD, CD) {
      return CD.edges().reduce(((cD, ID) => {
        let pD = Number.POSITIVE_INFINITY;
        return DD.hasNode(ID.v) !== DD.hasNode(ID.w) && (pD = oC(CD, ID)), pD < cD[0] ? [pD, ID] : cD
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function XC(DD, CD, cD) {
      DD.nodes().forEach((DD => CD.node(DD).rank += cD))
    }
    var {
      preorder: mC,
      postorder: nC
    } = vD, OC = PC;

    function PC(DD) {
      DD = function(DD) {
        let CD = (new RD).setGraph(DD.graph());
        return DD.nodes().forEach((cD => CD.setNode(cD, DD.node(cD)))), DD.edges().forEach((cD => {
          let ID = CD.edge(cD.v, cD.w) || {
              weight: 0,
              minlen: 1
            },
            pD = DD.edge(cD);
          CD.setEdge(cD.v, cD.w, {
            weight: ID.weight + pD.weight,
            minlen: Math.max(ID.minlen, pD.minlen)
          })
        })), CD
      }(DD), ZC(DD);
      let CD, cD, ID = vC(DD);
      for (xC(ID), HC(ID, DD); CD = JC(ID);) cD = KC(ID, DD, CD), aC(ID, DD, CD, cD)
    }

    function HC(DD, CD) {
      let cD = nC(DD, DD.nodes());
      cD = cD.slice(0, cD.length - 1), cD.forEach((cD => function(DD, CD, cD) {
        let ID = DD.node(cD).parent,
          pD = DD.edge(cD, ID);
        pD.cutvalue = UC(DD, CD, cD)
      }(DD, CD, cD)))
    }

    function UC(DD, CD, cD) {
      let ID = DD.node(cD).parent,
        pD = !0,
        iD = CD.edge(cD, ID),
        fD = 0;
      iD || (pD = !1, iD = CD.edge(ID, cD)), fD = iD.weight;
      let bD = CD.nodeEdges(cD);
      return bD && bD.forEach((iD => {
        let bD = iD.v === cD,
          QD = bD ? iD.w : iD.v;
        if (QD !== ID) {
          let ID = bD === pD,
            wD = CD.edge(iD).weight;
          if (fD += ID ? wD : -wD, function(DD, CD, cD) {
              return DD.hasEdge(CD, cD)
            }(DD, cD, QD)) {
            let CD = DD.edge(cD, QD).cutvalue;
            fD += ID ? -CD : CD
          }
        }
      })), fD
    }

    function xC(DD, CD) {
      arguments.length < 2 && (CD = DD.nodes()[0]), qC(DD, {}, 1, CD)
    }

    function qC(DD, CD, cD, ID, pD) {
      let iD = cD,
        fD = DD.node(ID);
      CD[ID] = !0;
      let bD = DD.neighbors(ID);
      return bD && bD.forEach((pD => {
        Object.hasOwn(CD, pD) || (cD = qC(DD, CD, cD, pD, ID))
      })), fD.low = iD, fD.lim = cD++, pD ? fD.parent = pD : delete fD.parent, cD
    }

    function JC(DD) {
      return DD.edges().find((CD => DD.edge(CD).cutvalue < 0))
    }

    function KC(DD, CD, cD) {
      let ID = cD.v,
        pD = cD.w;
      CD.hasEdge(ID, pD) || (ID = cD.w, pD = cD.v);
      let iD = DD.node(ID),
        fD = DD.node(pD),
        bD = iD,
        QD = !1;
      return iD.lim > fD.lim && (bD = fD, QD = !0), CD.edges().filter((CD => QD === VC(DD, DD.node(CD.v), bD) && QD !== VC(DD, DD.node(CD.w), bD))).reduce(((DD, cD) => oC(CD, cD) < oC(CD, DD) ? cD : DD))
    }

    function aC(DD, CD, cD, ID) {
      let pD = cD.v,
        iD = cD.w;
      DD.removeEdge(pD, iD), DD.setEdge(ID.v, ID.w, {}), xC(DD), HC(DD, CD),
        function(DD, CD) {
          let cD = DD.nodes().find((CD => !DD.node(CD).parent));
          if (!cD) return;
          let ID = mC(DD, [cD]);
          ID = ID.slice(1), ID.forEach((cD => {
            let ID = DD.node(cD).parent,
              pD = CD.edge(cD, ID),
              iD = !1;
            pD || (pD = CD.edge(ID, cD), iD = !0), CD.node(cD).rank = CD.node(ID).rank + (iD ? pD.minlen : -pD.minlen)
          }))
        }(DD, CD)
    }

    function VC(DD, CD, cD) {
      return cD.low <= CD.lim && CD.lim <= cD.lim
    }
    PC.initLowLimValues = xC, PC.initCutValues = HC, PC.calcCutValue = UC, PC.leaveEdge = JC, PC.enterEdge = KC, PC.exchangeEdges = aC;
    var zC = function(DD) {
      let CD = DD.graph().ranker;
      if ("function" == typeof CD) return CD(DD);
      switch (CD) {
        case "network-simplex":
        default:
          lC(DD);
          break;
        case "tight-tree":
          ! function(DD) {
            ZC(DD), vC(DD)
          }(DD);
          break;
        case "longest-path":
          jC(DD);
        case "none":
      }
    };
    var jC = ZC;

    function lC(DD) {
      OC(DD)
    }
    var LC = function(DD) {
      let CD = function(DD) {
          let CD = {},
            cD = 0;

          function ID(pD) {
            let iD = cD;
            DD.children(pD).forEach(ID), CD[pD] = {
              low: iD,
              lim: cD++
            }
          }
          return DD.children(IC).forEach(ID), CD
        }(DD),
        cD = DD.graph();
      if (!Array.isArray(cD.dummyChains)) return;
      cD.dummyChains.forEach((cD => {
        let ID = DD.node(cD),
          pD = ID.edgeObj,
          iD = function(DD, CD, cD, ID) {
            let pD, iD = [],
              fD = [],
              bD = Math.min(CD[cD].low, CD[ID].low),
              QD = Math.max(CD[cD].lim, CD[ID].lim);
            pD = cD;
            do {
              pD = DD.parent(pD), iD.push(pD)
            } while (pD && (CD[pD].low > bD || QD > CD[pD].lim));
            let wD = pD,
              SD = ID;
            for (;
              (SD = DD.parent(SD)) !== wD;) fD.push(SD);
            return {
              path: iD.concat(fD.reverse()),
              lca: wD
            }
          }(DD, CD, pD.v, pD.w),
          fD = iD.path,
          bD = iD.lca,
          QD = 0,
          wD = fD[QD],
          SD = !0;
        for (; cD !== pD.w;) {
          if (ID = DD.node(cD), SD) {
            for (;
              (wD = fD[QD]) !== bD && DD.node(wD).maxRank < ID.rank;) QD++;
            wD === bD && (SD = !1)
          }
          if (!SD) {
            for (; QD < fD.length - 1 && DD.node(fD[QD + 1]).minRank <= ID.rank;) QD++;
            wD = fD[QD]
          }
          void 0 !== wD && DD.setParent(cD, wD), cD = DD.successors(cD)[0]
        }
      }))
    };

    function TC(DD) {
      let CD = kD(DD, "root", {}, "_root"),
        cD = function(DD) {
          let CD = {};

          function cD(ID, pD) {
            let iD = DD.children(ID);
            iD && iD.length && iD.forEach((DD => cD(DD, pD + 1))), CD[ID] = pD
          }
          return DD.children(IC).forEach((DD => cD(DD, 1))), CD
        }(DD),
        ID = Object.values(cD),
        pD = eD(Math.max, ID) - 1,
        iD = 2 * pD + 1;
      DD.graph().nestingRoot = CD, DD.edges().forEach((CD => DD.edge(CD).minlen *= iD));
      let fD = function(DD) {
        return DD.edges().reduce(((CD, cD) => CD + DD.edge(cD).weight), 0)
      }(DD) + 1;
      DD.children(IC).forEach((ID => {
        GC(DD, CD, iD, fD, pD, cD, ID)
      })), DD.graph().nodeRankFactor = iD
    }

    function GC(DD, CD, cD, ID, pD, iD, fD) {
      var bD;
      let QD = DD.children(fD);
      if (!QD.length) return void(fD !== CD && DD.setEdge(CD, fD, {
        weight: 0,
        minlen: cD
      }));
      let wD = sD(DD, "_bt"),
        SD = sD(DD, "_bb"),
        BD = DD.node(fD);
      DD.setParent(wD, fD), BD.borderTop = wD, DD.setParent(SD, fD), BD.borderBottom = SD, QD.forEach((bD => {
        var QD;
        GC(DD, CD, cD, ID, pD, iD, bD);
        let BD = DD.node(bD),
          yD = BD.borderTop ? BD.borderTop : bD,
          MD = BD.borderBottom ? BD.borderBottom : bD,
          tD = BD.borderTop ? ID : 2 * ID,
          ZD = yD !== MD ? 1 : pD - (null != (QD = iD[fD]) ? QD : 0) + 1;
        DD.setEdge(wD, yD, {
          weight: tD,
          minlen: ZD,
          nestingEdge: !0
        }), DD.setEdge(MD, SD, {
          weight: tD,
          minlen: ZD,
          nestingEdge: !0
        })
      })), DD.parent(fD) || DD.setEdge(CD, wD, {
        weight: 0,
        minlen: pD + (null != (bD = iD[fD]) ? bD : 0)
      })
    }
    var RC = function(DD) {
      DD.children(IC).forEach((function CD(cD) {
        let ID = DD.children(cD),
          pD = DD.node(cD);
        if (ID.length && ID.forEach(CD), pD && Object.hasOwn(pD, "minRank")) {
          pD.borderLeft = [], pD.borderRight = [];
          for (let CD = pD.minRank, ID = pD.maxRank + 1; CD < ID; ++CD) kC(DD, "borderLeft", "_bl", cD, pD, CD), kC(DD, "borderRight", "_br", cD, pD, CD)
        }
      }))
    };

    function kC(DD, CD, cD, ID, pD, iD) {
      let fD = {
          width: 0,
          height: 0,
          rank: iD,
          borderType: CD
        },
        bD = pD[CD][iD - 1],
        QD = kD(DD, "border", fD, cD);
      pD[CD][iD] = QD, DD.setParent(QD, ID), bD && DD.setEdge(bD, QD, {
        weight: 1
      })
    }

    function dC(DD) {
      var CD;
      let cD = null == (CD = DD.graph().rankdir) ? void 0 : CD.toLowerCase();
      ("bt" === cD || "rl" === cD) && function(DD) {
        DD.nodes().forEach((CD => sC(DD.node(CD)))), DD.edges().forEach((CD => {
          var cD;
          let ID = DD.edge(CD);
          null == (cD = ID.points) || cD.forEach(sC), Object.hasOwn(ID, "y") && sC(ID)
        }))
      }(DD), ("lr" === cD || "rl" === cD) && (function(DD) {
        DD.nodes().forEach((CD => EC(DD.node(CD)))), DD.edges().forEach((CD => {
          var cD;
          let ID = DD.edge(CD);
          null == (cD = ID.points) || cD.forEach(EC), Object.hasOwn(ID, "x") && EC(ID)
        }))
      }(DD), YC(DD))
    }

    function YC(DD) {
      DD.nodes().forEach((CD => WC(DD.node(CD)))), DD.edges().forEach((CD => WC(DD.edge(CD))))
    }

    function WC(DD) {
      let CD = DD.width;
      DD.width = DD.height, DD.height = CD
    }

    function sC(DD) {
      DD.y = -DD.y
    }

    function EC(DD) {
      let CD = DD.x;
      DD.x = DD.y, DD.y = CD
    }

    function eC(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        cD = {},
        ID = DD.nodes().filter((CD => !DD.children(CD).length)),
        pD = ID.map((CD => DD.node(CD).rank)),
        iD = DC(eD(Math.max, pD) + 1).map((() => []));
      return ID.sort(((CD, cD) => DD.node(CD).rank - DD.node(cD).rank)).forEach((function ID(pD) {
        if (cD[pD]) return;
        cD[pD] = !0;
        let fD = DD.node(pD);
        iD[fD.rank].push(pD);
        let bD = DD.successors(pD);
        bD && [...bD].sort(((cD, ID) => function(cD, ID) {
          let pD = DD.node(cD),
            iD = DD.node(ID);
          return pC(CD, pD, iD)
        }(cD, ID))).forEach(ID)
      })), iD
    }

    function uC(DD, CD) {
      let cD = 0;
      for (let ID = 1; ID < CD.length; ++ID) cD += hC(DD, CD[ID - 1], CD[ID]);
      return cD
    }

    function hC(DD, CD, cD) {
      let ID = function(DD, CD) {
          return DD.reduce(((DD, cD, ID) => (DD[cD] = CD[ID], DD)), {})
        }(cD, cD.map(((DD, CD) => CD))),
        pD = CD.flatMap((CD => {
          let cD = DD.outEdges(CD);
          return cD ? cD.map((CD => ({
            pos: ID[CD.w],
            weight: DD.edge(CD).weight
          }))).sort(((DD, CD) => DD.pos - CD.pos)) : []
        })),
        iD = 1;
      for (; iD < cD.length;) iD <<= 1;
      let fD = 2 * iD - 1;
      iD -= 1;
      let bD = new Array(fD).fill(0),
        QD = 0;
      return pD.forEach((DD => {
        let CD = DD.pos + iD;
        bD[CD] += DD.weight;
        let cD = 0;
        for (; CD > 0;) CD % 2 && (cD += bD[CD + 1]), CD = CD - 1 >> 1, bD[CD] += DD.weight;
        QD += DD.weight * cD
      })), QD
    }

    function rC(DD, CD) {
      let cD = {};
      return DD.forEach(((DD, CD) => {
          let ID = {
            indegree: 0,
            in: [],
            out: [],
            vs: [DD.v],
            i: CD
          };
          void 0 !== DD.barycenter && (ID.barycenter = DD.barycenter, ID.weight = DD.weight), cD[DD.v] = ID
        })), CD.edges().forEach((DD => {
          let CD = cD[DD.v],
            ID = cD[DD.w];
          void 0 !== CD && void 0 !== ID && (ID.indegree++, CD.out.push(ID))
        })),
        function(DD) {
          let CD = [];

          function cD(DD) {
            return CD => {
              CD.merged || (void 0 === CD.barycenter || void 0 === DD.barycenter || CD.barycenter >= DD.barycenter) && function(DD, CD) {
                let cD = 0,
                  ID = 0;
                DD.weight && (cD += DD.barycenter * DD.weight, ID += DD.weight), CD.weight && (cD += CD.barycenter * CD.weight, ID += CD.weight), DD.vs = CD.vs.concat(DD.vs), DD.barycenter = cD / ID, DD.weight = ID, DD.i = Math.min(CD.i, DD.i), CD.merged = !0
              }(DD, CD)
            }
          }

          function ID(CD) {
            return cD => {
              cD.in.push(CD), 0 === --cD.indegree && DD.push(cD)
            }
          }
          for (; DD.length;) {
            let pD = DD.pop();
            CD.push(pD), pD.in.reverse().forEach(cD(pD)), pD.out.forEach(ID(pD))
          }
          return CD.filter((DD => !DD.merged)).map((DD => CC(DD, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(cD).filter((DD => !DD.indegree)))
    }

    function AC(DD, CD, cD, ID, pD) {
      let iD = {},
        fD = null,
        bD = null,
        QD = pD;
      "boolean" == typeof CD ? (QD = CD, iD = {}) : CD && (iD = CD, fD = null != cD ? cD : null, bD = null != ID ? ID : null);
      let wD = function(DD, CD) {
          let cD = {
            lhs: [],
            rhs: []
          };
          return DD.forEach((DD => {
            CD(DD) ? cD.lhs.push(DD) : cD.rhs.push(DD)
          })), cD
        }(DD, (DD => Object.hasOwn(DD, "barycenter"))),
        SD = wD.lhs,
        BD = wD.rhs.sort(((DD, CD) => CD.i - DD.i)),
        yD = [],
        MD = 0,
        tD = 0,
        ZD = 0;
      SD.sort(function(DD, CD, cD) {
        return (ID, pD) => {
          if (ID.barycenter < pD.barycenter) return -1;
          if (ID.barycenter > pD.barycenter) return 1;
          if (DD && ("string" == typeof ID.vs[0] || "string" == typeof pD.vs[0])) {
            let cD = DD.node(ID.vs[0]),
              iD = DD.node(pD.vs[0]),
              fD = pC(CD, cD, iD);
            if (0 !== fD) return fD
          }
          return cD ? pD.i - ID.i : ID.i - pD.i
        }
      }(bD, fD, !!QD));
      for (let [vD, ND] of Object.entries(iD)) {
        let DD = SD.findIndex((DD => DD.vs[0] === vD));
        SD.splice(DD + 1, 0, ND)
      }
      ZD = FC(yD, BD, ZD), SD.forEach((DD => {
        ZD += DD.vs.length, yD.push(DD.vs), MD += DD.barycenter * DD.weight, tD += DD.weight, ZD = FC(yD, BD, ZD)
      }));
      let oD = {
        vs: yD.flat(1)
      };
      return tD && (oD.barycenter = MD / tD, oD.weight = tD), oD
    }

    function FC(DD, CD, cD) {
      let ID;
      for (; CD.length && (ID = CD[CD.length - 1]).i <= cD;) CD.pop(), DD.push(ID.vs), cD++;
      return cD
    }

    function Dc(DD, CD, cD, ID, pD) {
      var iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD;
      let oD = null,
        vD = pD;
      "boolean" == typeof ID ? (vD = ID, oD = null) : void 0 !== ID && (oD = ID);
      let ND = DD.children(CD),
        gD = DD.node(CD),
        XD = gD ? gD.borderLeft : void 0,
        mD = gD ? gD.borderRight : void 0,
        nD = {};
      XD && (ND = ND.filter((DD => DD !== XD && DD !== mD)));
      let OD = function(DD) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((CD => {
          let cD = DD.inEdges(CD);
          if (!cD || !cD.length) return {
            v: CD
          };
          {
            let ID = cD.reduce(((CD, cD) => {
              let ID = DD.edge(cD),
                pD = DD.node(cD.v);
              return {
                sum: CD.sum + ID.weight * pD.order,
                weight: CD.weight + ID.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: CD,
              barycenter: ID.sum / ID.weight,
              weight: ID.weight
            }
          }
        }))
      }(DD, ND);
      OD.forEach((CD => {
        if (DD.children(CD.v).length) {
          let {
            result: ID
          } = Dc(DD, CD.v, cD, oD, vD);
          nD[CD.v] = ID, Object.hasOwn(ID, "barycenter") && function(DD, CD) {
            void 0 !== DD.barycenter ? (DD.barycenter = (DD.barycenter * DD.weight + CD.barycenter * CD.weight) / (DD.weight + CD.weight), DD.weight += CD.weight) : (DD.barycenter = CD.barycenter, DD.weight = CD.weight)
          }(CD, ID)
        }
      }));
      let PD = rC(OD, cD);
      ! function(DD, CD) {
        DD.forEach((DD => {
          DD.vs = DD.vs.flatMap((DD => CD[DD] ? CD[DD].vs : DD))
        }))
      }(PD, nD);
      let HD = {},
        UD = !1;
      for (let qD = 0; qD < PD.length; qD++)
        for (let CD = qD + 1; CD < PD.length; CD++)
          if (PD[qD] && PD[CD] && null != (iD = PD[qD]) && iD.barycenter && null != (fD = PD[CD]) && fD.barycenter && (null == (bD = PD[qD]) ? void 0 : bD.barycenter) === PD[CD].barycenter) {
            let cD = null != (wD = null == (QD = PD[qD]) ? void 0 : QD.vs[0]) ? wD : "",
              ID = null != (BD = null == (SD = PD[CD]) ? void 0 : SD.vs[0]) ? BD : "",
              pD = DD.node(cD),
              iD = DD.node(ID);
            if ("edge" === pD.dummy && "edge" === iD.dummy && (null == (yD = pD.edgeObj) ? void 0 : yD.v) === (null == (MD = iD.edgeObj) ? void 0 : MD.v) && (null == (tD = pD.edgeObj) ? void 0 : tD.w) === (null == (ZD = iD.edgeObj) ? void 0 : ZD.w)) {
              if (pD.edgeLabel.reversed) {
                HD[ID] = PD[qD], PD.splice(qD, 1), qD--;
                break
              }
              HD[cD] = PD[CD], PD.splice(CD, 1), CD--
            } else UD = !0
          } let xD = AC(PD, HD, oD, DD, vD);
      if (XD && mD) {
        xD.vs = [XD, xD.vs, mD].flat(1);
        let CD = DD.predecessors(XD);
        if (CD && CD.length) {
          let cD = DD.node(CD[0]),
            ID = DD.predecessors(mD),
            pD = DD.node(ID[0]);
          Object.hasOwn(xD, "barycenter") || (xD.barycenter = 0, xD.weight = 0), xD.barycenter = (xD.barycenter * xD.weight + cD.order + pD.order) / (xD.weight + 2), xD.weight += 2
        }
      }
      return Object.defineProperty(xD, "result", {
        value: xD,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(xD, "usedBias", {
        value: UD,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), xD
    }

    function Cc(DD, CD, cD, ID) {
      ID || (ID = DD.nodes());
      let pD = function(DD) {
          let CD;
          for (; DD.hasNode(CD = FD("_root")););
          return CD
        }(DD),
        iD = new RD({
          compound: !0
        }).setGraph({
          root: pD
        }).setDefaultNodeLabel((CD => DD.node(CD)));
      return ID.forEach((ID => {
        let fD = DD.node(ID),
          bD = DD.parent(ID);
        if (fD.rank === CD || fD.minRank <= CD && CD <= fD.maxRank) {
          iD.setNode(ID), iD.setParent(ID, bD || pD);
          let QD = DD[cD](ID);
          QD && QD.forEach((CD => {
            let cD = CD.v === ID ? CD.w : CD.v,
              pD = iD.edge(cD, ID),
              fD = void 0 !== pD ? pD.weight : 0;
            iD.setEdge(cD, ID, {
              weight: DD.edge(CD).weight + fD
            })
          })), Object.hasOwn(fD, "minRank") && iD.setNode(ID, {
            borderLeft: fD.borderLeft[CD],
            borderRight: fD.borderRight[CD]
          })
        }
      })), iD
    }

    function cc(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof CD.customOrder) return void CD.customOrder(DD, cc);
      let ID = uD(DD),
        pD = Ic(DD, DC(1, ID + 1), "inEdges"),
        iD = Ic(DD, DC(ID - 1, -1, -1), "outEdges"),
        fD = eC(DD, cD);
      if (ic(DD, fD), CD.disableOptimalOrderHeuristic) return;
      let bD, QD = Number.POSITIVE_INFINITY,
        wD = CD.constraints || [];
      for (let SD = 0, BD = 0; BD < 4; ++SD, ++BD) {
        pc(SD % 2 ? pD : iD, SD % 4 >= 2, wD, cD), fD = WD(DD);
        let CD = uC(DD, fD);
        CD < QD ? (BD = 0, bD = Object.assign({}, fD), QD = CD) : CD === QD && (bD = structuredClone(fD))
      }
      ic(DD, bD)
    }

    function Ic(DD, CD, cD) {
      let ID = new Map,
        pD = (DD, CD) => {
          ID.has(DD) || ID.set(DD, []), ID.get(DD).push(CD)
        };
      for (let iD of DD.nodes()) {
        let CD = DD.node(iD);
        if ("number" == typeof CD.rank && pD(CD.rank, iD), "number" == typeof CD.minRank && "number" == typeof CD.maxRank)
          for (let DD = CD.minRank; DD <= CD.maxRank; DD++) DD !== CD.rank && pD(DD, iD)
      }
      return CD.map((function(CD) {
        return Cc(DD, CD, cD, ID.get(CD) || [])
      }))
    }

    function pc(DD, CD, cD, ID) {
      let pD = !0,
        iD = new RD;
      DD.forEach((function(DD) {
        cD.forEach((DD => iD.setEdge(DD.left, DD.right)));
        let fD = DD.graph().root,
          {
            result: bD,
            usedBias: QD
          } = Dc(DD, fD, iD, ID, pD);
        CD && QD && (pD = !pD), bD.vs.forEach(((CD, cD) => DD.node(CD).order = cD)),
          function(DD, CD, cD) {
            let ID, pD = {};
            cD.forEach((cD => {
              let iD, fD, bD = DD.parent(cD);
              for (; bD;) {
                if (iD = DD.parent(bD), iD ? (fD = pD[iD], pD[iD] = bD) : (fD = ID, ID = bD), fD && fD !== bD) return void CD.setEdge(fD, bD);
                bD = iD
              }
            }))
          }(DD, iD, bD.vs)
      }))
    }

    function ic(DD, CD) {
      Object.values(CD).forEach((CD => CD.forEach(((CD, cD) => DD.node(CD).order = cD))))
    }

    function fc(DD, CD, cD) {
      if (CD > cD) {
        let DD = CD;
        CD = cD, cD = DD
      }
      let ID = DD[CD];
      ID || (DD[CD] = ID = {}), ID[cD] = !0
    }

    function bc(DD, CD, cD) {
      if (CD > cD) {
        let DD = CD;
        CD = cD, cD = DD
      }
      let ID = DD[CD];
      return void 0 !== ID && Object.hasOwn(ID, cD)
    }

    function Qc(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        iD = {},
        fD = function(DD, CD, cD, ID) {
          let pD = new RD,
            iD = DD.graph(),
            fD = function(DD, CD, cD) {
              return (ID, pD, iD) => {
                let fD, bD = ID.node(pD),
                  QD = ID.node(iD),
                  wD = 0;
                if (wD += bD.width / 2, Object.hasOwn(bD, "labelpos")) switch (bD.labelpos.toLowerCase()) {
                  case "l":
                    fD = -bD.width / 2;
                    break;
                  case "r":
                    fD = bD.width / 2
                }
                if (fD && (wD += cD ? fD : -fD), fD = void 0, wD += (bD.dummy ? CD : DD) / 2, wD += (QD.dummy ? CD : DD) / 2, wD += QD.width / 2, Object.hasOwn(QD, "labelpos")) switch (QD.labelpos.toLowerCase()) {
                  case "l":
                    fD = QD.width / 2;
                    break;
                  case "r":
                    fD = -QD.width / 2
                }
                return fD && (wD += cD ? fD : -fD), wD
              }
            }(iD.nodesep, iD.edgesep, ID);
          return CD.forEach((CD => {
            let ID;
            CD.forEach((CD => {
              let iD = cD[CD];
              if (void 0 !== iD) {
                if (pD.setNode(iD), void 0 !== ID) {
                  let bD = cD[ID];
                  if (void 0 !== bD) {
                    let cD = pD.edge(bD, iD);
                    pD.setEdge(bD, iD, Math.max(fD(DD, CD, ID), cD || 0))
                  }
                }
                ID = CD
              }
            }))
          })), pD
        }(DD, CD, cD, pD),
        bD = pD ? "borderLeft" : "borderRight";

      function QD(DD, CD) {
        let cD = fD.nodes().slice(),
          ID = {},
          pD = cD.pop();
        for (; pD;) {
          if (ID[pD]) DD(pD);
          else {
            ID[pD] = !0, cD.push(pD);
            for (let DD of CD(pD)) cD.push(DD)
          }
          pD = cD.pop()
        }
      }
      return QD((function(DD) {
        let CD = fD.inEdges(DD);
        iD[DD] = CD ? CD.reduce(((DD, CD) => {
          var cD;
          let ID = null != (cD = iD[CD.v]) ? cD : 0,
            pD = fD.edge(CD);
          return Math.max(DD, ID + (void 0 !== pD ? pD : 0))
        }), 0) : 0
      }), (function(DD) {
        return fD.predecessors(DD) || []
      })), QD((function(CD) {
        let cD = fD.outEdges(CD),
          ID = Number.POSITIVE_INFINITY;
        cD && (ID = cD.reduce(((DD, CD) => {
          let cD = iD[CD.w],
            ID = fD.edge(CD);
          return Math.min(DD, (void 0 !== cD ? cD : 0) - (void 0 !== ID ? ID : 0))
        }), Number.POSITIVE_INFINITY));
        let pD = DD.node(CD);
        ID !== Number.POSITIVE_INFINITY && pD.borderType !== bD && (iD[CD] = Math.max(void 0 !== iD[CD] ? iD[CD] : 0, ID))
      }), (function(DD) {
        return fD.successors(DD) || []
      })), Object.keys(ID).forEach((DD => {
        var CD;
        let ID = cD[DD];
        void 0 !== ID && (iD[DD] = null != (CD = iD[ID]) ? CD : 0)
      })), iD
    }

    function wc(DD, CD) {
      let cD, ID = WD(DD),
        pD = Object.assign(function(DD, CD) {
          let cD = {};
          return CD.length && CD.reduce((function(CD, ID) {
            let pD = 0,
              iD = 0,
              fD = CD.length,
              bD = ID[ID.length - 1];
            return ID.forEach(((CD, QD) => {
              let wD = function(DD, CD) {
                  if (DD.node(CD).dummy) {
                    let cD = DD.predecessors(CD);
                    if (cD) return cD.find((CD => DD.node(CD).dummy))
                  }
                }(DD, CD),
                SD = wD ? DD.node(wD).order : fD;
              (wD || CD === bD) && (ID.slice(iD, QD + 1).forEach((CD => {
                let ID = DD.predecessors(CD);
                ID && ID.forEach((ID => {
                  let iD = DD.node(ID),
                    fD = iD.order;
                  (fD < pD || SD < fD) && (!iD.dummy || !DD.node(CD).dummy) && fc(cD, ID, CD)
                }))
              })), iD = QD + 1, pD = SD)
            })), ID
          })), cD
        }(DD, ID), function(DD, CD) {
          let cD = {};

          function ID(CD, ID, pD, iD, fD) {
            DC(ID, pD).forEach((ID => {
              let pD = CD[ID];
              if (void 0 !== pD && DD.node(pD).dummy) {
                let CD = DD.predecessors(pD);
                CD && CD.forEach((CD => {
                  if (void 0 === CD) return;
                  let ID = DD.node(CD);
                  ID.dummy && (ID.order < iD || ID.order > fD) && fc(cD, CD, pD)
                }))
              }
            }))
          }
          return CD.length && CD.reduce((function(CD, cD) {
            let pD = -1,
              iD = -1,
              fD = 0;
            return cD.forEach(((bD, QD) => {
              if ("border" === DD.node(bD).dummy) {
                let CD = DD.predecessors(bD);
                if (CD && CD.length) {
                  let bD = CD[0];
                  if (void 0 === bD) return;
                  iD = DD.node(bD).order, ID(cD, fD, QD, pD, iD), fD = QD, pD = iD
                }
              }
              ID(cD, fD, cD.length, iD, CD.length)
            })), cD
          })), cD
        }(DD, ID)),
        iD = {};
      ["u", "d"].forEach((fD => {
        cD = "u" === fD ? ID : Object.values(ID).reverse(), ["l", "r"].forEach((ID => {
          "r" === ID && (cD = cD.map((DD => Object.values(DD).reverse())));
          let bD = function(DD, CD, cD, ID, pD) {
              let iD = {},
                fD = {},
                bD = {};
              return CD.forEach((DD => {
                DD.forEach(((DD, CD) => {
                  iD[DD] = DD, fD[DD] = DD, bD[DD] = CD
                }))
              })), CD.forEach((CD => {
                let QD = -1,
                  wD = -1,
                  SD = !1,
                  BD = CD,
                  yD = CD.findIndex((CD => (null == pD ? void 0 : pD.includes(CD)) || Sc(CD, DD, pD)));
                yD > 0 && (BD = [CD[yD], ...CD.slice(0, yD), ...CD.slice(yD + 1)], SD = !0), BD.forEach((CD => {
                  var BD;
                  let yD = ID(CD);
                  if (yD && yD.length) {
                    null != pD && pD.includes(CD) && (yD = yD.filter((CD => Sc(CD, DD, pD))));
                    let ID = yD.sort(((DD, CD) => {
                        let cD = bD[DD],
                          ID = bD[CD];
                        return (void 0 !== cD ? cD : 0) - (void 0 !== ID ? ID : 0)
                      })),
                      MD = (ID.length - 1) / 2;
                    for (let DD = Math.floor(MD), pD = Math.ceil(MD); DD <= pD; ++DD) {
                      let pD = ID[DD];
                      if (void 0 === pD) continue;
                      let yD = bD[pD];
                      if (void 0 !== yD && fD[CD] === CD && QD < yD && bD[pD] !== wD && !bc(cD, CD, pD)) {
                        let DD = iD[pD];
                        void 0 !== DD && (fD[pD] = CD, fD[CD] = iD[CD] = DD, QD = yD, SD && (QD = -1, wD = null != (BD = bD[pD]) ? BD : -1, SD = !1))
                      }
                    }
                  }
                }))
              })), {
                root: iD,
                align: fD
              }
            }(DD, cD, pD, (CD => ("u" === fD ? DD.predecessors(CD) : DD.successors(CD)) || []), CD),
            QD = Qc(DD, cD, bD.root, bD.align, "r" === ID);
          "r" === ID && (QD = cC(QD, (DD => -DD))), iD[fD + ID] = QD
        }))
      }));
      let fD = function(DD, CD) {
        return Object.values(CD).reduce(((CD, cD) => {
          let ID = Number.NEGATIVE_INFINITY,
            pD = Number.POSITIVE_INFINITY;
          Object.entries(cD).forEach((CD => {
            let [cD, iD] = CD, fD = function(DD, CD) {
              return DD.node(CD).width
            }(DD, cD) / 2;
            ID = Math.max(iD + fD, ID), pD = Math.min(iD - fD, pD)
          }));
          let iD = ID - pD;
          return iD < CD[0] && (CD = [iD, cD]), CD
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(DD, iD);
      return function(DD, CD) {
          let cD = Object.values(CD),
            ID = eD(Math.min, cD),
            pD = eD(Math.max, cD);
          ["u", "d"].forEach((cD => {
            ["l", "r"].forEach((iD => {
              let fD = cD + iD,
                bD = DD[fD];
              if (!bD || bD === CD) return;
              let QD = Object.values(bD),
                wD = ID - eD(Math.min, QD);
              "l" !== iD && (wD = pD - eD(Math.max, QD)), wD && (DD[fD] = cC(bD, (DD => DD + wD)))
            }))
          }))
        }(iD, fD),
        function(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            cD = DD.ul;
          return cD ? cC(cD, ((cD, ID) => {
            var pD, iD;
            if (CD) {
              let cD = CD.toLowerCase(),
                pD = DD[cD];
              if (pD && void 0 !== pD[ID]) return pD[ID]
            }
            let fD = Object.values(DD).map((DD => {
              let CD = DD[ID];
              return void 0 !== CD ? CD : 0
            })).sort(((DD, CD) => DD - CD));
            return ((null != (pD = fD[1]) ? pD : 0) + (null != (iD = fD[2]) ? iD : 0)) / 2
          })) : {}
        }(iD, DD.graph().align)
    }

    function Sc(DD, CD, cD) {
      var ID;
      if (!cD) return !1;
      let pD = null == (ID = CD.node(DD)) ? void 0 : ID.edgeObj;
      if (!pD || CD.node(DD).edgeLabel.reversed) return !1;
      let iD = cD.indexOf(null == pD ? void 0 : pD.v),
        fD = cD.indexOf(null == pD ? void 0 : pD.w);
      return -1 !== iD && -1 !== fD && iD === (fD + 1) % cD.length || iD === (fD - 1) % cD.length
    }

    function Bc(DD, CD) {
      (function(DD) {
        let CD = WD(DD),
          cD = DD.graph(),
          ID = cD.ranksep,
          pD = cD.rankalign,
          iD = 0;
        CD.forEach((CD => {
          let cD = CD.reduce(((CD, cD) => {
            var ID;
            let pD = null != (ID = DD.node(cD).height) ? ID : 0;
            return CD > pD ? CD : pD
          }), 0);
          CD.forEach((CD => {
            let ID = DD.node(CD);
            ID.y = "top" === pD ? iD + ID.height / 2 : "bottom" === pD ? iD + cD - ID.height / 2 : iD + cD / 2
          })), iD += cD + ID
        }))
      })(DD = dD(DD)), Object.entries(wc(DD, CD)).forEach((CD => {
        let [cD, ID] = CD;
        return DD.node(cD).x = ID
      }))
    }
    var yc = new WeakMap;

    function Mc(DD) {
      return Zc(DD, rD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), DD
    }

    function tc(DD, CD, cD) {
      let ID = CD;
      for (; void 0 !== ID;) {
        let CD = DD.parent(ID);
        if (CD === cD) return ID;
        ID = CD
      }
    }

    function Zc(DD, CD, cD) {
      var ID;
      let pD = DD.nodes().filter((CD => DD.children(CD).length)),
        iD = {};
      pD.forEach((ID => {
        let pD = DD.node(ID);
        if (pD && pD.rankdir) {
          let fD = new RD({
            multigraph: !0,
            compound: !0
          });
          fD.setGraph({
            rankdir: pD.rankdir
          });
          let bD = DD.children(ID);
          bD.forEach((CD => {
            let cD = {
              ...DD.node(CD)
            };
            fD.setNode(CD, cD);
            let pD = DD.parent(CD);
            pD && pD !== ID && bD.includes(pD) && fD.setParent(CD, pD)
          }));
          let QD = new Set;
          DD.edges().forEach((CD => {
            let cD = tc(DD, CD.v, ID),
              pD = tc(DD, CD.w, ID);
            if (cD && pD && cD !== pD) {
              let ID = `${cD}\0${pD}`;
              QD.has(ID) || (QD.add(ID), fD.setEdge(cD, pD, {
                ...DD.edge(CD)
              }))
            }
          })), Zc(fD, CD, cD);
          let wD = Uc(fD);
          oc(wD, CD, cD, null), vc(fD, wD);
          let SD = 1 / 0,
            BD = 1 / 0,
            yD = -1 / 0,
            MD = -1 / 0;
          fD.nodes().forEach((DD => {
            if (DD === ID) return;
            let CD = fD.node(DD);
            CD && "number" == typeof CD.x && "number" == typeof CD.y && "number" == typeof CD.width && "number" == typeof CD.height && (SD = Math.min(SD, CD.x - CD.width / 2), yD = Math.max(yD, CD.x + CD.width / 2), BD = Math.min(BD, CD.y - CD.height / 2), MD = Math.max(MD, CD.y + CD.height / 2))
          })), (!isFinite(SD) || !isFinite(BD) || !isFinite(yD) || !isFinite(MD)) && (SD = BD = 0, yD = MD = 0);
          let tD = yD - SD,
            ZD = MD - BD;
          iD[ID] = {
            minX: SD,
            XI: BD,
            maxX: yD,
            mI: MD,
            width: tD,
            height: ZD,
            offsetX: SD,
            offsetY: BD
          }, pD._dagreClusterSubgraph = fD
        }
      }));
      let fD = [],
        bD = new Map;
      pD.forEach((CD => {
        let cD = DD.node(CD);
        cD && cD.rankdir && iD[CD] && bD.set(CD, (DD.children(CD) || []).filter((DD => DD !== CD)))
      }));
      let QD = new Set([...bD.values()].flat()),
        wD = new Map;
      bD.forEach(((CD, cD) => {
        QD.has(cD) || wD.set(cD, (CD => {
          let cD = [],
            ID = (DD.children(CD) || []).filter((DD => DD !== CD));
          for (; ID.length > 0;) {
            let CD = ID.shift();
            cD.push(CD), (DD.children(CD) || []).filter((DD => DD !== CD)).forEach((DD => ID.push(DD)))
          }
          return cD
        })(cD))
      }));
      let SD = new Set([...wD.values()].flat()),
        BD = DD => {
          for (let [CD, cD] of wD)
            if (cD.includes(DD)) return CD;
          return DD
        },
        yD = [];
      DD.edges().forEach((CD => {
        (SD.has(CD.v) || SD.has(CD.w)) && yD.push({
          edge: CD,
          label: DD.edge(CD)
        })
      }));
      let MD = new Map;
      SD.forEach((CD => {
        let cD = DD.parent(CD);
        MD.set(CD, "string" == typeof cD ? cD : void 0)
      })), wD.forEach(((CD, cD) => {
        let ID = DD.node(cD),
          pD = [];
        CD.forEach((CD => {
          let cD = DD.node(CD);
          cD && (pD.push({
            id: CD,
            node: cD,
            parent: MD.get(CD)
          }), DD.removeNode(CD))
        }));
        let bD = yD.filter((DD => {
            let {
              edge: cD
            } = DD;
            return CD.includes(cD.v) || CD.includes(cD.w)
          })),
          QD = iD[cD];
        ID && (fD.push({
          clusterId: cD,
          subgraph: ID._dagreClusterSubgraph,
          bounds: QD,
          children: CD,
          removedNodes: pD,
          removedEdges: bD
        }), ID.width = QD.width, ID.height = QD.height)
      }));
      let tD = new Set;
      yD.forEach((CD => {
        let {
          edge: cD,
          label: ID
        } = CD, pD = BD(cD.v), iD = BD(cD.w);
        if (pD !== iD && DD.hasNode(pD) && DD.hasNode(iD)) {
          let CD = `${pD}\0${iD}`;
          tD.has(CD) || (tD.add(CD), DD.setEdge(pD, iD, {
            ...ID,
            width: 0,
            height: 0
          }))
        }
      }));
      let ZD = Uc(DD),
        oD = oc(ZD, CD, cD, null != (ID = yc.get(DD)) ? ID : null);
      yc.set(DD, oD), vc(DD, ZD), tD.forEach((CD => {
        let cD = CD.indexOf("\0"),
          ID = CD.slice(0, cD),
          pD = CD.slice(cD + 1);
        DD.hasEdge(ID, pD) && DD.removeEdge(ID, pD)
      })), fD.forEach((CD => {
        let {
          clusterId: cD,
          subgraph: ID,
          bounds: pD,
          removedNodes: iD,
          removedEdges: fD
        } = CD;
        var bD, QD;
        let wD = DD.node(cD),
          SD = null != (bD = null == wD ? void 0 : wD.x) ? bD : 0,
          BD = null != (QD = null == wD ? void 0 : wD.y) ? QD : 0,
          yD = (pD.minX + pD.maxX) / 2,
          MD = (pD.XI + pD.mI) / 2;
        iD.forEach((CD => {
          let {
            id: cD,
            node: ID,
            parent: pD
          } = CD;
          DD.setNode(cD, ID), void 0 !== pD && DD.setParent(cD, pD)
        })), fD.forEach((CD => {
          let {
            edge: cD,
            label: ID
          } = CD;
          DD.setEdge(cD, ID)
        })), ID.nodes().forEach((CD => {
          if (CD === cD) return;
          let pD = ID.node(CD),
            iD = DD.node(CD);
          iD && pD && "number" == typeof pD.x && "number" == typeof pD.y && (iD.x = SD + (pD.x - yD), iD.y = BD + (pD.y - MD))
        })), delete wD._dagreClusterSubgraph
      })), pD.forEach((CD => {
        var cD, ID;
        let pD = DD.node(CD),
          fD = iD[CD];
        if (pD && pD.rankdir && pD._dagreClusterSubgraph && fD) {
          let iD = pD._dagreClusterSubgraph,
            bD = null != (cD = pD.x) ? cD : 0,
            QD = null != (ID = pD.y) ? ID : 0,
            wD = (fD.minX + fD.maxX) / 2,
            SD = (fD.XI + fD.mI) / 2;
          iD.nodes().forEach((cD => {
            if (cD === CD) return;
            let ID = iD.node(cD),
              pD = DD.node(cD);
            if (pD && ID && "number" == typeof ID.x && "number" == typeof ID.y) {
              let DD = ID.x - wD,
                CD = ID.y - SD;
              pD.x = bD + DD, pD.y = QD + CD
            }
          })), delete pD._dagreClusterSubgraph
        }
      }))
    }

    function oc(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var pD, iD;
      let fD = !1 !== (null == cD ? void 0 : cD.useDynamic),
        bD = fD && null != (pD = null == ID ? void 0 : ID.graph) ? pD : null,
        QD = fD && null != (iD = null == ID ? void 0 : ID.rawNodes) ? iD : null;
      CD("    makeSpaceForEdgeLabels", (() => function(DD) {
        let CD = DD.graph();
        CD.ranksep /= 2, DD.edges().forEach((cD => {
          var ID;
          let pD = DD.edge(cD);
          pD.minlen *= 2, "c" !== (null != (ID = pD.labelpos) ? ID : "r").toLowerCase() && ("TB" === CD.rankdir || "BT" === CD.rankdir ? pD.width += pD.labeloffset : pD.height += pD.labeloffset)
        }))
      }(DD))), CD("    removeSelfEdges", (() => function(DD) {
        DD.edges().forEach((CD => {
          if (CD.v === CD.w) {
            let cD = DD.node(CD.v);
            cD.selfEdges || (cD.selfEdges = []), cD.selfEdges.push({
              e: CD,
              label: DD.edge(CD)
            }), DD.removeEdge(CD)
          }
        }))
      }(DD))), CD("    acyclic", (() => MC(DD, bD))), CD("    nestingGraph.run", (() => TC(DD))), CD("    rank", (() => zC(dD(DD)))), CD("    injectEdgeLabelProxies", (() => function(DD) {
        DD.edges().forEach((CD => {
          let cD = DD.edge(CD);
          if (cD.width && cD.height) {
            let cD = DD.node(CD.v),
              ID = {
                rank: (DD.node(CD.w).rank - cD.rank) / 2 + cD.rank,
                e: CD
              };
            kD(DD, "edge-proxy", ID, "_ep")
          }
        }))
      }(DD))), CD("    removeEmptyRanks", (() => function(DD) {
        let CD = DD.nodes().map((CD => DD.node(CD).rank)).filter((DD => void 0 !== DD)),
          cD = eD(Math.min, CD),
          ID = [];
        DD.nodes().forEach((CD => {
          let pD = DD.node(CD).rank - cD;
          ID[pD] || (ID[pD] = []), ID[pD].push(CD)
        }));
        let pD = 0,
          iD = DD.graph().nodeRankFactor;
        Array.from(ID).forEach(((CD, cD) => {
          void 0 === CD && cD % iD !== 0 ? --pD : void 0 !== CD && pD && CD.forEach((CD => DD.node(CD).rank += pD))
        }))
      }(DD))), CD("    nestingGraph.cleanup", (() => function(DD) {
        let CD = DD.graph();
        DD.removeNode(CD.nestingRoot), delete CD.nestingRoot, DD.edges().forEach((CD => {
          DD.edge(CD).nestingEdge && DD.removeEdge(CD)
        }))
      }(DD))), CD("    normalizeRanks", (() => function(DD) {
        let CD = DD.nodes().map((CD => {
            let cD = DD.node(CD).rank;
            return void 0 === cD ? Number.MAX_VALUE : cD
          })),
          cD = eD(Math.min, CD);
        DD.nodes().forEach((CD => {
          let ID = DD.node(CD);
          Object.hasOwn(ID, "rank") && (ID.rank -= cD)
        }))
      }(DD))), CD("    assignRankMinMax", (() => function(DD) {
        let CD = 0;
        DD.nodes().forEach((cD => {
          let ID = DD.node(cD);
          ID.borderTop && (ID.minRank = DD.node(ID.borderTop).rank, ID.maxRank = DD.node(ID.borderBottom).rank, CD = Math.max(CD, ID.maxRank))
        })), DD.graph().maxRank = CD
      }(DD))), CD("    removeEdgeLabelProxies", (() => function(DD) {
        DD.nodes().forEach((CD => {
          let cD = DD.node(CD);
          if ("edge-proxy" === cD.dummy) {
            let ID = cD;
            DD.edge(ID.e).labelRank = cD.rank, DD.removeNode(CD)
          }
        }))
      }(DD))), CD("    normalize.run", (() => tC(DD))), CD("    parentDummyChains", (() => LC(DD))), CD("    addBorderSegments", (() => RC(DD))), CD("    order", (() => cc(DD, cD, QD))), CD("    insertSelfEdges", (() => function(DD) {
        WD(DD).forEach((CD => {
          let cD = 0;
          CD.forEach(((CD, ID) => {
            let pD = DD.node(CD);
            "number" != typeof pD.rank && (pD.rank = 0), pD.order = ID + cD, (pD.selfEdges || []).forEach((CD => {
              kD(DD, "selfedge", {
                width: CD.label.width,
                height: CD.label.height,
                rank: pD.rank,
                order: ID + ++cD,
                e: CD.e,
                edgeLabel: CD.label
              }, "_se"), (!Array.isArray(CD.label.points) || 7 !== CD.label.points.length) && (CD.label.points = [{
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
            })), delete pD.selfEdges
          }))
        }))
      }(DD))), CD("    adjustCoordinateSystem", (() => function(DD) {
        var CD;
        let cD = null == (CD = DD.graph().rankdir) ? void 0 : CD.toLowerCase();
        ("lr" === cD || "rl" === cD) && YC(DD)
      }(DD))), CD("    position", (() => Bc(DD, cD.corePath))), CD("    positionSelfEdges", (() => function(DD) {
        DD.nodes().forEach((CD => {
          let cD = DD.node(CD),
            ID = DD => "number" == typeof DD && isFinite(DD);
          if ("selfedge" === cD.dummy) {
            let pD = cD,
              iD = DD.node(pD.e.v),
              fD = ID(null == iD ? void 0 : iD.x) ? iD.x : 0,
              bD = ID(null == iD ? void 0 : iD.y) ? iD.y : 0,
              QD = ID(null == iD ? void 0 : iD.width) ? iD.width : 0,
              wD = ID(null == iD ? void 0 : iD.height) ? iD.height : 0,
              SD = ID(cD.x) ? cD.x : fD,
              BD = ID(cD.y) ? cD.y : bD,
              yD = QD / 2,
              MD = wD / 2;
            pD.edgeLabel.points = [{
              x: SD + yD,
              y: BD - MD
            }, {
              x: SD + yD,
              y: BD - MD
            }, {
              x: SD,
              y: BD
            }, {
              x: SD - yD,
              y: BD + MD
            }, {
              x: SD - yD,
              y: BD + MD
            }, {
              x: SD,
              y: BD
            }, {
              x: SD,
              y: BD
            }], pD.edgeLabel.x = SD, pD.edgeLabel.y = BD, DD.setEdge(pD.e, pD.edgeLabel), DD.removeNode(CD)
          } else cD && Array.isArray(cD.selfEdges) && cD.selfEdges.forEach((DD => {
            if (!Array.isArray(DD.label.points) || 7 !== DD.label.points.length) {
              let CD = ID(cD.x) ? cD.x : 0,
                pD = ID(cD.y) ? cD.y : 0,
                iD = (ID(cD.width) ? cD.width : 0) / 2,
                fD = (ID(cD.height) ? cD.height : 0) / 2;
              DD.label.points = [{
                x: CD + iD,
                y: pD - fD
              }, {
                x: CD + iD,
                y: pD - fD
              }, {
                x: CD,
                y: pD
              }, {
                x: CD - iD,
                y: pD + fD
              }, {
                x: CD - iD,
                y: pD + fD
              }, {
                x: CD,
                y: pD
              }, {
                x: CD,
                y: pD
              }]
            }
          }))
        }))
      }(DD)));
      let wD = JSON.parse(JSON.stringify(DD._nodes));
      return CD("    removeBorderNodes", (() => function(DD) {
        DD.nodes().forEach((CD => {
          if (DD.children(CD).length) {
            let cD = DD.node(CD),
              ID = DD.node(cD.borderTop),
              pD = DD.node(cD.borderBottom),
              iD = DD.node(cD.borderLeft[cD.borderLeft.length - 1]),
              fD = DD.node(cD.borderRight[cD.borderRight.length - 1]);
            cD.width = Math.abs(fD.x - iD.x), cD.height = Math.abs(pD.y - ID.y), cD.x = iD.x + cD.width / 2, cD.y = ID.y + cD.height / 2
          }
        })), DD.nodes().forEach((CD => {
          "border" === DD.node(CD).dummy && DD.removeNode(CD)
        }))
      }(DD))), CD("    normalize.undo", (() => function(DD) {
        DD.graph().dummyChains.forEach((CD => {
          let cD, ID = DD.node(CD),
            pD = ID.edgeLabel;
          for (DD.setEdge(ID.edgeObj, pD); ID.dummy;) cD = DD.successors(CD)[0], DD.removeNode(CD), pD.points.push({
            x: ID.x,
            y: ID.y
          }), "edge-label" === ID.dummy && (pD.x = ID.x, pD.y = ID.y, pD.width = ID.width, pD.height = ID.height), CD = cD, ID = DD.node(CD)
        }))
      }(DD))), CD("    fixupEdgeLabelCoords", (() => function(DD) {
        DD.edges().forEach((CD => {
          let cD = DD.edge(CD);
          if (Object.hasOwn(cD, "x")) switch (("l" === cD.labelpos || "r" === cD.labelpos) && (cD.width -= cD.labeloffset), cD.labelpos) {
            case "l":
              cD.x -= cD.width / 2 + cD.labeloffset;
              break;
            case "r":
              cD.x += cD.width / 2 + cD.labeloffset
          }
        }))
      }(DD))), CD("    undoCoordinateSystem", (() => dC(DD))), CD("    translateGraph", (() => function(DD) {
        let CD = Number.POSITIVE_INFINITY,
          cD = 0,
          ID = Number.POSITIVE_INFINITY,
          pD = 0,
          iD = DD.graph(),
          fD = iD.marginx || 0,
          bD = iD.marginy || 0;

        function QD(DD) {
          let iD = DD.x,
            fD = DD.y,
            bD = DD.width,
            QD = DD.height;
          CD = Math.min(CD, iD - bD / 2), cD = Math.max(cD, iD + bD / 2), ID = Math.min(ID, fD - QD / 2), pD = Math.max(pD, fD + QD / 2)
        }
        DD.nodes().forEach((CD => QD(DD.node(CD)))), DD.edges().forEach((CD => {
          let cD = DD.edge(CD);
          Object.hasOwn(cD, "x") && QD(cD)
        })), CD -= fD, ID -= bD, DD.nodes().forEach((cD => {
          let pD = DD.node(cD);
          pD.x -= CD, pD.y -= ID
        })), DD.edges().forEach((cD => {
          let pD = DD.edge(cD);
          pD.points.forEach((DD => {
            DD.x -= CD, DD.y -= ID
          })), Object.hasOwn(pD, "x") && (pD.x -= CD), Object.hasOwn(pD, "y") && (pD.y -= ID)
        })), iD.width = cD - CD + fD, iD.height = pD - ID + bD
      }(DD))), CD("    assignNodeIntersects", (() => function(DD) {
        DD.edges().forEach((CD => {
          if (CD.v === CD.w) return;
          let cD, ID, pD = DD.edge(CD),
            iD = DD.node(CD.v),
            fD = DD.node(CD.w);
          pD.points ? (cD = pD.points[0], ID = pD.points[pD.points.length - 1]) : (pD.points = [], cD = fD, ID = iD), pD.points.unshift(YD(iD, cD)), pD.points.push(YD(fD, ID))
        }))
      }(DD))), CD("    reversePoints", (() => function(DD) {
        DD.edges().forEach((CD => {
          let cD = DD.edge(CD);
          cD.reversed && cD.points.reverse()
        }))
      }(DD))), CD("    acyclic.undo", (() => function(DD) {
        DD.edges().forEach((CD => {
          let cD = DD.edge(CD);
          if (cD.reversed) {
            DD.removeEdge(CD);
            let ID = cD.forwardName;
            delete cD.reversed, delete cD.forwardName, DD.setEdge(CD.w, CD.v, cD, ID)
          }
        }))
      }(DD))), {
        graph: DD,
        rawNodes: wD
      }
    }

    function vc(DD, CD) {
      DD.nodes().forEach((cD => {
        let ID = DD.node(cD),
          pD = CD.node(cD);
        ID && (ID.x = pD.x, ID.y = pD.y, ID.order = pD.order, ID.rank = pD.rank, CD.children(cD).length && (ID.width = pD.width, ID.height = pD.height))
      })), DD.edges().forEach((cD => {
        let ID = DD.edge(cD),
          pD = CD.edge(cD);
        ID.points = pD.points, Object.hasOwn(pD, "x") && (ID.x = pD.x, ID.y = pD.y)
      })), DD.graph().width = CD.graph().width, DD.graph().height = CD.graph().height
    }
    var Nc = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      gc = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Xc = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      mc = ["width", "height", "rank"],
      nc = {
        width: 0,
        height: 0
      },
      Oc = ["minlen", "weight", "width", "height", "labeloffset"],
      Pc = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Hc = ["labelpos"];

    function Uc(DD) {
      let CD = new RD({
          multigraph: !0,
          compound: !0
        }),
        cD = qc(DD.graph());
      return CD.setGraph(Object.assign({}, gc, xc(cD, Nc), CC(cD, Xc))), DD.nodes().forEach((cD => {
        let ID = xc(qc(DD.node(cD)), mc);
        Object.keys(nc).forEach((DD => {
          void 0 === ID[DD] && (ID[DD] = nc[DD])
        })), CD.setNode(cD, ID);
        let pD = DD.parent(cD);
        void 0 !== pD && CD.setParent(cD, pD)
      })), DD.edges().forEach((cD => {
        let ID = qc(DD.edge(cD));
        CD.setEdge(cD, Object.assign({}, Pc, xc(ID, Oc), CC(ID, Hc)))
      })), CD
    }

    function xc(DD, CD) {
      return cC(CC(DD, CD), Number)
    }

    function qc(DD) {
      let CD = {};
      return DD && Object.entries(DD).forEach((DD => {
        let [cD, ID] = DD;
        "string" == typeof cD && (cD = cD.toLowerCase()), CD[cD] = ID
      })), CD
    }

    function Jc(DD) {
      let CD = WD(DD),
        cD = new RD({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return DD.nodes().forEach((CD => {
        cD.setNode(CD, {
          label: CD
        }), cD.setParent(CD, "layer" + DD.node(CD).rank)
      })), DD.edges().forEach((DD => cD.setEdge(DD.v, DD.w, {}, DD.name))), CD.forEach(((DD, CD) => {
        let ID = "layer" + CD;
        cD.setNode(ID, {
          rank: "same"
        }), DD.reduce(((DD, CD) => (cD.setEdge(DD, CD, {
          style: "invis"
        }), CD)))
      })), cD
    }
    var Kc = {
        time: hD,
        notime: rD
      },
      ac = {
        graphlib: iD,
        version: iC,
        layout: Mc,
        debug: Jc,
        util: {
          time: hD,
          notime: rD
        }
      }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);