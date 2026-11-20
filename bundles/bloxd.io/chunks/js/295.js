export const id = 295;
export const ids = [295];
export const modules = {
  41076: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(39573),
      Ob = hb(41083);
    class Gb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = hb, this.xBb = [], this._maxBlockCapacity = ub || 64, this._selectionContent = new Bb.e(1024), this._creationFunc = bb
      }
      update(bb, ub, hb) {
        Ob.e._CreateBlocks(bb, ub, hb, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      pBb(bb) {
        for (let ub = 0; ub < this.blocks.length; ub++) {
          this.blocks[ub].addEntry(bb)
        }
      }
      vN(bb) {
        for (let ub = 0; ub < this.blocks.length; ub++) {
          this.blocks[ub].removeEntry(bb)
        }
      }
      select(bb, ub) {
        this._selectionContent.reset();
        for (let hb = 0; hb < this.blocks.length; hb++) {
          this.blocks[hb].select(bb, this._selectionContent, ub)
        }
        return ub ? this._selectionContent.concat(this.xBb) : this._selectionContent.concatWithNoDuplicate(this.xBb), this._selectionContent
      }
      intersects(bb, ub, hb) {
        this._selectionContent.reset();
        for (let Bb = 0; Bb < this.blocks.length; Bb++) {
          this.blocks[Bb].intersects(bb, ub, this._selectionContent, hb)
        }
        return hb ? this._selectionContent.concat(this.xBb) : this._selectionContent.concatWithNoDuplicate(this.xBb), this._selectionContent
      }
      intersectsRay(bb) {
        this._selectionContent.reset();
        for (let ub = 0; ub < this.blocks.length; ub++) {
          this.blocks[ub].intersectsRay(bb, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.xBb), this._selectionContent
      }
    }
    Gb.CreationFuncForMeshes = (bb, ub) => {
      const hb = bb.XM();
      !bb.isBlocked && hb.boundingBox.intersectsMinMax(ub.WBb, ub.KBb) && ub.entries.push(bb)
    }, Gb.CreationFuncForSubMeshes = (bb, ub) => {
      bb.XM().boundingBox.intersectsMinMax(ub.WBb, ub.KBb) && ub.entries.push(bb)
    }
  },
  41083: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb
    });
    var Bb = hb(36727),
      Ob = hb(39758);
    class Gb {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        this.entries = [], this.zBb = new Array, this._capacity = hb, this._depth = Bb, this._maxDepth = Ob, this._creationFunc = Gb, this._minPoint = bb, this._maxPoint = ub, this.zBb.push(bb.clone()), this.zBb.push(ub.clone()), this.zBb.push(bb.clone()), this.zBb[2].x = ub.x, this.zBb.push(bb.clone()), this.zBb[3].y = ub.y, this.zBb.push(bb.clone()), this.zBb[4].z = ub.z, this.zBb.push(ub.clone()), this.zBb[5].z = bb.z, this.zBb.push(ub.clone()), this.zBb[6].x = bb.x, this.zBb.push(ub.clone()), this.zBb[7].y = bb.y
      }
      get LH() {
        return this._capacity
      }
      get WBb() {
        return this._minPoint
      }
      get KBb() {
        return this._maxPoint
      }
      addEntry(bb) {
        if (this.blocks)
          for (let ub = 0; ub < this.blocks.length; ub++) {
            this.blocks[ub].addEntry(bb)
          } else this._creationFunc(bb, this), this.entries.length > this.LH && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(bb) {
        if (this.blocks) {
          for (let ub = 0; ub < this.blocks.length; ub++) {
            this.blocks[ub].removeEntry(bb)
          }
          return
        }
        const ub = this.entries.indexOf(bb);
        ub > -1 && this.entries.splice(ub, 1)
      }
      addEntries(bb) {
        for (let ub = 0; ub < bb.length; ub++) {
          const hb = bb[ub];
          this.addEntry(hb)
        }
      }
      select(bb, ub, hb) {
        if (Ob.e.IsInFrustum(this.zBb, bb)) {
          if (this.blocks) {
            for (let Bb = 0; Bb < this.blocks.length; Bb++) {
              this.blocks[Bb].select(bb, ub, hb)
            }
            return
          }
          hb ? ub.concat(this.entries) : ub.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(bb, ub, hb, Bb) {
        if (Ob.e.IntersectsSphere(this._minPoint, this._maxPoint, bb, ub)) {
          if (this.blocks) {
            for (let Ob = 0; Ob < this.blocks.length; Ob++) {
              this.blocks[Ob].intersects(bb, ub, hb, Bb)
            }
            return
          }
          Bb ? hb.concat(this.entries) : hb.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(bb, ub) {
        if (bb.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let hb = 0; hb < this.blocks.length; hb++) {
              this.blocks[hb].intersectsRay(bb, ub)
            }
            return
          }
          ub.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Gb._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(bb, ub, hb, Ob, Ub, Lb, Yb, Sb) {
        Yb.blocks = new Array;
        const ab = new Bb.q((ub.x - bb.x) / 2, (ub.y - bb.y) / 2, (ub.z - bb.z) / 2);
        for (let Bb = 0; Bb < 2; Bb++)
          for (let ub = 0; ub < 2; ub++)
            for (let Hb = 0; Hb < 2; Hb++) {
              const wb = bb.add(ab.multiplyByFloats(Bb, ub, Hb)),
                Zb = bb.add(ab.multiplyByFloats(Bb + 1, ub + 1, Hb + 1)),
                Xb = new Gb(wb, Zb, Ob, Ub + 1, Lb, Sb);
              Xb.addEntries(hb), Yb.blocks.push(Xb)
            }
      }
    }
  },
  41088: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab
    });
    var Bb = hb(39551),
      Ob = hb(36727),
      Gb = hb(39886),
      Ub = hb(41012),
      Lb = hb(39632),
      Yb = hb(36748),
      Sb = hb(41076);
    class ab {
      constructor(bb) {
        this.name = Lb.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Ub.v(Ob.q.Zero(), new Ob.q(1, 1, 1)), (bb = bb || Yb.b.LastCreatedScene) && (this.Xp = bb, this.Xp.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.Xp.getActiveSubMeshCandidates = bb => this.getActiveSubMeshCandidates(bb), this.Xp.getCollidingSubMeshCandidates = (bb, ub) => this.getCollidingSubMeshCandidates(bb, ub), this.Xp.getIntersectingSubMeshCandidates = (bb, ub) => this.getIntersectingSubMeshCandidates(bb, ub))
      }
      register() {
        this.Xp.onMeshRemovedObservable.add((bb => {
          const ub = this.Xp.selectionOctree;
          if (void 0 !== ub && null !== ub) {
            const hb = ub.xBb.indexOf(bb); - 1 !== hb && ub.xBb.splice(hb, 1)
          }
        })), this.Xp.onMeshImportedObservable.add((bb => {
          const ub = this.Xp.selectionOctree;
          void 0 !== ub && null !== ub && ub.pBb(bb)
        }))
      }
      getActiveMeshCandidates() {
        return this.Xp.eBb?.select(this.Xp.frustumPlanes) || this.Xp._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(bb) {
        if (bb._submeshesOctree && bb.useOctreeForRenderingSelection) {
          return bb._submeshesOctree.select(this.Xp.frustumPlanes)
        }
        return this.Xp._getDefaultSubMeshCandidates(bb)
      }
      getIntersectingSubMeshCandidates(bb, ub) {
        if (bb._submeshesOctree && bb.useOctreeForPicking) {
          Ub.v.TransformToRef(ub, bb.getWorldMatrix(), this._tempRay);
          return bb._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.Xp._getDefaultSubMeshCandidates(bb)
      }
      getCollidingSubMeshCandidates(bb, ub) {
        if (bb._submeshesOctree && bb.useOctreeForCollisions) {
          const hb = ub._velocityWorldLength + Math.max(ub._radius.x, ub._radius.y, ub._radius.z);
          return bb._submeshesOctree.intersects(ub._basePointWorld, hb)
        }
        return this.Xp._getDefaultSubMeshCandidates(bb)
      }
      rebuild() {}
      dispose() {}
    }
    let Hb = !1;
    Hb || (Hb = !0, Bb.f.prototype.createOrUpdateSelectionOctree = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        hb = this._getComponent(Lb.d.NAME_OCTREE);
      hb || (hb = new ab(this), this.bBb(hb)), this.eBb || (this.eBb = new Sb.c(Sb.c.CreationFuncForMeshes, bb, ub));
      const Bb = this.getWorldExtends();
      return this.eBb.update(Bb.min, Bb.max, this.meshes), this.eBb
    }, Object.defineProperty(Bb.f.prototype, "selectionOctree", {
      get: function() {
        return this.eBb
      },
      enumerable: !0,
      configurable: !0
    }), Gb.c.prototype.createOrUpdateSubmeshesOctree = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const hb = this.ZN();
      let Bb = hb._getComponent(Lb.d.NAME_OCTREE);
      Bb || (Bb = new ab(hb), hb.bBb(Bb)), this._submeshesOctree || (this._submeshesOctree = new Sb.c(Sb.c.CreationFuncForSubMeshes, bb, ub)), this.computeWorldMatrix(!0);
      const Ob = this.XM().boundingBox;
      return this._submeshesOctree.update(Ob.minimumWorld, Ob.maximumWorld, this.FW), this._submeshesOctree
    })
  },
  41012: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => gb,
      d: () => pb,
      g: () => Xb,
      h: () => Zb,
      l: () => xb,
      o: () => Db,
      p: () => rb,
      q: () => nb,
      t: () => jb,
      v: () => Hb
    });
    var Bb = hb(36734),
      Ob = hb(36727),
      Gb = hb(36736),
      Ub = hb(39744),
      Lb = hb(39603),
      Yb = hb(36748),
      Sb = hb(39654);
    const ab = {
      internalPickerForMesh: void 0
    };
    class Hb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bb.b;
        this.origin = bb, this.direction = ub, this.length = hb, this.epsilon = Ob
      }
      clone() {
        return new Hb(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Bb = Hb._TmpVector3[0].M_(bb.x - hb, bb.y - hb, bb.z - hb),
          Ob = Hb._TmpVector3[1].M_(ub.x + hb, ub.y + hb, ub.z + hb);
        let Gb, Ub, Lb, Yb, Sb = 0,
          ab = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < Bb.x || this.origin.x > Ob.x) return !1
        } else if (Gb = 1 / this.direction.x, Ub = (Bb.x - this.origin.x) * Gb, Lb = (Ob.x - this.origin.x) * Gb, Lb === -1 / 0 && (Lb = 1 / 0), Ub > Lb && (Yb = Ub, Ub = Lb, Lb = Yb), Sb = Math.max(Ub, Sb), ab = Math.min(Lb, ab), Sb > ab) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < Bb.y || this.origin.y > Ob.y) return !1
        } else if (Gb = 1 / this.direction.y, Ub = (Bb.y - this.origin.y) * Gb, Lb = (Ob.y - this.origin.y) * Gb, Lb === -1 / 0 && (Lb = 1 / 0), Ub > Lb && (Yb = Ub, Ub = Lb, Lb = Yb), Sb = Math.max(Ub, Sb), ab = Math.min(Lb, ab), Sb > ab) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < Bb.z || this.origin.z > Ob.z) return !1
        } else if (Gb = 1 / this.direction.z, Ub = (Bb.z - this.origin.z) * Gb, Lb = (Ob.z - this.origin.z) * Gb, Lb === -1 / 0 && (Lb = 1 / 0), Ub > Lb && (Yb = Ub, Ub = Lb, Lb = Yb), Sb = Math.max(Ub, Sb), ab = Math.min(Lb, ab), Sb > ab) return !1;
        return !0
      }
      intersectsBox(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(bb.minimum, bb.maximum, ub)
      }
      intersectsSphere(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = bb.center.x - this.origin.x,
          Bb = bb.center.y - this.origin.y,
          Ob = bb.center.z - this.origin.z,
          Gb = hb * hb + Bb * Bb + Ob * Ob,
          Ub = bb.radius + ub,
          Lb = Ub * Ub;
        if (Gb <= Lb) return !0;
        const Yb = hb * this.direction.x + Bb * this.direction.y + Ob * this.direction.z;
        if (Yb < 0) return !1;
        return Gb - Yb * Yb <= Lb
      }
      intersectsTriangle(bb, ub, hb) {
        const Bb = Hb._TmpVector3[0],
          Gb = Hb._TmpVector3[1],
          Lb = Hb._TmpVector3[2],
          Yb = Hb._TmpVector3[3],
          Sb = Hb._TmpVector3[4];
        ub.subtractToRef(bb, Bb), hb.subtractToRef(bb, Gb), Ob.q.CrossToRef(this.direction, Gb, Lb);
        const ab = Ob.q.Dot(Bb, Lb);
        if (0 === ab) return null;
        const wb = 1 / ab;
        this.origin.subtractToRef(bb, Yb);
        const Zb = Ob.q.Dot(Yb, Lb) * wb;
        if (Zb < -this.epsilon || Zb > 1 + this.epsilon) return null;
        Ob.q.CrossToRef(Yb, Bb, Sb);
        const Xb = Ob.q.Dot(this.direction, Sb) * wb;
        if (Xb < -this.epsilon || Zb + Xb > 1 + this.epsilon) return null;
        const pb = Ob.q.Dot(Gb, Sb) * wb;
        return pb > this.length || pb < 0 ? null : new Ub.d(1 - Zb - Xb, Zb, pb)
      }
      intersectsPlane(bb) {
        let ub;
        const hb = Ob.q.Dot(bb.normal, this.direction);
        if (Math.abs(hb) < 9.99999997475243e-7) return null;
        {
          const Bb = Ob.q.Dot(bb.normal, this.origin);
          return ub = (-bb.d - Bb) / hb, ub < 0 ? ub < -9.99999997475243e-7 ? null : 0 : ub
        }
      }
      intersectsAxis(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (bb) {
          case "y": {
            const bb = (this.origin.y - ub) / this.direction.y;
            return bb > 0 ? null : new Ob.q(this.origin.x + this.direction.x * -bb, ub, this.origin.z + this.direction.z * -bb)
          }
          case "x": {
            const bb = (this.origin.x - ub) / this.direction.x;
            return bb > 0 ? null : new Ob.q(ub, this.origin.y + this.direction.y * -bb, this.origin.z + this.direction.z * -bb)
          }
          case "z": {
            const bb = (this.origin.z - ub) / this.direction.z;
            return bb > 0 ? null : new Ob.q(this.origin.x + this.direction.x * -bb, this.origin.y + this.direction.y * -bb, ub)
          }
          default:
            return null
        }
      }
      bOb(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Gb = arguments.length > 4 ? arguments[4] : void 0,
          Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Lb = Ob.i.Matrix[0];
        return bb.getWorldMatrix().invertToRef(Lb), this._tmpRay ? Hb.TransformToRef(this, Lb, this._tmpRay) : this._tmpRay = Hb.Transform(this, Lb), bb.intersects(this._tmpRay, ub, hb, Bb, Gb, Ub)
      }
      intersectsMeshes(bb, ub, hb) {
        hb ? hb.length = 0 : hb = [];
        for (let Bb = 0; Bb < bb.length; Bb++) {
          const Ob = this.bOb(bb[Bb], ub);
          Ob.hit && hb.push(Ob)
        }
        return hb.sort(this._comparePickingInfo), hb
      }
      _comparePickingInfo(bb, ub) {
        return bb.distance < ub.distance ? -1 : bb.distance > ub.distance ? 1 : 0
      }
      intersectionSegment(bb, ub, hb) {
        const Bb = this.origin,
          Gb = Ob.i.YX[0],
          Ub = Ob.i.YX[1],
          Lb = Ob.i.YX[2],
          Yb = Ob.i.YX[3];
        ub.subtractToRef(bb, Gb), this.direction.scaleToRef(Hb._Rayl, Lb), Bb.addToRef(Lb, Ub), bb.subtractToRef(Bb, Yb);
        const Sb = Ob.q.Dot(Gb, Gb),
          ab = Ob.q.Dot(Gb, Lb),
          wb = Ob.q.Dot(Lb, Lb),
          Zb = Ob.q.Dot(Gb, Yb),
          Xb = Ob.q.Dot(Lb, Yb),
          pb = Sb * wb - ab * ab;
        let ob, Ab, lb = pb,
          Kb = pb;
        pb < Hb._Smallnum ? (ob = 0, lb = 1, Ab = Xb, Kb = wb) : (ob = ab * Xb - wb * Zb, Ab = Sb * Xb - ab * Zb, ob < 0 ? (ob = 0, Ab = Xb, Kb = wb) : ob > lb && (ob = lb, Ab = Xb + ab, Kb = wb)), Ab < 0 ? (Ab = 0, -Zb < 0 ? ob = 0 : -Zb > Sb ? ob = lb : (ob = -Zb, lb = Sb)) : Ab > Kb && (Ab = Kb, -Zb + ab < 0 ? ob = 0 : -Zb + ab > Sb ? ob = lb : (ob = -Zb + ab, lb = Sb));
        const Wb = Math.abs(ob) < Hb._Smallnum ? 0 : ob / lb,
          Cb = Math.abs(Ab) < Hb._Smallnum ? 0 : Ab / Kb,
          db = Ob.i.YX[4];
        Lb.scaleToRef(Cb, db);
        const rb = Ob.i.YX[5];
        Gb.scaleToRef(Wb, rb), rb.addInPlace(Yb);
        const jb = Ob.i.YX[6];
        rb.subtractToRef(db, jb);
        return Cb > 0 && Cb <= this.length && jb.lengthSquared() < hb * hb ? rb.length() : -1
      }
      update(bb, ub, hb, Bb, Gb, Ub, Lb) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Hb._RayDistant || (Hb._RayDistant = Hb.Zero()), Hb._RayDistant.unprojectRayToRef(bb, ub, hb, Bb, Ob.d.IdentityReadOnly, Ub, Lb);
          const Yb = Ob.i.Matrix[0];
          Gb.invertToRef(Yb), Hb.TransformToRef(Hb._RayDistant, Yb, this)
        } else this.unprojectRayToRef(bb, ub, hb, Bb, Gb, Ub, Lb);
        return this
      }
      static Zero() {
        return new Hb(Ob.q.Zero(), Ob.q.Zero())
      }
      static CreateNew(bb, ub, hb, Bb, Ob, Gb, Ub) {
        return Hb.Zero().update(bb, ub, hb, Bb, Ob, Gb, Ub)
      }
      static CreateNewFromTo(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob.d.IdentityReadOnly;
        const Bb = new Hb(new Ob.q(0, 0, 0), new Ob.q(0, 0, 0));
        return Hb.CreateFromToToRef(bb, ub, Bb, hb)
      }
      static CreateFromToToRef(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ob.d.IdentityReadOnly;
        hb.origin.mD(bb);
        const Gb = ub.subtractToRef(bb, hb.direction),
          Ub = Math.sqrt(Gb.x * Gb.x + Gb.y * Gb.y + Gb.z * Gb.z);
        return hb.length = Ub, hb.direction.normalize(), Hb.TransformToRef(hb, Bb, hb)
      }
      static Transform(bb, ub) {
        const hb = new Hb(new Ob.q(0, 0, 0), new Ob.q(0, 0, 0));
        return Hb.TransformToRef(bb, ub, hb), hb
      }
      static TransformToRef(bb, ub, hb) {
        Ob.q.TransformCoordinatesToRef(bb.origin, ub, hb.origin), Ob.q.TransformNormalToRef(bb.direction, ub, hb.direction), hb.length = bb.length, hb.epsilon = bb.epsilon;
        const Bb = hb.direction,
          Gb = Bb.length();
        if (0 !== Gb && 1 !== Gb) {
          const bb = 1 / Gb;
          Bb.x *= bb, Bb.y *= bb, Bb.z *= bb, hb.length *= Gb
        }
        return hb
      }
      unprojectRayToRef(bb, ub, hb, Bb, Gb, Ub, Lb) {
        const Sb = Ob.i.Matrix[0];
        Gb.multiplyToRef(Ub, Sb), Sb.multiplyToRef(Lb, Sb), Sb.invert();
        const ab = Yb.b.LastCreatedEngine,
          Hb = Ob.i.YX[0];
        Hb.x = bb / hb * 2 - 1, Hb.y = -(ub / Bb * 2 - 1), Hb.z = ab?.aBb ? 1 : ab?.isNDCHalfZRange ? 0 : -1;
        const wb = Ob.i.YX[1].M_(Hb.x, Hb.y, 1 - 1e-8),
          Zb = Ob.i.YX[2],
          Xb = Ob.i.YX[3];
        Ob.q.TransformCoordinatesToRef(Hb, Sb, Zb), Ob.q.TransformCoordinatesToRef(wb, Sb, Xb), this.origin.mD(Zb), Xb.subtractToRef(Zb, this.direction), this.direction.normalize()
      }
    }

    function wb(bb, ub, hb, Bb, Ob) {
      let Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Ub = Hb.Zero();
      return Zb(bb, ub, hb, Bb, Ub, Ob, Gb), Ub
    }

    function Zb(bb, ub, hb, Bb, Gb, Ub) {
      let Lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Sb = bb.UX();
      if (!Ub && !(Ub = bb.activeCamera) && !(Ub = bb.cameraToUseForPointers)) return bb;
      const ab = Ub.viewport,
        Hb = Sb.getRenderHeight(),
        {
          x: wb,
          y: Zb,
          width: Xb,
          height: pb
        } = ab.toGlobal(Sb.getRenderWidth(), Hb),
        ob = 1 / Sb.getHardwareScalingLevel();
      return ub = ub * ob - wb, hb = hb * ob - (Hb - Zb - pb), Gb.update(ub, hb, Xb, pb, Bb || Ob.d.IdentityReadOnly, Lb ? Ob.d.IdentityReadOnly : Ub.getViewMatrix(), Ub.getProjectionMatrix(), Yb), bb
    }

    function Xb(bb, ub, hb, Bb) {
      const Ob = Hb.Zero();
      return pb(bb, ub, hb, Ob, Bb), Ob
    }

    function pb(bb, ub, hb, Bb, Gb) {
      if (!Lb.d) return bb;
      const Ub = bb.UX();
      if (!Gb && !(Gb = bb.activeCamera) && !(Gb = bb.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Yb = Gb.viewport,
        Sb = Ub.getRenderHeight(),
        {
          x: ab,
          y: Hb,
          width: wb,
          height: Zb
        } = Yb.toGlobal(Ub.getRenderWidth(), Sb),
        Xb = Ob.d.Identity(),
        pb = 1 / Ub.getHardwareScalingLevel();
      return ub = ub * pb - ab, hb = hb * pb - (Sb - Hb - Zb), Bb.update(ub, hb, wb, Zb, Xb, Xb, Gb.getProjectionMatrix()), bb
    }

    function ob(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
      return Ab(bb, hb, Bb, ub(Bb, hb.enableDistantPicking), Ob, Gb, Ub, Lb)
    }

    function Ab(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
      const Yb = ub.intersects(Bb, Ob, Ub, Gb, hb, Lb);
      return Yb && Yb.hit ? !Ob && null != bb && Yb.distance >= bb.distance ? null : Yb : null
    }

    function lb(bb, ub) {
      return "InstancedLinesMesh" === bb || "LinesMesh" === bb ? ub.intersectionThreshold : 0
    }

    function Kb(bb) {
      const ub = bb.getClassName();
      if ("GreasedLineMesh" === ub) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const hb = bb.rawBoundingInfo;
      return {
        rawBoundingInfo: hb,
        intersectionThreshold: hb ? lb(ub, bb) : 0
      }
    }

    function Wb(bb, ub, hb, Bb, Ob) {
      const Gb = bb(hb, ub.enableDistantPicking);
      return Gb.intersectsSphere(Bb.sBb, Ob) && Gb.intersectsBox(Bb.boundingBox, Ob) ? Gb : null
    }

    function Cb(bb, ub, hb, Bb, Gb, Ub) {
      let Yb = null;
      const Sb = !!(bb.activeCameras && bb.activeCameras.length > 1 && bb.cameraToUseForPointers !== bb.activeCamera),
        Hb = bb.cameraToUseForPointers || bb.activeCamera,
        wb = ab.internalPickerForMesh || ob,
        Zb = wb === ob;
      for (let Lb = 0; Lb < bb.meshes.length; Lb++) {
        const ab = bb.meshes[Lb];
        if (hb) {
          if (!hb(ab, -1)) continue
        } else if (!ab.isEnabled() || !ab.isVisible || !ab.lp) continue;
        const Xb = Sb && ab.isWorldMatrixCameraDependent(),
          pb = ab.computeWorldMatrix(Xb, Hb);
        if (ab.hasThinInstances && ab.Jub) {
          const bb = wb(Yb, ub, ab, pb, !0, !0, Ub);
          if (bb) {
            if (Gb) return bb;
            const {
              rawBoundingInfo: Lb,
              intersectionThreshold: Sb
            } = Kb(ab), Hb = ab._thinInstanceDataStorage.matrixData;
            if (Hb) {
              const bb = Ob.i.Matrix[0],
                Xb = Ob.i.Matrix[1],
                ob = Math.min(ab.W4, Hb.length >> 4);
              for (let lb = 0; lb < ob; lb++) {
                if (hb && !hb(ab, lb)) continue;
                Ob.d.FromArrayToRef(Hb, lb << 4, bb), bb.multiplyToRef(pb, Xb);
                const ob = Zb && Lb ? Wb(ub, ab, Xb, Lb, Sb) : null;
                if (Zb && Lb && !ob) continue;
                const Kb = Zb && ob ? Ab(Yb, ab, Xb, ob, Bb, Gb, Ub, !0) : wb(Yb, ub, ab, Xb, Bb, Gb, Ub, !0);
                if (Kb && (Yb = Kb, Yb.thinInstanceIndex = lb, Bb)) return Yb
              }
            }
          }
        } else {
          const bb = wb(Yb, ub, ab, pb, Bb, Gb, Ub);
          if (bb && (Yb = bb, Bb)) return Yb
        }
      }
      return Yb || new Lb.d
    }

    function db(bb, ub, hb, Bb) {
      if (!Lb.d) return null;
      const Gb = [],
        Ub = !!(bb.activeCameras && bb.activeCameras.length > 1 && bb.cameraToUseForPointers !== bb.activeCamera),
        Yb = bb.cameraToUseForPointers || bb.activeCamera,
        Sb = ab.internalPickerForMesh || ob,
        Hb = Sb === ob;
      for (let Lb = 0; Lb < bb.meshes.length; Lb++) {
        const ab = bb.meshes[Lb];
        if (hb) {
          if (!hb(ab, -1)) continue
        } else if (!ab.isEnabled() || !ab.isVisible || !ab.lp) continue;
        const wb = Ub && ab.isWorldMatrixCameraDependent(),
          Zb = ab.computeWorldMatrix(wb, Yb);
        if (ab.hasThinInstances && ab.Jub) {
          if (Sb(null, ub, ab, Zb, !0, !0, Bb)) {
            const {
              rawBoundingInfo: bb,
              intersectionThreshold: Ub
            } = Kb(ab), Lb = ab._thinInstanceDataStorage.matrixData;
            if (Lb) {
              const Yb = Ob.i.Matrix[0],
                wb = Ob.i.Matrix[1],
                Xb = Math.min(ab.W4, Lb.length >> 4);
              for (let pb = 0; pb < Xb; pb++) {
                if (hb && !hb(ab, pb)) continue;
                Ob.d.FromArrayToRef(Lb, pb << 4, Yb), Yb.multiplyToRef(Zb, wb);
                const Xb = Hb && bb ? Wb(ub, ab, wb, bb, Ub) : null;
                if (Hb && bb && !Xb) continue;
                const ob = Hb && Xb ? Ab(null, ab, wb, Xb, !1, !1, Bb, !0) : Sb(null, ub, ab, wb, !1, !1, Bb, !0);
                ob && (ob.thinInstanceIndex = pb, Gb.push(ob))
              }
            }
          }
        } else {
          const bb = Sb(null, ub, ab, Zb, !1, !1, Bb);
          bb && Gb.push(bb)
        }
      }
      return Gb
    }

    function rb(bb, ub, hb, Bb, Gb, Ub) {
      if (!Lb.d) return null;
      const Yb = Cb(bb, (Bb => (bb._tempPickingRay || (bb._tempPickingRay = Hb.Zero()), Zb(bb, ub, hb, Bb, bb._tempPickingRay, Ub || null), bb._tempPickingRay)), Bb, Gb, !0);
      return Yb && (Yb.ray = wb(bb, ub, hb, Ob.d.Identity(), Ub || null)), Yb
    }

    function jb(bb, ub, hb, Bb, Gb, Ub, Lb) {
      const Yb = Cb(bb, ((Bb, Ob) => (bb._tempPickingRay || (bb._tempPickingRay = Hb.Zero()), Zb(bb, ub, hb, Bb, bb._tempPickingRay, Ub || null, !1, Ob), bb._tempPickingRay)), Bb, Gb, !1, Lb);
      return Yb && (Yb.ray = wb(bb, ub, hb, Ob.d.Identity(), Ub || null)), Yb
    }

    function nb(bb, ub, hb, Bb, Gb) {
      const Ub = Cb(bb, (hb => (bb._pickWithRayInverseMatrix || (bb._pickWithRayInverseMatrix = Ob.d.Identity()), hb.invertToRef(bb._pickWithRayInverseMatrix), bb._cachedRayForTransform || (bb._cachedRayForTransform = Hb.Zero()), Hb.TransformToRef(ub, bb._pickWithRayInverseMatrix, bb._cachedRayForTransform), bb._cachedRayForTransform)), hb, Bb, !1, Gb);
      return Ub && (Ub.ray = ub), Ub
    }

    function Db(bb, ub, hb, Bb, Ob, Gb) {
      return db(bb, (Bb => wb(bb, ub, hb, Bb, Ob || null)), Bb, Gb)
    }

    function xb(bb, ub, hb, Bb) {
      return db(bb, (hb => (bb._pickWithRayInverseMatrix || (bb._pickWithRayInverseMatrix = Ob.d.Identity()), hb.invertToRef(bb._pickWithRayInverseMatrix), bb._cachedRayForTransform || (bb._cachedRayForTransform = Hb.Zero()), Hb.TransformToRef(ub, bb._pickWithRayInverseMatrix, bb._cachedRayForTransform), bb._cachedRayForTransform)), hb, Bb)
    }

    function zb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        Bb = arguments.length > 3 ? arguments[3] : void 0,
        Gb = arguments.length > 4 ? arguments[4] : void 0;
      Bb || (Bb = bb.getWorldMatrix()), ub.length = hb, Gb ? ub.origin.mD(Gb) : ub.origin.mD(bb.position);
      const Ub = Ob.i.YX[2];
      Ub.set(0, 0, bb._scene.useRightHandedSystem ? -1 : 1);
      const Lb = Ob.i.YX[3];
      return Ob.q.TransformNormalToRef(Ub, Bb, Lb), Ob.q.NormalizeToRef(Lb, ub.direction), ub
    }

    function gb(bb, ub) {
      ub && (ub.prototype.getForwardRay = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        return zb(this, new Hb(Ob.q.Zero(), Ob.q.Zero(), bb), bb, ub, hb)
      }, ub.prototype.getForwardRayToRef = function(bb) {
        return zb(this, bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), bb && (Sb.e._IsPickingAvailable = !0, bb.prototype.createPickingRay = function(bb, ub, hb, Bb) {
        return wb(this, bb, ub, hb, Bb, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Hb._TmpVector3 = (0, Gb.e)(6, Ob.q.Zero), Hb._RayDistant = Hb.Zero(), Hb._Smallnum = 1e-8, Hb._Rayl = 1e9
  },
  41005: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb.v
    });
    var Bb = hb(39551),
      Ob = hb(39666),
      Gb = hb(41012);
    let Ub = !1;
    Ub || (Ub = !0, (0, Gb.c)(Bb.f, Ob.d), Bb.f.prototype.createPickingRayToRef = function(bb, ub, hb, Bb, Ob) {
      let Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Gb.h)(this, bb, ub, hb, Bb, Ob, Ub, Lb)
    }, Bb.f.prototype.createPickingRayInCameraSpace = function(bb, ub, hb) {
      return (0, Gb.g)(this, bb, ub, hb)
    }, Bb.f.prototype.createPickingRayInCameraSpaceToRef = function(bb, ub, hb, Bb) {
      return (0, Gb.d)(this, bb, ub, hb, Bb)
    }, Bb.f.prototype.pickWithBoundingInfo = function(bb, ub, hb, Bb, Ob) {
      return (0, Gb.p)(this, bb, ub, hb, Bb, Ob)
    }, Bb.f.prototype.xw = function(bb, ub, hb, Bb, Ob, Ub) {
      let Lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Gb.t)(this, bb, ub, hb, Bb, Ob, Ub, Lb)
    }, Bb.f.prototype.pickWithRay = function(bb, ub, hb, Bb) {
      return (0, Gb.q)(this, bb, ub, hb, Bb)
    }, Bb.f.prototype.multiPick = function(bb, ub, hb, Bb, Ob) {
      return (0, Gb.o)(this, bb, ub, hb, Bb, Ob)
    }, Bb.f.prototype.multiPickWithRay = function(bb, ub, hb) {
      return (0, Gb.l)(this, bb, ub, hb)
    })
  },
  41021: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ab
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36727),
      Ub = hb(39700),
      Lb = hb(41030),
      Yb = hb(39670),
      Sb = hb(36762);
    let ab = (() => {
        var bb;
        let ub, hb, Yb, Sb, ab, Hb, wb, Zb, Xb = Lb.d,
          pb = [],
          ob = [],
          Ab = [],
          lb = [],
          Kb = [],
          Wb = [],
          Cb = [],
          db = [],
          rb = [],
          jb = [],
          nb = [],
          Db = [],
          xb = [];
        return bb = class extends Xb {
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
          constructor(bb, ub, hb, Ob) {
            super(bb, hb, Ob), this._shadowFrustumSize = ((0, Bb.k)(this, pb), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, Bb.k)(this, ob, !0), this.autoCalcShadowZBounds = ((0, Bb.k)(this, Ab), (0, Bb.k)(this, lb, !1)), this._orthoLeft = ((0, Bb.k)(this, Kb), (0, Bb.k)(this, Wb, Number.MAX_VALUE)), this._orthoRight = ((0, Bb.k)(this, Cb), (0, Bb.k)(this, db, Number.MIN_VALUE)), this._orthoTop = ((0, Bb.k)(this, rb), (0, Bb.k)(this, jb, Number.MIN_VALUE)), this._orthoBottom = ((0, Bb.k)(this, nb), (0, Bb.k)(this, Db, Number.MAX_VALUE)), (0, Bb.k)(this, xb), this.position = ub.scale(-1), this.direction = ub
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Ub.b.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(bb, ub, hb) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(bb) : this._setDefaultAutoExtendShadowProjectionMatrix(bb, ub, hb)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(bb) {
            const ub = this.ZN().activeCamera;
            Gb.d.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : ub ? ub.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : ub ? ub.maxZ : 1e4, bb, this.ZN().UX().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(bb, ub, hb) {
            const Bb = this.ZN().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const bb = Gb.q.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let Bb = Number.MAX_VALUE,
                Ob = -Number.MAX_VALUE;
              for (let Ub = 0; Ub < hb.length; Ub++) {
                const Lb = hb[Ub];
                if (!Lb) continue;
                const Yb = Lb.XM().boundingBox;
                for (let hb = 0; hb < Yb.vectorsWorld.length; hb++) Gb.q.TransformCoordinatesToRef(Yb.vectorsWorld[hb], ub, bb), bb.x < this._orthoLeft && (this._orthoLeft = bb.x), bb.y < this._orthoBottom && (this._orthoBottom = bb.y), bb.x > this._orthoRight && (this._orthoRight = bb.x), bb.y > this._orthoTop && (this._orthoTop = bb.y), this.autoCalcShadowZBounds && (bb.z < Bb && (Bb = bb.z), bb.z > Ob && (Ob = bb.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = Bb, this._shadowMaxZ = Ob)
            }
            const Ob = this._orthoRight - this._orthoLeft,
              Ub = this._orthoTop - this._orthoBottom,
              Lb = void 0 !== this.shadowMinZ ? this.shadowMinZ : Bb?.minZ || 0,
              Yb = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : Bb?.maxZ || 1e4,
              Sb = this.ZN().UX().aBb;
            Gb.d.OrthoOffCenterLHToRef(this._orthoLeft - Ob * this.shadowOrthoScale, this._orthoRight + Ob * this.shadowOrthoScale, this._orthoBottom - Ub * this.shadowOrthoScale, this._orthoTop + Ub * this.shadowOrthoScale, Sb ? Yb : Lb, Sb ? Lb : Yb, bb, this.ZN().UX().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(bb, ub) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, ub), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, ub), this)
          }
          transferToNodeMaterialEffect(bb, ub) {
            return this.computeTransformedInformation() ? (bb.setFloat3(ub, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (bb.setFloat3(ub, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(bb) {
            const ub = this._scene.UX();
            return !ub.aBb && ub.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(bb) {
            const ub = this._scene.UX();
            return ub.aBb && ub.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(bb, ub) {
            bb["DIRLIGHT" + ub] = !0
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xb[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Yb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], ab = [(0, Ob.K)("orthoLeft")], Hb = [(0, Ob.K)("orthoRight")], wb = [(0, Ob.K)("orthoTop")], Zb = [(0, Ob.K)("orthoBottom")], (0, Bb.h)(bb, null, ub, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: bb => "shadowFrustumSize" in bb,
              get: bb => bb.shadowFrustumSize
            },
            metadata: Gb
          }, null, pb), (0, Bb.h)(bb, null, hb, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "shadowOrthoScale" in bb,
              get: bb => bb.shadowOrthoScale
            },
            metadata: Gb
          }, null, pb), (0, Bb.h)(null, null, Yb, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoUpdateExtends" in bb,
              get: bb => bb.autoUpdateExtends,
              set: (bb, ub) => {
                bb.autoUpdateExtends = ub
              }
            },
            metadata: Gb
          }, ob, Ab), (0, Bb.h)(null, null, Sb, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: bb => "autoCalcShadowZBounds" in bb,
              get: bb => bb.autoCalcShadowZBounds,
              set: (bb, ub) => {
                bb.autoCalcShadowZBounds = ub
              }
            },
            metadata: Gb
          }, lb, Kb), (0, Bb.h)(null, null, ab, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoLeft" in bb,
              get: bb => bb._orthoLeft,
              set: (bb, ub) => {
                bb._orthoLeft = ub
              }
            },
            metadata: Gb
          }, Wb, Cb), (0, Bb.h)(null, null, Hb, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoRight" in bb,
              get: bb => bb._orthoRight,
              set: (bb, ub) => {
                bb._orthoRight = ub
              }
            },
            metadata: Gb
          }, db, rb), (0, Bb.h)(null, null, wb, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoTop" in bb,
              get: bb => bb._orthoTop,
              set: (bb, ub) => {
                bb._orthoTop = ub
              }
            },
            metadata: Gb
          }, jb, nb), (0, Bb.h)(null, null, Zb, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: bb => "_orthoBottom" in bb,
              get: bb => bb._orthoBottom,
              set: (bb, ub) => {
                bb._orthoBottom = ub
              }
            },
            metadata: Gb
          }, Db, xb), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb
      })(),
      Hb = !1;
    Hb || (Hb = !0, Yb.b.AddNodeConstructor("Light_Type_1", ((bb, ub) => () => new ab(bb, Gb.q.Zero(), ub))), (0, Sb.f)("BABYLON.DirectionalLight", ab))
  },
  41043: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Vu
    });
    var Bb = hb(38329),
      Ob = hb(36753),
      Gb = hb(36727),
      Ub = hb(39609),
      Lb = hb(41051),
      Yb = hb(36748),
      Sb = hb(39719),
      ab = hb(36893),
      Hb = hb(38334),
      wb = hb(38296),
      Zb = hb(36757);
    class Xb {
      constructor() {
        this.direction1 = new Gb.q(0, 1, 0), this.direction2 = new Gb.q(0, 1, 0)
      }
      startDirectionFunction(bb, ub, hb, Bb) {
        const Ob = (0, Zb.RandomRange)(this.direction1.x, this.direction2.x),
          Ub = (0, Zb.RandomRange)(this.direction1.y, this.direction2.y),
          Lb = (0, Zb.RandomRange)(this.direction1.z, this.direction2.z);
        Bb ? ub.M_(Ob, Ub, Lb) : Gb.q.TransformNormalFromFloatsToRef(Ob, Ub, Lb, bb, ub)
      }
      startPositionFunction(bb, ub, hb, Bb) {
        Bb ? ub.M_(0, 0, 0) : Gb.q.TransformCoordinatesFromFloatsToRef(0, 0, 0, bb, ub)
      }
      clone() {
        const bb = new Xb;
        return wb.b.DeepCopy(this, bb), bb
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
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.ZBb(), bb.direction2 = this.direction2.ZBb(), bb
      }
      parse(bb) {
        Gb.q.FromArrayToRef(bb.direction1, 0, this.direction1), Gb.q.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    class pb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = bb, this.radiusRange = ub, this.directionRandomizer = hb
      }
      startDirectionFunction(bb, ub, hb, Bb) {
        const Ob = hb.position.subtract(bb.getTranslation()).normalize(),
          Ub = (0, Zb.RandomRange)(0, this.directionRandomizer),
          Lb = (0, Zb.RandomRange)(0, this.directionRandomizer),
          Yb = (0, Zb.RandomRange)(0, this.directionRandomizer);
        Ob.x += Ub, Ob.y += Lb, Ob.z += Yb, Ob.normalize(), Bb ? ub.mD(Ob) : Gb.q.TransformNormalFromFloatsToRef(Ob.x, Ob.y, Ob.z, bb, ub)
      }
      startPositionFunction(bb, ub, hb, Bb) {
        const Ob = this.radius - (0, Zb.RandomRange)(0, this.radius * this.radiusRange),
          Ub = (0, Zb.RandomRange)(0, 1),
          Lb = (0, Zb.RandomRange)(0, 2 * Math.PI),
          Yb = Math.acos(2 * Ub - 1),
          Sb = Ob * Math.cos(Lb) * Math.sin(Yb),
          ab = Ob * Math.cos(Yb),
          Hb = Ob * Math.sin(Lb) * Math.sin(Yb);
        Bb ? ub.M_(Sb, Math.abs(ab), Hb) : Gb.q.TransformCoordinatesFromFloatsToRef(Sb, Math.abs(ab), Hb, bb, ub)
      }
      clone() {
        const bb = new pb(this.radius, this.directionRandomizer);
        return wb.b.DeepCopy(this, bb), bb
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
    class ob {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = bb, this.radiusRange = ub, this.directionRandomizer = hb
      }
      startDirectionFunction(bb, ub, hb, Bb) {
        const Ob = hb.position.subtract(bb.getTranslation()).normalize(),
          Ub = (0, Zb.RandomRange)(0, this.directionRandomizer),
          Lb = (0, Zb.RandomRange)(0, this.directionRandomizer),
          Yb = (0, Zb.RandomRange)(0, this.directionRandomizer);
        Ob.x += Ub, Ob.y += Lb, Ob.z += Yb, Ob.normalize(), Bb ? ub.mD(Ob) : Gb.q.TransformNormalFromFloatsToRef(Ob.x, Ob.y, Ob.z, bb, ub)
      }
      startPositionFunction(bb, ub, hb, Bb) {
        const Ob = this.radius - (0, Zb.RandomRange)(0, this.radius * this.radiusRange),
          Ub = (0, Zb.RandomRange)(0, 1),
          Lb = (0, Zb.RandomRange)(0, 2 * Math.PI),
          Yb = Math.acos(2 * Ub - 1),
          Sb = Ob * Math.cos(Lb) * Math.sin(Yb),
          ab = Ob * Math.cos(Yb),
          Hb = Ob * Math.sin(Lb) * Math.sin(Yb);
        Bb ? ub.M_(Sb, ab, Hb) : Gb.q.TransformCoordinatesFromFloatsToRef(Sb, ab, Hb, bb, ub)
      }
      clone() {
        const bb = new ob(this.radius, this.directionRandomizer);
        return wb.b.DeepCopy(this, bb), bb
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
    class Ab extends ob {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Gb.q(0, 1, 0),
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Gb.q(0, 1, 0);
        super(bb), this.direction1 = ub, this.direction2 = hb
      }
      startDirectionFunction(bb, ub, hb, Bb) {
        const Ob = (0, Zb.RandomRange)(this.direction1.x, this.direction2.x),
          Ub = (0, Zb.RandomRange)(this.direction1.y, this.direction2.y),
          Lb = (0, Zb.RandomRange)(this.direction1.z, this.direction2.z);
        Bb ? ub.M_(Ob, Ub, Lb) : Gb.q.TransformNormalFromFloatsToRef(Ob, Ub, Lb, bb, ub)
      }
      clone() {
        const bb = new Ab(this.radius, this.direction1, this.direction2);
        return wb.b.DeepCopy(this, bb), bb
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
        return bb.direction1 = this.direction1.ZBb(), bb.direction2 = this.direction2.ZBb(), bb
      }
      parse(bb) {
        super.parse(bb), Gb.q.FromArrayToRef(bb.direction1, 0, this.direction1), Gb.q.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    var lb = hb(38292);
    class Kb {
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
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = hb, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = ub, this.radius = bb
      }
      startDirectionFunction(bb, ub, hb, Bb) {
        const Ob = hb.position.subtract(bb.getTranslation()).normalize(),
          Ub = (0, Zb.RandomRange)(0, this.directionRandomizer),
          Lb = (0, Zb.RandomRange)(0, this.directionRandomizer),
          Yb = (0, Zb.RandomRange)(0, this.directionRandomizer);
        Ob.x += Ub, Ob.y += Lb, Ob.z += Yb, Ob.normalize(), Bb ? ub.mD(Ob) : Gb.q.TransformNormalFromFloatsToRef(Ob.x, Ob.y, Ob.z, bb, ub)
      }
      startPositionFunction(bb, ub, hb, Bb) {
        const Ob = (0, Zb.RandomRange)(0, 2 * Math.PI);
        let Ub;
        this.emitFromSpawnPointOnly ? Ub = 1e-4 : (Ub = (0, Zb.RandomRange)(0, this.heightRange), Ub = 1 - Ub * Ub);
        let Lb = this._radius - (0, Zb.RandomRange)(0, this._radius * this.radiusRange);
        Lb *= Ub;
        const Yb = Lb * Math.sin(Ob),
          Sb = Lb * Math.cos(Ob),
          ab = Ub * this._height;
        if (Bb) return ub.x = Yb, ub.y = ab, void(ub.z = Sb);
        Gb.q.TransformCoordinatesFromFloatsToRef(Yb, ab, Sb, bb, ub)
      }
      clone() {
        const bb = new Kb(this._radius, this._angle, this.directionRandomizer);
        return wb.b.DeepCopy(this, bb), bb
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
    class Wb extends Kb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Gb.q(0, 1, 0),
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Gb.q(0, 1, 0);
        super(bb, ub), this.direction1 = hb, this.direction2 = Bb
      }
      startDirectionFunction(bb, ub, hb, Bb) {
        const Ob = (0, Zb.RandomRange)(this.direction1.x, this.direction2.x),
          Ub = (0, Zb.RandomRange)(this.direction1.y, this.direction2.y),
          Lb = (0, Zb.RandomRange)(this.direction1.z, this.direction2.z);
        Bb ? ub.M_(Ob, Ub, Lb) : Gb.q.TransformNormalFromFloatsToRef(Ob, Ub, Lb, bb, ub)
      }
      clone() {
        const bb = new Wb(this.radius, this.angle, this.direction1, this.direction2);
        return wb.b.DeepCopy(this, bb), bb
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
        return bb.direction1 = this.direction1.ZBb(), bb.direction2 = this.direction2.ZBb(), bb
      }
      parse(bb) {
        super.parse(bb), Gb.q.FromArrayToRef(bb.direction1, 0, this.direction1), Gb.q.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
    class Cb {
      get mesh() {
        return this._mesh
      }
      set mesh(bb) {
        this._mesh !== bb && (this._mesh = bb, bb ? (this._indices = bb.XBb(), this._positions = bb.getVerticesData(Ub.i.PositionKind), this._normals = bb.getVerticesData(Ub.i.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Gb.q.Zero(), this._mesh = null, this.direction1 = new Gb.q(0, 1, 0), this.direction2 = new Gb.q(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = bb
      }
      startDirectionFunction(bb, ub, hb, Bb) {
        if (this.useMeshNormalsForDirection && this._normals) return void Gb.q.TransformNormalToRef(this._storedNormal, bb, ub);
        const Ob = (0, Zb.RandomRange)(this.direction1.x, this.direction2.x),
          Ub = (0, Zb.RandomRange)(this.direction1.y, this.direction2.y),
          Lb = (0, Zb.RandomRange)(this.direction1.z, this.direction2.z);
        Bb ? ub.M_(Ob, Ub, Lb) : Gb.q.TransformNormalFromFloatsToRef(Ob, Ub, Lb, bb, ub)
      }
      startPositionFunction(bb, ub, hb, Bb) {
        if (!this._indices || !this._positions) return;
        const Ob = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Ub = Math.random(),
          Lb = Math.random() * (1 - Ub),
          Yb = 1 - Ub - Lb,
          Sb = this._indices[Ob],
          ab = this._indices[Ob + 1],
          Hb = this._indices[Ob + 2],
          wb = Gb.i.YX[0],
          Zb = Gb.i.YX[1],
          Xb = Gb.i.YX[2],
          pb = Gb.i.YX[3];
        Gb.q.FromArrayToRef(this._positions, 3 * Sb, wb), Gb.q.FromArrayToRef(this._positions, 3 * ab, Zb), Gb.q.FromArrayToRef(this._positions, 3 * Hb, Xb), pb.x = Ub * wb.x + Lb * Zb.x + Yb * Xb.x, pb.y = Ub * wb.y + Lb * Zb.y + Yb * Xb.y, pb.z = Ub * wb.z + Lb * Zb.z + Yb * Xb.z, Bb ? ub.M_(pb.x, pb.y, pb.z) : Gb.q.TransformCoordinatesFromFloatsToRef(pb.x, pb.y, pb.z, bb, ub), this.useMeshNormalsForDirection && this._normals && (Gb.q.FromArrayToRef(this._normals, 3 * Sb, wb), Gb.q.FromArrayToRef(this._normals, 3 * ab, Zb), Gb.q.FromArrayToRef(this._normals, 3 * Hb, Xb), this._storedNormal.x = Ub * wb.x + Lb * Zb.x + Yb * Xb.x, this._storedNormal.y = Ub * wb.y + Lb * Zb.y + Yb * Xb.y, this._storedNormal.z = Ub * wb.z + Lb * Zb.z + Yb * Xb.z)
      }
      clone() {
        const bb = new Cb(this.mesh);
        return wb.b.DeepCopy(this, bb), bb
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
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.ZBb(), bb.direction2 = this.direction2.ZBb(), bb.meshId = this.mesh?.id, bb.useMeshNormalsForDirection = this.useMeshNormalsForDirection, bb
      }
      parse(bb, ub) {
        Gb.q.FromArrayToRef(bb.direction1, 0, this.direction1), Gb.q.FromArrayToRef(bb.direction2, 0, this.direction2), bb.meshId && ub && (this.mesh = ub.getLastMeshById(bb.meshId)), this.useMeshNormalsForDirection = bb.useMeshNormalsForDirection
      }
    }
    class db {
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
        const ub = this._attractors.indexOf(bb); - 1 !== ub && this._attractors.splice(ub, 1)
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
        this._useLogarithmicDepth = bb && this.ZN().UX().getCaps().fragmentDepthSupported
      }
      ZN() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(bb) {
        switch (bb) {
          case db.BLENDMODE_MULTIPLYADD:
            return;
          case db.BLENDMODE_ADD:
            bb = 1;
            break;
          case db.BLENDMODE_ONEONE:
            bb = 6;
            break;
          case db.BLENDMODE_STANDARD:
            bb = 2;
            break;
          case db.BLENDMODE_MULTIPLY:
            bb = 4;
            break;
          case db.BLENDMODE_SUBTRACT:
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
      addEmitRateGradient(bb, ub, hb) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, bb, ub, hb), this
      }
      removeEmitRateGradient(bb) {
        return this._removeFactorGradient(this._emitRateGradients, bb), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Gb.q.Zero()
      }
      set direction1(bb) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = bb)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Gb.q.Zero()
      }
      set direction2(bb) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = bb)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Gb.q.Zero()
      }
      set minEmitBox(bb) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = bb)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Gb.q.Zero()
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
      _addFactorGradient(bb, ub, hb, Ob) {
        const Gb = new Bb.h(ub, hb, Ob);
        bb.push(Gb), bb.sort(((bb, ub) => bb.gradient < ub.gradient ? -1 : bb.gradient > ub.gradient ? 1 : 0))
      }
      _removeFactorGradient(bb, ub) {
        if (!bb) return;
        let hb = 0;
        for (const Bb of bb) {
          if (Bb.gradient === ub) {
            bb.splice(hb, 1);
            break
          }
          hb++
        }
      }
      _removeGradientAndTexture(bb, ub, hb) {
        if (!ub) return this;
        let Bb = 0;
        for (const Ob of ub) {
          if (Ob.gradient === bb) {
            ub.splice(Bb, 1);
            break
          }
          Bb++
        }
        return hb && hb.dispose(), this
      }
      constructor(bb) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Gb.q.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Gb.q(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = db.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Gb.m(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Gb.q(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Gb.q.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new ab.c(1, 1, 1, 1), this.color2 = new ab.c(1, 1, 1, 1), this.colorDead = new ab.c(0, 0, 0, 1), this.textureMask = new ab.c(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Sb.b, this.id = bb, this.name = bb
      }
      createPointEmitter(bb, ub) {
        const hb = function(bb, ub) {
          const hb = new Xb;
          return hb.direction1 = bb, hb.direction2 = ub, hb
        }(bb, ub);
        return this.particleEmitterType = hb, hb
      }
      createHemisphericEmitter() {
        const bb = function() {
          return new pb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = bb, bb
      }
      createSphereEmitter() {
        const bb = function() {
          return new ob(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = bb, bb
      }
      createDirectedSphereEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Gb.q(0, 1, 0),
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Gb.q(0, 1, 0);
          return new Ab(bb, ub, hb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Gb.q(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Gb.q(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createCylinderEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new lb.f(bb, ub, hb, Bb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = bb, bb
      }
      createDirectedCylinderEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Gb.q(0, 1, 0),
            Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Gb.q(0, 1, 0);
          return new lb.d(bb, ub, hb, Bb, Ob)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Gb.q(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Gb.q(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createConeEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Kb(bb, ub)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = bb, bb
      }
      createDirectedConeEmitter() {
        const bb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Gb.q(0, 1, 0),
            Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Gb.q(0, 1, 0);
          return new Wb(bb, ub, hb, Bb)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Gb.q(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Gb.q(0, 1, 0));
        return this.particleEmitterType = bb, bb
      }
      createBoxEmitter(bb, ub, hb, Bb) {
        const Ob = new Hb.b;
        return this.particleEmitterType = Ob, this.direction1 = bb, this.direction2 = ub, this.minEmitBox = hb, this.maxEmitBox = Bb, Ob
      }
      createMeshEmitter() {
        const bb = function() {
          return new Cb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = bb, bb
      }
    }
    db.BLENDMODE_ONEONE = 0, db.BLENDMODE_STANDARD = 1, db.BLENDMODE_ADD = 2, db.BLENDMODE_MULTIPLY = 3, db.BLENDMODE_MULTIPLYADD = 4, db.BLENDMODE_SUBTRACT = -1;
    class rb {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new ab.c(0, 0, 0, 0), this.currentColor2 = new ab.c(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Gb.q.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class jb {
      constructor(bb) {
        this.particleSystem = bb, this.position = Gb.q.Zero(), this.direction = Gb.q.Zero(), this.color = new ab.c(0, 0, 0, 0), this.colorStep = new ab.c(0, 0, 0, 0), this.initialColor = new ab.c(0, 0, 0, 0), this.colorDead = new ab.c(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Gb.m(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new rb, this.id = jb._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let bb = this.age,
          ub = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === ub ? (ub = 1, bb = this._properties.randomCellOffset) : bb += this._properties.randomCellOffset);
        const hb = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let Bb;
        Bb = this._properties.initialSpriteCellLoop ? (0, Zb.Clamp)(bb * ub % this.lifeTime / this.lifeTime) : (0, Zb.Clamp)(bb * ub / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + Bb * hb | 0
      }
      _inheritParticleInfoToSubEmitter(bb) {
        if (bb.particleSystem.emitter.position) {
          const ub = bb.particleSystem.emitter;
          if (ub.position.mD(this.position), bb.inheritDirection) {
            const bb = Gb.i.YX[0];
            this.direction.normalizeToRef(bb), ub.setDirection(bb, 0, Math.PI / 2)
          }
        } else {
          bb.particleSystem.emitter.mD(this.position)
        }
        this.direction.scaleToRef(bb.inheritedVelocityAmount / 2, Gb.i.YX[0]), bb.particleSystem._inheritedVelocityOffset.mD(Gb.i.YX[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const bb of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(bb)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = jb._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(bb) {
        bb.position.mD(this.position), this._properties.initialDirection ? bb._properties.initialDirection ? bb._properties.initialDirection.mD(this._properties.initialDirection) : bb._properties.initialDirection = this._properties.initialDirection.clone() : bb._properties.initialDirection = null, bb.direction.mD(this.direction), this._properties.localPosition && (bb._properties.localPosition ? bb._properties.localPosition.mD(this._properties.localPosition) : bb._properties.localPosition = this._properties.localPosition.clone()), bb.color.mD(this.color), bb.colorStep.mD(this.colorStep), bb.initialColor.mD(this.initialColor), bb.colorDead.mD(this.colorDead), bb.lifeTime = this.lifeTime, bb.age = this.age, bb._properties.randomCellOffset = this._properties.randomCellOffset, bb.size = this.size, bb.scale.mD(this.scale), bb.angle = this.angle, bb.angularSpeed = this.angularSpeed, bb.particleSystem = this.particleSystem, bb.cellIndex = this.cellIndex, bb.id = this.id, bb._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (bb._properties.currentColorGradient = this._properties.currentColorGradient, bb._properties.currentColor1.mD(this._properties.currentColor1), bb._properties.currentColor2.mD(this._properties.currentColor2)), this._properties.currentSizeGradient && (bb._properties.currentSizeGradient = this._properties.currentSizeGradient, bb._properties.currentSize1 = this._properties.currentSize1, bb._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (bb._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, bb._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, bb._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (bb._properties.currentVelocityGradient = this._properties.currentVelocityGradient, bb._properties.currentVelocity1 = this._properties.currentVelocity1, bb._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (bb._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, bb._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, bb._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (bb._properties.currentDragGradient = this._properties.currentDragGradient, bb._properties.currentDrag1 = this._properties.currentDrag1, bb._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (bb._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, bb._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, bb._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (bb.remapData && this.remapData ? bb.remapData.mD(this.remapData) : bb.remapData = new Gb.r(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2 ? (bb._properties.randomNoiseCoordinates1.mD(this._properties.randomNoiseCoordinates1), bb._properties.randomNoiseCoordinates2.mD(this._properties.randomNoiseCoordinates2)) : (bb._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), bb._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), bb.metadata = this.metadata
      }
    }
    jb._Count = 0;
    var nb = hb(40538);
    class Db {
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
      constructor(bb, ub, hb, Bb) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = ub, this.jT = bb, this._scene = hb, this._host = Bb, this._activeTargets = [], ub._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            pb: this._getCorrectLoopMode()
          }, this._animation.dataType === nb.d.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Gb.d.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const bb = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, bb)
        }
        if (this.jT instanceof Array) {
          let bb = 0;
          for (const ub of this.jT) this._preparePath(ub, bb), this._getOriginalValues(bb), bb++;
          this._targetIsArray = !0
        } else this._preparePath(this.jT), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const Ob = ub.getEvents();
        if (Ob && Ob.length > 0)
          for (const Gb of Ob) this._events.push(Gb._clone());
        this._enableBlending = bb && bb.animationPropertiesOverride ? bb.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = this._animation.targetPropertyPath;
        if (hb.length > 1) {
          let Bb = bb;
          for (let bb = 0; bb < hb.length - 1; bb++) {
            const ub = hb[bb];
            if (Bb = Bb[ub], void 0 === Bb) throw new Error(`Invalid property (${ub}) in property path (${hb.join(".")})`)
          }
          this._targetPath = hb[hb.length - 1], this._activeTargets[ub] = Bb
        } else this._targetPath = hb[0], this._activeTargets[ub] = bb;
        if (void 0 === this._activeTargets[ub][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${hb.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.jT instanceof Array) {
            let bb = 0;
            for (const ub of this.jT) void 0 !== this._originalValue[bb] && this._setValue(ub, this._activeTargets[bb], this._originalValue[bb], -1, bb), bb++
          } else void 0 !== this._originalValue[0] && this._setValue(this.jT, this._directTarget, this._originalValue[0], -1, 0);
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
      setValue(bb, ub) {
        if (this._targetIsArray)
          for (let hb = 0; hb < this.jT.length; hb++) {
            const Bb = this.jT[hb];
            this._setValue(Bb, this._activeTargets[hb], bb, ub, hb)
          } else this._setValue(this.jT, this._directTarget, bb, ub, 0)
      }
      _getOriginalValues() {
        let bb, ub = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const hb = this._activeTargets[ub];
        if (nb.d.InheritOriginalValueFromActiveAnimations) {
          const bb = this._scene._activeAnimatables;
          for (let Bb = 0; Bb < bb.length; Bb++) {
            const Ob = bb[Bb]._runtimeAnimations;
            for (let bb = 0; bb < Ob.length; bb++) {
              const Bb = Ob[bb];
              if (Bb !== this && Bb._targetPath === this._targetPath)
                for (let bb = 0; bb < Bb._activeTargets.length; bb++)
                  if (Bb._activeTargets[bb] === hb && void 0 !== Bb._originalValue[bb]) return void(Bb._originalValue[bb] && Bb._originalValue[bb].clone ? this._originalValue[ub] = Bb._originalValue[bb].clone() : this._originalValue[ub] = Bb._originalValue[bb])
            }
          }
        }
        bb = hb.getLocalMatrix && "_matrix" === this._targetPath ? hb.getLocalMatrix() : hb[this._targetPath], bb && bb.clone ? this._originalValue[ub] = bb.clone() : this._originalValue[ub] = bb
      }
      _registerTargetForLateAnimationBinding(bb, ub) {
        const hb = bb.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(hb), hb._lateAnimationHolders || (hb._lateAnimationHolders = {}), hb._lateAnimationHolders[bb.targetPath] || (hb._lateAnimationHolders[bb.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: ub
        }), bb.isAdditive ? (hb._lateAnimationHolders[bb.targetPath].additiveAnimations.push(bb), hb._lateAnimationHolders[bb.targetPath].totalAdditiveWeight += bb.weight) : (hb._lateAnimationHolders[bb.targetPath].animations.push(bb), hb._lateAnimationHolders[bb.targetPath].totalWeight += bb.weight)
      }
      _setValue(bb, ub, hb, Bb, Ob) {
        const Ub = this._scene._animationWrites,
          Lb = this._scene._animationWriteCount++;
        let Yb = Ub[Lb];
        if (Yb || (Yb = Ub[Lb] = {
            runtimeAnimation: this,
            target: bb,
            weight: Bb,
            additive: !1,
            blendingFactor: 1,
            mp: !1
          }), Yb.runtimeAnimation = this, Yb.target = bb, Yb.weight = Bb, Yb.additive = this.isAdditive, Yb.mp = !1, this._currentActiveTarget = ub, this._weight = Bb, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const bb = ub[this._targetPath];
            bb.clone ? this._originalBlendValue = bb.clone() : this._originalBlendValue = bb
          }
          this._originalBlendValue.m ? nb.d.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Gb.d.DecomposeLerpToRef(this._originalBlendValue, hb, this._blendingFactor, this._currentValue) : this._currentValue = Gb.d.DecomposeLerp(this._originalBlendValue, hb, this._blendingFactor) : this._currentValue ? Gb.d.LerpToRef(this._originalBlendValue, hb, this._blendingFactor, this._currentValue) : this._currentValue = Gb.d.Lerp(this._originalBlendValue, hb, this._blendingFactor) : this._currentValue = nb.d._UniversalLerp(this._originalBlendValue, hb, this._blendingFactor);
          const Bb = bb && bb.animationPropertiesOverride ? bb.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Yb.blendingFactor = this._blendingFactor, this._blendingFactor += Bb
        } else Yb.blendingFactor = 1, this._currentValue ? this._currentValue.mD ? this._currentValue.mD(hb) : this._currentValue = hb : this._currentValue = hb?.clone ? hb.clone() : hb; - 1 !== Bb ? this._registerTargetForLateAnimationBinding(this, this._originalValue[Ob]) : this._animationState.pb === nb.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[Ob], ub[this._targetPath]) : ub[this._targetPath] = this._originalValue[Ob] + this._currentValue : ub[this._targetPath] = this._currentValue, bb.yub && bb.yub(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.jT && this.jT.animationPropertiesOverride) {
          return "MorphTarget" === this.jT.getClassName?.() && null == this.jT._animationPropertiesOverride ? this._animation.pb : this.jT.animationPropertiesOverride.pb
        }
        return this._animation.pb
      }
      goToFrame(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const hb = this._animation.getKeys();
        bb < hb[0].frame ? bb = hb[0].frame : bb > hb[hb.length - 1].frame && (bb = hb[hb.length - 1].frame);
        const Bb = this._events;
        if (Bb.length)
          for (let Gb = 0; Gb < Bb.length; Gb++) Bb[Gb].onlyOnce || (Bb[Gb].isDone = Bb[Gb].frame < bb);
        this._currentFrame = bb;
        const Ob = this._animation._interpolate(bb, this._animationState);
        this.setValue(Ob, ub)
      }
      _prepareForSpeedRatioChange(bb) {
        const ub = this._previousElapsedTime * (this._animation.framePerSecond * bb) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - ub
      }
      animate(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Ub = this._animation,
          Lb = Ub.targetPropertyPath;
        if (!Lb || Lb.length < 1) return this._stopped = !0, !1;
        let Yb, Sb = !0;
        const ab = this._events;
        let Hb;
        if (this._coreRuntimeAnimation) Hb = hb - ub, Yb = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Yb, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Gb;
          (ub < this._minFrame || ub > this._maxFrame) && (ub = this._minFrame), (hb < this._minFrame || hb > this._maxFrame) && (hb = this._maxFrame), Hb = hb - ub;
          let Lb = bb * (Ub.framePerSecond * Ob) / 1e3 + this._absoluteFrameOffset,
            wb = 0,
            Zb = !1;
          const Xb = Bb && this._animationState.pb === nb.d.ANIMATIONLOOPMODE_YOYO;
          if (Xb) {
            const bb = (Lb - ub) / Hb,
              hb = Math.sin(bb * Math.PI);
            Lb = Math.abs(hb) * Hb + ub;
            const Bb = hb >= 0 ? 1 : -1;
            this._yoyoDirection !== Bb && (Zb = !0), this._yoyoDirection = Bb
          }
          if (this._previousElapsedTime = bb, this._previousAbsoluteFrame = Lb, !Bb && hb >= ub && (Lb >= Hb && Ob > 0 || Lb <= 0 && Ob < 0)) Sb = !1, wb = Ub.evaluate(hb);
          else if (!Bb && ub >= hb && (Lb <= Hb && Ob < 0 || Lb >= 0 && Ob > 0)) Sb = !1, wb = Ub.evaluate(ub);
          else if (this._animationState.pb !== nb.d.ANIMATIONLOOPMODE_CYCLE) {
            const bb = hb.toString() + ub.toString();
            if (!this._offsetsCache[bb]) {
              this._animationState.repeatCount = 0, this._animationState.pb = nb.d.ANIMATIONLOOPMODE_CYCLE;
              const Bb = Ub._interpolate(ub, this._animationState),
                Ob = Ub._interpolate(hb, this._animationState);
              switch (this._animationState.pb = this._getCorrectLoopMode(), Ub.dataType) {
                case nb.d.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[bb] = Ob - Bb;
                  break;
                case nb.d.ANIMATIONTYPE_QUATERNION:
                case nb.d.ANIMATIONTYPE_VECTOR3:
                case nb.d.ANIMATIONTYPE_VECTOR2:
                case nb.d.ANIMATIONTYPE_SIZE:
                case nb.d.ANIMATIONTYPE_COLOR3:
                case nb.d.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[bb] = Ob.subtract(Bb)
              }
              this._highLimitsCache[bb] = Ob
            }
            wb = this._highLimitsCache[bb], Gb = this._offsetsCache[bb]
          }
          if (void 0 === Gb) switch (Ub.dataType) {
            case nb.d.ANIMATIONTYPE_FLOAT:
              Gb = 0;
              break;
            case nb.d.ANIMATIONTYPE_QUATERNION:
              Gb = nb.q;
              break;
            case nb.d.ANIMATIONTYPE_VECTOR3:
              Gb = nb.w;
              break;
            case nb.d.ANIMATIONTYPE_VECTOR2:
              Gb = nb.s;
              break;
            case nb.d.ANIMATIONTYPE_SIZE:
              Gb = nb.r;
              break;
            case nb.d.ANIMATIONTYPE_COLOR3:
              Gb = nb.i;
              break;
            case nb.d.ANIMATIONTYPE_COLOR4:
              Gb = nb.m
          }
          const pb = this._host ? this._host.syncRoot : null;
          let ob, Ab = this._playbackFrames,
            lb = !1;
          if (pb) {
            const bb = pb.toFrame - pb.fromFrame,
              hb = pb.masterFrame,
              Bb = (hb - pb.fromFrame) / bb;
            Yb = ub + Hb * Bb;
            const Ob = pb.getAnimations()[0];
            if (Ob && 0 !== bb) {
              const bb = Hb * Bb,
                ub = Ob._playbackTo - Ob._playbackFrom;
              if (0 !== ub && Ob._playbackFrom <= pb.fromFrame && Ob._playbackTo >= pb.toFrame) {
                Ab = Hb * Math.round((Ob._playbackFrames - (Ob._currentFrame - Ob._playbackFrom)) / ub) + bb
              } else lb = (hb - this._playbackSyncMasterFrame) * (Ob._playbackFrames - this._playbackSyncMasterPlayed) < 0, Ab = bb;
              lb = lb || Ob._playbackJumped, this._playbackSyncMasterPlayed = Ob._playbackFrames, this._playbackSyncMasterFrame = hb
            }
          } else Yb = Lb > 0 && ub > hb || Lb < 0 && ub < hb ? Sb && 0 !== Hb ? hb + Lb % Hb : ub : Sb && 0 !== Hb ? ub + Lb % Hb : hb;
          if (!Xb && (Ob > 0 && this.currentFrame > Yb || Ob < 0 && this.currentFrame < Yb) || Xb && Zb) {
            this._onLoop();
            for (let bb = 0; bb < ab.length; bb++) ab[bb].onlyOnce || (ab[bb].isDone = !1);
            this._animationState.key = Ob > 0 ? 0 : Ub.getKeys().length - 1
          }
          if (this._currentFrame = Yb, this._animationState.repeatCount = 0 === Hb ? 0 : Lb / Hb | 0, this._animationState.highLimitValue = wb, this._animationState.offsetValue = Gb, this._playbackFrom = ub, this._playbackTo = hb, this._playbackJumped = lb, this._playbackSyncRoot = pb, pb) ob = Ab;
          else if (Sb) ob = Xb ? Yb === ub && Lb === hb ? Hb : Yb - ub : Lb;
          else {
            const bb = 0 !== Hb ? Math.floor(this._playbackFrames / Hb) : 0;
            ob = (Yb === hb ? bb + 1 : bb) * Hb
          }
          this._playbackFrames = ob, this._playbackProgress = this._animationState.pb === nb.d.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Hb : ob
        }
        const wb = Ub._interpolate(Yb, this._animationState);
        if (this.setValue(wb, Gb), ab.length)
          for (let Zb = 0; Zb < ab.length; Zb++)
            if (Hb >= 0 && Yb >= ab[Zb].frame && ab[Zb].frame >= ub || Hb < 0 && Yb <= ab[Zb].frame && ab[Zb].frame <= ub) {
              const bb = ab[Zb];
              bb.isDone || (bb.onlyOnce && (ab.splice(Zb, 1), Zb--), bb.isDone = !0, bb.action(Yb))
            } return Sb || (this._stopped = !0), Sb
      }
    }
    var xb = hb(39352);
    class zb {
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
        for (let ub = 0; ub < this._runtimeAnimations.length; ub++) {
          this._runtimeAnimations[ub]._prepareForSpeedRatioChange(bb)
        }
        this._speedRatio = bb, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Gb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Lb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 ? arguments[7] : void 0,
          Sb = arguments.length > 8 ? arguments[8] : void 0,
          ab = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Hb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = ub, this.fromFrame = hb, this.toFrame = Bb, this.loopAnimation = Gb, this.onAnimationEnd = Lb, this.onAnimationLoop = Sb, this.isAdditive = ab, this.playOrder = Hb, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.DW = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new Ob.e, this.onAnimationLoopObservable = new Ob.e, this._scene = bb, Yb && this.appendAnimations(ub, Yb), this._speedRatio = Ub, bb._activeAnimatables.push(this)
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
      appendAnimations(bb, ub) {
        for (let hb = 0; hb < ub.length; hb++) {
          const Bb = ub[hb],
            Ob = new Db(bb, Bb, this._scene, this);
          Ob._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(Ob)
        }
      }
      getAnimationByTargetProperty(bb) {
        const ub = this._runtimeAnimations;
        for (let hb = 0; hb < ub.length; hb++)
          if (ub[hb].animation.targetProperty === bb) return ub[hb].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(bb) {
        const ub = this._runtimeAnimations;
        for (let hb = 0; hb < ub.length; hb++)
          if (ub[hb].animation.targetProperty === bb) return ub[hb];
        return null
      }
      reset() {
        const bb = this._runtimeAnimations;
        for (let ub = 0; ub < bb.length; ub++) bb[ub].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(bb) {
        const ub = this._runtimeAnimations;
        for (let hb = 0; hb < ub.length; hb++) ub[hb].animation.enableBlending = !0, ub[hb].animation.blendingSpeed = bb
      }
      disableBlending() {
        const bb = this._runtimeAnimations;
        for (let ub = 0; ub < bb.length; ub++) bb[ub].animation.enableBlending = !1
      }
      goToFrame(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = this._runtimeAnimations;
        if (hb[0]) {
          const ub = hb[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? hb[0].currentFrame;
          const Bb = 0 === this.speedRatio ? 0 : (bb - this._frameToSyncFromJump) / ub * 1e3 / this.speedRatio;
          this._manualJumpDelay = -Bb
        }
        for (let Bb = 0; Bb < hb.length; Bb++) hb[Bb].goToFrame(bb, ub ? this._weight : -1);
        this._goToFrame = bb
      }
      get paused() {
        return this.DW
      }
      pause() {
        this.DW || (this.DW = !0)
      }
      restart() {
        this.DW = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (bb || ub) {
          const Ob = this._scene._activeAnimatables.indexOf(this);
          if (Ob > -1) {
            const Gb = this._runtimeAnimations;
            for (let hb = Gb.length - 1; hb >= 0; hb--) {
              const Bb = Gb[hb];
              bb && Bb.animation.name != bb || (ub && !ub(Bb.target) || (Bb.dispose(), Gb.splice(hb, 1)))
            }
            0 == Gb.length && (hb || this._scene._activeAnimatables.splice(Ob, 1), Bb || this._raiseOnAnimationEnd())
          }
        } else {
          const bb = this._scene._activeAnimatables.indexOf(this);
          if (bb > -1) {
            hb || this._scene._activeAnimatables.splice(bb, 1);
            const ub = this._runtimeAnimations;
            for (let bb = 0; bb < ub.length; bb++) ub[bb].dispose();
            this._runtimeAnimations.length = 0, Bb || this._raiseOnAnimationEnd()
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
        if (this.DW) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = bb), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = bb, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += bb - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !zb.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let ub = !1;
        const hb = this._runtimeAnimations;
        let Bb;
        for (Bb = 0; Bb < hb.length; Bb++) {
          const Ob = hb[Bb].animate(bb - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          ub = ub || Ob
        }
        if (this.animationStarted = ub, !ub) {
          if (this.disposeOnEnd)
            for (Bb = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(Bb, 1), Bb = 0; Bb < hb.length; Bb++) hb[Bb].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return ub
      }
    }

    function gb(bb) {
      if (0 === bb.totalWeight && 0 === bb.totalAdditiveWeight) return bb.originalValue;
      let ub = 1;
      const hb = Gb.i.YX[0],
        Bb = Gb.i.YX[1],
        Ob = Gb.i.Quaternion[0];
      let Ub = 0;
      const Lb = bb.animations[0],
        Yb = bb.originalValue;
      let Sb, ab = !1;
      if (bb.totalWeight < 1) Sb = 1 - bb.totalWeight, Yb.decompose(Bb, Ob, hb);
      else {
        if (Ub = 1, ub = bb.totalWeight, Sb = Lb.weight / ub, 1 == Sb) {
          if (!bb.totalAdditiveWeight) return Lb.currentValue;
          ab = !0
        }
        Lb.currentValue.decompose(Bb, Ob, hb)
      }
      if (!ab) {
        Bb.scaleInPlace(Sb), hb.scaleInPlace(Sb), Ob.scaleInPlace(Sb);
        for (let Lb = Ub; Lb < bb.animations.length; Lb++) {
          const Ub = bb.animations[Lb];
          if (0 === Ub.weight) continue;
          Sb = Ub.weight / ub;
          const Yb = Gb.i.YX[2],
            ab = Gb.i.YX[3],
            Hb = Gb.i.Quaternion[1];
          Ub.currentValue.decompose(ab, Hb, Yb), ab.scaleAndAddToRef(Sb, Bb), Hb.scaleAndAddToRef(Gb.f.Dot(Ob, Hb) > 0 ? Sb : -Sb, Ob), Yb.scaleAndAddToRef(Sb, hb)
        }
        Ob.normalize()
      }
      for (let wb = 0; wb < bb.additiveAnimations.length; wb++) {
        const ub = bb.additiveAnimations[wb];
        if (0 === ub.weight) continue;
        const Ub = Gb.i.YX[2],
          Lb = Gb.i.YX[3],
          Yb = Gb.i.Quaternion[1];
        ub.currentValue.decompose(Lb, Yb, Ub), Lb.multiplyToRef(Bb, Lb), Gb.q.LerpToRef(Bb, Lb, ub.weight, Bb), Ob.multiplyToRef(Yb, Yb), Gb.f.SlerpToRef(Ob, Yb, ub.weight, Ob), Ub.scaleAndAddToRef(ub.weight, hb)
      }
      const Hb = Lb ? Lb._animationState.workValue : Gb.i.Matrix[0].clone();
      return Gb.d.ComposeToRef(Bb, Ob, hb, Hb), Hb
    }

    function ib(bb, ub) {
      if (0 === bb.totalWeight && 0 === bb.totalAdditiveWeight) return ub;
      const hb = bb.animations[0],
        Bb = bb.originalValue;
      let Ob = ub;
      if (0 === bb.totalWeight && bb.totalAdditiveWeight > 0) Ob.mD(Bb);
      else if (1 === bb.animations.length) {
        if (Gb.f.SlerpToRef(Bb, hb.currentValue, Math.min(1, bb.totalWeight), Ob), 0 === bb.totalAdditiveWeight) return Ob
      } else if (bb.animations.length > 1) {
        let hb, Ub, Lb = 1;
        if (bb.totalWeight < 1) {
          const ub = 1 - bb.totalWeight;
          hb = [], Ub = [], hb.push(Bb), Ub.push(ub)
        } else {
          if (2 === bb.animations.length && (Gb.f.SlerpToRef(bb.animations[0].currentValue, bb.animations[1].currentValue, bb.animations[1].weight / bb.totalWeight, ub), 0 === bb.totalAdditiveWeight)) return ub;
          hb = [], Ub = [], Lb = bb.totalWeight
        }
        for (let ub = 0; ub < bb.animations.length; ub++) {
          const Bb = bb.animations[ub];
          hb.push(Bb.currentValue), Ub.push(Bb.weight / Lb)
        }
        let Yb = 0;
        for (let bb = 0; bb < hb.length;) bb ? (Yb += Ub[bb], Gb.f.SlerpToRef(Ob, hb[bb], Ub[bb] / Yb, Ob), bb++) : (Gb.f.SlerpToRef(hb[bb], hb[bb + 1], Ub[bb + 1] / (Ub[bb] + Ub[bb + 1]), ub), Ob = ub, Yb = Ub[bb] + Ub[bb + 1], bb += 2)
      }
      for (let Ub = 0; Ub < bb.additiveAnimations.length; Ub++) {
        const ub = bb.additiveAnimations[Ub];
        0 !== ub.weight && (Ob.multiplyToRef(ub.currentValue, Gb.i.Quaternion[0]), Gb.f.SlerpToRef(Ob, Gb.i.Quaternion[0], ub.weight, Ob))
      }
      return Ob
    }

    function vb(bb, ub) {
      ub && (ub.prototype.copyAnimationRange = function(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new nb.d(this.name, "_matrix", bb.animations[0].framePerSecond, nb.d.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Gb = bb.animations[0].getRange(ub);
        if (!Gb) return !1;
        const Ub = Gb.from,
          Lb = Gb.to,
          Yb = bb.animations[0].getKeys(),
          Sb = bb.length,
          ab = bb.getParent(),
          Hb = this.getParent(),
          wb = Bb && ab && Sb && this.length && Sb !== this.length,
          Zb = wb && Hb && ab ? Hb.length / ab.length : 1,
          Xb = Bb && !Hb && Ob && (1 !== Ob.x || 1 !== Ob.y || 1 !== Ob.z),
          pb = this.animations[0].getKeys();
        let ob, Ab, lb;
        for (let Kb = 0, Wb = Yb.length; Kb < Wb; Kb++) ob = Yb[Kb], ob.frame >= Ub && ob.frame <= Lb && (Bb ? (lb = ob.value.clone(), wb ? (Ab = lb.getTranslation(), lb.setTranslation(Ab.scaleInPlace(Zb))) : Xb && Ob ? (Ab = lb.getTranslation(), lb.setTranslation(Ab.multiplyInPlace(Ob))) : lb = ob.value) : lb = ob.value, pb.push({
          frame: ob.frame + hb,
          value: lb
        }));
        return this.animations[0].createRange(ub, Ub + hb, Lb + hb), !0
      }), bb && (bb.prototype._animate = function(bb) {
        const ub = this._animationWrites,
          hb = this._animationWriteCount;
        let Bb = 0;
        for (let Gb = this._animationStepWriteCount; Gb < hb; Gb++) {
          const bb = ub[Gb];
          bb.mp && -1 === bb.weight || (bb.mp = !0, ub[Gb] = ub[Bb], ub[Bb] = bb, Bb++)
        }
        for (let Gb = Bb; Gb < hb; Gb++) {
          const bb = ub[Gb];
          bb.runtimeAnimation = null, bb.target = null
        }
        if (this._animationWriteCount = Bb, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const Ob = xb.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = Ob
        }
        this.deltaTime = void 0 !== bb ? bb : this.useConstantAnimationDeltaTime ? 16 : (Ob - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = Ob;
        const Ub = this._activeAnimatables;
        if (0 === Ub.length) return;
        this._animationTime += this.deltaTime;
        const Lb = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Gb = 0; Gb < Ub.length; Gb++) {
          const bb = Ub[Gb];
          !bb._animate(Lb) && bb.disposeOnEnd && Gb--
        }! function(bb) {
          if (bb._registeredForLateAnimationBindings.length) {
            for (let ub = 0; ub < bb._registeredForLateAnimationBindings.length; ub++) {
              const hb = bb._registeredForLateAnimationBindings.data[ub];
              for (const bb in hb._lateAnimationHolders) {
                const ub = hb._lateAnimationHolders[bb],
                  Bb = ub.animations[0],
                  Ob = ub.originalValue;
                if (void 0 === Ob || null === Ob) continue;
                const Ub = nb.d.AllowMatrixDecomposeForInterpolation && Ob.m;
                let Lb = hb[bb];
                if (Ub) Lb = gb(ub);
                else if (void 0 !== Ob.w) Lb = ib(ub, Lb || Gb.f.Identity());
                else {
                  let bb = 0,
                    hb = 1;
                  const Gb = Bb && Bb._animationState.pb === nb.d.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (ub.totalWeight < 1) Lb = Gb ? Ob.clone ? Ob.clone() : Ob : Bb && Ob.scale ? Ob.scale(1 - ub.totalWeight) : Bb ? Ob * (1 - ub.totalWeight) : Ob.clone ? Ob.clone() : Ob;
                  else if (Bb) {
                    hb = ub.totalWeight;
                    const Ub = Bb.weight / hb;
                    Lb = 1 !== Ub ? Bb.currentValue.scale ? Bb.currentValue.scale(Ub) : Bb.currentValue * Ub : (ub.animations.length > 1 || ub.additiveAnimations.length > 0) && Bb.currentValue.clone ? Bb.currentValue.clone() : Bb.currentValue, Gb && (Lb.addToRef ? Lb.addToRef(Ob, Lb) : Lb += Ob), bb = 1
                  }
                  for (let Bb = bb; Bb < ub.animations.length; Bb++) {
                    const bb = ub.animations[Bb],
                      Ob = bb.weight / hb;
                    Ob && (bb.currentValue.scaleAndAddToRef ? bb.currentValue.scaleAndAddToRef(Ob, Lb) : Lb += bb.currentValue * Ob)
                  }
                  for (let Bb = 0; Bb < ub.additiveAnimations.length; Bb++) {
                    const bb = ub.additiveAnimations[Bb],
                      hb = bb.weight;
                    hb && (bb.currentValue.scaleAndAddToRef ? bb.currentValue.scaleAndAddToRef(hb, Lb) : Lb += bb.currentValue * hb)
                  }
                }
                hb[bb] = Lb
              }
              hb._lateAnimationHolders = {}
            }
            bb._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, bb.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((bb, ub) => bb.playOrder - ub.playOrder))
      }, bb.prototype.beginWeightedAnimation = function(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Lb = arguments.length > 7 ? arguments[7] : void 0,
          Yb = arguments.length > 8 ? arguments[8] : void 0,
          Sb = arguments.length > 9 ? arguments[9] : void 0,
          ab = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Hb = this.beginAnimation(bb, ub, hb, Ob, Gb, Ub, Lb, !1, Yb, Sb, ab);
        return Hb.weight = Bb, Hb
      }, bb.prototype.beginAnimation = function(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Gb = arguments.length > 5 ? arguments[5] : void 0,
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Lb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Yb = arguments.length > 8 ? arguments[8] : void 0,
          Sb = arguments.length > 9 ? arguments[9] : void 0,
          ab = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (Ob < 0) {
          const bb = ub;
          ub = hb, hb = bb, Ob = -Ob
        }
        ub > hb && (Ob = -Ob), Lb && this.stopAnimation(bb, void 0, Yb), Ub || (Ub = new zb(this, bb, ub, hb, Bb, Ob, Gb, void 0, Sb, ab));
        const Hb = !Yb || Yb(bb);
        if (bb.animations && Hb && Ub.appendAnimations(bb, bb.animations), bb.getAnimatables) {
          const ab = bb.getAnimatables();
          for (let bb = 0; bb < ab.length; bb++) this.beginAnimation(ab[bb], ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb)
        }
        return Ub.reset(), Ub
      }, bb.prototype.beginHierarchyAnimation = function(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Lb = arguments.length > 7 ? arguments[7] : void 0,
          Yb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Sb = arguments.length > 9 ? arguments[9] : void 0,
          ab = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Hb = bb.getDescendants(ub),
          wb = [];
        wb.push(this.beginAnimation(bb, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, void 0, ab));
        for (const Zb of Hb) wb.push(this.beginAnimation(Zb, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, void 0, ab));
        return wb
      }, bb.prototype.beginDirectAnimation = function(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Gb < 0) {
          const bb = hb;
          hb = Bb, Bb = bb, Gb = -Gb
        }
        hb > Bb && (Gb = -Gb);
        return new zb(this, bb, hb, Bb, Ob, Gb, arguments.length > 6 ? arguments[6] : void 0, ub, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, bb.prototype.beginDirectHierarchyAnimation = function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        let Sb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const ab = bb.getDescendants(ub),
          Hb = [];
        Hb.push(this.beginDirectAnimation(bb, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb));
        for (const wb of ab) Hb.push(this.beginDirectAnimation(wb, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb));
        return Hb
      }, bb.prototype.getAnimatableByTarget = function(bb) {
        for (let ub = 0; ub < this._activeAnimatables.length; ub++)
          if (this._activeAnimatables[ub].target === bb) return this._activeAnimatables[ub];
        return null
      }, bb.prototype.getAllAnimatablesByTarget = function(bb) {
        const ub = [];
        for (let hb = 0; hb < this._activeAnimatables.length; hb++) this._activeAnimatables[hb].target === bb && ub.push(this._activeAnimatables[hb]);
        return ub
      }, bb.prototype.stopAnimation = function(bb, ub, hb) {
        const Bb = this.getAllAnimatablesByTarget(bb);
        for (const Ob of Bb) Ob.stop(ub, hb)
      }, bb.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let bb = 0; bb < this._activeAnimatables.length; bb++) this._activeAnimatables[bb].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const bb of this.animationGroups) bb.stop()
      })
    }
    zb.ProcessPausedAnimatables = !1;
    var tb, Jb = hb(36736),
      eb = hb(39670),
      Nb = hb(39333);
    class sb extends eb.b {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(bb) {
        (bb.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.mD(bb), this._markAsDirtyAndDecompose())
      }
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(bb, ub.ZN(), !1), this.name = bb, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = ub, this._localMatrix = Bb?.clone() ?? Gb.d.Identity(), this._restMatrix = Ob ?? this._localMatrix.clone(), this._bindMatrix = Ub ?? this._localMatrix.clone(), this._index = Lb, this._absoluteMatrix = new Gb.d, this._absoluteBindMatrix = new Gb.d, this._absoluteInverseBindMatrix = new Gb.d, this._finalMatrix = new Gb.d, ub.bones.push(this), this.setParent(hb, !1), this._updateAbsoluteBindMatrices()
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
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== bb) {
          if (this.parent) {
            const bb = this.parent.children.indexOf(this); - 1 !== bb && this.parent.children.splice(bb, 1)
          }
          this._parentNode = bb, this.parent && this.parent.children.push(this), ub && this._updateAbsoluteBindMatrices(), this.yub()
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
        this._restMatrix.mD(bb)
      }
      setRestPose(bb) {
        this.setRestMatrix(bb)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(bb) {
        this.S_(bb)
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
          const bb = Gb.i.YX[0],
            ub = Gb.i.Quaternion[0],
            hb = Gb.i.YX[1];
          this.getRestMatrix().decompose(bb, ub, hb), this._linkedTransformNode.position.mD(hb), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Gb.f.Identity(), this._linkedTransformNode.rotationQuaternion.mD(ub), this._linkedTransformNode.pa.mD(bb)
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
        return this._decompose(), this.Rbb
      }
      set position(bb) {
        this._decompose(), this.Rbb.mD(bb), this._markAsDirtyAndCompose()
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
      get pa() {
        return this.getScale()
      }
      set pa(bb) {
        this.setScale(bb)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Gb.q.Zero(), this._localRotation = Gb.f.Zero(), this.Rbb = Gb.q.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.Rbb))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Gb.d.ComposeToRef(this._localScaling, this._localRotation, this.Rbb, this._localMatrix)) : this._needToCompose = !1)
      }
      S_(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.mD(bb), ub && this._updateAbsoluteBindMatrices(), hb ? this._matrix = bb : this.yub()
      }
      _updateAbsoluteBindMatrices(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (bb || (bb = this._bindMatrix), this.parent ? bb.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.mD(bb), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), ub)
          for (let hb = 0; hb < this.children.length; hb++) this.children[hb]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      yub() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.yub(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.yub(), this._needToDecompose = !0
      }
      _updatePosition(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ob = this.getLocalMatrix();
        if (0 == ub) Bb ? (Ob.addAtIndex(12, bb.x), Ob.addAtIndex(13, bb.y), Ob.addAtIndex(14, bb.z)) : Ob.setTranslationFromFloats(bb.x, bb.y, bb.z);
        else {
          const ub = sb._TmpMats[0],
            Ub = sb._TmpVecs[0];
          this.parent ? (ub.mD(this.parent.getAbsoluteMatrix()), hb && ub.multiplyToRef(hb.getWorldMatrix(), ub)) : Gb.d.IdentityToRef(ub), Bb && ub.setTranslationFromFloats(0, 0, 0), ub.invert(), Gb.q.TransformCoordinatesToRef(bb, ub, Ub), Bb ? (Ob.addAtIndex(12, Ub.x), Ob.addAtIndex(13, Ub.y), Ob.addAtIndex(14, Ub.z)) : Ob.setTranslationFromFloats(Ub.x, Ub.y, Ub.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(bb, ub, hb, !0)
      }
      setPosition(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(bb, ub, hb, !1)
      }
      setAbsolutePosition(bb, ub) {
        this.setPosition(bb, 1, ub)
      }
      scale(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ob = this.getLocalMatrix(),
          Ub = sb._TmpMats[0];
        Gb.d.ScalingToRef(bb, ub, hb, Ub), Ub.multiplyToRef(Ob, Ob), Ub.invert();
        for (const Gb of this.children) {
          const Bb = Gb.getLocalMatrix();
          Bb.multiplyToRef(Ub, Bb), Bb.multiplyAtIndex(12, bb), Bb.multiplyAtIndex(13, ub), Bb.multiplyAtIndex(14, hb), Gb._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), Bb)
          for (const Gb of this.children) Gb.scale(bb, ub, hb, Bb)
      }
      setScale(bb) {
        this._decompose(), this._localScaling.mD(bb), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(bb) {
        this._decompose(), bb.mD(this._localScaling)
      }
      setYawPitchRoll(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === Bb) {
          const Ub = sb._TmpQuat;
          return Gb.f.RotationYawPitchRollToRef(bb, ub, hb, Ub), void this.setRotationQuaternion(Ub, Bb, Ob)
        }
        const Ub = sb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ub, Ob)) return;
        const Lb = sb._TmpMats[1];
        Gb.d.RotationYawPitchRollToRef(bb, ub, hb, Lb), Ub.multiplyToRef(Lb, Lb), this._rotateWithMatrix(Lb, Bb, Ob)
      }
      rotate(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        const Ob = sb._TmpMats[0];
        Ob.setTranslationFromFloats(0, 0, 0), Gb.d.RotationAxisToRef(bb, ub, Ob), this._rotateWithMatrix(Ob, hb, Bb)
      }
      setAxisAngle(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === hb) {
          const Ob = sb._TmpQuat;
          return Gb.f.RotationAxisToRef(bb, ub, Ob), void this.setRotationQuaternion(Ob, hb, Bb)
        }
        const Ob = sb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ob, Bb)) return;
        const Ub = sb._TmpMats[1];
        Gb.d.RotationAxisToRef(bb, ub, Ub), Ob.multiplyToRef(Ub, Ub), this._rotateWithMatrix(Ub, hb, Bb)
      }
      setRotation(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(bb.y, bb.x, bb.z, ub, hb)
      }
      setRotationQuaternion(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ub) return this._decompose(), this._localRotation.mD(bb), void this._markAsDirtyAndCompose();
        const Bb = sb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Bb, hb)) return;
        const Ob = sb._TmpMats[1];
        Gb.d.FromQuaternionToRef(bb, Ob), Bb.multiplyToRef(Ob, Ob), this._rotateWithMatrix(Ob, ub, hb)
      }
      setRotationMatrix(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ub) {
          const Bb = sb._TmpQuat;
          return Gb.f.FromRotationMatrixToRef(bb, Bb), void this.setRotationQuaternion(Bb, ub, hb)
        }
        const Bb = sb._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Bb, hb)) return;
        const Ob = sb._TmpMats[1];
        Ob.mD(bb), Bb.multiplyToRef(bb, Ob), this._rotateWithMatrix(Ob, ub, hb)
      }
      _rotateWithMatrix(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Bb = this.getLocalMatrix(),
          Ob = Bb.m[12],
          Gb = Bb.m[13],
          Ub = Bb.m[14],
          Lb = this.getParent(),
          Yb = sb._TmpMats[3],
          Sb = sb._TmpMats[4];
        Lb && 1 == ub ? (hb ? (Yb.mD(hb.getWorldMatrix()), Lb.getAbsoluteMatrix().multiplyToRef(Yb, Yb)) : Yb.mD(Lb.getAbsoluteMatrix()), Sb.mD(Yb), Sb.invert(), Bb.multiplyToRef(Yb, Bb), Bb.multiplyToRef(bb, Bb), Bb.multiplyToRef(Sb, Bb)) : 1 == ub && hb ? (Yb.mD(hb.getWorldMatrix()), Sb.mD(Yb), Sb.invert(), Bb.multiplyToRef(Yb, Bb), Bb.multiplyToRef(bb, Bb), Bb.multiplyToRef(Sb, Bb)) : Bb.multiplyToRef(bb, Bb), Bb.setTranslationFromFloats(Ob, Gb, Ub), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(bb, ub) {
        const hb = sb._TmpMats[2];
        return bb.mD(this.getAbsoluteMatrix()), ub ? (bb.multiplyToRef(ub.getWorldMatrix(), bb), Gb.d.ScalingToRef(ub.pa.x, ub.pa.y, ub.pa.z, hb)) : Gb.d.IdentityToRef(hb), bb.invert(), !isNaN(bb.m[0]) && (hb.multiplyAtIndex(0, this._scalingDeterminant), bb.multiplyToRef(hb, bb), !0)
      }
      iK() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const hb = Gb.q.Zero();
        return this.getPositionToRef(bb, ub, hb), hb
      }
      getPositionToRef() {
        let bb = arguments.length > 1 ? arguments[1] : void 0,
          ub = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const bb = this.getLocalMatrix();
          ub.x = bb.m[12], ub.y = bb.m[13], ub.z = bb.m[14]
        } else {
          const hb = sb._TmpMats[0].mD(this.getAbsoluteMatrix());
          bb && hb.multiplyToRef(bb.getWorldMatrix(), hb), ub.x = hb.m[12], ub.y = hb.m[13], ub.z = hb.m[14]
        }
      }
      getAbsolutePosition() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const ub = Gb.q.Zero();
        return this.getPositionToRef(1, bb, ub), ub
      }
      getAbsolutePositionToRef(bb, ub) {
        this.getPositionToRef(1, bb, ub)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.mD(this._localMatrix);
          const bb = this._skeleton.getPoseMatrix();
          bb && this._absoluteMatrix.multiplyToRef(bb, this._absoluteMatrix)
        }
        const bb = this.children,
          ub = bb.length;
        for (let hb = 0; hb < ub; hb++) bb[hb].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      Zk(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const hb = Gb.q.Zero();
        return this.getDirectionToRef(bb, ub, hb), hb
      }
      getDirectionToRef(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Bb = sb._TmpMats[0].mD(this.getAbsoluteMatrix());
        ub && Bb.multiplyToRef(ub.getWorldMatrix(), Bb), Gb.q.TransformNormalToRef(bb, Bb, hb), hb.normalize()
      }
      getRotation() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const hb = Gb.q.Zero();
        return this.getRotationToRef(bb, ub, hb), hb
      }
      getRotationToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Bb = sb._TmpQuat;
        this.getRotationQuaternionToRef(bb, ub, Bb), Bb.toEulerAnglesToRef(hb)
      }
      getRotationQuaternion() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const hb = Gb.f.Identity();
        return this.getRotationQuaternionToRef(bb, ub, hb), hb
      }
      getRotationQuaternionToRef() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ub = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), ub.mD(this._localRotation);
        else {
          const hb = sb._TmpMats[0],
            Bb = this.getAbsoluteMatrix();
          bb ? Bb.multiplyToRef(bb.getWorldMatrix(), hb) : hb.mD(Bb), hb.multiplyAtIndex(0, this._scalingDeterminant), hb.multiplyAtIndex(1, this._scalingDeterminant), hb.multiplyAtIndex(2, this._scalingDeterminant), hb.decompose(void 0, ub, void 0)
        }
      }
      getRotationMatrix() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 ? arguments[1] : void 0;
        const hb = Gb.d.Identity();
        return this.getRotationMatrixToRef(bb, ub, hb), hb
      }
      getRotationMatrixToRef() {
        let bb = arguments.length > 1 ? arguments[1] : void 0,
          ub = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(ub);
        else {
          const hb = sb._TmpMats[0],
            Bb = this.getAbsoluteMatrix();
          bb ? Bb.multiplyToRef(bb.getWorldMatrix(), hb) : hb.mD(Bb), hb.multiplyAtIndex(0, this._scalingDeterminant), hb.multiplyAtIndex(1, this._scalingDeterminant), hb.multiplyAtIndex(2, this._scalingDeterminant), hb.getRotationMatrixToRef(ub)
        }
      }
      getAbsolutePositionFromLocal(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const hb = Gb.q.Zero();
        return this.getAbsolutePositionFromLocalToRef(bb, ub, hb), hb
      }
      getAbsolutePositionFromLocalToRef(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Bb = sb._TmpMats[0].mD(this.getAbsoluteMatrix());
        ub && Bb.multiplyToRef(ub.getWorldMatrix(), Bb), Gb.q.TransformCoordinatesToRef(bb, Bb, hb)
      }
      getLocalPositionFromAbsolute(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const hb = Gb.q.Zero();
        return this.getLocalPositionFromAbsoluteToRef(bb, ub, hb), hb
      }
      getLocalPositionFromAbsoluteToRef(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Bb = sb._TmpMats[0].mD(this.getAbsoluteMatrix());
        ub && Bb.multiplyToRef(ub.getWorldMatrix(), Bb), Bb.invert(), Gb.q.TransformCoordinatesToRef(bb, Bb, hb)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const bb = this._skeleton.bones.indexOf(this);
        if (-1 !== bb && this._skeleton.bones.splice(bb, 1), this._parentNode && this._parentNode.children) {
          const bb = this._parentNode.children,
            ub = bb.indexOf(this); - 1 !== ub && bb.splice(ub, 1)
        }
        super.dispose()
      }
    }
    sb._TmpVecs = (0, Jb.e)(2, Gb.q.Zero), sb._TmpQuat = Gb.f.Identity(), sb._TmpMats = (0, Jb.e)(5, Gb.d.Identity), (tb = sb.prototype).copyAnimationRange ?? (tb.copyAnimationRange = (0, Nb.j)("Bone", "copyAnimationRange"));
    var Mb = hb(39551);
    let mb = !1;
    var Ib = hb(39427),
      Pb = hb(39765),
      qb = hb(39782),
      Eb = hb(39773),
      yb = hb(39593);

    function Vb(bb, ub) {
      const hb = (0, Zb.RandomRange)(0, 1);
      ab.c.LerpToRef(ub.color1, ub.color2, hb, bb.color)
    }

    function Fb(bb, ub) {
      ub.colorDead.subtractToRef(bb.color, ub._colorDiff), ub._colorDiff.scaleToRef(1 / bb.lifeTime, bb.colorStep)
    }

    function fb(bb, ub) {
      bb._properties.currentColorGradient = ub._colorGradients[0], bb._properties.currentColorGradient.getColorToRef(bb.color), bb._properties.currentColor1.mD(bb.color), ub._colorGradients.length > 1 ? ub._colorGradients[1].getColorToRef(bb._properties.currentColor2) : bb._properties.currentColor2.mD(bb.color)
    }

    function kb(bb, ub) {
      const hb = ub._colorGradients;
      Bb.k.GetCurrentGradient(ub._ratio, hb, ((ub, hb, Bb) => {
        ub !== bb._properties.currentColorGradient && (bb._properties.currentColor1.mD(bb._properties.currentColor2), hb.getColorToRef(bb._properties.currentColor2), bb._properties.currentColorGradient = ub), ab.c.LerpToRef(bb._properties.currentColor1, bb._properties.currentColor2, Bb, bb.color), bb.color.a < 0 && (bb.color.a = 0)
      }))
    }

    function Tb(bb, ub) {
      bb.colorStep.scaleToRef(ub._scaledUpdateSpeed, ub._scaledColorStep), bb.color.addInPlace(ub._scaledColorStep), bb.color.a < 0 && (bb.color.a = 0)
    }

    function cb(bb, ub) {
      Bb.k.GetCurrentGradient(ub._ratio, ub._angularSpeedGradients, ((ub, hb, Bb) => {
        ub !== bb._properties.currentAngularSpeedGradient && (bb._properties.currentAngularSpeed1 = bb._properties.currentAngularSpeed2, bb._properties.currentAngularSpeed2 = hb.getFactor(), bb._properties.currentAngularSpeedGradient = ub), bb.angularSpeed = (0, Zb.Lerp)(bb._properties.currentAngularSpeed1, bb._properties.currentAngularSpeed2, Bb)
      }))
    }

    function Qb(bb, ub) {
      bb.angle += bb.angularSpeed * ub._scaledUpdateSpeed
    }

    function Rb(bb, ub) {
      ub.particleEmitterType.startDirectionFunction(ub._emitterWorldMatrix, bb.direction, bb, ub.isLocal, ub._emitterInverseWorldMatrix)
    }

    function bu(bb, ub) {
      ub.startDirectionFunction(ub._emitterWorldMatrix, bb.direction, bb, ub.isLocal)
    }

    function uu(bb, ub) {
      bb._properties.currentVelocityGradient = ub._velocityGradients[0], bb._properties.currentVelocity1 = bb._properties.currentVelocityGradient.getFactor(), ub._velocityGradients.length > 1 ? bb._properties.currentVelocity2 = ub._velocityGradients[1].getFactor() : bb._properties.currentVelocity2 = bb._properties.currentVelocity1
    }

    function hu(bb, ub) {
      bb._properties.currentLimitVelocityGradient = ub._limitVelocityGradients[0], bb._properties.currentLimitVelocity1 = bb._properties.currentLimitVelocityGradient.getFactor(), ub._limitVelocityGradients.length > 1 ? bb._properties.currentLimitVelocity2 = ub._limitVelocityGradients[1].getFactor() : bb._properties.currentLimitVelocity2 = bb._properties.currentLimitVelocity1
    }

    function Bu(bb, ub) {
      Bb.k.GetCurrentGradient(ub._ratio, ub._velocityGradients, ((ub, hb, Bb) => {
        ub !== bb._properties.currentVelocityGradient && (bb._properties.currentVelocity1 = bb._properties.currentVelocity2, bb._properties.currentVelocity2 = hb.getFactor(), bb._properties.currentVelocityGradient = ub), bb._properties.directionScale *= (0, Zb.Lerp)(bb._properties.currentVelocity1, bb._properties.currentVelocity2, Bb)
      }))
    }

    function Ou(bb, ub) {
      Bb.k.GetCurrentGradient(ub._ratio, ub._limitVelocityGradients, ((hb, Bb, Ob) => {
        hb !== bb._properties.currentLimitVelocityGradient && (bb._properties.currentLimitVelocity1 = bb._properties.currentLimitVelocity2, bb._properties.currentLimitVelocity2 = Bb.getFactor(), bb._properties.currentLimitVelocityGradient = hb);
        const Gb = (0, Zb.Lerp)(bb._properties.currentLimitVelocity1, bb._properties.currentLimitVelocity2, Ob);
        bb.direction.length() > Gb && bb.direction.scaleInPlace(ub.limitVelocityDamping)
      }))
    }

    function Gu(bb) {
      bb.direction.scaleToRef(bb._properties.directionScale, bb._properties.scaledDirection)
    }

    function Uu(bb, ub) {
      ub.particleEmitterType.startPositionFunction(ub._emitterWorldMatrix, bb.position, bb, ub.isLocal)
    }

    function Lu(bb, ub) {
      ub.startPositionFunction(ub._emitterWorldMatrix, bb.position, bb, ub.isLocal)
    }

    function Yu(bb, ub) {
      bb._properties.localPosition ? bb._properties.localPosition.mD(bb.position) : bb._properties.localPosition = bb.position.clone(), Gb.q.TransformCoordinatesToRef(bb._properties.localPosition, ub._emitterWorldMatrix, bb.position)
    }

    function Su(bb, ub) {
      ub.isLocal && bb._properties.localPosition ? (bb._properties.localPosition.addInPlace(bb._properties.scaledDirection), Gb.q.TransformCoordinatesToRef(bb._properties.localPosition, ub._emitterWorldMatrix, bb.position)) : bb.position.addInPlace(bb._properties.scaledDirection)
    }

    function au(bb, ub) {
      bb._properties.currentDragGradient = ub._dragGradients[0], bb._properties.currentDrag1 = bb._properties.currentDragGradient.getFactor(), ub._dragGradients.length > 1 ? bb._properties.currentDrag2 = ub._dragGradients[1].getFactor() : bb._properties.currentDrag2 = bb._properties.currentDrag1
    }

    function Hu(bb, ub) {
      Bb.k.GetCurrentGradient(ub._ratio, ub._dragGradients, ((ub, hb, Bb) => {
        ub !== bb._properties.currentDragGradient && (bb._properties.currentDrag1 = bb._properties.currentDrag2, bb._properties.currentDrag2 = hb.getFactor(), bb._properties.currentDragGradient = ub);
        const Ob = (0, Zb.Lerp)(bb._properties.currentDrag1, bb._properties.currentDrag2, Bb);
        bb._properties.scaledDirection.scaleInPlace(1 - Ob)
      }))
    }

    function wu(bb, ub) {
      bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2 ? (bb._properties.randomNoiseCoordinates1.M_(Math.random(), Math.random(), Math.random()), bb._properties.randomNoiseCoordinates2.M_(Math.random(), Math.random(), Math.random())) : (bb._properties.randomNoiseCoordinates1 = new Gb.q(Math.random(), Math.random(), Math.random()), bb._properties.randomNoiseCoordinates2 = new Gb.q(Math.random(), Math.random(), Math.random()))
    }

    function Zu(bb, ub) {
      const hb = ub._noiseTextureData,
        Bb = ub._noiseTextureSize;
      if (hb && Bb && bb._properties.randomNoiseCoordinates1 && bb._properties.randomNoiseCoordinates2) {
        const Ob = ub._fetchR(bb._properties.randomNoiseCoordinates1.x, bb._properties.randomNoiseCoordinates1.y, Bb.width, Bb.height, hb),
          Ub = ub._fetchR(bb._properties.randomNoiseCoordinates1.z, bb._properties.randomNoiseCoordinates2.x, Bb.width, Bb.height, hb),
          Lb = ub._fetchR(bb._properties.randomNoiseCoordinates2.y, bb._properties.randomNoiseCoordinates2.z, Bb.width, Bb.height, hb),
          Yb = Gb.i.YX[0],
          Sb = Gb.i.YX[1];
        Yb.M_((2 * Ob - 1) * ub.noiseStrength.x, (2 * Ub - 1) * ub.noiseStrength.y, (2 * Lb - 1) * ub.noiseStrength.z), Yb.scaleToRef(ub._tempScaledUpdateSpeed, Sb), bb.direction.addInPlace(Sb)
      }
    }

    function Xu(bb, ub) {
      ub.gravity.scaleToRef(ub._tempScaledUpdateSpeed, ub._scaledGravity), bb.direction.addInPlace(ub._scaledGravity)
    }

    function pu(bb, ub) {
      bb.size = (0, Zb.RandomRange)(ub.minSize, ub.maxSize), bb.scale.M_((0, Zb.RandomRange)(ub.minScaleX, ub.maxScaleX), (0, Zb.RandomRange)(ub.minScaleY, ub.maxScaleY))
    }

    function ou(bb, ub) {
      bb._properties.currentSizeGradient = ub._sizeGradients[0], bb._properties.currentSize1 = bb._properties.currentSizeGradient.getFactor(), bb.size = bb._properties.currentSize1, ub._sizeGradients.length > 1 ? bb._properties.currentSize2 = ub._sizeGradients[1].getFactor() : bb._properties.currentSize2 = bb._properties.currentSize1, bb.scale.M_((0, Zb.RandomRange)(ub.minScaleX, ub.maxScaleX), (0, Zb.RandomRange)(ub.minScaleY, ub.maxScaleY))
    }

    function Au(bb, ub) {
      const hb = ub._actualFrame / ub.targetStopDuration;
      Bb.k.GetCurrentGradient(hb, ub._startSizeGradients, ((hb, Bb, Ob) => {
        hb !== ub._currentStartSizeGradient && (ub._currentStartSize1 = ub._currentStartSize2, ub._currentStartSize2 = Bb.getFactor(), ub._currentStartSizeGradient = hb);
        const Gb = (0, Zb.Lerp)(ub._currentStartSize1, ub._currentStartSize2, Ob);
        bb.scale.scaleInPlace(Gb)
      }))
    }

    function lu(bb, ub) {
      Bb.k.GetCurrentGradient(ub._ratio, ub._sizeGradients, ((ub, hb, Bb) => {
        ub !== bb._properties.currentSizeGradient && (bb._properties.currentSize1 = bb._properties.currentSize2, bb._properties.currentSize2 = hb.getFactor(), bb._properties.currentSizeGradient = ub), bb.size = (0, Zb.Lerp)(bb._properties.currentSize1, bb._properties.currentSize2, Bb)
      }))
    }

    function Ku(bb, ub) {
      bb.remapData = new Gb.r(0, 1, 0, 1)
    }

    function Wu(bb, ub) {
      ub._colorRemapGradients && ub._colorRemapGradients.length > 0 && Bb.k.GetCurrentGradient(ub._ratio, ub._colorRemapGradients, ((ub, hb, Bb) => {
        const Ob = (0, Zb.Lerp)(ub.factor1, hb.factor1, Bb),
          Gb = (0, Zb.Lerp)(ub.factor2, hb.factor2, Bb);
        bb.remapData.x = Ob, bb.remapData.y = Gb - Ob
      })), ub._alphaRemapGradients && ub._alphaRemapGradients.length > 0 && Bb.k.GetCurrentGradient(ub._ratio, ub._alphaRemapGradients, ((ub, hb, Bb) => {
        const Ob = (0, Zb.Lerp)(ub.factor1, hb.factor1, Bb),
          Gb = (0, Zb.Lerp)(ub.factor2, hb.factor2, Bb);
        bb.remapData.z = Ob, bb.remapData.w = Gb - Ob
      }))
    }

    function Cu(bb, ub) {
      const hb = (0, Zb.Clamp)(ub._actualFrame / ub.targetStopDuration);
      Bb.k.GetCurrentGradient(hb, ub._lifeTimeGradients, ((ub, Bb) => {
        const Ob = ub,
          Gb = Bb,
          Ub = Ob.getFactor(),
          Lb = Gb.getFactor(),
          Yb = (hb - Ob.gradient) / (Gb.gradient - Ob.gradient);
        bb.lifeTime = (0, Zb.Lerp)(Ub, Lb, Yb)
      })), ub._emitPower = (0, Zb.RandomRange)(ub.minEmitPower, ub.maxEmitPower)
    }

    function du(bb, ub) {
      bb.lifeTime = (0, Zb.RandomRange)(ub.minLifeTime, ub.maxLifeTime), ub._emitPower = (0, Zb.RandomRange)(ub.minEmitPower, ub.maxEmitPower)
    }

    function ru(bb, ub) {
      0 === ub._emitPower ? (bb._properties.initialDirection ? bb._properties.initialDirection.mD(bb.direction) : bb._properties.initialDirection = bb.direction.clone(), bb.direction.set(0, 0, 0)) : (bb._properties.initialDirection = null, bb.direction.scaleInPlace(ub._emitPower)), bb.direction.addInPlace(ub._inheritedVelocityOffset)
    }

    function ju(bb, ub) {
      bb.angularSpeed = (0, Zb.RandomRange)(ub.minAngularSpeed, ub.maxAngularSpeed), bb.angle = (0, Zb.RandomRange)(ub.minInitialRotation, ub.maxInitialRotation)
    }

    function nu(bb, ub) {
      bb._properties.currentAngularSpeedGradient = ub._angularSpeedGradients[0], bb.angularSpeed = bb._properties.currentAngularSpeedGradient.getFactor(), bb._properties.currentAngularSpeed1 = bb.angularSpeed, ub._angularSpeedGradients.length > 1 ? bb._properties.currentAngularSpeed2 = ub._angularSpeedGradients[1].getFactor() : bb._properties.currentAngularSpeed2 = bb._properties.currentAngularSpeed1, bb.angle = (0, Zb.RandomRange)(ub.minInitialRotation, ub.maxInitialRotation)
    }

    function Du(bb, ub) {
      bb._properties.initialStartSpriteCellId = ub.startSpriteCellID, bb._properties.initialEndSpriteCellId = ub.endSpriteCellID, bb._properties.initialSpriteCellLoop = ub.spriteCellLoop
    }

    function xu(bb, ub) {
      bb.previousItem = ub.previousItem, bb.nextItem = ub, ub.previousItem && (ub.previousItem.nextItem = bb), ub.previousItem = bb
    }

    function zu(bb, ub) {
      bb.previousItem = ub, bb.nextItem = ub.nextItem, ub.nextItem && (ub.nextItem.previousItem = bb), ub.nextItem = bb
    }

    function gu(bb) {
      bb.previousItem && (bb.previousItem.nextItem = bb.nextItem), bb.nextItem && (bb.nextItem.previousItem = bb.previousItem)
    }
    var iu = hb(39824);
    class vu extends db {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(bb) {
        this._startDirectionFunction !== bb && (this._startDirectionFunction = bb, this._directionCreation.process = bb ? bu : Rb)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(bb) {
        this._startPositionFunction !== bb && (this._startPositionFunction = bb, this._positionCreation.process = bb ? Lu : Uu)
      }
      set onDispose(bb) {
        this._onDisposeObserver && this.XN.remove(this._onDisposeObserver), this._onDisposeObserver = this.XN.add(bb)
      }
      get tC() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(bb) {
        this._useRampGradients !== bb && (this._useRampGradients = bb, this._resetEffect(), bb ? (this._rampCreation = {
          process: Ku,
          previousItem: null,
          nextItem: null
        }, zu(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: Wu,
          previousItem: null,
          nextItem: null
        }, zu(this._remapGradientProcessing, this._gravityProcessing))) : (gu(this._rampCreation), gu(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(bb) {
        this._isLocal !== bb && (this._isLocal = bb, bb ? (this._isLocalCreation = {
          process: Yu,
          previousItem: null,
          nextItem: null
        }, zu(this._isLocalCreation, this._positionCreation)) : gu(this._isLocalCreation))
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
          process: Du,
          previousItem: null,
          nextItem: null
        }, zu(this._sheetCreation, this._colorDeadCreation)) : gu(this._sheetCreation), this._reset())
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
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[ub] = new Pb.d(this._engine), this._customWrappers[ub].effect = bb, this._customWrappers[ub].drawContext && (this._customWrappers[ub].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new Ob.e), this._onBeforeDrawParticlesObservable
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
          if (this._noiseTexture = bb, !bb) return gu(this._noiseCreation), void gu(this._noiseProcessing);
          this._noiseCreation = {
            process: wu,
            previousItem: null,
            nextItem: null
          }, zu(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: Zu,
            previousItem: null,
            nextItem: null
          }, zu(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Sb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        mb || (mb = !0, vb(Mb.f, sb)), (0, Ib.d)(), super(bb), this._emitterInverseWorldMatrix = Gb.d.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Gb.q, this.XN = new Ob.e, this.onStoppedObservable = new Ob.e, this.onStartedObservable = new Ob.e, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new ab.c(0, 0, 0, 0), this._colorDiff = new ab.c(0, 0, 0, 0), this._scaledGravity = Gb.q.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = bb => {}, this.recycleParticle = bb => {
          const ub = this._particles.pop();
          ub !== bb && ub.copyTo(bb), ub.metadata = null, this._stockParticles.push(ub)
        }, this._createParticle = () => {
          let bb;
          return 0 !== this._stockParticles.length ? (bb = this._stockParticles.pop(), bb._reset()) : bb = new jb(this), this._prepareParticle(bb), bb
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = ub, this._epsilon = Lb, hb && "Scene" !== hb.getClassName() ? (this._engine = hb, this.defaultProjectionMatrix = Gb.d.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = hb || Yb.b.LastCreatedScene, this._engine = this._scene.UX(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.fW.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: du,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Uu,
          previousItem: null,
          nextItem: null
        }, zu(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: Rb,
          previousItem: null,
          nextItem: null
        }, zu(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: ru,
          previousItem: null,
          nextItem: null
        }, zu(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: pu,
          previousItem: null,
          nextItem: null
        }, zu(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: ju,
          previousItem: null,
          nextItem: null
        }, zu(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: Vb,
          previousItem: null,
          nextItem: null
        }, zu(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: Fb,
          previousItem: null,
          nextItem: null
        }, zu(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Sb || (this._colorProcessing = {
          process: Tb,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: Qb,
          previousItem: null,
          nextItem: null
        }, zu(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Gu,
          previousItem: null,
          nextItem: null
        }, zu(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Su,
          previousItem: null,
          nextItem: null
        }, zu(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: Xu,
          previousItem: null,
          nextItem: null
        }, zu(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Ub, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new Pb.d(this._engine)
        }, this._customWrappers[0].effect = Bb, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Hb.b, this.updateFunction = bb => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((bb => {
            this._noiseTextureData = bb
          })));
          const ub = bb === this._particles;
          for (let hb = 0; hb < bb.length; hb++) {
            const Bb = bb[hb];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const Ob = Bb.age;
            if (Bb.age += this._tempScaledUpdateSpeed, Bb.age > Bb.lifeTime) {
              const bb = Bb.age - Ob,
                ub = Bb.lifeTime - Ob;
              this._tempScaledUpdateSpeed = ub * this._tempScaledUpdateSpeed / bb, Bb.age = Bb.lifeTime
            }
            this._ratio = Bb.age / Bb.lifeTime, Bb._properties.directionScale = this._tempScaledUpdateSpeed;
            let Gb = this._updateQueueStart;
            for (; Gb;) Gb.process(Bb, this), Gb = Gb.nextItem;
            if (this._isAnimationSheetEnabled && !Sb && Bb.updateCellIndex(), Bb._inheritParticleInfoToSubEmitters(), Bb.age >= Bb.lifeTime) {
              if (this._emitFromParticle(Bb), Bb._properties.attachedSubEmitters) {
                for (const bb of Bb._properties.attachedSubEmitters) bb.particleSystem.disposeOnStop = !0, bb.particleSystem.stop();
                Bb._properties.attachedSubEmitters = null
              }
              this.recycleParticle(Bb), ub && hb--
            } else;
          }
        }
      }
      serialize(bb) {
        throw new Error("Method not implemented.")
      }
      clone(bb, ub) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Cu : this._lifeTimeCreation.process = du
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: Au,
          previousItem: null,
          nextItem: null
        }, zu(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (gu(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(bb) {
        this.targetStopDuration !== bb && (this._targetStopDuration = bb, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(bb, ub, hb) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, bb, ub, hb), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(bb) {
        return this._removeFactorGradient(this._lifeTimeGradients, bb), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(bb, ub, hb) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = ou, this._sizeGradientProcessing = {
          process: lu,
          previousItem: null,
          nextItem: null
        }, xu(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, bb, ub, hb), this
      }
      removeSizeGradient(bb) {
        return this._removeFactorGradient(this._sizeGradients, bb), 0 === this._sizeGradients?.length && (gu(this._sizeGradientProcessing), this._sizeCreation.process = pu), this
      }
      addColorRemapGradient(bb, ub, hb) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, bb, ub, hb), this
      }
      removeColorRemapGradient(bb) {
        return this._removeFactorGradient(this._colorRemapGradients, bb), this
      }
      addAlphaRemapGradient(bb, ub, hb) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, bb, ub, hb), this
      }
      removeAlphaRemapGradient(bb) {
        return this._removeFactorGradient(this._alphaRemapGradients, bb), this
      }
      addAngularSpeedGradient(bb, ub, hb) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = nu, this._angularSpeedGradientProcessing = {
          process: cb,
          previousItem: null,
          nextItem: null
        }, xu(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, bb, ub, hb), this
      }
      removeAngularSpeedGradient(bb) {
        return this._removeFactorGradient(this._angularSpeedGradients, bb), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = ju, gu(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(bb, ub, hb) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: uu,
          previousItem: null,
          nextItem: null
        }, zu(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: Bu,
          previousItem: null,
          nextItem: null
        }, xu(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, bb, ub, hb), this
      }
      removeVelocityGradient(bb) {
        return this._removeFactorGradient(this._velocityGradients, bb), 0 === this._velocityGradients?.length && (gu(this._velocityCreation), gu(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(bb, ub, hb) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: hu,
          previousItem: null,
          nextItem: null
        }, zu(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: Ou,
          previousItem: null,
          nextItem: null
        }, zu(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, bb, ub, hb), this
      }
      removeLimitVelocityGradient(bb) {
        return this._removeFactorGradient(this._limitVelocityGradients, bb), 0 === this._limitVelocityGradients?.length && (gu(this._limitVelocityCreation), gu(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(bb, ub, hb) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: au,
          previousItem: null,
          nextItem: null
        }, xu(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Hu,
          previousItem: null,
          nextItem: null
        }, xu(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, bb, ub, hb), this
      }
      removeDragGradient(bb) {
        return this._removeFactorGradient(this._dragGradients, bb), 0 === this._dragGradients?.length && (gu(this._dragCreation), gu(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(bb, ub, hb) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, bb, ub, hb), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(bb) {
        return this._removeFactorGradient(this._startSizeGradients, bb), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const bb = new Uint8Array(4 * this._rawTextureWidth),
          ub = ab.k.Color3[0];
        for (let hb = 0; hb < this._rawTextureWidth; hb++) {
          const Ob = hb / this._rawTextureWidth;
          Bb.k.GetCurrentGradient(Ob, this._rampGradients, ((Bb, Ob, Gb) => {
            ab.b.LerpToRef(Bb.color, Ob.color, Gb, ub), bb[4 * hb] = 255 * ub.r, bb[4 * hb + 1] = 255 * ub.g, bb[4 * hb + 2] = 255 * ub.b, bb[4 * hb + 3] = 255
          }))
        }
        this._rampGradientsTexture = Lb.b.CreateRGBATexture(bb, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((bb, ub) => bb.gradient < ub.gradient ? -1 : bb.gradient > ub.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(bb, ub) {
        this._rampGradients || (this._rampGradients = []);
        const hb = new Bb.d(bb, ub);
        return this._rampGradients.push(hb), this._syncRampGradientTexture(), this
      }
      removeRampGradient(bb) {
        return this._removeGradientAndTexture(bb, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(bb, ub, hb) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = fb, this._colorProcessing.process = kb);
        const Ob = new Bb.b(bb, ub, hb);
        return this._colorGradients.push(Ob), this._colorGradients.sort(((bb, ub) => bb.gradient < ub.gradient ? -1 : bb.gradient > ub.gradient ? 1 : 0)), this
      }
      removeColorGradient(bb) {
        if (!this._colorGradients) return this;
        let ub = 0;
        for (const hb of this._colorGradients) {
          if (hb.gradient === bb) {
            this._colorGradients.splice(ub, 1);
            break
          }
          ub++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = Vb, this._colorProcessing.process = Tb), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const bb of this._drawWrappers)
            if (bb)
              for (const ub of bb) ub?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(bb, ub, hb, Bb, Ob) {
        return Ob[4 * (((bb = .5 * Math.abs(bb) + .5) * hb % hb | 0) + ((ub = .5 * Math.abs(ub) + .5) * Bb % Bb | 0) * hb)] / 255
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
          ub = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * ub), this._vertexBuffer = new Ub.b(bb, this._vertexData, !0, ub);
        let hb = 0;
        const Bb = this._vertexBuffer.createVertexBuffer(Ub.i.PositionKind, hb, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Ub.i.PositionKind] = Bb, hb += 3;
        const Ob = this._vertexBuffer.createVertexBuffer(Ub.i.ColorKind, hb, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Ub.i.ColorKind] = Ob, hb += 4;
        const Gb = this._vertexBuffer.createVertexBuffer("angle", hb, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Gb, hb += 1;
        const Lb = this._vertexBuffer.createVertexBuffer("size", hb, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = Lb, hb += 2, this._isAnimationSheetEnabled) {
          const bb = this._vertexBuffer.createVertexBuffer("cellIndex", hb, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = bb, hb += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const bb = this._vertexBuffer.createVertexBuffer("direction", hb, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = bb, hb += 3
        }
        if (this._useRampGradients) {
          const bb = this._vertexBuffer.createVertexBuffer("remapData", hb, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = bb, hb += 4
        }
        let Yb;
        if (this._useInstancing) {
          const ub = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Ub.b(bb, ub, !1, 2), Yb = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Yb = this._vertexBuffer.createVertexBuffer("offset", hb, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Yb, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const bb = [],
          ub = [];
        let hb = 0;
        for (let Bb = 0; Bb < this._capacity; Bb++) bb.push(hb), bb.push(hb + 1), bb.push(hb + 2), bb.push(hb), bb.push(hb + 2), bb.push(hb + 3), ub.push(hb, hb + 1, hb + 1, hb + 2, hb + 2, hb + 3, hb + 3, hb, hb, hb + 3), hb += 4;
        this._indexBuffer = this._engine.createIndexBuffer(bb), this._linesIndexBuffer = this._engine.createIndexBuffer(ub)
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
              for (let ub = 0; ub < this.preWarmCycles; ub++) this.animate(!0), bb.render()
            }))
          }));
          else
            for (let ub = 0; ub < this.preWarmCycles; ub++) this.animate(!0)
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
      _appendParticleVertex(bb, ub, hb, Bb) {
        let Ob = bb * this._vertexBufferSize;
        const Ub = Gb.i.YX[0].mD(this._scene?.floatingOriginOffset || Gb.q.ZeroReadOnly);
        if (this._vertexData[Ob++] = ub.position.x + this.worldOffset.x - Ub.x, this._vertexData[Ob++] = ub.position.y + this.worldOffset.y - Ub.y, this._vertexData[Ob++] = ub.position.z + this.worldOffset.z - Ub.z, this._vertexData[Ob++] = ub.color.r, this._vertexData[Ob++] = ub.color.g, this._vertexData[Ob++] = ub.color.b, this._vertexData[Ob++] = ub.color.a, this._vertexData[Ob++] = ub.angle, this._vertexData[Ob++] = ub.scale.x * ub.size, this._vertexData[Ob++] = ub.scale.y * ub.size, this._isAnimationSheetEnabled && (this._vertexData[Ob++] = ub.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[Ob++] = ub.direction.x, this._vertexData[Ob++] = ub.direction.y, this._vertexData[Ob++] = ub.direction.z);
        else if (ub._properties.initialDirection) {
          let bb = ub._properties.initialDirection;
          this.isLocal && (Gb.q.TransformNormalToRef(bb, this._emitterWorldMatrix, Gb.i.YX[0]), bb = Gb.i.YX[0]), 0 === bb.x && 0 === bb.z && (bb.x = .001), this._vertexData[Ob++] = bb.x, this._vertexData[Ob++] = bb.y, this._vertexData[Ob++] = bb.z
        } else {
          let bb = ub.direction;
          this.isLocal && (Gb.q.TransformNormalToRef(bb, this._emitterWorldMatrix, Gb.i.YX[0]), bb = Gb.i.YX[0]), 0 === bb.x && 0 === bb.z && (bb.x = .001), this._vertexData[Ob++] = bb.x, this._vertexData[Ob++] = bb.y, this._vertexData[Ob++] = bb.z
        }
        this._useRampGradients && ub.remapData && (this._vertexData[Ob++] = ub.remapData.x, this._vertexData[Ob++] = ub.remapData.y, this._vertexData[Ob++] = ub.remapData.z, this._vertexData[Ob++] = ub.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === hb ? hb = this._epsilon : 1 === hb && (hb = 1 - this._epsilon), 0 === Bb ? Bb = this._epsilon : 1 === Bb && (Bb = 1 - this._epsilon)), this._vertexData[Ob++] = hb, this._vertexData[Ob] = Bb)
      }
      _prepareParticle(bb) {}
      _createNewOnes(bb) {
        let ub;
        for (let hb = 0; hb < bb && this._particles.length !== this._capacity; hb++) {
          ub = this._createParticle(), this._particles.push(ub);
          let bb = this._createQueueStart;
          for (; bb;) bb.process(ub, this), bb = bb.nextItem;
          ub._inheritParticleInfoToSubEmitters()
        }
      }
      _update(bb) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const bb = this.emitter;
          this._emitterWorldMatrix = bb.getWorldMatrix()
        } else {
          const bb = this.emitter;
          this._emitterWorldMatrix = Gb.d.Translation(bb.x, bb.y, bb.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(bb)
      }
      static _GetAttributeNamesOrOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = [Ub.i.PositionKind, Ub.i.ColorKind, "angle", "offset", "size"];
        return bb && Bb.push("cellIndex"), ub || Bb.push("direction"), hb && Bb.push("remapData"), Bb
      }
      static _GetEffectCreationOptions() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, qb.d)(Bb), bb && Bb.push("particlesInfos"), ub && Bb.push("logarithmicDepthConstant"), hb && (Bb.push("vFogInfos"), Bb.push("vFogColor")), Bb
      }
      fillDefines(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, qb.k)(this, this._scene, bb), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && bb.push("#define FOG")), this._isAnimationSheetEnabled && bb.push("#define ANIMATESHEET"), this.useLogarithmicDepth && bb.push("#define LOGARITHMICDEPTH"), ub === db.BLENDMODE_MULTIPLY && bb.push("#define BLENDMULTIPLYMODE"), this.isLocal && bb.push("#define LOCAL"), this._useRampGradients && bb.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (bb.push("#define BILLBOARD"), this.billboardMode) {
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
        hb && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), bb.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(bb, ub, hb) {
        ub.push(...vu._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), bb.push(...vu._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), hb.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, yb.d)(bb, this._imageProcessingConfigurationDefines), (0, yb.b)(hb, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(bb) {
        var ub;
        const hb = this._getCustomDrawWrapper(bb);
        if (hb?.effect) return hb;
        const Bb = [];
        this.fillDefines(Bb, bb);
        const Gb = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Ub = iu.d._PrepareStringDefines(Gb, Bb),
          Lb = Ub ? iu.d.GetConfiguration(Gb) : void 0;
        let Yb = this._drawWrappers[Gb];
        Yb || (Yb = this._drawWrappers[Gb] = [], 0 === Gb || this._renderPassObserver || (this._renderPassObserver = ((ub = this._engine)._onReleaseRenderPassObservable ?? (ub._onReleaseRenderPassObservable = new Ob.e)).add((bb => {
          const ub = this._drawWrappers[bb];
          if (ub) {
            for (const bb of ub) bb?.dispose();
            delete this._drawWrappers[bb]
          }
        }))));
        let Sb = Yb[bb];
        Sb || (Sb = new Pb.d(this._engine), Sb.drawContext && (Sb.drawContext.useInstancing = this._useInstancing), Yb[bb] = Sb);
        const ab = Bb.join("\n");
        if (Sb.defines !== ab) {
          const bb = [],
            ub = [],
            hb = [];
          this.fillUniformsAttributesAndSamplerNames(ub, bb, hb), Ub && (ub.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== Lb?.defines.PREPASS_LOCAL_POSITION_INDEX && ub.push("inverseEmitterWM", "geometryWorldOffset")), Sb.setEffect(this._engine.createEffect("particles", {
            attributes: bb,
            uniformsNames: ub,
            samplers: hb,
            defines: ab,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Ub,
            indexParameters: Ub ? {
              buffersCount: Lb?._mrtCount ?? 0
            } : void 0
          }, this._engine), ab)
        }
        return Sb
      }
      _bindGeometryRendering(bb) {
        const ub = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          hb = iu.d.GetConfiguration(ub);
        if (!hb?._defines) return;
        bb.setFloat("objectId", 0), bb.setInt("meshBlendTag", 0);
        const Bb = this._scene?.activeCamera;
        if (bb.setFloat2("cameraInfo", Bb?.minZ ?? 0, Bb?.maxZ ?? 1), this.isLocal && void 0 !== hb.defines.PREPASS_LOCAL_POSITION_INDEX) {
          bb.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const ub = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Gb.q.ZeroReadOnly, Gb.i.YX[0]);
          bb.setVector3("geometryWorldOffset", ub)
        }
      }
      animate() {
        let bb, ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!ub && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (ub ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) bb = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const ub = this._calculateEmitRate();
            bb = ub * this._scaledUpdateSpeed | 0, this._newPartsExcess += ub * this._scaledUpdateSpeed - bb
          }
          if (this._newPartsExcess > 1 && (bb += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? bb = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(bb), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !ub) {
            let bb = 0;
            for (let ub = 0; ub < this._particles.length; ub++) {
              const hb = this._particles[ub];
              this._appendParticleVertices(bb, hb), bb += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const bb = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  ub = this._particles.length;
                ub < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, ub * bb, this._fixedCapacityHighWaterMark * bb), this._fixedCapacityHighWaterMark = ub, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
          const ub = this._actualFrame / this.targetStopDuration;
          Bb.k.GetCurrentGradient(ub, this._emitRateGradients, ((ub, hb, Bb) => {
            ub !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = hb.getFactor(), this._currentEmitRateGradient = ub), bb = (0, Zb.Lerp)(this._currentEmitRate1, this._currentEmitRate2, Bb)
          }))
        }
        return bb
      }
      _appendParticleVertices(bb, ub) {
        this._appendParticleVertex(bb++, ub, 0, 0), this._useInstancing || (this._appendParticleVertex(bb++, ub, 1, 0), this._appendParticleVertex(bb++, ub, 1, 1), this._appendParticleVertex(bb, ub, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !vu.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([hb.e(337).then((() => hb(60624))), hb.e(331).then((() => hb(60630)))])) : await Promise.all([hb.e(320).then((() => hb(60633))), Promise.all([hb.e(313), hb.e(349)]).then((() => hb(60636)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== db.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(db.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(db.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(bb) {
        const ub = this._getWrapper(bb),
          hb = ub.effect,
          Bb = this._engine;
        Bb.enableEffect(ub);
        const Ob = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        hb.setTexture("diffuseSampler", this.particleTexture), hb.setMatrix("view", Ob);
        const Ub = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (hb.setMatrix("projection", Ub), this._isAnimationSheetEnabled && this.particleTexture) {
          const bb = this.particleTexture.getBaseSize();
          hb.setFloat3("particlesInfos", this.spriteCellWidth / bb.width, this.spriteCellHeight / bb.height, this.spriteCellWidth / bb.width)
        }
        if (hb.setVector2("translationPivot", this.translationPivot), hb.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const bb = this._scene.activeCamera;
          hb.setVector3("eyePosition", bb.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), hb.setTexture("rampSampler", this._rampGradientsTexture));
        const Lb = hb.defines;
        this._scene && ((0, qb.g)(hb, this, this._scene), this.applyFog && (0, Eb.f)(this._scene, void 0, hb)), Lb.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (Ob.invertToRef(Gb.i.Matrix[0]), hb.setMatrix("invView", Gb.i.Matrix[0])), hb._multiTarget && this._bindGeometryRendering(hb), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? Bb.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, hb) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, hb)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? Bb.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, hb) : Bb.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, hb), this.useLogarithmicDepth && this._scene && (0, Eb.l)(Lb, hb, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(hb), this._setEngineBasedOnBlendMode(bb), hb._multiTarget && iu.d._BindZeroAlphaDiscard(Bb, hb);
        let Yb = !1;
        try {
          iu.d._BindAttachmentsForEffect(Bb, hb) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(hb), this._useInstancing ? this._scene?.forceWireframe ? Bb.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : Bb.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? Bb.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : Bb.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Yb = !0)
        } finally {
          iu.d._RestoreAttachments(Bb)
        }
        return Yb ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const bb = this._engine;
        let ub;
        return bb.setState && (bb.setState(!1), this.forceDepthWrite && bb.setDepthWrite(!0)), ub = this.blendMode === db.BLENDMODE_MULTIPLYADD ? this._render(db.BLENDMODE_MULTIPLY) + this._render(db.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), ub
      }
      _onDispose() {}
      dispose() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), bb && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), bb && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(ub, hb), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const bb = this._scene.fW.indexOf(this);
          bb > -1 && this._scene.fW.splice(bb, 1), this._scene._activeParticleSystems.dispose()
        }
        this.XN.notifyObservers(this), this.XN.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    vu.ForceGLSL = !1;
    var tu, Ju = hb(36762);
    ! function(bb) {
      bb[bb.ATTACHED = 0] = "ATTACHED", bb[bb.END = 1] = "END"
    }(tu || (tu = {}));
    class eu {
      constructor(bb) {
        if (this.particleSystem = bb, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !bb.emitter || !bb.emitter.dispose) {
          const ub = (0, Ju.d)("BABYLON.AbstractMesh");
          bb.emitter = new ub("SubemitterSystemEmitter", bb.ZN()), bb._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let bb = this.particleSystem.emitter;
        if (bb) {
          if (bb instanceof Gb.q) bb = bb.clone();
          else if (-1 !== bb.getClassName().indexOf("Mesh")) {
            bb = new((0, Ju.d)("BABYLON.Mesh"))("", bb.ZN()), bb.isVisible = !1
          }
        } else bb = new Gb.q;
        const ub = new eu(this.particleSystem.clone(this.particleSystem.name, bb));
        return ub.particleSystem.name += "Clone", ub.type = this.type, ub.inheritDirection = this.inheritDirection, ub.inheritedVelocityAmount = this.inheritedVelocityAmount, ub.particleSystem._disposeEmitterOnDispose = !0, ub.particleSystem.disposeOnStop = !0, ub
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = {};
        return ub.type = this.type, ub.inheritDirection = this.inheritDirection, ub.inheritedVelocityAmount = this.inheritedVelocityAmount, ub.particleSystem = this.particleSystem.serialize(bb), ub
      }
      static _ParseParticleSystem(bb, ub, hb) {
        throw (0, Nb.m)("ParseParticle")
      }
      static Parse(bb, ub, hb) {
        const Bb = bb.particleSystem,
          Ob = new eu(eu._ParseParticleSystem(Bb, ub, hb, !0));
        return Ob.type = bb.type, Ob.inheritDirection = bb.inheritDirection, Ob.inheritedVelocityAmount = bb.inheritedVelocityAmount, Ob.particleSystem._isSubEmitter = !0, Ob
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Nu = hb(39350),
      su = hb(39488);
    const Mu = () => {};
    class mu {
      constructor() {
        this.particlePositionGenerator = Mu, this.particleDestinationGenerator = Mu, this.particleDirectionGenerator = Mu
      }
      startDirectionFunction(bb, ub, hb, Bb) {
        const Ob = Gb.i.YX[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== Mu) this.particleDirectionGenerator(-1, hb, Ob);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== Mu) {
          this.particleDestinationGenerator(-1, hb, Ob);
          const bb = Gb.i.YX[1];
          Ob.subtractToRef(hb.position, bb), bb.scaleToRef(1 / hb.lifeTime, Ob)
        } else Ob.set(0, 0, 0);
        Bb ? ub.mD(Ob) : Gb.q.TransformNormalToRef(Ob, bb, ub)
      }
      startPositionFunction(bb, ub, hb, Bb) {
        const Ob = Gb.i.YX[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== Mu ? this.particlePositionGenerator(-1, hb, Ob) : Ob.set(0, 0, 0), Bb ? ub.mD(Ob) : Gb.q.TransformCoordinatesToRef(Ob, bb, ub)
      }
      clone() {
        const bb = new mu;
        return wb.b.DeepCopy(this, bb), bb
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
    const Iu = Gb.q.Zero(),
      Pu = Gb.q.Zero(),
      qu = Gb.q.Zero();
    class Eu {
      constructor() {
        this.strength = 0, this.position = Gb.q.Zero()
      }
      _processParticle(bb, ub) {
        this.position.subtractToRef(bb.position, Iu);
        const hb = Iu.lengthSquared() + 1;
        Iu.normalize().scaleToRef(this.strength / hb, Pu), Pu.scaleToRef(ub._tempScaledUpdateSpeed, qu), bb.direction.addInPlace(qu)
      }
      serialize() {
        return {
          position: this.position.ZBb(),
          strength: this.strength
        }
      }
    }
    const yu = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class Vu extends vu {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = bb => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const ub = Math.floor(Math.random() * this._subEmitters.length);
          for (const hb of this._subEmitters[ub])
            if (1 === hb.type) {
              const ub = hb.clone();
              bb._inheritParticleInfoToSubEmitter(ub), ub.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(ub.particleSystem), ub.particleSystem.start()
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
        this._flowMap !== bb && (this._flowMap = bb, this._flowMapUpdate && (gu(this._flowMapUpdate), this._flowMapUpdate = null), bb && (this._flowMapUpdate = {
          process: bb => {
            const ub = this.ZN()?.getTransformMatrix();
            this._flowMap._processParticle(bb, this.flowMapStrength * this._tempScaledUpdateSpeed, ub)
          },
          previousItem: null,
          nextItem: null
        }, zu(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(bb) {
        super.addAttractor(bb), 1 === this._attractors.length && (this._attractorUpdate = {
          process: bb => {
            for (const ub of this._attractors) ub._processParticle(bb, this)
          },
          previousItem: null,
          nextItem: null
        }, zu(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(bb) {
        super.removeAttractor(bb), 0 === this._attractors.length && this._attractorUpdate && gu(this._attractorUpdate)
      }
      start() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(bb)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const bb of this.subEmitters) bb instanceof Vu ? this._subEmitters.push([new eu(bb)]) : bb instanceof eu ? this._subEmitters.push([bb]) : bb instanceof Array && this._subEmitters.push(bb)
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
          const ub = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          bb._properties.attachedSubEmitters = [];
          for (const hb of ub)
            if (0 === hb.type) {
              const ub = hb.clone();
              bb._properties.attachedSubEmitters.push(ub), ub.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), bb && this.particles)
          for (const hb of this.particles)
            if (hb._properties.attachedSubEmitters)
              for (let bb = hb._properties.attachedSubEmitters.length - 1; bb >= 0; bb -= 1) hb._properties.attachedSubEmitters[bb].dispose();
        if (ub && this.activeSubSystems)
          for (let hb = this.activeSubSystems.length - 1; hb >= 0; hb -= 1) this.activeSubSystems[hb].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let bb = 0; bb < this._subEmitters.length; bb++)
            for (const ub of this._subEmitters[bb]) ub.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(bb, ub, hb, Bb) {
        let Ob;
        Ob = hb instanceof Nu.d ? null : hb;
        const Ub = (0, Ju.d)("BABYLON.Texture");
        if (Ub && Ob)
          if (bb.texture) ub.particleTexture = Ub.Parse(bb.texture, Ob, Bb);
          else if (bb.textureName) {
          const hb = bb.textureSettings;
          if (ub.particleTexture = new Ub(Bb + bb.textureName, Ob, !1, void 0 === bb.invertY || bb.invertY, hb ? hb.samplingMode : void 0), ub.particleTexture.name = bb.textureName, hb) {
            const bb = ub.particleTexture;
            for (const ub of yu) void 0 !== hb[ub] && (bb[ub] = hb[ub])
          }
        }
        if (bb.emitterId || 0 === bb.emitterId || void 0 !== bb.emitter ? (bb.emitterId || 0 === bb.emitterId) && Ob ? (ub.emitter = Ob.getLastMeshById(bb.emitterId), ub.emitter || (ub.emitter = Gb.q.Zero())) : ub.emitter = Gb.q.FromArray(bb.emitter) : ub.emitter = Gb.q.Zero(), ub.isLocal = !!bb.isLocal, void 0 !== bb.renderingGroupId && (ub.renderingGroupId = bb.renderingGroupId), void 0 !== bb.isBillboardBased && (ub.isBillboardBased = bb.isBillboardBased), void 0 !== bb.billboardMode && (ub.billboardMode = bb.billboardMode), void 0 !== bb.useLogarithmicDepth && (ub.useLogarithmicDepth = bb.useLogarithmicDepth), bb.animations) {
          for (let hb = 0; hb < bb.animations.length; hb++) {
            const Bb = bb.animations[hb],
              Ob = (0, Ju.d)("BABYLON.Animation");
            Ob && ub.animations.push(Ob.Parse(Bb))
          }
          ub.beginAnimationOnStart = bb.beginAnimationOnStart, ub.beginAnimationFrom = bb.beginAnimationFrom, ub.beginAnimationTo = bb.beginAnimationTo, ub.beginAnimationLoop = bb.beginAnimationLoop
        }
        if (bb.autoAnimate && Ob && Ob.beginAnimation(ub, bb.autoAnimateFrom, bb.autoAnimateTo, bb.autoAnimateLoop, bb.autoAnimateSpeed || 1), ub.startDelay = 0 | bb.startDelay, ub.minAngularSpeed = bb.minAngularSpeed, ub.maxAngularSpeed = bb.maxAngularSpeed, ub.minSize = bb.minSize, ub.maxSize = bb.maxSize, bb.minScaleX && (ub.minScaleX = bb.minScaleX, ub.maxScaleX = bb.maxScaleX, ub.minScaleY = bb.minScaleY, ub.maxScaleY = bb.maxScaleY), void 0 !== bb.preWarmCycles && (ub.preWarmCycles = bb.preWarmCycles, ub.preWarmStepOffset = bb.preWarmStepOffset), void 0 !== bb.minInitialRotation && (ub.minInitialRotation = bb.minInitialRotation, ub.maxInitialRotation = bb.maxInitialRotation), ub.minLifeTime = bb.minLifeTime, ub.maxLifeTime = bb.maxLifeTime, ub.minEmitPower = bb.minEmitPower, ub.maxEmitPower = bb.maxEmitPower, ub.emitRate = bb.emitRate, ub.gravity = Gb.q.FromArray(bb.gravity), bb.noiseStrength && (ub.noiseStrength = Gb.q.FromArray(bb.noiseStrength)), ub.color1 = ab.c.FromArray(bb.color1), ub.color2 = ab.c.FromArray(bb.color2), ub.colorDead = ab.c.FromArray(bb.colorDead), ub.updateSpeed = bb.updateSpeed, ub.targetStopDuration = bb.targetStopDuration, ub.blendMode = bb.blendMode, bb.colorGradients)
          for (const Gb of bb.colorGradients) ub.addColorGradient(Gb.gradient, ab.c.FromArray(Gb.color1), Gb.color2 ? ab.c.FromArray(Gb.color2) : void 0);
        if (bb.rampGradients) {
          for (const hb of bb.rampGradients) ub.addRampGradient(hb.gradient, ab.b.FromArray(hb.color));
          ub.useRampGradients = bb.useRampGradients
        }
        if (bb.colorRemapGradients)
          for (const Gb of bb.colorRemapGradients) ub.addColorRemapGradient(Gb.gradient, void 0 !== Gb.factor1 ? Gb.factor1 : Gb.factor, Gb.factor2);
        if (bb.alphaRemapGradients)
          for (const Gb of bb.alphaRemapGradients) ub.addAlphaRemapGradient(Gb.gradient, void 0 !== Gb.factor1 ? Gb.factor1 : Gb.factor, Gb.factor2);
        if (bb.sizeGradients)
          for (const Gb of bb.sizeGradients) ub.addSizeGradient(Gb.gradient, void 0 !== Gb.factor1 ? Gb.factor1 : Gb.factor, Gb.factor2);
        if (bb.angularSpeedGradients)
          for (const Gb of bb.angularSpeedGradients) ub.addAngularSpeedGradient(Gb.gradient, void 0 !== Gb.factor1 ? Gb.factor1 : Gb.factor, Gb.factor2);
        if (bb.velocityGradients)
          for (const Gb of bb.velocityGradients) ub.addVelocityGradient(Gb.gradient, void 0 !== Gb.factor1 ? Gb.factor1 : Gb.factor, Gb.factor2);
        if (bb.dragGradients)
          for (const Gb of bb.dragGradients) ub.addDragGradient(Gb.gradient, void 0 !== Gb.factor1 ? Gb.factor1 : Gb.factor, Gb.factor2);
        if (bb.emitRateGradients)
          for (const Gb of bb.emitRateGradients) ub.addEmitRateGradient(Gb.gradient, void 0 !== Gb.factor1 ? Gb.factor1 : Gb.factor, Gb.factor2);
        if (bb.startSizeGradients)
          for (const Gb of bb.startSizeGradients) ub.addStartSizeGradient(Gb.gradient, void 0 !== Gb.factor1 ? Gb.factor1 : Gb.factor, Gb.factor2);
        if (bb.lifeTimeGradients)
          for (const Gb of bb.lifeTimeGradients) ub.addLifeTimeGradient(Gb.gradient, void 0 !== Gb.factor1 ? Gb.factor1 : Gb.factor, Gb.factor2);
        if (bb.limitVelocityGradients) {
          for (const hb of bb.limitVelocityGradients) ub.addLimitVelocityGradient(hb.gradient, void 0 !== hb.factor1 ? hb.factor1 : hb.factor, hb.factor2);
          ub.limitVelocityDamping = bb.limitVelocityDamping
        }
        if (bb.noiseTexture && Ob) {
          const hb = (0, Ju.d)("BABYLON.ProceduralTexture");
          ub.noiseTexture = hb.Parse(bb.noiseTexture, Ob, Bb)
        }
        let Lb;
        if (bb.particleEmitterType) {
          switch (bb.particleEmitterType.type) {
            case "SphereParticleEmitter":
              Lb = new ob;
              break;
            case "SphereDirectedParticleEmitter":
              Lb = new Ab;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              Lb = new Kb;
              break;
            case "ConeDirectedParticleEmitter":
              Lb = new Wb;
              break;
            case "CylinderParticleEmitter":
              Lb = new lb.f;
              break;
            case "CylinderDirectedParticleEmitter":
              Lb = new lb.d;
              break;
            case "HemisphericParticleEmitter":
              Lb = new pb;
              break;
            case "PointParticleEmitter":
              Lb = new Xb;
              break;
            case "MeshParticleEmitter":
              Lb = new Cb;
              break;
            case "CustomParticleEmitter":
              Lb = new mu;
              break;
            default:
              Lb = new Hb.b
          }
          Lb.parse(bb.particleEmitterType, Ob)
        } else Lb = new Hb.b, Lb.parse(bb, Ob);
        ub.particleEmitterType = Lb, ub.startSpriteCellID = bb.startSpriteCellID, ub.endSpriteCellID = bb.endSpriteCellID, ub.spriteCellLoop = bb.spriteCellLoop ?? !0, ub.spriteCellWidth = bb.spriteCellWidth, ub.spriteCellHeight = bb.spriteCellHeight, ub.spriteCellChangeSpeed = bb.spriteCellChangeSpeed, ub.spriteRandomStartCell = bb.spriteRandomStartCell, ub.disposeOnStop = bb.disposeOnStop ?? !1, ub.manualEmitCount = bb.manualEmitCount ?? -1
      }
      static Parse(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ob = arguments.length > 4 ? arguments[4] : void 0;
        const Ub = bb.name;
        let Lb, Yb, Sb = null,
          Hb = null;
        if (ub instanceof Nu.d ? Lb = ub : (Yb = ub, Lb = Yb.UX()), bb.customShader && (0, Nb.b)(Lb.createEffectForParticles)) {
          Hb = bb.customShader;
          const ub = Hb.shaderOptions.defines.length > 0 ? Hb.shaderOptions.defines.join("\n") : "";
          Sb = Lb.createEffectForParticles(Hb.shaderPath.fragmentElement, Hb.shaderOptions.uniforms, Hb.shaderOptions.samplers, ub)
        }
        const wb = new Vu(Ub, Ob || bb.LH, ub, Sb, bb.isAnimationSheetEnabled);
        if (wb.customShader = Hb, wb._rootUrl = hb, bb.id && (wb.id = bb.id), bb.subEmitters) {
          wb.subEmitters = [];
          for (const Bb of bb.subEmitters) {
            const bb = [];
            for (const Ob of Bb) bb.push(eu.Parse(Ob, ub, hb));
            wb.subEmitters.push(bb)
          }
        }
        if (bb.attractors)
          for (const ab of bb.attractors) {
            const bb = new Eu;
            bb.position = Gb.q.FromArray(ab.position), bb.strength = ab.strength, wb.addAttractor(bb)
          }
        return Vu._Parse(bb, wb, ub, hb), bb.textureMask && (wb.textureMask = ab.c.FromArray(bb.textureMask)), bb.worldOffset && (wb.worldOffset = Gb.q.FromArray(bb.worldOffset)), bb.preventAutoStart && (wb.preventAutoStart = bb.preventAutoStart), bb.metadata && (wb.metadata = bb.metadata), Bb || wb.preventAutoStart || wb.start(), wb
      }
      serialize() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = {};
        if (Vu._Serialize(ub, this, bb), ub.textureMask = this.textureMask.ZBb(), ub.customShader = this.customShader, ub.preventAutoStart = this.preventAutoStart, ub.worldOffset = this.worldOffset.ZBb(), this.metadata && (ub.metadata = this.metadata), this.subEmitters) {
          ub.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const hb of this._subEmitters) {
            const Bb = [];
            for (const ub of hb) ub.particleSystem.doNotSerialize || Bb.push(ub.serialize(bb));
            ub.subEmitters.push(Bb)
          }
        }
        if (this._attractors && this._attractors.length) {
          ub.attractors = [];
          for (const bb of this._attractors) ub.attractors.push(bb.serialize())
        }
        return ub
      }
      static _Serialize(bb, ub, hb) {
        if (bb.name = ub.name, bb.id = ub.id, bb.LH = ub.getCapacity(), bb.disposeOnStop = ub.disposeOnStop, bb.manualEmitCount = ub.manualEmitCount, ub.emitter.position) {
          const hb = ub.emitter;
          bb.emitterId = hb.id
        } else {
          const hb = ub.emitter;
          bb.emitter = hb.ZBb()
        }
        if (ub.particleEmitterType && (bb.particleEmitterType = ub.particleEmitterType.serialize()), ub.particleTexture)
          if (hb) bb.texture = ub.particleTexture.serialize();
          else {
            const hb = ub.particleTexture;
            bb.textureName = ub.particleTexture.name, bb.invertY = !!hb._invertY;
            const Bb = {};
            for (const bb of yu) Bb[bb] = hb[bb];
            Bb.samplingMode = hb.samplingMode, bb.textureSettings = Bb
          } bb.isLocal = ub.isLocal, su.c.AppendSerializedAnimations(ub, bb), bb.beginAnimationOnStart = ub.beginAnimationOnStart, bb.beginAnimationFrom = ub.beginAnimationFrom, bb.beginAnimationTo = ub.beginAnimationTo, bb.beginAnimationLoop = ub.beginAnimationLoop, bb.startDelay = ub.startDelay, bb.renderingGroupId = ub.renderingGroupId, bb.isBillboardBased = ub.isBillboardBased, bb.billboardMode = ub.billboardMode, bb.minAngularSpeed = ub.minAngularSpeed, bb.maxAngularSpeed = ub.maxAngularSpeed, bb.minSize = ub.minSize, bb.maxSize = ub.maxSize, bb.minScaleX = ub.minScaleX, bb.maxScaleX = ub.maxScaleX, bb.minScaleY = ub.minScaleY, bb.maxScaleY = ub.maxScaleY, bb.minEmitPower = ub.minEmitPower, bb.maxEmitPower = ub.maxEmitPower, bb.minLifeTime = ub.minLifeTime, bb.maxLifeTime = ub.maxLifeTime, bb.emitRate = ub.emitRate, bb.gravity = ub.gravity.ZBb(), bb.noiseStrength = ub.noiseStrength.ZBb(), bb.color1 = ub.color1.ZBb(), bb.color2 = ub.color2.ZBb(), bb.colorDead = ub.colorDead.ZBb(), bb.updateSpeed = ub.updateSpeed, bb.targetStopDuration = ub.targetStopDuration, bb.blendMode = ub.blendMode, bb.preWarmCycles = ub.preWarmCycles, bb.preWarmStepOffset = ub.preWarmStepOffset, bb.minInitialRotation = ub.minInitialRotation, bb.maxInitialRotation = ub.maxInitialRotation, bb.startSpriteCellID = ub.startSpriteCellID, bb.spriteCellLoop = ub.spriteCellLoop, bb.endSpriteCellID = ub.endSpriteCellID, bb.spriteCellChangeSpeed = ub.spriteCellChangeSpeed, bb.spriteCellWidth = ub.spriteCellWidth, bb.spriteCellHeight = ub.spriteCellHeight, bb.spriteRandomStartCell = ub.spriteRandomStartCell, bb.isAnimationSheetEnabled = ub.isAnimationSheetEnabled, bb.useLogarithmicDepth = ub.useLogarithmicDepth;
        const Bb = ub.getColorGradients();
        if (Bb) {
          bb.colorGradients = [];
          for (const ub of Bb) {
            const hb = {
              gradient: ub.gradient,
              color1: ub.color1.ZBb()
            };
            ub.color2 ? hb.color2 = ub.color2.ZBb() : hb.color2 = ub.color1.ZBb(), bb.colorGradients.push(hb)
          }
        }
        const Ob = ub.getRampGradients();
        if (Ob) {
          bb.rampGradients = [];
          for (const ub of Ob) {
            const hb = {
              gradient: ub.gradient,
              color: ub.color.ZBb()
            };
            bb.rampGradients.push(hb)
          }
          bb.useRampGradients = ub.useRampGradients
        }
        const Gb = ub.getColorRemapGradients();
        if (Gb) {
          bb.colorRemapGradients = [];
          for (const ub of Gb) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.colorRemapGradients.push(hb)
          }
        }
        const Ub = ub.getAlphaRemapGradients();
        if (Ub) {
          bb.alphaRemapGradients = [];
          for (const ub of Ub) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.alphaRemapGradients.push(hb)
          }
        }
        const Lb = ub.getSizeGradients();
        if (Lb) {
          bb.sizeGradients = [];
          for (const ub of Lb) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.sizeGradients.push(hb)
          }
        }
        const Yb = ub.getAngularSpeedGradients();
        if (Yb) {
          bb.angularSpeedGradients = [];
          for (const ub of Yb) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.angularSpeedGradients.push(hb)
          }
        }
        const Sb = ub.getVelocityGradients();
        if (Sb) {
          bb.velocityGradients = [];
          for (const ub of Sb) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.velocityGradients.push(hb)
          }
        }
        const ab = ub.getDragGradients();
        if (ab) {
          bb.dragGradients = [];
          for (const ub of ab) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.dragGradients.push(hb)
          }
        }
        const Hb = ub.getEmitRateGradients();
        if (Hb) {
          bb.emitRateGradients = [];
          for (const ub of Hb) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.emitRateGradients.push(hb)
          }
        }
        const wb = ub.getStartSizeGradients();
        if (wb) {
          bb.startSizeGradients = [];
          for (const ub of wb) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.startSizeGradients.push(hb)
          }
        }
        const Zb = ub.getLifeTimeGradients();
        if (Zb) {
          bb.lifeTimeGradients = [];
          for (const ub of Zb) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.lifeTimeGradients.push(hb)
          }
        }
        const Xb = ub.getLimitVelocityGradients();
        if (Xb) {
          bb.limitVelocityGradients = [];
          for (const ub of Xb) {
            const hb = {
              gradient: ub.gradient,
              factor1: ub.factor1
            };
            void 0 !== ub.factor2 ? hb.factor2 = ub.factor2 : hb.factor2 = ub.factor1, bb.limitVelocityGradients.push(hb)
          }
          bb.limitVelocityDamping = ub.limitVelocityDamping
        }
        ub.noiseTexture && (bb.noiseTexture = ub.noiseTexture.serialize())
      }
      clone(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = {
          ...this._customWrappers
        };
        let Ob = null;
        const Gb = this._engine;
        if ((0, Nb.b)(Gb.createEffectForParticles) && null != this.customShader) {
          Ob = this.customShader;
          const bb = Ob.shaderOptions.defines.length > 0 ? Ob.shaderOptions.defines.join("\n") : "",
            ub = Gb.createEffectForParticles(Ob.shaderPath.fragmentElement, Ob.shaderOptions.uniforms, Ob.shaderOptions.samplers, bb);
          Bb[0] ? Bb[0].effect = ub : this.setCustomEffect(ub, 0)
        }
        const Ub = this.serialize(hb),
          Lb = !1 === hb && this.particleTexture ? this.particleTexture.clone() : null;
        Lb && (Ub.textureName = void 0);
        const Yb = Vu.Parse(Ub, this._scene || this._engine, this._rootUrl);
        return Yb.name = bb, Yb.customShader = Ob, Yb._customWrappers = Bb, Lb && (Yb.particleTexture = Lb), void 0 === ub && (ub = this.emitter), this.noiseTexture && (Yb.noiseTexture = this.noiseTexture.clone()), Yb.emitter = ub, this.preventAutoStart || Yb.start(), Yb
      }
    }
    Vu.BILLBOARDMODE_Y = 2, Vu.BILLBOARDMODE_ALL = 7, Vu.BILLBOARDMODE_STRETCHED = 8, Vu.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Fu = !1;
    Fu || (Fu = !0, eu._ParseParticleSystem = Vu.Parse)
  },
  41104: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      SkyMaterial: () => Kb,
      _MaxColorValueForRenderTarget: () => lb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(39488),
      Ub = hb(36720),
      Lb = hb(39724),
      Yb = hb(39795),
      Sb = hb(41056),
      ab = hb(40598),
      Hb = hb(39544),
      wb = hb(36762),
      Zb = hb(39818),
      Xb = hb(39797),
      pb = hb(39782),
      ob = hb(39773);
    class Ab extends Lb.d {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function lb(bb) {
      switch (bb) {
        case Sb.e.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Sb.e.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Kb = (() => {
      var bb;
      let ub, Lb, Sb, wb, Kb, Wb, Cb, db, rb, jb, nb, Db, xb, zb, gb, ib = Yb.b,
        vb = [],
        tb = [],
        Jb = [],
        eb = [],
        Nb = [],
        sb = [],
        Mb = [],
        mb = [],
        Ib = [],
        Pb = [],
        qb = [],
        Eb = [],
        yb = [],
        Vb = [],
        Fb = [],
        fb = [],
        kb = [],
        Tb = [],
        cb = [],
        Qb = [],
        Rb = [],
        bu = [],
        uu = [],
        hu = [],
        Bu = [],
        Ou = [],
        Gu = [],
        Uu = [],
        Lu = [],
        Yu = [];
      return bb = class extends ib {
        constructor(bb, ub) {
          super(bb, ub, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, Bb.k)(this, vb, 1), this.turbidity = ((0, Bb.k)(this, tb), (0, Bb.k)(this, Jb, 10)), this.rayleigh = ((0, Bb.k)(this, eb), (0, Bb.k)(this, Nb, 2)), this.mieCoefficient = ((0, Bb.k)(this, sb), (0, Bb.k)(this, Mb, .005)), this.mieDirectionalG = ((0, Bb.k)(this, mb), (0, Bb.k)(this, Ib, .8)), this.distance = ((0, Bb.k)(this, Pb), (0, Bb.k)(this, qb, 500)), this.inclination = ((0, Bb.k)(this, Eb), (0, Bb.k)(this, yb, .49)), this.azimuth = ((0, Bb.k)(this, Vb), (0, Bb.k)(this, Fb, .25)), this.sunPosition = ((0, Bb.k)(this, fb), (0, Bb.k)(this, kb, new Ub.YX(0, 100, 0))), this.useSunPosition = ((0, Bb.k)(this, Tb), (0, Bb.k)(this, cb, !1)), this.cameraOffset = ((0, Bb.k)(this, Qb), (0, Bb.k)(this, Rb, Ub.YX.Zero())), this.up = ((0, Bb.k)(this, bu), (0, Bb.k)(this, uu, Ub.YX.Up())), this.dithering = ((0, Bb.k)(this, hu), (0, Bb.k)(this, Bu, !1)), this.rawHdrOutput = ((0, Bb.k)(this, Ou), (0, Bb.k)(this, Gu, !1)), this.cloudiness = ((0, Bb.k)(this, Uu), (0, Bb.k)(this, Lu, 0)), this._cameraPosition = ((0, Bb.k)(this, Yu), Ub.YX.Zero()), this._skyOrientation = new Ub.Quaternion
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
        isReadyForSubMesh(ub, hb) {
          const Bb = hb._drawWrapper;
          if (this.isFrozen && Bb.effect && Bb._wasPreviouslyReady) return !0;
          hb.materialDefines || (hb.materialDefines = new Ab);
          const Ob = hb.materialDefines,
            Gb = this.ZN();
          if (this._isReadyForSubMesh(hb)) return !0;
          if ((0, ob.S)(ub, Gb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, Ob, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, ob.I)(ub, Ob, !0, !1), Ob.IMAGEPROCESSINGPOSTPROCESS !== Gb.imageProcessingConfiguration.applyByPostProcess && Ob.markAsMiscDirty(), Ob.DITHER !== this.dithering && Ob.markAsMiscDirty(), Ob.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && Ob.markAsMiscDirty(), Ob.isDirty) {
            Ob.markAsProcessed(), Gb.resetCachedMaterial();
            const ub = new Xb.c;
            Ob.FOG && ub.addFallback(1, "FOG"), Ob.IMAGEPROCESSINGPOSTPROCESS = Gb.imageProcessingConfiguration.applyByPostProcess, Ob.DITHER = this.dithering, Ob.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const Bb = [ab.e.PositionKind];
            Ob.VERTEXCOLOR && Bb.push(ab.e.ColorKind);
            const Ub = "sky",
              Lb = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, pb.d)(Lb);
            const Yb = Ob.toString();
            hb.setEffect(Gb.UX().createEffect(Ub, {
              attributes: Bb,
              uniformsNames: Lb,
              uniformBuffersNames: [],
              samplers: [],
              defines: Yb,
              fallbacks: ub,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Gb.UX()), Ob, this._materialContext)
          }
          return !(!hb.effect || !hb.effect.isReady()) && (Ob._renderId = Gb.getRenderId(), Bb._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(bb, ub, hb) {
          const Bb = this.ZN(),
            Ob = hb.materialDefines;
          if (!Ob) return;
          const Gb = hb.effect;
          if (!Gb) return;
          this._activeEffect = Gb, this.bindOnlyWorldMatrix(bb), this._activeEffect.setMatrix("viewProjection", Bb.getTransformMatrix()), this._mustRebind(Bb, Gb, hb) && ((0, pb.g)(Gb, this, Bb), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, ob.l)(Ob, Gb, Bb)), Bb.fogEnabled && ub.applyFog && Bb.fogMode !== Hb.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", Bb.getViewMatrix()), (0, ob.f)(Bb, ub, this._activeEffect, this.rawHdrOutput);
          const Lb = Bb.activeCamera;
          if (Lb) {
            const bb = Lb.getWorldMatrix();
            this._cameraPosition.x = bb.m[12], this._cameraPosition.y = bb.m[13], this._cameraPosition.z = bb.m[14], this._activeEffect.setVector3("cameraPosition", Ub.TmpVectors.YX[0].mD(this._cameraPosition).tBb(Bb.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const bb = Bb.UX()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", lb(bb?.texture?.type))
          }
          if (!this.useSunPosition) {
            const bb = Math.PI * (this.inclination - .5),
              ub = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(ub) * Math.cos(bb), this.sunPosition.y = this.distance * Math.sin(-bb), this.sunPosition.z = this.distance * Math.sin(ub) * Math.cos(bb), Ub.Quaternion.FromUnitVectorsToRef(Ub.YX.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(ub, this._activeEffect, hb)
        }
        getAnimatables() {
          return []
        }
        dispose(bb) {
          super.dispose(bb)
        }
        clone(ub) {
          return Gb.c.Clone((() => new bb(ub, this.ZN())), this)
        }
        serialize() {
          const bb = super.serialize();
          return bb.customType = "BABYLON.SkyMaterial", bb
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(ub, hb, Bb) {
          return Gb.c.Parse((() => new bb(ub.name, hb)), ub, hb, Bb)
        }
      }, (() => {
        const hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(ib[Symbol.metadata] ?? null) : void 0;
        ub = [(0, Ob.K)()], Lb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], wb = [(0, Ob.K)()], Kb = [(0, Ob.K)()], Wb = [(0, Ob.K)()], Cb = [(0, Ob.K)()], db = [(0, Ob.K)()], rb = [(0, Ob.H)()], jb = [(0, Ob.K)()], nb = [(0, Ob.H)()], Db = [(0, Ob.H)()], xb = [(0, Ob.K)()], zb = [(0, Ob.K)()], gb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: bb => "luminance" in bb,
            get: bb => bb.luminance,
            set: (bb, ub) => {
              bb.luminance = ub
            }
          },
          metadata: hb
        }, vb, tb), (0, Bb.h)(null, null, Lb, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: bb => "turbidity" in bb,
            get: bb => bb.turbidity,
            set: (bb, ub) => {
              bb.turbidity = ub
            }
          },
          metadata: hb
        }, Jb, eb), (0, Bb.h)(null, null, Sb, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: bb => "rayleigh" in bb,
            get: bb => bb.rayleigh,
            set: (bb, ub) => {
              bb.rayleigh = ub
            }
          },
          metadata: hb
        }, Nb, sb), (0, Bb.h)(null, null, wb, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: bb => "mieCoefficient" in bb,
            get: bb => bb.mieCoefficient,
            set: (bb, ub) => {
              bb.mieCoefficient = ub
            }
          },
          metadata: hb
        }, Mb, mb), (0, Bb.h)(null, null, Kb, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: bb => "mieDirectionalG" in bb,
            get: bb => bb.mieDirectionalG,
            set: (bb, ub) => {
              bb.mieDirectionalG = ub
            }
          },
          metadata: hb
        }, Ib, Pb), (0, Bb.h)(null, null, Wb, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: bb => "distance" in bb,
            get: bb => bb.distance,
            set: (bb, ub) => {
              bb.distance = ub
            }
          },
          metadata: hb
        }, qb, Eb), (0, Bb.h)(null, null, Cb, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: bb => "inclination" in bb,
            get: bb => bb.inclination,
            set: (bb, ub) => {
              bb.inclination = ub
            }
          },
          metadata: hb
        }, yb, Vb), (0, Bb.h)(null, null, db, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: bb => "azimuth" in bb,
            get: bb => bb.azimuth,
            set: (bb, ub) => {
              bb.azimuth = ub
            }
          },
          metadata: hb
        }, Fb, fb), (0, Bb.h)(null, null, rb, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: bb => "sunPosition" in bb,
            get: bb => bb.sunPosition,
            set: (bb, ub) => {
              bb.sunPosition = ub
            }
          },
          metadata: hb
        }, kb, Tb), (0, Bb.h)(null, null, jb, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSunPosition" in bb,
            get: bb => bb.useSunPosition,
            set: (bb, ub) => {
              bb.useSunPosition = ub
            }
          },
          metadata: hb
        }, cb, Qb), (0, Bb.h)(null, null, nb, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: bb => "cameraOffset" in bb,
            get: bb => bb.cameraOffset,
            set: (bb, ub) => {
              bb.cameraOffset = ub
            }
          },
          metadata: hb
        }, Rb, bu), (0, Bb.h)(null, null, Db, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: bb => "up" in bb,
            get: bb => bb.up,
            set: (bb, ub) => {
              bb.up = ub
            }
          },
          metadata: hb
        }, uu, hu), (0, Bb.h)(null, null, xb, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: bb => "dithering" in bb,
            get: bb => bb.dithering,
            set: (bb, ub) => {
              bb.dithering = ub
            }
          },
          metadata: hb
        }, Bu, Ou), (0, Bb.h)(null, null, zb, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: bb => "rawHdrOutput" in bb,
            get: bb => bb.rawHdrOutput,
            set: (bb, ub) => {
              bb.rawHdrOutput = ub
            }
          },
          metadata: hb
        }, Gu, Uu), (0, Bb.h)(null, null, gb, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: bb => "cloudiness" in bb,
            get: bb => bb.cloudiness,
            set: (bb, ub) => {
              bb.cloudiness = ub
            }
          },
          metadata: hb
        }, Lu, Yu), hb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hb
        })
      })(), bb._ShaderLoader = new Zb.d((() => [hb.e(321).then((() => hb(60645))), hb.e(314).then((() => hb(60653)))]), (() => [hb.e(338).then((() => hb(60655))), hb.e(332).then((() => hb(60661)))])), bb
    })();
    (0, wb.f)("BABYLON.SkyMaterial", Kb)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);