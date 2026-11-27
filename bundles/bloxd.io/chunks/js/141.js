/*! For license information please see fl4vv.141.c6ff3181.chunk.js.LICENSE.txt */
export const id = 141;
export const ids = [141];
export const modules = {
  7381: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Graph: () => Ar,
      debug: () => XQ,
      default: () => HQ,
      graphlib: () => ar,
      layout: () => NQ,
      util: () => PQ,
      version: () => aS
    });
    var Zr = Object.defineProperty,
      Wr = (rr, Sr, Qr) => ((rr, Sr, Qr) => Sr in rr ? Zr(rr, Sr, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Qr
      }) : rr[Sr] = Qr)(rr, "symbol" != typeof Sr ? Sr + "" : Sr, Qr),
      ar = {};
    ((rr, Sr) => {
      for (var Qr in Sr) Zr(rr, Qr, {
        get: Sr[Qr],
        enumerable: !0
      })
    })(ar, {
      Graph: () => Ar,
      alg: () => zr
    });
    var jr = Object.defineProperty,
      Ir = (rr, Sr) => {
        for (var Qr in Sr) jr(rr, Qr, {
          get: Sr[Qr],
          enumerable: !0
        })
      },
      fr = class {
        constructor(rr) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, rr && (this._isDirected = !("directed" in rr) || rr.directed, this._isMultigraph = "multigraph" in rr && rr.multigraph, this._isCompound = "compound" in rr && rr.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(rr) {
          return this._label = rr, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(rr) {
          return this._defaultNodeLabelFn = "function" != typeof rr ? () => rr : rr, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((rr => 0 === Object.keys(this._in[rr]).length))
        }
        sinks() {
          return this.nodes().filter((rr => 0 === Object.keys(this._out[rr]).length))
        }
        setNodes(rr, Sr) {
          return rr.forEach((rr => {
            void 0 !== Sr ? this.setNode(rr, Sr) : this.setNode(rr)
          })), this
        }
        setNode(rr, Sr) {
          return rr in this._nodes ? (arguments.length > 1 && (this._nodes[rr] = Sr), this) : (this._nodes[rr] = arguments.length > 1 ? Sr : this._defaultNodeLabelFn(rr), this._isCompound && (this._parent[rr] = "\0", this._children[rr] = {}, this._children["\0"][rr] = !0), this._in[rr] = {}, this._preds[rr] = {}, this._out[rr] = {}, this._sucs[rr] = {}, ++this._nodeCount, this)
        }
        node(rr) {
          return this._nodes[rr]
        }
        hasNode(rr) {
          return rr in this._nodes
        }
        removeNode(rr) {
          if (rr in this._nodes) {
            let Sr = rr => this.removeEdge(this._edgeObjs[rr]);
            delete this._nodes[rr], this._isCompound && (this._removeFromParentsChildList(rr), delete this._parent[rr], this.children(rr).forEach((rr => {
              this.setParent(rr)
            })), delete this._children[rr]), Object.keys(this._in[rr]).forEach(Sr), delete this._in[rr], delete this._preds[rr], Object.keys(this._out[rr]).forEach(Sr), delete this._out[rr], delete this._sucs[rr], --this._nodeCount
          }
          return this
        }
        setParent(rr, Sr) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === Sr) Sr = "\0";
          else {
            for (let Qr = Sr += ""; void 0 !== Qr; Qr = this.parent(Qr))
              if (Qr === rr) throw new Error("Setting " + Sr + " as parent of " + rr + " would create a cycle");
            this.setNode(Sr)
          }
          return this.setNode(rr), this._removeFromParentsChildList(rr), this._parent[rr] = Sr, this._children[Sr][rr] = !0, this
        }
        parent(rr) {
          if (this._isCompound) {
            let Sr = this._parent[rr];
            if ("\0" !== Sr) return Sr
          }
        }
        children() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let Sr = this._children[rr];
            if (Sr) return Object.keys(Sr)
          } else {
            if ("\0" === rr) return this.nodes();
            if (this.hasNode(rr)) return []
          }
          return []
        }
        predecessors(rr) {
          let Sr = this._preds[rr];
          if (Sr) return Object.keys(Sr)
        }
        successors(rr) {
          let Sr = this._sucs[rr];
          if (Sr) return Object.keys(Sr)
        }
        neighbors(rr) {
          let Sr = this.predecessors(rr);
          if (Sr) {
            let Qr = new Set(Sr),
              Zr = this.successors(rr);
            if (Zr)
              for (let rr of Zr) Qr.add(rr);
            return Array.from(Qr.values())
          }
        }
        isLeaf(rr) {
          var Sr;
          let Qr;
          return Qr = this.isDirected() ? this.successors(rr) : this.neighbors(rr), 0 === (null != (Sr = null == Qr ? void 0 : Qr.length) ? Sr : 0)
        }
        filterNodes(rr) {
          let Sr = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Sr.setGraph(this.graph()), Object.entries(this._nodes).forEach((Qr => {
            let [Zr, Wr] = Qr;
            rr(Zr) && Sr.setNode(Zr, Wr)
          })), Object.values(this._edgeObjs).forEach((rr => {
            Sr.hasNode(rr.v) && Sr.hasNode(rr.w) && Sr.setEdge(rr, this.edge(rr))
          }));
          let Qr = {},
            Zr = rr => {
              let Wr = this.parent(rr);
              return !Wr || Sr.hasNode(Wr) ? (Qr[rr] = Wr, Wr) : Wr in Qr ? Qr[Wr] : Zr(Wr)
            };
          return this._isCompound && Sr.nodes().forEach((rr => Sr.setParent(rr, Zr(rr)))), Sr
        }
        setDefaultEdgeLabel(rr) {
          return this._defaultEdgeLabelFn = "function" != typeof rr ? () => rr : rr, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(rr, Sr) {
          return rr.reduce(((rr, Qr) => (void 0 !== Sr ? this.setEdge(rr, Qr, Sr) : this.setEdge(rr, Qr), Qr))), this
        }
        setEdge(rr, Sr, Qr, Zr) {
          let Wr, ar, jr, Ir, fr = !1;
          "object" == typeof rr && null !== rr && "v" in rr ? (Wr = rr.v, ar = rr.w, jr = rr.name, 2 === arguments.length && (Ir = Sr, fr = !0)) : (Wr = rr, ar = Sr, jr = Zr, arguments.length > 2 && (Ir = Qr, fr = !0)), Wr = "" + Wr, ar = "" + ar, void 0 !== jr && (jr = "" + jr);
          let pr = xr(this._isDirected, Wr, ar, jr);
          if (pr in this._edgeLabels) return fr && (this._edgeLabels[pr] = Ir), this;
          if (void 0 !== jr && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Wr), this.setNode(ar), this._edgeLabels[pr] = fr ? Ir : this._defaultEdgeLabelFn(Wr, ar, jr);
          let mr = function(rr, Sr, Qr, Zr) {
            let Wr = "" + Sr,
              ar = "" + Qr;
            if (!rr && Wr > ar) {
              let rr = Wr;
              Wr = ar, ar = rr
            }
            let jr = {
              v: Wr,
              w: ar
            };
            return Zr && (jr.name = Zr), jr
          }(this._isDirected, Wr, ar, jr);
          return Wr = mr.v, ar = mr.w, Object.freeze(mr), this._edgeObjs[pr] = mr, Er(this._preds[ar], Wr), Er(this._sucs[Wr], ar), this._in[ar][pr] = mr, this._out[Wr][pr] = mr, this._edgeCount++, this
        }
        edge(rr, Sr, Qr) {
          let Zr = 1 === arguments.length ? mr(this._isDirected, rr) : xr(this._isDirected, rr, Sr, Qr);
          return this._edgeLabels[Zr]
        }
        edgeAsObj(rr, Sr, Qr) {
          let Zr = 1 === arguments.length ? this.edge(rr) : this.edge(rr, Sr, Qr);
          return "object" != typeof Zr || null === Zr ? {
            label: Zr
          } : Zr
        }
        hasEdge(rr, Sr, Qr) {
          return (1 === arguments.length ? mr(this._isDirected, rr) : xr(this._isDirected, rr, Sr, Qr)) in this._edgeLabels
        }
        removeEdge(rr, Sr, Qr) {
          let Zr = 1 === arguments.length ? mr(this._isDirected, rr) : xr(this._isDirected, rr, Sr, Qr),
            Wr = this._edgeObjs[Zr];
          if (Wr) {
            let rr = Wr.v,
              Sr = Wr.w;
            delete this._edgeLabels[Zr], delete this._edgeObjs[Zr], pr(this._preds[Sr], rr), pr(this._sucs[rr], Sr), delete this._in[Sr][Zr], delete this._out[rr][Zr], this._edgeCount--
          }
          return this
        }
        inEdges(rr, Sr) {
          return this.isDirected() ? this.filterEdges(this._in[rr], rr, Sr) : this.nodeEdges(rr, Sr)
        }
        outEdges(rr, Sr) {
          return this.isDirected() ? this.filterEdges(this._out[rr], rr, Sr) : this.nodeEdges(rr, Sr)
        }
        nodeEdges(rr, Sr) {
          if (rr in this._nodes) return this.filterEdges({
            ...this._in[rr],
            ...this._out[rr]
          }, rr, Sr)
        }
        _removeFromParentsChildList(rr) {
          delete this._children[this._parent[rr]][rr]
        }
        filterEdges(rr, Sr, Qr) {
          if (!rr) return;
          let Zr = Object.values(rr);
          return Qr ? Zr.filter((rr => rr.v === Sr && rr.w === Qr || rr.v === Qr && rr.w === Sr)) : Zr
        }
      };

    function Er(rr, Sr) {
      rr[Sr] ? rr[Sr]++ : rr[Sr] = 1
    }

    function pr(rr, Sr) {
      void 0 !== rr[Sr] && !--rr[Sr] && delete rr[Sr]
    }

    function xr(rr, Sr, Qr, Zr) {
      let Wr = "" + Sr,
        ar = "" + Qr;
      if (!rr && Wr > ar) {
        let rr = Wr;
        Wr = ar, ar = rr
      }
      return Wr + "\x01" + ar + "\x01" + (void 0 === Zr ? "\0" : Zr)
    }

    function mr(rr, Sr) {
      return xr(rr, Sr.v, Sr.w, Sr.name)
    }

    function Nr(rr) {
      let Sr = {
          options: {
            directed: rr.isDirected(),
            multigraph: rr.isMultigraph(),
            compound: rr.isCompound()
          },
          nodes: Ur(rr),
          edges: tr(rr)
        },
        Qr = rr.graph();
      return void 0 !== Qr && (Sr.value = structuredClone(Qr)), Sr
    }

    function Ur(rr) {
      return rr.nodes().map((Sr => {
        let Qr = rr.node(Sr),
          Zr = rr.parent(Sr),
          Wr = {
            v: Sr
          };
        return void 0 !== Qr && (Wr.value = Qr), void 0 !== Zr && (Wr.parent = Zr), Wr
      }))
    }

    function tr(rr) {
      return rr.edges().map((Sr => {
        let Qr = rr.edge(Sr),
          Zr = {
            v: Sr.v,
            w: Sr.w
          };
        return void 0 !== Sr.name && (Zr.name = Sr.name), void 0 !== Qr && (Zr.value = Qr), Zr
      }))
    }

    function hr(rr) {
      let Sr = new fr(rr.options);
      return void 0 !== rr.value && Sr.setGraph(rr.value), rr.nodes.forEach((rr => {
        Sr.setNode(rr.v, rr.value), rr.parent && Sr.setParent(rr.v, rr.parent)
      })), rr.edges.forEach((rr => {
        Sr.setEdge({
          v: rr.v,
          w: rr.w,
          name: rr.name
        }, rr.value)
      })), Sr
    }
    Ir({}, {
      read: () => hr,
      write: () => Nr
    });
    var zr = {};
    Ir(zr, {
      CycleException: () => Xr,
      bellmanFord: () => nr,
      components: () => er,
      dijkstra: () => Br,
      dijkstraAll: () => Tr,
      findCycles: () => Or,
      floydWarshall: () => lr,
      isAcyclic: () => Hr,
      postorder: () => Cr,
      preorder: () => Mr,
      prim: () => Gr,
      shortestPaths: () => kr,
      tarjan: () => vr,
      topsort: () => Pr
    });
    var Yr = () => 1;

    function nr(rr, Sr, Qr, Zr) {
      return function(rr, Sr, Qr, Zr) {
        let Wr, ar = {},
          jr = 0,
          Ir = rr.nodes(),
          fr = function(rr) {
            let Sr = ar[rr.v],
              Zr = ar[rr.w];
            if (!Sr || !Zr) return;
            let jr = Qr(rr);
            Sr.distance + jr < Zr.distance && (ar[rr.w] = {
              distance: Sr.distance + jr,
              predecessor: rr.v
            }, Wr = !0)
          },
          Er = function() {
            Ir.forEach((function(rr) {
              Zr(rr).forEach((function(Sr) {
                let Qr = Sr.v === rr ? Sr.v : Sr.w,
                  Zr = Qr === Sr.v ? Sr.w : Sr.v;
                fr({
                  v: Qr,
                  w: Zr
                })
              }))
            }))
          };
        Ir.forEach((function(rr) {
          let Qr = rr === Sr ? 0 : Number.POSITIVE_INFINITY;
          ar[rr] = {
            distance: Qr,
            predecessor: ""
          }
        }));
        let pr = Ir.length;
        for (let xr = 1; xr < pr && (Wr = !1, jr++, Er(), Wr); xr++);
        if (jr === pr - 1 && (Wr = !1, Er(), Wr)) throw new Error("The graph contains a negative weight cycle");
        return ar
      }(rr, String(Sr), Qr || Yr, Zr || function(Sr) {
        var Qr;
        return null != (Qr = rr.outEdges(Sr)) ? Qr : []
      })
    }

    function er(rr) {
      let Sr, Qr = {},
        Zr = [];

      function Wr(Zr) {
        var ar, jr;
        Zr in Qr || (Qr[Zr] = !0, Sr.push(Zr), null == (ar = rr.successors(Zr)) || ar.forEach(Wr), null == (jr = rr.predecessors(Zr)) || jr.forEach(Wr))
      }
      return rr.nodes().forEach((function(rr) {
        Sr = [], Wr(rr), Sr.length && Zr.push(Sr)
      })), Zr
    }
    var Kr = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((rr => rr.key))
        }
        has(rr) {
          return rr in this._keyIndices
        }
        priority(rr) {
          let Sr = this._keyIndices[rr];
          if (void 0 !== Sr) return this._arr[Sr].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(rr, Sr) {
          let Qr = this._keyIndices,
            Zr = String(rr);
          if (!(Zr in Qr)) {
            let rr = this._arr,
              Wr = rr.length;
            return Qr[Zr] = Wr, rr.push({
              key: Zr,
              priority: Sr
            }), this._decrease(Wr), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let rr = this._arr.pop();
          return delete this._keyIndices[rr.key], this._heapify(0), rr.key
        }
        decrease(rr, Sr) {
          let Qr = this._keyIndices[rr];
          if (void 0 === Qr) throw new Error(`Key not found: ${rr}`);
          let Zr = this._arr[Qr].priority;
          if (Sr > Zr) throw new Error(`New priority is greater than current priority. Key: ${rr} Old: ${Zr} New: ${Sr}`);
          this._arr[Qr].priority = Sr, this._decrease(Qr)
        }
        _heapify(rr) {
          let Sr = this._arr,
            Qr = 2 * rr,
            Zr = Qr + 1,
            Wr = rr;
          Qr < Sr.length && (Wr = Sr[Qr].priority < Sr[Wr].priority ? Qr : Wr, Zr < Sr.length && (Wr = Sr[Zr].priority < Sr[Wr].priority ? Zr : Wr), Wr !== rr && (this._swap(rr, Wr), this._heapify(Wr)))
        }
        _decrease(rr) {
          let Sr, Qr = this._arr,
            Zr = Qr[rr].priority;
          for (; 0 !== rr && (Sr = rr >> 1, !(Qr[Sr].priority < Zr));) this._swap(rr, Sr), rr = Sr
        }
        _swap(rr, Sr) {
          let Qr = this._arr,
            Zr = this._keyIndices,
            Wr = Qr[rr],
            ar = Qr[Sr];
          Qr[rr] = ar, Qr[Sr] = Wr, Zr[ar.key] = rr, Zr[Wr.key] = Sr
        }
      },
      yr = () => 1;

    function Br(rr, Sr, Qr, Zr) {
      return function(rr, Sr, Qr, Zr) {
        let Wr, ar, jr = {},
          Ir = new Kr,
          fr = function(rr) {
            let Sr = rr.v !== Wr ? rr.v : rr.w,
              Zr = jr[Sr];
            if (!Zr) return;
            let fr = Qr(rr),
              Er = ar.distance + fr;
            if (fr < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + rr + " Weight: " + fr);
            Er < Zr.distance && (Zr.distance = Er, Zr.predecessor = Wr, Ir.decrease(Sr, Er))
          };
        for (rr.nodes().forEach((function(rr) {
            let Qr = rr === Sr ? 0 : Number.POSITIVE_INFINITY;
            jr[rr] = {
              distance: Qr,
              predecessor: ""
            }, Ir.add(rr, Qr)
          })); Ir.size() > 0;) {
          Wr = Ir.removeMin();
          let rr = jr[Wr];
          if (!rr || rr.distance === Number.POSITIVE_INFINITY) break;
          ar = rr, Zr(Wr).forEach(fr)
        }
        return jr
      }(rr, String(Sr), Qr || yr, Zr || function(Sr) {
        var Qr;
        return null != (Qr = rr.outEdges(Sr)) ? Qr : []
      })
    }

    function Tr(rr, Sr, Qr) {
      return rr.nodes().reduce((function(Zr, Wr) {
        return Zr[Wr] = Br(rr, Wr, Sr, Qr), Zr
      }), {})
    }

    function vr(rr) {
      let Sr = 0,
        Qr = [],
        Zr = {},
        Wr = [];

      function ar(jr) {
        var Ir;
        let fr = Zr[jr] = {
          onStack: !0,
          lowlink: Sr,
          index: Sr++
        };
        if (Qr.push(jr), null == (Ir = rr.successors(jr)) || Ir.forEach((function(rr) {
            if (rr in Zr) {
              let Sr = Zr[rr];
              null != Sr && Sr.onStack && (fr.lowlink = Math.min(fr.lowlink, Sr.index))
            } else {
              ar(rr);
              let Sr = Zr[rr];
              Sr && (fr.lowlink = Math.min(fr.lowlink, Sr.lowlink))
            }
          })), fr.lowlink === fr.index) {
          let rr, Sr = [];
          do {
            rr = Qr.pop();
            let Wr = Zr[rr];
            Wr && (Wr.onStack = !1), Sr.push(rr)
          } while (jr !== rr);
          Wr.push(Sr)
        }
      }
      return rr.nodes().forEach((function(rr) {
        rr in Zr || ar(rr)
      })), Wr
    }

    function Or(rr) {
      return vr(rr).filter((function(Sr) {
        var Qr;
        let Zr = Sr[0];
        return !!Zr && (Sr.length > 1 || 1 === Sr.length && (null != (Qr = rr.outEdges(Zr, Zr)) ? Qr : []).length > 0)
      }))
    }
    var Lr = () => 1;

    function lr(rr, Sr, Qr) {
      return function(rr, Sr, Qr) {
        let Zr = {},
          Wr = rr.nodes();
        return Wr.forEach((function(rr) {
          let ar = {};
          Zr[rr] = ar, ar[rr] = {
            distance: 0,
            predecessor: ""
          }, Wr.forEach((function(Sr) {
            rr !== Sr && (ar[Sr] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), Qr(rr).forEach((function(Qr) {
            let Zr = Qr.v === rr ? Qr.w : Qr.v,
              Wr = Sr(Qr);
            ar[Zr] = {
              distance: Wr,
              predecessor: rr
            }
          }))
        })), Wr.forEach((function(rr) {
          let Sr = Zr[rr];
          Sr && Wr.forEach((function(Qr) {
            let ar = Zr[Qr];
            ar && Wr.forEach((function(Qr) {
              let Zr = ar[rr],
                Wr = Sr[Qr],
                jr = ar[Qr];
              if (Zr && Wr && jr) {
                let rr = Zr.distance + Wr.distance;
                rr < jr.distance && (jr.distance = rr, jr.predecessor = Wr.predecessor)
              }
            }))
          }))
        })), Zr
      }(rr, Sr || Lr, Qr || function(Sr) {
        var Qr;
        return null != (Qr = rr.outEdges(Sr)) ? Qr : []
      })
    }
    var Xr = class extends Error {
      constructor(rr) {
        super(rr), this.name = "CycleException"
      }
    };

    function Pr(rr) {
      let Sr = {},
        Qr = {},
        Zr = [];
      if (rr.sinks().forEach((function Wr(ar) {
          var jr;
          if (ar in Qr) throw new Xr;
          ar in Sr || (Qr[ar] = !0, Sr[ar] = !0, null == (jr = rr.predecessors(ar)) || jr.forEach(Wr), delete Qr[ar], Zr.push(ar))
        })), Object.keys(Sr).length !== rr.nodeCount()) throw new Xr;
      return Zr
    }

    function Hr(rr) {
      try {
        Pr(rr)
      } catch (Sr) {
        if (Sr instanceof Xr) return !1;
        throw Sr
      }
      return !0
    }

    function qr(rr, Sr, Qr, Zr, Wr) {
      Array.isArray(Sr) || (Sr = [Sr]);
      let ar = Sr => {
          var Qr;
          return null != (Qr = rr.isDirected() ? rr.successors(Sr) : rr.neighbors(Sr)) ? Qr : []
        },
        jr = {};
      return Sr.forEach((function(Sr) {
        if (!rr.hasNode(Sr)) throw new Error("Graph does not have node: " + Sr);
        Wr = Rr(rr, Sr, "post" === Qr, jr, ar, Zr, Wr)
      })), Wr
    }

    function Rr(rr, Sr, Qr, Zr, Wr, ar, jr) {
      return Sr in Zr || (Zr[Sr] = !0, Qr || (jr = ar(jr, Sr)), Wr(Sr).forEach((function(Sr) {
        jr = Rr(rr, Sr, Qr, Zr, Wr, ar, jr)
      })), Qr && (jr = ar(jr, Sr))), jr
    }

    function gr(rr, Sr, Qr) {
      return qr(rr, Sr, Qr, (function(rr, Sr) {
        return rr.push(Sr), rr
      }), [])
    }

    function Cr(rr, Sr) {
      return gr(rr, Sr, "post")
    }

    function Mr(rr, Sr) {
      return gr(rr, Sr, "pre")
    }

    function Gr(rr, Sr) {
      var Qr;
      let Zr, Wr = new fr,
        ar = {},
        jr = new Kr;

      function Ir(rr) {
        let Qr = rr.v === Zr ? rr.w : rr.v,
          Wr = jr.priority(Qr);
        if (void 0 !== Wr) {
          let Ir = Sr(rr);
          Ir < Wr && (ar[Qr] = Zr, jr.decrease(Qr, Ir))
        }
      }
      if (0 === rr.nodeCount()) return Wr;
      rr.nodes().forEach((function(rr) {
        jr.add(rr, Number.POSITIVE_INFINITY), Wr.setNode(rr)
      }));
      let Er = rr.nodes()[0];
      void 0 !== Er && jr.decrease(Er, 0);
      let pr = !1;
      for (; jr.size() > 0;) {
        if (Zr = jr.removeMin(), Zr in ar) Wr.setEdge(Zr, ar[Zr]);
        else {
          if (pr) throw new Error("Input graph is not connected: " + rr);
          pr = !0
        }
        null == (Qr = rr.nodeEdges(Zr)) || Qr.forEach(Ir)
      }
      return Wr
    }

    function kr(rr, Sr, Qr, Zr) {
      return function(rr, Sr, Qr, Zr) {
        if (void 0 === Qr) return Br(rr, Sr, Qr, Zr);
        let Wr = !1,
          ar = rr.nodes();
        for (let jr = 0; jr < ar.length; jr++) {
          let Ir = ar[jr];
          if (void 0 === Ir) continue;
          let fr = Zr(Ir);
          for (let rr = 0; rr < fr.length; rr++) {
            let Sr = fr[rr];
            if (!Sr) continue;
            let Zr = Sr.v === Ir ? Sr.v : Sr.w;
            Qr({
              v: Zr,
              w: Zr === Sr.v ? Sr.w : Sr.v
            }) < 0 && (Wr = !0)
          }
          if (Wr) return nr(rr, Sr, Qr, Zr)
        }
        return Br(rr, Sr, Qr, Zr)
      }(rr, Sr, Qr, null != Zr ? Zr : Sr => {
        var Qr;
        return null != (Qr = rr.outEdges(Sr)) ? Qr : []
      })
    }
    var Ar = fr;

    function Vr(rr, Sr, Qr, Zr) {
      let Wr = Zr;
      for (; rr.hasNode(Wr);) Wr = ur(Zr);
      return Qr.dummy = Sr, rr.setNode(Wr, Qr), Wr
    }

    function ir(rr) {
      let Sr = new Ar({
        multigraph: rr.isMultigraph()
      }).setGraph(rr.graph());
      return rr.nodes().forEach((Qr => {
        rr.children(Qr).length || Sr.setNode(Qr, rr.node(Qr))
      })), rr.edges().forEach((Qr => {
        Sr.setEdge(Qr, rr.edge(Qr))
      })), Sr
    }

    function wr(rr, Sr) {
      let Qr, Zr, Wr = rr.x,
        ar = rr.y,
        jr = Sr.x - Wr,
        Ir = Sr.y - ar,
        fr = rr.width / 2,
        Er = rr.height / 2;
      if (!jr && !Ir) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(Ir) * fr > Math.abs(jr) * Er ? (Ir < 0 && (Er = -Er), Qr = Er * jr / Ir, Zr = Er) : (jr < 0 && (fr = -fr), Qr = fr, Zr = fr * Ir / jr), {
        x: Wr + Qr,
        y: ar + Zr
      }
    }

    function cr(rr) {
      let Sr = rS(Jr(rr) + 1).map((() => []));
      return rr.nodes().forEach((Qr => {
        let Zr = rr.node(Qr),
          Wr = Zr.rank;
        void 0 !== Wr && (Sr[Wr] || (Sr[Wr] = []), Sr[Wr][Zr.order] = Qr)
      })), Sr
    }

    function Fr(rr, Sr, Qr, Zr) {
      let Wr = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Wr.rank = Qr, Wr.order = Zr), Vr(rr, "border", Wr, Sr)
    }
    var or = 65535;

    function br(rr, Sr) {
      if (Sr.length > or) {
        let Qr = function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : or,
            Qr = [];
          for (let Zr = 0; Zr < rr.length; Zr += Sr) {
            let Wr = rr.slice(Zr, Zr + Sr);
            Qr.push(Wr)
          }
          return Qr
        }(Sr);
        return rr(...Qr.map((Sr => rr(...Sr))))
      }
      return rr(...Sr)
    }

    function Jr(rr) {
      let Sr = rr.nodes().map((Sr => {
        let Qr = rr.node(Sr).rank;
        return void 0 === Qr ? Number.MIN_VALUE : Qr
      }));
      return br(Math.max, Sr)
    }

    function Dr(rr, Sr) {
      let Qr = Date.now();
      try {
        return Sr()
      } finally {
        console.log(rr + " time: " + (Date.now() - Qr) + "ms")
      }
    }

    function dr(rr, Sr) {
      return Sr()
    }
    var sr = 0;

    function ur(rr) {
      return rr + "" + ++sr
    }

    function rS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Sr && (Sr = rr, rr = 0);
      let Zr = rr => rr < Sr;
      Qr < 0 && (Zr = rr => Sr < rr);
      let Wr = [];
      for (let ar = rr; Zr(ar); ar += Qr) Wr.push(ar);
      return Wr
    }

    function SS(rr, Sr) {
      let Qr = {};
      for (let Zr of Sr) void 0 !== rr[Zr] && (Qr[Zr] = rr[Zr]);
      return Qr
    }

    function QS(rr, Sr) {
      let Qr;
      return Qr = "string" == typeof Sr ? rr => rr[Sr] : Sr, Object.entries(rr).reduce(((rr, Sr) => {
        let [Zr, Wr] = Sr;
        return rr[Zr] = Qr(Wr, Zr), rr
      }), {})
    }
    var ZS = "\0";

    function WS(rr, Sr, Qr) {
      var Zr, Wr, ar, jr, Ir, fr;
      if (!(rr && Sr && Qr && "edge" === Sr.dummy && "edge" === Qr.dummy && Sr.edgeObj && Qr.edgeObj && rr[Sr.edgeObj.v] && rr[Qr.edgeObj.v] && rr[Sr.edgeObj.w] && rr[Qr.edgeObj.w])) return 0;
      let Er = !0;
      Sr.edgeObj.w === Qr.edgeObj.w && (Er = !1);
      let pr = Er ? null != (Wr = null == (Zr = rr[Sr.edgeObj.v]) ? void 0 : Zr.rank) ? Wr : NaN : null != (jr = null == (ar = rr[Sr.edgeObj.w]) ? void 0 : ar.rank) ? jr : NaN,
        xr = Object.entries(rr).find((rr => {
          var Qr, Zr;
          return (null == (Qr = rr[1].edgeObj) ? void 0 : Qr.v) === Sr.edgeObj.v && (null == (Zr = rr[1].edgeObj) ? void 0 : Zr.w) === Sr.edgeObj.w && rr[1].rank === pr
        })),
        mr = Object.entries(rr).find((rr => {
          var Sr, Zr;
          return (null == (Sr = rr[1].edgeObj) ? void 0 : Sr.v) === Qr.edgeObj.v && (null == (Zr = rr[1].edgeObj) ? void 0 : Zr.w) === Qr.edgeObj.w && rr[1].rank === pr
        }));
      if (!xr || !mr) return 0;
      let Nr = null != (Ir = xr[1].order) ? Ir : NaN,
        Ur = null != (fr = mr[1].order) ? fr : NaN;
      return isNaN(Nr - Ur) ? 0 : Nr - Ur
    }
    var aS = "3.1.1";

    function jS(rr) {
      rr._prev._next = rr._next, rr._next._prev = rr._prev, delete rr._next, delete rr._prev
    }

    function IS(rr, Sr) {
      if ("_next" !== rr && "_prev" !== rr) return Sr
    }
    var fS = class {
        constructor() {
          Wr(this, "_sentinel");
          let rr = {};
          rr._next = rr._prev = rr, this._sentinel = rr
        }
        dequeue() {
          let rr = this._sentinel,
            Sr = rr._prev;
          if (Sr !== rr) return jS(Sr), Sr
        }
        enqueue(rr) {
          let Sr = this._sentinel;
          rr._prev && rr._next && jS(rr), rr._next = Sr._next, Sr._next._prev = rr, Sr._next = rr, rr._prev = Sr
        }
        toString() {
          let rr = [],
            Sr = this._sentinel,
            Qr = Sr._prev;
          for (; Qr !== Sr;) rr.push(JSON.stringify(Qr, IS)), Qr = Qr._prev;
          return "[" + rr.join(", ") + "]"
        }
      },
      ES = () => 1;

    function pS(rr, Sr) {
      if (rr.nodeCount() <= 1) return [];
      let Qr = function(rr, Sr) {
        let Qr = new Ar,
          Zr = 0,
          Wr = 0;
        rr.nodes().forEach((rr => {
          Qr.setNode(rr, {
            v: rr,
            in: 0,
            out: 0
          })
        })), rr.edges().forEach((rr => {
          let ar = Qr.edge(rr.v, rr.w) || 0,
            jr = Sr(rr),
            Ir = ar + jr;
          Qr.setEdge(rr.v, rr.w, Ir);
          let fr = Qr.node(rr.v),
            Er = Qr.node(rr.w);
          Wr = Math.max(Wr, fr.out += jr), Zr = Math.max(Zr, Er.in += jr)
        }));
        let ar = function(rr) {
            let Sr = [];
            for (let Qr = 0; Qr < rr; Qr++) Sr.push(Qr);
            return Sr
          }(Wr + Zr + 3).map((() => new fS)),
          jr = Zr + 1;
        return Qr.nodes().forEach((rr => {
          mS(ar, jr, Qr.node(rr))
        })), {
          graph: Qr,
          buckets: ar,
          zeroIdx: jr
        }
      }(rr, Sr || ES);
      return function(rr, Sr, Qr) {
        var Zr;
        let Wr, ar = [],
          jr = Sr[Sr.length - 1],
          Ir = Sr[0];
        for (; rr.nodeCount();) {
          for (; Wr = Ir.dequeue();) xS(rr, Sr, Qr, Wr);
          for (; Wr = jr.dequeue();) xS(rr, Sr, Qr, Wr);
          if (rr.nodeCount())
            for (let jr = Sr.length - 2; jr > 0; --jr)
              if (Wr = null == (Zr = Sr[jr]) ? void 0 : Zr.dequeue(), Wr) {
                ar = ar.concat(xS(rr, Sr, Qr, Wr, !0) || []);
                break
              }
        }
        return ar
      }(Qr.graph, Qr.buckets, Qr.zeroIdx).flatMap((Sr => rr.outEdges(Sr.v, Sr.w) || []))
    }

    function xS(rr, Sr, Qr, Zr, Wr) {
      let ar = [],
        jr = Wr ? ar : void 0;
      return (rr.inEdges(Zr.v) || []).forEach((Zr => {
        let jr = rr.edge(Zr),
          Ir = rr.node(Zr.v);
        Wr && ar.push({
          v: Zr.v,
          w: Zr.w
        }), Ir.out -= jr, mS(Sr, Qr, Ir)
      })), (rr.outEdges(Zr.v) || []).forEach((Zr => {
        let Wr = rr.edge(Zr),
          ar = Zr.w,
          jr = rr.node(ar);
        jr.in -= Wr, mS(Sr, Qr, jr)
      })), rr.removeNode(Zr.v), jr
    }

    function mS(rr, Sr, Qr) {
      var Zr, Wr, ar;
      Qr.out ? Qr.in ? null == (ar = rr[Qr.out - Qr.in + Sr]) || ar.enqueue(Qr) : null == (Wr = rr[rr.length - 1]) || Wr.enqueue(Qr) : null == (Zr = rr[0]) || Zr.enqueue(Qr)
    }

    function NS(rr, Sr) {
      var Qr;
      ("greedy" === rr.graph().acyclicer ? pS(rr, (Qr = rr, rr => Qr.edge(rr).weight)) : function(rr, Sr) {
        let Qr = [],
          Zr = {},
          Wr = {};

        function ar(Sr) {
          Object.hasOwn(Wr, Sr) || (Wr[Sr] = !0, Zr[Sr] = !0, rr.outEdges(Sr).forEach((rr => {
            Object.hasOwn(Zr, rr.w) ? Qr.push(rr) : ar(rr.w)
          })), delete Zr[Sr])
        }

        function jr(ar) {
          var Ir;
          Object.hasOwn(Wr, ar) || (Wr[ar] = !0, Zr[ar] = !0, null == (Ir = rr.outEdges(ar)) || Ir.forEach((Wr => {
            var Ir, fr;
            Object.hasOwn(Zr, Wr.w) || (null == (Ir = Sr.node(ar)) ? void 0 : Ir.rank) > (null == (fr = Sr.node(Wr.w)) ? void 0 : fr.rank) && function(rr, Sr, Qr) {
              let Zr = new Set;

              function Wr(Sr) {
                var ar;
                if (rr.sources().includes(Sr)) return !0;
                Zr.add(Sr);
                for (let jr of null != (ar = rr.inEdges(Sr)) ? ar : [])
                  if ((jr.v !== Qr.v || jr.w !== Qr.w) && !Zr.has(jr.v) && Wr(jr.v)) return !0;
                return !1
              }
              return Wr(Sr)
            }(rr, Wr.w, Wr) ? Qr.push(Wr) : jr(Wr.w)
          })), delete Zr[ar])
        }
        let Ir = ar;
        return Sr && "function" == typeof Sr.node && (Ir = jr), rr.sources().forEach(Ir), rr.nodes().forEach(Ir), Qr
      }(rr, null != Sr ? Sr : null)).forEach((Sr => {
        let Qr = rr.edge(Sr);
        rr.removeEdge(Sr), Qr.forwardName = Sr.name, Qr.reversed = !0, rr.setEdge(Sr.w, Sr.v, Qr, ur("rev"))
      }))
    }

    function US(rr) {
      rr.graph().dummyChains = [], rr.edges().forEach((Sr => function(rr, Sr) {
        let Qr, Zr, Wr, ar = Sr.v,
          jr = rr.node(ar).rank,
          Ir = Sr.w,
          fr = rr.node(Ir).rank,
          Er = Sr.name,
          pr = rr.edge(Sr),
          xr = pr.labelRank;
        if (fr === jr + 1) return;
        for (rr.removeEdge(Sr), Wr = 0, ++jr; jr < fr; ++Wr, ++jr) pr.points = [], Zr = {
          width: 0,
          height: 0,
          edgeLabel: pr,
          edgeObj: Sr,
          rank: jr
        }, Qr = Vr(rr, "edge", Zr, "_d"), jr === xr && (Zr.width = pr.width, Zr.height = pr.height, Zr.dummy = "edge-label", Zr.labelpos = pr.labelpos), rr.setEdge(ar, Qr, {
          weight: pr.weight
        }, Er), 0 === Wr && rr.graph().dummyChains.push(Qr), ar = Qr;
        rr.setEdge(ar, Ir, {
          weight: pr.weight
        }, Er)
      }(rr, Sr)))
    }

    function tS(rr) {
      let Sr = {};
      rr.sources().forEach((function Qr(Zr) {
        let Wr = rr.node(Zr);
        if (Object.hasOwn(Sr, Zr)) return Wr.rank;
        Sr[Zr] = !0;
        let ar = rr.outEdges(Zr),
          jr = ar ? ar.map((Sr => null == Sr ? Number.POSITIVE_INFINITY : Qr(Sr.w) - rr.edge(Sr).minlen)) : [],
          Ir = br(Math.min, jr);
        return Ir === Number.POSITIVE_INFINITY && (Ir = 0), Wr.rank = Ir
      }))
    }

    function hS(rr, Sr) {
      return rr.node(Sr.w).rank - rr.node(Sr.v).rank - rr.edge(Sr).minlen
    }
    var zS = function(rr) {
      let Sr = new Ar({
          directed: !1
        }),
        Qr = rr.nodes();
      if (0 === Qr.length) throw new Error("Graph must have at least one node");
      let Zr, Wr, ar = Qr[0],
        jr = rr.nodeCount();
      for (Sr.setNode(ar, {}); YS(Sr, rr) < jr && (Zr = nS(Sr, rr), Zr);) Wr = Sr.hasNode(Zr.v) ? hS(rr, Zr) : -hS(rr, Zr), eS(Sr, rr, Wr);
      return Sr
    };

    function YS(rr, Sr) {
      return rr.nodes().forEach((function Qr(Zr) {
        let Wr = Sr.nodeEdges(Zr);
        Wr && Wr.forEach((Wr => {
          let ar = Wr.v,
            jr = Zr === ar ? Wr.w : ar;
          !rr.hasNode(jr) && !hS(Sr, Wr) && (rr.setNode(jr, {}), rr.setEdge(Zr, jr, {}), Qr(jr))
        }))
      })), rr.nodeCount()
    }

    function nS(rr, Sr) {
      return Sr.edges().reduce(((Qr, Zr) => {
        let Wr = Number.POSITIVE_INFINITY;
        return rr.hasNode(Zr.v) !== rr.hasNode(Zr.w) && (Wr = hS(Sr, Zr)), Wr < Qr[0] ? [Wr, Zr] : Qr
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function eS(rr, Sr, Qr) {
      rr.nodes().forEach((rr => Sr.node(rr).rank += Qr))
    }
    var {
      preorder: KS,
      postorder: yS
    } = zr, BS = TS;

    function TS(rr) {
      rr = function(rr) {
        let Sr = (new Ar).setGraph(rr.graph());
        return rr.nodes().forEach((Qr => Sr.setNode(Qr, rr.node(Qr)))), rr.edges().forEach((Qr => {
          let Zr = Sr.edge(Qr.v, Qr.w) || {
              weight: 0,
              minlen: 1
            },
            Wr = rr.edge(Qr);
          Sr.setEdge(Qr.v, Qr.w, {
            weight: Zr.weight + Wr.weight,
            minlen: Math.max(Zr.minlen, Wr.minlen)
          })
        })), Sr
      }(rr), tS(rr);
      let Sr, Qr, Zr = zS(rr);
      for (LS(Zr), vS(Zr, rr); Sr = XS(Zr);) Qr = PS(Zr, rr, Sr), HS(Zr, rr, Sr, Qr)
    }

    function vS(rr, Sr) {
      let Qr = yS(rr, rr.nodes());
      Qr = Qr.slice(0, Qr.length - 1), Qr.forEach((Qr => function(rr, Sr, Qr) {
        let Zr = rr.node(Qr).parent,
          Wr = rr.edge(Qr, Zr);
        Wr.cutvalue = OS(rr, Sr, Qr)
      }(rr, Sr, Qr)))
    }

    function OS(rr, Sr, Qr) {
      let Zr = rr.node(Qr).parent,
        Wr = !0,
        ar = Sr.edge(Qr, Zr),
        jr = 0;
      ar || (Wr = !1, ar = Sr.edge(Zr, Qr)), jr = ar.weight;
      let Ir = Sr.nodeEdges(Qr);
      return Ir && Ir.forEach((ar => {
        let Ir = ar.v === Qr,
          fr = Ir ? ar.w : ar.v;
        if (fr !== Zr) {
          let Zr = Ir === Wr,
            Er = Sr.edge(ar).weight;
          if (jr += Zr ? Er : -Er, function(rr, Sr, Qr) {
              return rr.hasEdge(Sr, Qr)
            }(rr, Qr, fr)) {
            let Sr = rr.edge(Qr, fr).cutvalue;
            jr += Zr ? -Sr : Sr
          }
        }
      })), jr
    }

    function LS(rr, Sr) {
      arguments.length < 2 && (Sr = rr.nodes()[0]), lS(rr, {}, 1, Sr)
    }

    function lS(rr, Sr, Qr, Zr, Wr) {
      let ar = Qr,
        jr = rr.node(Zr);
      Sr[Zr] = !0;
      let Ir = rr.neighbors(Zr);
      return Ir && Ir.forEach((Wr => {
        Object.hasOwn(Sr, Wr) || (Qr = lS(rr, Sr, Qr, Wr, Zr))
      })), jr.low = ar, jr.lim = Qr++, Wr ? jr.parent = Wr : delete jr.parent, Qr
    }

    function XS(rr) {
      return rr.edges().find((Sr => rr.edge(Sr).cutvalue < 0))
    }

    function PS(rr, Sr, Qr) {
      let Zr = Qr.v,
        Wr = Qr.w;
      Sr.hasEdge(Zr, Wr) || (Zr = Qr.w, Wr = Qr.v);
      let ar = rr.node(Zr),
        jr = rr.node(Wr),
        Ir = ar,
        fr = !1;
      return ar.lim > jr.lim && (Ir = jr, fr = !0), Sr.edges().filter((Sr => fr === qS(rr, rr.node(Sr.v), Ir) && fr !== qS(rr, rr.node(Sr.w), Ir))).reduce(((rr, Qr) => hS(Sr, Qr) < hS(Sr, rr) ? Qr : rr))
    }

    function HS(rr, Sr, Qr, Zr) {
      let Wr = Qr.v,
        ar = Qr.w;
      rr.removeEdge(Wr, ar), rr.setEdge(Zr.v, Zr.w, {}), LS(rr), vS(rr, Sr),
        function(rr, Sr) {
          let Qr = rr.nodes().find((Sr => !rr.node(Sr).parent));
          if (!Qr) return;
          let Zr = KS(rr, [Qr]);
          Zr = Zr.slice(1), Zr.forEach((Qr => {
            let Zr = rr.node(Qr).parent,
              Wr = Sr.edge(Qr, Zr),
              ar = !1;
            Wr || (Wr = Sr.edge(Zr, Qr), ar = !0), Sr.node(Qr).rank = Sr.node(Zr).rank + (ar ? Wr.minlen : -Wr.minlen)
          }))
        }(rr, Sr)
    }

    function qS(rr, Sr, Qr) {
      return Qr.low <= Sr.lim && Sr.lim <= Qr.lim
    }
    TS.initLowLimValues = LS, TS.initCutValues = vS, TS.calcCutValue = OS, TS.leaveEdge = XS, TS.enterEdge = PS, TS.exchangeEdges = HS;
    var RS = function(rr) {
      let Sr = rr.graph().ranker;
      if ("function" == typeof Sr) return Sr(rr);
      switch (Sr) {
        case "network-simplex":
        default:
          CS(rr);
          break;
        case "tight-tree":
          ! function(rr) {
            tS(rr), zS(rr)
          }(rr);
          break;
        case "longest-path":
          gS(rr);
        case "none":
      }
    };
    var gS = tS;

    function CS(rr) {
      BS(rr)
    }
    var MS = function(rr) {
      let Sr = function(rr) {
          let Sr = {},
            Qr = 0;

          function Zr(Wr) {
            let ar = Qr;
            rr.children(Wr).forEach(Zr), Sr[Wr] = {
              low: ar,
              lim: Qr++
            }
          }
          return rr.children(ZS).forEach(Zr), Sr
        }(rr),
        Qr = rr.graph();
      if (!Array.isArray(Qr.dummyChains)) return;
      Qr.dummyChains.forEach((Qr => {
        let Zr = rr.node(Qr),
          Wr = Zr.edgeObj,
          ar = function(rr, Sr, Qr, Zr) {
            let Wr, ar = [],
              jr = [],
              Ir = Math.min(Sr[Qr].low, Sr[Zr].low),
              fr = Math.max(Sr[Qr].lim, Sr[Zr].lim);
            Wr = Qr;
            do {
              Wr = rr.parent(Wr), ar.push(Wr)
            } while (Wr && (Sr[Wr].low > Ir || fr > Sr[Wr].lim));
            let Er = Wr,
              pr = Zr;
            for (;
              (pr = rr.parent(pr)) !== Er;) jr.push(pr);
            return {
              path: ar.concat(jr.reverse()),
              lca: Er
            }
          }(rr, Sr, Wr.v, Wr.w),
          jr = ar.path,
          Ir = ar.lca,
          fr = 0,
          Er = jr[fr],
          pr = !0;
        for (; Qr !== Wr.w;) {
          if (Zr = rr.node(Qr), pr) {
            for (;
              (Er = jr[fr]) !== Ir && rr.node(Er).maxRank < Zr.rank;) fr++;
            Er === Ir && (pr = !1)
          }
          if (!pr) {
            for (; fr < jr.length - 1 && rr.node(jr[fr + 1]).minRank <= Zr.rank;) fr++;
            Er = jr[fr]
          }
          void 0 !== Er && rr.setParent(Qr, Er), Qr = rr.successors(Qr)[0]
        }
      }))
    };

    function GS(rr) {
      let Sr = Vr(rr, "root", {}, "_root"),
        Qr = function(rr) {
          let Sr = {};

          function Qr(Zr, Wr) {
            let ar = rr.children(Zr);
            ar && ar.length && ar.forEach((rr => Qr(rr, Wr + 1))), Sr[Zr] = Wr
          }
          return rr.children(ZS).forEach((rr => Qr(rr, 1))), Sr
        }(rr),
        Zr = Object.values(Qr),
        Wr = br(Math.max, Zr) - 1,
        ar = 2 * Wr + 1;
      rr.graph().nestingRoot = Sr, rr.edges().forEach((Sr => rr.edge(Sr).minlen *= ar));
      let jr = function(rr) {
        return rr.edges().reduce(((Sr, Qr) => Sr + rr.edge(Qr).weight), 0)
      }(rr) + 1;
      rr.children(ZS).forEach((Zr => {
        kS(rr, Sr, ar, jr, Wr, Qr, Zr)
      })), rr.graph().nodeRankFactor = ar
    }

    function kS(rr, Sr, Qr, Zr, Wr, ar, jr) {
      var Ir;
      let fr = rr.children(jr);
      if (!fr.length) return void(jr !== Sr && rr.setEdge(Sr, jr, {
        weight: 0,
        minlen: Qr
      }));
      let Er = Fr(rr, "_bt"),
        pr = Fr(rr, "_bb"),
        xr = rr.node(jr);
      rr.setParent(Er, jr), xr.borderTop = Er, rr.setParent(pr, jr), xr.borderBottom = pr, fr.forEach((Ir => {
        var fr;
        kS(rr, Sr, Qr, Zr, Wr, ar, Ir);
        let xr = rr.node(Ir),
          mr = xr.borderTop ? xr.borderTop : Ir,
          Nr = xr.borderBottom ? xr.borderBottom : Ir,
          Ur = xr.borderTop ? Zr : 2 * Zr,
          tr = mr !== Nr ? 1 : Wr - (null != (fr = ar[jr]) ? fr : 0) + 1;
        rr.setEdge(Er, mr, {
          weight: Ur,
          minlen: tr,
          nestingEdge: !0
        }), rr.setEdge(Nr, pr, {
          weight: Ur,
          minlen: tr,
          nestingEdge: !0
        })
      })), rr.parent(jr) || rr.setEdge(Sr, Er, {
        weight: 0,
        minlen: Wr + (null != (Ir = ar[jr]) ? Ir : 0)
      })
    }
    var AS = function(rr) {
      rr.children(ZS).forEach((function Sr(Qr) {
        let Zr = rr.children(Qr),
          Wr = rr.node(Qr);
        if (Zr.length && Zr.forEach(Sr), Wr && Object.hasOwn(Wr, "minRank")) {
          Wr.borderLeft = [], Wr.borderRight = [];
          for (let Sr = Wr.minRank, Zr = Wr.maxRank + 1; Sr < Zr; ++Sr) VS(rr, "borderLeft", "_bl", Qr, Wr, Sr), VS(rr, "borderRight", "_br", Qr, Wr, Sr)
        }
      }))
    };

    function VS(rr, Sr, Qr, Zr, Wr, ar) {
      let jr = {
          width: 0,
          height: 0,
          rank: ar,
          borderType: Sr
        },
        Ir = Wr[Sr][ar - 1],
        fr = Vr(rr, "border", jr, Qr);
      Wr[Sr][ar] = fr, rr.setParent(fr, Zr), Ir && rr.setEdge(Ir, fr, {
        weight: 1
      })
    }

    function iS(rr) {
      var Sr;
      let Qr = null == (Sr = rr.graph().rankdir) ? void 0 : Sr.toLowerCase();
      ("bt" === Qr || "rl" === Qr) && function(rr) {
        rr.nodes().forEach((Sr => FS(rr.node(Sr)))), rr.edges().forEach((Sr => {
          var Qr;
          let Zr = rr.edge(Sr);
          null == (Qr = Zr.points) || Qr.forEach(FS), Object.hasOwn(Zr, "y") && FS(Zr)
        }))
      }(rr), ("lr" === Qr || "rl" === Qr) && (function(rr) {
        rr.nodes().forEach((Sr => oS(rr.node(Sr)))), rr.edges().forEach((Sr => {
          var Qr;
          let Zr = rr.edge(Sr);
          null == (Qr = Zr.points) || Qr.forEach(oS), Object.hasOwn(Zr, "x") && oS(Zr)
        }))
      }(rr), wS(rr))
    }

    function wS(rr) {
      rr.nodes().forEach((Sr => cS(rr.node(Sr)))), rr.edges().forEach((Sr => cS(rr.edge(Sr))))
    }

    function cS(rr) {
      let Sr = rr.width;
      rr.width = rr.height, rr.height = Sr
    }

    function FS(rr) {
      rr.y = -rr.y
    }

    function oS(rr) {
      let Sr = rr.x;
      rr.x = rr.y, rr.y = Sr
    }

    function bS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Qr = {},
        Zr = rr.nodes().filter((Sr => !rr.children(Sr).length)),
        Wr = Zr.map((Sr => rr.node(Sr).rank)),
        ar = rS(br(Math.max, Wr) + 1).map((() => []));
      return Zr.sort(((Sr, Qr) => rr.node(Sr).rank - rr.node(Qr).rank)).forEach((function Zr(Wr) {
        if (Qr[Wr]) return;
        Qr[Wr] = !0;
        let jr = rr.node(Wr);
        ar[jr.rank].push(Wr);
        let Ir = rr.successors(Wr);
        Ir && [...Ir].sort(((Qr, Zr) => function(Qr, Zr) {
          let Wr = rr.node(Qr),
            ar = rr.node(Zr);
          return WS(Sr, Wr, ar)
        }(Qr, Zr))).forEach(Zr)
      })), ar
    }

    function JS(rr, Sr) {
      let Qr = 0;
      for (let Zr = 1; Zr < Sr.length; ++Zr) Qr += DS(rr, Sr[Zr - 1], Sr[Zr]);
      return Qr
    }

    function DS(rr, Sr, Qr) {
      let Zr = function(rr, Sr) {
          return rr.reduce(((rr, Qr, Zr) => (rr[Qr] = Sr[Zr], rr)), {})
        }(Qr, Qr.map(((rr, Sr) => Sr))),
        Wr = Sr.flatMap((Sr => {
          let Qr = rr.outEdges(Sr);
          return Qr ? Qr.map((Sr => ({
            pos: Zr[Sr.w],
            weight: rr.edge(Sr).weight
          }))).sort(((rr, Sr) => rr.pos - Sr.pos)) : []
        })),
        ar = 1;
      for (; ar < Qr.length;) ar <<= 1;
      let jr = 2 * ar - 1;
      ar -= 1;
      let Ir = new Array(jr).fill(0),
        fr = 0;
      return Wr.forEach((rr => {
        let Sr = rr.pos + ar;
        Ir[Sr] += rr.weight;
        let Qr = 0;
        for (; Sr > 0;) Sr % 2 && (Qr += Ir[Sr + 1]), Sr = Sr - 1 >> 1, Ir[Sr] += rr.weight;
        fr += rr.weight * Qr
      })), fr
    }

    function dS(rr, Sr) {
      let Qr = {};
      return rr.forEach(((rr, Sr) => {
          let Zr = {
            indegree: 0,
            in: [],
            out: [],
            vs: [rr.v],
            i: Sr
          };
          void 0 !== rr.barycenter && (Zr.barycenter = rr.barycenter, Zr.weight = rr.weight), Qr[rr.v] = Zr
        })), Sr.edges().forEach((rr => {
          let Sr = Qr[rr.v],
            Zr = Qr[rr.w];
          void 0 !== Sr && void 0 !== Zr && (Zr.indegree++, Sr.out.push(Zr))
        })),
        function(rr) {
          let Sr = [];

          function Qr(rr) {
            return Sr => {
              Sr.merged || (void 0 === Sr.barycenter || void 0 === rr.barycenter || Sr.barycenter >= rr.barycenter) && function(rr, Sr) {
                let Qr = 0,
                  Zr = 0;
                rr.weight && (Qr += rr.barycenter * rr.weight, Zr += rr.weight), Sr.weight && (Qr += Sr.barycenter * Sr.weight, Zr += Sr.weight), rr.vs = Sr.vs.concat(rr.vs), rr.barycenter = Qr / Zr, rr.weight = Zr, rr.i = Math.min(Sr.i, rr.i), Sr.merged = !0
              }(rr, Sr)
            }
          }

          function Zr(Sr) {
            return Qr => {
              Qr.in.push(Sr), 0 === --Qr.indegree && rr.push(Qr)
            }
          }
          for (; rr.length;) {
            let Wr = rr.pop();
            Sr.push(Wr), Wr.in.reverse().forEach(Qr(Wr)), Wr.out.forEach(Zr(Wr))
          }
          return Sr.filter((rr => !rr.merged)).map((rr => SS(rr, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(Qr).filter((rr => !rr.indegree)))
    }

    function sS(rr, Sr, Qr, Zr, Wr) {
      let ar = {},
        jr = null,
        Ir = null,
        fr = Wr;
      "boolean" == typeof Sr ? (fr = Sr, ar = {}) : Sr && (ar = Sr, jr = null != Qr ? Qr : null, Ir = null != Zr ? Zr : null);
      let Er = function(rr, Sr) {
          let Qr = {
            lhs: [],
            rhs: []
          };
          return rr.forEach((rr => {
            Sr(rr) ? Qr.lhs.push(rr) : Qr.rhs.push(rr)
          })), Qr
        }(rr, (rr => Object.hasOwn(rr, "barycenter"))),
        pr = Er.lhs,
        xr = Er.rhs.sort(((rr, Sr) => Sr.i - rr.i)),
        mr = [],
        Nr = 0,
        Ur = 0,
        tr = 0;
      pr.sort(function(rr, Sr, Qr) {
        return (Zr, Wr) => {
          if (Zr.barycenter < Wr.barycenter) return -1;
          if (Zr.barycenter > Wr.barycenter) return 1;
          if (rr && ("string" == typeof Zr.vs[0] || "string" == typeof Wr.vs[0])) {
            let Qr = rr.node(Zr.vs[0]),
              ar = rr.node(Wr.vs[0]),
              jr = WS(Sr, Qr, ar);
            if (0 !== jr) return jr
          }
          return Qr ? Wr.i - Zr.i : Zr.i - Wr.i
        }
      }(Ir, jr, !!fr));
      for (let [zr, Yr] of Object.entries(ar)) {
        let rr = pr.findIndex((rr => rr.vs[0] === zr));
        pr.splice(rr + 1, 0, Yr)
      }
      tr = uS(mr, xr, tr), pr.forEach((rr => {
        tr += rr.vs.length, mr.push(rr.vs), Nr += rr.barycenter * rr.weight, Ur += rr.weight, tr = uS(mr, xr, tr)
      }));
      let hr = {
        vs: mr.flat(1)
      };
      return Ur && (hr.barycenter = Nr / Ur, hr.weight = Ur), hr
    }

    function uS(rr, Sr, Qr) {
      let Zr;
      for (; Sr.length && (Zr = Sr[Sr.length - 1]).i <= Qr;) Sr.pop(), rr.push(Zr.vs), Qr++;
      return Qr
    }

    function rQ(rr, Sr, Qr, Zr, Wr) {
      var ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr;
      let hr = null,
        zr = Wr;
      "boolean" == typeof Zr ? (zr = Zr, hr = null) : void 0 !== Zr && (hr = Zr);
      let Yr = rr.children(Sr),
        nr = rr.node(Sr),
        er = nr ? nr.borderLeft : void 0,
        Kr = nr ? nr.borderRight : void 0,
        yr = {};
      er && (Yr = Yr.filter((rr => rr !== er && rr !== Kr)));
      let Br = function(rr) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Sr => {
          let Qr = rr.inEdges(Sr);
          if (!Qr || !Qr.length) return {
            v: Sr
          };
          {
            let Zr = Qr.reduce(((Sr, Qr) => {
              let Zr = rr.edge(Qr),
                Wr = rr.node(Qr.v);
              return {
                sum: Sr.sum + Zr.weight * Wr.order,
                weight: Sr.weight + Zr.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Sr,
              barycenter: Zr.sum / Zr.weight,
              weight: Zr.weight
            }
          }
        }))
      }(rr, Yr);
      Br.forEach((Sr => {
        if (rr.children(Sr.v).length) {
          let {
            result: Zr
          } = rQ(rr, Sr.v, Qr, hr, zr);
          yr[Sr.v] = Zr, Object.hasOwn(Zr, "barycenter") && function(rr, Sr) {
            void 0 !== rr.barycenter ? (rr.barycenter = (rr.barycenter * rr.weight + Sr.barycenter * Sr.weight) / (rr.weight + Sr.weight), rr.weight += Sr.weight) : (rr.barycenter = Sr.barycenter, rr.weight = Sr.weight)
          }(Sr, Zr)
        }
      }));
      let Tr = dS(Br, Qr);
      ! function(rr, Sr) {
        rr.forEach((rr => {
          rr.vs = rr.vs.flatMap((rr => Sr[rr] ? Sr[rr].vs : rr))
        }))
      }(Tr, yr);
      let vr = {},
        Or = !1;
      for (let lr = 0; lr < Tr.length; lr++)
        for (let Sr = lr + 1; Sr < Tr.length; Sr++)
          if (Tr[lr] && Tr[Sr] && null != (ar = Tr[lr]) && ar.barycenter && null != (jr = Tr[Sr]) && jr.barycenter && (null == (Ir = Tr[lr]) ? void 0 : Ir.barycenter) === Tr[Sr].barycenter) {
            let Qr = null != (Er = null == (fr = Tr[lr]) ? void 0 : fr.vs[0]) ? Er : "",
              Zr = null != (xr = null == (pr = Tr[Sr]) ? void 0 : pr.vs[0]) ? xr : "",
              Wr = rr.node(Qr),
              ar = rr.node(Zr);
            if ("edge" === Wr.dummy && "edge" === ar.dummy && (null == (mr = Wr.edgeObj) ? void 0 : mr.v) === (null == (Nr = ar.edgeObj) ? void 0 : Nr.v) && (null == (Ur = Wr.edgeObj) ? void 0 : Ur.w) === (null == (tr = ar.edgeObj) ? void 0 : tr.w)) {
              if (Wr.edgeLabel.reversed) {
                vr[Zr] = Tr[lr], Tr.splice(lr, 1), lr--;
                break
              }
              vr[Qr] = Tr[Sr], Tr.splice(Sr, 1), Sr--
            } else Or = !0
          } let Lr = sS(Tr, vr, hr, rr, zr);
      if (er && Kr) {
        Lr.vs = [er, Lr.vs, Kr].flat(1);
        let Sr = rr.predecessors(er);
        if (Sr && Sr.length) {
          let Qr = rr.node(Sr[0]),
            Zr = rr.predecessors(Kr),
            Wr = rr.node(Zr[0]);
          Object.hasOwn(Lr, "barycenter") || (Lr.barycenter = 0, Lr.weight = 0), Lr.barycenter = (Lr.barycenter * Lr.weight + Qr.order + Wr.order) / (Lr.weight + 2), Lr.weight += 2
        }
      }
      return Object.defineProperty(Lr, "result", {
        value: Lr,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Lr, "usedBias", {
        value: Or,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Lr
    }

    function SQ(rr, Sr, Qr, Zr) {
      Zr || (Zr = rr.nodes());
      let Wr = function(rr) {
          let Sr;
          for (; rr.hasNode(Sr = ur("_root")););
          return Sr
        }(rr),
        ar = new Ar({
          compound: !0
        }).setGraph({
          root: Wr
        }).setDefaultNodeLabel((Sr => rr.node(Sr)));
      return Zr.forEach((Zr => {
        let jr = rr.node(Zr),
          Ir = rr.parent(Zr);
        if (jr.rank === Sr || jr.minRank <= Sr && Sr <= jr.maxRank) {
          ar.setNode(Zr), ar.setParent(Zr, Ir || Wr);
          let fr = rr[Qr](Zr);
          fr && fr.forEach((Sr => {
            let Qr = Sr.v === Zr ? Sr.w : Sr.v,
              Wr = ar.edge(Qr, Zr),
              jr = void 0 !== Wr ? Wr.weight : 0;
            ar.setEdge(Qr, Zr, {
              weight: rr.edge(Sr).weight + jr
            })
          })), Object.hasOwn(jr, "minRank") && ar.setNode(Zr, {
            borderLeft: jr.borderLeft[Sr],
            borderRight: jr.borderRight[Sr]
          })
        }
      })), ar
    }

    function QQ(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Sr.customOrder) return void Sr.customOrder(rr, QQ);
      let Zr = Jr(rr),
        Wr = ZQ(rr, rS(1, Zr + 1), "inEdges"),
        ar = ZQ(rr, rS(Zr - 1, -1, -1), "outEdges"),
        jr = bS(rr, Qr);
      if (aQ(rr, jr), Sr.disableOptimalOrderHeuristic) return;
      let Ir, fr = Number.POSITIVE_INFINITY,
        Er = Sr.constraints || [];
      for (let pr = 0, xr = 0; xr < 4; ++pr, ++xr) {
        WQ(pr % 2 ? Wr : ar, pr % 4 >= 2, Er, Qr), jr = cr(rr);
        let Sr = JS(rr, jr);
        Sr < fr ? (xr = 0, Ir = Object.assign({}, jr), fr = Sr) : Sr === fr && (Ir = structuredClone(jr))
      }
      aQ(rr, Ir)
    }

    function ZQ(rr, Sr, Qr) {
      let Zr = new Map,
        Wr = (rr, Sr) => {
          Zr.has(rr) || Zr.set(rr, []), Zr.get(rr).push(Sr)
        };
      for (let ar of rr.nodes()) {
        let Sr = rr.node(ar);
        if ("number" == typeof Sr.rank && Wr(Sr.rank, ar), "number" == typeof Sr.minRank && "number" == typeof Sr.maxRank)
          for (let rr = Sr.minRank; rr <= Sr.maxRank; rr++) rr !== Sr.rank && Wr(rr, ar)
      }
      return Sr.map((function(Sr) {
        return SQ(rr, Sr, Qr, Zr.get(Sr) || [])
      }))
    }

    function WQ(rr, Sr, Qr, Zr) {
      let Wr = !0,
        ar = new Ar;
      rr.forEach((function(rr) {
        Qr.forEach((rr => ar.setEdge(rr.left, rr.right)));
        let jr = rr.graph().root,
          {
            result: Ir,
            usedBias: fr
          } = rQ(rr, jr, ar, Zr, Wr);
        Sr && fr && (Wr = !Wr), Ir.vs.forEach(((Sr, Qr) => rr.node(Sr).order = Qr)),
          function(rr, Sr, Qr) {
            let Zr, Wr = {};
            Qr.forEach((Qr => {
              let ar, jr, Ir = rr.parent(Qr);
              for (; Ir;) {
                if (ar = rr.parent(Ir), ar ? (jr = Wr[ar], Wr[ar] = Ir) : (jr = Zr, Zr = Ir), jr && jr !== Ir) return void Sr.setEdge(jr, Ir);
                Ir = ar
              }
            }))
          }(rr, ar, Ir.vs)
      }))
    }

    function aQ(rr, Sr) {
      Object.values(Sr).forEach((Sr => Sr.forEach(((Sr, Qr) => rr.node(Sr).order = Qr))))
    }

    function jQ(rr, Sr, Qr) {
      if (Sr > Qr) {
        let rr = Sr;
        Sr = Qr, Qr = rr
      }
      let Zr = rr[Sr];
      Zr || (rr[Sr] = Zr = {}), Zr[Qr] = !0
    }

    function IQ(rr, Sr, Qr) {
      if (Sr > Qr) {
        let rr = Sr;
        Sr = Qr, Qr = rr
      }
      let Zr = rr[Sr];
      return void 0 !== Zr && Object.hasOwn(Zr, Qr)
    }

    function fQ(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ar = {},
        jr = function(rr, Sr, Qr, Zr) {
          let Wr = new Ar,
            ar = rr.graph(),
            jr = function(rr, Sr, Qr) {
              return (Zr, Wr, ar) => {
                let jr, Ir = Zr.node(Wr),
                  fr = Zr.node(ar),
                  Er = 0;
                if (Er += Ir.width / 2, Object.hasOwn(Ir, "labelpos")) switch (Ir.labelpos.toLowerCase()) {
                  case "l":
                    jr = -Ir.width / 2;
                    break;
                  case "r":
                    jr = Ir.width / 2
                }
                if (jr && (Er += Qr ? jr : -jr), jr = void 0, Er += (Ir.dummy ? Sr : rr) / 2, Er += (fr.dummy ? Sr : rr) / 2, Er += fr.width / 2, Object.hasOwn(fr, "labelpos")) switch (fr.labelpos.toLowerCase()) {
                  case "l":
                    jr = fr.width / 2;
                    break;
                  case "r":
                    jr = -fr.width / 2
                }
                return jr && (Er += Qr ? jr : -jr), Er
              }
            }(ar.nodesep, ar.edgesep, Zr);
          return Sr.forEach((Sr => {
            let Zr;
            Sr.forEach((Sr => {
              let ar = Qr[Sr];
              if (void 0 !== ar) {
                if (Wr.setNode(ar), void 0 !== Zr) {
                  let Ir = Qr[Zr];
                  if (void 0 !== Ir) {
                    let Qr = Wr.edge(Ir, ar);
                    Wr.setEdge(Ir, ar, Math.max(jr(rr, Sr, Zr), Qr || 0))
                  }
                }
                Zr = Sr
              }
            }))
          })), Wr
        }(rr, Sr, Qr, Wr),
        Ir = Wr ? "borderLeft" : "borderRight";

      function fr(rr, Sr) {
        let Qr = jr.nodes().slice(),
          Zr = {},
          Wr = Qr.pop();
        for (; Wr;) {
          if (Zr[Wr]) rr(Wr);
          else {
            Zr[Wr] = !0, Qr.push(Wr);
            for (let rr of Sr(Wr)) Qr.push(rr)
          }
          Wr = Qr.pop()
        }
      }
      return fr((function(rr) {
        let Sr = jr.inEdges(rr);
        ar[rr] = Sr ? Sr.reduce(((rr, Sr) => {
          var Qr;
          let Zr = null != (Qr = ar[Sr.v]) ? Qr : 0,
            Wr = jr.edge(Sr);
          return Math.max(rr, Zr + (void 0 !== Wr ? Wr : 0))
        }), 0) : 0
      }), (function(rr) {
        return jr.predecessors(rr) || []
      })), fr((function(Sr) {
        let Qr = jr.outEdges(Sr),
          Zr = Number.POSITIVE_INFINITY;
        Qr && (Zr = Qr.reduce(((rr, Sr) => {
          let Qr = ar[Sr.w],
            Zr = jr.edge(Sr);
          return Math.min(rr, (void 0 !== Qr ? Qr : 0) - (void 0 !== Zr ? Zr : 0))
        }), Number.POSITIVE_INFINITY));
        let Wr = rr.node(Sr);
        Zr !== Number.POSITIVE_INFINITY && Wr.borderType !== Ir && (ar[Sr] = Math.max(void 0 !== ar[Sr] ? ar[Sr] : 0, Zr))
      }), (function(rr) {
        return jr.successors(rr) || []
      })), Object.keys(Zr).forEach((rr => {
        var Sr;
        let Zr = Qr[rr];
        void 0 !== Zr && (ar[rr] = null != (Sr = ar[Zr]) ? Sr : 0)
      })), ar
    }

    function EQ(rr, Sr) {
      let Qr, Zr = cr(rr),
        Wr = Object.assign(function(rr, Sr) {
          let Qr = {};
          return Sr.length && Sr.reduce((function(Sr, Zr) {
            let Wr = 0,
              ar = 0,
              jr = Sr.length,
              Ir = Zr[Zr.length - 1];
            return Zr.forEach(((Sr, fr) => {
              let Er = function(rr, Sr) {
                  if (rr.node(Sr).dummy) {
                    let Qr = rr.predecessors(Sr);
                    if (Qr) return Qr.find((Sr => rr.node(Sr).dummy))
                  }
                }(rr, Sr),
                pr = Er ? rr.node(Er).order : jr;
              (Er || Sr === Ir) && (Zr.slice(ar, fr + 1).forEach((Sr => {
                let Zr = rr.predecessors(Sr);
                Zr && Zr.forEach((Zr => {
                  let ar = rr.node(Zr),
                    jr = ar.order;
                  (jr < Wr || pr < jr) && (!ar.dummy || !rr.node(Sr).dummy) && jQ(Qr, Zr, Sr)
                }))
              })), ar = fr + 1, Wr = pr)
            })), Zr
          })), Qr
        }(rr, Zr), function(rr, Sr) {
          let Qr = {};

          function Zr(Sr, Zr, Wr, ar, jr) {
            rS(Zr, Wr).forEach((Zr => {
              let Wr = Sr[Zr];
              if (void 0 !== Wr && rr.node(Wr).dummy) {
                let Sr = rr.predecessors(Wr);
                Sr && Sr.forEach((Sr => {
                  if (void 0 === Sr) return;
                  let Zr = rr.node(Sr);
                  Zr.dummy && (Zr.order < ar || Zr.order > jr) && jQ(Qr, Sr, Wr)
                }))
              }
            }))
          }
          return Sr.length && Sr.reduce((function(Sr, Qr) {
            let Wr = -1,
              ar = -1,
              jr = 0;
            return Qr.forEach(((Ir, fr) => {
              if ("border" === rr.node(Ir).dummy) {
                let Sr = rr.predecessors(Ir);
                if (Sr && Sr.length) {
                  let Ir = Sr[0];
                  if (void 0 === Ir) return;
                  ar = rr.node(Ir).order, Zr(Qr, jr, fr, Wr, ar), jr = fr, Wr = ar
                }
              }
              Zr(Qr, jr, Qr.length, ar, Sr.length)
            })), Qr
          })), Qr
        }(rr, Zr)),
        ar = {};
      ["u", "d"].forEach((jr => {
        Qr = "u" === jr ? Zr : Object.values(Zr).reverse(), ["l", "r"].forEach((Zr => {
          "r" === Zr && (Qr = Qr.map((rr => Object.values(rr).reverse())));
          let Ir = function(rr, Sr, Qr, Zr, Wr) {
              let ar = {},
                jr = {},
                Ir = {};
              return Sr.forEach((rr => {
                rr.forEach(((rr, Sr) => {
                  ar[rr] = rr, jr[rr] = rr, Ir[rr] = Sr
                }))
              })), Sr.forEach((Sr => {
                let fr = -1,
                  Er = -1,
                  pr = !1,
                  xr = Sr,
                  mr = Sr.findIndex((Sr => (null == Wr ? void 0 : Wr.includes(Sr)) || pQ(Sr, rr, Wr)));
                mr > 0 && (xr = [Sr[mr], ...Sr.slice(0, mr), ...Sr.slice(mr + 1)], pr = !0), xr.forEach((Sr => {
                  var xr;
                  let mr = Zr(Sr);
                  if (mr && mr.length) {
                    null != Wr && Wr.includes(Sr) && (mr = mr.filter((Sr => pQ(Sr, rr, Wr))));
                    let Zr = mr.sort(((rr, Sr) => {
                        let Qr = Ir[rr],
                          Zr = Ir[Sr];
                        return (void 0 !== Qr ? Qr : 0) - (void 0 !== Zr ? Zr : 0)
                      })),
                      Nr = (Zr.length - 1) / 2;
                    for (let rr = Math.floor(Nr), Wr = Math.ceil(Nr); rr <= Wr; ++rr) {
                      let Wr = Zr[rr];
                      if (void 0 === Wr) continue;
                      let mr = Ir[Wr];
                      if (void 0 !== mr && jr[Sr] === Sr && fr < mr && Ir[Wr] !== Er && !IQ(Qr, Sr, Wr)) {
                        let rr = ar[Wr];
                        void 0 !== rr && (jr[Wr] = Sr, jr[Sr] = ar[Sr] = rr, fr = mr, pr && (fr = -1, Er = null != (xr = Ir[Wr]) ? xr : -1, pr = !1))
                      }
                    }
                  }
                }))
              })), {
                root: ar,
                align: jr
              }
            }(rr, Qr, Wr, (Sr => ("u" === jr ? rr.predecessors(Sr) : rr.successors(Sr)) || []), Sr),
            fr = fQ(rr, Qr, Ir.root, Ir.align, "r" === Zr);
          "r" === Zr && (fr = QS(fr, (rr => -rr))), ar[jr + Zr] = fr
        }))
      }));
      let jr = function(rr, Sr) {
        return Object.values(Sr).reduce(((Sr, Qr) => {
          let Zr = Number.NEGATIVE_INFINITY,
            Wr = Number.POSITIVE_INFINITY;
          Object.entries(Qr).forEach((Sr => {
            let [Qr, ar] = Sr, jr = function(rr, Sr) {
              return rr.node(Sr).width
            }(rr, Qr) / 2;
            Zr = Math.max(ar + jr, Zr), Wr = Math.min(ar - jr, Wr)
          }));
          let ar = Zr - Wr;
          return ar < Sr[0] && (Sr = [ar, Qr]), Sr
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(rr, ar);
      return function(rr, Sr) {
          let Qr = Object.values(Sr),
            Zr = br(Math.min, Qr),
            Wr = br(Math.max, Qr);
          ["u", "d"].forEach((Qr => {
            ["l", "r"].forEach((ar => {
              let jr = Qr + ar,
                Ir = rr[jr];
              if (!Ir || Ir === Sr) return;
              let fr = Object.values(Ir),
                Er = Zr - br(Math.min, fr);
              "l" !== ar && (Er = Wr - br(Math.max, fr)), Er && (rr[jr] = QS(Ir, (rr => rr + Er)))
            }))
          }))
        }(ar, jr),
        function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            Qr = rr.ul;
          return Qr ? QS(Qr, ((Qr, Zr) => {
            var Wr, ar;
            if (Sr) {
              let Qr = Sr.toLowerCase(),
                Wr = rr[Qr];
              if (Wr && void 0 !== Wr[Zr]) return Wr[Zr]
            }
            let jr = Object.values(rr).map((rr => {
              let Sr = rr[Zr];
              return void 0 !== Sr ? Sr : 0
            })).sort(((rr, Sr) => rr - Sr));
            return ((null != (Wr = jr[1]) ? Wr : 0) + (null != (ar = jr[2]) ? ar : 0)) / 2
          })) : {}
        }(ar, rr.graph().align)
    }

    function pQ(rr, Sr, Qr) {
      var Zr;
      if (!Qr) return !1;
      let Wr = null == (Zr = Sr.node(rr)) ? void 0 : Zr.edgeObj;
      if (!Wr || Sr.node(rr).edgeLabel.reversed) return !1;
      let ar = Qr.indexOf(null == Wr ? void 0 : Wr.v),
        jr = Qr.indexOf(null == Wr ? void 0 : Wr.w);
      return -1 !== ar && -1 !== jr && ar === (jr + 1) % Qr.length || ar === (jr - 1) % Qr.length
    }

    function xQ(rr, Sr) {
      (function(rr) {
        let Sr = cr(rr),
          Qr = rr.graph(),
          Zr = Qr.ranksep,
          Wr = Qr.rankalign,
          ar = 0;
        Sr.forEach((Sr => {
          let Qr = Sr.reduce(((Sr, Qr) => {
            var Zr;
            let Wr = null != (Zr = rr.node(Qr).height) ? Zr : 0;
            return Sr > Wr ? Sr : Wr
          }), 0);
          Sr.forEach((Sr => {
            let Zr = rr.node(Sr);
            Zr.y = "top" === Wr ? ar + Zr.height / 2 : "bottom" === Wr ? ar + Qr - Zr.height / 2 : ar + Qr / 2
          })), ar += Qr + Zr
        }))
      })(rr = ir(rr)), Object.entries(EQ(rr, Sr)).forEach((Sr => {
        let [Qr, Zr] = Sr;
        return rr.node(Qr).x = Zr
      }))
    }
    var mQ = new WeakMap;

    function NQ(rr) {
      return tQ(rr, dr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), rr
    }

    function UQ(rr, Sr, Qr) {
      let Zr = Sr;
      for (; void 0 !== Zr;) {
        let Sr = rr.parent(Zr);
        if (Sr === Qr) return Zr;
        Zr = Sr
      }
    }

    function tQ(rr, Sr, Qr) {
      var Zr;
      let Wr = rr.nodes().filter((Sr => rr.children(Sr).length)),
        ar = {};
      Wr.forEach((Zr => {
        let Wr = rr.node(Zr);
        if (Wr && Wr.rankdir) {
          let jr = new Ar({
            multigraph: !0,
            compound: !0
          });
          jr.setGraph({
            rankdir: Wr.rankdir
          });
          let Ir = rr.children(Zr);
          Ir.forEach((Sr => {
            let Qr = {
              ...rr.node(Sr)
            };
            jr.setNode(Sr, Qr);
            let Wr = rr.parent(Sr);
            Wr && Wr !== Zr && Ir.includes(Wr) && jr.setParent(Sr, Wr)
          }));
          let fr = new Set;
          rr.edges().forEach((Sr => {
            let Qr = UQ(rr, Sr.v, Zr),
              Wr = UQ(rr, Sr.w, Zr);
            if (Qr && Wr && Qr !== Wr) {
              let Zr = `${Qr}\0${Wr}`;
              fr.has(Zr) || (fr.add(Zr), jr.setEdge(Qr, Wr, {
                ...rr.edge(Sr)
              }))
            }
          })), tQ(jr, Sr, Qr);
          let Er = OQ(jr);
          hQ(Er, Sr, Qr, null), zQ(jr, Er);
          let pr = 1 / 0,
            xr = 1 / 0,
            mr = -1 / 0,
            Nr = -1 / 0;
          jr.nodes().forEach((rr => {
            if (rr === Zr) return;
            let Sr = jr.node(rr);
            Sr && "number" == typeof Sr.x && "number" == typeof Sr.y && "number" == typeof Sr.width && "number" == typeof Sr.height && (pr = Math.min(pr, Sr.x - Sr.width / 2), mr = Math.max(mr, Sr.x + Sr.width / 2), xr = Math.min(xr, Sr.y - Sr.height / 2), Nr = Math.max(Nr, Sr.y + Sr.height / 2))
          })), (!isFinite(pr) || !isFinite(xr) || !isFinite(mr) || !isFinite(Nr)) && (pr = xr = 0, mr = Nr = 0);
          let Ur = mr - pr,
            tr = Nr - xr;
          ar[Zr] = {
            minX: pr,
            nZ: xr,
            maxX: mr,
            eZ: Nr,
            width: Ur,
            height: tr,
            offsetX: pr,
            offsetY: xr
          }, Wr._dagreClusterSubgraph = jr
        }
      }));
      let jr = [],
        Ir = new Map;
      Wr.forEach((Sr => {
        let Qr = rr.node(Sr);
        Qr && Qr.rankdir && ar[Sr] && Ir.set(Sr, (rr.children(Sr) || []).filter((rr => rr !== Sr)))
      }));
      let fr = new Set([...Ir.values()].flat()),
        Er = new Map;
      Ir.forEach(((Sr, Qr) => {
        fr.has(Qr) || Er.set(Qr, (Sr => {
          let Qr = [],
            Zr = (rr.children(Sr) || []).filter((rr => rr !== Sr));
          for (; Zr.length > 0;) {
            let Sr = Zr.shift();
            Qr.push(Sr), (rr.children(Sr) || []).filter((rr => rr !== Sr)).forEach((rr => Zr.push(rr)))
          }
          return Qr
        })(Qr))
      }));
      let pr = new Set([...Er.values()].flat()),
        xr = rr => {
          for (let [Sr, Qr] of Er)
            if (Qr.includes(rr)) return Sr;
          return rr
        },
        mr = [];
      rr.edges().forEach((Sr => {
        (pr.has(Sr.v) || pr.has(Sr.w)) && mr.push({
          edge: Sr,
          label: rr.edge(Sr)
        })
      }));
      let Nr = new Map;
      pr.forEach((Sr => {
        let Qr = rr.parent(Sr);
        Nr.set(Sr, "string" == typeof Qr ? Qr : void 0)
      })), Er.forEach(((Sr, Qr) => {
        let Zr = rr.node(Qr),
          Wr = [];
        Sr.forEach((Sr => {
          let Qr = rr.node(Sr);
          Qr && (Wr.push({
            id: Sr,
            node: Qr,
            parent: Nr.get(Sr)
          }), rr.removeNode(Sr))
        }));
        let Ir = mr.filter((rr => {
            let {
              edge: Qr
            } = rr;
            return Sr.includes(Qr.v) || Sr.includes(Qr.w)
          })),
          fr = ar[Qr];
        Zr && (jr.push({
          clusterId: Qr,
          subgraph: Zr._dagreClusterSubgraph,
          bounds: fr,
          children: Sr,
          removedNodes: Wr,
          removedEdges: Ir
        }), Zr.width = fr.width, Zr.height = fr.height)
      }));
      let Ur = new Set;
      mr.forEach((Sr => {
        let {
          edge: Qr,
          label: Zr
        } = Sr, Wr = xr(Qr.v), ar = xr(Qr.w);
        if (Wr !== ar && rr.hasNode(Wr) && rr.hasNode(ar)) {
          let Sr = `${Wr}\0${ar}`;
          Ur.has(Sr) || (Ur.add(Sr), rr.setEdge(Wr, ar, {
            ...Zr,
            width: 0,
            height: 0
          }))
        }
      }));
      let tr = OQ(rr),
        hr = hQ(tr, Sr, Qr, null != (Zr = mQ.get(rr)) ? Zr : null);
      mQ.set(rr, hr), zQ(rr, tr), Ur.forEach((Sr => {
        let Qr = Sr.indexOf("\0"),
          Zr = Sr.slice(0, Qr),
          Wr = Sr.slice(Qr + 1);
        rr.hasEdge(Zr, Wr) && rr.removeEdge(Zr, Wr)
      })), jr.forEach((Sr => {
        let {
          clusterId: Qr,
          subgraph: Zr,
          bounds: Wr,
          removedNodes: ar,
          removedEdges: jr
        } = Sr;
        var Ir, fr;
        let Er = rr.node(Qr),
          pr = null != (Ir = null == Er ? void 0 : Er.x) ? Ir : 0,
          xr = null != (fr = null == Er ? void 0 : Er.y) ? fr : 0,
          mr = (Wr.minX + Wr.maxX) / 2,
          Nr = (Wr.nZ + Wr.eZ) / 2;
        ar.forEach((Sr => {
          let {
            id: Qr,
            node: Zr,
            parent: Wr
          } = Sr;
          rr.setNode(Qr, Zr), void 0 !== Wr && rr.setParent(Qr, Wr)
        })), jr.forEach((Sr => {
          let {
            edge: Qr,
            label: Zr
          } = Sr;
          rr.setEdge(Qr, Zr)
        })), Zr.nodes().forEach((Sr => {
          if (Sr === Qr) return;
          let Wr = Zr.node(Sr),
            ar = rr.node(Sr);
          ar && Wr && "number" == typeof Wr.x && "number" == typeof Wr.y && (ar.x = pr + (Wr.x - mr), ar.y = xr + (Wr.y - Nr))
        })), delete Er._dagreClusterSubgraph
      })), Wr.forEach((Sr => {
        var Qr, Zr;
        let Wr = rr.node(Sr),
          jr = ar[Sr];
        if (Wr && Wr.rankdir && Wr._dagreClusterSubgraph && jr) {
          let ar = Wr._dagreClusterSubgraph,
            Ir = null != (Qr = Wr.x) ? Qr : 0,
            fr = null != (Zr = Wr.y) ? Zr : 0,
            Er = (jr.minX + jr.maxX) / 2,
            pr = (jr.nZ + jr.eZ) / 2;
          ar.nodes().forEach((Qr => {
            if (Qr === Sr) return;
            let Zr = ar.node(Qr),
              Wr = rr.node(Qr);
            if (Wr && Zr && "number" == typeof Zr.x && "number" == typeof Zr.y) {
              let rr = Zr.x - Er,
                Sr = Zr.y - pr;
              Wr.x = Ir + rr, Wr.y = fr + Sr
            }
          })), delete Wr._dagreClusterSubgraph
        }
      }))
    }

    function hQ(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Wr, ar;
      let jr = !1 !== (null == Qr ? void 0 : Qr.useDynamic),
        Ir = jr && null != (Wr = null == Zr ? void 0 : Zr.graph) ? Wr : null,
        fr = jr && null != (ar = null == Zr ? void 0 : Zr.rawNodes) ? ar : null;
      Sr("    makeSpaceForEdgeLabels", (() => function(rr) {
        let Sr = rr.graph();
        Sr.ranksep /= 2, rr.edges().forEach((Qr => {
          var Zr;
          let Wr = rr.edge(Qr);
          Wr.minlen *= 2, "c" !== (null != (Zr = Wr.labelpos) ? Zr : "r").toLowerCase() && ("TB" === Sr.rankdir || "BT" === Sr.rankdir ? Wr.width += Wr.labeloffset : Wr.height += Wr.labeloffset)
        }))
      }(rr))), Sr("    removeSelfEdges", (() => function(rr) {
        rr.edges().forEach((Sr => {
          if (Sr.v === Sr.w) {
            let Qr = rr.node(Sr.v);
            Qr.selfEdges || (Qr.selfEdges = []), Qr.selfEdges.push({
              e: Sr,
              label: rr.edge(Sr)
            }), rr.removeEdge(Sr)
          }
        }))
      }(rr))), Sr("    acyclic", (() => NS(rr, Ir))), Sr("    nestingGraph.run", (() => GS(rr))), Sr("    rank", (() => RS(ir(rr)))), Sr("    injectEdgeLabelProxies", (() => function(rr) {
        rr.edges().forEach((Sr => {
          let Qr = rr.edge(Sr);
          if (Qr.width && Qr.height) {
            let Qr = rr.node(Sr.v),
              Zr = {
                rank: (rr.node(Sr.w).rank - Qr.rank) / 2 + Qr.rank,
                e: Sr
              };
            Vr(rr, "edge-proxy", Zr, "_ep")
          }
        }))
      }(rr))), Sr("    removeEmptyRanks", (() => function(rr) {
        let Sr = rr.nodes().map((Sr => rr.node(Sr).rank)).filter((rr => void 0 !== rr)),
          Qr = br(Math.min, Sr),
          Zr = [];
        rr.nodes().forEach((Sr => {
          let Wr = rr.node(Sr).rank - Qr;
          Zr[Wr] || (Zr[Wr] = []), Zr[Wr].push(Sr)
        }));
        let Wr = 0,
          ar = rr.graph().nodeRankFactor;
        Array.from(Zr).forEach(((Sr, Qr) => {
          void 0 === Sr && Qr % ar !== 0 ? --Wr : void 0 !== Sr && Wr && Sr.forEach((Sr => rr.node(Sr).rank += Wr))
        }))
      }(rr))), Sr("    nestingGraph.cleanup", (() => function(rr) {
        let Sr = rr.graph();
        rr.removeNode(Sr.nestingRoot), delete Sr.nestingRoot, rr.edges().forEach((Sr => {
          rr.edge(Sr).nestingEdge && rr.removeEdge(Sr)
        }))
      }(rr))), Sr("    normalizeRanks", (() => function(rr) {
        let Sr = rr.nodes().map((Sr => {
            let Qr = rr.node(Sr).rank;
            return void 0 === Qr ? Number.MAX_VALUE : Qr
          })),
          Qr = br(Math.min, Sr);
        rr.nodes().forEach((Sr => {
          let Zr = rr.node(Sr);
          Object.hasOwn(Zr, "rank") && (Zr.rank -= Qr)
        }))
      }(rr))), Sr("    assignRankMinMax", (() => function(rr) {
        let Sr = 0;
        rr.nodes().forEach((Qr => {
          let Zr = rr.node(Qr);
          Zr.borderTop && (Zr.minRank = rr.node(Zr.borderTop).rank, Zr.maxRank = rr.node(Zr.borderBottom).rank, Sr = Math.max(Sr, Zr.maxRank))
        })), rr.graph().maxRank = Sr
      }(rr))), Sr("    removeEdgeLabelProxies", (() => function(rr) {
        rr.nodes().forEach((Sr => {
          let Qr = rr.node(Sr);
          if ("edge-proxy" === Qr.dummy) {
            let Zr = Qr;
            rr.edge(Zr.e).labelRank = Qr.rank, rr.removeNode(Sr)
          }
        }))
      }(rr))), Sr("    normalize.run", (() => US(rr))), Sr("    parentDummyChains", (() => MS(rr))), Sr("    addBorderSegments", (() => AS(rr))), Sr("    order", (() => QQ(rr, Qr, fr))), Sr("    insertSelfEdges", (() => function(rr) {
        cr(rr).forEach((Sr => {
          let Qr = 0;
          Sr.forEach(((Sr, Zr) => {
            let Wr = rr.node(Sr);
            "number" != typeof Wr.rank && (Wr.rank = 0), Wr.order = Zr + Qr, (Wr.selfEdges || []).forEach((Sr => {
              Vr(rr, "selfedge", {
                width: Sr.label.width,
                height: Sr.label.height,
                rank: Wr.rank,
                order: Zr + ++Qr,
                e: Sr.e,
                edgeLabel: Sr.label
              }, "_se"), (!Array.isArray(Sr.label.points) || 7 !== Sr.label.points.length) && (Sr.label.points = [{
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
            })), delete Wr.selfEdges
          }))
        }))
      }(rr))), Sr("    adjustCoordinateSystem", (() => function(rr) {
        var Sr;
        let Qr = null == (Sr = rr.graph().rankdir) ? void 0 : Sr.toLowerCase();
        ("lr" === Qr || "rl" === Qr) && wS(rr)
      }(rr))), Sr("    position", (() => xQ(rr, Qr.corePath))), Sr("    positionSelfEdges", (() => function(rr) {
        rr.nodes().forEach((Sr => {
          let Qr = rr.node(Sr),
            Zr = rr => "number" == typeof rr && isFinite(rr);
          if ("selfedge" === Qr.dummy) {
            let Wr = Qr,
              ar = rr.node(Wr.e.v),
              jr = Zr(null == ar ? void 0 : ar.x) ? ar.x : 0,
              Ir = Zr(null == ar ? void 0 : ar.y) ? ar.y : 0,
              fr = Zr(null == ar ? void 0 : ar.width) ? ar.width : 0,
              Er = Zr(null == ar ? void 0 : ar.height) ? ar.height : 0,
              pr = Zr(Qr.x) ? Qr.x : jr,
              xr = Zr(Qr.y) ? Qr.y : Ir,
              mr = fr / 2,
              Nr = Er / 2;
            Wr.edgeLabel.points = [{
              x: pr + mr,
              y: xr - Nr
            }, {
              x: pr + mr,
              y: xr - Nr
            }, {
              x: pr,
              y: xr
            }, {
              x: pr - mr,
              y: xr + Nr
            }, {
              x: pr - mr,
              y: xr + Nr
            }, {
              x: pr,
              y: xr
            }, {
              x: pr,
              y: xr
            }], Wr.edgeLabel.x = pr, Wr.edgeLabel.y = xr, rr.setEdge(Wr.e, Wr.edgeLabel), rr.removeNode(Sr)
          } else Qr && Array.isArray(Qr.selfEdges) && Qr.selfEdges.forEach((rr => {
            if (!Array.isArray(rr.label.points) || 7 !== rr.label.points.length) {
              let Sr = Zr(Qr.x) ? Qr.x : 0,
                Wr = Zr(Qr.y) ? Qr.y : 0,
                ar = (Zr(Qr.width) ? Qr.width : 0) / 2,
                jr = (Zr(Qr.height) ? Qr.height : 0) / 2;
              rr.label.points = [{
                x: Sr + ar,
                y: Wr - jr
              }, {
                x: Sr + ar,
                y: Wr - jr
              }, {
                x: Sr,
                y: Wr
              }, {
                x: Sr - ar,
                y: Wr + jr
              }, {
                x: Sr - ar,
                y: Wr + jr
              }, {
                x: Sr,
                y: Wr
              }, {
                x: Sr,
                y: Wr
              }]
            }
          }))
        }))
      }(rr)));
      let Er = JSON.parse(JSON.stringify(rr._nodes));
      return Sr("    removeBorderNodes", (() => function(rr) {
        rr.nodes().forEach((Sr => {
          if (rr.children(Sr).length) {
            let Qr = rr.node(Sr),
              Zr = rr.node(Qr.borderTop),
              Wr = rr.node(Qr.borderBottom),
              ar = rr.node(Qr.borderLeft[Qr.borderLeft.length - 1]),
              jr = rr.node(Qr.borderRight[Qr.borderRight.length - 1]);
            Qr.width = Math.abs(jr.x - ar.x), Qr.height = Math.abs(Wr.y - Zr.y), Qr.x = ar.x + Qr.width / 2, Qr.y = Zr.y + Qr.height / 2
          }
        })), rr.nodes().forEach((Sr => {
          "border" === rr.node(Sr).dummy && rr.removeNode(Sr)
        }))
      }(rr))), Sr("    normalize.undo", (() => function(rr) {
        rr.graph().dummyChains.forEach((Sr => {
          let Qr, Zr = rr.node(Sr),
            Wr = Zr.edgeLabel;
          for (rr.setEdge(Zr.edgeObj, Wr); Zr.dummy;) Qr = rr.successors(Sr)[0], rr.removeNode(Sr), Wr.points.push({
            x: Zr.x,
            y: Zr.y
          }), "edge-label" === Zr.dummy && (Wr.x = Zr.x, Wr.y = Zr.y, Wr.width = Zr.width, Wr.height = Zr.height), Sr = Qr, Zr = rr.node(Sr)
        }))
      }(rr))), Sr("    fixupEdgeLabelCoords", (() => function(rr) {
        rr.edges().forEach((Sr => {
          let Qr = rr.edge(Sr);
          if (Object.hasOwn(Qr, "x")) switch (("l" === Qr.labelpos || "r" === Qr.labelpos) && (Qr.width -= Qr.labeloffset), Qr.labelpos) {
            case "l":
              Qr.x -= Qr.width / 2 + Qr.labeloffset;
              break;
            case "r":
              Qr.x += Qr.width / 2 + Qr.labeloffset
          }
        }))
      }(rr))), Sr("    undoCoordinateSystem", (() => iS(rr))), Sr("    translateGraph", (() => function(rr) {
        let Sr = Number.POSITIVE_INFINITY,
          Qr = 0,
          Zr = Number.POSITIVE_INFINITY,
          Wr = 0,
          ar = rr.graph(),
          jr = ar.marginx || 0,
          Ir = ar.marginy || 0;

        function fr(rr) {
          let ar = rr.x,
            jr = rr.y,
            Ir = rr.width,
            fr = rr.height;
          Sr = Math.min(Sr, ar - Ir / 2), Qr = Math.max(Qr, ar + Ir / 2), Zr = Math.min(Zr, jr - fr / 2), Wr = Math.max(Wr, jr + fr / 2)
        }
        rr.nodes().forEach((Sr => fr(rr.node(Sr)))), rr.edges().forEach((Sr => {
          let Qr = rr.edge(Sr);
          Object.hasOwn(Qr, "x") && fr(Qr)
        })), Sr -= jr, Zr -= Ir, rr.nodes().forEach((Qr => {
          let Wr = rr.node(Qr);
          Wr.x -= Sr, Wr.y -= Zr
        })), rr.edges().forEach((Qr => {
          let Wr = rr.edge(Qr);
          Wr.points.forEach((rr => {
            rr.x -= Sr, rr.y -= Zr
          })), Object.hasOwn(Wr, "x") && (Wr.x -= Sr), Object.hasOwn(Wr, "y") && (Wr.y -= Zr)
        })), ar.width = Qr - Sr + jr, ar.height = Wr - Zr + Ir
      }(rr))), Sr("    assignNodeIntersects", (() => function(rr) {
        rr.edges().forEach((Sr => {
          if (Sr.v === Sr.w) return;
          let Qr, Zr, Wr = rr.edge(Sr),
            ar = rr.node(Sr.v),
            jr = rr.node(Sr.w);
          Wr.points ? (Qr = Wr.points[0], Zr = Wr.points[Wr.points.length - 1]) : (Wr.points = [], Qr = jr, Zr = ar), Wr.points.unshift(wr(ar, Qr)), Wr.points.push(wr(jr, Zr))
        }))
      }(rr))), Sr("    reversePoints", (() => function(rr) {
        rr.edges().forEach((Sr => {
          let Qr = rr.edge(Sr);
          Qr.reversed && Qr.points.reverse()
        }))
      }(rr))), Sr("    acyclic.undo", (() => function(rr) {
        rr.edges().forEach((Sr => {
          let Qr = rr.edge(Sr);
          if (Qr.reversed) {
            rr.removeEdge(Sr);
            let Zr = Qr.forwardName;
            delete Qr.reversed, delete Qr.forwardName, rr.setEdge(Sr.w, Sr.v, Qr, Zr)
          }
        }))
      }(rr))), {
        graph: rr,
        rawNodes: Er
      }
    }

    function zQ(rr, Sr) {
      rr.nodes().forEach((Qr => {
        let Zr = rr.node(Qr),
          Wr = Sr.node(Qr);
        Zr && (Zr.x = Wr.x, Zr.y = Wr.y, Zr.order = Wr.order, Zr.rank = Wr.rank, Sr.children(Qr).length && (Zr.width = Wr.width, Zr.height = Wr.height))
      })), rr.edges().forEach((Qr => {
        let Zr = rr.edge(Qr),
          Wr = Sr.edge(Qr);
        Zr.points = Wr.points, Object.hasOwn(Wr, "x") && (Zr.x = Wr.x, Zr.y = Wr.y)
      })), rr.graph().width = Sr.graph().width, rr.graph().height = Sr.graph().height
    }
    var YQ = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      nQ = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      eQ = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      KQ = ["width", "height", "rank"],
      yQ = {
        width: 0,
        height: 0
      },
      BQ = ["minlen", "weight", "width", "height", "labeloffset"],
      TQ = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      vQ = ["labelpos"];

    function OQ(rr) {
      let Sr = new Ar({
          multigraph: !0,
          compound: !0
        }),
        Qr = lQ(rr.graph());
      return Sr.setGraph(Object.assign({}, nQ, LQ(Qr, YQ), SS(Qr, eQ))), rr.nodes().forEach((Qr => {
        let Zr = LQ(lQ(rr.node(Qr)), KQ);
        Object.keys(yQ).forEach((rr => {
          void 0 === Zr[rr] && (Zr[rr] = yQ[rr])
        })), Sr.setNode(Qr, Zr);
        let Wr = rr.parent(Qr);
        void 0 !== Wr && Sr.setParent(Qr, Wr)
      })), rr.edges().forEach((Qr => {
        let Zr = lQ(rr.edge(Qr));
        Sr.setEdge(Qr, Object.assign({}, TQ, LQ(Zr, BQ), SS(Zr, vQ)))
      })), Sr
    }

    function LQ(rr, Sr) {
      return QS(SS(rr, Sr), Number)
    }

    function lQ(rr) {
      let Sr = {};
      return rr && Object.entries(rr).forEach((rr => {
        let [Qr, Zr] = rr;
        "string" == typeof Qr && (Qr = Qr.toLowerCase()), Sr[Qr] = Zr
      })), Sr
    }

    function XQ(rr) {
      let Sr = cr(rr),
        Qr = new Ar({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return rr.nodes().forEach((Sr => {
        Qr.setNode(Sr, {
          label: Sr
        }), Qr.setParent(Sr, "layer" + rr.node(Sr).rank)
      })), rr.edges().forEach((rr => Qr.setEdge(rr.v, rr.w, {}, rr.name))), Sr.forEach(((rr, Sr) => {
        let Zr = "layer" + Sr;
        Qr.setNode(Zr, {
          rank: "same"
        }), rr.reduce(((rr, Sr) => (Qr.setEdge(rr, Sr, {
          style: "invis"
        }), Sr)))
      })), Qr
    }
    var PQ = {
        time: Dr,
        notime: dr
      },
      HQ = {
        graphlib: ar,
        version: aS,
        layout: NQ,
        debug: XQ,
        util: {
          time: Dr,
          notime: dr
        }
      }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);