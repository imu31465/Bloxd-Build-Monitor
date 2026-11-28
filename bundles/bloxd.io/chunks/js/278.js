export const id = 278;
export const ids = [278];
export const modules = {
  53802: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(41777),
      Hb = Mb(53811);
    class pb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = Mb, this.Fpb = [], this._maxBlockCapacity = wb || 64, this._selectionContent = new eb.e(1024), this._creationFunc = bb
      }
      update(bb, wb, Mb) {
        Hb.d._CreateBlocks(bb, wb, Mb, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      lpb(bb) {
        for (let wb = 0; wb < this.blocks.length; wb++) {
          this.blocks[wb].addEntry(bb)
        }
      }
      dJ(bb) {
        for (let wb = 0; wb < this.blocks.length; wb++) {
          this.blocks[wb].removeEntry(bb)
        }
      }
      select(bb, wb) {
        this._selectionContent.reset();
        for (let Mb = 0; Mb < this.blocks.length; Mb++) {
          this.blocks[Mb].select(bb, this._selectionContent, wb)
        }
        return wb ? this._selectionContent.concat(this.Fpb) : this._selectionContent.concatWithNoDuplicate(this.Fpb), this._selectionContent
      }
      intersects(bb, wb, Mb) {
        this._selectionContent.reset();
        for (let eb = 0; eb < this.blocks.length; eb++) {
          this.blocks[eb].intersects(bb, wb, this._selectionContent, Mb)
        }
        return Mb ? this._selectionContent.concat(this.Fpb) : this._selectionContent.concatWithNoDuplicate(this.Fpb), this._selectionContent
      }
      intersectsRay(bb) {
        this._selectionContent.reset();
        for (let wb = 0; wb < this.blocks.length; wb++) {
          this.blocks[wb].intersectsRay(bb, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.Fpb), this._selectionContent
      }
    }
    pb.CreationFuncForMeshes = (bb, wb) => {
      const Mb = bb.XN();
      !bb.isBlocked && Mb.boundingBox.intersectsMinMax(wb.gpb, wb.Vpb) && wb.entries.push(bb)
    }, pb.CreationFuncForSubMeshes = (bb, wb) => {
      bb.XN().boundingBox.intersectsMinMax(wb.gpb, wb.Vpb) && wb.entries.push(bb)
    }
  },
  53811: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb
    });
    var eb = Mb(38285),
      Hb = Mb(41988);
    class pb {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.entries = [], this.Bpb = new Array, this._capacity = Mb, this._depth = eb, this._maxDepth = Hb, this._creationFunc = pb, this._minPoint = bb, this._maxPoint = wb, this.Bpb.push(bb.clone()), this.Bpb.push(wb.clone()), this.Bpb.push(bb.clone()), this.Bpb[2].x = wb.x, this.Bpb.push(bb.clone()), this.Bpb[3].y = wb.y, this.Bpb.push(bb.clone()), this.Bpb[4].z = wb.z, this.Bpb.push(wb.clone()), this.Bpb[5].z = bb.z, this.Bpb.push(wb.clone()), this.Bpb[6].x = bb.x, this.Bpb.push(wb.clone()), this.Bpb[7].y = bb.y
      }
      get qO() {
        return this._capacity
      }
      get gpb() {
        return this._minPoint
      }
      get Vpb() {
        return this._maxPoint
      }
      addEntry(bb) {
        if (this.blocks)
          for (let wb = 0; wb < this.blocks.length; wb++) {
            this.blocks[wb].addEntry(bb)
          } else this._creationFunc(bb, this), this.entries.length > this.qO && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(bb) {
        if (this.blocks) {
          for (let wb = 0; wb < this.blocks.length; wb++) {
            this.blocks[wb].removeEntry(bb)
          }
          return
        }
        const wb = this.entries.indexOf(bb);
        wb > -1 && this.entries.splice(wb, 1)
      }
      addEntries(bb) {
        for (let wb = 0; wb < bb.length; wb++) {
          const Mb = bb[wb];
          this.addEntry(Mb)
        }
      }
      select(bb, wb, Mb) {
        if (Hb.b.IsInFrustum(this.Bpb, bb)) {
          if (this.blocks) {
            for (let eb = 0; eb < this.blocks.length; eb++) {
              this.blocks[eb].select(bb, wb, Mb)
            }
            return
          }
          Mb ? wb.concat(this.entries) : wb.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(bb, wb, Mb, eb) {
        if (Hb.b.IntersectsSphere(this._minPoint, this._maxPoint, bb, wb)) {
          if (this.blocks) {
            for (let Hb = 0; Hb < this.blocks.length; Hb++) {
              this.blocks[Hb].intersects(bb, wb, Mb, eb)
            }
            return
          }
          eb ? Mb.concat(this.entries) : Mb.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(bb, wb) {
        if (bb.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let Mb = 0; Mb < this.blocks.length; Mb++) {
              this.blocks[Mb].intersectsRay(bb, wb)
            }
            return
          }
          wb.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        pb._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(bb, wb, Mb, Hb, Vb, gb, lb, Lb) {
        lb.blocks = new Array;
        const Ib = new eb.o((wb.x - bb.x) / 2, (wb.y - bb.y) / 2, (wb.z - bb.z) / 2);
        for (let eb = 0; eb < 2; eb++)
          for (let wb = 0; wb < 2; wb++)
            for (let Ob = 0; Ob < 2; Ob++) {
              const Ub = bb.add(Ib.multiplyByFloats(eb, wb, Ob)),
                tb = bb.add(Ib.multiplyByFloats(eb + 1, wb + 1, Ob + 1)),
                Cb = new pb(Ub, tb, Hb, Vb + 1, gb, Lb);
              Cb.addEntries(Mb), lb.blocks.push(Cb)
            }
      }
    }
  },
  53820: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib
    });
    var eb = Mb(41764),
      Hb = Mb(38285),
      pb = Mb(42109),
      Vb = Mb(53751),
      gb = Mb(41841),
      lb = Mb(38313),
      Lb = Mb(53802);
    class Ib {
      constructor(bb) {
        this.name = gb.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Vb.A(Hb.o.Zero(), new Hb.o(1, 1, 1)), (bb = bb || lb.e.LastCreatedScene) && (this.JE = bb, this.JE.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.JE.getActiveSubMeshCandidates = bb => this.getActiveSubMeshCandidates(bb), this.JE.getCollidingSubMeshCandidates = (bb, wb) => this.getCollidingSubMeshCandidates(bb, wb), this.JE.getIntersectingSubMeshCandidates = (bb, wb) => this.getIntersectingSubMeshCandidates(bb, wb))
      }
      register() {
        this.JE.onMeshRemovedObservable.add((bb => {
          const wb = this.JE.selectionOctree;
          if (void 0 !== wb && null !== wb) {
            const Mb = wb.Fpb.indexOf(bb); - 1 !== Mb && wb.Fpb.splice(Mb, 1)
          }
        })), this.JE.onMeshImportedObservable.add((bb => {
          const wb = this.JE.selectionOctree;
          void 0 !== wb && null !== wb && wb.lpb(bb)
        }))
      }
      getActiveMeshCandidates() {
        return this.JE.xpb?.select(this.JE.frustumPlanes) || this.JE._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(bb) {
        if (bb._submeshesOctree && bb.useOctreeForRenderingSelection) {
          return bb._submeshesOctree.select(this.JE.frustumPlanes)
        }
        return this.JE._getDefaultSubMeshCandidates(bb)
      }
      getIntersectingSubMeshCandidates(bb, wb) {
        if (bb._submeshesOctree && bb.useOctreeForPicking) {
          Vb.A.TransformToRef(wb, bb.getWorldMatrix(), this._tempRay);
          return bb._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.JE._getDefaultSubMeshCandidates(bb)
      }
      getCollidingSubMeshCandidates(bb, wb) {
        if (bb._submeshesOctree && bb.useOctreeForCollisions) {
          const Mb = wb._velocityWorldLength + Math.max(wb._radius.x, wb._radius.y, wb._radius.z);
          return bb._submeshesOctree.intersects(wb._basePointWorld, Mb)
        }
        return this.JE._getDefaultSubMeshCandidates(bb)
      }
      rebuild() {}
      dispose() {}
    }
    let Ob = !1;
    Ob || (Ob = !0, eb.g.prototype.createOrUpdateSelectionOctree = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        Mb = this._getComponent(gb.b.NAME_OCTREE);
      Mb || (Mb = new Ib(this), this.BHb(Mb)), this.xpb || (this.xpb = new Lb.c(Lb.c.CreationFuncForMeshes, bb, wb));
      const eb = this.getWorldExtends();
      return this.xpb.update(eb.min, eb.max, this.meshes), this.xpb
    }, Object.defineProperty(eb.g.prototype, "selectionOctree", {
      get: function() {
        return this.xpb
      },
      enumerable: !0,
      configurable: !0
    }), pb.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const Mb = this.RJ();
      let eb = Mb._getComponent(gb.b.NAME_OCTREE);
      eb || (eb = new Ib(Mb), Mb.BHb(eb)), this._submeshesOctree || (this._submeshesOctree = new Lb.c(Lb.c.CreationFuncForSubMeshes, bb, wb)), this.computeWorldMatrix(!0);
      const Hb = this.XN().boundingBox;
      return this._submeshesOctree.update(Hb.minimumWorld, Hb.maximumWorld, this.oR), this._submeshesOctree
    })
  },
  53751: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Ob,
      d: () => cb,
      e: () => Eb,
      g: () => Cb,
      i: () => tb,
      l: () => Rb,
      p: () => rb,
      q: () => xb,
      t: () => Kb,
      w: () => jb
    });
    var eb = Mb(38294),
      Hb = Mb(38285),
      pb = Mb(38299),
      Vb = Mb(41981),
      gb = Mb(41808),
      lb = Mb(38313),
      Lb = Mb(41856);
    const Ib = {
      internalPickerForMesh: void 0
    };
    class Ob {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eb.e;
        this.origin = bb, this.direction = wb, this.length = Mb, this.epsilon = Hb
      }
      clone() {
        return new Ob(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const eb = Ob._TmpVector3[0].twb(bb.x - Mb, bb.y - Mb, bb.z - Mb),
          Hb = Ob._TmpVector3[1].twb(wb.x + Mb, wb.y + Mb, wb.z + Mb);
        let pb, Vb, gb, lb, Lb = 0,
          Ib = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < eb.x || this.origin.x > Hb.x) return !1
        } else if (pb = 1 / this.direction.x, Vb = (eb.x - this.origin.x) * pb, gb = (Hb.x - this.origin.x) * pb, gb === -1 / 0 && (gb = 1 / 0), Vb > gb && (lb = Vb, Vb = gb, gb = lb), Lb = Math.max(Vb, Lb), Ib = Math.min(gb, Ib), Lb > Ib) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < eb.y || this.origin.y > Hb.y) return !1
        } else if (pb = 1 / this.direction.y, Vb = (eb.y - this.origin.y) * pb, gb = (Hb.y - this.origin.y) * pb, gb === -1 / 0 && (gb = 1 / 0), Vb > gb && (lb = Vb, Vb = gb, gb = lb), Lb = Math.max(Vb, Lb), Ib = Math.min(gb, Ib), Lb > Ib) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < eb.z || this.origin.z > Hb.z) return !1
        } else if (pb = 1 / this.direction.z, Vb = (eb.z - this.origin.z) * pb, gb = (Hb.z - this.origin.z) * pb, gb === -1 / 0 && (gb = 1 / 0), Vb > gb && (lb = Vb, Vb = gb, gb = lb), Lb = Math.max(Vb, Lb), Ib = Math.min(gb, Ib), Lb > Ib) return !1;
        return !0
      }
      intersectsBox(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(bb.minimum, bb.maximum, wb)
      }
      intersectsSphere(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = bb.center.x - this.origin.x,
          eb = bb.center.y - this.origin.y,
          Hb = bb.center.z - this.origin.z,
          pb = Mb * Mb + eb * eb + Hb * Hb,
          Vb = bb.radius + wb,
          gb = Vb * Vb;
        if (pb <= gb) return !0;
        const lb = Mb * this.direction.x + eb * this.direction.y + Hb * this.direction.z;
        if (lb < 0) return !1;
        return pb - lb * lb <= gb
      }
      intersectsTriangle(bb, wb, Mb) {
        const eb = Ob._TmpVector3[0],
          pb = Ob._TmpVector3[1],
          gb = Ob._TmpVector3[2],
          lb = Ob._TmpVector3[3],
          Lb = Ob._TmpVector3[4];
        wb.subtractToRef(bb, eb), Mb.subtractToRef(bb, pb), Hb.o.CrossToRef(this.direction, pb, gb);
        const Ib = Hb.o.Dot(eb, gb);
        if (0 === Ib) return null;
        const Ub = 1 / Ib;
        this.origin.subtractToRef(bb, lb);
        const tb = Hb.o.Dot(lb, gb) * Ub;
        if (tb < -this.epsilon || tb > 1 + this.epsilon) return null;
        Hb.o.CrossToRef(lb, eb, Lb);
        const Cb = Hb.o.Dot(this.direction, Lb) * Ub;
        if (Cb < -this.epsilon || tb + Cb > 1 + this.epsilon) return null;
        const Eb = Hb.o.Dot(pb, Lb) * Ub;
        return Eb > this.length || Eb < 0 ? null : new Vb.c(1 - tb - Cb, tb, Eb)
      }
      intersectsPlane(bb) {
        let wb;
        const Mb = Hb.o.Dot(bb.normal, this.direction);
        if (Math.abs(Mb) < 9.99999997475243e-7) return null;
        {
          const eb = Hb.o.Dot(bb.normal, this.origin);
          return wb = (-bb.d - eb) / Mb, wb < 0 ? wb < -9.99999997475243e-7 ? null : 0 : wb
        }
      }
      intersectsAxis(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (bb) {
          case "y": {
            const bb = (this.origin.y - wb) / this.direction.y;
            return bb > 0 ? null : new Hb.o(this.origin.x + this.direction.x * -bb, wb, this.origin.z + this.direction.z * -bb)
          }
          case "x": {
            const bb = (this.origin.x - wb) / this.direction.x;
            return bb > 0 ? null : new Hb.o(wb, this.origin.y + this.direction.y * -bb, this.origin.z + this.direction.z * -bb)
          }
          case "z": {
            const bb = (this.origin.z - wb) / this.direction.z;
            return bb > 0 ? null : new Hb.o(this.origin.x + this.direction.x * -bb, this.origin.y + this.direction.y * -bb, wb)
          }
          default:
            return null
        }
      }
      Gpb(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pb = arguments.length > 4 ? arguments[4] : void 0,
          Vb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const gb = Hb.j.Matrix[0];
        return bb.getWorldMatrix().invertToRef(gb), this._tmpRay ? Ob.TransformToRef(this, gb, this._tmpRay) : this._tmpRay = Ob.Transform(this, gb), bb.intersects(this._tmpRay, wb, Mb, eb, pb, Vb)
      }
      intersectsMeshes(bb, wb, Mb) {
        Mb ? Mb.length = 0 : Mb = [];
        for (let eb = 0; eb < bb.length; eb++) {
          const Hb = this.Gpb(bb[eb], wb);
          Hb.hit && Mb.push(Hb)
        }
        return Mb.sort(this._comparePickingInfo), Mb
      }
      _comparePickingInfo(bb, wb) {
        return bb.distance < wb.distance ? -1 : bb.distance > wb.distance ? 1 : 0
      }
      intersectionSegment(bb, wb, Mb) {
        const eb = this.origin,
          pb = Hb.j.YC[0],
          Vb = Hb.j.YC[1],
          gb = Hb.j.YC[2],
          lb = Hb.j.YC[3];
        wb.subtractToRef(bb, pb), this.direction.scaleToRef(Ob._Rayl, gb), eb.addToRef(gb, Vb), bb.subtractToRef(eb, lb);
        const Lb = Hb.o.Dot(pb, pb),
          Ib = Hb.o.Dot(pb, gb),
          Ub = Hb.o.Dot(gb, gb),
          tb = Hb.o.Dot(pb, lb),
          Cb = Hb.o.Dot(gb, lb),
          Eb = Lb * Ub - Ib * Ib;
        let Fb, Bb, sb = Eb,
          mb = Eb;
        Eb < Ob._Smallnum ? (Fb = 0, sb = 1, Bb = Cb, mb = Ub) : (Fb = Ib * Cb - Ub * tb, Bb = Lb * Cb - Ib * tb, Fb < 0 ? (Fb = 0, Bb = Cb, mb = Ub) : Fb > sb && (Fb = sb, Bb = Cb + Ib, mb = Ub)), Bb < 0 ? (Bb = 0, -tb < 0 ? Fb = 0 : -tb > Lb ? Fb = sb : (Fb = -tb, sb = Lb)) : Bb > mb && (Bb = mb, -tb + Ib < 0 ? Fb = 0 : -tb + Ib > Lb ? Fb = sb : (Fb = -tb + Ib, sb = Lb));
        const hb = Math.abs(Fb) < Ob._Smallnum ? 0 : Fb / sb,
          zb = Math.abs(Bb) < Ob._Smallnum ? 0 : Bb / mb,
          Xb = Hb.j.YC[4];
        gb.scaleToRef(zb, Xb);
        const xb = Hb.j.YC[5];
        pb.scaleToRef(hb, xb), xb.addInPlace(lb);
        const jb = Hb.j.YC[6];
        xb.subtractToRef(Xb, jb);
        return zb > 0 && zb <= this.length && jb.lengthSquared() < Mb * Mb ? xb.length() : -1
      }
      update(bb, wb, Mb, eb, pb, Vb, gb) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Ob._RayDistant || (Ob._RayDistant = Ob.Zero()), Ob._RayDistant.unprojectRayToRef(bb, wb, Mb, eb, Hb.b.IdentityReadOnly, Vb, gb);
          const lb = Hb.j.Matrix[0];
          pb.invertToRef(lb), Ob.TransformToRef(Ob._RayDistant, lb, this)
        } else this.unprojectRayToRef(bb, wb, Mb, eb, pb, Vb, gb);
        return this
      }
      static Zero() {
        return new Ob(Hb.o.Zero(), Hb.o.Zero())
      }
      static CreateNew(bb, wb, Mb, eb, Hb, pb, Vb) {
        return Ob.Zero().update(bb, wb, Mb, eb, Hb, pb, Vb)
      }
      static CreateNewFromTo(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hb.b.IdentityReadOnly;
        const eb = new Ob(new Hb.o(0, 0, 0), new Hb.o(0, 0, 0));
        return Ob.CreateFromToToRef(bb, wb, eb, Mb)
      }
      static CreateFromToToRef(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Hb.b.IdentityReadOnly;
        Mb.origin.eZ(bb);
        const pb = wb.subtractToRef(bb, Mb.direction),
          Vb = Math.sqrt(pb.x * pb.x + pb.y * pb.y + pb.z * pb.z);
        return Mb.length = Vb, Mb.direction.normalize(), Ob.TransformToRef(Mb, eb, Mb)
      }
      static Transform(bb, wb) {
        const Mb = new Ob(new Hb.o(0, 0, 0), new Hb.o(0, 0, 0));
        return Ob.TransformToRef(bb, wb, Mb), Mb
      }
      static TransformToRef(bb, wb, Mb) {
        Hb.o.TransformCoordinatesToRef(bb.origin, wb, Mb.origin), Hb.o.TransformNormalToRef(bb.direction, wb, Mb.direction), Mb.length = bb.length, Mb.epsilon = bb.epsilon;
        const eb = Mb.direction,
          pb = eb.length();
        if (0 !== pb && 1 !== pb) {
          const bb = 1 / pb;
          eb.x *= bb, eb.y *= bb, eb.z *= bb, Mb.length *= pb
        }
        return Mb
      }
      unprojectRayToRef(bb, wb, Mb, eb, pb, Vb, gb) {
        const Lb = Hb.j.Matrix[0];
        pb.multiplyToRef(Vb, Lb), Lb.multiplyToRef(gb, Lb), Lb.invert();
        const Ib = lb.e.LastCreatedEngine,
          Ob = Hb.j.YC[0];
        Ob.x = bb / Mb * 2 - 1, Ob.y = -(wb / eb * 2 - 1), Ob.z = Ib?.rHb ? 1 : Ib?.isNDCHalfZRange ? 0 : -1;
        const Ub = Hb.j.YC[1].twb(Ob.x, Ob.y, 1 - 1e-8),
          tb = Hb.j.YC[2],
          Cb = Hb.j.YC[3];
        Hb.o.TransformCoordinatesToRef(Ob, Lb, tb), Hb.o.TransformCoordinatesToRef(Ub, Lb, Cb), this.origin.eZ(tb), Cb.subtractToRef(tb, this.direction), this.direction.normalize()
      }
    }

    function Ub(bb, wb, Mb, eb, Hb) {
      let pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Vb = Ob.Zero();
      return tb(bb, wb, Mb, eb, Vb, Hb, pb), Vb
    }

    function tb(bb, wb, Mb, eb, pb, Vb) {
      let gb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Lb = bb.DC();
      if (!Vb && !(Vb = bb.activeCamera) && !(Vb = bb.cameraToUseForPointers)) return bb;
      const Ib = Vb.viewport,
        Ob = Lb.getRenderHeight(),
        {
          x: Ub,
          y: tb,
          width: Cb,
          height: Eb
        } = Ib.toGlobal(Lb.getRenderWidth(), Ob),
        Fb = 1 / Lb.getHardwareScalingLevel();
      return wb = wb * Fb - Ub, Mb = Mb * Fb - (Ob - tb - Eb), pb.update(wb, Mb, Cb, Eb, eb || Hb.b.IdentityReadOnly, gb ? Hb.b.IdentityReadOnly : Vb.getViewMatrix(), Vb.getProjectionMatrix(), lb), bb
    }

    function Cb(bb, wb, Mb, eb) {
      const Hb = Ob.Zero();
      return Eb(bb, wb, Mb, Hb, eb), Hb
    }

    function Eb(bb, wb, Mb, eb, pb) {
      if (!gb.c) return bb;
      const Vb = bb.DC();
      if (!pb && !(pb = bb.activeCamera) && !(pb = bb.cameraToUseForPointers)) throw new Error("Active camera not set");
      const lb = pb.viewport,
        Lb = Vb.getRenderHeight(),
        {
          x: Ib,
          y: Ob,
          width: Ub,
          height: tb
        } = lb.toGlobal(Vb.getRenderWidth(), Lb),
        Cb = Hb.b.Identity(),
        Eb = 1 / Vb.getHardwareScalingLevel();
      return wb = wb * Eb - Ib, Mb = Mb * Eb - (Lb - Ob - tb), eb.update(wb, Mb, Ub, tb, Cb, Cb, pb.getProjectionMatrix()), bb
    }

    function Fb(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
      return Bb(bb, Mb, eb, wb(eb, Mb.enableDistantPicking), Hb, pb, Vb, gb)
    }

    function Bb(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
      const lb = wb.intersects(eb, Hb, Vb, pb, Mb, gb);
      return lb && lb.hit ? !Hb && null != bb && lb.distance >= bb.distance ? null : lb : null
    }

    function sb(bb, wb) {
      return "InstancedLinesMesh" === bb || "LinesMesh" === bb ? wb.intersectionThreshold : 0
    }

    function mb(bb) {
      const wb = bb.getClassName();
      if ("GreasedLineMesh" === wb) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const Mb = bb.rawBoundingInfo;
      return {
        rawBoundingInfo: Mb,
        intersectionThreshold: Mb ? sb(wb, bb) : 0
      }
    }

    function hb(bb, wb, Mb, eb, Hb) {
      const pb = bb(Mb, wb.enableDistantPicking);
      return pb.intersectsSphere(eb.Kpb, Hb) && pb.intersectsBox(eb.boundingBox, Hb) ? pb : null
    }

    function zb(bb, wb, Mb, eb, pb, Vb) {
      let lb = null;
      const Lb = !!(bb.activeCameras && bb.activeCameras.length > 1 && bb.cameraToUseForPointers !== bb.activeCamera),
        Ob = bb.cameraToUseForPointers || bb.activeCamera,
        Ub = Ib.internalPickerForMesh || Fb,
        tb = Ub === Fb;
      for (let gb = 0; gb < bb.meshes.length; gb++) {
        const Ib = bb.meshes[gb];
        if (Mb) {
          if (!Mb(Ib, -1)) continue
        } else if (!Ib.isEnabled() || !Ib.isVisible || !Ib.NE) continue;
        const Cb = Lb && Ib.isWorldMatrixCameraDependent(),
          Eb = Ib.computeWorldMatrix(Cb, Ob);
        if (Ib.hasThinInstances && Ib.uMb) {
          const bb = Ub(lb, wb, Ib, Eb, !0, !0, Vb);
          if (bb) {
            if (pb) return bb;
            const {
              rawBoundingInfo: gb,
              intersectionThreshold: Lb
            } = mb(Ib), Ob = Ib._thinInstanceDataStorage.matrixData;
            if (Ob) {
              const bb = Hb.j.Matrix[0],
                Cb = Hb.j.Matrix[1],
                Fb = Math.min(Ib.ibb, Ob.length >> 4);
              for (let sb = 0; sb < Fb; sb++) {
                if (Mb && !Mb(Ib, sb)) continue;
                Hb.b.FromArrayToRef(Ob, sb << 4, bb), bb.multiplyToRef(Eb, Cb);
                const Fb = tb && gb ? hb(wb, Ib, Cb, gb, Lb) : null;
                if (tb && gb && !Fb) continue;
                const mb = tb && Fb ? Bb(lb, Ib, Cb, Fb, eb, pb, Vb, !0) : Ub(lb, wb, Ib, Cb, eb, pb, Vb, !0);
                if (mb && (lb = mb, lb.thinInstanceIndex = sb, eb)) return lb
              }
            }
          }
        } else {
          const bb = Ub(lb, wb, Ib, Eb, eb, pb, Vb);
          if (bb && (lb = bb, eb)) return lb
        }
      }
      return lb || new gb.c
    }

    function Xb(bb, wb, Mb, eb) {
      if (!gb.c) return null;
      const pb = [],
        Vb = !!(bb.activeCameras && bb.activeCameras.length > 1 && bb.cameraToUseForPointers !== bb.activeCamera),
        lb = bb.cameraToUseForPointers || bb.activeCamera,
        Lb = Ib.internalPickerForMesh || Fb,
        Ob = Lb === Fb;
      for (let gb = 0; gb < bb.meshes.length; gb++) {
        const Ib = bb.meshes[gb];
        if (Mb) {
          if (!Mb(Ib, -1)) continue
        } else if (!Ib.isEnabled() || !Ib.isVisible || !Ib.NE) continue;
        const Ub = Vb && Ib.isWorldMatrixCameraDependent(),
          tb = Ib.computeWorldMatrix(Ub, lb);
        if (Ib.hasThinInstances && Ib.uMb) {
          if (Lb(null, wb, Ib, tb, !0, !0, eb)) {
            const {
              rawBoundingInfo: bb,
              intersectionThreshold: Vb
            } = mb(Ib), gb = Ib._thinInstanceDataStorage.matrixData;
            if (gb) {
              const lb = Hb.j.Matrix[0],
                Ub = Hb.j.Matrix[1],
                Cb = Math.min(Ib.ibb, gb.length >> 4);
              for (let Eb = 0; Eb < Cb; Eb++) {
                if (Mb && !Mb(Ib, Eb)) continue;
                Hb.b.FromArrayToRef(gb, Eb << 4, lb), lb.multiplyToRef(tb, Ub);
                const Cb = Ob && bb ? hb(wb, Ib, Ub, bb, Vb) : null;
                if (Ob && bb && !Cb) continue;
                const Fb = Ob && Cb ? Bb(null, Ib, Ub, Cb, !1, !1, eb, !0) : Lb(null, wb, Ib, Ub, !1, !1, eb, !0);
                Fb && (Fb.thinInstanceIndex = Eb, pb.push(Fb))
              }
            }
          }
        } else {
          const bb = Lb(null, wb, Ib, tb, !1, !1, eb);
          bb && pb.push(bb)
        }
      }
      return pb
    }

    function xb(bb, wb, Mb, eb, pb, Vb) {
      if (!gb.c) return null;
      const lb = zb(bb, (eb => (bb._tempPickingRay || (bb._tempPickingRay = Ob.Zero()), tb(bb, wb, Mb, eb, bb._tempPickingRay, Vb || null), bb._tempPickingRay)), eb, pb, !0);
      return lb && (lb.ray = Ub(bb, wb, Mb, Hb.b.Identity(), Vb || null)), lb
    }

    function jb(bb, wb, Mb, eb, pb, Vb, gb) {
      const lb = zb(bb, ((eb, Hb) => (bb._tempPickingRay || (bb._tempPickingRay = Ob.Zero()), tb(bb, wb, Mb, eb, bb._tempPickingRay, Vb || null, !1, Hb), bb._tempPickingRay)), eb, pb, !1, gb);
      return lb && (lb.ray = Ub(bb, wb, Mb, Hb.b.Identity(), Vb || null)), lb
    }

    function Kb(bb, wb, Mb, eb, pb) {
      const Vb = zb(bb, (Mb => (bb._pickWithRayInverseMatrix || (bb._pickWithRayInverseMatrix = Hb.b.Identity()), Mb.invertToRef(bb._pickWithRayInverseMatrix), bb._cachedRayForTransform || (bb._cachedRayForTransform = Ob.Zero()), Ob.TransformToRef(wb, bb._pickWithRayInverseMatrix, bb._cachedRayForTransform), bb._cachedRayForTransform)), Mb, eb, !1, pb);
      return Vb && (Vb.ray = wb), Vb
    }

    function rb(bb, wb, Mb, eb, Hb, pb) {
      return Xb(bb, (eb => Ub(bb, wb, Mb, eb, Hb || null)), eb, pb)
    }

    function Rb(bb, wb, Mb, eb) {
      return Xb(bb, (Mb => (bb._pickWithRayInverseMatrix || (bb._pickWithRayInverseMatrix = Hb.b.Identity()), Mb.invertToRef(bb._pickWithRayInverseMatrix), bb._cachedRayForTransform || (bb._cachedRayForTransform = Ob.Zero()), Ob.TransformToRef(wb, bb._pickWithRayInverseMatrix, bb._cachedRayForTransform), bb._cachedRayForTransform)), Mb, eb)
    }

    function Db(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        eb = arguments.length > 3 ? arguments[3] : void 0,
        pb = arguments.length > 4 ? arguments[4] : void 0;
      eb || (eb = bb.getWorldMatrix()), wb.length = Mb, pb ? wb.origin.eZ(pb) : wb.origin.eZ(bb.position);
      const Vb = Hb.j.YC[2];
      Vb.set(0, 0, bb._scene.useRightHandedSystem ? -1 : 1);
      const gb = Hb.j.YC[3];
      return Hb.o.TransformNormalToRef(Vb, eb, gb), Hb.o.NormalizeToRef(gb, wb.direction), wb
    }

    function cb(bb, wb) {
      wb && (wb.prototype.getForwardRay = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        return Db(this, new Ob(Hb.o.Zero(), Hb.o.Zero(), bb), bb, wb, Mb)
      }, wb.prototype.getForwardRayToRef = function(bb) {
        return Db(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), bb && (Lb.e._IsPickingAvailable = !0, bb.prototype.createPickingRay = function(bb, wb, Mb, eb) {
        return Ub(this, bb, wb, Mb, eb, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Ob._TmpVector3 = (0, pb.d)(6, Hb.o.Zero), Ob._RayDistant = Ob.Zero(), Ob._Smallnum = 1e-8, Ob._Rayl = 1e9
  },
  53743: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb.A
    });
    var eb = Mb(41764),
      Hb = Mb(41879),
      pb = Mb(53751);
    let Vb = !1;
    Vb || (Vb = !0, (0, pb.d)(eb.g, Hb.c), eb.g.prototype.createPickingRayToRef = function(bb, wb, Mb, eb, Hb) {
      let Vb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, pb.i)(this, bb, wb, Mb, eb, Hb, Vb, gb)
    }, eb.g.prototype.createPickingRayInCameraSpace = function(bb, wb, Mb) {
      return (0, pb.g)(this, bb, wb, Mb)
    }, eb.g.prototype.createPickingRayInCameraSpaceToRef = function(bb, wb, Mb, eb) {
      return (0, pb.e)(this, bb, wb, Mb, eb)
    }, eb.g.prototype.pickWithBoundingInfo = function(bb, wb, Mb, eb, Hb) {
      return (0, pb.q)(this, bb, wb, Mb, eb, Hb)
    }, eb.g.prototype.Vt = function(bb, wb, Mb, eb, Hb, Vb) {
      let gb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, pb.w)(this, bb, wb, Mb, eb, Hb, Vb, gb)
    }, eb.g.prototype.pickWithRay = function(bb, wb, Mb, eb) {
      return (0, pb.t)(this, bb, wb, Mb, eb)
    }, eb.g.prototype.multiPick = function(bb, wb, Mb, eb, Hb) {
      return (0, pb.p)(this, bb, wb, Mb, eb, Hb)
    }, eb.g.prototype.multiPickWithRay = function(bb, wb, Mb) {
      return (0, pb.l)(this, bb, wb, Mb)
    })
  },
  53757: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ib
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38285),
      Vb = Mb(41931),
      gb = Mb(53764),
      lb = Mb(41886),
      Lb = Mb(38333);
    let Ib = (() => {
        var bb;
        let wb, Mb, lb, Lb, Ib, Ob, Ub, tb, Cb = gb.e,
          Eb = [],
          Fb = [],
          Bb = [],
          sb = [],
          mb = [],
          hb = [],
          zb = [],
          Xb = [],
          xb = [],
          jb = [],
          Kb = [],
          rb = [],
          Rb = [];
        return bb = class extends Cb {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(bb) {
            this._shadowFrustumSize = bb, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(bb) {
            this._shadowOrthoScale = bb, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(bb) {
            this._orthoLeft = bb
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(bb) {
            this._orthoRight = bb
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(bb) {
            this._orthoTop = bb
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(bb) {
            this._orthoBottom = bb
          }
          constructor(bb, wb, Mb, Hb) {
            super(bb, Mb, Hb), this._shadowFrustumSize = ((0, eb.m)(this, Eb), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, eb.m)(this, Fb, !0), this.autoCalcShadowZBounds = ((0, eb.m)(this, Bb), (0, eb.m)(this, sb, !1)), this._orthoLeft = ((0, eb.m)(this, mb), (0, eb.m)(this, hb, Number.MAX_VALUE)), this._orthoRight = ((0, eb.m)(this, zb), (0, eb.m)(this, Xb, Number.MIN_VALUE)), this._orthoTop = ((0, eb.m)(this, xb), (0, eb.m)(this, jb, Number.MIN_VALUE)), this._orthoBottom = ((0, eb.m)(this, Kb), (0, eb.m)(this, rb, Number.MAX_VALUE)), (0, eb.m)(this, Rb), this.position = wb.scale(-1), this.direction = wb
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Vb.d.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(bb, wb, Mb) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(bb) : this._setDefaultAutoExtendShadowProjectionMatrix(bb, wb, Mb)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(bb) {
            const wb = this.RJ().activeCamera;
            pb.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : wb ? wb.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : wb ? wb.maxZ : 1e4, bb, this.RJ().DC().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(bb, wb, Mb) {
            const eb = this.RJ().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const bb = pb.o.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let eb = Number.MAX_VALUE,
                Hb = -Number.MAX_VALUE;
              for (let Vb = 0; Vb < Mb.length; Vb++) {
                const gb = Mb[Vb];
                if (!gb) continue;
                const lb = gb.XN().boundingBox;
                for (let Mb = 0; Mb < lb.vectorsWorld.length; Mb++) pb.o.TransformCoordinatesToRef(lb.vectorsWorld[Mb], wb, bb), bb.x < this._orthoLeft && (this._orthoLeft = bb.x), bb.y < this._orthoBottom && (this._orthoBottom = bb.y), bb.x > this._orthoRight && (this._orthoRight = bb.x), bb.y > this._orthoTop && (this._orthoTop = bb.y), this.autoCalcShadowZBounds && (bb.z < eb && (eb = bb.z), bb.z > Hb && (Hb = bb.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = eb, this._shadowMaxZ = Hb)
            }
            const Hb = this._orthoRight - this._orthoLeft,
              Vb = this._orthoTop - this._orthoBottom,
              gb = void 0 !== this.shadowMinZ ? this.shadowMinZ : eb?.minZ || 0,
              lb = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : eb?.maxZ || 1e4,
              Lb = this.RJ().DC().rHb;
            pb.b.OrthoOffCenterLHToRef(this._orthoLeft - Hb * this.shadowOrthoScale, this._orthoRight + Hb * this.shadowOrthoScale, this._orthoBottom - Vb * this.shadowOrthoScale, this._orthoTop + Vb * this.shadowOrthoScale, Lb ? lb : gb, Lb ? gb : lb, bb, this.RJ().DC().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(bb, wb) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, wb), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, wb), this)
          }
          transferToNodeMaterialEffect(bb, wb) {
            return this.computeTransformedInformation() ? (bb.setFloat3(wb, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (bb.setFloat3(wb, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(bb) {
            const wb = this._scene.DC();
            return !wb.rHb && wb.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(bb) {
            const wb = this._scene.DC();
            return wb.rHb && wb.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(bb, wb) {
            bb["DIRLIGHT" + wb] = !0
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Cb[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], lb = [(0, Hb.E)()], Lb = [(0, Hb.E)()], Ib = [(0, Hb.E)("orthoLeft")], Ob = [(0, Hb.E)("orthoRight")], Ub = [(0, Hb.E)("orthoTop")], tb = [(0, Hb.E)("orthoBottom")], (0, eb.i)(bb, null, wb, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: bb => "shadowFrustumSize" in bb,
              get: bb => bb.shadowFrustumSize
            },
            metadata: pb
          }, null, Eb), (0, eb.i)(bb, null, Mb, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "shadowOrthoScale" in bb,
              get: bb => bb.shadowOrthoScale
            },
            metadata: pb
          }, null, Eb), (0, eb.i)(null, null, lb, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoUpdateExtends" in bb,
              get: bb => bb.autoUpdateExtends,
              set: (bb, wb) => {
                bb.autoUpdateExtends = wb
              }
            },
            metadata: pb
          }, Fb, Bb), (0, eb.i)(null, null, Lb, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoCalcShadowZBounds" in bb,
              get: bb => bb.autoCalcShadowZBounds,
              set: (bb, wb) => {
                bb.autoCalcShadowZBounds = wb
              }
            },
            metadata: pb
          }, sb, mb), (0, eb.i)(null, null, Ib, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoLeft" in bb,
              get: bb => bb._orthoLeft,
              set: (bb, wb) => {
                bb._orthoLeft = wb
              }
            },
            metadata: pb
          }, hb, zb), (0, eb.i)(null, null, Ob, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoRight" in bb,
              get: bb => bb._orthoRight,
              set: (bb, wb) => {
                bb._orthoRight = wb
              }
            },
            metadata: pb
          }, Xb, xb), (0, eb.i)(null, null, Ub, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoTop" in bb,
              get: bb => bb._orthoTop,
              set: (bb, wb) => {
                bb._orthoTop = wb
              }
            },
            metadata: pb
          }, jb, Kb), (0, eb.i)(null, null, tb, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoBottom" in bb,
              get: bb => bb._orthoBottom,
              set: (bb, wb) => {
                bb._orthoBottom = wb
              }
            },
            metadata: pb
          }, rb, Rb), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb
      })(),
      Ob = !1;
    Ob || (Ob = !0, lb.d.AddNodeConstructor("Light_Type_1", ((bb, wb) => () => new Ib(bb, pb.o.Zero(), wb))), (0, Lb.e)("BABYLON.DirectionalLight", Ib))
  },
  40004: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb,
      h: () => pb,
      i: () => Vb,
      j: () => gb
    });
    var eb = Mb(38406);
    class Hb {
      constructor(bb, wb, Mb) {
        this.gradient = bb, this.color1 = wb, this.color2 = Mb
      }
      getColorToRef(bb) {
        this.color2 ? eb.f.LerpToRef(this.color1, this.color2, Math.random(), bb) : bb.eZ(this.color1)
      }
    }
    class pb {
      constructor(bb, wb) {
        this.gradient = bb, this.color = wb
      }
    }
    class Vb {
      constructor(bb, wb, Mb) {
        this.gradient = bb, this.factor1 = wb, this.factor2 = Mb
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class gb {
      static GetCurrentGradient(bb, wb, Mb) {
        if (wb[0].gradient > bb) return void Mb(wb[0], wb[0], 1);
        for (let Hb = 0; Hb < wb.length - 1; Hb++) {
          const eb = wb[Hb],
            pb = wb[Hb + 1];
          if (bb >= eb.gradient && bb <= pb.gradient) {
            return void Mb(eb, pb, (bb - eb.gradient) / (pb.gradient - eb.gradient))
          }
        }
        const eb = wb.length - 1;
        Mb(wb[eb], wb[eb], 1)
      }
    }
  },
  40007: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    var eb = Mb(38285),
      Hb = Mb(38322),
      pb = Mb(39966);
    class Vb {
      constructor() {
        this.direction1 = new eb.o(0, 1, 0), this.direction2 = new eb.o(0, 1, 0), this.minEmitBox = new eb.o(-.5, -.5, -.5), this.maxEmitBox = new eb.o(.5, .5, .5)
      }
      startDirectionFunction(bb, wb, Mb, pb) {
        const Vb = (0, Hb.RandomRange)(this.direction1.x, this.direction2.x),
          gb = (0, Hb.RandomRange)(this.direction1.y, this.direction2.y),
          lb = (0, Hb.RandomRange)(this.direction1.z, this.direction2.z);
        if (pb) return wb.x = Vb, wb.y = gb, void(wb.z = lb);
        eb.o.TransformNormalFromFloatsToRef(Vb, gb, lb, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, pb) {
        const Vb = (0, Hb.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          gb = (0, Hb.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          lb = (0, Hb.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (pb) return wb.x = Vb, wb.y = gb, void(wb.z = lb);
        eb.o.TransformCoordinatesFromFloatsToRef(Vb, gb, lb, bb, wb)
      }
      clone() {
        const bb = new Vb;
        return pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2), bb.setVector3("minEmitBox", this.minEmitBox), bb.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3), bb.addUniform("minEmitBox", 3), bb.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.ppb(), bb.direction2 = this.direction2.ppb(), bb.minEmitBox = this.minEmitBox.ppb(), bb.maxEmitBox = this.maxEmitBox.ppb(), bb
      }
      parse(bb) {
        eb.o.FromArrayToRef(bb.direction1, 0, this.direction1), eb.o.FromArrayToRef(bb.direction2, 0, this.direction2), eb.o.FromArrayToRef(bb.minEmitBox, 0, this.minEmitBox), eb.o.FromArrayToRef(bb.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39961: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      d: () => Vb
    });
    var eb = Mb(38285),
      Hb = Mb(38322),
      pb = Mb(39966);
    class Vb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = bb, this.height = wb, this.radiusRange = Mb, this.directionRandomizer = Hb, this._tempVector = eb.o.Zero()
      }
      startDirectionFunction(bb, wb, Mb, pb, Vb) {
        Mb.position.subtractToRef(bb.getTranslation(), this._tempVector), this._tempVector.normalize(), eb.o.TransformNormalToRef(this._tempVector, Vb, this._tempVector);
        const gb = (0, Hb.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let lb = Math.atan2(this._tempVector.x, this._tempVector.z);
        lb += (0, Hb.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = gb, this._tempVector.x = Math.sin(lb), this._tempVector.z = Math.cos(lb), this._tempVector.normalize(), pb ? wb.eZ(this._tempVector) : eb.o.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, pb) {
        const Vb = (0, Hb.RandomRange)(-this.height / 2, this.height / 2),
          gb = (0, Hb.RandomRange)(0, 2 * Math.PI),
          lb = (0, Hb.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Lb = Math.sqrt(lb) * this.radius,
          Ib = Lb * Math.cos(gb),
          Ob = Lb * Math.sin(gb);
        pb ? wb.twb(Ib, Vb, Ob) : eb.o.TransformCoordinatesFromFloatsToRef(Ib, Vb, Ob, bb, wb)
      }
      clone() {
        const bb = new Vb(this.radius, this.directionRandomizer);
        return pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("height", this.height), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("height", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.height = this.height, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.height = bb.height, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class gb extends Vb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new eb.o(0, 1, 0),
          pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new eb.o(0, 1, 0);
        super(bb, wb, Mb), this.direction1 = Hb, this.direction2 = pb
      }
      startDirectionFunction(bb, wb, Mb, pb) {
        const Vb = (0, Hb.RandomRange)(this.direction1.x, this.direction2.x),
          gb = (0, Hb.RandomRange)(this.direction1.y, this.direction2.y),
          lb = (0, Hb.RandomRange)(this.direction1.z, this.direction2.z);
        pb ? wb.twb(Vb, gb, lb) : eb.o.TransformNormalFromFloatsToRef(Vb, gb, lb, bb, wb)
      }
      clone() {
        const bb = new gb(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return pb.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("height", this.height), bb.setFloat("radiusRange", this.radiusRange), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("height", 1), bb.addUniform("radiusRange", 1), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.ppb(), bb.direction2 = this.direction2.ppb(), bb
      }
      parse(bb) {
        super.parse(bb), eb.o.FromArrayToRef(bb.direction1, 0, this.direction1), eb.o.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
  },
  53771: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => dw
    });
    var eb = Mb(40004),
      Hb = Mb(38318),
      pb = Mb(38285),
      Vb = Mb(41816),
      gb = Mb(53775),
      lb = Mb(38313),
      Lb = Mb(41952),
      Ib = Mb(38406),
      Ob = Mb(40007),
      Ub = Mb(39966),
      tb = Mb(38322);
    class Cb {
      constructor() {
        this.direction1 = new pb.o(0, 1, 0), this.direction2 = new pb.o(0, 1, 0)
      }
      startDirectionFunction(bb, wb, Mb, eb) {
        const Hb = (0, tb.RandomRange)(this.direction1.x, this.direction2.x),
          Vb = (0, tb.RandomRange)(this.direction1.y, this.direction2.y),
          gb = (0, tb.RandomRange)(this.direction1.z, this.direction2.z);
        eb ? wb.twb(Hb, Vb, gb) : pb.o.TransformNormalFromFloatsToRef(Hb, Vb, gb, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, eb) {
        eb ? wb.twb(0, 0, 0) : pb.o.TransformCoordinatesFromFloatsToRef(0, 0, 0, bb, wb)
      }
      clone() {
        const bb = new Cb;
        return Ub.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.ppb(), bb.direction2 = this.direction2.ppb(), bb
      }
      parse(bb) {
        pb.o.FromArrayToRef(bb.direction1, 0, this.direction1), pb.o.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    class Eb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = bb, this.radiusRange = wb, this.directionRandomizer = Mb
      }
      startDirectionFunction(bb, wb, Mb, eb) {
        const Hb = Mb.position.subtract(bb.getTranslation()).normalize(),
          Vb = (0, tb.RandomRange)(0, this.directionRandomizer),
          gb = (0, tb.RandomRange)(0, this.directionRandomizer),
          lb = (0, tb.RandomRange)(0, this.directionRandomizer);
        Hb.x += Vb, Hb.y += gb, Hb.z += lb, Hb.normalize(), eb ? wb.eZ(Hb) : pb.o.TransformNormalFromFloatsToRef(Hb.x, Hb.y, Hb.z, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, eb) {
        const Hb = this.radius - (0, tb.RandomRange)(0, this.radius * this.radiusRange),
          Vb = (0, tb.RandomRange)(0, 1),
          gb = (0, tb.RandomRange)(0, 2 * Math.PI),
          lb = Math.acos(2 * Vb - 1),
          Lb = Hb * Math.cos(gb) * Math.sin(lb),
          Ib = Hb * Math.cos(lb),
          Ob = Hb * Math.sin(gb) * Math.sin(lb);
        eb ? wb.twb(Lb, Math.abs(Ib), Ob) : pb.o.TransformCoordinatesFromFloatsToRef(Lb, Math.abs(Ib), Ob, bb, wb)
      }
      clone() {
        const bb = new Eb(this.radius, this.directionRandomizer);
        return Ub.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class Fb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = bb, this.radiusRange = wb, this.directionRandomizer = Mb
      }
      startDirectionFunction(bb, wb, Mb, eb) {
        const Hb = Mb.position.subtract(bb.getTranslation()).normalize(),
          Vb = (0, tb.RandomRange)(0, this.directionRandomizer),
          gb = (0, tb.RandomRange)(0, this.directionRandomizer),
          lb = (0, tb.RandomRange)(0, this.directionRandomizer);
        Hb.x += Vb, Hb.y += gb, Hb.z += lb, Hb.normalize(), eb ? wb.eZ(Hb) : pb.o.TransformNormalFromFloatsToRef(Hb.x, Hb.y, Hb.z, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, eb) {
        const Hb = this.radius - (0, tb.RandomRange)(0, this.radius * this.radiusRange),
          Vb = (0, tb.RandomRange)(0, 1),
          gb = (0, tb.RandomRange)(0, 2 * Math.PI),
          lb = Math.acos(2 * Vb - 1),
          Lb = Hb * Math.cos(gb) * Math.sin(lb),
          Ib = Hb * Math.cos(lb),
          Ob = Hb * Math.sin(gb) * Math.sin(lb);
        eb ? wb.twb(Lb, Ib, Ob) : pb.o.TransformCoordinatesFromFloatsToRef(Lb, Ib, Ob, bb, wb)
      }
      clone() {
        const bb = new Fb(this.radius, this.directionRandomizer);
        return Ub.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class Bb extends Fb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new pb.o(0, 1, 0),
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pb.o(0, 1, 0);
        super(bb), this.direction1 = wb, this.direction2 = Mb
      }
      startDirectionFunction(bb, wb, Mb, eb) {
        const Hb = (0, tb.RandomRange)(this.direction1.x, this.direction2.x),
          Vb = (0, tb.RandomRange)(this.direction1.y, this.direction2.y),
          gb = (0, tb.RandomRange)(this.direction1.z, this.direction2.z);
        eb ? wb.twb(Hb, Vb, gb) : pb.o.TransformNormalFromFloatsToRef(Hb, Vb, gb, bb, wb)
      }
      clone() {
        const bb = new Bb(this.radius, this.direction1, this.direction2);
        return Ub.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("radiusRange", this.radiusRange), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("radiusRange", 1), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.ppb(), bb.direction2 = this.direction2.ppb(), bb
      }
      parse(bb) {
        super.parse(bb), pb.o.FromArrayToRef(bb.direction1, 0, this.direction1), pb.o.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    var sb = Mb(39961);
    class mb {
      get radius() {
        return this._radius
      }
      set radius(bb) {
        this._radius = bb, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(bb) {
        this._angle = bb, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = Mb, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = wb, this.radius = bb
      }
      startDirectionFunction(bb, wb, Mb, eb) {
        const Hb = Mb.position.subtract(bb.getTranslation()).normalize(),
          Vb = (0, tb.RandomRange)(0, this.directionRandomizer),
          gb = (0, tb.RandomRange)(0, this.directionRandomizer),
          lb = (0, tb.RandomRange)(0, this.directionRandomizer);
        Hb.x += Vb, Hb.y += gb, Hb.z += lb, Hb.normalize(), eb ? wb.eZ(Hb) : pb.o.TransformNormalFromFloatsToRef(Hb.x, Hb.y, Hb.z, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, eb) {
        const Hb = (0, tb.RandomRange)(0, 2 * Math.PI);
        let Vb;
        this.emitFromSpawnPointOnly ? Vb = 1e-4 : (Vb = (0, tb.RandomRange)(0, this.heightRange), Vb = 1 - Vb * Vb);
        let gb = this._radius - (0, tb.RandomRange)(0, this._radius * this.radiusRange);
        gb *= Vb;
        const lb = gb * Math.sin(Hb),
          Lb = gb * Math.cos(Hb),
          Ib = Vb * this._height;
        if (eb) return wb.x = lb, wb.y = Ib, void(wb.z = Lb);
        pb.o.TransformCoordinatesFromFloatsToRef(lb, Ib, Lb, bb, wb)
      }
      clone() {
        const bb = new mb(this._radius, this._angle, this.directionRandomizer);
        return Ub.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat2("radius", this._radius, this.radiusRange), bb.setFloat("coneAngle", this._angle), bb.setFloat2("height", this._height, this.heightRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 2), bb.addUniform("coneAngle", 1), bb.addUniform("height", 2), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let bb = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (bb += "\n#define CONEEMITTERSPAWNPOINT"), bb
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this._radius, bb.angle = this._angle, bb.directionRandomizer = this.directionRandomizer, bb.radiusRange = this.radiusRange, bb.heightRange = this.heightRange, bb.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.angle = bb.angle, this.directionRandomizer = bb.directionRandomizer, this.radiusRange = void 0 !== bb.radiusRange ? bb.radiusRange : 1, this.heightRange = void 0 !== bb.heightRange ? bb.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== bb.emitFromSpawnPointOnly && bb.emitFromSpawnPointOnly
      }
    }
    class hb extends mb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pb.o(0, 1, 0),
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pb.o(0, 1, 0);
        super(bb, wb), this.direction1 = Mb, this.direction2 = eb
      }
      startDirectionFunction(bb, wb, Mb, eb) {
        const Hb = (0, tb.RandomRange)(this.direction1.x, this.direction2.x),
          Vb = (0, tb.RandomRange)(this.direction1.y, this.direction2.y),
          gb = (0, tb.RandomRange)(this.direction1.z, this.direction2.z);
        eb ? wb.twb(Hb, Vb, gb) : pb.o.TransformNormalFromFloatsToRef(Hb, Vb, gb, bb, wb)
      }
      clone() {
        const bb = new hb(this.radius, this.angle, this.direction1, this.direction2);
        return Ub.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        super.applyToShader(bb), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        super.buildUniformLayout(bb), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.ppb(), bb.direction2 = this.direction2.ppb(), bb
      }
      parse(bb) {
        super.parse(bb), pb.o.FromArrayToRef(bb.direction1, 0, this.direction1), pb.o.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    class zb {
      get mesh() {
        return this._mesh
      }
      set mesh(bb) {
        this._mesh !== bb && (this._mesh = bb, bb ? (this._indices = bb.ipb(), this._positions = bb.getVerticesData(Vb.i.PositionKind), this._normals = bb.getVerticesData(Vb.i.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = pb.o.Zero(), this._mesh = null, this.direction1 = new pb.o(0, 1, 0), this.direction2 = new pb.o(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = bb
      }
      startDirectionFunction(bb, wb, Mb, eb) {
        if (this.useMeshNormalsForDirection && this._normals) return void pb.o.TransformNormalToRef(this._storedNormal, bb, wb);
        const Hb = (0, tb.RandomRange)(this.direction1.x, this.direction2.x),
          Vb = (0, tb.RandomRange)(this.direction1.y, this.direction2.y),
          gb = (0, tb.RandomRange)(this.direction1.z, this.direction2.z);
        eb ? wb.twb(Hb, Vb, gb) : pb.o.TransformNormalFromFloatsToRef(Hb, Vb, gb, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, eb) {
        if (!this._indices || !this._positions) return;
        const Hb = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Vb = Math.random(),
          gb = Math.random() * (1 - Vb),
          lb = 1 - Vb - gb,
          Lb = this._indices[Hb],
          Ib = this._indices[Hb + 1],
          Ob = this._indices[Hb + 2],
          Ub = pb.j.YC[0],
          tb = pb.j.YC[1],
          Cb = pb.j.YC[2],
          Eb = pb.j.YC[3];
        pb.o.FromArrayToRef(this._positions, 3 * Lb, Ub), pb.o.FromArrayToRef(this._positions, 3 * Ib, tb), pb.o.FromArrayToRef(this._positions, 3 * Ob, Cb), Eb.x = Vb * Ub.x + gb * tb.x + lb * Cb.x, Eb.y = Vb * Ub.y + gb * tb.y + lb * Cb.y, Eb.z = Vb * Ub.z + gb * tb.z + lb * Cb.z, eb ? wb.twb(Eb.x, Eb.y, Eb.z) : pb.o.TransformCoordinatesFromFloatsToRef(Eb.x, Eb.y, Eb.z, bb, wb), this.useMeshNormalsForDirection && this._normals && (pb.o.FromArrayToRef(this._normals, 3 * Lb, Ub), pb.o.FromArrayToRef(this._normals, 3 * Ib, tb), pb.o.FromArrayToRef(this._normals, 3 * Ob, Cb), this._storedNormal.x = Vb * Ub.x + gb * tb.x + lb * Cb.x, this._storedNormal.y = Vb * Ub.y + gb * tb.y + lb * Cb.y, this._storedNormal.z = Vb * Ub.z + gb * tb.z + lb * Cb.z)
      }
      clone() {
        const bb = new zb(this.mesh);
        return Ub.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.ppb(), bb.direction2 = this.direction2.ppb(), bb.meshId = this.mesh?.id, bb.useMeshNormalsForDirection = this.useMeshNormalsForDirection, bb
      }
      parse(bb, wb) {
        pb.o.FromArrayToRef(bb.direction1, 0, this.direction1), pb.o.FromArrayToRef(bb.direction2, 0, this.direction2), bb.meshId && wb && (this.mesh = wb.getLastMeshById(bb.meshId)), this.useMeshNormalsForDirection = bb.useMeshNormalsForDirection
      }
    }
    class Xb {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(bb) {
        this._targetStopDuration !== bb && (this._targetStopDuration = bb)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(bb) {
        this._noiseTexture !== bb && (this._noiseTexture = bb, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(bb) {
        this._attractors.push(bb)
      }
      removeAttractor(bb) {
        const wb = this._attractors.indexOf(bb); - 1 !== wb && this._attractors.splice(wb, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(bb) {
        this._animationSheetEnabled !== bb && (this._animationSheetEnabled = bb)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(bb) {
        this._isAnimationSheetEnabled != bb && (this._isAnimationSheetEnabled = bb, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(bb) {
        this._useLogarithmicDepth = bb && this.RJ().DC().getCaps().fragmentDepthSupported
      }
      RJ() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(bb) {
        switch (bb) {
          case Xb.BLENDMODE_MULTIPLYADD:
            return;
          case Xb.BLENDMODE_ADD:
            bb = 1;
            break;
          case Xb.BLENDMODE_ONEONE:
            bb = 6;
            break;
          case Xb.BLENDMODE_STANDARD:
            bb = 2;
            break;
          case Xb.BLENDMODE_MULTIPLY:
            bb = 4;
            break;
          case Xb.BLENDMODE_SUBTRACT:
            bb = 3
        }
        this._engine.setAlphaMode(bb)
      }
      getDragGradients() {
        return this._dragGradients
      }
      getLimitVelocityGradients() {
        return this._limitVelocityGradients
      }
      getColorGradients() {
        return this._colorGradients
      }
      getSizeGradients() {
        return this._sizeGradients
      }
      getColorRemapGradients() {
        return this._colorRemapGradients
      }
      getAlphaRemapGradients() {
        return this._alphaRemapGradients
      }
      getLifeTimeGradients() {
        return this._lifeTimeGradients
      }
      getAngularSpeedGradients() {
        return this._angularSpeedGradients
      }
      getVelocityGradients() {
        return this._velocityGradients
      }
      getStartSizeGradients() {
        return this._startSizeGradients
      }
      getEmitRateGradients() {
        return this._emitRateGradients
      }
      addEmitRateGradient(bb, wb, Mb) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, bb, wb, Mb), this
      }
      removeEmitRateGradient(bb) {
        return this._removeFactorGradient(this._emitRateGradients, bb), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : pb.o.Zero()
      }
      set direction1(bb) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = bb)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : pb.o.Zero()
      }
      set direction2(bb) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = bb)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : pb.o.Zero()
      }
      set minEmitBox(bb) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = bb)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : pb.o.Zero()
      }
      set maxEmitBox(bb) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = bb)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(bb) {
        this._billboardMode !== bb && (this._billboardMode = bb, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(bb) {
        this._isBillboardBased !== bb && (this._isBillboardBased = bb, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(bb) {
        this._attachImageProcessingConfiguration(bb)
      }
      _attachImageProcessingConfiguration(bb) {
        bb !== this._imageProcessingConfiguration && (!bb && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = bb)
      }
      _reset() {}
      _addFactorGradient(bb, wb, Mb, Hb) {
        const pb = new eb.i(wb, Mb, Hb);
        bb.push(pb), bb.sort(((bb, wb) => bb.gradient < wb.gradient ? -1 : bb.gradient > wb.gradient ? 1 : 0))
      }
      _removeFactorGradient(bb, wb) {
        if (!bb) return;
        let Mb = 0;
        for (const eb of bb) {
          if (eb.gradient === wb) {
            bb.splice(Mb, 1);
            break
          }
          Mb++
        }
      }
      _removeGradientAndTexture(bb, wb, Mb) {
        if (!wb) return this;
        let eb = 0;
        for (const Hb of wb) {
          if (Hb.gradient === bb) {
            wb.splice(eb, 1);
            break
          }
          eb++
        }
        return Mb && Mb.dispose(), this
      }
      constructor(bb) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = pb.o.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new pb.o(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = Xb.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new pb.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new pb.o(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = pb.o.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new Ib.f(1, 1, 1, 1), this.color2 = new Ib.f(1, 1, 1, 1), this.colorDead = new Ib.f(0, 0, 0, 1), this.textureMask = new Ib.f(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Lb.e, this.id = bb, this.name = bb
      }
      createPointEmitter(bb, wb) {
        const Mb = function(bb, wb) {
          const Mb = new Cb;
          return Mb.direction1 = bb, Mb.direction2 = wb, Mb
        }(bb, wb);
        return this.particleEmitterType = Mb, Mb
      }
      createHemisphericEmitter() {
        const bb = function() {
          return new Eb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = bb, bb
      }
      createSphereEmitter() {
        const bb = function() {
          return new Fb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = bb, bb
      }
      createDirectedSphereEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new pb.o(0, 1, 0),
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pb.o(0, 1, 0);
          return new Bb(bb, wb, Mb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new pb.o(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pb.o(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createCylinderEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new sb.d(bb, wb, Mb, eb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = bb, bb
      }
      createDirectedCylinderEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pb.o(0, 1, 0),
            Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new pb.o(0, 1, 0);
          return new sb.b(bb, wb, Mb, eb, Hb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pb.o(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new pb.o(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createConeEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new mb(bb, wb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = bb, bb
      }
      createDirectedConeEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pb.o(0, 1, 0),
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pb.o(0, 1, 0);
          return new hb(bb, wb, Mb, eb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new pb.o(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pb.o(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createBoxEmitter(bb, wb, Mb, eb) {
        const Hb = new Ob.d;
        return this.particleEmitterType = Hb, this.direction1 = bb, this.direction2 = wb, this.minEmitBox = Mb, this.maxEmitBox = eb, Hb
      }
      createMeshEmitter() {
        const bb = function() {
          return new zb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = bb, bb
      }
    }
    Xb.BLENDMODE_ONEONE = 0, Xb.BLENDMODE_STANDARD = 1, Xb.BLENDMODE_ADD = 2, Xb.BLENDMODE_MULTIPLY = 3, Xb.BLENDMODE_MULTIPLYADD = 4, Xb.BLENDMODE_SUBTRACT = -1;
    class xb {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new Ib.f(0, 0, 0, 0), this.currentColor2 = new Ib.f(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = pb.o.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class jb {
      constructor(bb) {
        this.particleSystem = bb, this.position = pb.o.Zero(), this.direction = pb.o.Zero(), this.color = new Ib.f(0, 0, 0, 0), this.colorStep = new Ib.f(0, 0, 0, 0), this.initialColor = new Ib.f(0, 0, 0, 0), this.colorDead = new Ib.f(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new pb.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new xb, this.id = jb._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let bb = this.age,
          wb = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === wb ? (wb = 1, bb = this._properties.randomCellOffset) : bb += this._properties.randomCellOffset);
        const Mb = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let eb;
        eb = this._properties.initialSpriteCellLoop ? (0, tb.Clamp)(bb * wb % this.lifeTime / this.lifeTime) : (0, tb.Clamp)(bb * wb / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + eb * Mb | 0
      }
      _inheritParticleInfoToSubEmitter(bb) {
        if (bb.particleSystem.emitter.position) {
          const wb = bb.particleSystem.emitter;
          if (wb.position.eZ(this.position), bb.inheritDirection) {
            const bb = pb.j.YC[0];
            this.direction.normalizeToRef(bb), wb.setDirection(bb, 0, Math.PI / 2)
          }
        } else {
          bb.particleSystem.emitter.eZ(this.position)
        }
        this.direction.scaleToRef(bb.inheritedVelocityAmount / 2, pb.j.YC[0]), bb.particleSystem._inheritedVelocityOffset.eZ(pb.j.YC[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const bb of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(bb)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = jb._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(bb) {
        bb.position.eZ(this.position), this._properties.initialDirection ? bb._properties.initialDirection ? bb._properties.initialDirection.eZ(this._properties.initialDirection) : bb._properties.initialDirection = this._properties.initialDirection.clone() : bb._properties.initialDirection = null, bb.direction.eZ(this.direction), this._properties.localPosition && (bb._properties.localPosition ? bb._properties.localPosition.eZ(this._properties.localPosition) : bb._properties.localPosition = this._properties.localPosition.clone()), bb.color.eZ(this.color), bb.colorStep.eZ(this.colorStep), bb.initialColor.eZ(this.initialColor), bb.colorDead.eZ(this.colorDead), bb.lifeTime = this.lifeTime, bb.age = this.age, bb._properties.randomCellOffset = this._properties.randomCellOffset, bb.size = this.size, bb.scale.eZ(this.scale), bb.angle = this.angle, bb.angularSpeed = this.angularSpeed, bb.particleSystem = this.particleSystem, bb.cellIndex = this.cellIndex, bb.id = this.id, bb._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (bb._properties.currentColorGradient = this._properties.currentColorGradient, bb._properties.currentColor1.eZ(this._properties.currentColor1), bb._properties.currentColor2.eZ(this._properties.currentColor2)), this._properties.currentSizeGradient && (bb._properties.currentSizeGradient = this._properties.currentSizeGradient, bb._properties.currentSize1 = this._properties.currentSize1, bb._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (bb._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, bb._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, bb._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (bb._properties.currentVelocityGradient = this._properties.currentVelocityGradient, bb._properties.currentVelocity1 = this._properties.currentVelocity1, bb._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (bb._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, bb._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, bb._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (bb._properties.currentDragGradient = this._properties.currentDragGradient, bb._properties.currentDrag1 = this._properties.currentDrag1, bb._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (bb._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, bb._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, bb._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (bb.remapData && this.remapData ? bb.remapData.eZ(this.remapData) : bb.remapData = new pb.q(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2 ? (bb._properties.randomNoiseCoordinates1.eZ(this._properties.randomNoiseCoordinates1), bb._properties.randomNoiseCoordinates2.eZ(this._properties.randomNoiseCoordinates2)) : (bb._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), bb._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), bb.metadata = this.metadata
      }
    }
    jb._Count = 0;
    var Kb = Mb(42772);
    class rb {
      get currentFrame() {
        return this._currentFrame
      }
      get _evaluatedFrom() {
        return this._playbackFrom
      }
      get _evaluatedTo() {
        return this._playbackTo
      }
      get _evaluatedProgress() {
        return this._playbackProgress
      }
      get _evaluatedSyncRoot() {
        return this._playbackSyncRoot
      }
      get _evaluatedJump() {
        return this._playbackJumped
      }
      get weight() {
        return this._weight
      }
      get currentValue() {
        return this._currentValue
      }
      get targetPath() {
        return this._targetPath
      }
      get target() {
        return this._currentActiveTarget
      }
      get isAdditive() {
        return this._host && this._host.isAdditive
      }
      constructor(bb, wb, Mb, eb) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = wb, this.mO = bb, this._scene = Mb, this._host = eb, this._activeTargets = [], wb._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            sM: this._getCorrectLoopMode()
          }, this._animation.dataType === Kb.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = pb.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const bb = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, bb)
        }
        if (this.mO instanceof Array) {
          let bb = 0;
          for (const wb of this.mO) this._preparePath(wb, bb), this._getOriginalValues(bb), bb++;
          this._targetIsArray = !0
        } else this._preparePath(this.mO), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Hb = wb.getEvents();
        if (Hb && Hb.length > 0)
          for (const pb of Hb) this._events.push(pb._clone());
        this._enableBlending = bb && bb.animationPropertiesOverride ? bb.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = this._animation.targetPropertyPath;
        if (Mb.length > 1) {
          let eb = bb;
          for (let bb = 0; bb < Mb.length - 1; bb++) {
            const wb = Mb[bb];
            if (eb = eb[wb], void 0 === eb) throw new Error(`Invalid property (${wb}) in property path (${Mb.join(".")})`)
          }
          this._targetPath = Mb[Mb.length - 1], this._activeTargets[wb] = eb
        } else this._targetPath = Mb[0], this._activeTargets[wb] = bb;
        if (void 0 === this._activeTargets[wb][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${Mb.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.mO instanceof Array) {
            let bb = 0;
            for (const wb of this.mO) void 0 !== this._originalValue[bb] && this._setValue(wb, this._activeTargets[bb], this._originalValue[bb], -1, bb), bb++
          } else void 0 !== this._originalValue[0] && this._setValue(this.mO, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let bb = 0; bb < this._events.length; bb++) this._events[bb].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const bb = this._animation.runtimeAnimations.indexOf(this);
        bb > -1 && this._animation.runtimeAnimations.splice(bb, 1)
      }
      setValue(bb, wb) {
        if (this._targetIsArray)
          for (let Mb = 0; Mb < this.mO.length; Mb++) {
            const eb = this.mO[Mb];
            this._setValue(eb, this._activeTargets[Mb], bb, wb, Mb)
          } else this._setValue(this.mO, this._directTarget, bb, wb, 0)
      }
      _getOriginalValues() {
        let bb, wb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Mb = this._activeTargets[wb];
        if (Kb.b.InheritOriginalValueFromActiveAnimations) {
          const bb = this._scene._activeAnimatables;
          for (let eb = 0; eb < bb.length; eb++) {
            const Hb = bb[eb]._runtimeAnimations;
            for (let bb = 0; bb < Hb.length; bb++) {
              const eb = Hb[bb];
              if (eb !== this && eb._targetPath === this._targetPath)
                for (let bb = 0; bb < eb._activeTargets.length; bb++)
                  if (eb._activeTargets[bb] === Mb && void 0 !== eb._originalValue[bb]) return void(eb._originalValue[bb] && eb._originalValue[bb].clone ? this._originalValue[wb] = eb._originalValue[bb].clone() : this._originalValue[wb] = eb._originalValue[bb])
            }
          }
        }
        bb = Mb.getLocalMatrix && "_matrix" === this._targetPath ? Mb.getLocalMatrix() : Mb[this._targetPath], bb && bb.clone ? this._originalValue[wb] = bb.clone() : this._originalValue[wb] = bb
      }
      _registerTargetForLateAnimationBinding(bb, wb) {
        const Mb = bb.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(Mb), Mb._lateAnimationHolders || (Mb._lateAnimationHolders = {}), Mb._lateAnimationHolders[bb.targetPath] || (Mb._lateAnimationHolders[bb.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: wb
        }), bb.isAdditive ? (Mb._lateAnimationHolders[bb.targetPath].additiveAnimations.push(bb), Mb._lateAnimationHolders[bb.targetPath].totalAdditiveWeight += bb.weight) : (Mb._lateAnimationHolders[bb.targetPath].animations.push(bb), Mb._lateAnimationHolders[bb.targetPath].totalWeight += bb.weight)
      }
      _setValue(bb, wb, Mb, eb, Hb) {
        const Vb = this._scene._animationWrites,
          gb = this._scene._animationWriteCount++;
        let lb = Vb[gb];
        if (lb || (lb = Vb[gb] = {
            runtimeAnimation: this,
            target: bb,
            weight: eb,
            additive: !1,
            blendingFactor: 1,
            tF: !1
          }), lb.runtimeAnimation = this, lb.target = bb, lb.weight = eb, lb.additive = this.isAdditive, lb.tF = !1, this._currentActiveTarget = wb, this._weight = eb, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const bb = wb[this._targetPath];
            bb.clone ? this._originalBlendValue = bb.clone() : this._originalBlendValue = bb
          }
          this._originalBlendValue.m ? Kb.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? pb.b.DecomposeLerpToRef(this._originalBlendValue, Mb, this._blendingFactor, this._currentValue) : this._currentValue = pb.b.DecomposeLerp(this._originalBlendValue, Mb, this._blendingFactor) : this._currentValue ? pb.b.LerpToRef(this._originalBlendValue, Mb, this._blendingFactor, this._currentValue) : this._currentValue = pb.b.Lerp(this._originalBlendValue, Mb, this._blendingFactor) : this._currentValue = Kb.b._UniversalLerp(this._originalBlendValue, Mb, this._blendingFactor);
          const eb = bb && bb.animationPropertiesOverride ? bb.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          lb.blendingFactor = this._blendingFactor, this._blendingFactor += eb
        } else lb.blendingFactor = 1, this._currentValue ? this._currentValue.eZ ? this._currentValue.eZ(Mb) : this._currentValue = Mb : this._currentValue = Mb?.clone ? Mb.clone() : Mb; - 1 !== eb ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Hb]) : this._animationState.sM === Kb.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Hb], wb[this._targetPath]) : wb[this._targetPath] = this._originalValue[Hb] + this._currentValue : wb[this._targetPath] = this._currentValue, bb.eeb && bb.eeb(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.mO && this.mO.animationPropertiesOverride) {
          return "MorphTarget" === this.mO.getClassName?.() && null == this.mO._animationPropertiesOverride ? this._animation.sM : this.mO.animationPropertiesOverride.sM
        }
        return this._animation.sM
      }
      goToFrame(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const Mb = this._animation.getKeys();
        bb < Mb[0].frame ? bb = Mb[0].frame : bb > Mb[Mb.length - 1].frame && (bb = Mb[Mb.length - 1].frame);
        const eb = this._events;
        if (eb.length)
          for (let pb = 0; pb < eb.length; pb++) eb[pb].onlyOnce || (eb[pb].isDone = eb[pb].frame < bb);
        this._currentFrame = bb;
        const Hb = this._animation._interpolate(bb, this._animationState);
        this.setValue(Hb, wb)
      }
      _prepareForSpeedRatioChange(bb) {
        const wb = this._previousElapsedTime * (this._animation.framePerSecond * bb) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - wb
      }
      animate(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Vb = this._animation,
          gb = Vb.targetPropertyPath;
        if (!gb || gb.length < 1) return this._stopped = !0, !1;
        let lb, Lb = !0;
        const Ib = this._events;
        let Ob;
        if (this._coreRuntimeAnimation) Ob = Mb - wb, lb = this._coreRuntimeAnimation.currentFrame, this._currentFrame = lb, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let pb;
          (wb < this._minFrame || wb > this._maxFrame) && (wb = this._minFrame), (Mb < this._minFrame || Mb > this._maxFrame) && (Mb = this._maxFrame), Ob = Mb - wb;
          let gb = bb * (Vb.framePerSecond * Hb) / 1e3 + this._absoluteFrameOffset,
            Ub = 0,
            tb = !1;
          const Cb = eb && this._animationState.sM === Kb.b.ANIMATIONLOOPMODE_YOYO;
          if (Cb) {
            const bb = (gb - wb) / Ob,
              Mb = Math.sin(bb * Math.PI);
            gb = Math.abs(Mb) * Ob + wb;
            const eb = Mb >= 0 ? 1 : -1;
            this._yoyoDirection !== eb && (tb = !0), this._yoyoDirection = eb
          }
          if (this._previousElapsedTime = bb, this._previousAbsoluteFrame = gb, !eb && Mb >= wb && (gb >= Ob && Hb > 0 || gb <= 0 && Hb < 0)) Lb = !1, Ub = Vb.evaluate(Mb);
          else if (!eb && wb >= Mb && (gb <= Ob && Hb < 0 || gb >= 0 && Hb > 0)) Lb = !1, Ub = Vb.evaluate(wb);
          else if (this._animationState.sM !== Kb.b.ANIMATIONLOOPMODE_CYCLE) {
            const bb = Mb.toString() + wb.toString();
            if (!this._offsetsCache[bb]) {
              this._animationState.repeatCount = 0, this._animationState.sM = Kb.b.ANIMATIONLOOPMODE_CYCLE;
              const eb = Vb._interpolate(wb, this._animationState),
                Hb = Vb._interpolate(Mb, this._animationState);
              switch (this._animationState.sM = this._getCorrectLoopMode(), Vb.dataType) {
                case Kb.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[bb] = Hb - eb;
                  break;
                case Kb.b.ANIMATIONTYPE_QUATERNION:
                case Kb.b.ANIMATIONTYPE_VECTOR3:
                case Kb.b.ANIMATIONTYPE_VECTOR2:
                case Kb.b.ANIMATIONTYPE_SIZE:
                case Kb.b.ANIMATIONTYPE_COLOR3:
                case Kb.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[bb] = Hb.subtract(eb)
              }
              this._highLimitsCache[bb] = Hb
            }
            Ub = this._highLimitsCache[bb], pb = this._offsetsCache[bb]
          }
          if (void 0 === pb) switch (Vb.dataType) {
            case Kb.b.ANIMATIONTYPE_FLOAT:
              pb = 0;
              break;
            case Kb.b.ANIMATIONTYPE_QUATERNION:
              pb = Kb.n;
              break;
            case Kb.b.ANIMATIONTYPE_VECTOR3:
              pb = Kb.u;
              break;
            case Kb.b.ANIMATIONTYPE_VECTOR2:
              pb = Kb.s;
              break;
            case Kb.b.ANIMATIONTYPE_SIZE:
              pb = Kb.r;
              break;
            case Kb.b.ANIMATIONTYPE_COLOR3:
              pb = Kb.f;
              break;
            case Kb.b.ANIMATIONTYPE_COLOR4:
              pb = Kb.j
          }
          const Eb = this._host ? this._host.syncRoot : null;
          let Fb, Bb = this._playbackFrames,
            sb = !1;
          if (Eb) {
            const bb = Eb.toFrame - Eb.fromFrame,
              Mb = Eb.masterFrame,
              eb = (Mb - Eb.fromFrame) / bb;
            lb = wb + Ob * eb;
            const Hb = Eb.getAnimations()[0];
            if (Hb && 0 !== bb) {
              const bb = Ob * eb,
                wb = Hb._playbackTo - Hb._playbackFrom;
              if (0 !== wb && Hb._playbackFrom <= Eb.fromFrame && Hb._playbackTo >= Eb.toFrame) {
                Bb = Ob * Math.round((Hb._playbackFrames - (Hb._currentFrame - Hb._playbackFrom)) / wb) + bb
              } else sb = (Mb - this._playbackSyncMasterFrame) * (Hb._playbackFrames - this._playbackSyncMasterPlayed) < 0, Bb = bb;
              sb = sb || Hb._playbackJumped, this._playbackSyncMasterPlayed = Hb._playbackFrames, this._playbackSyncMasterFrame = Mb
            }
          } else lb = gb > 0 && wb > Mb || gb < 0 && wb < Mb ? Lb && 0 !== Ob ? Mb + gb % Ob : wb : Lb && 0 !== Ob ? wb + gb % Ob : Mb;
          if (!Cb && (Hb > 0 && this.currentFrame > lb || Hb < 0 && this.currentFrame < lb) || Cb && tb) {
            this._onLoop();
            for (let bb = 0; bb < Ib.length; bb++) Ib[bb].onlyOnce || (Ib[bb].isDone = !1);
            this._animationState.key = Hb > 0 ? 0 : Vb.getKeys().length - 1
          }
          if (this._currentFrame = lb, this._animationState.repeatCount = 0 === Ob ? 0 : gb / Ob | 0, this._animationState.highLimitValue = Ub, this._animationState.offsetValue = pb, this._playbackFrom = wb, this._playbackTo = Mb, this._playbackJumped = sb, this._playbackSyncRoot = Eb, Eb) Fb = Bb;
          else if (Lb) Fb = Cb ? lb === wb && gb === Mb ? Ob : lb - wb : gb;
          else {
            const bb = 0 !== Ob ? Math.floor(this._playbackFrames / Ob) : 0;
            Fb = (lb === Mb ? bb + 1 : bb) * Ob
          }
          this._playbackFrames = Fb, this._playbackProgress = this._animationState.sM === Kb.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Ob : Fb
        }
        const Ub = Vb._interpolate(lb, this._animationState);
        if (this.setValue(Ub, pb), Ib.length)
          for (let tb = 0; tb < Ib.length; tb++)
            if (Ob >= 0 && lb >= Ib[tb].frame && Ib[tb].frame >= wb || Ob < 0 && lb <= Ib[tb].frame && Ib[tb].frame <= wb) {
              const bb = Ib[tb];
              bb.isDone || (bb.onlyOnce && (Ib.splice(tb, 1), tb--), bb.isDone = !0, bb.action(lb))
            } return Lb || (this._stopped = !0), Lb
      }
    }
    var Rb = Mb(41581);
    class Db {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(bb) {
        this._weight = -1 !== bb ? Math.min(Math.max(bb, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(bb) {
        for (let wb = 0; wb < this._runtimeAnimations.length; wb++) {
          this._runtimeAnimations[wb]._prepareForSpeedRatioChange(bb)
        }
        this._speedRatio = bb, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          pb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          gb = arguments.length > 6 ? arguments[6] : void 0,
          lb = arguments.length > 7 ? arguments[7] : void 0,
          Lb = arguments.length > 8 ? arguments[8] : void 0,
          Ib = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Ob = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = wb, this.fromFrame = Mb, this.toFrame = eb, this.loopAnimation = pb, this.onAnimationEnd = gb, this.onAnimationLoop = Lb, this.isAdditive = Ib, this.playOrder = Ob, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.BO = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Hb.b, this.onAnimationLoopObservable = new Hb.b, this._scene = bb, lb && this.appendAnimations(wb, lb), this._speedRatio = Vb, bb._activeAnimatables.push(this)
      }
      syncWith(bb) {
        if (this._syncRoot = bb, bb) {
          const bb = this._scene._activeAnimatables.indexOf(this);
          bb > -1 && (this._scene._activeAnimatables.splice(bb, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(bb, wb) {
        for (let Mb = 0; Mb < wb.length; Mb++) {
          const eb = wb[Mb],
            Hb = new rb(bb, eb, this._scene, this);
          Hb._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Hb)
        }
      }
      getAnimationByTargetProperty(bb) {
        const wb = this._runtimeAnimations;
        for (let Mb = 0; Mb < wb.length; Mb++)
          if (wb[Mb].animation.targetProperty === bb) return wb[Mb].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(bb) {
        const wb = this._runtimeAnimations;
        for (let Mb = 0; Mb < wb.length; Mb++)
          if (wb[Mb].animation.targetProperty === bb) return wb[Mb];
        return null
      }
      reset() {
        const bb = this._runtimeAnimations;
        for (let wb = 0; wb < bb.length; wb++) bb[wb].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(bb) {
        const wb = this._runtimeAnimations;
        for (let Mb = 0; Mb < wb.length; Mb++) wb[Mb].animation.enableBlending = !0, wb[Mb].animation.blendingSpeed = bb
      }
      disableBlending() {
        const bb = this._runtimeAnimations;
        for (let wb = 0; wb < bb.length; wb++) bb[wb].animation.enableBlending = !1
      }
      goToFrame(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = this._runtimeAnimations;
        if (Mb[0]) {
          const wb = Mb[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? Mb[0].currentFrame;
          const eb = 0 === this.speedRatio ? 0 : (bb - this._frameToSyncFromJump) / wb * 1e3 / this.speedRatio;
          this._manualJumpDelay = -eb
        }
        for (let eb = 0; eb < Mb.length; eb++) Mb[eb].goToFrame(bb, wb ? this._weight : -1);
        this._goToFrame = bb
      }
      get paused() {
        return this.BO
      }
      pause() {
        this.BO || (this.BO = !0)
      }
      restart() {
        this.BO = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (bb || wb) {
          const Hb = this._scene._activeAnimatables.indexOf(this);
          if (Hb > -1) {
            const pb = this._runtimeAnimations;
            for (let Mb = pb.length - 1; Mb >= 0; Mb--) {
              const eb = pb[Mb];
              bb && eb.animation.name != bb || (wb && !wb(eb.target) || (eb.dispose(), pb.splice(Mb, 1)))
            }
            0 == pb.length && (Mb || this._scene._activeAnimatables.splice(Hb, 1), eb || this._raiseOnAnimationEnd())
          }
        } else {
          const bb = this._scene._activeAnimatables.indexOf(this);
          if (bb > -1) {
            Mb || this._scene._activeAnimatables.splice(bb, 1);
            const wb = this._runtimeAnimations;
            for (let bb = 0; bb < wb.length; bb++) wb[bb].dispose();
            this._runtimeAnimations.length = 0, eb || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((bb => {
          this.onAnimationEndObservable.add((() => {
            bb(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(bb) {
        if (this.BO) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = bb), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = bb, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += bb - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !Db.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let wb = !1;
        const Mb = this._runtimeAnimations;
        let eb;
        for (eb = 0; eb < Mb.length; eb++) {
          const Hb = Mb[eb].animate(bb - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          wb = wb || Hb
        }
        if (this.animationStarted = wb, !wb) {
          if (this.disposeOnEnd)
            for (eb = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(eb, 1), eb = 0; eb < Mb.length; eb++) Mb[eb].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return wb
      }
    }

    function cb(bb) {
      if (0 === bb.totalWeight && 0 === bb.totalAdditiveWeight) return bb.originalValue;
      let wb = 1;
      const Mb = pb.j.YC[0],
        eb = pb.j.YC[1],
        Hb = pb.j.Quaternion[0];
      let Vb = 0;
      const gb = bb.animations[0],
        lb = bb.originalValue;
      let Lb, Ib = !1;
      if (bb.totalWeight < 1) Lb = 1 - bb.totalWeight, lb.decompose(eb, Hb, Mb);
      else {
        if (Vb = 1, wb = bb.totalWeight, Lb = gb.weight / wb, 1 == Lb) {
          if (!bb.totalAdditiveWeight) return gb.currentValue;
          Ib = !0
        }
        gb.currentValue.decompose(eb, Hb, Mb)
      }
      if (!Ib) {
        eb.scaleInPlace(Lb), Mb.scaleInPlace(Lb), Hb.scaleInPlace(Lb);
        for (let gb = Vb; gb < bb.animations.length; gb++) {
          const Vb = bb.animations[gb];
          if (0 === Vb.weight) continue;
          Lb = Vb.weight / wb;
          const lb = pb.j.YC[2],
            Ib = pb.j.YC[3],
            Ob = pb.j.Quaternion[1];
          Vb.currentValue.decompose(Ib, Ob, lb), Ib.scaleAndAddToRef(Lb, eb), Ob.scaleAndAddToRef(pb.e.Dot(Hb, Ob) > 0 ? Lb : -Lb, Hb), lb.scaleAndAddToRef(Lb, Mb)
        }
        Hb.normalize()
      }
      for (let Ub = 0; Ub < bb.additiveAnimations.length; Ub++) {
        const wb = bb.additiveAnimations[Ub];
        if (0 === wb.weight) continue;
        const Vb = pb.j.YC[2],
          gb = pb.j.YC[3],
          lb = pb.j.Quaternion[1];
        wb.currentValue.decompose(gb, lb, Vb), gb.multiplyToRef(eb, gb), pb.o.LerpToRef(eb, gb, wb.weight, eb), Hb.multiplyToRef(lb, lb), pb.e.SlerpToRef(Hb, lb, wb.weight, Hb), Vb.scaleAndAddToRef(wb.weight, Mb)
      }
      const Ob = gb ? gb._animationState.workValue : pb.j.Matrix[0].clone();
      return pb.b.ComposeToRef(eb, Hb, Mb, Ob), Ob
    }

    function Yb(bb, wb) {
      if (0 === bb.totalWeight && 0 === bb.totalAdditiveWeight) return wb;
      const Mb = bb.animations[0],
        eb = bb.originalValue;
      let Hb = wb;
      if (0 === bb.totalWeight && bb.totalAdditiveWeight > 0) Hb.eZ(eb);
      else if (1 === bb.animations.length) {
        if (pb.e.SlerpToRef(eb, Mb.currentValue, Math.min(1, bb.totalWeight), Hb), 0 === bb.totalAdditiveWeight) return Hb
      } else if (bb.animations.length > 1) {
        let Mb, Vb, gb = 1;
        if (bb.totalWeight < 1) {
          const wb = 1 - bb.totalWeight;
          Mb = [], Vb = [], Mb.push(eb), Vb.push(wb)
        } else {
          if (2 === bb.animations.length && (pb.e.SlerpToRef(bb.animations[0].currentValue, bb.animations[1].currentValue, bb.animations[1].weight / bb.totalWeight, wb), 0 === bb.totalAdditiveWeight)) return wb;
          Mb = [], Vb = [], gb = bb.totalWeight
        }
        for (let wb = 0; wb < bb.animations.length; wb++) {
          const eb = bb.animations[wb];
          Mb.push(eb.currentValue), Vb.push(eb.weight / gb)
        }
        let lb = 0;
        for (let bb = 0; bb < Mb.length;) bb ? (lb += Vb[bb], pb.e.SlerpToRef(Hb, Mb[bb], Vb[bb] / lb, Hb), bb++) : (pb.e.SlerpToRef(Mb[bb], Mb[bb + 1], Vb[bb + 1] / (Vb[bb] + Vb[bb + 1]), wb), Hb = wb, lb = Vb[bb] + Vb[bb + 1], bb += 2)
      }
      for (let Vb = 0; Vb < bb.additiveAnimations.length; Vb++) {
        const wb = bb.additiveAnimations[Vb];
        0 !== wb.weight && (Hb.multiplyToRef(wb.currentValue, pb.j.Quaternion[0]), pb.e.SlerpToRef(Hb, pb.j.Quaternion[0], wb.weight, Hb))
      }
      return Hb
    }

    function Zb(bb, wb) {
      wb && (wb.prototype.copyAnimationRange = function(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new Kb.b(this.name, "_matrix", bb.animations[0].framePerSecond, Kb.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const pb = bb.animations[0].getRange(wb);
        if (!pb) return !1;
        const Vb = pb.from,
          gb = pb.to,
          lb = bb.animations[0].getKeys(),
          Lb = bb.length,
          Ib = bb.getParent(),
          Ob = this.getParent(),
          Ub = eb && Ib && Lb && this.length && Lb !== this.length,
          tb = Ub && Ob && Ib ? Ob.length / Ib.length : 1,
          Cb = eb && !Ob && Hb && (1 !== Hb.x || 1 !== Hb.y || 1 !== Hb.z),
          Eb = this.animations[0].getKeys();
        let Fb, Bb, sb;
        for (let mb = 0, hb = lb.length; mb < hb; mb++) Fb = lb[mb], Fb.frame >= Vb && Fb.frame <= gb && (eb ? (sb = Fb.value.clone(), Ub ? (Bb = sb.getTranslation(), sb.setTranslation(Bb.scaleInPlace(tb))) : Cb && Hb ? (Bb = sb.getTranslation(), sb.setTranslation(Bb.multiplyInPlace(Hb))) : sb = Fb.value) : sb = Fb.value, Eb.push({
          frame: Fb.frame + Mb,
          value: sb
        }));
        return this.animations[0].createRange(wb, Vb + Mb, gb + Mb), !0
      }), bb && (bb.prototype._animate = function(bb) {
        const wb = this._animationWrites,
          Mb = this._animationWriteCount;
        let eb = 0;
        for (let pb = this._animationStepWriteCount; pb < Mb; pb++) {
          const bb = wb[pb];
          bb.tF && -1 === bb.weight || (bb.tF = !0, wb[pb] = wb[eb], wb[eb] = bb, eb++)
        }
        for (let pb = eb; pb < Mb; pb++) {
          const bb = wb[pb];
          bb.runtimeAnimation = null, bb.target = null
        }
        if (this._animationWriteCount = eb, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Hb = Rb.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Hb
        }
        this.deltaTime = void 0 !== bb ? bb : this.useConstantAnimationDeltaTime ? 16 : (Hb - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Hb;
        const Vb = this._activeAnimatables;
        if (0 === Vb.length) return;
        this._animationTime += this.deltaTime;
        const gb = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let pb = 0; pb < Vb.length; pb++) {
          const bb = Vb[pb];
          !bb._animate(gb) && bb.disposeOnEnd && pb--
        }! function(bb) {
          if (bb._registeredForLateAnimationBindings.length) {
            for (let wb = 0; wb < bb._registeredForLateAnimationBindings.length; wb++) {
              const Mb = bb._registeredForLateAnimationBindings.data[wb];
              for (const bb in Mb._lateAnimationHolders) {
                const wb = Mb._lateAnimationHolders[bb],
                  eb = wb.animations[0],
                  Hb = wb.originalValue;
                if (void 0 === Hb || null === Hb) continue;
                const Vb = Kb.b.AllowMatrixDecomposeForInterpolation && Hb.m;
                let gb = Mb[bb];
                if (Vb) gb = cb(wb);
                else if (void 0 !== Hb.w) gb = Yb(wb, gb || pb.e.Identity());
                else {
                  let bb = 0,
                    Mb = 1;
                  const pb = eb && eb._animationState.sM === Kb.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (wb.totalWeight < 1) gb = pb ? Hb.clone ? Hb.clone() : Hb : eb && Hb.scale ? Hb.scale(1 - wb.totalWeight) : eb ? Hb * (1 - wb.totalWeight) : Hb.clone ? Hb.clone() : Hb;
                  else if (eb) {
                    Mb = wb.totalWeight;
                    const Vb = eb.weight / Mb;
                    gb = 1 !== Vb ? eb.currentValue.scale ? eb.currentValue.scale(Vb) : eb.currentValue * Vb : (wb.animations.length > 1 || wb.additiveAnimations.length > 0) && eb.currentValue.clone ? eb.currentValue.clone() : eb.currentValue, pb && (gb.addToRef ? gb.addToRef(Hb, gb) : gb += Hb), bb = 1
                  }
                  for (let eb = bb; eb < wb.animations.length; eb++) {
                    const bb = wb.animations[eb],
                      Hb = bb.weight / Mb;
                    Hb && (bb.currentValue.scaleAndAddToRef ? bb.currentValue.scaleAndAddToRef(Hb, gb) : gb += bb.currentValue * Hb)
                  }
                  for (let eb = 0; eb < wb.additiveAnimations.length; eb++) {
                    const bb = wb.additiveAnimations[eb],
                      Mb = bb.weight;
                    Mb && (bb.currentValue.scaleAndAddToRef ? bb.currentValue.scaleAndAddToRef(Mb, gb) : gb += bb.currentValue * Mb)
                  }
                }
                Mb[bb] = gb
              }
              Mb._lateAnimationHolders = {}
            }
            bb._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, bb.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((bb, wb) => bb.playOrder - wb.playOrder))
      }, bb.prototype.beginWeightedAnimation = function(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Hb = arguments.length > 4 ? arguments[4] : void 0,
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Vb = arguments.length > 6 ? arguments[6] : void 0,
          gb = arguments.length > 7 ? arguments[7] : void 0,
          lb = arguments.length > 8 ? arguments[8] : void 0,
          Lb = arguments.length > 9 ? arguments[9] : void 0,
          Ib = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Ob = this.beginAnimation(bb, wb, Mb, Hb, pb, Vb, gb, !1, lb, Lb, Ib);
        return Ob.weight = eb, Ob
      }, bb.prototype.beginAnimation = function(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          pb = arguments.length > 5 ? arguments[5] : void 0,
          Vb = arguments.length > 6 ? arguments[6] : void 0,
          gb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          lb = arguments.length > 8 ? arguments[8] : void 0,
          Lb = arguments.length > 9 ? arguments[9] : void 0,
          Ib = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Hb < 0) {
          const bb = wb;
          wb = Mb, Mb = bb, Hb = -Hb
        }
        wb > Mb && (Hb = -Hb), gb && this.stopAnimation(bb, void 0, lb), Vb || (Vb = new Db(this, bb, wb, Mb, eb, Hb, pb, void 0, Lb, Ib));
        const Ob = !lb || lb(bb);
        if (bb.animations && Ob && Vb.appendAnimations(bb, bb.animations), bb.getAnimatables) {
          const Ib = bb.getAnimatables();
          for (let bb = 0; bb < Ib.length; bb++) this.beginAnimation(Ib[bb], wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb)
        }
        return Vb.reset(), Vb
      }, bb.prototype.beginHierarchyAnimation = function(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Vb = arguments.length > 6 ? arguments[6] : void 0,
          gb = arguments.length > 7 ? arguments[7] : void 0,
          lb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Lb = arguments.length > 9 ? arguments[9] : void 0,
          Ib = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Ob = bb.getDescendants(wb),
          Ub = [];
        Ub.push(this.beginAnimation(bb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, void 0, Ib));
        for (const tb of Ob) Ub.push(this.beginAnimation(tb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, void 0, Ib));
        return Ub
      }, bb.prototype.beginDirectAnimation = function(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (pb < 0) {
          const bb = Mb;
          Mb = eb, eb = bb, pb = -pb
        }
        Mb > eb && (pb = -pb);
        return new Db(this, bb, Mb, eb, Hb, pb, arguments.length > 6 ? arguments[6] : void 0, wb, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, bb.prototype.beginDirectHierarchyAnimation = function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        let Lb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const Ib = bb.getDescendants(wb),
          Ob = [];
        Ob.push(this.beginDirectAnimation(bb, Mb, eb, Hb, pb, Vb, gb, lb, Lb));
        for (const Ub of Ib) Ob.push(this.beginDirectAnimation(Ub, Mb, eb, Hb, pb, Vb, gb, lb, Lb));
        return Ob
      }, bb.prototype.getAnimatableByTarget = function(bb) {
        for (let wb = 0; wb < this._activeAnimatables.length; wb++)
          if (this._activeAnimatables[wb].target === bb) return this._activeAnimatables[wb];
        return null
      }, bb.prototype.getAllAnimatablesByTarget = function(bb) {
        const wb = [];
        for (let Mb = 0; Mb < this._activeAnimatables.length; Mb++) this._activeAnimatables[Mb].target === bb && wb.push(this._activeAnimatables[Mb]);
        return wb
      }, bb.prototype.stopAnimation = function(bb, wb, Mb) {
        const eb = this.getAllAnimatablesByTarget(bb);
        for (const Hb of eb) Hb.stop(wb, Mb)
      }, bb.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let bb = 0; bb < this._activeAnimatables.length; bb++) this._activeAnimatables[bb].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const bb of this.animationGroups) bb.stop()
      })
    }
    Db.ProcessPausedAnimatables = !1;
    var fb, Ab = Mb(38299),
      Wb = Mb(41886),
      Jb = Mb(41554);
    class Sb extends Wb.d {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(bb) {
        (bb.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.eZ(bb), this._markAsDirtyAndDecompose())
      }
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          gb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(bb, wb.RJ(), !1), this.name = bb, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = wb, this._localMatrix = eb?.clone() ?? pb.b.Identity(), this._restMatrix = Hb ?? this._localMatrix.clone(), this._bindMatrix = Vb ?? this._localMatrix.clone(), this._index = gb, this._absoluteMatrix = new pb.b, this._absoluteBindMatrix = new pb.b, this._absoluteInverseBindMatrix = new pb.b, this._finalMatrix = new pb.b, wb.bones.push(this), this.setParent(Mb, !1), this._updateAbsoluteBindMatrices()
      }
      getClassName() {
        return "Bone"
      }
      getSkeleton() {
        return this._skeleton
      }
      get parent() {
        return this._parentNode
      }
      getParent() {
        return this.parent
      }
      getChildren() {
        return this.children
      }
      getIndex() {
        return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
      }
      set parent(bb) {
        this.setParent(bb)
      }
      setParent(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== bb) {
          if (this.parent) {
            const bb = this.parent.children.indexOf(this); - 1 !== bb && this.parent.children.splice(bb, 1)
          }
          this._parentNode = bb, this.parent && this.parent.children.push(this), wb && this._updateAbsoluteBindMatrices(), this.eeb()
        }
      }
      getLocalMatrix() {
        return this._compose(), this._localMatrix
      }
      getBindMatrix() {
        return this._bindMatrix
      }
      getBaseMatrix() {
        return this.getBindMatrix()
      }
      getRestMatrix() {
        return this._restMatrix
      }
      getRestPose() {
        return this.getRestMatrix()
      }
      setRestMatrix(bb) {
        this._restMatrix.eZ(bb)
      }
      setRestPose(bb) {
        this.setRestMatrix(bb)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(bb) {
        this.kbb(bb)
      }
      setBindPose(bb) {
        this.setBindMatrix(bb)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const bb = pb.j.YC[0],
            wb = pb.j.Quaternion[0],
            Mb = pb.j.YC[1];
          this.getRestMatrix().decompose(bb, wb, Mb), this._linkedTransformNode.position.eZ(Mb), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? pb.e.Identity(), this._linkedTransformNode.rotationQuaternion.eZ(wb), this._linkedTransformNode.CO.eZ(bb)
        } else this._matrix = this._restMatrix
      }
      getAbsoluteInverseBindMatrix() {
        return this._absoluteInverseBindMatrix
      }
      getInvertedAbsoluteTransform() {
        return this.getAbsoluteInverseBindMatrix()
      }
      getAbsoluteMatrix() {
        return this._skeleton.computeAbsoluteMatrices(), this._absoluteMatrix
      }
      getAbsoluteTransform() {
        return this.getAbsoluteMatrix()
      }
      linkTransformNode(bb) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = bb, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.FMb
      }
      set position(bb) {
        this._decompose(), this.FMb.eZ(bb), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(bb) {
        this.setRotation(bb)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(bb) {
        this.setRotationQuaternion(bb)
      }
      get CO() {
        return this.getScale()
      }
      set CO(bb) {
        this.setScale(bb)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = pb.o.Zero(), this._localRotation = pb.e.Zero(), this.FMb = pb.o.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.FMb))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, pb.b.ComposeToRef(this._localScaling, this._localRotation, this.FMb, this._localMatrix)) : this._needToCompose = !1)
      }
      kbb(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.eZ(bb), wb && this._updateAbsoluteBindMatrices(), Mb ? this._matrix = bb : this.eeb()
      }
      _updateAbsoluteBindMatrices(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (bb || (bb = this._bindMatrix), this.parent ? bb.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.eZ(bb), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), wb)
          for (let Mb = 0; Mb < this.children.length; Mb++) this.children[Mb]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      eeb() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.eeb(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.eeb(), this._needToDecompose = !0
      }
      _updatePosition(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Hb = this.getLocalMatrix();
        if (0 == wb) eb ? (Hb.addAtIndex(12, bb.x), Hb.addAtIndex(13, bb.y), Hb.addAtIndex(14, bb.z)) : Hb.setTranslationFromFloats(bb.x, bb.y, bb.z);
        else {
          const wb = Sb._TmpMats[0],
            Vb = Sb._TmpVecs[0];
          this.parent ? (wb.eZ(this.parent.getAbsoluteMatrix()), Mb && wb.multiplyToRef(Mb.getWorldMatrix(), wb)) : pb.b.IdentityToRef(wb), eb && wb.setTranslationFromFloats(0, 0, 0), wb.invert(), pb.o.TransformCoordinatesToRef(bb, wb, Vb), eb ? (Hb.addAtIndex(12, Vb.x), Hb.addAtIndex(13, Vb.y), Hb.addAtIndex(14, Vb.z)) : Hb.setTranslationFromFloats(Vb.x, Vb.y, Vb.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(bb, wb, Mb, !0)
      }
      setPosition(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(bb, wb, Mb, !1)
      }
      setAbsolutePosition(bb, wb) {
        this.setPosition(bb, 1, wb)
      }
      scale(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Hb = this.getLocalMatrix(),
          Vb = Sb._TmpMats[0];
        pb.b.ScalingToRef(bb, wb, Mb, Vb), Vb.multiplyToRef(Hb, Hb), Vb.invert();
        for (const pb of this.children) {
          const eb = pb.getLocalMatrix();
          eb.multiplyToRef(Vb, eb), eb.multiplyAtIndex(12, bb), eb.multiplyAtIndex(13, wb), eb.multiplyAtIndex(14, Mb), pb._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), eb)
          for (const pb of this.children) pb.scale(bb, wb, Mb, eb)
      }
      setScale(bb) {
        this._decompose(), this._localScaling.eZ(bb), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(bb) {
        this._decompose(), bb.eZ(this._localScaling)
      }
      setYawPitchRoll(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === eb) {
          const Vb = Sb._TmpQuat;
          return pb.e.RotationYawPitchRollToRef(bb, wb, Mb, Vb), void this.setRotationQuaternion(Vb, eb, Hb)
        }
        const Vb = Sb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Vb, Hb)) return;
        const gb = Sb._TmpMats[1];
        pb.b.RotationYawPitchRollToRef(bb, wb, Mb, gb), Vb.multiplyToRef(gb, gb), this._rotateWithMatrix(gb, eb, Hb)
      }
      rotate(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        const Hb = Sb._TmpMats[0];
        Hb.setTranslationFromFloats(0, 0, 0), pb.b.RotationAxisToRef(bb, wb, Hb), this._rotateWithMatrix(Hb, Mb, eb)
      }
      setAxisAngle(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === Mb) {
          const Hb = Sb._TmpQuat;
          return pb.e.RotationAxisToRef(bb, wb, Hb), void this.setRotationQuaternion(Hb, Mb, eb)
        }
        const Hb = Sb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Hb, eb)) return;
        const Vb = Sb._TmpMats[1];
        pb.b.RotationAxisToRef(bb, wb, Vb), Hb.multiplyToRef(Vb, Vb), this._rotateWithMatrix(Vb, Mb, eb)
      }
      setRotation(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(bb.y, bb.x, bb.z, wb, Mb)
      }
      setRotationQuaternion(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === wb) return this._decompose(), this._localRotation.eZ(bb), void this._markAsDirtyAndCompose();
        const eb = Sb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(eb, Mb)) return;
        const Hb = Sb._TmpMats[1];
        pb.b.FromQuaternionToRef(bb, Hb), eb.multiplyToRef(Hb, Hb), this._rotateWithMatrix(Hb, wb, Mb)
      }
      setRotationMatrix(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === wb) {
          const eb = Sb._TmpQuat;
          return pb.e.FromRotationMatrixToRef(bb, eb), void this.setRotationQuaternion(eb, wb, Mb)
        }
        const eb = Sb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(eb, Mb)) return;
        const Hb = Sb._TmpMats[1];
        Hb.eZ(bb), eb.multiplyToRef(bb, Hb), this._rotateWithMatrix(Hb, wb, Mb)
      }
      _rotateWithMatrix(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = this.getLocalMatrix(),
          Hb = eb.m[12],
          pb = eb.m[13],
          Vb = eb.m[14],
          gb = this.getParent(),
          lb = Sb._TmpMats[3],
          Lb = Sb._TmpMats[4];
        gb && 1 == wb ? (Mb ? (lb.eZ(Mb.getWorldMatrix()), gb.getAbsoluteMatrix().multiplyToRef(lb, lb)) : lb.eZ(gb.getAbsoluteMatrix()), Lb.eZ(lb), Lb.invert(), eb.multiplyToRef(lb, eb), eb.multiplyToRef(bb, eb), eb.multiplyToRef(Lb, eb)) : 1 == wb && Mb ? (lb.eZ(Mb.getWorldMatrix()), Lb.eZ(lb), Lb.invert(), eb.multiplyToRef(lb, eb), eb.multiplyToRef(bb, eb), eb.multiplyToRef(Lb, eb)) : eb.multiplyToRef(bb, eb), eb.setTranslationFromFloats(Hb, pb, Vb), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(bb, wb) {
        const Mb = Sb._TmpMats[2];
        return bb.eZ(this.getAbsoluteMatrix()), wb ? (bb.multiplyToRef(wb.getWorldMatrix(), bb), pb.b.ScalingToRef(wb.CO.x, wb.CO.y, wb.CO.z, Mb)) : pb.b.IdentityToRef(Mb), bb.invert(), !isNaN(bb.m[0]) && (Mb.multiplyAtIndex(0, this._scalingDeterminant), bb.multiplyToRef(Mb, bb), !0)
      }
      Qm() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Mb = pb.o.Zero();
        return this.getPositionToRef(bb, wb, Mb), Mb
      }
      getPositionToRef() {
        let bb = arguments.length > 1 ? arguments[1] : void 0,
          wb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const bb = this.getLocalMatrix();
          wb.x = bb.m[12], wb.y = bb.m[13], wb.z = bb.m[14]
        } else {
          const Mb = Sb._TmpMats[0].eZ(this.getAbsoluteMatrix());
          bb && Mb.multiplyToRef(bb.getWorldMatrix(), Mb), wb.x = Mb.m[12], wb.y = Mb.m[13], wb.z = Mb.m[14]
        }
      }
      getAbsolutePosition() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const wb = pb.o.Zero();
        return this.getPositionToRef(1, bb, wb), wb
      }
      getAbsolutePositionToRef(bb, wb) {
        this.getPositionToRef(1, bb, wb)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.eZ(this._localMatrix);
          const bb = this._skeleton.getPoseMatrix();
          bb && this._absoluteMatrix.multiplyToRef(bb, this._absoluteMatrix)
        }
        const bb = this.children,
          wb = bb.length;
        for (let Mb = 0; Mb < wb; Mb++) bb[Mb].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      S_(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Mb = pb.o.Zero();
        return this.getDirectionToRef(bb, wb, Mb), Mb
      }
      getDirectionToRef(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = Sb._TmpMats[0].eZ(this.getAbsoluteMatrix());
        wb && eb.multiplyToRef(wb.getWorldMatrix(), eb), pb.o.TransformNormalToRef(bb, eb, Mb), Mb.normalize()
      }
      getRotation() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Mb = pb.o.Zero();
        return this.getRotationToRef(bb, wb, Mb), Mb
      }
      getRotationToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = Sb._TmpQuat;
        this.getRotationQuaternionToRef(bb, wb, eb), eb.toEulerAnglesToRef(Mb)
      }
      getRotationQuaternion() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Mb = pb.e.Identity();
        return this.getRotationQuaternionToRef(bb, wb, Mb), Mb
      }
      getRotationQuaternionToRef() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), wb.eZ(this._localRotation);
        else {
          const Mb = Sb._TmpMats[0],
            eb = this.getAbsoluteMatrix();
          bb ? eb.multiplyToRef(bb.getWorldMatrix(), Mb) : Mb.eZ(eb), Mb.multiplyAtIndex(0, this._scalingDeterminant), Mb.multiplyAtIndex(1, this._scalingDeterminant), Mb.multiplyAtIndex(2, this._scalingDeterminant), Mb.decompose(void 0, wb, void 0)
        }
      }
      getRotationMatrix() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 ? arguments[1] : void 0;
        const Mb = pb.b.Identity();
        return this.getRotationMatrixToRef(bb, wb, Mb), Mb
      }
      getRotationMatrixToRef() {
        let bb = arguments.length > 1 ? arguments[1] : void 0,
          wb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(wb);
        else {
          const Mb = Sb._TmpMats[0],
            eb = this.getAbsoluteMatrix();
          bb ? eb.multiplyToRef(bb.getWorldMatrix(), Mb) : Mb.eZ(eb), Mb.multiplyAtIndex(0, this._scalingDeterminant), Mb.multiplyAtIndex(1, this._scalingDeterminant), Mb.multiplyAtIndex(2, this._scalingDeterminant), Mb.getRotationMatrixToRef(wb)
        }
      }
      getAbsolutePositionFromLocal(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Mb = pb.o.Zero();
        return this.getAbsolutePositionFromLocalToRef(bb, wb, Mb), Mb
      }
      getAbsolutePositionFromLocalToRef(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = Sb._TmpMats[0].eZ(this.getAbsoluteMatrix());
        wb && eb.multiplyToRef(wb.getWorldMatrix(), eb), pb.o.TransformCoordinatesToRef(bb, eb, Mb)
      }
      getLocalPositionFromAbsolute(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Mb = pb.o.Zero();
        return this.getLocalPositionFromAbsoluteToRef(bb, wb, Mb), Mb
      }
      getLocalPositionFromAbsoluteToRef(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = Sb._TmpMats[0].eZ(this.getAbsoluteMatrix());
        wb && eb.multiplyToRef(wb.getWorldMatrix(), eb), eb.invert(), pb.o.TransformCoordinatesToRef(bb, eb, Mb)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const bb = this._skeleton.bones.indexOf(this);
        if (-1 !== bb && this._skeleton.bones.splice(bb, 1), this._parentNode && this._parentNode.children) {
          const bb = this._parentNode.children,
            wb = bb.indexOf(this); - 1 !== wb && bb.splice(wb, 1)
        }
        super.dispose()
      }
    }
    Sb._TmpVecs = (0, Ab.d)(2, pb.o.Zero), Sb._TmpQuat = pb.e.Identity(), Sb._TmpMats = (0, Ab.d)(5, pb.b.Identity), (fb = Sb.prototype).copyAnimationRange ?? (fb.copyAnimationRange = (0, Jb.h)("Bone", "copyAnimationRange"));
    var Nb = Mb(41764);
    let vb = !1;
    var Qb = Mb(41646),
      Gb = Mb(41997),
      qb = Mb(42004),
      ab = Mb(41999),
      ib = Mb(41797);

    function ub(bb, wb) {
      const Mb = (0, tb.RandomRange)(0, 1);
      Ib.f.LerpToRef(wb.color1, wb.color2, Mb, bb.color)
    }

    function db(bb, wb) {
      wb.colorDead.subtractToRef(bb.color, wb._colorDiff), wb._colorDiff.scaleToRef(1 / bb.lifeTime, bb.colorStep)
    }

    function Pb(bb, wb) {
      bb._properties.currentColorGradient = wb._colorGradients[0], bb._properties.currentColorGradient.getColorToRef(bb.color), bb._properties.currentColor1.eZ(bb.color), wb._colorGradients.length > 1 ? wb._colorGradients[1].getColorToRef(bb._properties.currentColor2) : bb._properties.currentColor2.eZ(bb.color)
    }

    function nb(bb, wb) {
      const Mb = wb._colorGradients;
      eb.j.GetCurrentGradient(wb._ratio, Mb, ((wb, Mb, eb) => {
        wb !== bb._properties.currentColorGradient && (bb._properties.currentColor1.eZ(bb._properties.currentColor2), Mb.getColorToRef(bb._properties.currentColor2), bb._properties.currentColorGradient = wb), Ib.f.LerpToRef(bb._properties.currentColor1, bb._properties.currentColor2, eb, bb.color), bb.color.a < 0 && (bb.color.a = 0)
      }))
    }

    function yb(bb, wb) {
      bb.colorStep.scaleToRef(wb._scaledUpdateSpeed, wb._scaledColorStep), bb.color.addInPlace(wb._scaledColorStep), bb.color.a < 0 && (bb.color.a = 0)
    }

    function ob(bb, wb) {
      eb.j.GetCurrentGradient(wb._ratio, wb._angularSpeedGradients, ((wb, Mb, eb) => {
        wb !== bb._properties.currentAngularSpeedGradient && (bb._properties.currentAngularSpeed1 = bb._properties.currentAngularSpeed2, bb._properties.currentAngularSpeed2 = Mb.getFactor(), bb._properties.currentAngularSpeedGradient = wb), bb.angularSpeed = (0, tb.Lerp)(bb._properties.currentAngularSpeed1, bb._properties.currentAngularSpeed2, eb)
      }))
    }

    function Tb(bb, wb) {
      bb.angle += bb.angularSpeed * wb._scaledUpdateSpeed
    }

    function kb(bb, wb) {
      wb.particleEmitterType.startDirectionFunction(wb._emitterWorldMatrix, bb.direction, bb, wb.isLocal, wb._emitterInverseWorldMatrix)
    }

    function bw(bb, wb) {
      wb.startDirectionFunction(wb._emitterWorldMatrix, bb.direction, bb, wb.isLocal)
    }

    function ww(bb, wb) {
      bb._properties.currentVelocityGradient = wb._velocityGradients[0], bb._properties.currentVelocity1 = bb._properties.currentVelocityGradient.getFactor(), wb._velocityGradients.length > 1 ? bb._properties.currentVelocity2 = wb._velocityGradients[1].getFactor() : bb._properties.currentVelocity2 = bb._properties.currentVelocity1
    }

    function Mw(bb, wb) {
      bb._properties.currentLimitVelocityGradient = wb._limitVelocityGradients[0], bb._properties.currentLimitVelocity1 = bb._properties.currentLimitVelocityGradient.getFactor(), wb._limitVelocityGradients.length > 1 ? bb._properties.currentLimitVelocity2 = wb._limitVelocityGradients[1].getFactor() : bb._properties.currentLimitVelocity2 = bb._properties.currentLimitVelocity1
    }

    function ew(bb, wb) {
      eb.j.GetCurrentGradient(wb._ratio, wb._velocityGradients, ((wb, Mb, eb) => {
        wb !== bb._properties.currentVelocityGradient && (bb._properties.currentVelocity1 = bb._properties.currentVelocity2, bb._properties.currentVelocity2 = Mb.getFactor(), bb._properties.currentVelocityGradient = wb), bb._properties.directionScale *= (0, tb.Lerp)(bb._properties.currentVelocity1, bb._properties.currentVelocity2, eb)
      }))
    }

    function Hw(bb, wb) {
      eb.j.GetCurrentGradient(wb._ratio, wb._limitVelocityGradients, ((Mb, eb, Hb) => {
        Mb !== bb._properties.currentLimitVelocityGradient && (bb._properties.currentLimitVelocity1 = bb._properties.currentLimitVelocity2, bb._properties.currentLimitVelocity2 = eb.getFactor(), bb._properties.currentLimitVelocityGradient = Mb);
        const pb = (0, tb.Lerp)(bb._properties.currentLimitVelocity1, bb._properties.currentLimitVelocity2, Hb);
        bb.direction.length() > pb && bb.direction.scaleInPlace(wb.limitVelocityDamping)
      }))
    }

    function pw(bb) {
      bb.direction.scaleToRef(bb._properties.directionScale, bb._properties.scaledDirection)
    }

    function Vw(bb, wb) {
      wb.particleEmitterType.startPositionFunction(wb._emitterWorldMatrix, bb.position, bb, wb.isLocal)
    }

    function gw(bb, wb) {
      wb.startPositionFunction(wb._emitterWorldMatrix, bb.position, bb, wb.isLocal)
    }

    function lw(bb, wb) {
      bb._properties.localPosition ? bb._properties.localPosition.eZ(bb.position) : bb._properties.localPosition = bb.position.clone(), pb.o.TransformCoordinatesToRef(bb._properties.localPosition, wb._emitterWorldMatrix, bb.position)
    }

    function Lw(bb, wb) {
      wb.isLocal && bb._properties.localPosition ? (bb._properties.localPosition.addInPlace(bb._properties.scaledDirection), pb.o.TransformCoordinatesToRef(bb._properties.localPosition, wb._emitterWorldMatrix, bb.position)) : bb.position.addInPlace(bb._properties.scaledDirection)
    }

    function Iw(bb, wb) {
      bb._properties.currentDragGradient = wb._dragGradients[0], bb._properties.currentDrag1 = bb._properties.currentDragGradient.getFactor(), wb._dragGradients.length > 1 ? bb._properties.currentDrag2 = wb._dragGradients[1].getFactor() : bb._properties.currentDrag2 = bb._properties.currentDrag1
    }

    function Ow(bb, wb) {
      eb.j.GetCurrentGradient(wb._ratio, wb._dragGradients, ((wb, Mb, eb) => {
        wb !== bb._properties.currentDragGradient && (bb._properties.currentDrag1 = bb._properties.currentDrag2, bb._properties.currentDrag2 = Mb.getFactor(), bb._properties.currentDragGradient = wb);
        const Hb = (0, tb.Lerp)(bb._properties.currentDrag1, bb._properties.currentDrag2, eb);
        bb._properties.scaledDirection.scaleInPlace(1 - Hb)
      }))
    }

    function Uw(bb, wb) {
      bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2 ? (bb._properties.randomNoiseCoordinates1.twb(Math.random(), Math.random(), Math.random()), bb._properties.randomNoiseCoordinates2.twb(Math.random(), Math.random(), Math.random())) : (bb._properties.randomNoiseCoordinates1 = new pb.o(Math.random(), Math.random(), Math.random()), bb._properties.randomNoiseCoordinates2 = new pb.o(Math.random(), Math.random(), Math.random()))
    }

    function tw(bb, wb) {
      const Mb = wb._noiseTextureData,
        eb = wb._noiseTextureSize;
      if (Mb && eb && bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2) {
        const Hb = wb._fetchR(bb._properties.randomNoiseCoordinates1.x, bb._properties.randomNoiseCoordinates1.y, eb.width, eb.height, Mb),
          Vb = wb._fetchR(bb._properties.randomNoiseCoordinates1.z, bb._properties.randomNoiseCoordinates2.x, eb.width, eb.height, Mb),
          gb = wb._fetchR(bb._properties.randomNoiseCoordinates2.y, bb._properties.randomNoiseCoordinates2.z, eb.width, eb.height, Mb),
          lb = pb.j.YC[0],
          Lb = pb.j.YC[1];
        lb.twb((2 * Hb - 1) * wb.noiseStrength.x, (2 * Vb - 1) * wb.noiseStrength.y, (2 * gb - 1) * wb.noiseStrength.z), lb.scaleToRef(wb._tempScaledUpdateSpeed, Lb), bb.direction.addInPlace(Lb)
      }
    }

    function Cw(bb, wb) {
      wb.gravity.scaleToRef(wb._tempScaledUpdateSpeed, wb._scaledGravity), bb.direction.addInPlace(wb._scaledGravity)
    }

    function Ew(bb, wb) {
      bb.size = (0, tb.RandomRange)(wb.minSize, wb.maxSize), bb.scale.twb((0, tb.RandomRange)(wb.minScaleX, wb.maxScaleX), (0, tb.RandomRange)(wb.minScaleY, wb.maxScaleY))
    }

    function Fw(bb, wb) {
      bb._properties.currentSizeGradient = wb._sizeGradients[0], bb._properties.currentSize1 = bb._properties.currentSizeGradient.getFactor(), bb.size = bb._properties.currentSize1, wb._sizeGradients.length > 1 ? bb._properties.currentSize2 = wb._sizeGradients[1].getFactor() : bb._properties.currentSize2 = bb._properties.currentSize1, bb.scale.twb((0, tb.RandomRange)(wb.minScaleX, wb.maxScaleX), (0, tb.RandomRange)(wb.minScaleY, wb.maxScaleY))
    }

    function Bw(bb, wb) {
      const Mb = wb._actualFrame / wb.targetStopDuration;
      eb.j.GetCurrentGradient(Mb, wb._startSizeGradients, ((Mb, eb, Hb) => {
        Mb !== wb._currentStartSizeGradient && (wb._currentStartSize1 = wb._currentStartSize2, wb._currentStartSize2 = eb.getFactor(), wb._currentStartSizeGradient = Mb);
        const pb = (0, tb.Lerp)(wb._currentStartSize1, wb._currentStartSize2, Hb);
        bb.scale.scaleInPlace(pb)
      }))
    }

    function sw(bb, wb) {
      eb.j.GetCurrentGradient(wb._ratio, wb._sizeGradients, ((wb, Mb, eb) => {
        wb !== bb._properties.currentSizeGradient && (bb._properties.currentSize1 = bb._properties.currentSize2, bb._properties.currentSize2 = Mb.getFactor(), bb._properties.currentSizeGradient = wb), bb.size = (0, tb.Lerp)(bb._properties.currentSize1, bb._properties.currentSize2, eb)
      }))
    }

    function mw(bb, wb) {
      bb.remapData = new pb.q(0, 1, 0, 1)
    }

    function hw(bb, wb) {
      wb._colorRemapGradients && wb._colorRemapGradients.length > 0 && eb.j.GetCurrentGradient(wb._ratio, wb._colorRemapGradients, ((wb, Mb, eb) => {
        const Hb = (0, tb.Lerp)(wb.factor1, Mb.factor1, eb),
          pb = (0, tb.Lerp)(wb.factor2, Mb.factor2, eb);
        bb.remapData.x = Hb, bb.remapData.y = pb - Hb
      })), wb._alphaRemapGradients && wb._alphaRemapGradients.length > 0 && eb.j.GetCurrentGradient(wb._ratio, wb._alphaRemapGradients, ((wb, Mb, eb) => {
        const Hb = (0, tb.Lerp)(wb.factor1, Mb.factor1, eb),
          pb = (0, tb.Lerp)(wb.factor2, Mb.factor2, eb);
        bb.remapData.z = Hb, bb.remapData.w = pb - Hb
      }))
    }

    function zw(bb, wb) {
      const Mb = (0, tb.Clamp)(wb._actualFrame / wb.targetStopDuration);
      eb.j.GetCurrentGradient(Mb, wb._lifeTimeGradients, ((wb, eb) => {
        const Hb = wb,
          pb = eb,
          Vb = Hb.getFactor(),
          gb = pb.getFactor(),
          lb = (Mb - Hb.gradient) / (pb.gradient - Hb.gradient);
        bb.lifeTime = (0, tb.Lerp)(Vb, gb, lb)
      })), wb._emitPower = (0, tb.RandomRange)(wb.minEmitPower, wb.maxEmitPower)
    }

    function Xw(bb, wb) {
      bb.lifeTime = (0, tb.RandomRange)(wb.minLifeTime, wb.maxLifeTime), wb._emitPower = (0, tb.RandomRange)(wb.minEmitPower, wb.maxEmitPower)
    }

    function xw(bb, wb) {
      0 === wb._emitPower ? (bb._properties.initialDirection ? bb._properties.initialDirection.eZ(bb.direction) : bb._properties.initialDirection = bb.direction.clone(), bb.direction.set(0, 0, 0)) : (bb._properties.initialDirection = null, bb.direction.scaleInPlace(wb._emitPower)), bb.direction.addInPlace(wb._inheritedVelocityOffset)
    }

    function jw(bb, wb) {
      bb.angularSpeed = (0, tb.RandomRange)(wb.minAngularSpeed, wb.maxAngularSpeed), bb.angle = (0, tb.RandomRange)(wb.minInitialRotation, wb.maxInitialRotation)
    }

    function Kw(bb, wb) {
      bb._properties.currentAngularSpeedGradient = wb._angularSpeedGradients[0], bb.angularSpeed = bb._properties.currentAngularSpeedGradient.getFactor(), bb._properties.currentAngularSpeed1 = bb.angularSpeed, wb._angularSpeedGradients.length > 1 ? bb._properties.currentAngularSpeed2 = wb._angularSpeedGradients[1].getFactor() : bb._properties.currentAngularSpeed2 = bb._properties.currentAngularSpeed1, bb.angle = (0, tb.RandomRange)(wb.minInitialRotation, wb.maxInitialRotation)
    }

    function rw(bb, wb) {
      bb._properties.initialStartSpriteCellId = wb.startSpriteCellID, bb._properties.initialEndSpriteCellId = wb.endSpriteCellID, bb._properties.initialSpriteCellLoop = wb.spriteCellLoop
    }

    function Rw(bb, wb) {
      bb.previousItem = wb.previousItem, bb.nextItem = wb, wb.previousItem && (wb.previousItem.nextItem = bb), wb.previousItem = bb
    }

    function Dw(bb, wb) {
      bb.previousItem = wb, bb.nextItem = wb.nextItem, wb.nextItem && (wb.nextItem.previousItem = bb), wb.nextItem = bb
    }

    function Yw(bb) {
      bb.previousItem && (bb.previousItem.nextItem = bb.nextItem), bb.nextItem && (bb.nextItem.previousItem = bb.previousItem)
    }
    var Zw = Mb(42055);
    class fw extends Xb {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(bb) {
        this._startDirectionFunction !== bb && (this._startDirectionFunction = bb, this._directionCreation.process = bb ? bw : kb)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(bb) {
        this._startPositionFunction !== bb && (this._startPositionFunction = bb, this._positionCreation.process = bb ? gw : Vw)
      }
      set onDispose(bb) {
        this._onDisposeObserver && this.vJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.vJ.add(bb)
      }
      get RD() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(bb) {
        this._useRampGradients !== bb && (this._useRampGradients = bb, this._resetEffect(), bb ? (this._rampCreation = {
          process: mw,
          previousItem: null,
          nextItem: null
        }, Dw(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: hw,
          previousItem: null,
          nextItem: null
        }, Dw(this._remapGradientProcessing, this._gravityProcessing))) : (Yw(this._rampCreation), Yw(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(bb) {
        this._isLocal !== bb && (this._isLocal = bb, bb ? (this._isLocalCreation = {
          process: lw,
          previousItem: null,
          nextItem: null
        }, Dw(this._isLocalCreation, this._positionCreation)) : Yw(this._isLocalCreation))
      }
      get particles() {
        return this._particles
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(bb) {
        this._animationSheetEnabled !== bb && (this._animationSheetEnabled = bb, bb ? (this._sheetCreation = {
          process: rw,
          previousItem: null,
          nextItem: null
        }, Dw(this._sheetCreation, this._colorDeadCreation)) : Yw(this._sheetCreation), this._reset())
      }
      getActiveCount() {
        return this._particles.length
      }
      getClassName() {
        return "ParticleSystem"
      }
      isStopping() {
        return this._stopped && this.isAlive()
      }
      getCustomEffect() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[bb]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[bb] ?? this._customWrappers[0]
      }
      setCustomEffect(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[wb] = new Gb.c(this._engine), this._customWrappers[wb].effect = bb, this._customWrappers[wb].drawContext && (this._customWrappers[wb].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Hb.b), this._onBeforeDrawParticlesObservable
      }
      get vertexShaderName() {
        return "particles"
      }
      get vertexBuffers() {
        return this._vertexBuffers
      }
      get indexBuffer() {
        return this._indexBuffer
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(bb) {
        if (this.noiseTexture !== bb) {
          if (this._noiseTexture = bb, !bb) return Yw(this._noiseCreation), void Yw(this._noiseProcessing);
          this._noiseCreation = {
            process: Uw,
            previousItem: null,
            nextItem: null
          }, Dw(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: tw,
            previousItem: null,
            nextItem: null
          }, Dw(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Vb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        vb || (vb = !0, Zb(Nb.g, Sb)), (0, Qb.e)(), super(bb), this._emitterInverseWorldMatrix = pb.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new pb.o, this.vJ = new Hb.b, this.onStoppedObservable = new Hb.b, this.onStartedObservable = new Hb.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new Ib.f(0, 0, 0, 0), this._colorDiff = new Ib.f(0, 0, 0, 0), this._scaledGravity = pb.o.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = bb => {}, this.recycleParticle = bb => {
          const wb = this._particles.pop();
          wb !== bb && wb.copyTo(bb), wb.metadata = null, this._stockParticles.push(wb)
        }, this._createParticle = () => {
          let bb;
          return 0 !== this._stockParticles.length ? (bb = this._stockParticles.pop(), bb._reset()) : bb = new jb(this), this._prepareParticle(bb), bb
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = wb, this._epsilon = gb, Mb && "Scene" !== Mb.getClassName() ? (this._engine = Mb, this.defaultProjectionMatrix = pb.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = Mb || lb.e.LastCreatedScene, this._engine = this._scene.DC(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.kR.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: Xw,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Vw,
          previousItem: null,
          nextItem: null
        }, Dw(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: kb,
          previousItem: null,
          nextItem: null
        }, Dw(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: xw,
          previousItem: null,
          nextItem: null
        }, Dw(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Ew,
          previousItem: null,
          nextItem: null
        }, Dw(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: jw,
          previousItem: null,
          nextItem: null
        }, Dw(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: ub,
          previousItem: null,
          nextItem: null
        }, Dw(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: db,
          previousItem: null,
          nextItem: null
        }, Dw(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Lb || (this._colorProcessing = {
          process: yb,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Tb,
          previousItem: null,
          nextItem: null
        }, Dw(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: pw,
          previousItem: null,
          nextItem: null
        }, Dw(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Lw,
          previousItem: null,
          nextItem: null
        }, Dw(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: Cw,
          previousItem: null,
          nextItem: null
        }, Dw(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Vb, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Gb.c(this._engine)
        }, this._customWrappers[0].effect = eb, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Ob.d, this.updateFunction = bb => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((bb => {
            this._noiseTextureData = bb
          })));
          const wb = bb === this._particles;
          for (let Mb = 0; Mb < bb.length; Mb++) {
            const eb = bb[Mb];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Hb = eb.age;
            if (eb.age += this._tempScaledUpdateSpeed, eb.age > eb.lifeTime) {
              const bb = eb.age - Hb,
                wb = eb.lifeTime - Hb;
              this._tempScaledUpdateSpeed = wb * this._tempScaledUpdateSpeed / bb, eb.age = eb.lifeTime
            }
            this._ratio = eb.age / eb.lifeTime, eb._properties.directionScale = this._tempScaledUpdateSpeed;
            let pb = this._updateQueueStart;
            for (; pb;) pb.process(eb, this), pb = pb.nextItem;
            if (this._isAnimationSheetEnabled && !Lb && eb.updateCellIndex(), eb._inheritParticleInfoToSubEmitters(), eb.age >= eb.lifeTime) {
              if (this._emitFromParticle(eb), eb._properties.attachedSubEmitters) {
                for (const bb of eb._properties.attachedSubEmitters) bb.particleSystem.disposeOnStop = !0, bb.particleSystem.stop();
                eb._properties.attachedSubEmitters = null
              }
              this.recycleParticle(eb), wb && Mb--
            } else;
          }
        }
      }
      serialize(bb) {
        throw new Error("Method not implemented.")
      }
      clone(bb, wb) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = zw : this._lifeTimeCreation.process = Xw
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Bw,
          previousItem: null,
          nextItem: null
        }, Dw(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Yw(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(bb) {
        this.targetStopDuration !== bb && (this._targetStopDuration = bb, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(bb, wb, Mb) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, bb, wb, Mb), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(bb) {
        return this._removeFactorGradient(this._lifeTimeGradients, bb), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(bb, wb, Mb) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Fw, this._sizeGradientProcessing = {
          process: sw,
          previousItem: null,
          nextItem: null
        }, Rw(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, bb, wb, Mb), this
      }
      removeSizeGradient(bb) {
        return this._removeFactorGradient(this._sizeGradients, bb), 0 === this._sizeGradients?.length && (Yw(this._sizeGradientProcessing), this._sizeCreation.process = Ew), this
      }
      addColorRemapGradient(bb, wb, Mb) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, bb, wb, Mb), this
      }
      removeColorRemapGradient(bb) {
        return this._removeFactorGradient(this._colorRemapGradients, bb), this
      }
      addAlphaRemapGradient(bb, wb, Mb) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, bb, wb, Mb), this
      }
      removeAlphaRemapGradient(bb) {
        return this._removeFactorGradient(this._alphaRemapGradients, bb), this
      }
      addAngularSpeedGradient(bb, wb, Mb) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = Kw, this._angularSpeedGradientProcessing = {
          process: ob,
          previousItem: null,
          nextItem: null
        }, Rw(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, bb, wb, Mb), this
      }
      removeAngularSpeedGradient(bb) {
        return this._removeFactorGradient(this._angularSpeedGradients, bb), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = jw, Yw(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(bb, wb, Mb) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: ww,
          previousItem: null,
          nextItem: null
        }, Dw(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: ew,
          previousItem: null,
          nextItem: null
        }, Rw(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, bb, wb, Mb), this
      }
      removeVelocityGradient(bb) {
        return this._removeFactorGradient(this._velocityGradients, bb), 0 === this._velocityGradients?.length && (Yw(this._velocityCreation), Yw(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(bb, wb, Mb) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Mw,
          previousItem: null,
          nextItem: null
        }, Dw(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Hw,
          previousItem: null,
          nextItem: null
        }, Dw(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, bb, wb, Mb), this
      }
      removeLimitVelocityGradient(bb) {
        return this._removeFactorGradient(this._limitVelocityGradients, bb), 0 === this._limitVelocityGradients?.length && (Yw(this._limitVelocityCreation), Yw(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(bb, wb, Mb) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: Iw,
          previousItem: null,
          nextItem: null
        }, Rw(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Ow,
          previousItem: null,
          nextItem: null
        }, Rw(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, bb, wb, Mb), this
      }
      removeDragGradient(bb) {
        return this._removeFactorGradient(this._dragGradients, bb), 0 === this._dragGradients?.length && (Yw(this._dragCreation), Yw(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(bb, wb, Mb) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, bb, wb, Mb), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(bb) {
        return this._removeFactorGradient(this._startSizeGradients, bb), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const bb = new Uint8Array(4 * this._rawTextureWidth),
          wb = Ib.k.Color3[0];
        for (let Mb = 0; Mb < this._rawTextureWidth; Mb++) {
          const Hb = Mb / this._rawTextureWidth;
          eb.j.GetCurrentGradient(Hb, this._rampGradients, ((eb, Hb, pb) => {
            Ib.e.LerpToRef(eb.color, Hb.color, pb, wb), bb[4 * Mb] = 255 * wb.r, bb[4 * Mb + 1] = 255 * wb.g, bb[4 * Mb + 2] = 255 * wb.b, bb[4 * Mb + 3] = 255
          }))
        }
        this._rampGradientsTexture = gb.b.CreateRGBATexture(bb, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((bb, wb) => bb.gradient < wb.gradient ? -1 : bb.gradient > wb.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(bb, wb) {
        this._rampGradients || (this._rampGradients = []);
        const Mb = new eb.h(bb, wb);
        return this._rampGradients.push(Mb), this._syncRampGradientTexture(), this
      }
      removeRampGradient(bb) {
        return this._removeGradientAndTexture(bb, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(bb, wb, Mb) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Pb, this._colorProcessing.process = nb);
        const Hb = new eb.e(bb, wb, Mb);
        return this._colorGradients.push(Hb), this._colorGradients.sort(((bb, wb) => bb.gradient < wb.gradient ? -1 : bb.gradient > wb.gradient ? 1 : 0)), this
      }
      removeColorGradient(bb) {
        if (!this._colorGradients) return this;
        let wb = 0;
        for (const Mb of this._colorGradients) {
          if (Mb.gradient === bb) {
            this._colorGradients.splice(wb, 1);
            break
          }
          wb++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = ub, this._colorProcessing.process = yb), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const bb of this._drawWrappers)
            if (bb)
              for (const wb of bb) wb?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(bb, wb, Mb, eb, Hb) {
        return Hb[4 * (((bb = .5 * Math.abs(bb) + .5) * Mb % Mb | 0) + ((wb = .5 * Math.abs(wb) + .5) * eb % eb | 0) * Mb)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const bb = this._engine,
          wb = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * wb), this._vertexBuffer = new Vb.d(bb, this._vertexData, !0, wb);
        let Mb = 0;
        const eb = this._vertexBuffer.createVertexBuffer(Vb.i.PositionKind, Mb, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Vb.i.PositionKind] = eb, Mb += 3;
        const Hb = this._vertexBuffer.createVertexBuffer(Vb.i.ColorKind, Mb, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Vb.i.ColorKind] = Hb, Mb += 4;
        const pb = this._vertexBuffer.createVertexBuffer("angle", Mb, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = pb, Mb += 1;
        const gb = this._vertexBuffer.createVertexBuffer("size", Mb, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = gb, Mb += 2, this._isAnimationSheetEnabled) {
          const bb = this._vertexBuffer.createVertexBuffer("cellIndex", Mb, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = bb, Mb += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const bb = this._vertexBuffer.createVertexBuffer("direction", Mb, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = bb, Mb += 3
        }
        if (this._useRampGradients) {
          const bb = this._vertexBuffer.createVertexBuffer("remapData", Mb, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = bb, Mb += 4
        }
        let lb;
        if (this._useInstancing) {
          const wb = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Vb.d(bb, wb, !1, 2), lb = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else lb = this._vertexBuffer.createVertexBuffer("offset", Mb, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = lb, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const bb = [],
          wb = [];
        let Mb = 0;
        for (let eb = 0; eb < this._capacity; eb++) bb.push(Mb), bb.push(Mb + 1), bb.push(Mb + 2), bb.push(Mb), bb.push(Mb + 2), bb.push(Mb + 3), wb.push(Mb, Mb + 1, Mb + 1, Mb + 2, Mb + 2, Mb + 3, Mb + 3, Mb, Mb, Mb + 3), Mb += 4;
        this._indexBuffer = this._engine.createIndexBuffer(bb), this._linesIndexBuffer = this._engine.createIndexBuffer(wb)
      }
      getCapacity() {
        return this._capacity
      }
      isAlive() {
        return this._alive
      }
      isStarted() {
        return this._started
      }
      _preStart() {}
      start() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (bb) return this.startDelay = bb, void setTimeout((() => {
          this.start(0)
        }), bb);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const bb = this.noiseTexture;
          if (bb && bb.onGeneratedObservable) bb.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let wb = 0; wb < this.preWarmCycles; wb++) this.animate(!0), bb.render()
            }))
          }));
          else
            for (let wb = 0; wb < this.preWarmCycles; wb++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(bb))
      }
      _postStop(bb) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(bb, wb, Mb, eb) {
        let Hb = bb * this._vertexBufferSize;
        const Vb = pb.j.YC[0].eZ(this._scene?.floatingOriginOffset || pb.o.ZeroReadOnly);
        if (this._vertexData[Hb++] = wb.position.x + this.worldOffset.x - Vb.x, this._vertexData[Hb++] = wb.position.y + this.worldOffset.y - Vb.y, this._vertexData[Hb++] = wb.position.z + this.worldOffset.z - Vb.z, this._vertexData[Hb++] = wb.color.r, this._vertexData[Hb++] = wb.color.g, this._vertexData[Hb++] = wb.color.b, this._vertexData[Hb++] = wb.color.a, this._vertexData[Hb++] = wb.angle, this._vertexData[Hb++] = wb.scale.x * wb.size, this._vertexData[Hb++] = wb.scale.y * wb.size, this._isAnimationSheetEnabled && (this._vertexData[Hb++] = wb.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Hb++] = wb.direction.x, this._vertexData[Hb++] = wb.direction.y, this._vertexData[Hb++] = wb.direction.z);
        else if (wb._properties.initialDirection) {
          let bb = wb._properties.initialDirection;
          this.isLocal && (pb.o.TransformNormalToRef(bb, this._emitterWorldMatrix, pb.j.YC[0]), bb = pb.j.YC[0]), 0 === bb.x && 0 === bb.z && (bb.x = .001), this._vertexData[Hb++] = bb.x, this._vertexData[Hb++] = bb.y, this._vertexData[Hb++] = bb.z
        } else {
          let bb = wb.direction;
          this.isLocal && (pb.o.TransformNormalToRef(bb, this._emitterWorldMatrix, pb.j.YC[0]), bb = pb.j.YC[0]), 0 === bb.x && 0 === bb.z && (bb.x = .001), this._vertexData[Hb++] = bb.x, this._vertexData[Hb++] = bb.y, this._vertexData[Hb++] = bb.z
        }
        this._useRampGradients && wb.remapData && (this._vertexData[Hb++] = wb.remapData.x, this._vertexData[Hb++] = wb.remapData.y, this._vertexData[Hb++] = wb.remapData.z, this._vertexData[Hb++] = wb.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === Mb ? Mb = this._epsilon : 1 === Mb && (Mb = 1 - this._epsilon), 0 === eb ? eb = this._epsilon : 1 === eb && (eb = 1 - this._epsilon)), this._vertexData[Hb++] = Mb, this._vertexData[Hb] = eb)
      }
      _prepareParticle(bb) {}
      _createNewOnes(bb) {
        let wb;
        for (let Mb = 0; Mb < bb && this._particles.length !== this._capacity; Mb++) {
          wb = this._createParticle(), this._particles.push(wb);
          let bb = this._createQueueStart;
          for (; bb;) bb.process(wb, this), bb = bb.nextItem;
          wb._inheritParticleInfoToSubEmitters()
        }
      }
      _update(bb) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const bb = this.emitter;
          this._emitterWorldMatrix = bb.getWorldMatrix()
        } else {
          const bb = this.emitter;
          this._emitterWorldMatrix = pb.b.Translation(bb.x, bb.y, bb.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(bb)
      }
      static _GetAttributeNamesOrOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = [Vb.i.PositionKind, Vb.i.ColorKind, "angle", "offset", "size"];
        return bb && eb.push("cellIndex"), wb || eb.push("direction"), Mb && eb.push("remapData"), eb
      }
      static _GetEffectCreationOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, qb.d)(eb), bb && eb.push("particlesInfos"), wb && eb.push("logarithmicDepthConstant"), Mb && (eb.push("vFogInfos"), eb.push("vFogColor")), eb
      }
      fillDefines(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, qb.j)(this, this._scene, bb), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && bb.push("#define FOG")), this._isAnimationSheetEnabled && bb.push("#define ANIMATESHEET"), this.useLogarithmicDepth && bb.push("#define LOGARITHMICDEPTH"), wb === Xb.BLENDMODE_MULTIPLY && bb.push("#define BLENDMULTIPLYMODE"), this.isLocal && bb.push("#define LOCAL"), this._useRampGradients && bb.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (bb.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            bb.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            bb.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && bb.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            bb.push("#define BILLBOARDMODE_ALL")
        }
        Mb && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), bb.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(bb, wb, Mb) {
        wb.push(...fw._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), bb.push(...fw._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), Mb.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, ib.f)(bb, this._imageProcessingConfigurationDefines), (0, ib.b)(Mb, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(bb) {
        var wb;
        const Mb = this._getCustomDrawWrapper(bb);
        if (Mb?.effect) return Mb;
        const eb = [];
        this.fillDefines(eb, bb);
        const pb = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Vb = Zw.b._PrepareStringDefines(pb, eb),
          gb = Vb ? Zw.b.GetConfiguration(pb) : void 0;
        let lb = this._drawWrappers[pb];
        lb || (lb = this._drawWrappers[pb] = [], 0 === pb || this._renderPassObserver || (this._renderPassObserver = ((wb = this._engine)._onReleaseRenderPassObservable ?? (wb._onReleaseRenderPassObservable = new Hb.b)).add((bb => {
          const wb = this._drawWrappers[bb];
          if (wb) {
            for (const bb of wb) bb?.dispose();
            delete this._drawWrappers[bb]
          }
        }))));
        let Lb = lb[bb];
        Lb || (Lb = new Gb.c(this._engine), Lb.drawContext && (Lb.drawContext.useInstancing = this._useInstancing), lb[bb] = Lb);
        const Ib = eb.join("\n");
        if (Lb.defines !== Ib) {
          const bb = [],
            wb = [],
            Mb = [];
          this.fillUniformsAttributesAndSamplerNames(wb, bb, Mb), Vb && (wb.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== gb?.defines.PREPASS_LOCAL_POSITION_INDEX && wb.push("inverseEmitterWM", "geometryWorldOffset")), Lb.setEffect(this._engine.createEffect("particles", {
            attributes: bb,
            uniformsNames: wb,
            samplers: Mb,
            defines: Ib,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Vb,
            indexParameters: Vb ? {
              buffersCount: gb?._mrtCount ?? 0
            } : void 0
          }, this._engine), Ib)
        }
        return Lb
      }
      _bindGeometryRendering(bb) {
        const wb = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Mb = Zw.b.GetConfiguration(wb);
        if (!Mb?._defines) return;
        bb.setFloat("objectId", 0), bb.setInt("meshBlendTag", 0);
        const eb = this._scene?.activeCamera;
        if (bb.setFloat2("cameraInfo", eb?.minZ ?? 0, eb?.maxZ ?? 1), this.isLocal && void 0 !== Mb.defines.PREPASS_LOCAL_POSITION_INDEX) {
          bb.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const wb = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || pb.o.ZeroReadOnly, pb.j.YC[0]);
          bb.setVector3("geometryWorldOffset", wb)
        }
      }
      animate() {
        let bb, wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!wb && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (wb ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) bb = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const wb = this._calculateEmitRate();
            bb = wb * this._scaledUpdateSpeed | 0, this._newPartsExcess += wb * this._scaledUpdateSpeed - bb
          }
          if (this._newPartsExcess > 1 && (bb += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? bb = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(bb), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !wb) {
            let bb = 0;
            for (let wb = 0; wb < this._particles.length; wb++) {
              const Mb = this._particles[wb];
              this._appendParticleVertices(bb, Mb), bb += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const bb = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  wb = this._particles.length;
                wb < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, wb * bb, this._fixedCapacityHighWaterMark * bb), this._fixedCapacityHighWaterMark = wb, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
              } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
          }
          0 === this.manualEmitCount && this.disposeOnStop && this.stop()
        }
      }
      _initFixedCapacitySnapshotData() {
        return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
      }
      _clearFixedCapacitySnapshotData() {
        if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
        const bb = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * bb), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let bb = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const wb = this._actualFrame / this.targetStopDuration;
          eb.j.GetCurrentGradient(wb, this._emitRateGradients, ((wb, Mb, eb) => {
            wb !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = Mb.getFactor(), this._currentEmitRateGradient = wb), bb = (0, tb.Lerp)(this._currentEmitRate1, this._currentEmitRate2, eb)
          }))
        }
        return bb
      }
      _appendParticleVertices(bb, wb) {
        this._appendParticleVertex(bb++, wb, 0, 0), this._useInstancing || (this._appendParticleVertex(bb++, wb, 1, 0), this._appendParticleVertex(bb++, wb, 1, 1), this._appendParticleVertex(bb, wb, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !fw.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Mb.e(665).then((() => Mb(64447))), Mb.e(659).then((() => Mb(64450)))])) : await Promise.all([Mb.e(648).then((() => Mb(64456))), Promise.all([Mb.e(641), Mb.e(674)]).then((() => Mb(64460)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== Xb.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(Xb.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(Xb.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(bb) {
        const wb = this._getWrapper(bb),
          Mb = wb.effect,
          eb = this._engine;
        eb.enableEffect(wb);
        const Hb = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        Mb.setTexture("diffuseSampler", this.particleTexture), Mb.setMatrix("view", Hb);
        const Vb = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (Mb.setMatrix("projection", Vb), this._isAnimationSheetEnabled && this.particleTexture) {
          const bb = this.particleTexture.getBaseSize();
          Mb.setFloat3("particlesInfos", this.spriteCellWidth / bb.width, this.spriteCellHeight / bb.height, this.spriteCellWidth / bb.width)
        }
        if (Mb.setVector2("translationPivot", this.translationPivot), Mb.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const bb = this._scene.activeCamera;
          Mb.setVector3("eyePosition", bb.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), Mb.setTexture("rampSampler", this._rampGradientsTexture));
        const gb = Mb.defines;
        this._scene && ((0, qb.f)(Mb, this, this._scene), this.applyFog && (0, ab.j)(this._scene, void 0, Mb)), gb.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Hb.invertToRef(pb.j.Matrix[0]), Mb.setMatrix("invView", pb.j.Matrix[0])), Mb._multiTarget && this._bindGeometryRendering(Mb), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? eb.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, Mb) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, Mb)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? eb.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, Mb) : eb.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, Mb), this.useLogarithmicDepth && this._scene && (0, ab.v)(gb, Mb, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(Mb), this._setEngineBasedOnBlendMode(bb), Mb._multiTarget && Zw.b._BindZeroAlphaDiscard(eb, Mb);
        let lb = !1;
        try {
          Zw.b._BindAttachmentsForEffect(eb, Mb) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(Mb), this._useInstancing ? this._scene?.forceWireframe ? eb.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : eb.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? eb.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : eb.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), lb = !0)
        } finally {
          Zw.b._RestoreAttachments(eb)
        }
        return lb ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const bb = this._engine;
        let wb;
        return bb.setState && (bb.setState(!1), this.forceDepthWrite && bb.setDepthWrite(!0)), wb = this.blendMode === Xb.BLENDMODE_MULTIPLYADD ? this._render(Xb.BLENDMODE_MULTIPLY) + this._render(Xb.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), wb
      }
      _onDispose() {}
      dispose() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), bb && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), bb && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(wb, Mb), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const bb = this._scene.kR.indexOf(this);
          bb > -1 && this._scene.kR.splice(bb, 1), this._scene._activeParticleSystems.dispose()
        }
        this.vJ.notifyObservers(this), this.vJ.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    fw.ForceGLSL = !1;
    var Aw, Ww = Mb(38333);
    ! function(bb) {
      bb[bb.ATTACHED = 0] = "ATTACHED", bb[bb.END = 1] = "END"
    }(Aw || (Aw = {}));
    class Jw {
      constructor(bb) {
        if (this.particleSystem = bb, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !bb.emitter || !bb.emitter.dispose) {
          const wb = (0, Ww.c)("BABYLON.AbstractMesh");
          bb.emitter = new wb("SubemitterSystemEmitter", bb.RJ()), bb._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let bb = this.particleSystem.emitter;
        if (bb) {
          if (bb instanceof pb.o) bb = bb.clone();
          else if (-1 !== bb.getClassName().indexOf("Mesh")) {
            bb = new((0, Ww.c)("BABYLON.Mesh"))("", bb.RJ()), bb.isVisible = !1
          }
        } else bb = new pb.o;
        const wb = new Jw(this.particleSystem.clone(this.particleSystem.name, bb));
        return wb.particleSystem.name += "Clone", wb.type = this.type, wb.inheritDirection = this.inheritDirection, wb.inheritedVelocityAmount = this.inheritedVelocityAmount, wb.particleSystem._disposeEmitterOnDispose = !0, wb.particleSystem.disposeOnStop = !0, wb
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = {};
        return wb.type = this.type, wb.inheritDirection = this.inheritDirection, wb.inheritedVelocityAmount = this.inheritedVelocityAmount, wb.particleSystem = this.particleSystem.serialize(bb), wb
      }
      static _ParseParticleSystem(bb, wb, Mb) {
        throw (0, Jb.k)("ParseParticle")
      }
      static Parse(bb, wb, Mb) {
        const eb = bb.particleSystem,
          Hb = new Jw(Jw._ParseParticleSystem(eb, wb, Mb, !0));
        return Hb.type = bb.type, Hb.inheritDirection = bb.inheritDirection, Hb.inheritedVelocityAmount = bb.inheritedVelocityAmount, Hb.particleSystem._isSubEmitter = !0, Hb
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Sw = Mb(41572),
      Nw = Mb(41697);
    const vw = () => {};
    class Qw {
      constructor() {
        this.particlePositionGenerator = vw, this.particleDestinationGenerator = vw, this.particleDirectionGenerator = vw
      }
      startDirectionFunction(bb, wb, Mb, eb) {
        const Hb = pb.j.YC[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== vw) this.particleDirectionGenerator(-1, Mb, Hb);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== vw) {
          this.particleDestinationGenerator(-1, Mb, Hb);
          const bb = pb.j.YC[1];
          Hb.subtractToRef(Mb.position, bb), bb.scaleToRef(1 / Mb.lifeTime, Hb)
        } else Hb.set(0, 0, 0);
        eb ? wb.eZ(Hb) : pb.o.TransformNormalToRef(Hb, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, eb) {
        const Hb = pb.j.YC[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== vw ? this.particlePositionGenerator(-1, Mb, Hb) : Hb.set(0, 0, 0), eb ? wb.eZ(Hb) : pb.o.TransformCoordinatesToRef(Hb, bb, wb)
      }
      clone() {
        const bb = new Qw;
        return Ub.e.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {}
      buildUniformLayout(bb) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.particlePositionGenerator = this.particlePositionGenerator, bb.particleDestinationGenerator = this.particleDestinationGenerator, bb
      }
      parse(bb) {
        bb.particlePositionGenerator && (this.particlePositionGenerator = bb.particlePositionGenerator), bb.particleDestinationGenerator && (this.particleDestinationGenerator = bb.particleDestinationGenerator)
      }
    }
    const Gw = pb.o.Zero(),
      qw = pb.o.Zero(),
      aw = pb.o.Zero();
    class iw {
      constructor() {
        this.strength = 0, this.position = pb.o.Zero()
      }
      _processParticle(bb, wb) {
        this.position.subtractToRef(bb.position, Gw);
        const Mb = Gw.lengthSquared() + 1;
        Gw.normalize().scaleToRef(this.strength / Mb, qw), qw.scaleToRef(wb._tempScaledUpdateSpeed, aw), bb.direction.addInPlace(aw)
      }
      serialize() {
        return {
          position: this.position.ppb(),
          strength: this.strength
        }
      }
    }
    const uw = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class dw extends fw {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = bb => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const wb = Math.floor(Math.random() * this._subEmitters.length);
          for (const Mb of this._subEmitters[wb])
            if (1 === Mb.type) {
              const wb = Mb.clone();
              bb._inheritParticleInfoToSubEmitter(wb), wb.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(wb.particleSystem), wb.particleSystem.start()
            }
        }
      }
      get source() {
        return this._source
      }
      get isNodeGenerated() {
        return null !== this._source
      }
      get flowMap() {
        return this._flowMap
      }
      set flowMap(bb) {
        this._flowMap !== bb && (this._flowMap = bb, this._flowMapUpdate && (Yw(this._flowMapUpdate), this._flowMapUpdate = null), bb && (this._flowMapUpdate = {
          process: bb => {
            const wb = this.RJ()?.getTransformMatrix();
            this._flowMap._processParticle(bb, this.flowMapStrength * this._tempScaledUpdateSpeed, wb)
          },
          previousItem: null,
          nextItem: null
        }, Dw(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(bb) {
        super.addAttractor(bb), 1 === this._attractors.length && (this._attractorUpdate = {
          process: bb => {
            for (const wb of this._attractors) wb._processParticle(bb, this)
          },
          previousItem: null,
          nextItem: null
        }, Dw(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(bb) {
        super.removeAttractor(bb), 0 === this._attractors.length && this._attractorUpdate && Yw(this._attractorUpdate)
      }
      start() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(bb)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const bb of this.subEmitters) bb instanceof dw ? this._subEmitters.push([new Jw(bb)]) : bb instanceof Jw ? this._subEmitters.push([bb]) : bb instanceof Array && this._subEmitters.push(bb)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const bb of this.activeSubSystems) bb.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const bb = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== bb && this._rootParticleSystem.activeSubSystems.splice(bb, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(bb) {
        bb && this._stopSubEmitters()
      }
      _prepareParticle(bb) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const wb = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          bb._properties.attachedSubEmitters = [];
          for (const Mb of wb)
            if (0 === Mb.type) {
              const wb = Mb.clone();
              bb._properties.attachedSubEmitters.push(wb), wb.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), bb && this.particles)
          for (const Mb of this.particles)
            if (Mb._properties.attachedSubEmitters)
              for (let bb = Mb._properties.attachedSubEmitters.length - 1; bb >= 0; bb -= 1) Mb._properties.attachedSubEmitters[bb].dispose();
        if (wb && this.activeSubSystems)
          for (let Mb = this.activeSubSystems.length - 1; Mb >= 0; Mb -= 1) this.activeSubSystems[Mb].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let bb = 0; bb < this._subEmitters.length; bb++)
            for (const wb of this._subEmitters[bb]) wb.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(bb, wb, Mb, eb) {
        let Hb;
        Hb = Mb instanceof Sw.d ? null : Mb;
        const Vb = (0, Ww.c)("BABYLON.Texture");
        if (Vb && Hb)
          if (bb.texture) wb.particleTexture = Vb.Parse(bb.texture, Hb, eb);
          else if (bb.textureName) {
          const Mb = bb.textureSettings;
          if (wb.particleTexture = new Vb(eb + bb.textureName, Hb, !1, void 0 === bb.invertY || bb.invertY, Mb ? Mb.samplingMode : void 0), wb.particleTexture.name = bb.textureName, Mb) {
            const bb = wb.particleTexture;
            for (const wb of uw) void 0 !== Mb[wb] && (bb[wb] = Mb[wb])
          }
        }
        if (bb.emitterId || 0 === bb.emitterId || void 0 !== bb.emitter ? (bb.emitterId || 0 === bb.emitterId) && Hb ? (wb.emitter = Hb.getLastMeshById(bb.emitterId), wb.emitter || (wb.emitter = pb.o.Zero())) : wb.emitter = pb.o.FromArray(bb.emitter) : wb.emitter = pb.o.Zero(), wb.isLocal = !!bb.isLocal, void 0 !== bb.renderingGroupId && (wb.renderingGroupId = bb.renderingGroupId), void 0 !== bb.isBillboardBased && (wb.isBillboardBased = bb.isBillboardBased), void 0 !== bb.billboardMode && (wb.billboardMode = bb.billboardMode), void 0 !== bb.useLogarithmicDepth && (wb.useLogarithmicDepth = bb.useLogarithmicDepth), bb.animations) {
          for (let Mb = 0; Mb < bb.animations.length; Mb++) {
            const eb = bb.animations[Mb],
              Hb = (0, Ww.c)("BABYLON.Animation");
            Hb && wb.animations.push(Hb.Parse(eb))
          }
          wb.beginAnimationOnStart = bb.beginAnimationOnStart, wb.beginAnimationFrom = bb.beginAnimationFrom, wb.beginAnimationTo = bb.beginAnimationTo, wb.beginAnimationLoop = bb.beginAnimationLoop
        }
        if (bb.autoAnimate && Hb && Hb.beginAnimation(wb, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), wb.startDelay = 0 | bb.startDelay, wb.minAngularSpeed = bb.minAngularSpeed, wb.maxAngularSpeed = bb.maxAngularSpeed, wb.minSize = bb.minSize, wb.maxSize = bb.maxSize, bb.minScaleX && (wb.minScaleX = bb.minScaleX, wb.maxScaleX = bb.maxScaleX, wb.minScaleY = bb.minScaleY, wb.maxScaleY = bb.maxScaleY), void 0 !== bb.preWarmCycles && (wb.preWarmCycles = bb.preWarmCycles, wb.preWarmStepOffset = bb.preWarmStepOffset), void 0 !== bb.minInitialRotation && (wb.minInitialRotation = bb.minInitialRotation, wb.maxInitialRotation = bb.maxInitialRotation), wb.minLifeTime = bb.minLifeTime, wb.maxLifeTime = bb.maxLifeTime, wb.minEmitPower = bb.minEmitPower, wb.maxEmitPower = bb.maxEmitPower, wb.emitRate = bb.emitRate, wb.gravity = pb.o.FromArray(bb.gravity), bb.noiseStrength && (wb.noiseStrength = pb.o.FromArray(bb.noiseStrength)), wb.color1 = Ib.f.FromArray(bb.color1), wb.color2 = Ib.f.FromArray(bb.color2), wb.colorDead = Ib.f.FromArray(bb.colorDead), wb.updateSpeed = bb.updateSpeed, wb.targetStopDuration = bb.targetStopDuration, wb.blendMode = bb.blendMode, bb.colorGradients)
          for (const pb of bb.colorGradients) wb.addColorGradient(pb.gradient, Ib.f.FromArray(pb.color1), pb.color2 ? Ib.f.FromArray(pb.color2) : void 0);
        if (bb.rampGradients) {
          for (const Mb of bb.rampGradients) wb.addRampGradient(Mb.gradient, Ib.e.FromArray(Mb.color));
          wb.useRampGradients = bb.useRampGradients
        }
        if (bb.colorRemapGradients)
          for (const pb of bb.colorRemapGradients) wb.addColorRemapGradient(pb.gradient, void 0 !== pb.factor1 ? pb.factor1 : pb.factor, pb.factor2);
        if (bb.alphaRemapGradients)
          for (const pb of bb.alphaRemapGradients) wb.addAlphaRemapGradient(pb.gradient, void 0 !== pb.factor1 ? pb.factor1 : pb.factor, pb.factor2);
        if (bb.sizeGradients)
          for (const pb of bb.sizeGradients) wb.addSizeGradient(pb.gradient, void 0 !== pb.factor1 ? pb.factor1 : pb.factor, pb.factor2);
        if (bb.angularSpeedGradients)
          for (const pb of bb.angularSpeedGradients) wb.addAngularSpeedGradient(pb.gradient, void 0 !== pb.factor1 ? pb.factor1 : pb.factor, pb.factor2);
        if (bb.velocityGradients)
          for (const pb of bb.velocityGradients) wb.addVelocityGradient(pb.gradient, void 0 !== pb.factor1 ? pb.factor1 : pb.factor, pb.factor2);
        if (bb.dragGradients)
          for (const pb of bb.dragGradients) wb.addDragGradient(pb.gradient, void 0 !== pb.factor1 ? pb.factor1 : pb.factor, pb.factor2);
        if (bb.emitRateGradients)
          for (const pb of bb.emitRateGradients) wb.addEmitRateGradient(pb.gradient, void 0 !== pb.factor1 ? pb.factor1 : pb.factor, pb.factor2);
        if (bb.startSizeGradients)
          for (const pb of bb.startSizeGradients) wb.addStartSizeGradient(pb.gradient, void 0 !== pb.factor1 ? pb.factor1 : pb.factor, pb.factor2);
        if (bb.lifeTimeGradients)
          for (const pb of bb.lifeTimeGradients) wb.addLifeTimeGradient(pb.gradient, void 0 !== pb.factor1 ? pb.factor1 : pb.factor, pb.factor2);
        if (bb.limitVelocityGradients) {
          for (const Mb of bb.limitVelocityGradients) wb.addLimitVelocityGradient(Mb.gradient, void 0 !== Mb.factor1 ? Mb.factor1 : Mb.factor, Mb.factor2);
          wb.limitVelocityDamping = bb.limitVelocityDamping
        }
        if (bb.noiseTexture && Hb) {
          const Mb = (0, Ww.c)("BABYLON.ProceduralTexture");
          wb.noiseTexture = Mb.Parse(bb.noiseTexture, Hb, eb)
        }
        let gb;
        if (bb.particleEmitterType) {
          switch (bb.particleEmitterType.type) {
            case "SphereParticleEmitter":
              gb = new Fb;
              break;
            case "SphereDirectedParticleEmitter":
              gb = new Bb;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              gb = new mb;
              break;
            case "ConeDirectedParticleEmitter":
              gb = new hb;
              break;
            case "CylinderParticleEmitter":
              gb = new sb.d;
              break;
            case "CylinderDirectedParticleEmitter":
              gb = new sb.b;
              break;
            case "HemisphericParticleEmitter":
              gb = new Eb;
              break;
            case "PointParticleEmitter":
              gb = new Cb;
              break;
            case "MeshParticleEmitter":
              gb = new zb;
              break;
            case "CustomParticleEmitter":
              gb = new Qw;
              break;
            default:
              gb = new Ob.d
          }
          gb.parse(bb.particleEmitterType, Hb)
        } else gb = new Ob.d, gb.parse(bb, Hb);
        wb.particleEmitterType = gb, wb.startSpriteCellID = bb.startSpriteCellID, wb.endSpriteCellID = bb.endSpriteCellID, wb.spriteCellLoop = bb.spriteCellLoop ?? !0, wb.spriteCellWidth = bb.spriteCellWidth, wb.spriteCellHeight = bb.spriteCellHeight, wb.spriteCellChangeSpeed = bb.spriteCellChangeSpeed, wb.spriteRandomStartCell = bb.spriteRandomStartCell, wb.disposeOnStop = bb.disposeOnStop ?? !1, wb.manualEmitCount = bb.manualEmitCount ?? -1
      }
      static Parse(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Hb = arguments.length > 4 ? arguments[4] : void 0;
        const Vb = bb.name;
        let gb, lb, Lb = null,
          Ob = null;
        if (wb instanceof Sw.d ? gb = wb : (lb = wb, gb = lb.DC()), bb.customShader && (0, Jb.e)(gb.createEffectForParticles)) {
          Ob = bb.customShader;
          const wb = Ob.shaderOptions.defines.length > 0 ? Ob.shaderOptions.defines.join("\n") : "";
          Lb = gb.createEffectForParticles(Ob.shaderPath.fragmentElement, Ob.shaderOptions.uniforms, Ob.shaderOptions.samplers, wb)
        }
        const Ub = new dw(Vb, Hb || bb.qO, wb, Lb, bb.isAnimationSheetEnabled);
        if (Ub.customShader = Ob, Ub._rootUrl = Mb, bb.id && (Ub.id = bb.id), bb.subEmitters) {
          Ub.subEmitters = [];
          for (const eb of bb.subEmitters) {
            const bb = [];
            for (const Hb of eb) bb.push(Jw.Parse(Hb, wb, Mb));
            Ub.subEmitters.push(bb)
          }
        }
        if (bb.attractors)
          for (const Ib of bb.attractors) {
            const bb = new iw;
            bb.position = pb.o.FromArray(Ib.position), bb.strength = Ib.strength, Ub.addAttractor(bb)
          }
        return dw._Parse(bb, Ub, wb, Mb), bb.textureMask && (Ub.textureMask = Ib.f.FromArray(bb.textureMask)), bb.worldOffset && (Ub.worldOffset = pb.o.FromArray(bb.worldOffset)), bb.preventAutoStart && (Ub.preventAutoStart = bb.preventAutoStart), bb.metadata && (Ub.metadata = bb.metadata), eb || Ub.preventAutoStart || Ub.start(), Ub
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = {};
        if (dw._Serialize(wb, this, bb), wb.textureMask = this.textureMask.ppb(), wb.customShader = this.customShader, wb.preventAutoStart = this.preventAutoStart, wb.worldOffset = this.worldOffset.ppb(), this.metadata && (wb.metadata = this.metadata), this.subEmitters) {
          wb.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const Mb of this._subEmitters) {
            const eb = [];
            for (const wb of Mb) wb.particleSystem.doNotSerialize || eb.push(wb.serialize(bb));
            wb.subEmitters.push(eb)
          }
        }
        if (this._attractors && this._attractors.length) {
          wb.attractors = [];
          for (const bb of this._attractors) wb.attractors.push(bb.serialize())
        }
        return wb
      }
      static _Serialize(bb, wb, Mb) {
        if (bb.name = wb.name, bb.id = wb.id, bb.qO = wb.getCapacity(), bb.disposeOnStop = wb.disposeOnStop, bb.manualEmitCount = wb.manualEmitCount, wb.emitter.position) {
          const Mb = wb.emitter;
          bb.emitterId = Mb.id
        } else {
          const Mb = wb.emitter;
          bb.emitter = Mb.ppb()
        }
        if (wb.particleEmitterType && (bb.particleEmitterType = wb.particleEmitterType.serialize()), wb.particleTexture)
          if (Mb) bb.texture = wb.particleTexture.serialize();
          else {
            const Mb = wb.particleTexture;
            bb.textureName = wb.particleTexture.name, bb.invertY = !!Mb._invertY;
            const eb = {};
            for (const bb of uw) eb[bb] = Mb[bb];
            eb.samplingMode = Mb.samplingMode, bb.textureSettings = eb
          } bb.isLocal = wb.isLocal, Nw.d.AppendSerializedAnimations(wb, bb), bb.beginAnimationOnStart = wb.beginAnimationOnStart, bb.beginAnimationFrom = wb.beginAnimationFrom, bb.beginAnimationTo = wb.beginAnimationTo, bb.beginAnimationLoop = wb.beginAnimationLoop, bb.startDelay = wb.startDelay, bb.renderingGroupId = wb.renderingGroupId, bb.isBillboardBased = wb.isBillboardBased, bb.billboardMode = wb.billboardMode, bb.minAngularSpeed = wb.minAngularSpeed, bb.maxAngularSpeed = wb.maxAngularSpeed, bb.minSize = wb.minSize, bb.maxSize = wb.maxSize, bb.minScaleX = wb.minScaleX, bb.maxScaleX = wb.maxScaleX, bb.minScaleY = wb.minScaleY, bb.maxScaleY = wb.maxScaleY, bb.minEmitPower = wb.minEmitPower, bb.maxEmitPower = wb.maxEmitPower, bb.minLifeTime = wb.minLifeTime, bb.maxLifeTime = wb.maxLifeTime, bb.emitRate = wb.emitRate, bb.gravity = wb.gravity.ppb(), bb.noiseStrength = wb.noiseStrength.ppb(), bb.color1 = wb.color1.ppb(), bb.color2 = wb.color2.ppb(), bb.colorDead = wb.colorDead.ppb(), bb.updateSpeed = wb.updateSpeed, bb.targetStopDuration = wb.targetStopDuration, bb.blendMode = wb.blendMode, bb.preWarmCycles = wb.preWarmCycles, bb.preWarmStepOffset = wb.preWarmStepOffset, bb.minInitialRotation = wb.minInitialRotation, bb.maxInitialRotation = wb.maxInitialRotation, bb.startSpriteCellID = wb.startSpriteCellID, bb.spriteCellLoop = wb.spriteCellLoop, bb.endSpriteCellID = wb.endSpriteCellID, bb.spriteCellChangeSpeed = wb.spriteCellChangeSpeed, bb.spriteCellWidth = wb.spriteCellWidth, bb.spriteCellHeight = wb.spriteCellHeight, bb.spriteRandomStartCell = wb.spriteRandomStartCell, bb.isAnimationSheetEnabled = wb.isAnimationSheetEnabled, bb.useLogarithmicDepth = wb.useLogarithmicDepth;
        const eb = wb.getColorGradients();
        if (eb) {
          bb.colorGradients = [];
          for (const wb of eb) {
            const Mb = {
              gradient: wb.gradient,
              color1: wb.color1.ppb()
            };
            wb.color2 ? Mb.color2 = wb.color2.ppb() : Mb.color2 = wb.color1.ppb(), bb.colorGradients.push(Mb)
          }
        }
        const Hb = wb.getRampGradients();
        if (Hb) {
          bb.rampGradients = [];
          for (const wb of Hb) {
            const Mb = {
              gradient: wb.gradient,
              color: wb.color.ppb()
            };
            bb.rampGradients.push(Mb)
          }
          bb.useRampGradients = wb.useRampGradients
        }
        const pb = wb.getColorRemapGradients();
        if (pb) {
          bb.colorRemapGradients = [];
          for (const wb of pb) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.colorRemapGradients.push(Mb)
          }
        }
        const Vb = wb.getAlphaRemapGradients();
        if (Vb) {
          bb.alphaRemapGradients = [];
          for (const wb of Vb) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.alphaRemapGradients.push(Mb)
          }
        }
        const gb = wb.getSizeGradients();
        if (gb) {
          bb.sizeGradients = [];
          for (const wb of gb) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.sizeGradients.push(Mb)
          }
        }
        const lb = wb.getAngularSpeedGradients();
        if (lb) {
          bb.angularSpeedGradients = [];
          for (const wb of lb) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.angularSpeedGradients.push(Mb)
          }
        }
        const Lb = wb.getVelocityGradients();
        if (Lb) {
          bb.velocityGradients = [];
          for (const wb of Lb) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.velocityGradients.push(Mb)
          }
        }
        const Ib = wb.getDragGradients();
        if (Ib) {
          bb.dragGradients = [];
          for (const wb of Ib) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.dragGradients.push(Mb)
          }
        }
        const Ob = wb.getEmitRateGradients();
        if (Ob) {
          bb.emitRateGradients = [];
          for (const wb of Ob) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.emitRateGradients.push(Mb)
          }
        }
        const Ub = wb.getStartSizeGradients();
        if (Ub) {
          bb.startSizeGradients = [];
          for (const wb of Ub) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.startSizeGradients.push(Mb)
          }
        }
        const tb = wb.getLifeTimeGradients();
        if (tb) {
          bb.lifeTimeGradients = [];
          for (const wb of tb) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.lifeTimeGradients.push(Mb)
          }
        }
        const Cb = wb.getLimitVelocityGradients();
        if (Cb) {
          bb.limitVelocityGradients = [];
          for (const wb of Cb) {
            const Mb = {
              gradient: wb.gradient,
              factor1: wb.factor1
            };
            void 0 !== wb.factor2 ? Mb.factor2 = wb.factor2 : Mb.factor2 = wb.factor1, bb.limitVelocityGradients.push(Mb)
          }
          bb.limitVelocityDamping = wb.limitVelocityDamping
        }
        wb.noiseTexture && (bb.noiseTexture = wb.noiseTexture.serialize())
      }
      clone(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = {
          ...this._customWrappers
        };
        let Hb = null;
        const pb = this._engine;
        if ((0, Jb.e)(pb.createEffectForParticles) && null != this.customShader) {
          Hb = this.customShader;
          const bb = Hb.shaderOptions.defines.length > 0 ? Hb.shaderOptions.defines.join("\n") : "",
            wb = pb.createEffectForParticles(Hb.shaderPath.fragmentElement, Hb.shaderOptions.uniforms, Hb.shaderOptions.samplers, bb);
          eb[0] ? eb[0].effect = wb : this.setCustomEffect(wb, 0)
        }
        const Vb = this.serialize(Mb),
          gb = !1 === Mb && this.particleTexture ? this.particleTexture.clone() : null;
        gb && (Vb.textureName = void 0);
        const lb = dw.Parse(Vb, this._scene || this._engine, this._rootUrl);
        return lb.name = bb, lb.customShader = Hb, lb._customWrappers = eb, gb && (lb.particleTexture = gb), void 0 === wb && (wb = this.emitter), this.noiseTexture && (lb.noiseTexture = this.noiseTexture.clone()), lb.emitter = wb, this.preventAutoStart || lb.start(), lb
      }
    }
    dw.BILLBOARDMODE_Y = 2, dw.BILLBOARDMODE_ALL = 7, dw.BILLBOARDMODE_STRETCHED = 8, dw.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Pw = !1;
    Pw || (Pw = !0, Jw._ParseParticleSystem = dw.Parse)
  },
  53850: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      SkyMaterial: () => mb,
      _MaxColorValueForRenderTarget: () => sb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(41697),
      Vb = Mb(38281),
      gb = Mb(41954),
      lb = Mb(42017),
      Lb = Mb(53781),
      Ib = Mb(42831),
      Ob = Mb(41759),
      Ub = Mb(38333),
      tb = Mb(42052),
      Cb = Mb(42026),
      Eb = Mb(42004),
      Fb = Mb(41999);
    class Bb extends gb.b {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function sb(bb) {
      switch (bb) {
        case Lb.b.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Lb.b.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let mb = (() => {
      var bb;
      let wb, gb, Lb, Ub, mb, hb, zb, Xb, xb, jb, Kb, rb, Rb, Db, cb, Yb = lb.d,
        Zb = [],
        fb = [],
        Ab = [],
        Wb = [],
        Jb = [],
        Sb = [],
        Nb = [],
        vb = [],
        Qb = [],
        Gb = [],
        qb = [],
        ab = [],
        ib = [],
        ub = [],
        db = [],
        Pb = [],
        nb = [],
        yb = [],
        ob = [],
        Tb = [],
        kb = [],
        bw = [],
        ww = [],
        Mw = [],
        ew = [],
        Hw = [],
        pw = [],
        Vw = [],
        gw = [],
        lw = [];
      return bb = class extends Yb {
        constructor(bb, wb) {
          super(bb, wb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, eb.m)(this, Zb, 1), this.turbidity = ((0, eb.m)(this, fb), (0, eb.m)(this, Ab, 10)), this.rayleigh = ((0, eb.m)(this, Wb), (0, eb.m)(this, Jb, 2)), this.mieCoefficient = ((0, eb.m)(this, Sb), (0, eb.m)(this, Nb, .005)), this.mieDirectionalG = ((0, eb.m)(this, vb), (0, eb.m)(this, Qb, .8)), this.distance = ((0, eb.m)(this, Gb), (0, eb.m)(this, qb, 500)), this.inclination = ((0, eb.m)(this, ab), (0, eb.m)(this, ib, .49)), this.azimuth = ((0, eb.m)(this, ub), (0, eb.m)(this, db, .25)), this.sunPosition = ((0, eb.m)(this, Pb), (0, eb.m)(this, nb, new Vb.YC(0, 100, 0))), this.useSunPosition = ((0, eb.m)(this, yb), (0, eb.m)(this, ob, !1)), this.cameraOffset = ((0, eb.m)(this, Tb), (0, eb.m)(this, kb, Vb.YC.Zero())), this.up = ((0, eb.m)(this, bw), (0, eb.m)(this, ww, Vb.YC.Up())), this.dithering = ((0, eb.m)(this, Mw), (0, eb.m)(this, ew, !1)), this.rawHdrOutput = ((0, eb.m)(this, Hw), (0, eb.m)(this, pw, !1)), this.cloudiness = ((0, eb.m)(this, Vw), (0, eb.m)(this, gw, 0)), this._cameraPosition = ((0, eb.m)(this, lw), Vb.YC.Zero()), this._skyOrientation = new Vb.Quaternion
        }
        needAlphaBlending() {
          return this.alpha < 1
        }
        needAlphaTesting() {
          return !1
        }
        getAlphaTestTexture() {
          return null
        }
        isReadyForSubMesh(wb, Mb) {
          const eb = Mb._drawWrapper;
          if (this.isFrozen && eb.effect && eb._wasPreviouslyReady) return !0;
          Mb.materialDefines || (Mb.materialDefines = new Bb);
          const Hb = Mb.materialDefines,
            pb = this.RJ();
          if (this._isReadyForSubMesh(Mb)) return !0;
          if ((0, Fb.bb)(wb, pb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Hb, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, Fb.Q)(wb, Hb, !0, !1), Hb.IMAGEPROCESSINGPOSTPROCESS !== pb.imageProcessingConfiguration.applyByPostProcess && Hb.markAsMiscDirty(), Hb.DITHER !== this.dithering && Hb.markAsMiscDirty(), Hb.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Hb.markAsMiscDirty(), Hb.isDirty) {
            Hb.markAsProcessed(), pb.resetCachedMaterial();
            const wb = new Cb.d;
            Hb.FOG && wb.addFallback(1, "FOG"), Hb.IMAGEPROCESSINGPOSTPROCESS = pb.imageProcessingConfiguration.applyByPostProcess, Hb.DITHER = this.dithering, Hb.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const eb = [Ib.f.PositionKind];
            Hb.VERTEXCOLOR && eb.push(Ib.f.ColorKind);
            const Vb = "sky",
              gb = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Eb.d)(gb);
            const lb = Hb.toString();
            Mb.setEffect(pb.DC().createEffect(Vb, {
              attributes: eb,
              uniformsNames: gb,
              uniformBuffersNames: [],
              samplers: [],
              defines: lb,
              fallbacks: wb,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, pb.DC()), Hb, this._materialContext)
          }
          return !(!Mb.effect || !Mb.effect.isReady()) && (Hb._renderId = pb.getRenderId(), eb._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(bb, wb, Mb) {
          const eb = this.RJ(),
            Hb = Mb.materialDefines;
          if (!Hb) return;
          const pb = Mb.effect;
          if (!pb) return;
          this._activeEffect = pb, this.bindOnlyWorldMatrix(bb), this._activeEffect.setMatrix("viewProjection", eb.getTransformMatrix()), this._mustRebind(eb, pb, Mb) && ((0, Eb.f)(pb, this, eb), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, Fb.v)(Hb, pb, eb)), eb.fogEnabled && wb.applyFog && eb.fogMode !== Ob.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", eb.getViewMatrix()), (0, Fb.j)(eb, wb, this._activeEffect, this.rawHdrOutput);
          const gb = eb.activeCamera;
          if (gb) {
            const bb = gb.getWorldMatrix();
            this._cameraPosition.x = bb.m[12], this._cameraPosition.y = bb.m[13], this._cameraPosition.z = bb.m[14], this._activeEffect.setVector3("cameraPosition", Vb.TmpVectors.YC[0].eZ(this._cameraPosition).zpb(eb.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const bb = eb.DC()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", sb(bb?.texture?.type))
          }
          if (!this.useSunPosition) {
            const bb = Math.PI * (this.inclination - .5),
              wb = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(wb) * Math.cos(bb), this.sunPosition.y = this.distance * Math.sin(-bb), this.sunPosition.z = this.distance * Math.sin(wb) * Math.cos(bb), Vb.Quaternion.FromUnitVectorsToRef(Vb.YC.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(wb, this._activeEffect, Mb)
        }
        getAnimatables() {
          return []
        }
        dispose(bb) {
          super.dispose(bb)
        }
        clone(wb) {
          return pb.d.Clone((() => new bb(wb, this.RJ())), this)
        }
        serialize() {
          const bb = super.serialize();
          return bb.customType = "BABYLON.SkyMaterial", bb
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(wb, Mb, eb) {
          return pb.d.Parse((() => new bb(wb.name, Mb)), wb, Mb, eb)
        }
      }, (() => {
        const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yb[Symbol.metadata] ?? null) : void 0;
        wb = [(0, Hb.E)()], gb = [(0, Hb.E)()], Lb = [(0, Hb.E)()], Ub = [(0, Hb.E)()], mb = [(0, Hb.E)()], hb = [(0, Hb.E)()], zb = [(0, Hb.E)()], Xb = [(0, Hb.E)()], xb = [(0, Hb.B)()], jb = [(0, Hb.E)()], Kb = [(0, Hb.B)()], rb = [(0, Hb.B)()], Rb = [(0, Hb.E)()], Db = [(0, Hb.E)()], cb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: bb => "luminance" in bb,
            get: bb => bb.luminance,
            set: (bb, wb) => {
              bb.luminance = wb
            }
          },
          metadata: Mb
        }, Zb, fb), (0, eb.i)(null, null, gb, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: bb => "turbidity" in bb,
            get: bb => bb.turbidity,
            set: (bb, wb) => {
              bb.turbidity = wb
            }
          },
          metadata: Mb
        }, Ab, Wb), (0, eb.i)(null, null, Lb, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: bb => "rayleigh" in bb,
            get: bb => bb.rayleigh,
            set: (bb, wb) => {
              bb.rayleigh = wb
            }
          },
          metadata: Mb
        }, Jb, Sb), (0, eb.i)(null, null, Ub, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: bb => "mieCoefficient" in bb,
            get: bb => bb.mieCoefficient,
            set: (bb, wb) => {
              bb.mieCoefficient = wb
            }
          },
          metadata: Mb
        }, Nb, vb), (0, eb.i)(null, null, mb, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: bb => "mieDirectionalG" in bb,
            get: bb => bb.mieDirectionalG,
            set: (bb, wb) => {
              bb.mieDirectionalG = wb
            }
          },
          metadata: Mb
        }, Qb, Gb), (0, eb.i)(null, null, hb, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: bb => "distance" in bb,
            get: bb => bb.distance,
            set: (bb, wb) => {
              bb.distance = wb
            }
          },
          metadata: Mb
        }, qb, ab), (0, eb.i)(null, null, zb, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: bb => "inclination" in bb,
            get: bb => bb.inclination,
            set: (bb, wb) => {
              bb.inclination = wb
            }
          },
          metadata: Mb
        }, ib, ub), (0, eb.i)(null, null, Xb, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: bb => "azimuth" in bb,
            get: bb => bb.azimuth,
            set: (bb, wb) => {
              bb.azimuth = wb
            }
          },
          metadata: Mb
        }, db, Pb), (0, eb.i)(null, null, xb, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: bb => "sunPosition" in bb,
            get: bb => bb.sunPosition,
            set: (bb, wb) => {
              bb.sunPosition = wb
            }
          },
          metadata: Mb
        }, nb, yb), (0, eb.i)(null, null, jb, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSunPosition" in bb,
            get: bb => bb.useSunPosition,
            set: (bb, wb) => {
              bb.useSunPosition = wb
            }
          },
          metadata: Mb
        }, ob, Tb), (0, eb.i)(null, null, Kb, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "cameraOffset" in bb,
            get: bb => bb.cameraOffset,
            set: (bb, wb) => {
              bb.cameraOffset = wb
            }
          },
          metadata: Mb
        }, kb, bw), (0, eb.i)(null, null, rb, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: bb => "up" in bb,
            get: bb => bb.up,
            set: (bb, wb) => {
              bb.up = wb
            }
          },
          metadata: Mb
        }, ww, Mw), (0, eb.i)(null, null, Rb, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: bb => "dithering" in bb,
            get: bb => bb.dithering,
            set: (bb, wb) => {
              bb.dithering = wb
            }
          },
          metadata: Mb
        }, ew, Hw), (0, eb.i)(null, null, Db, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: bb => "rawHdrOutput" in bb,
            get: bb => bb.rawHdrOutput,
            set: (bb, wb) => {
              bb.rawHdrOutput = wb
            }
          },
          metadata: Mb
        }, pw, Vw), (0, eb.i)(null, null, cb, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: bb => "cloudiness" in bb,
            get: bb => bb.cloudiness,
            set: (bb, wb) => {
              bb.cloudiness = wb
            }
          },
          metadata: Mb
        }, gw, lw), Mb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Mb
        })
      })(), bb._ShaderLoader = new tb.e((() => [Mb.e(649).then((() => Mb(64469))), Mb.e(642).then((() => Mb(64472)))]), (() => [Mb.e(666).then((() => Mb(64476))), Mb.e(660).then((() => Mb(64483)))])), bb
    })();
    (0, Ub.e)("BABYLON.SkyMaterial", mb)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);