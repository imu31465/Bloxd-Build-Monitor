/*! For license information please see qepqb8.112.cec3caae.chunk.js.LICENSE.txt */
export const id = 112;
export const ids = [112];
export const modules = {
  6161: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      Graph: () => Lv,
      debug: () => VP,
      default: () => RP,
      graphlib: () => ev,
      layout: () => wP,
      util: () => UP,
      version: () => ez
    });
    var hv = Object.defineProperty,
      Sv = (vv, zv, Pv) => ((vv, zv, Pv) => zv in vv ? hv(vv, zv, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Pv
      }) : vv[zv] = Pv)(vv, "symbol" != typeof zv ? zv + "" : zv, Pv),
      ev = {};
    ((vv, zv) => {
      for (var Pv in zv) hv(vv, Pv, {
        get: zv[Pv],
        enumerable: !0
      })
    })(ev, {
      Graph: () => Lv,
      alg: () => iv
    });
    var gv = Object.defineProperty,
      pv = (vv, zv) => {
        for (var Pv in zv) gv(vv, Pv, {
          get: zv[Pv],
          enumerable: !0
        })
      },
      dv = class {
        constructor(vv) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, vv && (this._isDirected = !("directed" in vv) || vv.directed, this._isMultigraph = "multigraph" in vv && vv.multigraph, this._isCompound = "compound" in vv && vv.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(vv) {
          return this._label = vv, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(vv) {
          return this._defaultNodeLabelFn = "function" != typeof vv ? () => vv : vv, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((vv => 0 === Object.keys(this._in[vv]).length))
        }
        sinks() {
          return this.nodes().filter((vv => 0 === Object.keys(this._out[vv]).length))
        }
        setNodes(vv, zv) {
          return vv.forEach((vv => {
            void 0 !== zv ? this.setNode(vv, zv) : this.setNode(vv)
          })), this
        }
        setNode(vv, zv) {
          return vv in this._nodes ? (arguments.length > 1 && (this._nodes[vv] = zv), this) : (this._nodes[vv] = arguments.length > 1 ? zv : this._defaultNodeLabelFn(vv), this._isCompound && (this._parent[vv] = "\0", this._children[vv] = {}, this._children["\0"][vv] = !0), this._in[vv] = {}, this._preds[vv] = {}, this._out[vv] = {}, this._sucs[vv] = {}, ++this._nodeCount, this)
        }
        node(vv) {
          return this._nodes[vv]
        }
        hasNode(vv) {
          return vv in this._nodes
        }
        removeNode(vv) {
          if (vv in this._nodes) {
            let zv = vv => this.removeEdge(this._edgeObjs[vv]);
            delete this._nodes[vv], this._isCompound && (this._removeFromParentsChildList(vv), delete this._parent[vv], this.children(vv).forEach((vv => {
              this.setParent(vv)
            })), delete this._children[vv]), Object.keys(this._in[vv]).forEach(zv), delete this._in[vv], delete this._preds[vv], Object.keys(this._out[vv]).forEach(zv), delete this._out[vv], delete this._sucs[vv], --this._nodeCount
          }
          return this
        }
        setParent(vv, zv) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === zv) zv = "\0";
          else {
            for (let Pv = zv += ""; void 0 !== Pv; Pv = this.parent(Pv))
              if (Pv === vv) throw new Error("Setting " + zv + " as parent of " + vv + " would create a cycle");
            this.setNode(zv)
          }
          return this.setNode(vv), this._removeFromParentsChildList(vv), this._parent[vv] = zv, this._children[zv][vv] = !0, this
        }
        parent(vv) {
          if (this._isCompound) {
            let zv = this._parent[vv];
            if ("\0" !== zv) return zv
          }
        }
        children() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let zv = this._children[vv];
            if (zv) return Object.keys(zv)
          } else {
            if ("\0" === vv) return this.nodes();
            if (this.hasNode(vv)) return []
          }
          return []
        }
        predecessors(vv) {
          let zv = this._preds[vv];
          if (zv) return Object.keys(zv)
        }
        successors(vv) {
          let zv = this._sucs[vv];
          if (zv) return Object.keys(zv)
        }
        neighbors(vv) {
          let zv = this.predecessors(vv);
          if (zv) {
            let Pv = new Set(zv),
              hv = this.successors(vv);
            if (hv)
              for (let vv of hv) Pv.add(vv);
            return Array.from(Pv.values())
          }
        }
        isLeaf(vv) {
          var zv;
          let Pv;
          return Pv = this.isDirected() ? this.successors(vv) : this.neighbors(vv), 0 === (null != (zv = null == Pv ? void 0 : Pv.length) ? zv : 0)
        }
        filterNodes(vv) {
          let zv = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          zv.setGraph(this.graph()), Object.entries(this._nodes).forEach((Pv => {
            let [hv, Sv] = Pv;
            vv(hv) && zv.setNode(hv, Sv)
          })), Object.values(this._edgeObjs).forEach((vv => {
            zv.hasNode(vv.v) && zv.hasNode(vv.w) && zv.setEdge(vv, this.edge(vv))
          }));
          let Pv = {},
            hv = vv => {
              let Sv = this.parent(vv);
              return !Sv || zv.hasNode(Sv) ? (Pv[vv] = Sv, Sv) : Sv in Pv ? Pv[Sv] : hv(Sv)
            };
          return this._isCompound && zv.nodes().forEach((vv => zv.setParent(vv, hv(vv)))), zv
        }
        setDefaultEdgeLabel(vv) {
          return this._defaultEdgeLabelFn = "function" != typeof vv ? () => vv : vv, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(vv, zv) {
          return vv.reduce(((vv, Pv) => (void 0 !== zv ? this.setEdge(vv, Pv, zv) : this.setEdge(vv, Pv), Pv))), this
        }
        setEdge(vv, zv, Pv, hv) {
          let Sv, ev, gv, pv, dv = !1;
          "object" == typeof vv && null !== vv && "v" in vv ? (Sv = vv.v, ev = vv.w, gv = vv.name, 2 === arguments.length && (pv = zv, dv = !0)) : (Sv = vv, ev = zv, gv = hv, arguments.length > 2 && (pv = Pv, dv = !0)), Sv = "" + Sv, ev = "" + ev, void 0 !== gv && (gv = "" + gv);
          let lv = Tv(this._isDirected, Sv, ev, gv);
          if (lv in this._edgeLabels) return dv && (this._edgeLabels[lv] = pv), this;
          if (void 0 !== gv && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Sv), this.setNode(ev), this._edgeLabels[lv] = dv ? pv : this._defaultEdgeLabelFn(Sv, ev, gv);
          let Wv = function(vv, zv, Pv, hv) {
            let Sv = "" + zv,
              ev = "" + Pv;
            if (!vv && Sv > ev) {
              let vv = Sv;
              Sv = ev, ev = vv
            }
            let gv = {
              v: Sv,
              w: ev
            };
            return hv && (gv.name = hv), gv
          }(this._isDirected, Sv, ev, gv);
          return Sv = Wv.v, ev = Wv.w, Object.freeze(Wv), this._edgeObjs[lv] = Wv, Nv(this._preds[ev], Sv), Nv(this._sucs[Sv], ev), this._in[ev][lv] = Wv, this._out[Sv][lv] = Wv, this._edgeCount++, this
        }
        edge(vv, zv, Pv) {
          let hv = 1 === arguments.length ? Wv(this._isDirected, vv) : Tv(this._isDirected, vv, zv, Pv);
          return this._edgeLabels[hv]
        }
        edgeAsObj(vv, zv, Pv) {
          let hv = 1 === arguments.length ? this.edge(vv) : this.edge(vv, zv, Pv);
          return "object" != typeof hv || null === hv ? {
            label: hv
          } : hv
        }
        hasEdge(vv, zv, Pv) {
          return (1 === arguments.length ? Wv(this._isDirected, vv) : Tv(this._isDirected, vv, zv, Pv)) in this._edgeLabels
        }
        removeEdge(vv, zv, Pv) {
          let hv = 1 === arguments.length ? Wv(this._isDirected, vv) : Tv(this._isDirected, vv, zv, Pv),
            Sv = this._edgeObjs[hv];
          if (Sv) {
            let vv = Sv.v,
              zv = Sv.w;
            delete this._edgeLabels[hv], delete this._edgeObjs[hv], lv(this._preds[zv], vv), lv(this._sucs[vv], zv), delete this._in[zv][hv], delete this._out[vv][hv], this._edgeCount--
          }
          return this
        }
        inEdges(vv, zv) {
          return this.isDirected() ? this.filterEdges(this._in[vv], vv, zv) : this.nodeEdges(vv, zv)
        }
        outEdges(vv, zv) {
          return this.isDirected() ? this.filterEdges(this._out[vv], vv, zv) : this.nodeEdges(vv, zv)
        }
        nodeEdges(vv, zv) {
          if (vv in this._nodes) return this.filterEdges({
            ...this._in[vv],
            ...this._out[vv]
          }, vv, zv)
        }
        _removeFromParentsChildList(vv) {
          delete this._children[this._parent[vv]][vv]
        }
        filterEdges(vv, zv, Pv) {
          if (!vv) return;
          let hv = Object.values(vv);
          return Pv ? hv.filter((vv => vv.v === zv && vv.w === Pv || vv.v === Pv && vv.w === zv)) : hv
        }
      };

    function Nv(vv, zv) {
      vv[zv] ? vv[zv]++ : vv[zv] = 1
    }

    function lv(vv, zv) {
      void 0 !== vv[zv] && !--vv[zv] && delete vv[zv]
    }

    function Tv(vv, zv, Pv, hv) {
      let Sv = "" + zv,
        ev = "" + Pv;
      if (!vv && Sv > ev) {
        let vv = Sv;
        Sv = ev, ev = vv
      }
      return Sv + "\x01" + ev + "\x01" + (void 0 === hv ? "\0" : hv)
    }

    function Wv(vv, zv) {
      return Tv(vv, zv.v, zv.w, zv.name)
    }

    function wv(vv) {
      let zv = {
          options: {
            directed: vv.isDirected(),
            multigraph: vv.isMultigraph(),
            compound: vv.isCompound()
          },
          nodes: av(vv),
          edges: sv(vv)
        },
        Pv = vv.graph();
      return void 0 !== Pv && (zv.value = structuredClone(Pv)), zv
    }

    function av(vv) {
      return vv.nodes().map((zv => {
        let Pv = vv.node(zv),
          hv = vv.parent(zv),
          Sv = {
            v: zv
          };
        return void 0 !== Pv && (Sv.value = Pv), void 0 !== hv && (Sv.parent = hv), Sv
      }))
    }

    function sv(vv) {
      return vv.edges().map((zv => {
        let Pv = vv.edge(zv),
          hv = {
            v: zv.v,
            w: zv.w
          };
        return void 0 !== zv.name && (hv.name = zv.name), void 0 !== Pv && (hv.value = Pv), hv
      }))
    }

    function Cv(vv) {
      let zv = new dv(vv.options);
      return void 0 !== vv.value && zv.setGraph(vv.value), vv.nodes.forEach((vv => {
        zv.setNode(vv.v, vv.value), vv.parent && zv.setParent(vv.v, vv.parent)
      })), vv.edges.forEach((vv => {
        zv.setEdge({
          v: vv.v,
          w: vv.w,
          name: vv.name
        }, vv.value)
      })), zv
    }
    pv({}, {
      read: () => Cv,
      write: () => wv
    });
    var iv = {};
    pv(iv, {
      CycleException: () => Vv,
      bellmanFord: () => Gv,
      components: () => mv,
      dijkstra: () => Fv,
      dijkstraAll: () => Yv,
      findCycles: () => Ov,
      floydWarshall: () => Kv,
      isAcyclic: () => Rv,
      postorder: () => Iv,
      preorder: () => Qv,
      prim: () => Zv,
      shortestPaths: () => Av,
      tarjan: () => nv,
      topsort: () => Uv
    });
    var cv = () => 1;

    function Gv(vv, zv, Pv, hv) {
      return function(vv, zv, Pv, hv) {
        let Sv, ev = {},
          gv = 0,
          pv = vv.nodes(),
          dv = function(vv) {
            let zv = ev[vv.v],
              hv = ev[vv.w];
            if (!zv || !hv) return;
            let gv = Pv(vv);
            zv.distance + gv < hv.distance && (ev[vv.w] = {
              distance: zv.distance + gv,
              predecessor: vv.v
            }, Sv = !0)
          },
          Nv = function() {
            pv.forEach((function(vv) {
              hv(vv).forEach((function(zv) {
                let Pv = zv.v === vv ? zv.v : zv.w,
                  hv = Pv === zv.v ? zv.w : zv.v;
                dv({
                  v: Pv,
                  w: hv
                })
              }))
            }))
          };
        pv.forEach((function(vv) {
          let Pv = vv === zv ? 0 : Number.POSITIVE_INFINITY;
          ev[vv] = {
            distance: Pv,
            predecessor: ""
          }
        }));
        let lv = pv.length;
        for (let Tv = 1; Tv < lv && (Sv = !1, gv++, Nv(), Sv); Tv++);
        if (gv === lv - 1 && (Sv = !1, Nv(), Sv)) throw new Error("The graph contains a negative weight cycle");
        return ev
      }(vv, String(zv), Pv || cv, hv || function(zv) {
        var Pv;
        return null != (Pv = vv.outEdges(zv)) ? Pv : []
      })
    }

    function mv(vv) {
      let zv, Pv = {},
        hv = [];

      function Sv(hv) {
        var ev, gv;
        hv in Pv || (Pv[hv] = !0, zv.push(hv), null == (ev = vv.successors(hv)) || ev.forEach(Sv), null == (gv = vv.predecessors(hv)) || gv.forEach(Sv))
      }
      return vv.nodes().forEach((function(vv) {
        zv = [], Sv(vv), zv.length && hv.push(zv)
      })), hv
    }
    var jv = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((vv => vv.key))
        }
        has(vv) {
          return vv in this._keyIndices
        }
        priority(vv) {
          let zv = this._keyIndices[vv];
          if (void 0 !== zv) return this._arr[zv].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(vv, zv) {
          let Pv = this._keyIndices,
            hv = String(vv);
          if (!(hv in Pv)) {
            let vv = this._arr,
              Sv = vv.length;
            return Pv[hv] = Sv, vv.push({
              key: hv,
              priority: zv
            }), this._decrease(Sv), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let vv = this._arr.pop();
          return delete this._keyIndices[vv.key], this._heapify(0), vv.key
        }
        decrease(vv, zv) {
          let Pv = this._keyIndices[vv];
          if (void 0 === Pv) throw new Error(`Key not found: ${vv}`);
          let hv = this._arr[Pv].priority;
          if (zv > hv) throw new Error(`New priority is greater than current priority. Key: ${vv} Old: ${hv} New: ${zv}`);
          this._arr[Pv].priority = zv, this._decrease(Pv)
        }
        _heapify(vv) {
          let zv = this._arr,
            Pv = 2 * vv,
            hv = Pv + 1,
            Sv = vv;
          Pv < zv.length && (Sv = zv[Pv].priority < zv[Sv].priority ? Pv : Sv, hv < zv.length && (Sv = zv[hv].priority < zv[Sv].priority ? hv : Sv), Sv !== vv && (this._swap(vv, Sv), this._heapify(Sv)))
        }
        _decrease(vv) {
          let zv, Pv = this._arr,
            hv = Pv[vv].priority;
          for (; 0 !== vv && (zv = vv >> 1, !(Pv[zv].priority < hv));) this._swap(vv, zv), vv = zv
        }
        _swap(vv, zv) {
          let Pv = this._arr,
            hv = this._keyIndices,
            Sv = Pv[vv],
            ev = Pv[zv];
          Pv[vv] = ev, Pv[zv] = Sv, hv[ev.key] = vv, hv[Sv.key] = zv
        }
      },
      fv = () => 1;

    function Fv(vv, zv, Pv, hv) {
      return function(vv, zv, Pv, hv) {
        let Sv, ev, gv = {},
          pv = new jv,
          dv = function(vv) {
            let zv = vv.v !== Sv ? vv.v : vv.w,
              hv = gv[zv];
            if (!hv) return;
            let dv = Pv(vv),
              Nv = ev.distance + dv;
            if (dv < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + vv + " Weight: " + dv);
            Nv < hv.distance && (hv.distance = Nv, hv.predecessor = Sv, pv.decrease(zv, Nv))
          };
        for (vv.nodes().forEach((function(vv) {
            let Pv = vv === zv ? 0 : Number.POSITIVE_INFINITY;
            gv[vv] = {
              distance: Pv,
              predecessor: ""
            }, pv.add(vv, Pv)
          })); pv.size() > 0;) {
          Sv = pv.removeMin();
          let vv = gv[Sv];
          if (!vv || vv.distance === Number.POSITIVE_INFINITY) break;
          ev = vv, hv(Sv).forEach(dv)
        }
        return gv
      }(vv, String(zv), Pv || fv, hv || function(zv) {
        var Pv;
        return null != (Pv = vv.outEdges(zv)) ? Pv : []
      })
    }

    function Yv(vv, zv, Pv) {
      return vv.nodes().reduce((function(hv, Sv) {
        return hv[Sv] = Fv(vv, Sv, zv, Pv), hv
      }), {})
    }

    function nv(vv) {
      let zv = 0,
        Pv = [],
        hv = {},
        Sv = [];

      function ev(gv) {
        var pv;
        let dv = hv[gv] = {
          onStack: !0,
          lowlink: zv,
          index: zv++
        };
        if (Pv.push(gv), null == (pv = vv.successors(gv)) || pv.forEach((function(vv) {
            if (vv in hv) {
              let zv = hv[vv];
              null != zv && zv.onStack && (dv.lowlink = Math.min(dv.lowlink, zv.index))
            } else {
              ev(vv);
              let zv = hv[vv];
              zv && (dv.lowlink = Math.min(dv.lowlink, zv.lowlink))
            }
          })), dv.lowlink === dv.index) {
          let vv, zv = [];
          do {
            vv = Pv.pop();
            let Sv = hv[vv];
            Sv && (Sv.onStack = !1), zv.push(vv)
          } while (gv !== vv);
          Sv.push(zv)
        }
      }
      return vv.nodes().forEach((function(vv) {
        vv in hv || ev(vv)
      })), Sv
    }

    function Ov(vv) {
      return nv(vv).filter((function(zv) {
        var Pv;
        let hv = zv[0];
        return !!hv && (zv.length > 1 || 1 === zv.length && (null != (Pv = vv.outEdges(hv, hv)) ? Pv : []).length > 0)
      }))
    }
    var Dv = () => 1;

    function Kv(vv, zv, Pv) {
      return function(vv, zv, Pv) {
        let hv = {},
          Sv = vv.nodes();
        return Sv.forEach((function(vv) {
          let ev = {};
          hv[vv] = ev, ev[vv] = {
            distance: 0,
            predecessor: ""
          }, Sv.forEach((function(zv) {
            vv !== zv && (ev[zv] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), Pv(vv).forEach((function(Pv) {
            let hv = Pv.v === vv ? Pv.w : Pv.v,
              Sv = zv(Pv);
            ev[hv] = {
              distance: Sv,
              predecessor: vv
            }
          }))
        })), Sv.forEach((function(vv) {
          let zv = hv[vv];
          zv && Sv.forEach((function(Pv) {
            let ev = hv[Pv];
            ev && Sv.forEach((function(Pv) {
              let hv = ev[vv],
                Sv = zv[Pv],
                gv = ev[Pv];
              if (hv && Sv && gv) {
                let vv = hv.distance + Sv.distance;
                vv < gv.distance && (gv.distance = vv, gv.predecessor = Sv.predecessor)
              }
            }))
          }))
        })), hv
      }(vv, zv || Dv, Pv || function(zv) {
        var Pv;
        return null != (Pv = vv.outEdges(zv)) ? Pv : []
      })
    }
    var Vv = class extends Error {
      constructor(vv) {
        super(vv), this.name = "CycleException"
      }
    };

    function Uv(vv) {
      let zv = {},
        Pv = {},
        hv = [];
      if (vv.sinks().forEach((function Sv(ev) {
          var gv;
          if (ev in Pv) throw new Vv;
          ev in zv || (Pv[ev] = !0, zv[ev] = !0, null == (gv = vv.predecessors(ev)) || gv.forEach(Sv), delete Pv[ev], hv.push(ev))
        })), Object.keys(zv).length !== vv.nodeCount()) throw new Vv;
      return hv
    }

    function Rv(vv) {
      try {
        Uv(vv)
      } catch (zv) {
        if (zv instanceof Vv) return !1;
        throw zv
      }
      return !0
    }

    function xv(vv, zv, Pv, hv, Sv) {
      Array.isArray(zv) || (zv = [zv]);
      let ev = zv => {
          var Pv;
          return null != (Pv = vv.isDirected() ? vv.successors(zv) : vv.neighbors(zv)) ? Pv : []
        },
        gv = {};
      return zv.forEach((function(zv) {
        if (!vv.hasNode(zv)) throw new Error("Graph does not have node: " + zv);
        Sv = tv(vv, zv, "post" === Pv, gv, ev, hv, Sv)
      })), Sv
    }

    function tv(vv, zv, Pv, hv, Sv, ev, gv) {
      return zv in hv || (hv[zv] = !0, Pv || (gv = ev(gv, zv)), Sv(zv).forEach((function(zv) {
        gv = tv(vv, zv, Pv, hv, Sv, ev, gv)
      })), Pv && (gv = ev(gv, zv))), gv
    }

    function qv(vv, zv, Pv) {
      return xv(vv, zv, Pv, (function(vv, zv) {
        return vv.push(zv), vv
      }), [])
    }

    function Iv(vv, zv) {
      return qv(vv, zv, "post")
    }

    function Qv(vv, zv) {
      return qv(vv, zv, "pre")
    }

    function Zv(vv, zv) {
      var Pv;
      let hv, Sv = new dv,
        ev = {},
        gv = new jv;

      function pv(vv) {
        let Pv = vv.v === hv ? vv.w : vv.v,
          Sv = gv.priority(Pv);
        if (void 0 !== Sv) {
          let pv = zv(vv);
          pv < Sv && (ev[Pv] = hv, gv.decrease(Pv, pv))
        }
      }
      if (0 === vv.nodeCount()) return Sv;
      vv.nodes().forEach((function(vv) {
        gv.add(vv, Number.POSITIVE_INFINITY), Sv.setNode(vv)
      }));
      let Nv = vv.nodes()[0];
      void 0 !== Nv && gv.decrease(Nv, 0);
      let lv = !1;
      for (; gv.size() > 0;) {
        if (hv = gv.removeMin(), hv in ev) Sv.setEdge(hv, ev[hv]);
        else {
          if (lv) throw new Error("Input graph is not connected: " + vv);
          lv = !0
        }
        null == (Pv = vv.nodeEdges(hv)) || Pv.forEach(pv)
      }
      return Sv
    }

    function Av(vv, zv, Pv, hv) {
      return function(vv, zv, Pv, hv) {
        if (void 0 === Pv) return Fv(vv, zv, Pv, hv);
        let Sv = !1,
          ev = vv.nodes();
        for (let gv = 0; gv < ev.length; gv++) {
          let pv = ev[gv];
          if (void 0 === pv) continue;
          let dv = hv(pv);
          for (let vv = 0; vv < dv.length; vv++) {
            let zv = dv[vv];
            if (!zv) continue;
            let hv = zv.v === pv ? zv.v : zv.w;
            Pv({
              v: hv,
              w: hv === zv.v ? zv.w : zv.v
            }) < 0 && (Sv = !0)
          }
          if (Sv) return Gv(vv, zv, Pv, hv)
        }
        return Fv(vv, zv, Pv, hv)
      }(vv, zv, Pv, null != hv ? hv : zv => {
        var Pv;
        return null != (Pv = vv.outEdges(zv)) ? Pv : []
      })
    }
    var Lv = dv;

    function Hv(vv, zv, Pv, hv) {
      let Sv = hv;
      for (; vv.hasNode(Sv);) Sv = uv(hv);
      return Pv.dummy = zv, vv.setNode(Sv, Pv), Sv
    }

    function Mv(vv) {
      let zv = new Lv({
        multigraph: vv.isMultigraph()
      }).setGraph(vv.graph());
      return vv.nodes().forEach((Pv => {
        vv.children(Pv).length || zv.setNode(Pv, vv.node(Pv))
      })), vv.edges().forEach((Pv => {
        zv.setEdge(Pv, vv.edge(Pv))
      })), zv
    }

    function yv(vv, zv) {
      let Pv, hv, Sv = vv.x,
        ev = vv.y,
        gv = zv.x - Sv,
        pv = zv.y - ev,
        dv = vv.width / 2,
        Nv = vv.height / 2;
      if (!gv && !pv) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(pv) * dv > Math.abs(gv) * Nv ? (pv < 0 && (Nv = -Nv), Pv = Nv * gv / pv, hv = Nv) : (gv < 0 && (dv = -dv), Pv = dv, hv = dv * pv / gv), {
        x: Sv + Pv,
        y: ev + hv
      }
    }

    function Bv(vv) {
      let zv = vz(bv(vv) + 1).map((() => []));
      return vv.nodes().forEach((Pv => {
        let hv = vv.node(Pv),
          Sv = hv.rank;
        void 0 !== Sv && (zv[Sv] || (zv[Sv] = []), zv[Sv][hv.order] = Pv)
      })), zv
    }

    function Jv(vv, zv, Pv, hv) {
      let Sv = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Sv.rank = Pv, Sv.order = hv), Hv(vv, "border", Sv, zv)
    }
    var Ev = 65535;

    function ov(vv, zv) {
      if (zv.length > Ev) {
        let Pv = function(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ev,
            Pv = [];
          for (let hv = 0; hv < vv.length; hv += zv) {
            let Sv = vv.slice(hv, hv + zv);
            Pv.push(Sv)
          }
          return Pv
        }(zv);
        return vv(...Pv.map((zv => vv(...zv))))
      }
      return vv(...zv)
    }

    function bv(vv) {
      let zv = vv.nodes().map((zv => {
        let Pv = vv.node(zv).rank;
        return void 0 === Pv ? Number.MIN_VALUE : Pv
      }));
      return ov(Math.max, zv)
    }

    function rv(vv, zv) {
      let Pv = Date.now();
      try {
        return zv()
      } finally {
        console.log(vv + " time: " + (Date.now() - Pv) + "ms")
      }
    }

    function kv(vv, zv) {
      return zv()
    }
    var Xv = 0;

    function uv(vv) {
      return vv + "" + ++Xv
    }

    function vz(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == zv && (zv = vv, vv = 0);
      let hv = vv => vv < zv;
      Pv < 0 && (hv = vv => zv < vv);
      let Sv = [];
      for (let ev = vv; hv(ev); ev += Pv) Sv.push(ev);
      return Sv
    }

    function zz(vv, zv) {
      let Pv = {};
      for (let hv of zv) void 0 !== vv[hv] && (Pv[hv] = vv[hv]);
      return Pv
    }

    function Pz(vv, zv) {
      let Pv;
      return Pv = "string" == typeof zv ? vv => vv[zv] : zv, Object.entries(vv).reduce(((vv, zv) => {
        let [hv, Sv] = zv;
        return vv[hv] = Pv(Sv, hv), vv
      }), {})
    }
    var hz = "\0";

    function Sz(vv, zv, Pv) {
      var hv, Sv, ev, gv, pv, dv;
      if (!(vv && zv && Pv && "edge" === zv.dummy && "edge" === Pv.dummy && zv.edgeObj && Pv.edgeObj && vv[zv.edgeObj.v] && vv[Pv.edgeObj.v] && vv[zv.edgeObj.w] && vv[Pv.edgeObj.w])) return 0;
      let Nv = !0;
      zv.edgeObj.w === Pv.edgeObj.w && (Nv = !1);
      let lv = Nv ? null != (Sv = null == (hv = vv[zv.edgeObj.v]) ? void 0 : hv.rank) ? Sv : NaN : null != (gv = null == (ev = vv[zv.edgeObj.w]) ? void 0 : ev.rank) ? gv : NaN,
        Tv = Object.entries(vv).find((vv => {
          var Pv, hv;
          return (null == (Pv = vv[1].edgeObj) ? void 0 : Pv.v) === zv.edgeObj.v && (null == (hv = vv[1].edgeObj) ? void 0 : hv.w) === zv.edgeObj.w && vv[1].rank === lv
        })),
        Wv = Object.entries(vv).find((vv => {
          var zv, hv;
          return (null == (zv = vv[1].edgeObj) ? void 0 : zv.v) === Pv.edgeObj.v && (null == (hv = vv[1].edgeObj) ? void 0 : hv.w) === Pv.edgeObj.w && vv[1].rank === lv
        }));
      if (!Tv || !Wv) return 0;
      let wv = null != (pv = Tv[1].order) ? pv : NaN,
        av = null != (dv = Wv[1].order) ? dv : NaN;
      return isNaN(wv - av) ? 0 : wv - av
    }
    var ez = "3.1.1";

    function gz(vv) {
      vv._prev._next = vv._next, vv._next._prev = vv._prev, delete vv._next, delete vv._prev
    }

    function pz(vv, zv) {
      if ("_next" !== vv && "_prev" !== vv) return zv
    }
    var dz = class {
        constructor() {
          Sv(this, "_sentinel");
          let vv = {};
          vv._next = vv._prev = vv, this._sentinel = vv
        }
        dequeue() {
          let vv = this._sentinel,
            zv = vv._prev;
          if (zv !== vv) return gz(zv), zv
        }
        enqueue(vv) {
          let zv = this._sentinel;
          vv._prev && vv._next && gz(vv), vv._next = zv._next, zv._next._prev = vv, zv._next = vv, vv._prev = zv
        }
        toString() {
          let vv = [],
            zv = this._sentinel,
            Pv = zv._prev;
          for (; Pv !== zv;) vv.push(JSON.stringify(Pv, pz)), Pv = Pv._prev;
          return "[" + vv.join(", ") + "]"
        }
      },
      Nz = () => 1;

    function lz(vv, zv) {
      if (vv.nodeCount() <= 1) return [];
      let Pv = function(vv, zv) {
        let Pv = new Lv,
          hv = 0,
          Sv = 0;
        vv.nodes().forEach((vv => {
          Pv.setNode(vv, {
            v: vv,
            in: 0,
            out: 0
          })
        })), vv.edges().forEach((vv => {
          let ev = Pv.edge(vv.v, vv.w) || 0,
            gv = zv(vv),
            pv = ev + gv;
          Pv.setEdge(vv.v, vv.w, pv);
          let dv = Pv.node(vv.v),
            Nv = Pv.node(vv.w);
          Sv = Math.max(Sv, dv.out += gv), hv = Math.max(hv, Nv.in += gv)
        }));
        let ev = function(vv) {
            let zv = [];
            for (let Pv = 0; Pv < vv; Pv++) zv.push(Pv);
            return zv
          }(Sv + hv + 3).map((() => new dz)),
          gv = hv + 1;
        return Pv.nodes().forEach((vv => {
          Wz(ev, gv, Pv.node(vv))
        })), {
          graph: Pv,
          buckets: ev,
          zeroIdx: gv
        }
      }(vv, zv || Nz);
      return function(vv, zv, Pv) {
        var hv;
        let Sv, ev = [],
          gv = zv[zv.length - 1],
          pv = zv[0];
        for (; vv.nodeCount();) {
          for (; Sv = pv.dequeue();) Tz(vv, zv, Pv, Sv);
          for (; Sv = gv.dequeue();) Tz(vv, zv, Pv, Sv);
          if (vv.nodeCount())
            for (let gv = zv.length - 2; gv > 0; --gv)
              if (Sv = null == (hv = zv[gv]) ? void 0 : hv.dequeue(), Sv) {
                ev = ev.concat(Tz(vv, zv, Pv, Sv, !0) || []);
                break
              }
        }
        return ev
      }(Pv.graph, Pv.buckets, Pv.zeroIdx).flatMap((zv => vv.outEdges(zv.v, zv.w) || []))
    }

    function Tz(vv, zv, Pv, hv, Sv) {
      let ev = [],
        gv = Sv ? ev : void 0;
      return (vv.inEdges(hv.v) || []).forEach((hv => {
        let gv = vv.edge(hv),
          pv = vv.node(hv.v);
        Sv && ev.push({
          v: hv.v,
          w: hv.w
        }), pv.out -= gv, Wz(zv, Pv, pv)
      })), (vv.outEdges(hv.v) || []).forEach((hv => {
        let Sv = vv.edge(hv),
          ev = hv.w,
          gv = vv.node(ev);
        gv.in -= Sv, Wz(zv, Pv, gv)
      })), vv.removeNode(hv.v), gv
    }

    function Wz(vv, zv, Pv) {
      var hv, Sv, ev;
      Pv.out ? Pv.in ? null == (ev = vv[Pv.out - Pv.in + zv]) || ev.enqueue(Pv) : null == (Sv = vv[vv.length - 1]) || Sv.enqueue(Pv) : null == (hv = vv[0]) || hv.enqueue(Pv)
    }

    function wz(vv, zv) {
      var Pv;
      ("greedy" === vv.graph().acyclicer ? lz(vv, (Pv = vv, vv => Pv.edge(vv).weight)) : function(vv, zv) {
        let Pv = [],
          hv = {},
          Sv = {};

        function ev(zv) {
          Object.hasOwn(Sv, zv) || (Sv[zv] = !0, hv[zv] = !0, vv.outEdges(zv).forEach((vv => {
            Object.hasOwn(hv, vv.w) ? Pv.push(vv) : ev(vv.w)
          })), delete hv[zv])
        }

        function gv(ev) {
          var pv;
          Object.hasOwn(Sv, ev) || (Sv[ev] = !0, hv[ev] = !0, null == (pv = vv.outEdges(ev)) || pv.forEach((Sv => {
            var pv, dv;
            Object.hasOwn(hv, Sv.w) || (null == (pv = zv.node(ev)) ? void 0 : pv.rank) > (null == (dv = zv.node(Sv.w)) ? void 0 : dv.rank) && function(vv, zv, Pv) {
              let hv = new Set;

              function Sv(zv) {
                var ev;
                if (vv.sources().includes(zv)) return !0;
                hv.add(zv);
                for (let gv of null != (ev = vv.inEdges(zv)) ? ev : [])
                  if ((gv.v !== Pv.v || gv.w !== Pv.w) && !hv.has(gv.v) && Sv(gv.v)) return !0;
                return !1
              }
              return Sv(zv)
            }(vv, Sv.w, Sv) ? Pv.push(Sv) : gv(Sv.w)
          })), delete hv[ev])
        }
        let pv = ev;
        return zv && "function" == typeof zv.node && (pv = gv), vv.sources().forEach(pv), vv.nodes().forEach(pv), Pv
      }(vv, null != zv ? zv : null)).forEach((zv => {
        let Pv = vv.edge(zv);
        vv.removeEdge(zv), Pv.forwardName = zv.name, Pv.reversed = !0, vv.setEdge(zv.w, zv.v, Pv, uv("rev"))
      }))
    }

    function az(vv) {
      vv.graph().dummyChains = [], vv.edges().forEach((zv => function(vv, zv) {
        let Pv, hv, Sv, ev = zv.v,
          gv = vv.node(ev).rank,
          pv = zv.w,
          dv = vv.node(pv).rank,
          Nv = zv.name,
          lv = vv.edge(zv),
          Tv = lv.labelRank;
        if (dv === gv + 1) return;
        for (vv.removeEdge(zv), Sv = 0, ++gv; gv < dv; ++Sv, ++gv) lv.points = [], hv = {
          width: 0,
          height: 0,
          edgeLabel: lv,
          edgeObj: zv,
          rank: gv
        }, Pv = Hv(vv, "edge", hv, "_d"), gv === Tv && (hv.width = lv.width, hv.height = lv.height, hv.dummy = "edge-label", hv.labelpos = lv.labelpos), vv.setEdge(ev, Pv, {
          weight: lv.weight
        }, Nv), 0 === Sv && vv.graph().dummyChains.push(Pv), ev = Pv;
        vv.setEdge(ev, pv, {
          weight: lv.weight
        }, Nv)
      }(vv, zv)))
    }

    function sz(vv) {
      let zv = {};
      vv.sources().forEach((function Pv(hv) {
        let Sv = vv.node(hv);
        if (Object.hasOwn(zv, hv)) return Sv.rank;
        zv[hv] = !0;
        let ev = vv.outEdges(hv),
          gv = ev ? ev.map((zv => null == zv ? Number.POSITIVE_INFINITY : Pv(zv.w) - vv.edge(zv).minlen)) : [],
          pv = ov(Math.min, gv);
        return pv === Number.POSITIVE_INFINITY && (pv = 0), Sv.rank = pv
      }))
    }

    function Cz(vv, zv) {
      return vv.node(zv.w).rank - vv.node(zv.v).rank - vv.edge(zv).minlen
    }
    var iz = function(vv) {
      let zv = new Lv({
          directed: !1
        }),
        Pv = vv.nodes();
      if (0 === Pv.length) throw new Error("Graph must have at least one node");
      let hv, Sv, ev = Pv[0],
        gv = vv.nodeCount();
      for (zv.setNode(ev, {}); cz(zv, vv) < gv && (hv = Gz(zv, vv), hv);) Sv = zv.hasNode(hv.v) ? Cz(vv, hv) : -Cz(vv, hv), mz(zv, vv, Sv);
      return zv
    };

    function cz(vv, zv) {
      return vv.nodes().forEach((function Pv(hv) {
        let Sv = zv.nodeEdges(hv);
        Sv && Sv.forEach((Sv => {
          let ev = Sv.v,
            gv = hv === ev ? Sv.w : ev;
          !vv.hasNode(gv) && !Cz(zv, Sv) && (vv.setNode(gv, {}), vv.setEdge(hv, gv, {}), Pv(gv))
        }))
      })), vv.nodeCount()
    }

    function Gz(vv, zv) {
      return zv.edges().reduce(((Pv, hv) => {
        let Sv = Number.POSITIVE_INFINITY;
        return vv.hasNode(hv.v) !== vv.hasNode(hv.w) && (Sv = Cz(zv, hv)), Sv < Pv[0] ? [Sv, hv] : Pv
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function mz(vv, zv, Pv) {
      vv.nodes().forEach((vv => zv.node(vv).rank += Pv))
    }
    var {
      preorder: jz,
      postorder: fz
    } = iv, Fz = Yz;

    function Yz(vv) {
      vv = function(vv) {
        let zv = (new Lv).setGraph(vv.graph());
        return vv.nodes().forEach((Pv => zv.setNode(Pv, vv.node(Pv)))), vv.edges().forEach((Pv => {
          let hv = zv.edge(Pv.v, Pv.w) || {
              weight: 0,
              minlen: 1
            },
            Sv = vv.edge(Pv);
          zv.setEdge(Pv.v, Pv.w, {
            weight: hv.weight + Sv.weight,
            minlen: Math.max(hv.minlen, Sv.minlen)
          })
        })), zv
      }(vv), sz(vv);
      let zv, Pv, hv = iz(vv);
      for (Dz(hv), nz(hv, vv); zv = Vz(hv);) Pv = Uz(hv, vv, zv), Rz(hv, vv, zv, Pv)
    }

    function nz(vv, zv) {
      let Pv = fz(vv, vv.nodes());
      Pv = Pv.slice(0, Pv.length - 1), Pv.forEach((Pv => function(vv, zv, Pv) {
        let hv = vv.node(Pv).parent,
          Sv = vv.edge(Pv, hv);
        Sv.cutvalue = Oz(vv, zv, Pv)
      }(vv, zv, Pv)))
    }

    function Oz(vv, zv, Pv) {
      let hv = vv.node(Pv).parent,
        Sv = !0,
        ev = zv.edge(Pv, hv),
        gv = 0;
      ev || (Sv = !1, ev = zv.edge(hv, Pv)), gv = ev.weight;
      let pv = zv.nodeEdges(Pv);
      return pv && pv.forEach((ev => {
        let pv = ev.v === Pv,
          dv = pv ? ev.w : ev.v;
        if (dv !== hv) {
          let hv = pv === Sv,
            Nv = zv.edge(ev).weight;
          if (gv += hv ? Nv : -Nv, function(vv, zv, Pv) {
              return vv.hasEdge(zv, Pv)
            }(vv, Pv, dv)) {
            let zv = vv.edge(Pv, dv).cutvalue;
            gv += hv ? -zv : zv
          }
        }
      })), gv
    }

    function Dz(vv, zv) {
      arguments.length < 2 && (zv = vv.nodes()[0]), Kz(vv, {}, 1, zv)
    }

    function Kz(vv, zv, Pv, hv, Sv) {
      let ev = Pv,
        gv = vv.node(hv);
      zv[hv] = !0;
      let pv = vv.neighbors(hv);
      return pv && pv.forEach((Sv => {
        Object.hasOwn(zv, Sv) || (Pv = Kz(vv, zv, Pv, Sv, hv))
      })), gv.low = ev, gv.lim = Pv++, Sv ? gv.parent = Sv : delete gv.parent, Pv
    }

    function Vz(vv) {
      return vv.edges().find((zv => vv.edge(zv).cutvalue < 0))
    }

    function Uz(vv, zv, Pv) {
      let hv = Pv.v,
        Sv = Pv.w;
      zv.hasEdge(hv, Sv) || (hv = Pv.w, Sv = Pv.v);
      let ev = vv.node(hv),
        gv = vv.node(Sv),
        pv = ev,
        dv = !1;
      return ev.lim > gv.lim && (pv = gv, dv = !0), zv.edges().filter((zv => dv === xz(vv, vv.node(zv.v), pv) && dv !== xz(vv, vv.node(zv.w), pv))).reduce(((vv, Pv) => Cz(zv, Pv) < Cz(zv, vv) ? Pv : vv))
    }

    function Rz(vv, zv, Pv, hv) {
      let Sv = Pv.v,
        ev = Pv.w;
      vv.removeEdge(Sv, ev), vv.setEdge(hv.v, hv.w, {}), Dz(vv), nz(vv, zv),
        function(vv, zv) {
          let Pv = vv.nodes().find((zv => !vv.node(zv).parent));
          if (!Pv) return;
          let hv = jz(vv, [Pv]);
          hv = hv.slice(1), hv.forEach((Pv => {
            let hv = vv.node(Pv).parent,
              Sv = zv.edge(Pv, hv),
              ev = !1;
            Sv || (Sv = zv.edge(hv, Pv), ev = !0), zv.node(Pv).rank = zv.node(hv).rank + (ev ? Sv.minlen : -Sv.minlen)
          }))
        }(vv, zv)
    }

    function xz(vv, zv, Pv) {
      return Pv.low <= zv.lim && zv.lim <= Pv.lim
    }
    Yz.initLowLimValues = Dz, Yz.initCutValues = nz, Yz.calcCutValue = Oz, Yz.leaveEdge = Vz, Yz.enterEdge = Uz, Yz.exchangeEdges = Rz;
    var tz = function(vv) {
      let zv = vv.graph().ranker;
      if ("function" == typeof zv) return zv(vv);
      switch (zv) {
        case "network-simplex":
        default:
          Iz(vv);
          break;
        case "tight-tree":
          ! function(vv) {
            sz(vv), iz(vv)
          }(vv);
          break;
        case "longest-path":
          qz(vv);
        case "none":
      }
    };
    var qz = sz;

    function Iz(vv) {
      Fz(vv)
    }
    var Qz = function(vv) {
      let zv = function(vv) {
          let zv = {},
            Pv = 0;

          function hv(Sv) {
            let ev = Pv;
            vv.children(Sv).forEach(hv), zv[Sv] = {
              low: ev,
              lim: Pv++
            }
          }
          return vv.children(hz).forEach(hv), zv
        }(vv),
        Pv = vv.graph();
      if (!Array.isArray(Pv.dummyChains)) return;
      Pv.dummyChains.forEach((Pv => {
        let hv = vv.node(Pv),
          Sv = hv.edgeObj,
          ev = function(vv, zv, Pv, hv) {
            let Sv, ev = [],
              gv = [],
              pv = Math.min(zv[Pv].low, zv[hv].low),
              dv = Math.max(zv[Pv].lim, zv[hv].lim);
            Sv = Pv;
            do {
              Sv = vv.parent(Sv), ev.push(Sv)
            } while (Sv && (zv[Sv].low > pv || dv > zv[Sv].lim));
            let Nv = Sv,
              lv = hv;
            for (;
              (lv = vv.parent(lv)) !== Nv;) gv.push(lv);
            return {
              path: ev.concat(gv.reverse()),
              lca: Nv
            }
          }(vv, zv, Sv.v, Sv.w),
          gv = ev.path,
          pv = ev.lca,
          dv = 0,
          Nv = gv[dv],
          lv = !0;
        for (; Pv !== Sv.w;) {
          if (hv = vv.node(Pv), lv) {
            for (;
              (Nv = gv[dv]) !== pv && vv.node(Nv).maxRank < hv.rank;) dv++;
            Nv === pv && (lv = !1)
          }
          if (!lv) {
            for (; dv < gv.length - 1 && vv.node(gv[dv + 1]).minRank <= hv.rank;) dv++;
            Nv = gv[dv]
          }
          void 0 !== Nv && vv.setParent(Pv, Nv), Pv = vv.successors(Pv)[0]
        }
      }))
    };

    function Zz(vv) {
      let zv = Hv(vv, "root", {}, "_root"),
        Pv = function(vv) {
          let zv = {};

          function Pv(hv, Sv) {
            let ev = vv.children(hv);
            ev && ev.length && ev.forEach((vv => Pv(vv, Sv + 1))), zv[hv] = Sv
          }
          return vv.children(hz).forEach((vv => Pv(vv, 1))), zv
        }(vv),
        hv = Object.values(Pv),
        Sv = ov(Math.max, hv) - 1,
        ev = 2 * Sv + 1;
      vv.graph().nestingRoot = zv, vv.edges().forEach((zv => vv.edge(zv).minlen *= ev));
      let gv = function(vv) {
        return vv.edges().reduce(((zv, Pv) => zv + vv.edge(Pv).weight), 0)
      }(vv) + 1;
      vv.children(hz).forEach((hv => {
        Az(vv, zv, ev, gv, Sv, Pv, hv)
      })), vv.graph().nodeRankFactor = ev
    }

    function Az(vv, zv, Pv, hv, Sv, ev, gv) {
      var pv;
      let dv = vv.children(gv);
      if (!dv.length) return void(gv !== zv && vv.setEdge(zv, gv, {
        weight: 0,
        minlen: Pv
      }));
      let Nv = Jv(vv, "_bt"),
        lv = Jv(vv, "_bb"),
        Tv = vv.node(gv);
      vv.setParent(Nv, gv), Tv.borderTop = Nv, vv.setParent(lv, gv), Tv.borderBottom = lv, dv.forEach((pv => {
        var dv;
        Az(vv, zv, Pv, hv, Sv, ev, pv);
        let Tv = vv.node(pv),
          Wv = Tv.borderTop ? Tv.borderTop : pv,
          wv = Tv.borderBottom ? Tv.borderBottom : pv,
          av = Tv.borderTop ? hv : 2 * hv,
          sv = Wv !== wv ? 1 : Sv - (null != (dv = ev[gv]) ? dv : 0) + 1;
        vv.setEdge(Nv, Wv, {
          weight: av,
          minlen: sv,
          nestingEdge: !0
        }), vv.setEdge(wv, lv, {
          weight: av,
          minlen: sv,
          nestingEdge: !0
        })
      })), vv.parent(gv) || vv.setEdge(zv, Nv, {
        weight: 0,
        minlen: Sv + (null != (pv = ev[gv]) ? pv : 0)
      })
    }
    var Lz = function(vv) {
      vv.children(hz).forEach((function zv(Pv) {
        let hv = vv.children(Pv),
          Sv = vv.node(Pv);
        if (hv.length && hv.forEach(zv), Sv && Object.hasOwn(Sv, "minRank")) {
          Sv.borderLeft = [], Sv.borderRight = [];
          for (let zv = Sv.minRank, hv = Sv.maxRank + 1; zv < hv; ++zv) Hz(vv, "borderLeft", "_bl", Pv, Sv, zv), Hz(vv, "borderRight", "_br", Pv, Sv, zv)
        }
      }))
    };

    function Hz(vv, zv, Pv, hv, Sv, ev) {
      let gv = {
          width: 0,
          height: 0,
          rank: ev,
          borderType: zv
        },
        pv = Sv[zv][ev - 1],
        dv = Hv(vv, "border", gv, Pv);
      Sv[zv][ev] = dv, vv.setParent(dv, hv), pv && vv.setEdge(pv, dv, {
        weight: 1
      })
    }

    function Mz(vv) {
      var zv;
      let Pv = null == (zv = vv.graph().rankdir) ? void 0 : zv.toLowerCase();
      ("bt" === Pv || "rl" === Pv) && function(vv) {
        vv.nodes().forEach((zv => Jz(vv.node(zv)))), vv.edges().forEach((zv => {
          var Pv;
          let hv = vv.edge(zv);
          null == (Pv = hv.points) || Pv.forEach(Jz), Object.hasOwn(hv, "y") && Jz(hv)
        }))
      }(vv), ("lr" === Pv || "rl" === Pv) && (function(vv) {
        vv.nodes().forEach((zv => Ez(vv.node(zv)))), vv.edges().forEach((zv => {
          var Pv;
          let hv = vv.edge(zv);
          null == (Pv = hv.points) || Pv.forEach(Ez), Object.hasOwn(hv, "x") && Ez(hv)
        }))
      }(vv), yz(vv))
    }

    function yz(vv) {
      vv.nodes().forEach((zv => Bz(vv.node(zv)))), vv.edges().forEach((zv => Bz(vv.edge(zv))))
    }

    function Bz(vv) {
      let zv = vv.width;
      vv.width = vv.height, vv.height = zv
    }

    function Jz(vv) {
      vv.y = -vv.y
    }

    function Ez(vv) {
      let zv = vv.x;
      vv.x = vv.y, vv.y = zv
    }

    function oz(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Pv = {},
        hv = vv.nodes().filter((zv => !vv.children(zv).length)),
        Sv = hv.map((zv => vv.node(zv).rank)),
        ev = vz(ov(Math.max, Sv) + 1).map((() => []));
      return hv.sort(((zv, Pv) => vv.node(zv).rank - vv.node(Pv).rank)).forEach((function hv(Sv) {
        if (Pv[Sv]) return;
        Pv[Sv] = !0;
        let gv = vv.node(Sv);
        ev[gv.rank].push(Sv);
        let pv = vv.successors(Sv);
        pv && [...pv].sort(((Pv, hv) => function(Pv, hv) {
          let Sv = vv.node(Pv),
            ev = vv.node(hv);
          return Sz(zv, Sv, ev)
        }(Pv, hv))).forEach(hv)
      })), ev
    }

    function bz(vv, zv) {
      let Pv = 0;
      for (let hv = 1; hv < zv.length; ++hv) Pv += rz(vv, zv[hv - 1], zv[hv]);
      return Pv
    }

    function rz(vv, zv, Pv) {
      let hv = function(vv, zv) {
          return vv.reduce(((vv, Pv, hv) => (vv[Pv] = zv[hv], vv)), {})
        }(Pv, Pv.map(((vv, zv) => zv))),
        Sv = zv.flatMap((zv => {
          let Pv = vv.outEdges(zv);
          return Pv ? Pv.map((zv => ({
            pos: hv[zv.w],
            weight: vv.edge(zv).weight
          }))).sort(((vv, zv) => vv.pos - zv.pos)) : []
        })),
        ev = 1;
      for (; ev < Pv.length;) ev <<= 1;
      let gv = 2 * ev - 1;
      ev -= 1;
      let pv = new Array(gv).fill(0),
        dv = 0;
      return Sv.forEach((vv => {
        let zv = vv.pos + ev;
        pv[zv] += vv.weight;
        let Pv = 0;
        for (; zv > 0;) zv % 2 && (Pv += pv[zv + 1]), zv = zv - 1 >> 1, pv[zv] += vv.weight;
        dv += vv.weight * Pv
      })), dv
    }

    function kz(vv, zv) {
      let Pv = {};
      return vv.forEach(((vv, zv) => {
          let hv = {
            indegree: 0,
            in: [],
            out: [],
            vs: [vv.v],
            i: zv
          };
          void 0 !== vv.barycenter && (hv.barycenter = vv.barycenter, hv.weight = vv.weight), Pv[vv.v] = hv
        })), zv.edges().forEach((vv => {
          let zv = Pv[vv.v],
            hv = Pv[vv.w];
          void 0 !== zv && void 0 !== hv && (hv.indegree++, zv.out.push(hv))
        })),
        function(vv) {
          let zv = [];

          function Pv(vv) {
            return zv => {
              zv.merged || (void 0 === zv.barycenter || void 0 === vv.barycenter || zv.barycenter >= vv.barycenter) && function(vv, zv) {
                let Pv = 0,
                  hv = 0;
                vv.weight && (Pv += vv.barycenter * vv.weight, hv += vv.weight), zv.weight && (Pv += zv.barycenter * zv.weight, hv += zv.weight), vv.vs = zv.vs.concat(vv.vs), vv.barycenter = Pv / hv, vv.weight = hv, vv.i = Math.min(zv.i, vv.i), zv.merged = !0
              }(vv, zv)
            }
          }

          function hv(zv) {
            return Pv => {
              Pv.in.push(zv), 0 === --Pv.indegree && vv.push(Pv)
            }
          }
          for (; vv.length;) {
            let Sv = vv.pop();
            zv.push(Sv), Sv.in.reverse().forEach(Pv(Sv)), Sv.out.forEach(hv(Sv))
          }
          return zv.filter((vv => !vv.merged)).map((vv => zz(vv, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(Pv).filter((vv => !vv.indegree)))
    }

    function Xz(vv, zv, Pv, hv, Sv) {
      let ev = {},
        gv = null,
        pv = null,
        dv = Sv;
      "boolean" == typeof zv ? (dv = zv, ev = {}) : zv && (ev = zv, gv = null != Pv ? Pv : null, pv = null != hv ? hv : null);
      let Nv = function(vv, zv) {
          let Pv = {
            lhs: [],
            rhs: []
          };
          return vv.forEach((vv => {
            zv(vv) ? Pv.lhs.push(vv) : Pv.rhs.push(vv)
          })), Pv
        }(vv, (vv => Object.hasOwn(vv, "barycenter"))),
        lv = Nv.lhs,
        Tv = Nv.rhs.sort(((vv, zv) => zv.i - vv.i)),
        Wv = [],
        wv = 0,
        av = 0,
        sv = 0;
      lv.sort(function(vv, zv, Pv) {
        return (hv, Sv) => {
          if (hv.barycenter < Sv.barycenter) return -1;
          if (hv.barycenter > Sv.barycenter) return 1;
          if (vv && ("string" == typeof hv.vs[0] || "string" == typeof Sv.vs[0])) {
            let Pv = vv.node(hv.vs[0]),
              ev = vv.node(Sv.vs[0]),
              gv = Sz(zv, Pv, ev);
            if (0 !== gv) return gv
          }
          return Pv ? Sv.i - hv.i : hv.i - Sv.i
        }
      }(pv, gv, !!dv));
      for (let [iv, cv] of Object.entries(ev)) {
        let vv = lv.findIndex((vv => vv.vs[0] === iv));
        lv.splice(vv + 1, 0, cv)
      }
      sv = uz(Wv, Tv, sv), lv.forEach((vv => {
        sv += vv.vs.length, Wv.push(vv.vs), wv += vv.barycenter * vv.weight, av += vv.weight, sv = uz(Wv, Tv, sv)
      }));
      let Cv = {
        vs: Wv.flat(1)
      };
      return av && (Cv.barycenter = wv / av, Cv.weight = av), Cv
    }

    function uz(vv, zv, Pv) {
      let hv;
      for (; zv.length && (hv = zv[zv.length - 1]).i <= Pv;) zv.pop(), vv.push(hv.vs), Pv++;
      return Pv
    }

    function vP(vv, zv, Pv, hv, Sv) {
      var ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv;
      let Cv = null,
        iv = Sv;
      "boolean" == typeof hv ? (iv = hv, Cv = null) : void 0 !== hv && (Cv = hv);
      let cv = vv.children(zv),
        Gv = vv.node(zv),
        mv = Gv ? Gv.borderLeft : void 0,
        jv = Gv ? Gv.borderRight : void 0,
        fv = {};
      mv && (cv = cv.filter((vv => vv !== mv && vv !== jv)));
      let Fv = function(vv) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((zv => {
          let Pv = vv.inEdges(zv);
          if (!Pv || !Pv.length) return {
            v: zv
          };
          {
            let hv = Pv.reduce(((zv, Pv) => {
              let hv = vv.edge(Pv),
                Sv = vv.node(Pv.v);
              return {
                sum: zv.sum + hv.weight * Sv.order,
                weight: zv.weight + hv.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: zv,
              barycenter: hv.sum / hv.weight,
              weight: hv.weight
            }
          }
        }))
      }(vv, cv);
      Fv.forEach((zv => {
        if (vv.children(zv.v).length) {
          let {
            result: hv
          } = vP(vv, zv.v, Pv, Cv, iv);
          fv[zv.v] = hv, Object.hasOwn(hv, "barycenter") && function(vv, zv) {
            void 0 !== vv.barycenter ? (vv.barycenter = (vv.barycenter * vv.weight + zv.barycenter * zv.weight) / (vv.weight + zv.weight), vv.weight += zv.weight) : (vv.barycenter = zv.barycenter, vv.weight = zv.weight)
          }(zv, hv)
        }
      }));
      let Yv = kz(Fv, Pv);
      ! function(vv, zv) {
        vv.forEach((vv => {
          vv.vs = vv.vs.flatMap((vv => zv[vv] ? zv[vv].vs : vv))
        }))
      }(Yv, fv);
      let nv = {},
        Ov = !1;
      for (let Kv = 0; Kv < Yv.length; Kv++)
        for (let zv = Kv + 1; zv < Yv.length; zv++)
          if (Yv[Kv] && Yv[zv] && null != (ev = Yv[Kv]) && ev.barycenter && null != (gv = Yv[zv]) && gv.barycenter && (null == (pv = Yv[Kv]) ? void 0 : pv.barycenter) === Yv[zv].barycenter) {
            let Pv = null != (Nv = null == (dv = Yv[Kv]) ? void 0 : dv.vs[0]) ? Nv : "",
              hv = null != (Tv = null == (lv = Yv[zv]) ? void 0 : lv.vs[0]) ? Tv : "",
              Sv = vv.node(Pv),
              ev = vv.node(hv);
            if ("edge" === Sv.dummy && "edge" === ev.dummy && (null == (Wv = Sv.edgeObj) ? void 0 : Wv.v) === (null == (wv = ev.edgeObj) ? void 0 : wv.v) && (null == (av = Sv.edgeObj) ? void 0 : av.w) === (null == (sv = ev.edgeObj) ? void 0 : sv.w)) {
              if (Sv.edgeLabel.reversed) {
                nv[hv] = Yv[Kv], Yv.splice(Kv, 1), Kv--;
                break
              }
              nv[Pv] = Yv[zv], Yv.splice(zv, 1), zv--
            } else Ov = !0
          } let Dv = Xz(Yv, nv, Cv, vv, iv);
      if (mv && jv) {
        Dv.vs = [mv, Dv.vs, jv].flat(1);
        let zv = vv.predecessors(mv);
        if (zv && zv.length) {
          let Pv = vv.node(zv[0]),
            hv = vv.predecessors(jv),
            Sv = vv.node(hv[0]);
          Object.hasOwn(Dv, "barycenter") || (Dv.barycenter = 0, Dv.weight = 0), Dv.barycenter = (Dv.barycenter * Dv.weight + Pv.order + Sv.order) / (Dv.weight + 2), Dv.weight += 2
        }
      }
      return Object.defineProperty(Dv, "result", {
        value: Dv,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Dv, "usedBias", {
        value: Ov,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Dv
    }

    function zP(vv, zv, Pv, hv) {
      hv || (hv = vv.nodes());
      let Sv = function(vv) {
          let zv;
          for (; vv.hasNode(zv = uv("_root")););
          return zv
        }(vv),
        ev = new Lv({
          compound: !0
        }).setGraph({
          root: Sv
        }).setDefaultNodeLabel((zv => vv.node(zv)));
      return hv.forEach((hv => {
        let gv = vv.node(hv),
          pv = vv.parent(hv);
        if (gv.rank === zv || gv.minRank <= zv && zv <= gv.maxRank) {
          ev.setNode(hv), ev.setParent(hv, pv || Sv);
          let dv = vv[Pv](hv);
          dv && dv.forEach((zv => {
            let Pv = zv.v === hv ? zv.w : zv.v,
              Sv = ev.edge(Pv, hv),
              gv = void 0 !== Sv ? Sv.weight : 0;
            ev.setEdge(Pv, hv, {
              weight: vv.edge(zv).weight + gv
            })
          })), Object.hasOwn(gv, "minRank") && ev.setNode(hv, {
            borderLeft: gv.borderLeft[zv],
            borderRight: gv.borderRight[zv]
          })
        }
      })), ev
    }

    function PP(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof zv.customOrder) return void zv.customOrder(vv, PP);
      let hv = bv(vv),
        Sv = hP(vv, vz(1, hv + 1), "inEdges"),
        ev = hP(vv, vz(hv - 1, -1, -1), "outEdges"),
        gv = oz(vv, Pv);
      if (eP(vv, gv), zv.disableOptimalOrderHeuristic) return;
      let pv, dv = Number.POSITIVE_INFINITY,
        Nv = zv.constraints || [];
      for (let lv = 0, Tv = 0; Tv < 4; ++lv, ++Tv) {
        SP(lv % 2 ? Sv : ev, lv % 4 >= 2, Nv, Pv), gv = Bv(vv);
        let zv = bz(vv, gv);
        zv < dv ? (Tv = 0, pv = Object.assign({}, gv), dv = zv) : zv === dv && (pv = structuredClone(gv))
      }
      eP(vv, pv)
    }

    function hP(vv, zv, Pv) {
      let hv = new Map,
        Sv = (vv, zv) => {
          hv.has(vv) || hv.set(vv, []), hv.get(vv).push(zv)
        };
      for (let ev of vv.nodes()) {
        let zv = vv.node(ev);
        if ("number" == typeof zv.rank && Sv(zv.rank, ev), "number" == typeof zv.minRank && "number" == typeof zv.maxRank)
          for (let vv = zv.minRank; vv <= zv.maxRank; vv++) vv !== zv.rank && Sv(vv, ev)
      }
      return zv.map((function(zv) {
        return zP(vv, zv, Pv, hv.get(zv) || [])
      }))
    }

    function SP(vv, zv, Pv, hv) {
      let Sv = !0,
        ev = new Lv;
      vv.forEach((function(vv) {
        Pv.forEach((vv => ev.setEdge(vv.left, vv.right)));
        let gv = vv.graph().root,
          {
            result: pv,
            usedBias: dv
          } = vP(vv, gv, ev, hv, Sv);
        zv && dv && (Sv = !Sv), pv.vs.forEach(((zv, Pv) => vv.node(zv).order = Pv)),
          function(vv, zv, Pv) {
            let hv, Sv = {};
            Pv.forEach((Pv => {
              let ev, gv, pv = vv.parent(Pv);
              for (; pv;) {
                if (ev = vv.parent(pv), ev ? (gv = Sv[ev], Sv[ev] = pv) : (gv = hv, hv = pv), gv && gv !== pv) return void zv.setEdge(gv, pv);
                pv = ev
              }
            }))
          }(vv, ev, pv.vs)
      }))
    }

    function eP(vv, zv) {
      Object.values(zv).forEach((zv => zv.forEach(((zv, Pv) => vv.node(zv).order = Pv))))
    }

    function gP(vv, zv, Pv) {
      if (zv > Pv) {
        let vv = zv;
        zv = Pv, Pv = vv
      }
      let hv = vv[zv];
      hv || (vv[zv] = hv = {}), hv[Pv] = !0
    }

    function pP(vv, zv, Pv) {
      if (zv > Pv) {
        let vv = zv;
        zv = Pv, Pv = vv
      }
      let hv = vv[zv];
      return void 0 !== hv && Object.hasOwn(hv, Pv)
    }

    function dP(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ev = {},
        gv = function(vv, zv, Pv, hv) {
          let Sv = new Lv,
            ev = vv.graph(),
            gv = function(vv, zv, Pv) {
              return (hv, Sv, ev) => {
                let gv, pv = hv.node(Sv),
                  dv = hv.node(ev),
                  Nv = 0;
                if (Nv += pv.width / 2, Object.hasOwn(pv, "labelpos")) switch (pv.labelpos.toLowerCase()) {
                  case "l":
                    gv = -pv.width / 2;
                    break;
                  case "r":
                    gv = pv.width / 2
                }
                if (gv && (Nv += Pv ? gv : -gv), gv = void 0, Nv += (pv.dummy ? zv : vv) / 2, Nv += (dv.dummy ? zv : vv) / 2, Nv += dv.width / 2, Object.hasOwn(dv, "labelpos")) switch (dv.labelpos.toLowerCase()) {
                  case "l":
                    gv = dv.width / 2;
                    break;
                  case "r":
                    gv = -dv.width / 2
                }
                return gv && (Nv += Pv ? gv : -gv), Nv
              }
            }(ev.nodesep, ev.edgesep, hv);
          return zv.forEach((zv => {
            let hv;
            zv.forEach((zv => {
              let ev = Pv[zv];
              if (void 0 !== ev) {
                if (Sv.setNode(ev), void 0 !== hv) {
                  let pv = Pv[hv];
                  if (void 0 !== pv) {
                    let Pv = Sv.edge(pv, ev);
                    Sv.setEdge(pv, ev, Math.max(gv(vv, zv, hv), Pv || 0))
                  }
                }
                hv = zv
              }
            }))
          })), Sv
        }(vv, zv, Pv, Sv),
        pv = Sv ? "borderLeft" : "borderRight";

      function dv(vv, zv) {
        let Pv = gv.nodes().slice(),
          hv = {},
          Sv = Pv.pop();
        for (; Sv;) {
          if (hv[Sv]) vv(Sv);
          else {
            hv[Sv] = !0, Pv.push(Sv);
            for (let vv of zv(Sv)) Pv.push(vv)
          }
          Sv = Pv.pop()
        }
      }
      return dv((function(vv) {
        let zv = gv.inEdges(vv);
        ev[vv] = zv ? zv.reduce(((vv, zv) => {
          var Pv;
          let hv = null != (Pv = ev[zv.v]) ? Pv : 0,
            Sv = gv.edge(zv);
          return Math.max(vv, hv + (void 0 !== Sv ? Sv : 0))
        }), 0) : 0
      }), (function(vv) {
        return gv.predecessors(vv) || []
      })), dv((function(zv) {
        let Pv = gv.outEdges(zv),
          hv = Number.POSITIVE_INFINITY;
        Pv && (hv = Pv.reduce(((vv, zv) => {
          let Pv = ev[zv.w],
            hv = gv.edge(zv);
          return Math.min(vv, (void 0 !== Pv ? Pv : 0) - (void 0 !== hv ? hv : 0))
        }), Number.POSITIVE_INFINITY));
        let Sv = vv.node(zv);
        hv !== Number.POSITIVE_INFINITY && Sv.borderType !== pv && (ev[zv] = Math.max(void 0 !== ev[zv] ? ev[zv] : 0, hv))
      }), (function(vv) {
        return gv.successors(vv) || []
      })), Object.keys(hv).forEach((vv => {
        var zv;
        let hv = Pv[vv];
        void 0 !== hv && (ev[vv] = null != (zv = ev[hv]) ? zv : 0)
      })), ev
    }

    function NP(vv, zv) {
      let Pv, hv = Bv(vv),
        Sv = Object.assign(function(vv, zv) {
          let Pv = {};
          return zv.length && zv.reduce((function(zv, hv) {
            let Sv = 0,
              ev = 0,
              gv = zv.length,
              pv = hv[hv.length - 1];
            return hv.forEach(((zv, dv) => {
              let Nv = function(vv, zv) {
                  if (vv.node(zv).dummy) {
                    let Pv = vv.predecessors(zv);
                    if (Pv) return Pv.find((zv => vv.node(zv).dummy))
                  }
                }(vv, zv),
                lv = Nv ? vv.node(Nv).order : gv;
              (Nv || zv === pv) && (hv.slice(ev, dv + 1).forEach((zv => {
                let hv = vv.predecessors(zv);
                hv && hv.forEach((hv => {
                  let ev = vv.node(hv),
                    gv = ev.order;
                  (gv < Sv || lv < gv) && (!ev.dummy || !vv.node(zv).dummy) && gP(Pv, hv, zv)
                }))
              })), ev = dv + 1, Sv = lv)
            })), hv
          })), Pv
        }(vv, hv), function(vv, zv) {
          let Pv = {};

          function hv(zv, hv, Sv, ev, gv) {
            vz(hv, Sv).forEach((hv => {
              let Sv = zv[hv];
              if (void 0 !== Sv && vv.node(Sv).dummy) {
                let zv = vv.predecessors(Sv);
                zv && zv.forEach((zv => {
                  if (void 0 === zv) return;
                  let hv = vv.node(zv);
                  hv.dummy && (hv.order < ev || hv.order > gv) && gP(Pv, zv, Sv)
                }))
              }
            }))
          }
          return zv.length && zv.reduce((function(zv, Pv) {
            let Sv = -1,
              ev = -1,
              gv = 0;
            return Pv.forEach(((pv, dv) => {
              if ("border" === vv.node(pv).dummy) {
                let zv = vv.predecessors(pv);
                if (zv && zv.length) {
                  let pv = zv[0];
                  if (void 0 === pv) return;
                  ev = vv.node(pv).order, hv(Pv, gv, dv, Sv, ev), gv = dv, Sv = ev
                }
              }
              hv(Pv, gv, Pv.length, ev, zv.length)
            })), Pv
          })), Pv
        }(vv, hv)),
        ev = {};
      ["u", "d"].forEach((gv => {
        Pv = "u" === gv ? hv : Object.values(hv).reverse(), ["l", "r"].forEach((hv => {
          "r" === hv && (Pv = Pv.map((vv => Object.values(vv).reverse())));
          let pv = function(vv, zv, Pv, hv, Sv) {
              let ev = {},
                gv = {},
                pv = {};
              return zv.forEach((vv => {
                vv.forEach(((vv, zv) => {
                  ev[vv] = vv, gv[vv] = vv, pv[vv] = zv
                }))
              })), zv.forEach((zv => {
                let dv = -1,
                  Nv = -1,
                  lv = !1,
                  Tv = zv,
                  Wv = zv.findIndex((zv => (null == Sv ? void 0 : Sv.includes(zv)) || lP(zv, vv, Sv)));
                Wv > 0 && (Tv = [zv[Wv], ...zv.slice(0, Wv), ...zv.slice(Wv + 1)], lv = !0), Tv.forEach((zv => {
                  var Tv;
                  let Wv = hv(zv);
                  if (Wv && Wv.length) {
                    null != Sv && Sv.includes(zv) && (Wv = Wv.filter((zv => lP(zv, vv, Sv))));
                    let hv = Wv.sort(((vv, zv) => {
                        let Pv = pv[vv],
                          hv = pv[zv];
                        return (void 0 !== Pv ? Pv : 0) - (void 0 !== hv ? hv : 0)
                      })),
                      wv = (hv.length - 1) / 2;
                    for (let vv = Math.floor(wv), Sv = Math.ceil(wv); vv <= Sv; ++vv) {
                      let Sv = hv[vv];
                      if (void 0 === Sv) continue;
                      let Wv = pv[Sv];
                      if (void 0 !== Wv && gv[zv] === zv && dv < Wv && pv[Sv] !== Nv && !pP(Pv, zv, Sv)) {
                        let vv = ev[Sv];
                        void 0 !== vv && (gv[Sv] = zv, gv[zv] = ev[zv] = vv, dv = Wv, lv && (dv = -1, Nv = null != (Tv = pv[Sv]) ? Tv : -1, lv = !1))
                      }
                    }
                  }
                }))
              })), {
                root: ev,
                align: gv
              }
            }(vv, Pv, Sv, (zv => ("u" === gv ? vv.predecessors(zv) : vv.successors(zv)) || []), zv),
            dv = dP(vv, Pv, pv.root, pv.align, "r" === hv);
          "r" === hv && (dv = Pz(dv, (vv => -vv))), ev[gv + hv] = dv
        }))
      }));
      let gv = function(vv, zv) {
        return Object.values(zv).reduce(((zv, Pv) => {
          let hv = Number.NEGATIVE_INFINITY,
            Sv = Number.POSITIVE_INFINITY;
          Object.entries(Pv).forEach((zv => {
            let [Pv, ev] = zv, gv = function(vv, zv) {
              return vv.node(zv).width
            }(vv, Pv) / 2;
            hv = Math.max(ev + gv, hv), Sv = Math.min(ev - gv, Sv)
          }));
          let ev = hv - Sv;
          return ev < zv[0] && (zv = [ev, Pv]), zv
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(vv, ev);
      return function(vv, zv) {
          let Pv = Object.values(zv),
            hv = ov(Math.min, Pv),
            Sv = ov(Math.max, Pv);
          ["u", "d"].forEach((Pv => {
            ["l", "r"].forEach((ev => {
              let gv = Pv + ev,
                pv = vv[gv];
              if (!pv || pv === zv) return;
              let dv = Object.values(pv),
                Nv = hv - ov(Math.min, dv);
              "l" !== ev && (Nv = Sv - ov(Math.max, dv)), Nv && (vv[gv] = Pz(pv, (vv => vv + Nv)))
            }))
          }))
        }(ev, gv),
        function(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            Pv = vv.ul;
          return Pv ? Pz(Pv, ((Pv, hv) => {
            var Sv, ev;
            if (zv) {
              let Pv = zv.toLowerCase(),
                Sv = vv[Pv];
              if (Sv && void 0 !== Sv[hv]) return Sv[hv]
            }
            let gv = Object.values(vv).map((vv => {
              let zv = vv[hv];
              return void 0 !== zv ? zv : 0
            })).sort(((vv, zv) => vv - zv));
            return ((null != (Sv = gv[1]) ? Sv : 0) + (null != (ev = gv[2]) ? ev : 0)) / 2
          })) : {}
        }(ev, vv.graph().align)
    }

    function lP(vv, zv, Pv) {
      var hv;
      if (!Pv) return !1;
      let Sv = null == (hv = zv.node(vv)) ? void 0 : hv.edgeObj;
      if (!Sv || zv.node(vv).edgeLabel.reversed) return !1;
      let ev = Pv.indexOf(null == Sv ? void 0 : Sv.v),
        gv = Pv.indexOf(null == Sv ? void 0 : Sv.w);
      return -1 !== ev && -1 !== gv && ev === (gv + 1) % Pv.length || ev === (gv - 1) % Pv.length
    }

    function TP(vv, zv) {
      (function(vv) {
        let zv = Bv(vv),
          Pv = vv.graph(),
          hv = Pv.ranksep,
          Sv = Pv.rankalign,
          ev = 0;
        zv.forEach((zv => {
          let Pv = zv.reduce(((zv, Pv) => {
            var hv;
            let Sv = null != (hv = vv.node(Pv).height) ? hv : 0;
            return zv > Sv ? zv : Sv
          }), 0);
          zv.forEach((zv => {
            let hv = vv.node(zv);
            hv.y = "top" === Sv ? ev + hv.height / 2 : "bottom" === Sv ? ev + Pv - hv.height / 2 : ev + Pv / 2
          })), ev += Pv + hv
        }))
      })(vv = Mv(vv)), Object.entries(NP(vv, zv)).forEach((zv => {
        let [Pv, hv] = zv;
        return vv.node(Pv).x = hv
      }))
    }
    var WP = new WeakMap;

    function wP(vv) {
      return sP(vv, kv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), vv
    }

    function aP(vv, zv, Pv) {
      let hv = zv;
      for (; void 0 !== hv;) {
        let zv = vv.parent(hv);
        if (zv === Pv) return hv;
        hv = zv
      }
    }

    function sP(vv, zv, Pv) {
      var hv;
      let Sv = vv.nodes().filter((zv => vv.children(zv).length)),
        ev = {};
      Sv.forEach((hv => {
        let Sv = vv.node(hv);
        if (Sv && Sv.rankdir) {
          let gv = new Lv({
            multigraph: !0,
            compound: !0
          });
          gv.setGraph({
            rankdir: Sv.rankdir
          });
          let pv = vv.children(hv);
          pv.forEach((zv => {
            let Pv = {
              ...vv.node(zv)
            };
            gv.setNode(zv, Pv);
            let Sv = vv.parent(zv);
            Sv && Sv !== hv && pv.includes(Sv) && gv.setParent(zv, Sv)
          }));
          let dv = new Set;
          vv.edges().forEach((zv => {
            let Pv = aP(vv, zv.v, hv),
              Sv = aP(vv, zv.w, hv);
            if (Pv && Sv && Pv !== Sv) {
              let hv = `${Pv}\0${Sv}`;
              dv.has(hv) || (dv.add(hv), gv.setEdge(Pv, Sv, {
                ...vv.edge(zv)
              }))
            }
          })), sP(gv, zv, Pv);
          let Nv = OP(gv);
          CP(Nv, zv, Pv, null), iP(gv, Nv);
          let lv = 1 / 0,
            Tv = 1 / 0,
            Wv = -1 / 0,
            wv = -1 / 0;
          gv.nodes().forEach((vv => {
            if (vv === hv) return;
            let zv = gv.node(vv);
            zv && "number" == typeof zv.x && "number" == typeof zv.y && "number" == typeof zv.width && "number" == typeof zv.height && (lv = Math.min(lv, zv.x - zv.width / 2), Wv = Math.max(Wv, zv.x + zv.width / 2), Tv = Math.min(Tv, zv.y - zv.height / 2), wv = Math.max(wv, zv.y + zv.height / 2))
          })), (!isFinite(lv) || !isFinite(Tv) || !isFinite(Wv) || !isFinite(wv)) && (lv = Tv = 0, Wv = wv = 0);
          let av = Wv - lv,
            sv = wv - Tv;
          ev[hv] = {
            minX: lv,
            ve: Tv,
            maxX: Wv,
            ze: wv,
            width: av,
            height: sv,
            offsetX: lv,
            offsetY: Tv
          }, Sv._dagreClusterSubgraph = gv
        }
      }));
      let gv = [],
        pv = new Map;
      Sv.forEach((zv => {
        let Pv = vv.node(zv);
        Pv && Pv.rankdir && ev[zv] && pv.set(zv, (vv.children(zv) || []).filter((vv => vv !== zv)))
      }));
      let dv = new Set([...pv.values()].flat()),
        Nv = new Map;
      pv.forEach(((zv, Pv) => {
        dv.has(Pv) || Nv.set(Pv, (zv => {
          let Pv = [],
            hv = (vv.children(zv) || []).filter((vv => vv !== zv));
          for (; hv.length > 0;) {
            let zv = hv.shift();
            Pv.push(zv), (vv.children(zv) || []).filter((vv => vv !== zv)).forEach((vv => hv.push(vv)))
          }
          return Pv
        })(Pv))
      }));
      let lv = new Set([...Nv.values()].flat()),
        Tv = vv => {
          for (let [zv, Pv] of Nv)
            if (Pv.includes(vv)) return zv;
          return vv
        },
        Wv = [];
      vv.edges().forEach((zv => {
        (lv.has(zv.v) || lv.has(zv.w)) && Wv.push({
          edge: zv,
          label: vv.edge(zv)
        })
      }));
      let wv = new Map;
      lv.forEach((zv => {
        let Pv = vv.parent(zv);
        wv.set(zv, "string" == typeof Pv ? Pv : void 0)
      })), Nv.forEach(((zv, Pv) => {
        let hv = vv.node(Pv),
          Sv = [];
        zv.forEach((zv => {
          let Pv = vv.node(zv);
          Pv && (Sv.push({
            id: zv,
            node: Pv,
            parent: wv.get(zv)
          }), vv.removeNode(zv))
        }));
        let pv = Wv.filter((vv => {
            let {
              edge: Pv
            } = vv;
            return zv.includes(Pv.v) || zv.includes(Pv.w)
          })),
          dv = ev[Pv];
        hv && (gv.push({
          clusterId: Pv,
          subgraph: hv._dagreClusterSubgraph,
          bounds: dv,
          children: zv,
          removedNodes: Sv,
          removedEdges: pv
        }), hv.width = dv.width, hv.height = dv.height)
      }));
      let av = new Set;
      Wv.forEach((zv => {
        let {
          edge: Pv,
          label: hv
        } = zv, Sv = Tv(Pv.v), ev = Tv(Pv.w);
        if (Sv !== ev && vv.hasNode(Sv) && vv.hasNode(ev)) {
          let zv = `${Sv}\0${ev}`;
          av.has(zv) || (av.add(zv), vv.setEdge(Sv, ev, {
            ...hv,
            width: 0,
            height: 0
          }))
        }
      }));
      let sv = OP(vv),
        Cv = CP(sv, zv, Pv, null != (hv = WP.get(vv)) ? hv : null);
      WP.set(vv, Cv), iP(vv, sv), av.forEach((zv => {
        let Pv = zv.indexOf("\0"),
          hv = zv.slice(0, Pv),
          Sv = zv.slice(Pv + 1);
        vv.hasEdge(hv, Sv) && vv.removeEdge(hv, Sv)
      })), gv.forEach((zv => {
        let {
          clusterId: Pv,
          subgraph: hv,
          bounds: Sv,
          removedNodes: ev,
          removedEdges: gv
        } = zv;
        var pv, dv;
        let Nv = vv.node(Pv),
          lv = null != (pv = null == Nv ? void 0 : Nv.x) ? pv : 0,
          Tv = null != (dv = null == Nv ? void 0 : Nv.y) ? dv : 0,
          Wv = (Sv.minX + Sv.maxX) / 2,
          wv = (Sv.ve + Sv.ze) / 2;
        ev.forEach((zv => {
          let {
            id: Pv,
            node: hv,
            parent: Sv
          } = zv;
          vv.setNode(Pv, hv), void 0 !== Sv && vv.setParent(Pv, Sv)
        })), gv.forEach((zv => {
          let {
            edge: Pv,
            label: hv
          } = zv;
          vv.setEdge(Pv, hv)
        })), hv.nodes().forEach((zv => {
          if (zv === Pv) return;
          let Sv = hv.node(zv),
            ev = vv.node(zv);
          ev && Sv && "number" == typeof Sv.x && "number" == typeof Sv.y && (ev.x = lv + (Sv.x - Wv), ev.y = Tv + (Sv.y - wv))
        })), delete Nv._dagreClusterSubgraph
      })), Sv.forEach((zv => {
        var Pv, hv;
        let Sv = vv.node(zv),
          gv = ev[zv];
        if (Sv && Sv.rankdir && Sv._dagreClusterSubgraph && gv) {
          let ev = Sv._dagreClusterSubgraph,
            pv = null != (Pv = Sv.x) ? Pv : 0,
            dv = null != (hv = Sv.y) ? hv : 0,
            Nv = (gv.minX + gv.maxX) / 2,
            lv = (gv.ve + gv.ze) / 2;
          ev.nodes().forEach((Pv => {
            if (Pv === zv) return;
            let hv = ev.node(Pv),
              Sv = vv.node(Pv);
            if (Sv && hv && "number" == typeof hv.x && "number" == typeof hv.y) {
              let vv = hv.x - Nv,
                zv = hv.y - lv;
              Sv.x = pv + vv, Sv.y = dv + zv
            }
          })), delete Sv._dagreClusterSubgraph
        }
      }))
    }

    function CP(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Sv, ev;
      let gv = !1 !== (null == Pv ? void 0 : Pv.useDynamic),
        pv = gv && null != (Sv = null == hv ? void 0 : hv.graph) ? Sv : null,
        dv = gv && null != (ev = null == hv ? void 0 : hv.rawNodes) ? ev : null;
      zv("    makeSpaceForEdgeLabels", (() => function(vv) {
        let zv = vv.graph();
        zv.ranksep /= 2, vv.edges().forEach((Pv => {
          var hv;
          let Sv = vv.edge(Pv);
          Sv.minlen *= 2, "c" !== (null != (hv = Sv.labelpos) ? hv : "r").toLowerCase() && ("TB" === zv.rankdir || "BT" === zv.rankdir ? Sv.width += Sv.labeloffset : Sv.height += Sv.labeloffset)
        }))
      }(vv))), zv("    removeSelfEdges", (() => function(vv) {
        vv.edges().forEach((zv => {
          if (zv.v === zv.w) {
            let Pv = vv.node(zv.v);
            Pv.selfEdges || (Pv.selfEdges = []), Pv.selfEdges.push({
              e: zv,
              label: vv.edge(zv)
            }), vv.removeEdge(zv)
          }
        }))
      }(vv))), zv("    acyclic", (() => wz(vv, pv))), zv("    nestingGraph.run", (() => Zz(vv))), zv("    rank", (() => tz(Mv(vv)))), zv("    injectEdgeLabelProxies", (() => function(vv) {
        vv.edges().forEach((zv => {
          let Pv = vv.edge(zv);
          if (Pv.width && Pv.height) {
            let Pv = vv.node(zv.v),
              hv = {
                rank: (vv.node(zv.w).rank - Pv.rank) / 2 + Pv.rank,
                e: zv
              };
            Hv(vv, "edge-proxy", hv, "_ep")
          }
        }))
      }(vv))), zv("    removeEmptyRanks", (() => function(vv) {
        let zv = vv.nodes().map((zv => vv.node(zv).rank)).filter((vv => void 0 !== vv)),
          Pv = ov(Math.min, zv),
          hv = [];
        vv.nodes().forEach((zv => {
          let Sv = vv.node(zv).rank - Pv;
          hv[Sv] || (hv[Sv] = []), hv[Sv].push(zv)
        }));
        let Sv = 0,
          ev = vv.graph().nodeRankFactor;
        Array.from(hv).forEach(((zv, Pv) => {
          void 0 === zv && Pv % ev !== 0 ? --Sv : void 0 !== zv && Sv && zv.forEach((zv => vv.node(zv).rank += Sv))
        }))
      }(vv))), zv("    nestingGraph.cleanup", (() => function(vv) {
        let zv = vv.graph();
        vv.removeNode(zv.nestingRoot), delete zv.nestingRoot, vv.edges().forEach((zv => {
          vv.edge(zv).nestingEdge && vv.removeEdge(zv)
        }))
      }(vv))), zv("    normalizeRanks", (() => function(vv) {
        let zv = vv.nodes().map((zv => {
            let Pv = vv.node(zv).rank;
            return void 0 === Pv ? Number.MAX_VALUE : Pv
          })),
          Pv = ov(Math.min, zv);
        vv.nodes().forEach((zv => {
          let hv = vv.node(zv);
          Object.hasOwn(hv, "rank") && (hv.rank -= Pv)
        }))
      }(vv))), zv("    assignRankMinMax", (() => function(vv) {
        let zv = 0;
        vv.nodes().forEach((Pv => {
          let hv = vv.node(Pv);
          hv.borderTop && (hv.minRank = vv.node(hv.borderTop).rank, hv.maxRank = vv.node(hv.borderBottom).rank, zv = Math.max(zv, hv.maxRank))
        })), vv.graph().maxRank = zv
      }(vv))), zv("    removeEdgeLabelProxies", (() => function(vv) {
        vv.nodes().forEach((zv => {
          let Pv = vv.node(zv);
          if ("edge-proxy" === Pv.dummy) {
            let hv = Pv;
            vv.edge(hv.e).labelRank = Pv.rank, vv.removeNode(zv)
          }
        }))
      }(vv))), zv("    normalize.run", (() => az(vv))), zv("    parentDummyChains", (() => Qz(vv))), zv("    addBorderSegments", (() => Lz(vv))), zv("    order", (() => PP(vv, Pv, dv))), zv("    insertSelfEdges", (() => function(vv) {
        Bv(vv).forEach((zv => {
          let Pv = 0;
          zv.forEach(((zv, hv) => {
            let Sv = vv.node(zv);
            "number" != typeof Sv.rank && (Sv.rank = 0), Sv.order = hv + Pv, (Sv.selfEdges || []).forEach((zv => {
              Hv(vv, "selfedge", {
                width: zv.label.width,
                height: zv.label.height,
                rank: Sv.rank,
                order: hv + ++Pv,
                e: zv.e,
                edgeLabel: zv.label
              }, "_se"), (!Array.isArray(zv.label.points) || 7 !== zv.label.points.length) && (zv.label.points = [{
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
            })), delete Sv.selfEdges
          }))
        }))
      }(vv))), zv("    adjustCoordinateSystem", (() => function(vv) {
        var zv;
        let Pv = null == (zv = vv.graph().rankdir) ? void 0 : zv.toLowerCase();
        ("lr" === Pv || "rl" === Pv) && yz(vv)
      }(vv))), zv("    position", (() => TP(vv, Pv.corePath))), zv("    positionSelfEdges", (() => function(vv) {
        vv.nodes().forEach((zv => {
          let Pv = vv.node(zv),
            hv = vv => "number" == typeof vv && isFinite(vv);
          if ("selfedge" === Pv.dummy) {
            let Sv = Pv,
              ev = vv.node(Sv.e.v),
              gv = hv(null == ev ? void 0 : ev.x) ? ev.x : 0,
              pv = hv(null == ev ? void 0 : ev.y) ? ev.y : 0,
              dv = hv(null == ev ? void 0 : ev.width) ? ev.width : 0,
              Nv = hv(null == ev ? void 0 : ev.height) ? ev.height : 0,
              lv = hv(Pv.x) ? Pv.x : gv,
              Tv = hv(Pv.y) ? Pv.y : pv,
              Wv = dv / 2,
              wv = Nv / 2;
            Sv.edgeLabel.points = [{
              x: lv + Wv,
              y: Tv - wv
            }, {
              x: lv + Wv,
              y: Tv - wv
            }, {
              x: lv,
              y: Tv
            }, {
              x: lv - Wv,
              y: Tv + wv
            }, {
              x: lv - Wv,
              y: Tv + wv
            }, {
              x: lv,
              y: Tv
            }, {
              x: lv,
              y: Tv
            }], Sv.edgeLabel.x = lv, Sv.edgeLabel.y = Tv, vv.setEdge(Sv.e, Sv.edgeLabel), vv.removeNode(zv)
          } else Pv && Array.isArray(Pv.selfEdges) && Pv.selfEdges.forEach((vv => {
            if (!Array.isArray(vv.label.points) || 7 !== vv.label.points.length) {
              let zv = hv(Pv.x) ? Pv.x : 0,
                Sv = hv(Pv.y) ? Pv.y : 0,
                ev = (hv(Pv.width) ? Pv.width : 0) / 2,
                gv = (hv(Pv.height) ? Pv.height : 0) / 2;
              vv.label.points = [{
                x: zv + ev,
                y: Sv - gv
              }, {
                x: zv + ev,
                y: Sv - gv
              }, {
                x: zv,
                y: Sv
              }, {
                x: zv - ev,
                y: Sv + gv
              }, {
                x: zv - ev,
                y: Sv + gv
              }, {
                x: zv,
                y: Sv
              }, {
                x: zv,
                y: Sv
              }]
            }
          }))
        }))
      }(vv)));
      let Nv = JSON.parse(JSON.stringify(vv._nodes));
      return zv("    removeBorderNodes", (() => function(vv) {
        vv.nodes().forEach((zv => {
          if (vv.children(zv).length) {
            let Pv = vv.node(zv),
              hv = vv.node(Pv.borderTop),
              Sv = vv.node(Pv.borderBottom),
              ev = vv.node(Pv.borderLeft[Pv.borderLeft.length - 1]),
              gv = vv.node(Pv.borderRight[Pv.borderRight.length - 1]);
            Pv.width = Math.abs(gv.x - ev.x), Pv.height = Math.abs(Sv.y - hv.y), Pv.x = ev.x + Pv.width / 2, Pv.y = hv.y + Pv.height / 2
          }
        })), vv.nodes().forEach((zv => {
          "border" === vv.node(zv).dummy && vv.removeNode(zv)
        }))
      }(vv))), zv("    normalize.undo", (() => function(vv) {
        vv.graph().dummyChains.forEach((zv => {
          let Pv, hv = vv.node(zv),
            Sv = hv.edgeLabel;
          for (vv.setEdge(hv.edgeObj, Sv); hv.dummy;) Pv = vv.successors(zv)[0], vv.removeNode(zv), Sv.points.push({
            x: hv.x,
            y: hv.y
          }), "edge-label" === hv.dummy && (Sv.x = hv.x, Sv.y = hv.y, Sv.width = hv.width, Sv.height = hv.height), zv = Pv, hv = vv.node(zv)
        }))
      }(vv))), zv("    fixupEdgeLabelCoords", (() => function(vv) {
        vv.edges().forEach((zv => {
          let Pv = vv.edge(zv);
          if (Object.hasOwn(Pv, "x")) switch (("l" === Pv.labelpos || "r" === Pv.labelpos) && (Pv.width -= Pv.labeloffset), Pv.labelpos) {
            case "l":
              Pv.x -= Pv.width / 2 + Pv.labeloffset;
              break;
            case "r":
              Pv.x += Pv.width / 2 + Pv.labeloffset
          }
        }))
      }(vv))), zv("    undoCoordinateSystem", (() => Mz(vv))), zv("    translateGraph", (() => function(vv) {
        let zv = Number.POSITIVE_INFINITY,
          Pv = 0,
          hv = Number.POSITIVE_INFINITY,
          Sv = 0,
          ev = vv.graph(),
          gv = ev.marginx || 0,
          pv = ev.marginy || 0;

        function dv(vv) {
          let ev = vv.x,
            gv = vv.y,
            pv = vv.width,
            dv = vv.height;
          zv = Math.min(zv, ev - pv / 2), Pv = Math.max(Pv, ev + pv / 2), hv = Math.min(hv, gv - dv / 2), Sv = Math.max(Sv, gv + dv / 2)
        }
        vv.nodes().forEach((zv => dv(vv.node(zv)))), vv.edges().forEach((zv => {
          let Pv = vv.edge(zv);
          Object.hasOwn(Pv, "x") && dv(Pv)
        })), zv -= gv, hv -= pv, vv.nodes().forEach((Pv => {
          let Sv = vv.node(Pv);
          Sv.x -= zv, Sv.y -= hv
        })), vv.edges().forEach((Pv => {
          let Sv = vv.edge(Pv);
          Sv.points.forEach((vv => {
            vv.x -= zv, vv.y -= hv
          })), Object.hasOwn(Sv, "x") && (Sv.x -= zv), Object.hasOwn(Sv, "y") && (Sv.y -= hv)
        })), ev.width = Pv - zv + gv, ev.height = Sv - hv + pv
      }(vv))), zv("    assignNodeIntersects", (() => function(vv) {
        vv.edges().forEach((zv => {
          if (zv.v === zv.w) return;
          let Pv, hv, Sv = vv.edge(zv),
            ev = vv.node(zv.v),
            gv = vv.node(zv.w);
          Sv.points ? (Pv = Sv.points[0], hv = Sv.points[Sv.points.length - 1]) : (Sv.points = [], Pv = gv, hv = ev), Sv.points.unshift(yv(ev, Pv)), Sv.points.push(yv(gv, hv))
        }))
      }(vv))), zv("    reversePoints", (() => function(vv) {
        vv.edges().forEach((zv => {
          let Pv = vv.edge(zv);
          Pv.reversed && Pv.points.reverse()
        }))
      }(vv))), zv("    acyclic.undo", (() => function(vv) {
        vv.edges().forEach((zv => {
          let Pv = vv.edge(zv);
          if (Pv.reversed) {
            vv.removeEdge(zv);
            let hv = Pv.forwardName;
            delete Pv.reversed, delete Pv.forwardName, vv.setEdge(zv.w, zv.v, Pv, hv)
          }
        }))
      }(vv))), {
        graph: vv,
        rawNodes: Nv
      }
    }

    function iP(vv, zv) {
      vv.nodes().forEach((Pv => {
        let hv = vv.node(Pv),
          Sv = zv.node(Pv);
        hv && (hv.x = Sv.x, hv.y = Sv.y, hv.order = Sv.order, hv.rank = Sv.rank, zv.children(Pv).length && (hv.width = Sv.width, hv.height = Sv.height))
      })), vv.edges().forEach((Pv => {
        let hv = vv.edge(Pv),
          Sv = zv.edge(Pv);
        hv.points = Sv.points, Object.hasOwn(Sv, "x") && (hv.x = Sv.x, hv.y = Sv.y)
      })), vv.graph().width = zv.graph().width, vv.graph().height = zv.graph().height
    }
    var cP = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      GP = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      mP = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      jP = ["width", "height", "rank"],
      fP = {
        width: 0,
        height: 0
      },
      FP = ["minlen", "weight", "width", "height", "labeloffset"],
      YP = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      nP = ["labelpos"];

    function OP(vv) {
      let zv = new Lv({
          multigraph: !0,
          compound: !0
        }),
        Pv = KP(vv.graph());
      return zv.setGraph(Object.assign({}, GP, DP(Pv, cP), zz(Pv, mP))), vv.nodes().forEach((Pv => {
        let hv = DP(KP(vv.node(Pv)), jP);
        Object.keys(fP).forEach((vv => {
          void 0 === hv[vv] && (hv[vv] = fP[vv])
        })), zv.setNode(Pv, hv);
        let Sv = vv.parent(Pv);
        void 0 !== Sv && zv.setParent(Pv, Sv)
      })), vv.edges().forEach((Pv => {
        let hv = KP(vv.edge(Pv));
        zv.setEdge(Pv, Object.assign({}, YP, DP(hv, FP), zz(hv, nP)))
      })), zv
    }

    function DP(vv, zv) {
      return Pz(zz(vv, zv), Number)
    }

    function KP(vv) {
      let zv = {};
      return vv && Object.entries(vv).forEach((vv => {
        let [Pv, hv] = vv;
        "string" == typeof Pv && (Pv = Pv.toLowerCase()), zv[Pv] = hv
      })), zv
    }

    function VP(vv) {
      let zv = Bv(vv),
        Pv = new Lv({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return vv.nodes().forEach((zv => {
        Pv.setNode(zv, {
          label: zv
        }), Pv.setParent(zv, "layer" + vv.node(zv).rank)
      })), vv.edges().forEach((vv => Pv.setEdge(vv.v, vv.w, {}, vv.name))), zv.forEach(((vv, zv) => {
        let hv = "layer" + zv;
        Pv.setNode(hv, {
          rank: "same"
        }), vv.reduce(((vv, zv) => (Pv.setEdge(vv, zv, {
          style: "invis"
        }), zv)))
      })), Pv
    }
    var UP = {
        time: rv,
        notime: kv
      },
      RP = {
        graphlib: ev,
        version: ez,
        layout: wP,
        debug: VP,
        util: {
          time: rv,
          notime: kv
        }
      }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);