export const id = 269;
export const ids = [269];
export const modules = {
  40663: (mm, Tm, fm) => {
    fm.d(Tm, {
      $b: () => gm,
      $c: () => RT,
      $d: () => oT,
      Af: () => Th,
      B: () => BT,
      Bb: () => af,
      Bd: () => Xm,
      Be: () => Jf,
      Cc: () => pT,
      Cf: () => hh,
      Cg: () => qf,
      Dc: () => im,
      De: () => Yf,
      Ed: () => Gm,
      F: () => Bm,
      Fb: () => rm,
      Gb: () => hf,
      Gd: () => Hm,
      Gf: () => mh,
      Hb: () => ff,
      Hc: () => LT,
      He: () => df,
      Id: () => Pm,
      J: () => tT,
      Jf: () => fh,
      K: () => Em,
      Kb: () => OT,
      Kc: () => lm,
      Kf: () => Ah,
      Le: () => tf,
      Md: () => YT,
      Me: () => Hf,
      Nc: () => Lm,
      Nf: () => gf,
      O: () => aT,
      Ob: () => DT,
      Od: () => Dm,
      Pe: () => Cf,
      Qf: () => zf,
      Rb: () => Am,
      Rc: () => UT,
      S: () => km,
      Sc: () => AT,
      Sd: () => Rm,
      Te: () => yf,
      Tf: () => Vf,
      Vb: () => jm,
      Vc: () => ET,
      Vf: () => Wf,
      W: () => Sm,
      Wd: () => jT,
      Xe: () => Ff,
      Y: () => bm,
      Yd: () => vT,
      Ye: () => Pf,
      Yf: () => sf,
      Zb: () => IT,
      Zc: () => Zm,
      Zd: () => sm,
      Ze: () => Mf,
      _: () => uT,
      _e: () => Xf,
      ad: () => iT,
      ae: () => dT,
      ag: () => lf,
      bb: () => om,
      bc: () => Tf,
      bd: () => hT,
      bf: () => Lf,
      bg: () => Qf,
      c: () => am,
      ce: () => lT,
      dd: () => zm,
      de: () => TT,
      ec: () => em,
      eg: () => jf,
      f: () => xm,
      fb: () => um,
      fc: () => Fm,
      ff: () => Bf,
      fg: () => rf,
      gb: () => Dh,
      gd: () => Km,
      ge: () => mT,
      hf: () => uf,
      id: () => hm,
      j: () => Jm,
      jb: () => mf,
      jc: () => Wm,
      je: () => Mm,
      jf: () => wh,
      jg: () => Zf,
      kb: () => dm,
      kc: () => fT,
      lf: () => kf,
      mb: () => WT,
      mc: () => qT,
      md: () => cm,
      me: () => Qm,
      mg: () => nf,
      n: () => ym,
      oc: () => tm,
      od: () => wT,
      pd: () => qm,
      pf: () => Nf,
      q: () => pf,
      qb: () => FT,
      qd: () => Ym,
      qe: () => pm,
      qg: () => Uf,
      rb: () => Um,
      rc: () => Nm,
      rd: () => Om,
      rf: () => bf,
      sb: () => gT,
      se: () => Rf,
      sf: () => Gf,
      t: () => Df,
      tc: () => xT,
      td: () => xf,
      tg: () => Kf,
      uc: () => Vm,
      ud: () => wf,
      ug: () => vf,
      ve: () => ah,
      vf: () => ef,
      w: () => wm,
      wb: () => Cm,
      wf: () => Sf,
      x: () => MT,
      xd: () => nm,
      xf: () => xh,
      yc: () => Im,
      yg: () => Of,
      zb: () => Af,
      ze: () => If
    });
    const hm = -2147483648,
      Am = 12,
      am = 12,
      xm = 4095,
      wm = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      Dm = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      im = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      Rm = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      pm = {
        Alive: 16
      },
      Em = 32,
      om = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      Om = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      Ym = 4294967295,
      qm = 0,
      jm = 4294967295,
      Vm = 4,
      Im = 123,
      Km = -2147483648,
      Qm = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      nm = 51,
      Jm = 5,
      cm = 4294967295,
      zm = 4294967295,
      Zm = 128,
      km = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      bm = 16,
      Sm = 255,
      em = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      Nm = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      Gm = {
        Hotbar: 256,
        Drop: 257
      },
      Xm = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      Pm = {
        Rate: 0,
        Gyro: 1
      },
      Hm = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      ym = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      Cm = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      rm = {
        LookPointed: 1,
        Held: 2
      },
      sm = 3,
      lm = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      Mm = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      um = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      Bm = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      Lm = {
        Stackable: 1
      },
      tm = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      Um = {
        Detail: 1,
        RoomForOne: 2
      },
      dm = {
        HaveIngredients: 1,
        Listed: 2
      },
      gm = {
        HasOpts: 1
      },
      Wm = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      Fm = {
        Up: 1,
        Down: 2
      },
      mT = {
        TwoD: 1,
        Loop: 2
      },
      TT = {
        StopAfter: 1
      },
      fT = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      hT = {
        Pose: 1,
        Visible: 2
      },
      AT = 255,
      aT = 65535,
      xT = 255,
      wT = 65535,
      DT = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      iT = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      RT = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      pT = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      ET = 4294967295,
      oT = 4294967295,
      OT = 255,
      YT = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      qT = {
        critical: 123
      },
      jT = 4294967295,
      VT = {
        BYTES: 4,
        DE: (mm, Tm) => mm.getUint32(Tm + 0, !0)
      },
      IT = {
        BYTES: 12,
        serverId: (mm, Tm) => mm.getInt32(Tm + 0, !0),
        index: (mm, Tm) => mm.getUint32(Tm + 4, !0),
        kind: (mm, Tm) => mm.getUint16(Tm + 8, !0)
      },
      KT = {
        BYTES: 20,
        pos: (mm, Tm, fm) => mm.getInt32(Tm + 0 + 4 * fm, !0),
        actual: (mm, Tm) => mm.getUint32(Tm + 12, !0),
        dataLen: (mm, Tm) => mm.getUint32(Tm + 16, !0)
      },
      QT = {
        BYTES: 20,
        what: (mm, Tm) => mm.getUint8(Tm + 0),
        value: (mm, Tm) => mm.getInt16(Tm + 2, !0),
        pos: (mm, Tm, fm) => mm.getInt32(Tm + 4 + 4 * fm, !0),
        block: (mm, Tm) => mm.getUint32(Tm + 16, !0)
      },
      nT = {
        BYTES: 4,
        item: (mm, Tm) => mm.getUint16(Tm + 0, !0),
        slot: (mm, Tm) => mm.getUint8(Tm + 2)
      },
      JT = {
        BYTES: 16,
        target: (mm, Tm) => mm.getInt32(Tm + 0, !0),
        damage: (mm, Tm) => mm.getFloat32(Tm + 4, !0),
        distance: (mm, Tm) => mm.getFloat32(Tm + 8, !0),
        crit: (mm, Tm) => mm.getUint8(Tm + 12)
      },
      cT = {
        BYTES: 4,
        slot: (mm, Tm) => mm.getUint16(Tm + 0, !0)
      },
      zT = {
        BYTES: 20,
        what: (mm, Tm) => mm.getUint8(Tm + 0),
        value: (mm, Tm) => mm.getInt16(Tm + 2, !0),
        pos: (mm, Tm, fm) => mm.getInt32(Tm + 4 + 4 * fm, !0),
        block: (mm, Tm) => mm.getUint32(Tm + 16, !0)
      },
      ZT = {
        BYTES: 12,
        serverId: (mm, Tm) => mm.getInt32(Tm + 0, !0),
        index: (mm, Tm) => mm.getUint32(Tm + 4, !0),
        what: (mm, Tm) => mm.getUint16(Tm + 8, !0)
      },
      kT = {
        BYTES: 24,
        cx: (mm, Tm) => mm.getInt32(Tm + 0, !0),
        cy: (mm, Tm) => mm.getInt32(Tm + 4, !0),
        cz: (mm, Tm) => mm.getInt32(Tm + 8, !0),
        slot: (mm, Tm) => mm.getUint32(Tm + 12, !0),
        generation: (mm, Tm) => mm.getUint32(Tm + 16, !0),
        flags: (mm, Tm) => mm.getUint32(Tm + 20, !0)
      },
      bT = {
        BYTES: 44,
        pos: (mm, Tm, fm) => mm.getFloat64(Tm + 0 + 8 * fm, !0),
        sound: (mm, Tm) => mm.getUint16(Tm + 24, !0),
        flags: (mm, Tm) => mm.getUint16(Tm + 26, !0),
        handle: (mm, Tm) => mm.getUint32(Tm + 28, !0),
        volume: (mm, Tm) => mm.getFloat32(Tm + 32, !0),
        rate: (mm, Tm) => mm.getFloat32(Tm + 36, !0),
        refDist: (mm, Tm) => mm.getFloat32(Tm + 40, !0)
      },
      ST = {
        BYTES: 28,
        pos: (mm, Tm, fm) => mm.getFloat64(Tm + 0 + 8 * fm, !0),
        handle: (mm, Tm) => mm.getUint32(Tm + 24, !0)
      },
      eT = {
        BYTES: 16,
        handle: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        volume: (mm, Tm) => mm.getFloat32(Tm + 4, !0),
        rate: (mm, Tm) => mm.getFloat32(Tm + 8, !0),
        refDist: (mm, Tm) => mm.getFloat32(Tm + 12, !0)
      },
      NT = {
        BYTES: 12,
        handle: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        to: (mm, Tm) => mm.getFloat32(Tm + 4, !0),
        ms: (mm, Tm) => mm.getUint16(Tm + 8, !0),
        flags: (mm, Tm) => mm.getUint16(Tm + 10, !0)
      },
      GT = {
        BYTES: 4,
        handle: (mm, Tm) => mm.getUint32(Tm + 0, !0)
      },
      XT = {
        BYTES: 8,
        reason: (mm, Tm) => mm.getUint8(Tm + 0),
        code: (mm, Tm) => mm.getUint8(Tm + 1),
        version: (mm, Tm) => mm.getUint32(Tm + 4, !0)
      },
      PT = {
        BYTES: 4,
        key: (mm, Tm) => mm.getUint8(Tm + 0),
        tag: (mm, Tm) => mm.getUint8(Tm + 1)
      },
      HT = {
        BYTES: 16,
        save: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        index: (mm, Tm) => mm.getUint32(Tm + 4, !0),
        ptr: (mm, Tm) => mm.getUint32(Tm + 8, !0),
        len: (mm, Tm) => mm.getUint32(Tm + 12, !0)
      },
      yT = {
        BYTES: 16,
        save: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        kind: (mm, Tm) => mm.getUint8(Tm + 4),
        parts: (mm, Tm) => mm.getUint32(Tm + 8, !0),
        bytes: (mm, Tm) => mm.getUint32(Tm + 12, !0)
      },
      CT = {
        BYTES: 4,
        totalTicks: (mm, Tm) => mm.getUint32(Tm + 0, !0)
      },
      rT = {
        BYTES: 24,
        what: (mm, Tm) => mm.getUint8(Tm + 0),
        int: (mm, Tm) => mm.getInt32(Tm + 4, !0),
        x: (mm, Tm) => mm.getFloat64(Tm + 8, !0),
        y: (mm, Tm) => mm.getFloat64(Tm + 16, !0)
      },
      sT = {
        BYTES: 8,
        what: (mm, Tm) => mm.getUint8(Tm + 0),
        kind: (mm, Tm) => mm.getUint8(Tm + 1),
        save: (mm, Tm) => mm.getUint32(Tm + 4, !0)
      },
      lT = {
        BYTES: 4,
        Hi: (mm, Tm) => mm.getUint16(Tm + 0, !0)
      },
      MT = {
        BYTES: 360,
        eye: (mm, Tm, fm) => mm.getFloat64(Tm + 0 + 8 * fm, !0),
        localPos: (mm, Tm, fm) => mm.getFloat64(Tm + 24 + 8 * fm, !0),
        rmm: (mm, Tm, fm) => mm.getFloat64(Tm + 48 + 8 * fm, !0),
        viewProj: (mm, Tm, fm) => mm.getFloat32(Tm + 72 + 4 * fm, !0),
        origin: (mm, Tm, fm) => mm.getInt32(Tm + 136 + 4 * fm, !0),
        heading: (mm, Tm) => mm.getFloat32(Tm + 148, !0),
        pitch: (mm, Tm) => mm.getFloat32(Tm + 152, !0),
        tanHalfFovX: (mm, Tm) => mm.getFloat32(Tm + 156, !0),
        tanHalfFovY: (mm, Tm) => mm.getFloat32(Tm + 160, !0),
        viewportCss: (mm, Tm, fm) => mm.getFloat32(Tm + 164 + 4 * fm, !0),
        localVel: (mm, Tm, fm) => mm.getFloat32(Tm + 172 + 4 * fm, !0),
        actionDir: (mm, Tm, fm) => mm.getFloat32(Tm + 184 + 4 * fm, !0),
        localId: (mm, Tm) => mm.getInt32(Tm + 196, !0),
        playerFlags: (mm, Tm) => mm.getUint32(Tm + 200, !0),
        targetBlock: (mm, Tm, fm) => mm.getInt32(Tm + 204 + 4 * fm, !0),
        targetAdjacent: (mm, Tm, fm) => mm.getInt32(Tm + 216 + 4 * fm, !0),
        targetBlockId: (mm, Tm) => mm.getUint32(Tm + 228, !0),
        targetNormal: (mm, Tm, fm) => mm.getInt8(Tm + 232 + 1 * fm),
        targetFlags: (mm, Tm) => mm.getUint8(Tm + 235),
        pickedEntity: (mm, Tm) => mm.getInt32(Tm + 236, !0),
        breakingPos: (mm, Tm, fm) => mm.getInt32(Tm + 240 + 4 * fm, !0),
        breakingProgress: (mm, Tm) => mm.getFloat32(Tm + 252, !0),
        zK: (mm, Tm) => mm.getUint16(Tm + 256, !0),
        selectedSlot: (mm, Tm) => mm.getUint8(Tm + 258),
        heldFlags: (mm, Tm) => mm.getUint8(Tm + 259),
        heldAttrVersion: (mm, Tm) => mm.getUint32(Tm + 260, !0),
        inventoryVersion: (mm, Tm) => mm.getUint32(Tm + 264, !0),
        effectsVersion: (mm, Tm) => mm.getUint32(Tm + 268, !0),
        entitiesVersion: (mm, Tm) => mm.getUint32(Tm + 272, !0),
        entRenderPtr: (mm, Tm) => mm.getUint32(Tm + 276, !0),
        entCapacity: (mm, Tm) => mm.getUint32(Tm + 280, !0),
        frameMs: (mm, Tm) => mm.getFloat32(Tm + 284, !0),
        fps: (mm, Tm) => mm.getFloat32(Tm + 288, !0),
        entVisPtr: (mm, Tm) => mm.getUint32(Tm + 292, !0),
        momentumFrac: (mm, Tm) => mm.getFloat32(Tm + 296, !0),
        chunkSlotsPtr: (mm, Tm) => mm.getUint32(Tm + 300, !0),
        chunkSlotsLen: (mm, Tm) => mm.getUint32(Tm + 304, !0),
        walkThroughPtr: (mm, Tm) => mm.getUint32(Tm + 308, !0),
        walkThroughLen: (mm, Tm) => mm.getUint32(Tm + 312, !0),
        audioViewPtr: (mm, Tm) => mm.getUint32(Tm + 316, !0),
        inventoryViewPtr: (mm, Tm) => mm.getUint32(Tm + 320, !0),
        eventOverflowGen: (mm, Tm) => mm.getUint32(Tm + 324, !0),
        eventOverflowMask: (mm, Tm) => mm.getUint32(Tm + 328, !0),
        promptEntity: (mm, Tm) => mm.getInt32(Tm + 332, !0),
        replayViewPtr: (mm, Tm) => mm.getUint32(Tm + 336, !0),
        slotIcon: (mm, Tm) => mm.getUint32(Tm + 340, !0),
        localDeaths: (mm, Tm) => mm.getUint32(Tm + 344, !0),
        cameraFar: (mm, Tm) => mm.getFloat32(Tm + 348, !0),
        gliderBoostFuel: (mm, Tm) => mm.getUint32(Tm + 352, !0),
        interactLabel: (mm, Tm) => mm.getUint16(Tm + 356, !0),
        interactIcon: (mm, Tm) => mm.getUint16(Tm + 358, !0)
      },
      uT = {
        BYTES: 16,
        voxelsPtr: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        version: (mm, Tm) => mm.getUint32(Tm + 4, !0),
        generation: (mm, Tm) => mm.getUint32(Tm + 8, !0),
        ni: (mm, Tm) => mm.getUint32(Tm + 12, !0)
      },
      BT = {
        BYTES: 56,
        listener: (mm, Tm, fm) => mm.getFloat64(Tm + 0 + 8 * fm, !0),
        forward: (mm, Tm, fm) => mm.getFloat32(Tm + 24 + 4 * fm, !0),
        up: (mm, Tm, fm) => mm.getFloat32(Tm + 36 + 4 * fm, !0),
        dropped: (mm, Tm) => mm.getUint32(Tm + 48, !0),
        unfollowed: (mm, Tm) => mm.getUint32(Tm + 52, !0)
      },
      LT = {
        BYTES: 8,
        item: (mm, Tm) => mm.getUint16(Tm + 0, !0),
        amount: (mm, Tm) => mm.getUint16(Tm + 2, !0),
        attrVersion: (mm, Tm) => mm.getUint32(Tm + 4, !0)
      },
      vT = {
        BYTES: 76,
        version: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        state: (mm, Tm) => mm.getUint8(Tm + 4),
        cameraMode: (mm, Tm) => mm.getUint8(Tm + 5),
        DE: (mm, Tm) => mm.getUint32(Tm + 8, !0),
        totalTicks: (mm, Tm) => mm.getUint32(Tm + 12, !0),
        speed: (mm, Tm) => mm.getFloat32(Tm + 16, !0),
        markIn: (mm, Tm) => mm.getUint32(Tm + 20, !0),
        markOut: (mm, Tm) => mm.getUint32(Tm + 24, !0),
        editVersion: (mm, Tm) => mm.getUint32(Tm + 28, !0),
        drops: (mm, Tm, fm) => mm.getUint32(Tm + 32 + 4 * fm, !0)
      },
      tT = {
        BYTES: 6,
        flags: (mm, Tm) => mm.getUint8(Tm + 0),
        harvestType: (mm, Tm) => mm.getUint8(Tm + 1),
        harvestLevel: (mm, Tm) => mm.getUint8(Tm + 2),
        attachedTop: (mm, Tm) => mm.getUint16(Tm + 4, !0)
      },
      UT = {
        BYTES: 3,
        flags: (mm, Tm) => mm.getUint8(Tm + 0),
        harvests: (mm, Tm) => mm.getUint8(Tm + 1),
        level: (mm, Tm) => mm.getUint8(Tm + 2)
      },
      dT = {
        BYTES: 12,
        item: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        amount: (mm, Tm) => mm.getFloat64(Tm + 4, !0)
      },
      gT = {
        BYTES: 16,
        recipes: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        ingredients: (mm, Tm) => mm.getUint32(Tm + 4, !0),
        craftAllTimes: (mm, Tm) => mm.getUint32(Tm + 8, !0),
        flags: (mm, Tm) => mm.getUint32(Tm + 12, !0)
      },
      WT = {
        BYTES: 10,
        item: (mm, Tm) => mm.getUint16(Tm + 0, !0),
        recipe: (mm, Tm) => mm.getUint16(Tm + 2, !0),
        produces: (mm, Tm) => mm.getUint16(Tm + 4, !0),
        requires: (mm, Tm) => mm.getUint16(Tm + 6, !0),
        flags: (mm, Tm) => mm.getUint8(Tm + 8)
      },
      FT = {
        BYTES: 4,
        amount: (mm, Tm) => mm.getUint16(Tm + 0, !0),
        items: (mm, Tm) => mm.getUint16(Tm + 2, !0)
      },
      mf = {
        BYTES: 8,
        amount: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        item: (mm, Tm) => mm.getUint16(Tm + 4, !0),
        from: (mm, Tm) => mm.getUint16(Tm + 6, !0)
      },
      Tf = {
        BYTES: 16,
        serverId: (mm, Tm) => mm.getInt32(Tm + 0, !0),
        len: (mm, Tm) => mm.getUint32(Tm + 4, !0),
        kind: (mm, Tm) => mm.getUint16(Tm + 8, !0),
        variation: (mm, Tm) => mm.getUint16(Tm + 10, !0),
        pose: (mm, Tm) => mm.getUint8(Tm + 12),
        meta: (mm, Tm) => mm.getUint8(Tm + 13),
        mesh: (mm, Tm) => mm.getUint8(Tm + 14),
        flags: (mm, Tm) => mm.getUint8(Tm + 15)
      },
      ff = {
        BYTES: 56,
        terrainOpaque: (mm, Tm) => mm.getUint32(Tm + 0, !0),
        terrainTransparent: (mm, Tm) => mm.getUint32(Tm + 4, !0),
        terrainPack: (mm, Tm) => mm.getUint32(Tm + 8, !0),
        earthSky: (mm, Tm) => mm.getUint32(Tm + 12, !0),
        skyMeshes: (mm, Tm) => mm.getUint32(Tm + 16, !0),
        regular: (mm, Tm) => mm.getUint32(Tm + 20, !0),
        thin: (mm, Tm) => mm.getUint32(Tm + 24, !0),
        line: (mm, Tm) => mm.getUint32(Tm + 28, !0),
        text: (mm, Tm) => mm.getUint32(Tm + 32, !0),
        particles: (mm, Tm) => mm.getUint32(Tm + 36, !0),
        terrainParts: (mm, Tm) => mm.getUint32(Tm + 40, !0),
        terrainCompiling: (mm, Tm) => mm.getUint32(Tm + 44, !0),
        ringCopiesMax: (mm, Tm) => mm.getUint32(Tm + 48, !0),
        ringBusyWrites: (mm, Tm) => mm.getUint32(Tm + 52, !0)
      },
      hf = {
        BYTES: 16,
        fov: (mm, Tm) => mm.getFloat32(Tm + 0, !0),
        baseFov: (mm, Tm) => mm.getFloat32(Tm + 4, !0),
        aspect: (mm, Tm) => mm.getFloat32(Tm + 8, !0),
        bodyHeading: (mm, Tm) => mm.getFloat32(Tm + 12, !0)
      },
      Af = {
        BYTES: 32,
        eye: (mm, Tm, fm) => mm.getFloat64(Tm + 0 + 8 * fm, !0),
        heading: (mm, Tm) => mm.getFloat32(Tm + 24, !0),
        pitch: (mm, Tm) => mm.getFloat32(Tm + 28, !0)
      },
      af = {
        BYTES: 40,
        feet: (mm, Tm, fm) => mm.getFloat64(Tm + 0 + 8 * fm, !0),
        eyeHeight: (mm, Tm) => mm.getFloat32(Tm + 24, !0),
        heading: (mm, Tm) => mm.getFloat32(Tm + 28, !0),
        headingIsDrawn: (mm, Tm) => mm.getUint32(Tm + 32, !0)
      },
      xf = 32,
      wf = 63,
      Df = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function Rf(mm, Tm, fm, hm, Am) {
      var am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm, zm, Zm, km, bm, Sm;
      switch (mm) {
        case 32:
          return 4 === hm && (null === (am = Am.tickEnd) || void 0 === am || am.call(Am, VT.DE(Tm, fm)), !0);
        case 33:
          return 12 === hm && (null === (xm = Am.entitySpawned) || void 0 === xm || xm.call(Am, IT.serverId(Tm, fm), IT.index(Tm, fm), IT.kind(Tm, fm)), !0);
        case 34:
          return 12 === hm && (null === (wm = Am.entityDespawned) || void 0 === wm || wm.call(Am, IT.serverId(Tm, fm), IT.index(Tm, fm), IT.kind(Tm, fm)), !0);
        case 39:
          return !(hm < 20) && (null === (Dm = Am.changeBlockFail) || void 0 === Dm || Dm.call(Am, KT.pos(Tm, fm, 0), KT.pos(Tm, fm, 1), KT.pos(Tm, fm, 2), KT.actual(Tm, fm), KT.dataLen(Tm, fm), fm + 20, hm - 20), !0);
        case 46:
          return 0 === hm && (null === (im = Am.changeBlockFailEnd) || void 0 === im || im.call(Am), !0);
        case 48:
          return 20 === hm && (null === (Rm = Am.inventoryEvent) || void 0 === Rm || Rm.call(Am, QT.what(Tm, fm), QT.value(Tm, fm), QT.pos(Tm, fm, 0), QT.pos(Tm, fm, 1), QT.pos(Tm, fm, 2), QT.block(Tm, fm)), !0);
        case 49:
          return 4 === hm && (null === (pm = Am.heldItemChanged) || void 0 === pm || pm.call(Am, nT.item(Tm, fm), nT.slot(Tm, fm)), !0);
        case 50:
          return 16 === hm && (null === (Em = Am.shotDamage) || void 0 === Em || Em.call(Am, JT.target(Tm, fm), JT.damage(Tm, fm), JT.distance(Tm, fm), JT.crit(Tm, fm)), !0);
        case 51:
          return !(hm < 4) && (null === (om = Am.enchantOffer) || void 0 === om || om.call(Am, cT.slot(Tm, fm), fm + 4, hm - 4), !0);
        case 52:
          return !(hm < 20) && (null === (Om = Am.uiEvent) || void 0 === Om || Om.call(Am, zT.what(Tm, fm), zT.value(Tm, fm), zT.pos(Tm, fm, 0), zT.pos(Tm, fm, 1), zT.pos(Tm, fm, 2), zT.block(Tm, fm), fm + 20, hm - 20), !0);
        case 53:
          return 12 === hm && (null === (Ym = Am.entityInfoChanged) || void 0 === Ym || Ym.call(Am, ZT.serverId(Tm, fm), ZT.index(Tm, fm), ZT.what(Tm, fm)), !0);
        case 55:
          return 24 === hm && (null === (qm = Am.chunkSlot) || void 0 === qm || qm.call(Am, kT.cx(Tm, fm), kT.cy(Tm, fm), kT.cz(Tm, fm), kT.slot(Tm, fm), kT.generation(Tm, fm), kT.flags(Tm, fm)), !0);
        case 40:
          return 44 === hm && (null === (jm = Am.playSound) || void 0 === jm || jm.call(Am, bT.pos(Tm, fm, 0), bT.pos(Tm, fm, 1), bT.pos(Tm, fm, 2), bT.sound(Tm, fm), bT.flags(Tm, fm), bT.handle(Tm, fm), bT.volume(Tm, fm), bT.rate(Tm, fm), bT.refDist(Tm, fm)), !0);
        case 41:
          return 28 === hm && (null === (Vm = Am.soundPos) || void 0 === Vm || Vm.call(Am, ST.pos(Tm, fm, 0), ST.pos(Tm, fm, 1), ST.pos(Tm, fm, 2), ST.handle(Tm, fm)), !0);
        case 42:
          return 16 === hm && (null === (Im = Am.soundSet) || void 0 === Im || Im.call(Am, eT.handle(Tm, fm), eT.volume(Tm, fm), eT.rate(Tm, fm), eT.refDist(Tm, fm)), !0);
        case 43:
          return 12 === hm && (null === (Km = Am.soundFade) || void 0 === Km || Km.call(Am, NT.handle(Tm, fm), NT.to(Tm, fm), NT.ms(Tm, fm), NT.flags(Tm, fm)), !0);
        case 44:
          return 4 === hm && (null === (Qm = Am.soundStop) || void 0 === Qm || Qm.call(Am, GT.handle(Tm, fm)), !0);
        case 45:
          return 0 === hm && (null === (nm = Am.soundReset) || void 0 === nm || nm.call(Am), !0);
        case 56:
          return 8 === hm && (null === (Jm = Am.replayFailed) || void 0 === Jm || Jm.call(Am, XT.reason(Tm, fm), XT.code(Tm, fm), XT.version(Tm, fm)), !0);
        case 57:
          return !(hm < 4) && (null === (cm = Am.replayOption) || void 0 === cm || cm.call(Am, PT.key(Tm, fm), PT.tag(Tm, fm), fm + 4, hm - 4), !0);
        case 58:
          return 16 === hm && (null === (zm = Am.replayFilePart) || void 0 === zm || zm.call(Am, HT.save(Tm, fm), HT.index(Tm, fm), HT.ptr(Tm, fm), HT.len(Tm, fm)), !0);
        case 59:
          return 16 === hm && (null === (Zm = Am.replayFileReady) || void 0 === Zm || Zm.call(Am, yT.save(Tm, fm), yT.kind(Tm, fm), yT.parts(Tm, fm), yT.bytes(Tm, fm)), !0);
        case 60:
          return !(hm < 4) && (null === (km = Am.replayOpened) || void 0 === km || km.call(Am, CT.totalTicks(Tm, fm), fm + 4, hm - 4), !0);
        case 61:
          return !(hm < 24) && (null === (bm = Am.replayUiEvent) || void 0 === bm || bm.call(Am, rT.what(Tm, fm), rT.int(Tm, fm), rT.x(Tm, fm), rT.y(Tm, fm), fm + 24, hm - 24), !0);
        case 62:
          return 8 === hm && (null === (Sm = Am.recorderEvent) || void 0 === Sm || Sm.call(Am, sT.what(Tm, fm), sT.kind(Tm, fm), sT.save(Tm, fm)), !0);
        default:
          return !1
      }
    }
    const pf = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let Ef = new Uint8Array(0);

    function of(mm) {
      return Ef.buffer !== mm.buffer && (Ef = new Uint8Array(mm.buffer)), Ef
    }

    function Of(mm, Tm, fm) {
      const hm = mm.Go(66, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint8(hm + 0, fm), !0
    }

    function Yf(mm, Tm, fm) {
      const hm = mm.Go(67, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint32(hm + 0, fm, !0), !0
    }

    function qf(mm, Tm, fm) {
      const hm = mm.Go(68, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint8(hm + 0, fm), !0
    }

    function jf(mm, Tm, fm, hm) {
      const Am = mm.Go(69, Tm, 4 + hm.length);
      if (Am < 0) return !1;
      const am = mm.view;
      return am.setUint8(Am + 0, fm), of(am).set(hm, am.byteOffset + Am + 4), !0
    }

    function Vf(mm, Tm, fm, hm, Am) {
      const am = mm.Go(128, Tm, 4 + Am.length);
      if (am < 0) return !1;
      const xm = mm.view;
      return xm.setUint8(am + 0, fm), xm.setUint16(am + 2, hm, !0), of(xm).set(Am, xm.byteOffset + am + 4), !0
    }

    function If(mm, Tm, fm) {
      const hm = mm.Go(131, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setInt32(hm + 0, fm, !0), !0
    }

    function Kf(mm, Tm, fm) {
      const hm = mm.Go(132, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint32(hm + 0, fm, !0), !0
    }

    function Qf(mm, Tm, fm) {
      const hm = mm.Go(133, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint32(hm + 0, fm, !0), !0
    }

    function nf(mm, Tm, fm) {
      const hm = mm.Go(144, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint8(hm + 0, fm), !0
    }

    function Jf(mm, Tm, fm, hm, Am) {
      const am = mm.Go(145, Tm, 12);
      if (am < 0) return !1;
      const xm = mm.view;
      return xm.setInt32(am + 0, fm, !0), xm.setInt32(am + 4, hm, !0), xm.setInt32(am + 8, Am, !0), !0
    }

    function zf(mm, Tm, fm, hm) {
      const Am = mm.Go(256, Tm, 4 + hm.length);
      if (Am < 0) return !1;
      const am = mm.view;
      return am.setUint16(Am + 0, fm, !0), of(am).set(hm, am.byteOffset + Am + 4), !0
    }

    function Zf(mm, Tm, fm) {
      const hm = mm.Go(258, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint8(hm + 0, fm), !0
    }

    function kf(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
      const im = mm.Go(320, Tm, 48 + Dm.length);
      if (im < 0) return !1;
      const Rm = mm.view;
      Rm.setUint32(im + 0, fm, !0), Rm.setUint16(im + 4, hm, !0), Rm.setUint16(im + 6, Am, !0), Rm.setUint32(im + 8, am, !0);
      for (let pm = 0; pm < 3; pm++) Rm.setFloat64(im + 12 + 8 * pm, xm[pm], !0);
      for (let pm = 0; pm < 3; pm++) Rm.setFloat32(im + 36 + 4 * pm, wm[pm], !0);
      return of(Rm).set(Dm, Rm.byteOffset + im + 48), !0
    }

    function bf(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
      const im = mm.Go(321, Tm, 48 + Dm.length);
      if (im < 0) return !1;
      const Rm = mm.view;
      Rm.setUint32(im + 0, fm, !0), Rm.setInt32(im + 4, hm, !0), Rm.setUint16(im + 8, Am, !0), Rm.setUint16(im + 10, am, !0);
      for (let pm = 0; pm < 3; pm++) Rm.setFloat64(im + 12 + 8 * pm, xm[pm], !0);
      for (let pm = 0; pm < 3; pm++) Rm.setFloat32(im + 36 + 4 * pm, wm[pm], !0);
      return of(Rm).set(Dm, Rm.byteOffset + im + 48), !0
    }

    function Sf(mm, Tm, fm, hm, Am, am, xm) {
      const wm = mm.Go(322, Tm, 44 + xm.length);
      if (wm < 0) return !1;
      const Dm = mm.view;
      Dm.setUint32(wm + 0, fm, !0), Dm.setUint32(wm + 4, hm, !0);
      for (let im = 0; im < 3; im++) Dm.setFloat64(wm + 8 + 8 * im, Am[im], !0);
      for (let im = 0; im < 3; im++) Dm.setFloat32(wm + 32 + 4 * im, am[im], !0);
      return of(Dm).set(xm, Dm.byteOffset + wm + 44), !0
    }

    function ef(mm, Tm, fm) {
      const hm = mm.Go(323, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint32(hm + 0, fm, !0), !0
    }

    function Nf(mm, Tm, fm, hm, Am, am) {
      const xm = mm.Go(324, Tm, 32 + am.length);
      if (xm < 0) return !1;
      const wm = mm.view;
      wm.setUint32(xm + 0, fm, !0), wm.setUint32(xm + 4, hm, !0);
      for (let Dm = 0; Dm < 3; Dm++) wm.setFloat64(xm + 8 + 8 * Dm, Am[Dm], !0);
      return of(wm).set(am, wm.byteOffset + xm + 32), !0
    }

    function Gf(mm, Tm) {
      return !(mm.Go(325, Tm, 0) < 0)
    }

    function Xf(mm, Tm, fm, hm, Am, am) {
      const xm = mm.Go(384, Tm, 16);
      if (xm < 0) return !1;
      const wm = mm.view;
      return wm.setUint32(xm + 0, fm, !0), wm.setUint32(xm + 4, hm, !0), wm.setFloat32(xm + 8, Am, !0), wm.setFloat32(xm + 12, am, !0), !0
    }

    function Pf(mm, Tm, fm, hm, Am, am, xm) {
      const wm = mm.Go(385, Tm, 36 + xm.length);
      if (wm < 0) return !1;
      const Dm = mm.view;
      Dm.setUint32(wm + 0, fm, !0), Dm.setUint32(wm + 4, hm, !0);
      for (let im = 0; im < 3; im++) Dm.setFloat64(wm + 8 + 8 * im, Am[im], !0);
      return Dm.setUint32(wm + 32, am, !0), of(Dm).set(xm, Dm.byteOffset + wm + 36), !0
    }

    function Hf(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
      const im = mm.Go(386, Tm, 56 + Dm.length);
      if (im < 0) return !1;
      const Rm = mm.view;
      Rm.setUint32(im + 0, fm, !0), Rm.setUint8(im + 4, hm);
      for (let pm = 0; pm < 4; pm++) Rm.setFloat32(im + 8 + 4 * pm, Am[pm], !0);
      for (let pm = 0; pm < 3; pm++) Rm.setFloat64(im + 24 + 8 * pm, am[pm], !0);
      return Rm.setUint32(im + 48, xm, !0), Rm.setUint32(im + 52, wm, !0), of(Rm).set(Dm, Rm.byteOffset + im + 56), !0
    }

    function yf(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
      const im = mm.Go(387, Tm, 56);
      if (im < 0) return !1;
      const Rm = mm.view;
      Rm.setUint32(im + 0, fm, !0), Rm.setUint16(im + 4, hm, !0), Rm.setUint8(im + 6, Am);
      for (let pm = 0; pm < 3; pm++) Rm.setFloat64(im + 8 + 8 * pm, am[pm], !0);
      for (let pm = 0; pm < 2; pm++) Rm.setFloat32(im + 32 + 4 * pm, xm[pm], !0);
      Rm.setFloat32(im + 40, wm, !0);
      for (let pm = 0; pm < 3; pm++) Rm.setFloat32(im + 44 + 4 * pm, Dm[pm], !0);
      return !0
    }

    function Cf(mm, Tm, fm) {
      const hm = mm.Go(388, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint32(hm + 0, fm, !0), !0
    }

    function rf(mm, Tm, fm, hm) {
      const Am = mm.Go(389, Tm, 8);
      if (Am < 0) return !1;
      const am = mm.view;
      return am.setInt32(Am + 0, fm, !0), am.setFloat32(Am + 4, hm, !0), !0
    }

    function sf(mm, Tm, fm, hm) {
      const Am = mm.Go(390, Tm, 8);
      if (Am < 0) return !1;
      const am = mm.view;
      return am.setInt32(Am + 0, fm, !0), am.setFloat32(Am + 4, hm, !0), !0
    }

    function lf(mm, Tm, fm, hm, Am, am) {
      const xm = mm.Go(391, Tm, 12);
      if (xm < 0) return !1;
      const wm = mm.view;
      return wm.setFloat32(xm + 0, fm, !0), wm.setFloat32(xm + 4, hm, !0), wm.setUint8(xm + 8, Am), wm.setUint8(xm + 9, am), !0
    }

    function Mf(mm, Tm, fm) {
      const hm = mm.Go(392, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint32(hm + 0, fm, !0), !0
    }

    function uf(mm, Tm, fm, hm, Am) {
      const am = mm.Go(393, Tm, 12);
      if (am < 0) return !1;
      const xm = mm.view;
      return xm.setUint32(am + 0, fm, !0), xm.setUint16(am + 4, hm, !0), xm.setFloat32(am + 8, Am, !0), !0
    }

    function Bf(mm, Tm, fm, hm, Am, am, xm) {
      const wm = mm.Go(394, Tm, 36);
      if (wm < 0) return !1;
      const Dm = mm.view;
      Dm.setUint32(wm + 0, fm, !0), Dm.setUint16(wm + 4, hm, !0), Dm.setUint8(wm + 6, Am);
      for (let im = 0; im < 3; im++) Dm.setFloat64(wm + 8 + 8 * im, am[im], !0);
      return Dm.setFloat32(wm + 32, xm, !0), !0
    }

    function Lf(mm, Tm, fm) {
      const hm = mm.Go(398, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setUint32(hm + 0, fm, !0), !0
    }

    function vf(mm, Tm, fm) {
      const hm = mm.Go(448, Tm, 4);
      if (hm < 0) return !1;
      return mm.view.setFloat32(hm + 0, fm, !0), !0
    }

    function tf(mm, Tm, fm, hm) {
      const Am = mm.Go(450, Tm, 12);
      if (Am < 0) return !1;
      const am = mm.view;
      for (let xm = 0; xm < 2; xm++) am.setFloat32(Am + 0 + 4 * xm, fm[xm], !0);
      return am.setUint8(Am + 8, hm), !0
    }

    function Uf(mm, Tm, fm, hm) {
      const Am = mm.Go(452, Tm, 8);
      if (Am < 0) return !1;
      const am = mm.view;
      return am.setFloat32(Am + 0, fm, !0), am.setUint8(Am + 4, hm), !0
    }

    function df(mm, Tm, fm, hm, Am) {
      const am = mm.Go(454, Tm, 4);
      if (am < 0) return !1;
      const xm = mm.view;
      return xm.setUint8(am + 0, fm), xm.setUint8(am + 1, hm), xm.setUint8(am + 2, Am), !0
    }

    function gf(mm, Tm, fm, hm) {
      const Am = mm.Go(455, Tm, 40);
      if (Am < 0) return !1;
      const am = mm.view;
      for (let xm = 0; xm < 9; xm++) am.setInt32(Am + 0 + 4 * xm, fm[xm], !0);
      return am.setUint32(Am + 36, hm, !0), !0
    }

    function Wf(mm, Tm, fm, hm) {
      const Am = mm.Go(456, Tm, 8);
      if (Am < 0) return !1;
      const am = mm.view;
      return am.setFloat32(Am + 0, fm, !0), am.setUint8(Am + 4, hm), !0
    }

    function Ff(mm, Tm, fm, hm, Am) {
      const am = mm.Go(457, Tm, 16);
      if (am < 0) return !1;
      const xm = mm.view;
      for (let wm = 0; wm < 3; wm++) xm.setInt32(am + 0 + 4 * wm, fm[wm], !0);
      for (let wm = 0; wm < 3; wm++) xm.setInt8(am + 12 + 1 * wm, hm[wm]);
      return xm.setUint8(am + 15, Am), !0
    }

    function mh(mm, Tm, fm, hm) {
      const Am = mm.Go(530, Tm, 4 + hm.length);
      if (Am < 0) return !1;
      const am = mm.view;
      return am.setUint8(Am + 0, fm), of(am).set(hm, am.byteOffset + Am + 4), !0
    }

    function Th(mm, Tm, fm, hm, Am, am) {
      const xm = mm.Go(531, Tm, 12 + am.length);
      if (xm < 0) return !1;
      const wm = mm.view;
      return wm.setFloat32(xm + 0, fm, !0), wm.setFloat32(xm + 4, hm, !0), wm.setUint32(xm + 8, Am, !0), of(wm).set(am, wm.byteOffset + xm + 12), !0
    }

    function fh(mm, Tm, fm, hm, Am, am) {
      const xm = mm.Go(532, Tm, 12 + am.length);
      if (xm < 0) return !1;
      const wm = mm.view;
      return wm.setInt32(xm + 0, fm, !0), wm.setInt32(xm + 4, hm, !0), wm.setUint32(xm + 8, Am, !0), of(wm).set(am, wm.byteOffset + xm + 12), !0
    }

    function hh(mm, Tm, fm, hm, Am) {
      const am = mm.Go(533, Tm, 8 + Am.length);
      if (am < 0) return !1;
      const xm = mm.view;
      return xm.setInt32(am + 0, fm, !0), xm.setInt32(am + 4, hm, !0), of(xm).set(Am, xm.byteOffset + am + 8), !0
    }

    function Ah(mm, Tm) {
      return !(mm.Go(576, Tm, 0) < 0)
    }

    function ah(mm, Tm, fm, hm, Am, am) {
      const xm = mm.Go(577, Tm, 36 + am.length);
      if (xm < 0) return !1;
      const wm = mm.view;
      wm.setUint8(xm + 0, fm);
      for (let Dm = 0; Dm < 16; Dm++) wm.setUint8(xm + 4 + 1 * Dm, hm[Dm]);
      for (let Dm = 0; Dm < 16; Dm++) wm.setUint8(xm + 20 + 1 * Dm, Am[Dm]);
      return of(wm).set(am, wm.byteOffset + xm + 36), !0
    }

    function xh(mm, Tm, fm, hm) {
      const Am = mm.Go(578, Tm, 4 + hm.length);
      if (Am < 0) return !1;
      const am = mm.view;
      return am.setUint8(Am + 0, fm), of(am).set(hm, am.byteOffset + Am + 4), !0
    }

    function wh(mm, Tm, fm, hm, Am, am, xm, wm) {
      const Dm = mm.Go(579, Tm, 36);
      if (Dm < 0) return !1;
      const im = mm.view;
      return im.setFloat64(Dm + 0, fm, !0), im.setFloat64(Dm + 8, hm, !0), im.setFloat64(Dm + 16, Am, !0), im.setFloat64(Dm + 24, am, !0), im.setUint16(Dm + 32, xm, !0), im.setUint8(Dm + 34, wm), !0
    }
    class Dh {
      constructor(mm, Tm) {
        this.core = mm, this.afterCall = Tm
      }
      canModify(mm, Tm, fm) {
        const hm = this.core.Iam(mm, Tm, fm);
        return this.afterCall(), hm
      }
      terrainBlocked(mm, Tm, fm, hm, Am) {
        const am = this.core.jxm(mm, Tm, fm, hm, Am);
        return this.afterCall(), am
      }
      zN(mm, Tm, fm, hm) {
        const Am = this.core.Oo(mm, Tm, fm, hm);
        return this.afterCall(), Am
      }
      blockData(mm, Tm, fm) {
        const hm = this.core.qam(mm, Tm, fm);
        return this.afterCall(), hm
      }
      cameraSweep(mm, Tm, fm, hm, Am, am, xm) {
        const wm = this.core.qAm(mm, Tm, fm, hm, Am, am, xm);
        return this.afterCall(), wm
      }
      hasServerTarget(mm) {
        const Tm = this.core.Pam(mm);
        return this.afterCall(), Tm
      }
      entityInteractable(mm) {
        const Tm = this.core.kam(mm);
        return this.afterCall(), Tm
      }
      entityCrouching(mm) {
        const Tm = this.core.Zam(mm);
        return this.afterCall(), Tm
      }
      predictServerPosition(mm, Tm, fm, hm) {
        const Am = this.core.dam(mm, Tm, fm, hm);
        return this.afterCall(), Am
      }
      setOtherEntitySetting(mm, Tm, fm) {
        const hm = this.core.QAm(mm, Tm, fm);
        return this.afterCall(), hm
      }
      entityInfoBatch(mm) {
        const Tm = this.core.zAm(mm);
        return this.afterCall(), Tm
      }
      entityName(mm) {
        const Tm = this.core.eam(mm);
        return this.afterCall(), Tm
      }
      hasEffect(mm, Tm) {
        const fm = this.core.Xam(mm, Tm);
        return this.afterCall(), fm
      }
      scratchPtr() {
        const mm = this.core.oAm();
        return this.afterCall(), mm
      }
      invSwap(mm, Tm) {
        const fm = this.core.uam(mm, Tm);
        return this.afterCall(), fm
      }
      invMove(mm, Tm, fm) {
        const hm = this.core.sam(mm, Tm, fm);
        return this.afterCall(), hm
      }
      invQuickMove(mm, Tm, fm, hm) {
        const Am = this.core.lam(mm, Tm, fm, hm);
        return this.afterCall(), Am
      }
      invRemove(mm, Tm, fm) {
        const hm = this.core.Mam(mm, Tm, fm);
        return this.afterCall(), hm
      }
      invEnchant(mm, Tm, fm, hm, Am) {
        const am = this.core.yam(mm, Tm, fm, hm, Am);
        return this.afterCall(), am
      }
      craft(mm, Tm, fm) {
        const hm = this.core.craft(mm, Tm, fm);
        return this.afterCall(), hm
      }
      salvage(mm, Tm, fm) {
        const hm = this.core.salvage(mm, Tm, fm);
        return this.afterCall(), hm
      }
      selectSlot(mm) {
        const Tm = this.core.Txm(mm);
        return this.afterCall(), Tm
      }
      closeChest() {
        const mm = this.core.Kam();
        return this.afterCall(), mm
      }
      itemAttributesBatch(mm) {
        const Tm = this.core.cAm(mm);
        return this.afterCall(), Tm
      }
      itemNames() {
        const mm = this.core.HZ();
        return this.afterCall(), mm
      }
      blockProps() {
        const mm = this.core.Vam();
        return this.afterCall(), mm
      }
      itemProps() {
        const mm = this.core.Bam();
        return this.afterCall(), mm
      }
      salvageRecipe(mm) {
        const Tm = this.core.kAm(mm);
        return this.afterCall(), Tm
      }
      craftingView(mm, Tm, fm) {
        const hm = this.core.JAm(mm, Tm, fm);
        return this.afterCall(), hm
      }
      directorView() {
        const mm = this.core.YAm();
        return this.afterCall(), mm
      }
      directorDefaultPose() {
        const mm = this.core.jAm();
        return this.afterCall(), mm
      }
      directorEntity(mm) {
        const Tm = this.core.VAm(mm);
        return this.afterCall(), Tm
      }
      directorPose(mm, Tm, fm, hm, Am, am) {
        const xm = this.core.IAm(mm, Tm, fm, hm, Am, am);
        return this.afterCall(), xm
      }
      passTimings(mm) {
        const Tm = this.core.Uam(mm);
        return this.afterCall(), Tm
      }
      drawCensus() {
        const mm = this.core.zam();
        return this.afterCall(), mm
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);