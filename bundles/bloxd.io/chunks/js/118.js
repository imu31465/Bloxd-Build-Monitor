/*! For license information please see mpd96o.118.dd7c15f0.chunk.js.LICENSE.txt */
export const id = 118;
export const ids = [118];
export const modules = {
  6427: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      Graph: () => sm,
      debug: () => Gf,
      default: () => Pf,
      graphlib: () => am,
      layout: () => Yf,
      util: () => Xf,
      version: () => xT
    });
    var hm = Object.defineProperty,
      Am = (mm, Tm, fm) => ((mm, Tm, fm) => Tm in mm ? hm(mm, Tm, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: fm
      }) : mm[Tm] = fm)(mm, "symbol" != typeof Tm ? Tm + "" : Tm, fm),
      am = {};
    ((mm, Tm) => {
      for (var fm in Tm) hm(mm, fm, {
        get: Tm[fm],
        enumerable: !0
      })
    })(am, {
      Graph: () => sm,
      alg: () => jm
    });
    var xm = Object.defineProperty,
      wm = (mm, Tm) => {
        for (var fm in Tm) xm(mm, fm, {
          get: Tm[fm],
          enumerable: !0
        })
      },
      Dm = class {
        constructor(mm) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, mm && (this._isDirected = !("directed" in mm) || mm.directed, this._isMultigraph = "multigraph" in mm && mm.multigraph, this._isCompound = "compound" in mm && mm.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(mm) {
          return this._label = mm, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(mm) {
          return this._defaultNodeLabelFn = "function" != typeof mm ? () => mm : mm, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((mm => 0 === Object.keys(this._in[mm]).length))
        }
        sinks() {
          return this.nodes().filter((mm => 0 === Object.keys(this._out[mm]).length))
        }
        setNodes(mm, Tm) {
          return mm.forEach((mm => {
            void 0 !== Tm ? this.setNode(mm, Tm) : this.setNode(mm)
          })), this
        }
        setNode(mm, Tm) {
          return mm in this._nodes ? (arguments.length > 1 && (this._nodes[mm] = Tm), this) : (this._nodes[mm] = arguments.length > 1 ? Tm : this._defaultNodeLabelFn(mm), this._isCompound && (this._parent[mm] = "\0", this._children[mm] = {}, this._children["\0"][mm] = !0), this._in[mm] = {}, this._preds[mm] = {}, this._out[mm] = {}, this._sucs[mm] = {}, ++this._nodeCount, this)
        }
        node(mm) {
          return this._nodes[mm]
        }
        hasNode(mm) {
          return mm in this._nodes
        }
        removeNode(mm) {
          if (mm in this._nodes) {
            let Tm = mm => this.removeEdge(this._edgeObjs[mm]);
            delete this._nodes[mm], this._isCompound && (this._removeFromParentsChildList(mm), delete this._parent[mm], this.children(mm).forEach((mm => {
              this.setParent(mm)
            })), delete this._children[mm]), Object.keys(this._in[mm]).forEach(Tm), delete this._in[mm], delete this._preds[mm], Object.keys(this._out[mm]).forEach(Tm), delete this._out[mm], delete this._sucs[mm], --this._nodeCount
          }
          return this
        }
        setParent(mm, Tm) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === Tm) Tm = "\0";
          else {
            for (let fm = Tm += ""; void 0 !== fm; fm = this.parent(fm))
              if (fm === mm) throw new Error("Setting " + Tm + " as parent of " + mm + " would create a cycle");
            this.setNode(Tm)
          }
          return this.setNode(mm), this._removeFromParentsChildList(mm), this._parent[mm] = Tm, this._children[Tm][mm] = !0, this
        }
        parent(mm) {
          if (this._isCompound) {
            let Tm = this._parent[mm];
            if ("\0" !== Tm) return Tm
          }
        }
        children() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let Tm = this._children[mm];
            if (Tm) return Object.keys(Tm)
          } else {
            if ("\0" === mm) return this.nodes();
            if (this.hasNode(mm)) return []
          }
          return []
        }
        predecessors(mm) {
          let Tm = this._preds[mm];
          if (Tm) return Object.keys(Tm)
        }
        successors(mm) {
          let Tm = this._sucs[mm];
          if (Tm) return Object.keys(Tm)
        }
        neighbors(mm) {
          let Tm = this.predecessors(mm);
          if (Tm) {
            let fm = new Set(Tm),
              hm = this.successors(mm);
            if (hm)
              for (let mm of hm) fm.add(mm);
            return Array.from(fm.values())
          }
        }
        isLeaf(mm) {
          var Tm;
          let fm;
          return fm = this.isDirected() ? this.successors(mm) : this.neighbors(mm), 0 === (null != (Tm = null == fm ? void 0 : fm.length) ? Tm : 0)
        }
        filterNodes(mm) {
          let Tm = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Tm.setGraph(this.graph()), Object.entries(this._nodes).forEach((fm => {
            let [hm, Am] = fm;
            mm(hm) && Tm.setNode(hm, Am)
          })), Object.values(this._edgeObjs).forEach((mm => {
            Tm.hasNode(mm.v) && Tm.hasNode(mm.w) && Tm.setEdge(mm, this.edge(mm))
          }));
          let fm = {},
            hm = mm => {
              let Am = this.parent(mm);
              return !Am || Tm.hasNode(Am) ? (fm[mm] = Am, Am) : Am in fm ? fm[Am] : hm(Am)
            };
          return this._isCompound && Tm.nodes().forEach((mm => Tm.setParent(mm, hm(mm)))), Tm
        }
        setDefaultEdgeLabel(mm) {
          return this._defaultEdgeLabelFn = "function" != typeof mm ? () => mm : mm, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(mm, Tm) {
          return mm.reduce(((mm, fm) => (void 0 !== Tm ? this.setEdge(mm, fm, Tm) : this.setEdge(mm, fm), fm))), this
        }
        setEdge(mm, Tm, fm, hm) {
          let Am, am, xm, wm, Dm = !1;
          "object" == typeof mm && null !== mm && "v" in mm ? (Am = mm.v, am = mm.w, xm = mm.name, 2 === arguments.length && (wm = Tm, Dm = !0)) : (Am = mm, am = Tm, xm = hm, arguments.length > 2 && (wm = fm, Dm = !0)), Am = "" + Am, am = "" + am, void 0 !== xm && (xm = "" + xm);
          let Rm = pm(this._isDirected, Am, am, xm);
          if (Rm in this._edgeLabels) return Dm && (this._edgeLabels[Rm] = wm), this;
          if (void 0 !== xm && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Am), this.setNode(am), this._edgeLabels[Rm] = Dm ? wm : this._defaultEdgeLabelFn(Am, am, xm);
          let Em = function(mm, Tm, fm, hm) {
            let Am = "" + Tm,
              am = "" + fm;
            if (!mm && Am > am) {
              let mm = Am;
              Am = am, am = mm
            }
            let xm = {
              v: Am,
              w: am
            };
            return hm && (xm.name = hm), xm
          }(this._isDirected, Am, am, xm);
          return Am = Em.v, am = Em.w, Object.freeze(Em), this._edgeObjs[Rm] = Em, im(this._preds[am], Am), im(this._sucs[Am], am), this._in[am][Rm] = Em, this._out[Am][Rm] = Em, this._edgeCount++, this
        }
        edge(mm, Tm, fm) {
          let hm = 1 === arguments.length ? Em(this._isDirected, mm) : pm(this._isDirected, mm, Tm, fm);
          return this._edgeLabels[hm]
        }
        edgeAsObj(mm, Tm, fm) {
          let hm = 1 === arguments.length ? this.edge(mm) : this.edge(mm, Tm, fm);
          return "object" != typeof hm || null === hm ? {
            label: hm
          } : hm
        }
        hasEdge(mm, Tm, fm) {
          return (1 === arguments.length ? Em(this._isDirected, mm) : pm(this._isDirected, mm, Tm, fm)) in this._edgeLabels
        }
        removeEdge(mm, Tm, fm) {
          let hm = 1 === arguments.length ? Em(this._isDirected, mm) : pm(this._isDirected, mm, Tm, fm),
            Am = this._edgeObjs[hm];
          if (Am) {
            let mm = Am.v,
              Tm = Am.w;
            delete this._edgeLabels[hm], delete this._edgeObjs[hm], Rm(this._preds[Tm], mm), Rm(this._sucs[mm], Tm), delete this._in[Tm][hm], delete this._out[mm][hm], this._edgeCount--
          }
          return this
        }
        inEdges(mm, Tm) {
          return this.isDirected() ? this.filterEdges(this._in[mm], mm, Tm) : this.nodeEdges(mm, Tm)
        }
        outEdges(mm, Tm) {
          return this.isDirected() ? this.filterEdges(this._out[mm], mm, Tm) : this.nodeEdges(mm, Tm)
        }
        nodeEdges(mm, Tm) {
          if (mm in this._nodes) return this.filterEdges({
            ...this._in[mm],
            ...this._out[mm]
          }, mm, Tm)
        }
        _removeFromParentsChildList(mm) {
          delete this._children[this._parent[mm]][mm]
        }
        filterEdges(mm, Tm, fm) {
          if (!mm) return;
          let hm = Object.values(mm);
          return fm ? hm.filter((mm => mm.v === Tm && mm.w === fm || mm.v === fm && mm.w === Tm)) : hm
        }
      };

    function im(mm, Tm) {
      mm[Tm] ? mm[Tm]++ : mm[Tm] = 1
    }

    function Rm(mm, Tm) {
      void 0 !== mm[Tm] && !--mm[Tm] && delete mm[Tm]
    }

    function pm(mm, Tm, fm, hm) {
      let Am = "" + Tm,
        am = "" + fm;
      if (!mm && Am > am) {
        let mm = Am;
        Am = am, am = mm
      }
      return Am + "\x01" + am + "\x01" + (void 0 === hm ? "\0" : hm)
    }

    function Em(mm, Tm) {
      return pm(mm, Tm.v, Tm.w, Tm.name)
    }

    function om(mm) {
      let Tm = {
          options: {
            directed: mm.isDirected(),
            multigraph: mm.isMultigraph(),
            compound: mm.isCompound()
          },
          nodes: Om(mm),
          edges: Ym(mm)
        },
        fm = mm.graph();
      return void 0 !== fm && (Tm.value = structuredClone(fm)), Tm
    }

    function Om(mm) {
      return mm.nodes().map((Tm => {
        let fm = mm.node(Tm),
          hm = mm.parent(Tm),
          Am = {
            v: Tm
          };
        return void 0 !== fm && (Am.value = fm), void 0 !== hm && (Am.parent = hm), Am
      }))
    }

    function Ym(mm) {
      return mm.edges().map((Tm => {
        let fm = mm.edge(Tm),
          hm = {
            v: Tm.v,
            w: Tm.w
          };
        return void 0 !== Tm.name && (hm.name = Tm.name), void 0 !== fm && (hm.value = fm), hm
      }))
    }

    function qm(mm) {
      let Tm = new Dm(mm.options);
      return void 0 !== mm.value && Tm.setGraph(mm.value), mm.nodes.forEach((mm => {
        Tm.setNode(mm.v, mm.value), mm.parent && Tm.setParent(mm.v, mm.parent)
      })), mm.edges.forEach((mm => {
        Tm.setEdge({
          v: mm.v,
          w: mm.w,
          name: mm.name
        }, mm.value)
      })), Tm
    }
    wm({}, {
      read: () => qm,
      write: () => om
    });
    var jm = {};
    wm(jm, {
      CycleException: () => Sm,
      bellmanFord: () => Im,
      components: () => Km,
      dijkstra: () => Jm,
      dijkstraAll: () => cm,
      findCycles: () => Zm,
      floydWarshall: () => bm,
      isAcyclic: () => Nm,
      postorder: () => Hm,
      preorder: () => ym,
      prim: () => Cm,
      shortestPaths: () => rm,
      tarjan: () => zm,
      topsort: () => em
    });
    var Vm = () => 1;

    function Im(mm, Tm, fm, hm) {
      return function(mm, Tm, fm, hm) {
        let Am, am = {},
          xm = 0,
          wm = mm.nodes(),
          Dm = function(mm) {
            let Tm = am[mm.v],
              hm = am[mm.w];
            if (!Tm || !hm) return;
            let xm = fm(mm);
            Tm.distance + xm < hm.distance && (am[mm.w] = {
              distance: Tm.distance + xm,
              predecessor: mm.v
            }, Am = !0)
          },
          im = function() {
            wm.forEach((function(mm) {
              hm(mm).forEach((function(Tm) {
                let fm = Tm.v === mm ? Tm.v : Tm.w,
                  hm = fm === Tm.v ? Tm.w : Tm.v;
                Dm({
                  v: fm,
                  w: hm
                })
              }))
            }))
          };
        wm.forEach((function(mm) {
          let fm = mm === Tm ? 0 : Number.POSITIVE_INFINITY;
          am[mm] = {
            distance: fm,
            predecessor: ""
          }
        }));
        let Rm = wm.length;
        for (let pm = 1; pm < Rm && (Am = !1, xm++, im(), Am); pm++);
        if (xm === Rm - 1 && (Am = !1, im(), Am)) throw new Error("The graph contains a negative weight cycle");
        return am
      }(mm, String(Tm), fm || Vm, hm || function(Tm) {
        var fm;
        return null != (fm = mm.outEdges(Tm)) ? fm : []
      })
    }

    function Km(mm) {
      let Tm, fm = {},
        hm = [];

      function Am(hm) {
        var am, xm;
        hm in fm || (fm[hm] = !0, Tm.push(hm), null == (am = mm.successors(hm)) || am.forEach(Am), null == (xm = mm.predecessors(hm)) || xm.forEach(Am))
      }
      return mm.nodes().forEach((function(mm) {
        Tm = [], Am(mm), Tm.length && hm.push(Tm)
      })), hm
    }
    var Qm = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((mm => mm.key))
        }
        has(mm) {
          return mm in this._keyIndices
        }
        priority(mm) {
          let Tm = this._keyIndices[mm];
          if (void 0 !== Tm) return this._arr[Tm].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(mm, Tm) {
          let fm = this._keyIndices,
            hm = String(mm);
          if (!(hm in fm)) {
            let mm = this._arr,
              Am = mm.length;
            return fm[hm] = Am, mm.push({
              key: hm,
              priority: Tm
            }), this._decrease(Am), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let mm = this._arr.pop();
          return delete this._keyIndices[mm.key], this._heapify(0), mm.key
        }
        decrease(mm, Tm) {
          let fm = this._keyIndices[mm];
          if (void 0 === fm) throw new Error(`Key not found: ${mm}`);
          let hm = this._arr[fm].priority;
          if (Tm > hm) throw new Error(`New priority is greater than current priority. Key: ${mm} Old: ${hm} New: ${Tm}`);
          this._arr[fm].priority = Tm, this._decrease(fm)
        }
        _heapify(mm) {
          let Tm = this._arr,
            fm = 2 * mm,
            hm = fm + 1,
            Am = mm;
          fm < Tm.length && (Am = Tm[fm].priority < Tm[Am].priority ? fm : Am, hm < Tm.length && (Am = Tm[hm].priority < Tm[Am].priority ? hm : Am), Am !== mm && (this._swap(mm, Am), this._heapify(Am)))
        }
        _decrease(mm) {
          let Tm, fm = this._arr,
            hm = fm[mm].priority;
          for (; 0 !== mm && (Tm = mm >> 1, !(fm[Tm].priority < hm));) this._swap(mm, Tm), mm = Tm
        }
        _swap(mm, Tm) {
          let fm = this._arr,
            hm = this._keyIndices,
            Am = fm[mm],
            am = fm[Tm];
          fm[mm] = am, fm[Tm] = Am, hm[am.key] = mm, hm[Am.key] = Tm
        }
      },
      nm = () => 1;

    function Jm(mm, Tm, fm, hm) {
      return function(mm, Tm, fm, hm) {
        let Am, am, xm = {},
          wm = new Qm,
          Dm = function(mm) {
            let Tm = mm.v !== Am ? mm.v : mm.w,
              hm = xm[Tm];
            if (!hm) return;
            let Dm = fm(mm),
              im = am.distance + Dm;
            if (Dm < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + mm + " Weight: " + Dm);
            im < hm.distance && (hm.distance = im, hm.predecessor = Am, wm.decrease(Tm, im))
          };
        for (mm.nodes().forEach((function(mm) {
            let fm = mm === Tm ? 0 : Number.POSITIVE_INFINITY;
            xm[mm] = {
              distance: fm,
              predecessor: ""
            }, wm.add(mm, fm)
          })); wm.size() > 0;) {
          Am = wm.removeMin();
          let mm = xm[Am];
          if (!mm || mm.distance === Number.POSITIVE_INFINITY) break;
          am = mm, hm(Am).forEach(Dm)
        }
        return xm
      }(mm, String(Tm), fm || nm, hm || function(Tm) {
        var fm;
        return null != (fm = mm.outEdges(Tm)) ? fm : []
      })
    }

    function cm(mm, Tm, fm) {
      return mm.nodes().reduce((function(hm, Am) {
        return hm[Am] = Jm(mm, Am, Tm, fm), hm
      }), {})
    }

    function zm(mm) {
      let Tm = 0,
        fm = [],
        hm = {},
        Am = [];

      function am(xm) {
        var wm;
        let Dm = hm[xm] = {
          onStack: !0,
          lowlink: Tm,
          index: Tm++
        };
        if (fm.push(xm), null == (wm = mm.successors(xm)) || wm.forEach((function(mm) {
            if (mm in hm) {
              let Tm = hm[mm];
              null != Tm && Tm.onStack && (Dm.lowlink = Math.min(Dm.lowlink, Tm.index))
            } else {
              am(mm);
              let Tm = hm[mm];
              Tm && (Dm.lowlink = Math.min(Dm.lowlink, Tm.lowlink))
            }
          })), Dm.lowlink === Dm.index) {
          let mm, Tm = [];
          do {
            mm = fm.pop();
            let Am = hm[mm];
            Am && (Am.onStack = !1), Tm.push(mm)
          } while (xm !== mm);
          Am.push(Tm)
        }
      }
      return mm.nodes().forEach((function(mm) {
        mm in hm || am(mm)
      })), Am
    }

    function Zm(mm) {
      return zm(mm).filter((function(Tm) {
        var fm;
        let hm = Tm[0];
        return !!hm && (Tm.length > 1 || 1 === Tm.length && (null != (fm = mm.outEdges(hm, hm)) ? fm : []).length > 0)
      }))
    }
    var km = () => 1;

    function bm(mm, Tm, fm) {
      return function(mm, Tm, fm) {
        let hm = {},
          Am = mm.nodes();
        return Am.forEach((function(mm) {
          let am = {};
          hm[mm] = am, am[mm] = {
            distance: 0,
            predecessor: ""
          }, Am.forEach((function(Tm) {
            mm !== Tm && (am[Tm] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), fm(mm).forEach((function(fm) {
            let hm = fm.v === mm ? fm.w : fm.v,
              Am = Tm(fm);
            am[hm] = {
              distance: Am,
              predecessor: mm
            }
          }))
        })), Am.forEach((function(mm) {
          let Tm = hm[mm];
          Tm && Am.forEach((function(fm) {
            let am = hm[fm];
            am && Am.forEach((function(fm) {
              let hm = am[mm],
                Am = Tm[fm],
                xm = am[fm];
              if (hm && Am && xm) {
                let mm = hm.distance + Am.distance;
                mm < xm.distance && (xm.distance = mm, xm.predecessor = Am.predecessor)
              }
            }))
          }))
        })), hm
      }(mm, Tm || km, fm || function(Tm) {
        var fm;
        return null != (fm = mm.outEdges(Tm)) ? fm : []
      })
    }
    var Sm = class extends Error {
      constructor(mm) {
        super(mm), this.name = "CycleException"
      }
    };

    function em(mm) {
      let Tm = {},
        fm = {},
        hm = [];
      if (mm.sinks().forEach((function Am(am) {
          var xm;
          if (am in fm) throw new Sm;
          am in Tm || (fm[am] = !0, Tm[am] = !0, null == (xm = mm.predecessors(am)) || xm.forEach(Am), delete fm[am], hm.push(am))
        })), Object.keys(Tm).length !== mm.nodeCount()) throw new Sm;
      return hm
    }

    function Nm(mm) {
      try {
        em(mm)
      } catch (Tm) {
        if (Tm instanceof Sm) return !1;
        throw Tm
      }
      return !0
    }

    function Gm(mm, Tm, fm, hm, Am) {
      Array.isArray(Tm) || (Tm = [Tm]);
      let am = Tm => {
          var fm;
          return null != (fm = mm.isDirected() ? mm.successors(Tm) : mm.neighbors(Tm)) ? fm : []
        },
        xm = {};
      return Tm.forEach((function(Tm) {
        if (!mm.hasNode(Tm)) throw new Error("Graph does not have node: " + Tm);
        Am = Xm(mm, Tm, "post" === fm, xm, am, hm, Am)
      })), Am
    }

    function Xm(mm, Tm, fm, hm, Am, am, xm) {
      return Tm in hm || (hm[Tm] = !0, fm || (xm = am(xm, Tm)), Am(Tm).forEach((function(Tm) {
        xm = Xm(mm, Tm, fm, hm, Am, am, xm)
      })), fm && (xm = am(xm, Tm))), xm
    }

    function Pm(mm, Tm, fm) {
      return Gm(mm, Tm, fm, (function(mm, Tm) {
        return mm.push(Tm), mm
      }), [])
    }

    function Hm(mm, Tm) {
      return Pm(mm, Tm, "post")
    }

    function ym(mm, Tm) {
      return Pm(mm, Tm, "pre")
    }

    function Cm(mm, Tm) {
      var fm;
      let hm, Am = new Dm,
        am = {},
        xm = new Qm;

      function wm(mm) {
        let fm = mm.v === hm ? mm.w : mm.v,
          Am = xm.priority(fm);
        if (void 0 !== Am) {
          let wm = Tm(mm);
          wm < Am && (am[fm] = hm, xm.decrease(fm, wm))
        }
      }
      if (0 === mm.nodeCount()) return Am;
      mm.nodes().forEach((function(mm) {
        xm.add(mm, Number.POSITIVE_INFINITY), Am.setNode(mm)
      }));
      let im = mm.nodes()[0];
      void 0 !== im && xm.decrease(im, 0);
      let Rm = !1;
      for (; xm.size() > 0;) {
        if (hm = xm.removeMin(), hm in am) Am.setEdge(hm, am[hm]);
        else {
          if (Rm) throw new Error("Input graph is not connected: " + mm);
          Rm = !0
        }
        null == (fm = mm.nodeEdges(hm)) || fm.forEach(wm)
      }
      return Am
    }

    function rm(mm, Tm, fm, hm) {
      return function(mm, Tm, fm, hm) {
        if (void 0 === fm) return Jm(mm, Tm, fm, hm);
        let Am = !1,
          am = mm.nodes();
        for (let xm = 0; xm < am.length; xm++) {
          let wm = am[xm];
          if (void 0 === wm) continue;
          let Dm = hm(wm);
          for (let mm = 0; mm < Dm.length; mm++) {
            let Tm = Dm[mm];
            if (!Tm) continue;
            let hm = Tm.v === wm ? Tm.v : Tm.w;
            fm({
              v: hm,
              w: hm === Tm.v ? Tm.w : Tm.v
            }) < 0 && (Am = !0)
          }
          if (Am) return Im(mm, Tm, fm, hm)
        }
        return Jm(mm, Tm, fm, hm)
      }(mm, Tm, fm, null != hm ? hm : Tm => {
        var fm;
        return null != (fm = mm.outEdges(Tm)) ? fm : []
      })
    }
    var sm = Dm;

    function lm(mm, Tm, fm, hm) {
      let Am = hm;
      for (; mm.hasNode(Am);) Am = mT(hm);
      return fm.dummy = Tm, mm.setNode(Am, fm), Am
    }

    function Mm(mm) {
      let Tm = new sm({
        multigraph: mm.isMultigraph()
      }).setGraph(mm.graph());
      return mm.nodes().forEach((fm => {
        mm.children(fm).length || Tm.setNode(fm, mm.node(fm))
      })), mm.edges().forEach((fm => {
        Tm.setEdge(fm, mm.edge(fm))
      })), Tm
    }

    function um(mm, Tm) {
      let fm, hm, Am = mm.x,
        am = mm.y,
        xm = Tm.x - Am,
        wm = Tm.y - am,
        Dm = mm.width / 2,
        im = mm.height / 2;
      if (!xm && !wm) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(wm) * Dm > Math.abs(xm) * im ? (wm < 0 && (im = -im), fm = im * xm / wm, hm = im) : (xm < 0 && (Dm = -Dm), fm = Dm, hm = Dm * wm / xm), {
        x: Am + fm,
        y: am + hm
      }
    }

    function Bm(mm) {
      let Tm = TT(dm(mm) + 1).map((() => []));
      return mm.nodes().forEach((fm => {
        let hm = mm.node(fm),
          Am = hm.rank;
        void 0 !== Am && (Tm[Am] || (Tm[Am] = []), Tm[Am][hm.order] = fm)
      })), Tm
    }

    function Lm(mm, Tm, fm, hm) {
      let Am = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Am.rank = fm, Am.order = hm), lm(mm, "border", Am, Tm)
    }
    var tm = 65535;

    function Um(mm, Tm) {
      if (Tm.length > tm) {
        let fm = function(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tm,
            fm = [];
          for (let hm = 0; hm < mm.length; hm += Tm) {
            let Am = mm.slice(hm, hm + Tm);
            fm.push(Am)
          }
          return fm
        }(Tm);
        return mm(...fm.map((Tm => mm(...Tm))))
      }
      return mm(...Tm)
    }

    function dm(mm) {
      let Tm = mm.nodes().map((Tm => {
        let fm = mm.node(Tm).rank;
        return void 0 === fm ? Number.MIN_VALUE : fm
      }));
      return Um(Math.max, Tm)
    }

    function gm(mm, Tm) {
      let fm = Date.now();
      try {
        return Tm()
      } finally {
        console.log(mm + " time: " + (Date.now() - fm) + "ms")
      }
    }

    function Wm(mm, Tm) {
      return Tm()
    }
    var Fm = 0;

    function mT(mm) {
      return mm + "" + ++Fm
    }

    function TT(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Tm && (Tm = mm, mm = 0);
      let hm = mm => mm < Tm;
      fm < 0 && (hm = mm => Tm < mm);
      let Am = [];
      for (let am = mm; hm(am); am += fm) Am.push(am);
      return Am
    }

    function fT(mm, Tm) {
      let fm = {};
      for (let hm of Tm) void 0 !== mm[hm] && (fm[hm] = mm[hm]);
      return fm
    }

    function hT(mm, Tm) {
      let fm;
      return fm = "string" == typeof Tm ? mm => mm[Tm] : Tm, Object.entries(mm).reduce(((mm, Tm) => {
        let [hm, Am] = Tm;
        return mm[hm] = fm(Am, hm), mm
      }), {})
    }
    var AT = "\0";

    function aT(mm, Tm, fm) {
      var hm, Am, am, xm, wm, Dm;
      if (!(mm && Tm && fm && "edge" === Tm.dummy && "edge" === fm.dummy && Tm.edgeObj && fm.edgeObj && mm[Tm.edgeObj.v] && mm[fm.edgeObj.v] && mm[Tm.edgeObj.w] && mm[fm.edgeObj.w])) return 0;
      let im = !0;
      Tm.edgeObj.w === fm.edgeObj.w && (im = !1);
      let Rm = im ? null != (Am = null == (hm = mm[Tm.edgeObj.v]) ? void 0 : hm.rank) ? Am : NaN : null != (xm = null == (am = mm[Tm.edgeObj.w]) ? void 0 : am.rank) ? xm : NaN,
        pm = Object.entries(mm).find((mm => {
          var fm, hm;
          return (null == (fm = mm[1].edgeObj) ? void 0 : fm.v) === Tm.edgeObj.v && (null == (hm = mm[1].edgeObj) ? void 0 : hm.w) === Tm.edgeObj.w && mm[1].rank === Rm
        })),
        Em = Object.entries(mm).find((mm => {
          var Tm, hm;
          return (null == (Tm = mm[1].edgeObj) ? void 0 : Tm.v) === fm.edgeObj.v && (null == (hm = mm[1].edgeObj) ? void 0 : hm.w) === fm.edgeObj.w && mm[1].rank === Rm
        }));
      if (!pm || !Em) return 0;
      let om = null != (wm = pm[1].order) ? wm : NaN,
        Om = null != (Dm = Em[1].order) ? Dm : NaN;
      return isNaN(om - Om) ? 0 : om - Om
    }
    var xT = "3.1.1";

    function wT(mm) {
      mm._prev._next = mm._next, mm._next._prev = mm._prev, delete mm._next, delete mm._prev
    }

    function DT(mm, Tm) {
      if ("_next" !== mm && "_prev" !== mm) return Tm
    }
    var iT = class {
        constructor() {
          Am(this, "_sentinel");
          let mm = {};
          mm._next = mm._prev = mm, this._sentinel = mm
        }
        dequeue() {
          let mm = this._sentinel,
            Tm = mm._prev;
          if (Tm !== mm) return wT(Tm), Tm
        }
        enqueue(mm) {
          let Tm = this._sentinel;
          mm._prev && mm._next && wT(mm), mm._next = Tm._next, Tm._next._prev = mm, Tm._next = mm, mm._prev = Tm
        }
        toString() {
          let mm = [],
            Tm = this._sentinel,
            fm = Tm._prev;
          for (; fm !== Tm;) mm.push(JSON.stringify(fm, DT)), fm = fm._prev;
          return "[" + mm.join(", ") + "]"
        }
      },
      RT = () => 1;

    function pT(mm, Tm) {
      if (mm.nodeCount() <= 1) return [];
      let fm = function(mm, Tm) {
        let fm = new sm,
          hm = 0,
          Am = 0;
        mm.nodes().forEach((mm => {
          fm.setNode(mm, {
            v: mm,
            in: 0,
            out: 0
          })
        })), mm.edges().forEach((mm => {
          let am = fm.edge(mm.v, mm.w) || 0,
            xm = Tm(mm),
            wm = am + xm;
          fm.setEdge(mm.v, mm.w, wm);
          let Dm = fm.node(mm.v),
            im = fm.node(mm.w);
          Am = Math.max(Am, Dm.out += xm), hm = Math.max(hm, im.in += xm)
        }));
        let am = function(mm) {
            let Tm = [];
            for (let fm = 0; fm < mm; fm++) Tm.push(fm);
            return Tm
          }(Am + hm + 3).map((() => new iT)),
          xm = hm + 1;
        return fm.nodes().forEach((mm => {
          oT(am, xm, fm.node(mm))
        })), {
          graph: fm,
          buckets: am,
          zeroIdx: xm
        }
      }(mm, Tm || RT);
      return function(mm, Tm, fm) {
        var hm;
        let Am, am = [],
          xm = Tm[Tm.length - 1],
          wm = Tm[0];
        for (; mm.nodeCount();) {
          for (; Am = wm.dequeue();) ET(mm, Tm, fm, Am);
          for (; Am = xm.dequeue();) ET(mm, Tm, fm, Am);
          if (mm.nodeCount())
            for (let xm = Tm.length - 2; xm > 0; --xm)
              if (Am = null == (hm = Tm[xm]) ? void 0 : hm.dequeue(), Am) {
                am = am.concat(ET(mm, Tm, fm, Am, !0) || []);
                break
              }
        }
        return am
      }(fm.graph, fm.buckets, fm.zeroIdx).flatMap((Tm => mm.outEdges(Tm.v, Tm.w) || []))
    }

    function ET(mm, Tm, fm, hm, Am) {
      let am = [],
        xm = Am ? am : void 0;
      return (mm.inEdges(hm.v) || []).forEach((hm => {
        let xm = mm.edge(hm),
          wm = mm.node(hm.v);
        Am && am.push({
          v: hm.v,
          w: hm.w
        }), wm.out -= xm, oT(Tm, fm, wm)
      })), (mm.outEdges(hm.v) || []).forEach((hm => {
        let Am = mm.edge(hm),
          am = hm.w,
          xm = mm.node(am);
        xm.in -= Am, oT(Tm, fm, xm)
      })), mm.removeNode(hm.v), xm
    }

    function oT(mm, Tm, fm) {
      var hm, Am, am;
      fm.out ? fm.in ? null == (am = mm[fm.out - fm.in + Tm]) || am.enqueue(fm) : null == (Am = mm[mm.length - 1]) || Am.enqueue(fm) : null == (hm = mm[0]) || hm.enqueue(fm)
    }

    function OT(mm, Tm) {
      var fm;
      ("greedy" === mm.graph().acyclicer ? pT(mm, (fm = mm, mm => fm.edge(mm).weight)) : function(mm, Tm) {
        let fm = [],
          hm = {},
          Am = {};

        function am(Tm) {
          Object.hasOwn(Am, Tm) || (Am[Tm] = !0, hm[Tm] = !0, mm.outEdges(Tm).forEach((mm => {
            Object.hasOwn(hm, mm.w) ? fm.push(mm) : am(mm.w)
          })), delete hm[Tm])
        }

        function xm(am) {
          var wm;
          Object.hasOwn(Am, am) || (Am[am] = !0, hm[am] = !0, null == (wm = mm.outEdges(am)) || wm.forEach((Am => {
            var wm, Dm;
            Object.hasOwn(hm, Am.w) || (null == (wm = Tm.node(am)) ? void 0 : wm.rank) > (null == (Dm = Tm.node(Am.w)) ? void 0 : Dm.rank) && function(mm, Tm, fm) {
              let hm = new Set;

              function Am(Tm) {
                var am;
                if (mm.sources().includes(Tm)) return !0;
                hm.add(Tm);
                for (let xm of null != (am = mm.inEdges(Tm)) ? am : [])
                  if ((xm.v !== fm.v || xm.w !== fm.w) && !hm.has(xm.v) && Am(xm.v)) return !0;
                return !1
              }
              return Am(Tm)
            }(mm, Am.w, Am) ? fm.push(Am) : xm(Am.w)
          })), delete hm[am])
        }
        let wm = am;
        return Tm && "function" == typeof Tm.node && (wm = xm), mm.sources().forEach(wm), mm.nodes().forEach(wm), fm
      }(mm, null != Tm ? Tm : null)).forEach((Tm => {
        let fm = mm.edge(Tm);
        mm.removeEdge(Tm), fm.forwardName = Tm.name, fm.reversed = !0, mm.setEdge(Tm.w, Tm.v, fm, mT("rev"))
      }))
    }

    function YT(mm) {
      mm.graph().dummyChains = [], mm.edges().forEach((Tm => function(mm, Tm) {
        let fm, hm, Am, am = Tm.v,
          xm = mm.node(am).rank,
          wm = Tm.w,
          Dm = mm.node(wm).rank,
          im = Tm.name,
          Rm = mm.edge(Tm),
          pm = Rm.labelRank;
        if (Dm === xm + 1) return;
        for (mm.removeEdge(Tm), Am = 0, ++xm; xm < Dm; ++Am, ++xm) Rm.points = [], hm = {
          width: 0,
          height: 0,
          edgeLabel: Rm,
          edgeObj: Tm,
          rank: xm
        }, fm = lm(mm, "edge", hm, "_d"), xm === pm && (hm.width = Rm.width, hm.height = Rm.height, hm.dummy = "edge-label", hm.labelpos = Rm.labelpos), mm.setEdge(am, fm, {
          weight: Rm.weight
        }, im), 0 === Am && mm.graph().dummyChains.push(fm), am = fm;
        mm.setEdge(am, wm, {
          weight: Rm.weight
        }, im)
      }(mm, Tm)))
    }

    function qT(mm) {
      let Tm = {};
      mm.sources().forEach((function fm(hm) {
        let Am = mm.node(hm);
        if (Object.hasOwn(Tm, hm)) return Am.rank;
        Tm[hm] = !0;
        let am = mm.outEdges(hm),
          xm = am ? am.map((Tm => null == Tm ? Number.POSITIVE_INFINITY : fm(Tm.w) - mm.edge(Tm).minlen)) : [],
          wm = Um(Math.min, xm);
        return wm === Number.POSITIVE_INFINITY && (wm = 0), Am.rank = wm
      }))
    }

    function jT(mm, Tm) {
      return mm.node(Tm.w).rank - mm.node(Tm.v).rank - mm.edge(Tm).minlen
    }
    var VT = function(mm) {
      let Tm = new sm({
          directed: !1
        }),
        fm = mm.nodes();
      if (0 === fm.length) throw new Error("Graph must have at least one node");
      let hm, Am, am = fm[0],
        xm = mm.nodeCount();
      for (Tm.setNode(am, {}); IT(Tm, mm) < xm && (hm = KT(Tm, mm), hm);) Am = Tm.hasNode(hm.v) ? jT(mm, hm) : -jT(mm, hm), QT(Tm, mm, Am);
      return Tm
    };

    function IT(mm, Tm) {
      return mm.nodes().forEach((function fm(hm) {
        let Am = Tm.nodeEdges(hm);
        Am && Am.forEach((Am => {
          let am = Am.v,
            xm = hm === am ? Am.w : am;
          !mm.hasNode(xm) && !jT(Tm, Am) && (mm.setNode(xm, {}), mm.setEdge(hm, xm, {}), fm(xm))
        }))
      })), mm.nodeCount()
    }

    function KT(mm, Tm) {
      return Tm.edges().reduce(((fm, hm) => {
        let Am = Number.POSITIVE_INFINITY;
        return mm.hasNode(hm.v) !== mm.hasNode(hm.w) && (Am = jT(Tm, hm)), Am < fm[0] ? [Am, hm] : fm
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function QT(mm, Tm, fm) {
      mm.nodes().forEach((mm => Tm.node(mm).rank += fm))
    }
    var {
      preorder: nT,
      postorder: JT
    } = jm, cT = zT;

    function zT(mm) {
      mm = function(mm) {
        let Tm = (new sm).setGraph(mm.graph());
        return mm.nodes().forEach((fm => Tm.setNode(fm, mm.node(fm)))), mm.edges().forEach((fm => {
          let hm = Tm.edge(fm.v, fm.w) || {
              weight: 0,
              minlen: 1
            },
            Am = mm.edge(fm);
          Tm.setEdge(fm.v, fm.w, {
            weight: hm.weight + Am.weight,
            minlen: Math.max(hm.minlen, Am.minlen)
          })
        })), Tm
      }(mm), qT(mm);
      let Tm, fm, hm = VT(mm);
      for (bT(hm), ZT(hm, mm); Tm = eT(hm);) fm = NT(hm, mm, Tm), GT(hm, mm, Tm, fm)
    }

    function ZT(mm, Tm) {
      let fm = JT(mm, mm.nodes());
      fm = fm.slice(0, fm.length - 1), fm.forEach((fm => function(mm, Tm, fm) {
        let hm = mm.node(fm).parent,
          Am = mm.edge(fm, hm);
        Am.cutvalue = kT(mm, Tm, fm)
      }(mm, Tm, fm)))
    }

    function kT(mm, Tm, fm) {
      let hm = mm.node(fm).parent,
        Am = !0,
        am = Tm.edge(fm, hm),
        xm = 0;
      am || (Am = !1, am = Tm.edge(hm, fm)), xm = am.weight;
      let wm = Tm.nodeEdges(fm);
      return wm && wm.forEach((am => {
        let wm = am.v === fm,
          Dm = wm ? am.w : am.v;
        if (Dm !== hm) {
          let hm = wm === Am,
            im = Tm.edge(am).weight;
          if (xm += hm ? im : -im, function(mm, Tm, fm) {
              return mm.hasEdge(Tm, fm)
            }(mm, fm, Dm)) {
            let Tm = mm.edge(fm, Dm).cutvalue;
            xm += hm ? -Tm : Tm
          }
        }
      })), xm
    }

    function bT(mm, Tm) {
      arguments.length < 2 && (Tm = mm.nodes()[0]), ST(mm, {}, 1, Tm)
    }

    function ST(mm, Tm, fm, hm, Am) {
      let am = fm,
        xm = mm.node(hm);
      Tm[hm] = !0;
      let wm = mm.neighbors(hm);
      return wm && wm.forEach((Am => {
        Object.hasOwn(Tm, Am) || (fm = ST(mm, Tm, fm, Am, hm))
      })), xm.low = am, xm.lim = fm++, Am ? xm.parent = Am : delete xm.parent, fm
    }

    function eT(mm) {
      return mm.edges().find((Tm => mm.edge(Tm).cutvalue < 0))
    }

    function NT(mm, Tm, fm) {
      let hm = fm.v,
        Am = fm.w;
      Tm.hasEdge(hm, Am) || (hm = fm.w, Am = fm.v);
      let am = mm.node(hm),
        xm = mm.node(Am),
        wm = am,
        Dm = !1;
      return am.lim > xm.lim && (wm = xm, Dm = !0), Tm.edges().filter((Tm => Dm === XT(mm, mm.node(Tm.v), wm) && Dm !== XT(mm, mm.node(Tm.w), wm))).reduce(((mm, fm) => jT(Tm, fm) < jT(Tm, mm) ? fm : mm))
    }

    function GT(mm, Tm, fm, hm) {
      let Am = fm.v,
        am = fm.w;
      mm.removeEdge(Am, am), mm.setEdge(hm.v, hm.w, {}), bT(mm), ZT(mm, Tm),
        function(mm, Tm) {
          let fm = mm.nodes().find((Tm => !mm.node(Tm).parent));
          if (!fm) return;
          let hm = nT(mm, [fm]);
          hm = hm.slice(1), hm.forEach((fm => {
            let hm = mm.node(fm).parent,
              Am = Tm.edge(fm, hm),
              am = !1;
            Am || (Am = Tm.edge(hm, fm), am = !0), Tm.node(fm).rank = Tm.node(hm).rank + (am ? Am.minlen : -Am.minlen)
          }))
        }(mm, Tm)
    }

    function XT(mm, Tm, fm) {
      return fm.low <= Tm.lim && Tm.lim <= fm.lim
    }
    zT.initLowLimValues = bT, zT.initCutValues = ZT, zT.calcCutValue = kT, zT.leaveEdge = eT, zT.enterEdge = NT, zT.exchangeEdges = GT;
    var PT = function(mm) {
      let Tm = mm.graph().ranker;
      if ("function" == typeof Tm) return Tm(mm);
      switch (Tm) {
        case "network-simplex":
        default:
          yT(mm);
          break;
        case "tight-tree":
          ! function(mm) {
            qT(mm), VT(mm)
          }(mm);
          break;
        case "longest-path":
          HT(mm);
        case "none":
      }
    };
    var HT = qT;

    function yT(mm) {
      cT(mm)
    }
    var CT = function(mm) {
      let Tm = function(mm) {
          let Tm = {},
            fm = 0;

          function hm(Am) {
            let am = fm;
            mm.children(Am).forEach(hm), Tm[Am] = {
              low: am,
              lim: fm++
            }
          }
          return mm.children(AT).forEach(hm), Tm
        }(mm),
        fm = mm.graph();
      if (!Array.isArray(fm.dummyChains)) return;
      fm.dummyChains.forEach((fm => {
        let hm = mm.node(fm),
          Am = hm.edgeObj,
          am = function(mm, Tm, fm, hm) {
            let Am, am = [],
              xm = [],
              wm = Math.min(Tm[fm].low, Tm[hm].low),
              Dm = Math.max(Tm[fm].lim, Tm[hm].lim);
            Am = fm;
            do {
              Am = mm.parent(Am), am.push(Am)
            } while (Am && (Tm[Am].low > wm || Dm > Tm[Am].lim));
            let im = Am,
              Rm = hm;
            for (;
              (Rm = mm.parent(Rm)) !== im;) xm.push(Rm);
            return {
              path: am.concat(xm.reverse()),
              lca: im
            }
          }(mm, Tm, Am.v, Am.w),
          xm = am.path,
          wm = am.lca,
          Dm = 0,
          im = xm[Dm],
          Rm = !0;
        for (; fm !== Am.w;) {
          if (hm = mm.node(fm), Rm) {
            for (;
              (im = xm[Dm]) !== wm && mm.node(im).maxRank < hm.rank;) Dm++;
            im === wm && (Rm = !1)
          }
          if (!Rm) {
            for (; Dm < xm.length - 1 && mm.node(xm[Dm + 1]).minRank <= hm.rank;) Dm++;
            im = xm[Dm]
          }
          void 0 !== im && mm.setParent(fm, im), fm = mm.successors(fm)[0]
        }
      }))
    };

    function rT(mm) {
      let Tm = lm(mm, "root", {}, "_root"),
        fm = function(mm) {
          let Tm = {};

          function fm(hm, Am) {
            let am = mm.children(hm);
            am && am.length && am.forEach((mm => fm(mm, Am + 1))), Tm[hm] = Am
          }
          return mm.children(AT).forEach((mm => fm(mm, 1))), Tm
        }(mm),
        hm = Object.values(fm),
        Am = Um(Math.max, hm) - 1,
        am = 2 * Am + 1;
      mm.graph().nestingRoot = Tm, mm.edges().forEach((Tm => mm.edge(Tm).minlen *= am));
      let xm = function(mm) {
        return mm.edges().reduce(((Tm, fm) => Tm + mm.edge(fm).weight), 0)
      }(mm) + 1;
      mm.children(AT).forEach((hm => {
        sT(mm, Tm, am, xm, Am, fm, hm)
      })), mm.graph().nodeRankFactor = am
    }

    function sT(mm, Tm, fm, hm, Am, am, xm) {
      var wm;
      let Dm = mm.children(xm);
      if (!Dm.length) return void(xm !== Tm && mm.setEdge(Tm, xm, {
        weight: 0,
        minlen: fm
      }));
      let im = Lm(mm, "_bt"),
        Rm = Lm(mm, "_bb"),
        pm = mm.node(xm);
      mm.setParent(im, xm), pm.borderTop = im, mm.setParent(Rm, xm), pm.borderBottom = Rm, Dm.forEach((wm => {
        var Dm;
        sT(mm, Tm, fm, hm, Am, am, wm);
        let pm = mm.node(wm),
          Em = pm.borderTop ? pm.borderTop : wm,
          om = pm.borderBottom ? pm.borderBottom : wm,
          Om = pm.borderTop ? hm : 2 * hm,
          Ym = Em !== om ? 1 : Am - (null != (Dm = am[xm]) ? Dm : 0) + 1;
        mm.setEdge(im, Em, {
          weight: Om,
          minlen: Ym,
          nestingEdge: !0
        }), mm.setEdge(om, Rm, {
          weight: Om,
          minlen: Ym,
          nestingEdge: !0
        })
      })), mm.parent(xm) || mm.setEdge(Tm, im, {
        weight: 0,
        minlen: Am + (null != (wm = am[xm]) ? wm : 0)
      })
    }
    var lT = function(mm) {
      mm.children(AT).forEach((function Tm(fm) {
        let hm = mm.children(fm),
          Am = mm.node(fm);
        if (hm.length && hm.forEach(Tm), Am && Object.hasOwn(Am, "minRank")) {
          Am.borderLeft = [], Am.borderRight = [];
          for (let Tm = Am.minRank, hm = Am.maxRank + 1; Tm < hm; ++Tm) MT(mm, "borderLeft", "_bl", fm, Am, Tm), MT(mm, "borderRight", "_br", fm, Am, Tm)
        }
      }))
    };

    function MT(mm, Tm, fm, hm, Am, am) {
      let xm = {
          width: 0,
          height: 0,
          rank: am,
          borderType: Tm
        },
        wm = Am[Tm][am - 1],
        Dm = lm(mm, "border", xm, fm);
      Am[Tm][am] = Dm, mm.setParent(Dm, hm), wm && mm.setEdge(wm, Dm, {
        weight: 1
      })
    }

    function uT(mm) {
      var Tm;
      let fm = null == (Tm = mm.graph().rankdir) ? void 0 : Tm.toLowerCase();
      ("bt" === fm || "rl" === fm) && function(mm) {
        mm.nodes().forEach((Tm => vT(mm.node(Tm)))), mm.edges().forEach((Tm => {
          var fm;
          let hm = mm.edge(Tm);
          null == (fm = hm.points) || fm.forEach(vT), Object.hasOwn(hm, "y") && vT(hm)
        }))
      }(mm), ("lr" === fm || "rl" === fm) && (function(mm) {
        mm.nodes().forEach((Tm => tT(mm.node(Tm)))), mm.edges().forEach((Tm => {
          var fm;
          let hm = mm.edge(Tm);
          null == (fm = hm.points) || fm.forEach(tT), Object.hasOwn(hm, "x") && tT(hm)
        }))
      }(mm), BT(mm))
    }

    function BT(mm) {
      mm.nodes().forEach((Tm => LT(mm.node(Tm)))), mm.edges().forEach((Tm => LT(mm.edge(Tm))))
    }

    function LT(mm) {
      let Tm = mm.width;
      mm.width = mm.height, mm.height = Tm
    }

    function vT(mm) {
      mm.y = -mm.y
    }

    function tT(mm) {
      let Tm = mm.x;
      mm.x = mm.y, mm.y = Tm
    }

    function UT(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        fm = {},
        hm = mm.nodes().filter((Tm => !mm.children(Tm).length)),
        Am = hm.map((Tm => mm.node(Tm).rank)),
        am = TT(Um(Math.max, Am) + 1).map((() => []));
      return hm.sort(((Tm, fm) => mm.node(Tm).rank - mm.node(fm).rank)).forEach((function hm(Am) {
        if (fm[Am]) return;
        fm[Am] = !0;
        let xm = mm.node(Am);
        am[xm.rank].push(Am);
        let wm = mm.successors(Am);
        wm && [...wm].sort(((fm, hm) => function(fm, hm) {
          let Am = mm.node(fm),
            am = mm.node(hm);
          return aT(Tm, Am, am)
        }(fm, hm))).forEach(hm)
      })), am
    }

    function dT(mm, Tm) {
      let fm = 0;
      for (let hm = 1; hm < Tm.length; ++hm) fm += gT(mm, Tm[hm - 1], Tm[hm]);
      return fm
    }

    function gT(mm, Tm, fm) {
      let hm = function(mm, Tm) {
          return mm.reduce(((mm, fm, hm) => (mm[fm] = Tm[hm], mm)), {})
        }(fm, fm.map(((mm, Tm) => Tm))),
        Am = Tm.flatMap((Tm => {
          let fm = mm.outEdges(Tm);
          return fm ? fm.map((Tm => ({
            pos: hm[Tm.w],
            weight: mm.edge(Tm).weight
          }))).sort(((mm, Tm) => mm.pos - Tm.pos)) : []
        })),
        am = 1;
      for (; am < fm.length;) am <<= 1;
      let xm = 2 * am - 1;
      am -= 1;
      let wm = new Array(xm).fill(0),
        Dm = 0;
      return Am.forEach((mm => {
        let Tm = mm.pos + am;
        wm[Tm] += mm.weight;
        let fm = 0;
        for (; Tm > 0;) Tm % 2 && (fm += wm[Tm + 1]), Tm = Tm - 1 >> 1, wm[Tm] += mm.weight;
        Dm += mm.weight * fm
      })), Dm
    }

    function WT(mm, Tm) {
      let fm = {};
      return mm.forEach(((mm, Tm) => {
          let hm = {
            indegree: 0,
            in: [],
            out: [],
            vs: [mm.v],
            i: Tm
          };
          void 0 !== mm.barycenter && (hm.barycenter = mm.barycenter, hm.weight = mm.weight), fm[mm.v] = hm
        })), Tm.edges().forEach((mm => {
          let Tm = fm[mm.v],
            hm = fm[mm.w];
          void 0 !== Tm && void 0 !== hm && (hm.indegree++, Tm.out.push(hm))
        })),
        function(mm) {
          let Tm = [];

          function fm(mm) {
            return Tm => {
              Tm.merged || (void 0 === Tm.barycenter || void 0 === mm.barycenter || Tm.barycenter >= mm.barycenter) && function(mm, Tm) {
                let fm = 0,
                  hm = 0;
                mm.weight && (fm += mm.barycenter * mm.weight, hm += mm.weight), Tm.weight && (fm += Tm.barycenter * Tm.weight, hm += Tm.weight), mm.vs = Tm.vs.concat(mm.vs), mm.barycenter = fm / hm, mm.weight = hm, mm.i = Math.min(Tm.i, mm.i), Tm.merged = !0
              }(mm, Tm)
            }
          }

          function hm(Tm) {
            return fm => {
              fm.in.push(Tm), 0 === --fm.indegree && mm.push(fm)
            }
          }
          for (; mm.length;) {
            let Am = mm.pop();
            Tm.push(Am), Am.in.reverse().forEach(fm(Am)), Am.out.forEach(hm(Am))
          }
          return Tm.filter((mm => !mm.merged)).map((mm => fT(mm, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(fm).filter((mm => !mm.indegree)))
    }

    function FT(mm, Tm, fm, hm, Am) {
      let am = {},
        xm = null,
        wm = null,
        Dm = Am;
      "boolean" == typeof Tm ? (Dm = Tm, am = {}) : Tm && (am = Tm, xm = null != fm ? fm : null, wm = null != hm ? hm : null);
      let im = function(mm, Tm) {
          let fm = {
            lhs: [],
            rhs: []
          };
          return mm.forEach((mm => {
            Tm(mm) ? fm.lhs.push(mm) : fm.rhs.push(mm)
          })), fm
        }(mm, (mm => Object.hasOwn(mm, "barycenter"))),
        Rm = im.lhs,
        pm = im.rhs.sort(((mm, Tm) => Tm.i - mm.i)),
        Em = [],
        om = 0,
        Om = 0,
        Ym = 0;
      Rm.sort(function(mm, Tm, fm) {
        return (hm, Am) => {
          if (hm.barycenter < Am.barycenter) return -1;
          if (hm.barycenter > Am.barycenter) return 1;
          if (mm && ("string" == typeof hm.vs[0] || "string" == typeof Am.vs[0])) {
            let fm = mm.node(hm.vs[0]),
              am = mm.node(Am.vs[0]),
              xm = aT(Tm, fm, am);
            if (0 !== xm) return xm
          }
          return fm ? Am.i - hm.i : hm.i - Am.i
        }
      }(wm, xm, !!Dm));
      for (let [jm, Vm] of Object.entries(am)) {
        let mm = Rm.findIndex((mm => mm.vs[0] === jm));
        Rm.splice(mm + 1, 0, Vm)
      }
      Ym = mf(Em, pm, Ym), Rm.forEach((mm => {
        Ym += mm.vs.length, Em.push(mm.vs), om += mm.barycenter * mm.weight, Om += mm.weight, Ym = mf(Em, pm, Ym)
      }));
      let qm = {
        vs: Em.flat(1)
      };
      return Om && (qm.barycenter = om / Om, qm.weight = Om), qm
    }

    function mf(mm, Tm, fm) {
      let hm;
      for (; Tm.length && (hm = Tm[Tm.length - 1]).i <= fm;) Tm.pop(), mm.push(hm.vs), fm++;
      return fm
    }

    function Tf(mm, Tm, fm, hm, Am) {
      var am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym;
      let qm = null,
        jm = Am;
      "boolean" == typeof hm ? (jm = hm, qm = null) : void 0 !== hm && (qm = hm);
      let Vm = mm.children(Tm),
        Im = mm.node(Tm),
        Km = Im ? Im.borderLeft : void 0,
        Qm = Im ? Im.borderRight : void 0,
        nm = {};
      Km && (Vm = Vm.filter((mm => mm !== Km && mm !== Qm)));
      let Jm = function(mm) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Tm => {
          let fm = mm.inEdges(Tm);
          if (!fm || !fm.length) return {
            v: Tm
          };
          {
            let hm = fm.reduce(((Tm, fm) => {
              let hm = mm.edge(fm),
                Am = mm.node(fm.v);
              return {
                sum: Tm.sum + hm.weight * Am.order,
                weight: Tm.weight + hm.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Tm,
              barycenter: hm.sum / hm.weight,
              weight: hm.weight
            }
          }
        }))
      }(mm, Vm);
      Jm.forEach((Tm => {
        if (mm.children(Tm.v).length) {
          let {
            result: hm
          } = Tf(mm, Tm.v, fm, qm, jm);
          nm[Tm.v] = hm, Object.hasOwn(hm, "barycenter") && function(mm, Tm) {
            void 0 !== mm.barycenter ? (mm.barycenter = (mm.barycenter * mm.weight + Tm.barycenter * Tm.weight) / (mm.weight + Tm.weight), mm.weight += Tm.weight) : (mm.barycenter = Tm.barycenter, mm.weight = Tm.weight)
          }(Tm, hm)
        }
      }));
      let cm = WT(Jm, fm);
      ! function(mm, Tm) {
        mm.forEach((mm => {
          mm.vs = mm.vs.flatMap((mm => Tm[mm] ? Tm[mm].vs : mm))
        }))
      }(cm, nm);
      let zm = {},
        Zm = !1;
      for (let bm = 0; bm < cm.length; bm++)
        for (let Tm = bm + 1; Tm < cm.length; Tm++)
          if (cm[bm] && cm[Tm] && null != (am = cm[bm]) && am.barycenter && null != (xm = cm[Tm]) && xm.barycenter && (null == (wm = cm[bm]) ? void 0 : wm.barycenter) === cm[Tm].barycenter) {
            let fm = null != (im = null == (Dm = cm[bm]) ? void 0 : Dm.vs[0]) ? im : "",
              hm = null != (pm = null == (Rm = cm[Tm]) ? void 0 : Rm.vs[0]) ? pm : "",
              Am = mm.node(fm),
              am = mm.node(hm);
            if ("edge" === Am.dummy && "edge" === am.dummy && (null == (Em = Am.edgeObj) ? void 0 : Em.v) === (null == (om = am.edgeObj) ? void 0 : om.v) && (null == (Om = Am.edgeObj) ? void 0 : Om.w) === (null == (Ym = am.edgeObj) ? void 0 : Ym.w)) {
              if (Am.edgeLabel.reversed) {
                zm[hm] = cm[bm], cm.splice(bm, 1), bm--;
                break
              }
              zm[fm] = cm[Tm], cm.splice(Tm, 1), Tm--
            } else Zm = !0
          } let km = FT(cm, zm, qm, mm, jm);
      if (Km && Qm) {
        km.vs = [Km, km.vs, Qm].flat(1);
        let Tm = mm.predecessors(Km);
        if (Tm && Tm.length) {
          let fm = mm.node(Tm[0]),
            hm = mm.predecessors(Qm),
            Am = mm.node(hm[0]);
          Object.hasOwn(km, "barycenter") || (km.barycenter = 0, km.weight = 0), km.barycenter = (km.barycenter * km.weight + fm.order + Am.order) / (km.weight + 2), km.weight += 2
        }
      }
      return Object.defineProperty(km, "result", {
        value: km,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(km, "usedBias", {
        value: Zm,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), km
    }

    function ff(mm, Tm, fm, hm) {
      hm || (hm = mm.nodes());
      let Am = function(mm) {
          let Tm;
          for (; mm.hasNode(Tm = mT("_root")););
          return Tm
        }(mm),
        am = new sm({
          compound: !0
        }).setGraph({
          root: Am
        }).setDefaultNodeLabel((Tm => mm.node(Tm)));
      return hm.forEach((hm => {
        let xm = mm.node(hm),
          wm = mm.parent(hm);
        if (xm.rank === Tm || xm.minRank <= Tm && Tm <= xm.maxRank) {
          am.setNode(hm), am.setParent(hm, wm || Am);
          let Dm = mm[fm](hm);
          Dm && Dm.forEach((Tm => {
            let fm = Tm.v === hm ? Tm.w : Tm.v,
              Am = am.edge(fm, hm),
              xm = void 0 !== Am ? Am.weight : 0;
            am.setEdge(fm, hm, {
              weight: mm.edge(Tm).weight + xm
            })
          })), Object.hasOwn(xm, "minRank") && am.setNode(hm, {
            borderLeft: xm.borderLeft[Tm],
            borderRight: xm.borderRight[Tm]
          })
        }
      })), am
    }

    function hf(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Tm.customOrder) return void Tm.customOrder(mm, hf);
      let hm = dm(mm),
        Am = Af(mm, TT(1, hm + 1), "inEdges"),
        am = Af(mm, TT(hm - 1, -1, -1), "outEdges"),
        xm = UT(mm, fm);
      if (xf(mm, xm), Tm.disableOptimalOrderHeuristic) return;
      let wm, Dm = Number.POSITIVE_INFINITY,
        im = Tm.constraints || [];
      for (let Rm = 0, pm = 0; pm < 4; ++Rm, ++pm) {
        af(Rm % 2 ? Am : am, Rm % 4 >= 2, im, fm), xm = Bm(mm);
        let Tm = dT(mm, xm);
        Tm < Dm ? (pm = 0, wm = Object.assign({}, xm), Dm = Tm) : Tm === Dm && (wm = structuredClone(xm))
      }
      xf(mm, wm)
    }

    function Af(mm, Tm, fm) {
      let hm = new Map,
        Am = (mm, Tm) => {
          hm.has(mm) || hm.set(mm, []), hm.get(mm).push(Tm)
        };
      for (let am of mm.nodes()) {
        let Tm = mm.node(am);
        if ("number" == typeof Tm.rank && Am(Tm.rank, am), "number" == typeof Tm.minRank && "number" == typeof Tm.maxRank)
          for (let mm = Tm.minRank; mm <= Tm.maxRank; mm++) mm !== Tm.rank && Am(mm, am)
      }
      return Tm.map((function(Tm) {
        return ff(mm, Tm, fm, hm.get(Tm) || [])
      }))
    }

    function af(mm, Tm, fm, hm) {
      let Am = !0,
        am = new sm;
      mm.forEach((function(mm) {
        fm.forEach((mm => am.setEdge(mm.left, mm.right)));
        let xm = mm.graph().root,
          {
            result: wm,
            usedBias: Dm
          } = Tf(mm, xm, am, hm, Am);
        Tm && Dm && (Am = !Am), wm.vs.forEach(((Tm, fm) => mm.node(Tm).order = fm)),
          function(mm, Tm, fm) {
            let hm, Am = {};
            fm.forEach((fm => {
              let am, xm, wm = mm.parent(fm);
              for (; wm;) {
                if (am = mm.parent(wm), am ? (xm = Am[am], Am[am] = wm) : (xm = hm, hm = wm), xm && xm !== wm) return void Tm.setEdge(xm, wm);
                wm = am
              }
            }))
          }(mm, am, wm.vs)
      }))
    }

    function xf(mm, Tm) {
      Object.values(Tm).forEach((Tm => Tm.forEach(((Tm, fm) => mm.node(Tm).order = fm))))
    }

    function wf(mm, Tm, fm) {
      if (Tm > fm) {
        let mm = Tm;
        Tm = fm, fm = mm
      }
      let hm = mm[Tm];
      hm || (mm[Tm] = hm = {}), hm[fm] = !0
    }

    function Df(mm, Tm, fm) {
      if (Tm > fm) {
        let mm = Tm;
        Tm = fm, fm = mm
      }
      let hm = mm[Tm];
      return void 0 !== hm && Object.hasOwn(hm, fm)
    }

    function Rf(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        am = {},
        xm = function(mm, Tm, fm, hm) {
          let Am = new sm,
            am = mm.graph(),
            xm = function(mm, Tm, fm) {
              return (hm, Am, am) => {
                let xm, wm = hm.node(Am),
                  Dm = hm.node(am),
                  im = 0;
                if (im += wm.width / 2, Object.hasOwn(wm, "labelpos")) switch (wm.labelpos.toLowerCase()) {
                  case "l":
                    xm = -wm.width / 2;
                    break;
                  case "r":
                    xm = wm.width / 2
                }
                if (xm && (im += fm ? xm : -xm), xm = void 0, im += (wm.dummy ? Tm : mm) / 2, im += (Dm.dummy ? Tm : mm) / 2, im += Dm.width / 2, Object.hasOwn(Dm, "labelpos")) switch (Dm.labelpos.toLowerCase()) {
                  case "l":
                    xm = Dm.width / 2;
                    break;
                  case "r":
                    xm = -Dm.width / 2
                }
                return xm && (im += fm ? xm : -xm), im
              }
            }(am.nodesep, am.edgesep, hm);
          return Tm.forEach((Tm => {
            let hm;
            Tm.forEach((Tm => {
              let am = fm[Tm];
              if (void 0 !== am) {
                if (Am.setNode(am), void 0 !== hm) {
                  let wm = fm[hm];
                  if (void 0 !== wm) {
                    let fm = Am.edge(wm, am);
                    Am.setEdge(wm, am, Math.max(xm(mm, Tm, hm), fm || 0))
                  }
                }
                hm = Tm
              }
            }))
          })), Am
        }(mm, Tm, fm, Am),
        wm = Am ? "borderLeft" : "borderRight";

      function Dm(mm, Tm) {
        let fm = xm.nodes().slice(),
          hm = {},
          Am = fm.pop();
        for (; Am;) {
          if (hm[Am]) mm(Am);
          else {
            hm[Am] = !0, fm.push(Am);
            for (let mm of Tm(Am)) fm.push(mm)
          }
          Am = fm.pop()
        }
      }
      return Dm((function(mm) {
        let Tm = xm.inEdges(mm);
        am[mm] = Tm ? Tm.reduce(((mm, Tm) => {
          var fm;
          let hm = null != (fm = am[Tm.v]) ? fm : 0,
            Am = xm.edge(Tm);
          return Math.max(mm, hm + (void 0 !== Am ? Am : 0))
        }), 0) : 0
      }), (function(mm) {
        return xm.predecessors(mm) || []
      })), Dm((function(Tm) {
        let fm = xm.outEdges(Tm),
          hm = Number.POSITIVE_INFINITY;
        fm && (hm = fm.reduce(((mm, Tm) => {
          let fm = am[Tm.w],
            hm = xm.edge(Tm);
          return Math.min(mm, (void 0 !== fm ? fm : 0) - (void 0 !== hm ? hm : 0))
        }), Number.POSITIVE_INFINITY));
        let Am = mm.node(Tm);
        hm !== Number.POSITIVE_INFINITY && Am.borderType !== wm && (am[Tm] = Math.max(void 0 !== am[Tm] ? am[Tm] : 0, hm))
      }), (function(mm) {
        return xm.successors(mm) || []
      })), Object.keys(hm).forEach((mm => {
        var Tm;
        let hm = fm[mm];
        void 0 !== hm && (am[mm] = null != (Tm = am[hm]) ? Tm : 0)
      })), am
    }

    function pf(mm, Tm) {
      let fm, hm = Bm(mm),
        Am = Object.assign(function(mm, Tm) {
          let fm = {};
          return Tm.length && Tm.reduce((function(Tm, hm) {
            let Am = 0,
              am = 0,
              xm = Tm.length,
              wm = hm[hm.length - 1];
            return hm.forEach(((Tm, Dm) => {
              let im = function(mm, Tm) {
                  if (mm.node(Tm).dummy) {
                    let fm = mm.predecessors(Tm);
                    if (fm) return fm.find((Tm => mm.node(Tm).dummy))
                  }
                }(mm, Tm),
                Rm = im ? mm.node(im).order : xm;
              (im || Tm === wm) && (hm.slice(am, Dm + 1).forEach((Tm => {
                let hm = mm.predecessors(Tm);
                hm && hm.forEach((hm => {
                  let am = mm.node(hm),
                    xm = am.order;
                  (xm < Am || Rm < xm) && (!am.dummy || !mm.node(Tm).dummy) && wf(fm, hm, Tm)
                }))
              })), am = Dm + 1, Am = Rm)
            })), hm
          })), fm
        }(mm, hm), function(mm, Tm) {
          let fm = {};

          function hm(Tm, hm, Am, am, xm) {
            TT(hm, Am).forEach((hm => {
              let Am = Tm[hm];
              if (void 0 !== Am && mm.node(Am).dummy) {
                let Tm = mm.predecessors(Am);
                Tm && Tm.forEach((Tm => {
                  if (void 0 === Tm) return;
                  let hm = mm.node(Tm);
                  hm.dummy && (hm.order < am || hm.order > xm) && wf(fm, Tm, Am)
                }))
              }
            }))
          }
          return Tm.length && Tm.reduce((function(Tm, fm) {
            let Am = -1,
              am = -1,
              xm = 0;
            return fm.forEach(((wm, Dm) => {
              if ("border" === mm.node(wm).dummy) {
                let Tm = mm.predecessors(wm);
                if (Tm && Tm.length) {
                  let wm = Tm[0];
                  if (void 0 === wm) return;
                  am = mm.node(wm).order, hm(fm, xm, Dm, Am, am), xm = Dm, Am = am
                }
              }
              hm(fm, xm, fm.length, am, Tm.length)
            })), fm
          })), fm
        }(mm, hm)),
        am = {};
      ["u", "d"].forEach((xm => {
        fm = "u" === xm ? hm : Object.values(hm).reverse(), ["l", "r"].forEach((hm => {
          "r" === hm && (fm = fm.map((mm => Object.values(mm).reverse())));
          let wm = function(mm, Tm, fm, hm, Am) {
              let am = {},
                xm = {},
                wm = {};
              return Tm.forEach((mm => {
                mm.forEach(((mm, Tm) => {
                  am[mm] = mm, xm[mm] = mm, wm[mm] = Tm
                }))
              })), Tm.forEach((Tm => {
                let Dm = -1,
                  im = -1,
                  Rm = !1,
                  pm = Tm,
                  Em = Tm.findIndex((Tm => (null == Am ? void 0 : Am.includes(Tm)) || Ef(Tm, mm, Am)));
                Em > 0 && (pm = [Tm[Em], ...Tm.slice(0, Em), ...Tm.slice(Em + 1)], Rm = !0), pm.forEach((Tm => {
                  var pm;
                  let Em = hm(Tm);
                  if (Em && Em.length) {
                    null != Am && Am.includes(Tm) && (Em = Em.filter((Tm => Ef(Tm, mm, Am))));
                    let hm = Em.sort(((mm, Tm) => {
                        let fm = wm[mm],
                          hm = wm[Tm];
                        return (void 0 !== fm ? fm : 0) - (void 0 !== hm ? hm : 0)
                      })),
                      om = (hm.length - 1) / 2;
                    for (let mm = Math.floor(om), Am = Math.ceil(om); mm <= Am; ++mm) {
                      let Am = hm[mm];
                      if (void 0 === Am) continue;
                      let Em = wm[Am];
                      if (void 0 !== Em && xm[Tm] === Tm && Dm < Em && wm[Am] !== im && !Df(fm, Tm, Am)) {
                        let mm = am[Am];
                        void 0 !== mm && (xm[Am] = Tm, xm[Tm] = am[Tm] = mm, Dm = Em, Rm && (Dm = -1, im = null != (pm = wm[Am]) ? pm : -1, Rm = !1))
                      }
                    }
                  }
                }))
              })), {
                root: am,
                align: xm
              }
            }(mm, fm, Am, (Tm => ("u" === xm ? mm.predecessors(Tm) : mm.successors(Tm)) || []), Tm),
            Dm = Rf(mm, fm, wm.root, wm.align, "r" === hm);
          "r" === hm && (Dm = hT(Dm, (mm => -mm))), am[xm + hm] = Dm
        }))
      }));
      let xm = function(mm, Tm) {
        return Object.values(Tm).reduce(((Tm, fm) => {
          let hm = Number.NEGATIVE_INFINITY,
            Am = Number.POSITIVE_INFINITY;
          Object.entries(fm).forEach((Tm => {
            let [fm, am] = Tm, xm = function(mm, Tm) {
              return mm.node(Tm).width
            }(mm, fm) / 2;
            hm = Math.max(am + xm, hm), Am = Math.min(am - xm, Am)
          }));
          let am = hm - Am;
          return am < Tm[0] && (Tm = [am, fm]), Tm
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(mm, am);
      return function(mm, Tm) {
          let fm = Object.values(Tm),
            hm = Um(Math.min, fm),
            Am = Um(Math.max, fm);
          ["u", "d"].forEach((fm => {
            ["l", "r"].forEach((am => {
              let xm = fm + am,
                wm = mm[xm];
              if (!wm || wm === Tm) return;
              let Dm = Object.values(wm),
                im = hm - Um(Math.min, Dm);
              "l" !== am && (im = Am - Um(Math.max, Dm)), im && (mm[xm] = hT(wm, (mm => mm + im)))
            }))
          }))
        }(am, xm),
        function(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            fm = mm.ul;
          return fm ? hT(fm, ((fm, hm) => {
            var Am, am;
            if (Tm) {
              let fm = Tm.toLowerCase(),
                Am = mm[fm];
              if (Am && void 0 !== Am[hm]) return Am[hm]
            }
            let xm = Object.values(mm).map((mm => {
              let Tm = mm[hm];
              return void 0 !== Tm ? Tm : 0
            })).sort(((mm, Tm) => mm - Tm));
            return ((null != (Am = xm[1]) ? Am : 0) + (null != (am = xm[2]) ? am : 0)) / 2
          })) : {}
        }(am, mm.graph().align)
    }

    function Ef(mm, Tm, fm) {
      var hm;
      if (!fm) return !1;
      let Am = null == (hm = Tm.node(mm)) ? void 0 : hm.edgeObj;
      if (!Am || Tm.node(mm).edgeLabel.reversed) return !1;
      let am = fm.indexOf(null == Am ? void 0 : Am.v),
        xm = fm.indexOf(null == Am ? void 0 : Am.w);
      return -1 !== am && -1 !== xm && am === (xm + 1) % fm.length || am === (xm - 1) % fm.length
    }

    function of(mm, Tm) {
      (function(mm) {
        let Tm = Bm(mm),
          fm = mm.graph(),
          hm = fm.ranksep,
          Am = fm.rankalign,
          am = 0;
        Tm.forEach((Tm => {
          let fm = Tm.reduce(((Tm, fm) => {
            var hm;
            let Am = null != (hm = mm.node(fm).height) ? hm : 0;
            return Tm > Am ? Tm : Am
          }), 0);
          Tm.forEach((Tm => {
            let hm = mm.node(Tm);
            hm.y = "top" === Am ? am + hm.height / 2 : "bottom" === Am ? am + fm - hm.height / 2 : am + fm / 2
          })), am += fm + hm
        }))
      })(mm = Mm(mm)), Object.entries(pf(mm, Tm)).forEach((Tm => {
        let [fm, hm] = Tm;
        return mm.node(fm).x = hm
      }))
    }
    var Of = new WeakMap;

    function Yf(mm) {
      return jf(mm, Wm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), mm
    }

    function qf(mm, Tm, fm) {
      let hm = Tm;
      for (; void 0 !== hm;) {
        let Tm = mm.parent(hm);
        if (Tm === fm) return hm;
        hm = Tm
      }
    }

    function jf(mm, Tm, fm) {
      var hm;
      let Am = mm.nodes().filter((Tm => mm.children(Tm).length)),
        am = {};
      Am.forEach((hm => {
        let Am = mm.node(hm);
        if (Am && Am.rankdir) {
          let xm = new sm({
            multigraph: !0,
            compound: !0
          });
          xm.setGraph({
            rankdir: Am.rankdir
          });
          let wm = mm.children(hm);
          wm.forEach((Tm => {
            let fm = {
              ...mm.node(Tm)
            };
            xm.setNode(Tm, fm);
            let Am = mm.parent(Tm);
            Am && Am !== hm && wm.includes(Am) && xm.setParent(Tm, Am)
          }));
          let Dm = new Set;
          mm.edges().forEach((Tm => {
            let fm = qf(mm, Tm.v, hm),
              Am = qf(mm, Tm.w, hm);
            if (fm && Am && fm !== Am) {
              let hm = `${fm}\0${Am}`;
              Dm.has(hm) || (Dm.add(hm), xm.setEdge(fm, Am, {
                ...mm.edge(Tm)
              }))
            }
          })), jf(xm, Tm, fm);
          let im = Sf(xm);
          Vf(im, Tm, fm, null), If(xm, im);
          let Rm = 1 / 0,
            pm = 1 / 0,
            Em = -1 / 0,
            om = -1 / 0;
          xm.nodes().forEach((mm => {
            if (mm === hm) return;
            let Tm = xm.node(mm);
            Tm && "number" == typeof Tm.x && "number" == typeof Tm.y && "number" == typeof Tm.width && "number" == typeof Tm.height && (Rm = Math.min(Rm, Tm.x - Tm.width / 2), Em = Math.max(Em, Tm.x + Tm.width / 2), pm = Math.min(pm, Tm.y - Tm.height / 2), om = Math.max(om, Tm.y + Tm.height / 2))
          })), (!isFinite(Rm) || !isFinite(pm) || !isFinite(Em) || !isFinite(om)) && (Rm = pm = 0, Em = om = 0);
          let Om = Em - Rm,
            Ym = om - pm;
          am[hm] = {
            minX: Rm,
            Dm: pm,
            maxX: Em,
            im: om,
            width: Om,
            height: Ym,
            offsetX: Rm,
            offsetY: pm
          }, Am._dagreClusterSubgraph = xm
        }
      }));
      let xm = [],
        wm = new Map;
      Am.forEach((Tm => {
        let fm = mm.node(Tm);
        fm && fm.rankdir && am[Tm] && wm.set(Tm, (mm.children(Tm) || []).filter((mm => mm !== Tm)))
      }));
      let Dm = new Set([...wm.values()].flat()),
        im = new Map;
      wm.forEach(((Tm, fm) => {
        Dm.has(fm) || im.set(fm, (Tm => {
          let fm = [],
            hm = (mm.children(Tm) || []).filter((mm => mm !== Tm));
          for (; hm.length > 0;) {
            let Tm = hm.shift();
            fm.push(Tm), (mm.children(Tm) || []).filter((mm => mm !== Tm)).forEach((mm => hm.push(mm)))
          }
          return fm
        })(fm))
      }));
      let Rm = new Set([...im.values()].flat()),
        pm = mm => {
          for (let [Tm, fm] of im)
            if (fm.includes(mm)) return Tm;
          return mm
        },
        Em = [];
      mm.edges().forEach((Tm => {
        (Rm.has(Tm.v) || Rm.has(Tm.w)) && Em.push({
          edge: Tm,
          label: mm.edge(Tm)
        })
      }));
      let om = new Map;
      Rm.forEach((Tm => {
        let fm = mm.parent(Tm);
        om.set(Tm, "string" == typeof fm ? fm : void 0)
      })), im.forEach(((Tm, fm) => {
        let hm = mm.node(fm),
          Am = [];
        Tm.forEach((Tm => {
          let fm = mm.node(Tm);
          fm && (Am.push({
            id: Tm,
            node: fm,
            parent: om.get(Tm)
          }), mm.removeNode(Tm))
        }));
        let wm = Em.filter((mm => {
            let {
              edge: fm
            } = mm;
            return Tm.includes(fm.v) || Tm.includes(fm.w)
          })),
          Dm = am[fm];
        hm && (xm.push({
          clusterId: fm,
          subgraph: hm._dagreClusterSubgraph,
          bounds: Dm,
          children: Tm,
          removedNodes: Am,
          removedEdges: wm
        }), hm.width = Dm.width, hm.height = Dm.height)
      }));
      let Om = new Set;
      Em.forEach((Tm => {
        let {
          edge: fm,
          label: hm
        } = Tm, Am = pm(fm.v), am = pm(fm.w);
        if (Am !== am && mm.hasNode(Am) && mm.hasNode(am)) {
          let Tm = `${Am}\0${am}`;
          Om.has(Tm) || (Om.add(Tm), mm.setEdge(Am, am, {
            ...hm,
            width: 0,
            height: 0
          }))
        }
      }));
      let Ym = Sf(mm),
        qm = Vf(Ym, Tm, fm, null != (hm = Of.get(mm)) ? hm : null);
      Of.set(mm, qm), If(mm, Ym), Om.forEach((Tm => {
        let fm = Tm.indexOf("\0"),
          hm = Tm.slice(0, fm),
          Am = Tm.slice(fm + 1);
        mm.hasEdge(hm, Am) && mm.removeEdge(hm, Am)
      })), xm.forEach((Tm => {
        let {
          clusterId: fm,
          subgraph: hm,
          bounds: Am,
          removedNodes: am,
          removedEdges: xm
        } = Tm;
        var wm, Dm;
        let im = mm.node(fm),
          Rm = null != (wm = null == im ? void 0 : im.x) ? wm : 0,
          pm = null != (Dm = null == im ? void 0 : im.y) ? Dm : 0,
          Em = (Am.minX + Am.maxX) / 2,
          om = (Am.Dm + Am.im) / 2;
        am.forEach((Tm => {
          let {
            id: fm,
            node: hm,
            parent: Am
          } = Tm;
          mm.setNode(fm, hm), void 0 !== Am && mm.setParent(fm, Am)
        })), xm.forEach((Tm => {
          let {
            edge: fm,
            label: hm
          } = Tm;
          mm.setEdge(fm, hm)
        })), hm.nodes().forEach((Tm => {
          if (Tm === fm) return;
          let Am = hm.node(Tm),
            am = mm.node(Tm);
          am && Am && "number" == typeof Am.x && "number" == typeof Am.y && (am.x = Rm + (Am.x - Em), am.y = pm + (Am.y - om))
        })), delete im._dagreClusterSubgraph
      })), Am.forEach((Tm => {
        var fm, hm;
        let Am = mm.node(Tm),
          xm = am[Tm];
        if (Am && Am.rankdir && Am._dagreClusterSubgraph && xm) {
          let am = Am._dagreClusterSubgraph,
            wm = null != (fm = Am.x) ? fm : 0,
            Dm = null != (hm = Am.y) ? hm : 0,
            im = (xm.minX + xm.maxX) / 2,
            Rm = (xm.Dm + xm.im) / 2;
          am.nodes().forEach((fm => {
            if (fm === Tm) return;
            let hm = am.node(fm),
              Am = mm.node(fm);
            if (Am && hm && "number" == typeof hm.x && "number" == typeof hm.y) {
              let mm = hm.x - im,
                Tm = hm.y - Rm;
              Am.x = wm + mm, Am.y = Dm + Tm
            }
          })), delete Am._dagreClusterSubgraph
        }
      }))
    }

    function Vf(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Am, am;
      let xm = !1 !== (null == fm ? void 0 : fm.useDynamic),
        wm = xm && null != (Am = null == hm ? void 0 : hm.graph) ? Am : null,
        Dm = xm && null != (am = null == hm ? void 0 : hm.rawNodes) ? am : null;
      Tm("    makeSpaceForEdgeLabels", (() => function(mm) {
        let Tm = mm.graph();
        Tm.ranksep /= 2, mm.edges().forEach((fm => {
          var hm;
          let Am = mm.edge(fm);
          Am.minlen *= 2, "c" !== (null != (hm = Am.labelpos) ? hm : "r").toLowerCase() && ("TB" === Tm.rankdir || "BT" === Tm.rankdir ? Am.width += Am.labeloffset : Am.height += Am.labeloffset)
        }))
      }(mm))), Tm("    removeSelfEdges", (() => function(mm) {
        mm.edges().forEach((Tm => {
          if (Tm.v === Tm.w) {
            let fm = mm.node(Tm.v);
            fm.selfEdges || (fm.selfEdges = []), fm.selfEdges.push({
              e: Tm,
              label: mm.edge(Tm)
            }), mm.removeEdge(Tm)
          }
        }))
      }(mm))), Tm("    acyclic", (() => OT(mm, wm))), Tm("    nestingGraph.run", (() => rT(mm))), Tm("    rank", (() => PT(Mm(mm)))), Tm("    injectEdgeLabelProxies", (() => function(mm) {
        mm.edges().forEach((Tm => {
          let fm = mm.edge(Tm);
          if (fm.width && fm.height) {
            let fm = mm.node(Tm.v),
              hm = {
                rank: (mm.node(Tm.w).rank - fm.rank) / 2 + fm.rank,
                e: Tm
              };
            lm(mm, "edge-proxy", hm, "_ep")
          }
        }))
      }(mm))), Tm("    removeEmptyRanks", (() => function(mm) {
        let Tm = mm.nodes().map((Tm => mm.node(Tm).rank)).filter((mm => void 0 !== mm)),
          fm = Um(Math.min, Tm),
          hm = [];
        mm.nodes().forEach((Tm => {
          let Am = mm.node(Tm).rank - fm;
          hm[Am] || (hm[Am] = []), hm[Am].push(Tm)
        }));
        let Am = 0,
          am = mm.graph().nodeRankFactor;
        Array.from(hm).forEach(((Tm, fm) => {
          void 0 === Tm && fm % am !== 0 ? --Am : void 0 !== Tm && Am && Tm.forEach((Tm => mm.node(Tm).rank += Am))
        }))
      }(mm))), Tm("    nestingGraph.cleanup", (() => function(mm) {
        let Tm = mm.graph();
        mm.removeNode(Tm.nestingRoot), delete Tm.nestingRoot, mm.edges().forEach((Tm => {
          mm.edge(Tm).nestingEdge && mm.removeEdge(Tm)
        }))
      }(mm))), Tm("    normalizeRanks", (() => function(mm) {
        let Tm = mm.nodes().map((Tm => {
            let fm = mm.node(Tm).rank;
            return void 0 === fm ? Number.MAX_VALUE : fm
          })),
          fm = Um(Math.min, Tm);
        mm.nodes().forEach((Tm => {
          let hm = mm.node(Tm);
          Object.hasOwn(hm, "rank") && (hm.rank -= fm)
        }))
      }(mm))), Tm("    assignRankMinMax", (() => function(mm) {
        let Tm = 0;
        mm.nodes().forEach((fm => {
          let hm = mm.node(fm);
          hm.borderTop && (hm.minRank = mm.node(hm.borderTop).rank, hm.maxRank = mm.node(hm.borderBottom).rank, Tm = Math.max(Tm, hm.maxRank))
        })), mm.graph().maxRank = Tm
      }(mm))), Tm("    removeEdgeLabelProxies", (() => function(mm) {
        mm.nodes().forEach((Tm => {
          let fm = mm.node(Tm);
          if ("edge-proxy" === fm.dummy) {
            let hm = fm;
            mm.edge(hm.e).labelRank = fm.rank, mm.removeNode(Tm)
          }
        }))
      }(mm))), Tm("    normalize.run", (() => YT(mm))), Tm("    parentDummyChains", (() => CT(mm))), Tm("    addBorderSegments", (() => lT(mm))), Tm("    order", (() => hf(mm, fm, Dm))), Tm("    insertSelfEdges", (() => function(mm) {
        Bm(mm).forEach((Tm => {
          let fm = 0;
          Tm.forEach(((Tm, hm) => {
            let Am = mm.node(Tm);
            "number" != typeof Am.rank && (Am.rank = 0), Am.order = hm + fm, (Am.selfEdges || []).forEach((Tm => {
              lm(mm, "selfedge", {
                width: Tm.label.width,
                height: Tm.label.height,
                rank: Am.rank,
                order: hm + ++fm,
                e: Tm.e,
                edgeLabel: Tm.label
              }, "_se"), (!Array.isArray(Tm.label.points) || 7 !== Tm.label.points.length) && (Tm.label.points = [{
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
            })), delete Am.selfEdges
          }))
        }))
      }(mm))), Tm("    adjustCoordinateSystem", (() => function(mm) {
        var Tm;
        let fm = null == (Tm = mm.graph().rankdir) ? void 0 : Tm.toLowerCase();
        ("lr" === fm || "rl" === fm) && BT(mm)
      }(mm))), Tm("    position", (() => of(mm, fm.corePath))), Tm("    positionSelfEdges", (() => function(mm) {
        mm.nodes().forEach((Tm => {
          let fm = mm.node(Tm),
            hm = mm => "number" == typeof mm && isFinite(mm);
          if ("selfedge" === fm.dummy) {
            let Am = fm,
              am = mm.node(Am.e.v),
              xm = hm(null == am ? void 0 : am.x) ? am.x : 0,
              wm = hm(null == am ? void 0 : am.y) ? am.y : 0,
              Dm = hm(null == am ? void 0 : am.width) ? am.width : 0,
              im = hm(null == am ? void 0 : am.height) ? am.height : 0,
              Rm = hm(fm.x) ? fm.x : xm,
              pm = hm(fm.y) ? fm.y : wm,
              Em = Dm / 2,
              om = im / 2;
            Am.edgeLabel.points = [{
              x: Rm + Em,
              y: pm - om
            }, {
              x: Rm + Em,
              y: pm - om
            }, {
              x: Rm,
              y: pm
            }, {
              x: Rm - Em,
              y: pm + om
            }, {
              x: Rm - Em,
              y: pm + om
            }, {
              x: Rm,
              y: pm
            }, {
              x: Rm,
              y: pm
            }], Am.edgeLabel.x = Rm, Am.edgeLabel.y = pm, mm.setEdge(Am.e, Am.edgeLabel), mm.removeNode(Tm)
          } else fm && Array.isArray(fm.selfEdges) && fm.selfEdges.forEach((mm => {
            if (!Array.isArray(mm.label.points) || 7 !== mm.label.points.length) {
              let Tm = hm(fm.x) ? fm.x : 0,
                Am = hm(fm.y) ? fm.y : 0,
                am = (hm(fm.width) ? fm.width : 0) / 2,
                xm = (hm(fm.height) ? fm.height : 0) / 2;
              mm.label.points = [{
                x: Tm + am,
                y: Am - xm
              }, {
                x: Tm + am,
                y: Am - xm
              }, {
                x: Tm,
                y: Am
              }, {
                x: Tm - am,
                y: Am + xm
              }, {
                x: Tm - am,
                y: Am + xm
              }, {
                x: Tm,
                y: Am
              }, {
                x: Tm,
                y: Am
              }]
            }
          }))
        }))
      }(mm)));
      let im = JSON.parse(JSON.stringify(mm._nodes));
      return Tm("    removeBorderNodes", (() => function(mm) {
        mm.nodes().forEach((Tm => {
          if (mm.children(Tm).length) {
            let fm = mm.node(Tm),
              hm = mm.node(fm.borderTop),
              Am = mm.node(fm.borderBottom),
              am = mm.node(fm.borderLeft[fm.borderLeft.length - 1]),
              xm = mm.node(fm.borderRight[fm.borderRight.length - 1]);
            fm.width = Math.abs(xm.x - am.x), fm.height = Math.abs(Am.y - hm.y), fm.x = am.x + fm.width / 2, fm.y = hm.y + fm.height / 2
          }
        })), mm.nodes().forEach((Tm => {
          "border" === mm.node(Tm).dummy && mm.removeNode(Tm)
        }))
      }(mm))), Tm("    normalize.undo", (() => function(mm) {
        mm.graph().dummyChains.forEach((Tm => {
          let fm, hm = mm.node(Tm),
            Am = hm.edgeLabel;
          for (mm.setEdge(hm.edgeObj, Am); hm.dummy;) fm = mm.successors(Tm)[0], mm.removeNode(Tm), Am.points.push({
            x: hm.x,
            y: hm.y
          }), "edge-label" === hm.dummy && (Am.x = hm.x, Am.y = hm.y, Am.width = hm.width, Am.height = hm.height), Tm = fm, hm = mm.node(Tm)
        }))
      }(mm))), Tm("    fixupEdgeLabelCoords", (() => function(mm) {
        mm.edges().forEach((Tm => {
          let fm = mm.edge(Tm);
          if (Object.hasOwn(fm, "x")) switch (("l" === fm.labelpos || "r" === fm.labelpos) && (fm.width -= fm.labeloffset), fm.labelpos) {
            case "l":
              fm.x -= fm.width / 2 + fm.labeloffset;
              break;
            case "r":
              fm.x += fm.width / 2 + fm.labeloffset
          }
        }))
      }(mm))), Tm("    undoCoordinateSystem", (() => uT(mm))), Tm("    translateGraph", (() => function(mm) {
        let Tm = Number.POSITIVE_INFINITY,
          fm = 0,
          hm = Number.POSITIVE_INFINITY,
          Am = 0,
          am = mm.graph(),
          xm = am.marginx || 0,
          wm = am.marginy || 0;

        function Dm(mm) {
          let am = mm.x,
            xm = mm.y,
            wm = mm.width,
            Dm = mm.height;
          Tm = Math.min(Tm, am - wm / 2), fm = Math.max(fm, am + wm / 2), hm = Math.min(hm, xm - Dm / 2), Am = Math.max(Am, xm + Dm / 2)
        }
        mm.nodes().forEach((Tm => Dm(mm.node(Tm)))), mm.edges().forEach((Tm => {
          let fm = mm.edge(Tm);
          Object.hasOwn(fm, "x") && Dm(fm)
        })), Tm -= xm, hm -= wm, mm.nodes().forEach((fm => {
          let Am = mm.node(fm);
          Am.x -= Tm, Am.y -= hm
        })), mm.edges().forEach((fm => {
          let Am = mm.edge(fm);
          Am.points.forEach((mm => {
            mm.x -= Tm, mm.y -= hm
          })), Object.hasOwn(Am, "x") && (Am.x -= Tm), Object.hasOwn(Am, "y") && (Am.y -= hm)
        })), am.width = fm - Tm + xm, am.height = Am - hm + wm
      }(mm))), Tm("    assignNodeIntersects", (() => function(mm) {
        mm.edges().forEach((Tm => {
          if (Tm.v === Tm.w) return;
          let fm, hm, Am = mm.edge(Tm),
            am = mm.node(Tm.v),
            xm = mm.node(Tm.w);
          Am.points ? (fm = Am.points[0], hm = Am.points[Am.points.length - 1]) : (Am.points = [], fm = xm, hm = am), Am.points.unshift(um(am, fm)), Am.points.push(um(xm, hm))
        }))
      }(mm))), Tm("    reversePoints", (() => function(mm) {
        mm.edges().forEach((Tm => {
          let fm = mm.edge(Tm);
          fm.reversed && fm.points.reverse()
        }))
      }(mm))), Tm("    acyclic.undo", (() => function(mm) {
        mm.edges().forEach((Tm => {
          let fm = mm.edge(Tm);
          if (fm.reversed) {
            mm.removeEdge(Tm);
            let hm = fm.forwardName;
            delete fm.reversed, delete fm.forwardName, mm.setEdge(Tm.w, Tm.v, fm, hm)
          }
        }))
      }(mm))), {
        graph: mm,
        rawNodes: im
      }
    }

    function If(mm, Tm) {
      mm.nodes().forEach((fm => {
        let hm = mm.node(fm),
          Am = Tm.node(fm);
        hm && (hm.x = Am.x, hm.y = Am.y, hm.order = Am.order, hm.rank = Am.rank, Tm.children(fm).length && (hm.width = Am.width, hm.height = Am.height))
      })), mm.edges().forEach((fm => {
        let hm = mm.edge(fm),
          Am = Tm.edge(fm);
        hm.points = Am.points, Object.hasOwn(Am, "x") && (hm.x = Am.x, hm.y = Am.y)
      })), mm.graph().width = Tm.graph().width, mm.graph().height = Tm.graph().height
    }
    var Kf = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Qf = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      nf = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Jf = ["width", "height", "rank"],
      zf = {
        width: 0,
        height: 0
      },
      Zf = ["minlen", "weight", "width", "height", "labeloffset"],
      kf = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      bf = ["labelpos"];

    function Sf(mm) {
      let Tm = new sm({
          multigraph: !0,
          compound: !0
        }),
        fm = Nf(mm.graph());
      return Tm.setGraph(Object.assign({}, Qf, ef(fm, Kf), fT(fm, nf))), mm.nodes().forEach((fm => {
        let hm = ef(Nf(mm.node(fm)), Jf);
        Object.keys(zf).forEach((mm => {
          void 0 === hm[mm] && (hm[mm] = zf[mm])
        })), Tm.setNode(fm, hm);
        let Am = mm.parent(fm);
        void 0 !== Am && Tm.setParent(fm, Am)
      })), mm.edges().forEach((fm => {
        let hm = Nf(mm.edge(fm));
        Tm.setEdge(fm, Object.assign({}, kf, ef(hm, Zf), fT(hm, bf)))
      })), Tm
    }

    function ef(mm, Tm) {
      return hT(fT(mm, Tm), Number)
    }

    function Nf(mm) {
      let Tm = {};
      return mm && Object.entries(mm).forEach((mm => {
        let [fm, hm] = mm;
        "string" == typeof fm && (fm = fm.toLowerCase()), Tm[fm] = hm
      })), Tm
    }

    function Gf(mm) {
      let Tm = Bm(mm),
        fm = new sm({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return mm.nodes().forEach((Tm => {
        fm.setNode(Tm, {
          label: Tm
        }), fm.setParent(Tm, "layer" + mm.node(Tm).rank)
      })), mm.edges().forEach((mm => fm.setEdge(mm.v, mm.w, {}, mm.name))), Tm.forEach(((mm, Tm) => {
        let hm = "layer" + Tm;
        fm.setNode(hm, {
          rank: "same"
        }), mm.reduce(((mm, Tm) => (fm.setEdge(mm, Tm, {
          style: "invis"
        }), Tm)))
      })), fm
    }
    var Xf = {
        time: gm,
        notime: Wm
      },
      Pf = {
        graphlib: am,
        version: xT,
        layout: Yf,
        debug: Gf,
        util: {
          time: gm,
          notime: Wm
        }
      }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);